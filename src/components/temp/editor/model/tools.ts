import { Lexer, Parser } from 'antlr4ts';

export default interface Tools {
	id: string;
	lexer: Lexer;
	parser: Parser;
	monarchDefinition: any;
}
