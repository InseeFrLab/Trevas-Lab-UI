import {
	ANTLRErrorListener,
	CharStreams,
	CommonTokenStream,
	DefaultErrorStrategy,
	Recognizer,
	Token,
} from 'antlr4ts';
import { VtlLexer } from '../grammar/vtl-2.0-insee/VtlLexer';
import { VtlParser } from '../grammar/vtl-2.0-insee/VtlParser';
import { Log } from '../../utility/log';

// @ts-ignore VALID
class ConsoleErrorListener implements ANTLRErrorListener {
	// @ts-ignore TS7006 VALID
	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		Log.info('ERROR ' + msg, 'ParserFacadeV3');
	}
}

export class Error {
	startLine: number;
	endLine: number;
	startCol: number;
	endCol: number;
	message: string;

	constructor(
		startLine: number,
		endLine: number,
		startCol: number,
		endCol: number,
		message: string
	) {
		this.startLine = startLine;
		this.endLine = endLine;
		this.startCol = startCol;
		this.endCol = endCol;
		this.message = message;
	}
}

// @ts-ignore VALID
class CollectorErrorListener implements ANTLRErrorListener {
	private errors: Error[] = [];

	constructor(errors: Error[]) {
		this.errors = errors;
	}

	// @ts-ignore TS7006
	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		let endColumn = column + 1;
		if (offendingSymbol._text !== null && offendingSymbol._text !== undefined) {
			endColumn = column + offendingSymbol._text.length;
		}
		this.errors.push(new Error(line, line, column, endColumn, msg));
	}
}

export function createLexer(input: string): VtlLexer {
	const chars = CharStreams.fromString(input);
	const lexer = new VtlLexer(chars);

	// lexer.strictMode = false;

	return lexer;
}

export function getTokens(input: string): Token[] {
	return createLexer(input).getAllTokens();
}

export function createParser(input: string) {
	const lexer = createLexer(input);

	return createParserFromLexer(lexer);
}

function createParserFromLexer(lexer: VtlLexer) {
	const tokens = new CommonTokenStream(lexer);
	return new VtlParser(tokens);
}

export function parseTreeStr(input: string) {
	const lexer = createLexer(input);
	lexer.removeErrorListeners();
	lexer.addErrorListener(new ConsoleErrorListener());

	const parser = createParserFromLexer(lexer);
	parser.removeErrorListeners();
	parser.addErrorListener(new ConsoleErrorListener());

	const tree = parser.start();

	return tree.toStringTree(parser.ruleNames);
}

class ErrorStrategy extends DefaultErrorStrategy {
	// @ts-ignore MEH
	singleTokenDeletion(recognizer: Recognizer) {
		// if (recognizer.inputStream.LA(1) == VtlParser.NL) {
		//     return null;
		// }
		return super.singleTokenDeletion(recognizer);
	}
}

export function validate(input: string): Error[] {
	let errors: Error[] = [];

	const lexer = createLexer(input);
	lexer.removeErrorListeners();
	lexer.addErrorListener(new ConsoleErrorListener());

	const parser = createParserFromLexer(lexer);
	parser.removeErrorListeners();
	parser.addErrorListener(new CollectorErrorListener(errors));
	// @ts-ignore TODO
	parser._errHandler = new ErrorStrategy();

	parser.start();
	return errors;
}
