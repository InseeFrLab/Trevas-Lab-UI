import * as EditorApi from 'monaco-editor';
import { editor, Position } from 'monaco-editor';
import { languages } from 'monaco-editor/esm/vs/editor/editor.api';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import grammar from 'raw-loader!../../grammar/vtl-2.0-insee/Vtl.g4';
import { getSuggestions as getGrammarSuggestions } from '../../grammar/vtl-2.0-insee/suggestions';
import { GrammarGraph } from '../grammar-graph/grammarGraph';
import { createLexer, createParser } from './ParserFacade';
import { TokensProvider } from './tokensProvider';
import { VocabularyPack } from './vocabularyPack';
import { VARIABLE } from './constants';
import Tools from '../model/tools';

export const getTheme = (): EditorApi.editor.IStandaloneThemeData => {
	return {
		base: 'vs',
		inherit: true,
		rules: [
			{ token: 'string', foreground: '018B03' },
			{ token: 'comment', foreground: '939393' },
			{ token: 'operator', foreground: '8B3301' },
			{ token: 'delimiter.bracket', foreground: '8B3301' },
			{ token: 'operator.special', foreground: '8B3301', fontStyle: 'bold' },
		],
		colors: {},
	};
};

export const getBracketsConfiguration = (): languages.LanguageConfiguration => {
	return {
		surroundingPairs: [
			{ open: '{', close: '}' },
			{ open: '(', close: ')' },
			{ open: '[', close: ']' },
		],
		autoClosingPairs: [
			{ open: '{', close: '}' },
			{ open: '(', close: ')' },
			{ open: '[', close: ']' },
		],
		brackets: [
			['{', '}'],
			['(', ')'],
			['[', ']'],
		],
	};
};

export const getEditorWillMount = (tools: Tools) => (variables: any) => {
	const tokensProvider: TokensProvider = new TokensProvider(tools);
	const { id } = tools;
	return (monaco: typeof EditorApi) => {
		monaco.languages.register({ id });
		monaco.languages.setMonarchTokensProvider(
			id,
			tokensProvider.monarchLanguage()
		);
		monaco.editor.defineTheme(id.replaceAll('.', '-'), getTheme());
		monaco.languages.setLanguageConfiguration(id, getBracketsConfiguration());
		monaco.languages.registerCompletionItemProvider(id, {
			provideCompletionItems: getSuggestions(tools, monaco, variables),
		});
	};
};

const buildGrammarGraph = (tools: any) => {
	const { lexer: Lexer, parser: Parser } = tools;
	const lexer = createLexer(Lexer)('');
	const parser = createParser({ Lexer, Parser })('');
	const vocabulary: VocabularyPack<
		typeof Lexer,
		typeof Parser
	> = new VocabularyPack(lexer, parser);
	const grammarGraph: GrammarGraph<
		typeof Lexer,
		typeof Parser
	> = new GrammarGraph(vocabulary, grammar);
	return grammarGraph;
};

const getSuggestions = (
	tools: any,
	monaco: typeof EditorApi,
	variables: Array<any>
): any => {
	return function (model: editor.ITextModel, position: Position) {
		const textUntilPosition = model.getValueInRange({
			startLineNumber: 1,
			startColumn: 1,
			endLineNumber: position.lineNumber,
			endColumn: position.column,
		});
		const word = model.getWordUntilPosition(position);
		const range = {
			startLineNumber: position.lineNumber,
			endLineNumber: position.lineNumber,
			startColumn: word.startColumn,
			endColumn: word.endColumn,
		};

		let uniquetext = Array.from(
			new Set(
				textUntilPosition
					.replace(/"(.*?)"/g, '')
					.replace(/[^a-zA-Z_]/g, ' ')
					.split(' ')
					.filter((w) => w !== '')
			).values()
		);
		buildGrammarGraph(tools);
		const grammarSuggestions = getGrammarSuggestions(range);
		const suggestionList: languages.CompletionItem[] | undefined =
			grammarSuggestions.length !== 0
				? grammarSuggestions
				: buildGrammarGraph(tools).suggestions();
		uniquetext = removeLanguageSyntaxFromList(uniquetext, suggestionList);
		const array = uniquetext.map((w) => {
			return {
				label: w,
				kind: monaco.languages.CompletionItemKind.Variable,
				insertText: w,
			} as languages.CompletionItem;
		});
		const vars = variables.map(({ label, name }) => ({
			label,
			kind: VARIABLE,
			insertText: name,
			range,
		}));
		const suggestions = [...suggestionList, ...array, ...vars];

		return {
			suggestions,
		};
	};

	function removeLanguageSyntaxFromList(vars: string[], suggestionList: any[]) {
		const suggestionsLabels = suggestionList.map((s) => s.label.toLowerCase());
		return vars.filter((t) => !suggestionsLabels.includes(t.toLowerCase()));
	}
};
