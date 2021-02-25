import { VtlLexer } from './VtlLexer';
import { VtlParser } from './VtlParser';
import monarchDefinition from './monarchDefinition.json';

const tools: any = {
	id: 'vtl-2.0-insee',
	lexer: VtlLexer,
	parser: VtlParser,
	monarchDefinition,
};

export default tools;
