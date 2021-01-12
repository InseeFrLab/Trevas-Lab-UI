import { Lexer, Parser } from 'antlr4ts';
import { VtlLexer } from '../grammar/vtl-2.0-insee/VtlLexer';

export const keywordRgx: RegExp = /[a-zA-Z][\w]*/;

export class VocabularyPack<L extends Lexer, P extends Parser> {
	private lexer: L;
	private parser: P;
	private readonly ruleNames: Array<string>;
	private readonly symbolicNames: Array<string | undefined>;
	private readonly literalNames: Array<string | undefined>;
	private readonly operatorNames: Array<string | undefined>;
	private readonly keywordNames: Array<string | undefined>;

	constructor(lexer: L, parser: P) {
		this.lexer = lexer;
		this.parser = parser;
		this.ruleNames = Array.from(parser.ruleNames);
		const count = lexer.vocabulary.maxTokenType;
		this.symbolicNames = new Array<string | undefined>(count);
		this.literalNames = new Array<string | undefined>(count);
		this.operatorNames = new Array<string | undefined>(count);
		this.keywordNames = new Array<string | undefined>(count);
		if (lexer instanceof VtlLexer) {
			const vtlLexer = lexer as VtlLexer;
			const vocabulary = vtlLexer.vocabulary;
			VtlLexer.ruleNames.forEach((ruleName) => {
				if (ruleName in VtlLexer) {
					const index = VtlLexer[ruleName as keyof typeof VtlLexer];
					if (
						typeof index === 'number' &&
						Number.isInteger(index) &&
						index > 0 &&
						index <= count
					) {
						this.symbolicNames[index] = ruleName;
						this.literalNames[index] = vocabulary.getLiteralName(index);
						this.operatorNames[index] = this.literalNames[index]?.replace(
							/^'+|'+$/g,
							''
						);
						this.keywordNames[index] = keywordRgx.test(
							this.operatorNames[index] ?? ''
						)
							? this.operatorNames[index]
							: undefined;
						// const operator = this.operatorNames[index];
						// if (operator && keywordRgx.test(operator)) {
						//     this.keywordNames[index] = operator;
						// }
					}
				}
			});
		}
	}

	ruleName(index: number): string | undefined {
		return this.ruleNames[index];
	}

	symbolicName(index: number): string | undefined {
		return this.symbolicNames[index];
	}

	operator(index: number): string | undefined {
		return this.operatorNames[index];
	}

	keyword(index: number): string | undefined {
		return this.keywordNames[index];
	}

	getLiteralNames() {
		return this.literalNames;
	}

	getSymbolicNames() {
		return this.symbolicNames;
	}

	isSymbolicName(name: string) {
		return this.symbolicNames.includes(name);
	}

	isRuleName(name: string) {
		return this.ruleNames.includes(name);
	}

	symbolicIndex(name: string) {
		return this.symbolicNames.indexOf(name);
	}

	hasKeyword(index: number) {
		return !!this.keywordNames[index];
	}

	hasOperator(index: number) {
		return !!this.operatorNames[index];
	}

	getRuleNames() {
		return this.ruleNames;
	}
}
