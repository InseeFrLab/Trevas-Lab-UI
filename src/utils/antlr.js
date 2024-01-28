import { InputStream, CommonTokenStream } from 'antlr4';
import { VtlLexer, VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';

class AnalyzerVisitor extends VtlVisitor {
    constructor(persistent) {
        super();
        this.persistent = persistent;
    }

    visitPersistAssignment = (ctx) => {
        this.persistent.add(ctx.varID().getText());
    };
}

export const getPersistentDatasets = (script) => {
        if (!script) return [];
        const chars = new InputStream(script);
        const lexer = new VtlLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new VtlParser(tokens);
        const pd = new Set();
        const visitor = new AnalyzerVisitor(pd);
        visitor.visit(parser.start());
        return Array.from(pd);
};