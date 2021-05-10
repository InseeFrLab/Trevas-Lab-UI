import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VtlListener } from "./VtlListener";
import { VtlVisitor } from "./VtlVisitor";
export declare class VtlParser extends Parser {
    static readonly LPAREN = 1;
    static readonly RPAREN = 2;
    static readonly QLPAREN = 3;
    static readonly QRPAREN = 4;
    static readonly GLPAREN = 5;
    static readonly GRPAREN = 6;
    static readonly EQ = 7;
    static readonly LT = 8;
    static readonly MT = 9;
    static readonly ME = 10;
    static readonly NEQ = 11;
    static readonly LE = 12;
    static readonly PLUS = 13;
    static readonly MINUS = 14;
    static readonly MUL = 15;
    static readonly DIV = 16;
    static readonly COMMA = 17;
    static readonly POINTER = 18;
    static readonly COLON = 19;
    static readonly ASSIGN = 20;
    static readonly MEMBERSHIP = 21;
    static readonly EVAL = 22;
    static readonly IF = 23;
    static readonly THEN = 24;
    static readonly ELSE = 25;
    static readonly USING = 26;
    static readonly WITH = 27;
    static readonly CURRENT_DATE = 28;
    static readonly ON = 29;
    static readonly DROP = 30;
    static readonly KEEP = 31;
    static readonly CALC = 32;
    static readonly ATTRCALC = 33;
    static readonly RENAME = 34;
    static readonly AS = 35;
    static readonly AND = 36;
    static readonly OR = 37;
    static readonly XOR = 38;
    static readonly NOT = 39;
    static readonly BETWEEN = 40;
    static readonly IN = 41;
    static readonly NOT_IN = 42;
    static readonly NULL_CONSTANT = 43;
    static readonly ISNULL = 44;
    static readonly EX = 45;
    static readonly UNION = 46;
    static readonly DIFF = 47;
    static readonly SYMDIFF = 48;
    static readonly INTERSECT = 49;
    static readonly KEYS = 50;
    static readonly INTYEAR = 51;
    static readonly INTMONTH = 52;
    static readonly INTDAY = 53;
    static readonly CHECK = 54;
    static readonly EXISTS_IN = 55;
    static readonly TO = 56;
    static readonly RETURN = 57;
    static readonly IMBALANCE = 58;
    static readonly ERRORCODE = 59;
    static readonly ALL = 60;
    static readonly AGGREGATE = 61;
    static readonly ERRORLEVEL = 62;
    static readonly ORDER = 63;
    static readonly BY = 64;
    static readonly RANK = 65;
    static readonly ASC = 66;
    static readonly DESC = 67;
    static readonly MIN = 68;
    static readonly MAX = 69;
    static readonly FIRST = 70;
    static readonly LAST = 71;
    static readonly INDEXOF = 72;
    static readonly ABS = 73;
    static readonly KEY = 74;
    static readonly LN = 75;
    static readonly LOG = 76;
    static readonly TRUNC = 77;
    static readonly ROUND = 78;
    static readonly POWER = 79;
    static readonly MOD = 80;
    static readonly LEN = 81;
    static readonly CONCAT = 82;
    static readonly TRIM = 83;
    static readonly UCASE = 84;
    static readonly LCASE = 85;
    static readonly SUBSTR = 86;
    static readonly SUM = 87;
    static readonly AVG = 88;
    static readonly MEDIAN = 89;
    static readonly COUNT = 90;
    static readonly DIMENSION = 91;
    static readonly MEASURE = 92;
    static readonly ATTRIBUTE = 93;
    static readonly FILTER = 94;
    static readonly MERGE = 95;
    static readonly EXP = 96;
    static readonly ROLE = 97;
    static readonly VIRAL = 98;
    static readonly CHARSET_MATCH = 99;
    static readonly TYPE = 100;
    static readonly NVL = 101;
    static readonly HIERARCHY = 102;
    static readonly OPTIONAL = 103;
    static readonly INVALID = 104;
    static readonly LEVENSHTEIN = 105;
    static readonly VALUE_DOMAIN = 106;
    static readonly VARIABLE = 107;
    static readonly DATA = 108;
    static readonly STRUCTURE = 109;
    static readonly DATASET = 110;
    static readonly OPERATOR = 111;
    static readonly DEFINE = 112;
    static readonly PUT_SYMBOL = 113;
    static readonly DATAPOINT = 114;
    static readonly HIERARCHICAL = 115;
    static readonly RULESET = 116;
    static readonly RULE = 117;
    static readonly END = 118;
    static readonly ALTER_DATASET = 119;
    static readonly LTRIM = 120;
    static readonly RTRIM = 121;
    static readonly INSTR = 122;
    static readonly REPLACE = 123;
    static readonly CEIL = 124;
    static readonly FLOOR = 125;
    static readonly SQRT = 126;
    static readonly ANY = 127;
    static readonly SETDIFF = 128;
    static readonly STDDEV_POP = 129;
    static readonly STDDEV_SAMP = 130;
    static readonly VAR_POP = 131;
    static readonly VAR_SAMP = 132;
    static readonly GROUP = 133;
    static readonly EXCEPT = 134;
    static readonly HAVING = 135;
    static readonly FIRST_VALUE = 136;
    static readonly LAST_VALUE = 137;
    static readonly LAG = 138;
    static readonly LEAD = 139;
    static readonly RATIO_TO_REPORT = 140;
    static readonly OVER = 141;
    static readonly PRECEDING = 142;
    static readonly FOLLOWING = 143;
    static readonly UNBOUNDED = 144;
    static readonly PARTITION = 145;
    static readonly ROWS = 146;
    static readonly RANGE = 147;
    static readonly CURRENT = 148;
    static readonly VALID = 149;
    static readonly FILL_TIME_SERIES = 150;
    static readonly FLOW_TO_STOCK = 151;
    static readonly STOCK_TO_FLOW = 152;
    static readonly TIMESHIFT = 153;
    static readonly MEASURES = 154;
    static readonly NO_MEASURES = 155;
    static readonly CONDITION = 156;
    static readonly BOOLEAN = 157;
    static readonly DATE = 158;
    static readonly TIME_PERIOD = 159;
    static readonly NUMBER = 160;
    static readonly STRING = 161;
    static readonly TIME = 162;
    static readonly INTEGER = 163;
    static readonly FLOAT = 164;
    static readonly LIST = 165;
    static readonly RECORD = 166;
    static readonly RESTRICT = 167;
    static readonly YYYY = 168;
    static readonly MM = 169;
    static readonly DD = 170;
    static readonly MAX_LENGTH = 171;
    static readonly REGEXP = 172;
    static readonly IS = 173;
    static readonly WHEN = 174;
    static readonly FROM = 175;
    static readonly AGGREGATES = 176;
    static readonly POINTS = 177;
    static readonly POINT = 178;
    static readonly TOTAL = 179;
    static readonly PARTIAL = 180;
    static readonly ALWAYS = 181;
    static readonly INNER_JOIN = 182;
    static readonly LEFT_JOIN = 183;
    static readonly CROSS_JOIN = 184;
    static readonly FULL_JOIN = 185;
    static readonly MAPS_FROM = 186;
    static readonly MAPS_TO = 187;
    static readonly MAP_TO = 188;
    static readonly MAP_FROM = 189;
    static readonly RETURNS = 190;
    static readonly PIVOT = 191;
    static readonly CUSTOMPIVOT = 192;
    static readonly UNPIVOT = 193;
    static readonly SUBSPACE = 194;
    static readonly APPLY = 195;
    static readonly CONDITIONED = 196;
    static readonly PERIOD_INDICATOR = 197;
    static readonly SINGLE = 198;
    static readonly DURATION = 199;
    static readonly TIME_AGG = 200;
    static readonly UNIT = 201;
    static readonly VALUE = 202;
    static readonly VALUEDOMAINS = 203;
    static readonly VARIABLES = 204;
    static readonly INPUT = 205;
    static readonly OUTPUT = 206;
    static readonly CAST = 207;
    static readonly RULE_PRIORITY = 208;
    static readonly DATASET_PRIORITY = 209;
    static readonly DEFAULT = 210;
    static readonly CHECK_DATAPOINT = 211;
    static readonly CHECK_HIERARCHY = 212;
    static readonly COMPUTED = 213;
    static readonly NON_NULL = 214;
    static readonly NON_ZERO = 215;
    static readonly PARTIAL_NULL = 216;
    static readonly PARTIAL_ZERO = 217;
    static readonly ALWAYS_NULL = 218;
    static readonly ALWAYS_ZERO = 219;
    static readonly COMPONENTS = 220;
    static readonly ALL_MEASURES = 221;
    static readonly SCALAR = 222;
    static readonly COMPONENT = 223;
    static readonly DATAPOINT_ON_VD = 224;
    static readonly DATAPOINT_ON_VAR = 225;
    static readonly HIERARCHICAL_ON_VD = 226;
    static readonly HIERARCHICAL_ON_VAR = 227;
    static readonly SET = 228;
    static readonly LANGUAGE = 229;
    static readonly INTEGER_CONSTANT = 230;
    static readonly NUMBER_CONSTANT = 231;
    static readonly BOOLEAN_CONSTANT = 232;
    static readonly STRING_CONSTANT = 233;
    static readonly IDENTIFIER = 234;
    static readonly WS = 235;
    static readonly EOL = 236;
    static readonly ML_COMMENT = 237;
    static readonly SL_COMMENT = 238;
    static readonly RULE_start = 0;
    static readonly RULE_statement = 1;
    static readonly RULE_expr = 2;
    static readonly RULE_functions = 3;
    static readonly RULE_datasetClause = 4;
    static readonly RULE_renameClause = 5;
    static readonly RULE_aggrClause = 6;
    static readonly RULE_filterClause = 7;
    static readonly RULE_calcClause = 8;
    static readonly RULE_keepOrDropClause = 9;
    static readonly RULE_pivotOrUnpivotClause = 10;
    static readonly RULE_customPivotClause = 11;
    static readonly RULE_subspaceClause = 12;
    static readonly RULE_joinOperators = 13;
    static readonly RULE_defOperators = 14;
    static readonly RULE_genericOperators = 15;
    static readonly RULE_parameter = 16;
    static readonly RULE_stringOperators = 17;
    static readonly RULE_numericOperators = 18;
    static readonly RULE_comparisonOperators = 19;
    static readonly RULE_timeOperators = 20;
    static readonly RULE_setOperators = 21;
    static readonly RULE_hierarchyOperators = 22;
    static readonly RULE_validationOperators = 23;
    static readonly RULE_conditionalOperators = 24;
    static readonly RULE_aggrOperatorsGrouping = 25;
    static readonly RULE_anFunction = 26;
    static readonly RULE_distanceOperators = 27;
    static readonly RULE_renameClauseItem = 28;
    static readonly RULE_aggregateClause = 29;
    static readonly RULE_aggrFunctionClause = 30;
    static readonly RULE_calcClauseItem = 31;
    static readonly RULE_subspaceClauseItem = 32;
    static readonly RULE_joinClauseWithoutUsing = 33;
    static readonly RULE_joinClause = 34;
    static readonly RULE_joinClauseItem = 35;
    static readonly RULE_joinBody = 36;
    static readonly RULE_joinApplyClause = 37;
    static readonly RULE_partitionByClause = 38;
    static readonly RULE_orderByClause = 39;
    static readonly RULE_orderByItem = 40;
    static readonly RULE_windowingClause = 41;
    static readonly RULE_signedInteger = 42;
    static readonly RULE_limitClauseItem = 43;
    static readonly RULE_groupingClause = 44;
    static readonly RULE_havingClause = 45;
    static readonly RULE_parameterItem = 46;
    static readonly RULE_outputParameterType = 47;
    static readonly RULE_outputParameterTypeComponent = 48;
    static readonly RULE_inputParameterType = 49;
    static readonly RULE_rulesetType = 50;
    static readonly RULE_scalarType = 51;
    static readonly RULE_componentType = 52;
    static readonly RULE_datasetType = 53;
    static readonly RULE_scalarSetType = 54;
    static readonly RULE_dpRuleset = 55;
    static readonly RULE_hrRuleset = 56;
    static readonly RULE_valueDomainName = 57;
    static readonly RULE_rulesetID = 58;
    static readonly RULE_rulesetSignature = 59;
    static readonly RULE_signature = 60;
    static readonly RULE_ruleClauseDatapoint = 61;
    static readonly RULE_ruleItemDatapoint = 62;
    static readonly RULE_ruleClauseHierarchical = 63;
    static readonly RULE_ruleItemHierarchical = 64;
    static readonly RULE_hierRuleSignature = 65;
    static readonly RULE_valueDomainSignature = 66;
    static readonly RULE_codeItemRelation = 67;
    static readonly RULE_codeItemRelationClause = 68;
    static readonly RULE_valueDomainValue = 69;
    static readonly RULE_scalarTypeConstraint = 70;
    static readonly RULE_compConstraint = 71;
    static readonly RULE_multModifier = 72;
    static readonly RULE_validationOutput = 73;
    static readonly RULE_validationMode = 74;
    static readonly RULE_conditionClause = 75;
    static readonly RULE_inputMode = 76;
    static readonly RULE_imbalanceExpr = 77;
    static readonly RULE_inputModeHierarchy = 78;
    static readonly RULE_outputModeHierarchy = 79;
    static readonly RULE_alias = 80;
    static readonly RULE_varID = 81;
    static readonly RULE_simpleComponentId = 82;
    static readonly RULE_componentID = 83;
    static readonly RULE_lists = 84;
    static readonly RULE_erCode = 85;
    static readonly RULE_erLevel = 86;
    static readonly RULE_comparisonOperand = 87;
    static readonly RULE_optionalExpr = 88;
    static readonly RULE_componentRole = 89;
    static readonly RULE_viralAttribute = 90;
    static readonly RULE_valueDomainID = 91;
    static readonly RULE_operatorID = 92;
    static readonly RULE_routineName = 93;
    static readonly RULE_constant = 94;
    static readonly RULE_basicScalarType = 95;
    static readonly RULE_retainType = 96;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    start(): StartContext;
    statement(): StatementContext;
    expr(): ExprContext;
    expr(_p: number): ExprContext;
    functions(): FunctionsContext;
    datasetClause(): DatasetClauseContext;
    renameClause(): RenameClauseContext;
    aggrClause(): AggrClauseContext;
    filterClause(): FilterClauseContext;
    calcClause(): CalcClauseContext;
    keepOrDropClause(): KeepOrDropClauseContext;
    pivotOrUnpivotClause(): PivotOrUnpivotClauseContext;
    customPivotClause(): CustomPivotClauseContext;
    subspaceClause(): SubspaceClauseContext;
    joinOperators(): JoinOperatorsContext;
    defOperators(): DefOperatorsContext;
    genericOperators(): GenericOperatorsContext;
    parameter(): ParameterContext;
    stringOperators(): StringOperatorsContext;
    numericOperators(): NumericOperatorsContext;
    comparisonOperators(): ComparisonOperatorsContext;
    timeOperators(): TimeOperatorsContext;
    setOperators(): SetOperatorsContext;
    hierarchyOperators(): HierarchyOperatorsContext;
    validationOperators(): ValidationOperatorsContext;
    conditionalOperators(): ConditionalOperatorsContext;
    aggrOperatorsGrouping(): AggrOperatorsGroupingContext;
    anFunction(): AnFunctionContext;
    distanceOperators(): DistanceOperatorsContext;
    renameClauseItem(): RenameClauseItemContext;
    aggregateClause(): AggregateClauseContext;
    aggrFunctionClause(): AggrFunctionClauseContext;
    calcClauseItem(): CalcClauseItemContext;
    subspaceClauseItem(): SubspaceClauseItemContext;
    joinClauseWithoutUsing(): JoinClauseWithoutUsingContext;
    joinClause(): JoinClauseContext;
    joinClauseItem(): JoinClauseItemContext;
    joinBody(): JoinBodyContext;
    joinApplyClause(): JoinApplyClauseContext;
    partitionByClause(): PartitionByClauseContext;
    orderByClause(): OrderByClauseContext;
    orderByItem(): OrderByItemContext;
    windowingClause(): WindowingClauseContext;
    signedInteger(): SignedIntegerContext;
    limitClauseItem(): LimitClauseItemContext;
    groupingClause(): GroupingClauseContext;
    havingClause(): HavingClauseContext;
    parameterItem(): ParameterItemContext;
    outputParameterType(): OutputParameterTypeContext;
    outputParameterTypeComponent(): OutputParameterTypeComponentContext;
    inputParameterType(): InputParameterTypeContext;
    rulesetType(): RulesetTypeContext;
    scalarType(): ScalarTypeContext;
    componentType(): ComponentTypeContext;
    datasetType(): DatasetTypeContext;
    scalarSetType(): ScalarSetTypeContext;
    dpRuleset(): DpRulesetContext;
    hrRuleset(): HrRulesetContext;
    valueDomainName(): ValueDomainNameContext;
    rulesetID(): RulesetIDContext;
    rulesetSignature(): RulesetSignatureContext;
    signature(): SignatureContext;
    ruleClauseDatapoint(): RuleClauseDatapointContext;
    ruleItemDatapoint(): RuleItemDatapointContext;
    ruleClauseHierarchical(): RuleClauseHierarchicalContext;
    ruleItemHierarchical(): RuleItemHierarchicalContext;
    hierRuleSignature(): HierRuleSignatureContext;
    valueDomainSignature(): ValueDomainSignatureContext;
    codeItemRelation(): CodeItemRelationContext;
    codeItemRelationClause(): CodeItemRelationClauseContext;
    valueDomainValue(): ValueDomainValueContext;
    scalarTypeConstraint(): ScalarTypeConstraintContext;
    compConstraint(): CompConstraintContext;
    multModifier(): MultModifierContext;
    validationOutput(): ValidationOutputContext;
    validationMode(): ValidationModeContext;
    conditionClause(): ConditionClauseContext;
    inputMode(): InputModeContext;
    imbalanceExpr(): ImbalanceExprContext;
    inputModeHierarchy(): InputModeHierarchyContext;
    outputModeHierarchy(): OutputModeHierarchyContext;
    alias(): AliasContext;
    varID(): VarIDContext;
    simpleComponentId(): SimpleComponentIdContext;
    componentID(): ComponentIDContext;
    lists(): ListsContext;
    erCode(): ErCodeContext;
    erLevel(): ErLevelContext;
    comparisonOperand(): ComparisonOperandContext;
    optionalExpr(): OptionalExprContext;
    componentRole(): ComponentRoleContext;
    viralAttribute(): ViralAttributeContext;
    valueDomainID(): ValueDomainIDContext;
    operatorID(): OperatorIDContext;
    routineName(): RoutineNameContext;
    constant(): ConstantContext;
    basicScalarType(): BasicScalarTypeContext;
    retainType(): RetainTypeContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expr_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class StartContext extends ParserRuleContext {
    EOF(): TerminalNode;
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    EOL(): TerminalNode[];
    EOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class StatementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: StatementContext): void;
}
export declare class TemporaryAssignmentContext extends StatementContext {
    varID(): VarIDContext;
    ASSIGN(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: StatementContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class PersistAssignmentContext extends StatementContext {
    varID(): VarIDContext;
    PUT_SYMBOL(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: StatementContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DefineExpressionContext extends StatementContext {
    defOperators(): DefOperatorsContext;
    constructor(ctx: StatementContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ExprContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExprContext): void;
}
export declare class ParenthesisExprContext extends ExprContext {
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class FunctionsExpressionContext extends ExprContext {
    functions(): FunctionsContext;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ClauseExprContext extends ExprContext {
    _dataset: ExprContext;
    _clause: DatasetClauseContext;
    QLPAREN(): TerminalNode;
    QRPAREN(): TerminalNode;
    expr(): ExprContext;
    datasetClause(): DatasetClauseContext;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class MembershipExprContext extends ExprContext {
    expr(): ExprContext;
    MEMBERSHIP(): TerminalNode;
    simpleComponentId(): SimpleComponentIdContext;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class UnaryExprContext extends ExprContext {
    _op: Token;
    _right: ExprContext;
    expr(): ExprContext;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ArithmeticExprContext extends ExprContext {
    _left: ExprContext;
    _op: Token;
    _right: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    MUL(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ArithmeticExprOrConcatContext extends ExprContext {
    _left: ExprContext;
    _op: Token;
    _right: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    CONCAT(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ComparisonExprContext extends ExprContext {
    _left: ExprContext;
    _op: ComparisonOperandContext;
    _right: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    comparisonOperand(): ComparisonOperandContext;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class InNotInExprContext extends ExprContext {
    _left: ExprContext;
    _op: Token;
    expr(): ExprContext;
    IN(): TerminalNode | undefined;
    NOT_IN(): TerminalNode | undefined;
    lists(): ListsContext | undefined;
    valueDomainID(): ValueDomainIDContext | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class BooleanExprContext extends ExprContext {
    _left: ExprContext;
    _op: Token;
    _right: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    AND(): TerminalNode | undefined;
    OR(): TerminalNode | undefined;
    XOR(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class IfExprContext extends ExprContext {
    _conditionalExpr: ExprContext;
    _thenExpr: ExprContext;
    _elseExpr: ExprContext;
    IF(): TerminalNode;
    THEN(): TerminalNode;
    ELSE(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ConstantExprContext extends ExprContext {
    constant(): ConstantContext;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class VarIdExprContext extends ExprContext {
    varID(): VarIDContext;
    constructor(ctx: ExprContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class FunctionsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionsContext): void;
}
export declare class JoinFunctionsContext extends FunctionsContext {
    joinOperators(): JoinOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class GenericFunctionsContext extends FunctionsContext {
    genericOperators(): GenericOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class StringFunctionsContext extends FunctionsContext {
    stringOperators(): StringOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class NumericFunctionsContext extends FunctionsContext {
    numericOperators(): NumericOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ComparisonFunctionsContext extends FunctionsContext {
    comparisonOperators(): ComparisonOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class TimeFunctionsContext extends FunctionsContext {
    timeOperators(): TimeOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class SetFunctionsContext extends FunctionsContext {
    setOperators(): SetOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class HierarchyFunctionsContext extends FunctionsContext {
    hierarchyOperators(): HierarchyOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ValidationFunctionsContext extends FunctionsContext {
    validationOperators(): ValidationOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ConditionalFunctionsContext extends FunctionsContext {
    conditionalOperators(): ConditionalOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class AggregateFunctionsContext extends FunctionsContext {
    aggrOperatorsGrouping(): AggrOperatorsGroupingContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class AnalyticFunctionsContext extends FunctionsContext {
    anFunction(): AnFunctionContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DistanceFunctionsContext extends FunctionsContext {
    distanceOperators(): DistanceOperatorsContext;
    constructor(ctx: FunctionsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DatasetClauseContext extends ParserRuleContext {
    renameClause(): RenameClauseContext | undefined;
    aggrClause(): AggrClauseContext | undefined;
    filterClause(): FilterClauseContext | undefined;
    calcClause(): CalcClauseContext | undefined;
    keepOrDropClause(): KeepOrDropClauseContext | undefined;
    pivotOrUnpivotClause(): PivotOrUnpivotClauseContext | undefined;
    customPivotClause(): CustomPivotClauseContext | undefined;
    subspaceClause(): SubspaceClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RenameClauseContext extends ParserRuleContext {
    RENAME(): TerminalNode;
    renameClauseItem(): RenameClauseItemContext[];
    renameClauseItem(i: number): RenameClauseItemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class AggrClauseContext extends ParserRuleContext {
    AGGREGATE(): TerminalNode;
    aggregateClause(): AggregateClauseContext;
    groupingClause(): GroupingClauseContext | undefined;
    havingClause(): HavingClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class FilterClauseContext extends ParserRuleContext {
    FILTER(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class CalcClauseContext extends ParserRuleContext {
    CALC(): TerminalNode;
    calcClauseItem(): CalcClauseItemContext[];
    calcClauseItem(i: number): CalcClauseItemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class KeepOrDropClauseContext extends ParserRuleContext {
    _op: Token;
    componentID(): ComponentIDContext[];
    componentID(i: number): ComponentIDContext;
    KEEP(): TerminalNode | undefined;
    DROP(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class PivotOrUnpivotClauseContext extends ParserRuleContext {
    _op: Token;
    _id_: ComponentIDContext;
    _mea: ComponentIDContext;
    COMMA(): TerminalNode;
    componentID(): ComponentIDContext[];
    componentID(i: number): ComponentIDContext;
    PIVOT(): TerminalNode | undefined;
    UNPIVOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class CustomPivotClauseContext extends ParserRuleContext {
    _id_: ComponentIDContext;
    _mea: ComponentIDContext;
    CUSTOMPIVOT(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    IN(): TerminalNode;
    constant(): ConstantContext[];
    constant(i: number): ConstantContext;
    componentID(): ComponentIDContext[];
    componentID(i: number): ComponentIDContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class SubspaceClauseContext extends ParserRuleContext {
    SUBSPACE(): TerminalNode;
    subspaceClauseItem(): SubspaceClauseItemContext[];
    subspaceClauseItem(i: number): SubspaceClauseItemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class JoinOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: JoinOperatorsContext): void;
}
export declare class JoinExprContext extends JoinOperatorsContext {
    _joinKeyword: Token;
    LPAREN(): TerminalNode;
    joinClause(): JoinClauseContext | undefined;
    joinBody(): JoinBodyContext;
    RPAREN(): TerminalNode;
    INNER_JOIN(): TerminalNode | undefined;
    LEFT_JOIN(): TerminalNode | undefined;
    joinClauseWithoutUsing(): JoinClauseWithoutUsingContext | undefined;
    FULL_JOIN(): TerminalNode | undefined;
    CROSS_JOIN(): TerminalNode | undefined;
    constructor(ctx: JoinOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DefOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: DefOperatorsContext): void;
}
export declare class DefOperatorContext extends DefOperatorsContext {
    DEFINE(): TerminalNode;
    OPERATOR(): TerminalNode[];
    OPERATOR(i: number): TerminalNode;
    operatorID(): OperatorIDContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    IS(): TerminalNode;
    END(): TerminalNode;
    expr(): ExprContext | undefined;
    parameterItem(): ParameterItemContext[];
    parameterItem(i: number): ParameterItemContext;
    RETURNS(): TerminalNode | undefined;
    outputParameterType(): OutputParameterTypeContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: DefOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DefDatapointRulesetContext extends DefOperatorsContext {
    DEFINE(): TerminalNode;
    DATAPOINT(): TerminalNode[];
    DATAPOINT(i: number): TerminalNode;
    RULESET(): TerminalNode[];
    RULESET(i: number): TerminalNode;
    rulesetID(): RulesetIDContext;
    LPAREN(): TerminalNode;
    rulesetSignature(): RulesetSignatureContext;
    RPAREN(): TerminalNode;
    IS(): TerminalNode;
    ruleClauseDatapoint(): RuleClauseDatapointContext;
    END(): TerminalNode;
    constructor(ctx: DefOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DefHierarchicalContext extends DefOperatorsContext {
    DEFINE(): TerminalNode;
    HIERARCHICAL(): TerminalNode[];
    HIERARCHICAL(i: number): TerminalNode;
    RULESET(): TerminalNode[];
    RULESET(i: number): TerminalNode;
    rulesetID(): RulesetIDContext;
    LPAREN(): TerminalNode;
    hierRuleSignature(): HierRuleSignatureContext;
    RPAREN(): TerminalNode;
    IS(): TerminalNode;
    ruleClauseHierarchical(): RuleClauseHierarchicalContext;
    END(): TerminalNode;
    constructor(ctx: DefOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class GenericOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: GenericOperatorsContext): void;
}
export declare class CallDatasetContext extends GenericOperatorsContext {
    operatorID(): OperatorIDContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    parameter(): ParameterContext[];
    parameter(i: number): ParameterContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: GenericOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class EvalAtomContext extends GenericOperatorsContext {
    EVAL(): TerminalNode;
    LPAREN(): TerminalNode[];
    LPAREN(i: number): TerminalNode;
    routineName(): RoutineNameContext;
    RPAREN(): TerminalNode[];
    RPAREN(i: number): TerminalNode;
    varID(): VarIDContext[];
    varID(i: number): VarIDContext;
    constant(): ConstantContext[];
    constant(i: number): ConstantContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    LANGUAGE(): TerminalNode | undefined;
    STRING_CONSTANT(): TerminalNode | undefined;
    RETURNS(): TerminalNode | undefined;
    datasetType(): DatasetTypeContext | undefined;
    constructor(ctx: GenericOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class CastExprDatasetContext extends GenericOperatorsContext {
    CAST(): TerminalNode;
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    basicScalarType(): BasicScalarTypeContext | undefined;
    valueDomainName(): ValueDomainNameContext | undefined;
    STRING_CONSTANT(): TerminalNode | undefined;
    constructor(ctx: GenericOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ParameterContext extends ParserRuleContext {
    varID(): VarIDContext | undefined;
    constant(): ConstantContext | undefined;
    OPTIONAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class StringOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: StringOperatorsContext): void;
}
export declare class UnaryStringFunctionContext extends StringOperatorsContext {
    _op: Token;
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    TRIM(): TerminalNode | undefined;
    LTRIM(): TerminalNode | undefined;
    RTRIM(): TerminalNode | undefined;
    UCASE(): TerminalNode | undefined;
    LCASE(): TerminalNode | undefined;
    LEN(): TerminalNode | undefined;
    constructor(ctx: StringOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class SubstrAtomContext extends StringOperatorsContext {
    _startParameter: OptionalExprContext;
    _endParameter: OptionalExprContext;
    SUBSTR(): TerminalNode;
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    optionalExpr(): OptionalExprContext[];
    optionalExpr(i: number): OptionalExprContext;
    constructor(ctx: StringOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ReplaceAtomContext extends StringOperatorsContext {
    _param: ExprContext;
    REPLACE(): TerminalNode;
    LPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    optionalExpr(): OptionalExprContext | undefined;
    constructor(ctx: StringOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class InstrAtomContext extends StringOperatorsContext {
    _pattern: ExprContext;
    _startParameter: OptionalExprContext;
    _occurrenceParameter: OptionalExprContext;
    INSTR(): TerminalNode;
    LPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    optionalExpr(): OptionalExprContext[];
    optionalExpr(i: number): OptionalExprContext;
    constructor(ctx: StringOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class NumericOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: NumericOperatorsContext): void;
}
export declare class UnaryNumericContext extends NumericOperatorsContext {
    _op: Token;
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    CEIL(): TerminalNode | undefined;
    FLOOR(): TerminalNode | undefined;
    ABS(): TerminalNode | undefined;
    EXP(): TerminalNode | undefined;
    LN(): TerminalNode | undefined;
    SQRT(): TerminalNode | undefined;
    constructor(ctx: NumericOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class UnaryWithOptionalNumericContext extends NumericOperatorsContext {
    _op: Token;
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    ROUND(): TerminalNode | undefined;
    TRUNC(): TerminalNode | undefined;
    COMMA(): TerminalNode | undefined;
    optionalExpr(): OptionalExprContext | undefined;
    constructor(ctx: NumericOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class BinaryNumericContext extends NumericOperatorsContext {
    _op: Token;
    _left: ExprContext;
    _right: ExprContext;
    LPAREN(): TerminalNode;
    COMMA(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    MOD(): TerminalNode | undefined;
    POWER(): TerminalNode | undefined;
    LOG(): TerminalNode | undefined;
    constructor(ctx: NumericOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ComparisonOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ComparisonOperatorsContext): void;
}
export declare class BetweenAtomContext extends ComparisonOperatorsContext {
    _op: ExprContext;
    _from_: ExprContext;
    _to_: ExprContext;
    BETWEEN(): TerminalNode;
    LPAREN(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(ctx: ComparisonOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class CharsetMatchAtomContext extends ComparisonOperatorsContext {
    _op: ExprContext;
    _pattern: ExprContext;
    CHARSET_MATCH(): TerminalNode;
    LPAREN(): TerminalNode;
    COMMA(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(ctx: ComparisonOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class IsNullAtomContext extends ComparisonOperatorsContext {
    ISNULL(): TerminalNode;
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    constructor(ctx: ComparisonOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ExistInAtomContext extends ComparisonOperatorsContext {
    _left: ExprContext;
    _right: ExprContext;
    EXISTS_IN(): TerminalNode;
    LPAREN(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    retainType(): RetainTypeContext | undefined;
    constructor(ctx: ComparisonOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class TimeOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TimeOperatorsContext): void;
}
export declare class PeriodAtomContext extends TimeOperatorsContext {
    PERIOD_INDICATOR(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext | undefined;
    constructor(ctx: TimeOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class FillTimeAtomContext extends TimeOperatorsContext {
    FILL_TIME_SERIES(): TerminalNode;
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    COMMA(): TerminalNode | undefined;
    SINGLE(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    constructor(ctx: TimeOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class FlowAtomContext extends TimeOperatorsContext {
    _op: Token;
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    FLOW_TO_STOCK(): TerminalNode | undefined;
    STOCK_TO_FLOW(): TerminalNode | undefined;
    constructor(ctx: TimeOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class TimeShiftAtomContext extends TimeOperatorsContext {
    TIMESHIFT(): TerminalNode;
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    COMMA(): TerminalNode;
    signedInteger(): SignedIntegerContext;
    RPAREN(): TerminalNode;
    constructor(ctx: TimeOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class TimeAggAtomContext extends TimeOperatorsContext {
    _periodIndTo: Token;
    _periodIndFrom: Token;
    _op: OptionalExprContext;
    TIME_AGG(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    STRING_CONSTANT(): TerminalNode[];
    STRING_CONSTANT(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    optionalExpr(): OptionalExprContext | undefined;
    FIRST(): TerminalNode | undefined;
    LAST(): TerminalNode | undefined;
    OPTIONAL(): TerminalNode | undefined;
    constructor(ctx: TimeOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class CurrentDateAtomContext extends TimeOperatorsContext {
    CURRENT_DATE(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    constructor(ctx: TimeOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class SetOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SetOperatorsContext): void;
}
export declare class UnionAtomContext extends SetOperatorsContext {
    _left: ExprContext;
    UNION(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: SetOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class IntersectAtomContext extends SetOperatorsContext {
    _left: ExprContext;
    INTERSECT(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: SetOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class SetOrSYmDiffAtomContext extends SetOperatorsContext {
    _op: Token;
    _left: ExprContext;
    _right: ExprContext;
    LPAREN(): TerminalNode;
    COMMA(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    SETDIFF(): TerminalNode | undefined;
    SYMDIFF(): TerminalNode | undefined;
    constructor(ctx: SetOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class HierarchyOperatorsContext extends ParserRuleContext {
    _op: ExprContext;
    _hrName: Token;
    _ruleComponent: ComponentIDContext;
    HIERARCHY(): TerminalNode;
    LPAREN(): TerminalNode;
    COMMA(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext;
    IDENTIFIER(): TerminalNode;
    conditionClause(): ConditionClauseContext | undefined;
    RULE(): TerminalNode | undefined;
    validationMode(): ValidationModeContext | undefined;
    inputModeHierarchy(): InputModeHierarchyContext | undefined;
    outputModeHierarchy(): OutputModeHierarchyContext | undefined;
    componentID(): ComponentIDContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ValidationOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ValidationOperatorsContext): void;
}
export declare class ValidateDPrulesetContext extends ValidationOperatorsContext {
    _op: ExprContext;
    _dpName: Token;
    CHECK_DATAPOINT(): TerminalNode;
    LPAREN(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext;
    IDENTIFIER(): TerminalNode;
    COMPONENTS(): TerminalNode | undefined;
    componentID(): ComponentIDContext[];
    componentID(i: number): ComponentIDContext;
    validationOutput(): ValidationOutputContext | undefined;
    constructor(ctx: ValidationOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ValidateHRrulesetContext extends ValidationOperatorsContext {
    _op: ExprContext;
    _hrName: Token;
    CHECK_HIERARCHY(): TerminalNode;
    LPAREN(): TerminalNode;
    COMMA(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext;
    IDENTIFIER(): TerminalNode;
    conditionClause(): ConditionClauseContext | undefined;
    RULE(): TerminalNode | undefined;
    componentID(): ComponentIDContext | undefined;
    validationMode(): ValidationModeContext | undefined;
    inputMode(): InputModeContext | undefined;
    validationOutput(): ValidationOutputContext | undefined;
    constructor(ctx: ValidationOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ValidationSimpleContext extends ValidationOperatorsContext {
    _op: ExprContext;
    _codeErr: ErCodeContext;
    _levelCode: ErLevelContext;
    _output: Token;
    CHECK(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext;
    imbalanceExpr(): ImbalanceExprContext | undefined;
    erCode(): ErCodeContext | undefined;
    erLevel(): ErLevelContext | undefined;
    INVALID(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    constructor(ctx: ValidationOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ConditionalOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ConditionalOperatorsContext): void;
}
export declare class NvlAtomContext extends ConditionalOperatorsContext {
    _left: ExprContext;
    _right: ExprContext;
    NVL(): TerminalNode;
    LPAREN(): TerminalNode;
    COMMA(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(ctx: ConditionalOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class AggrOperatorsGroupingContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AggrOperatorsGroupingContext): void;
}
export declare class AggrDatasetContext extends AggrOperatorsGroupingContext {
    _op: Token;
    LPAREN(): TerminalNode;
    expr(): ExprContext;
    RPAREN(): TerminalNode;
    SUM(): TerminalNode | undefined;
    AVG(): TerminalNode | undefined;
    COUNT(): TerminalNode | undefined;
    MEDIAN(): TerminalNode | undefined;
    MIN(): TerminalNode | undefined;
    MAX(): TerminalNode | undefined;
    STDDEV_POP(): TerminalNode | undefined;
    STDDEV_SAMP(): TerminalNode | undefined;
    VAR_POP(): TerminalNode | undefined;
    VAR_SAMP(): TerminalNode | undefined;
    groupingClause(): GroupingClauseContext | undefined;
    havingClause(): HavingClauseContext | undefined;
    constructor(ctx: AggrOperatorsGroupingContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class AnFunctionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AnFunctionContext): void;
}
export declare class AnSimpleFunctionContext extends AnFunctionContext {
    _op: Token;
    _partition: PartitionByClauseContext;
    _orderBy: OrderByClauseContext;
    _windowing: WindowingClauseContext;
    LPAREN(): TerminalNode[];
    LPAREN(i: number): TerminalNode;
    expr(): ExprContext;
    OVER(): TerminalNode;
    RPAREN(): TerminalNode[];
    RPAREN(i: number): TerminalNode;
    SUM(): TerminalNode | undefined;
    AVG(): TerminalNode | undefined;
    COUNT(): TerminalNode | undefined;
    MEDIAN(): TerminalNode | undefined;
    MIN(): TerminalNode | undefined;
    MAX(): TerminalNode | undefined;
    STDDEV_POP(): TerminalNode | undefined;
    STDDEV_SAMP(): TerminalNode | undefined;
    VAR_POP(): TerminalNode | undefined;
    VAR_SAMP(): TerminalNode | undefined;
    FIRST_VALUE(): TerminalNode | undefined;
    LAST_VALUE(): TerminalNode | undefined;
    partitionByClause(): PartitionByClauseContext | undefined;
    orderByClause(): OrderByClauseContext | undefined;
    windowingClause(): WindowingClauseContext | undefined;
    constructor(ctx: AnFunctionContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class LagOrLeadAnContext extends AnFunctionContext {
    _op: Token;
    _offet: SignedIntegerContext;
    _defaultValue: ConstantContext;
    _partition: PartitionByClauseContext;
    _orderBy: OrderByClauseContext;
    LPAREN(): TerminalNode[];
    LPAREN(i: number): TerminalNode;
    expr(): ExprContext;
    OVER(): TerminalNode;
    RPAREN(): TerminalNode[];
    RPAREN(i: number): TerminalNode;
    LAG(): TerminalNode | undefined;
    LEAD(): TerminalNode | undefined;
    COMMA(): TerminalNode | undefined;
    orderByClause(): OrderByClauseContext | undefined;
    signedInteger(): SignedIntegerContext | undefined;
    partitionByClause(): PartitionByClauseContext | undefined;
    constant(): ConstantContext | undefined;
    constructor(ctx: AnFunctionContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RatioToReportAnContext extends AnFunctionContext {
    _op: Token;
    _partition: PartitionByClauseContext;
    LPAREN(): TerminalNode[];
    LPAREN(i: number): TerminalNode;
    expr(): ExprContext;
    OVER(): TerminalNode;
    RPAREN(): TerminalNode[];
    RPAREN(i: number): TerminalNode;
    RATIO_TO_REPORT(): TerminalNode;
    partitionByClause(): PartitionByClauseContext | undefined;
    constructor(ctx: AnFunctionContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DistanceOperatorsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: DistanceOperatorsContext): void;
}
export declare class LevenshteinAtomContext extends DistanceOperatorsContext {
    _left: ExprContext;
    _right: ExprContext;
    LEVENSHTEIN(): TerminalNode;
    LPAREN(): TerminalNode;
    COMMA(): TerminalNode;
    RPAREN(): TerminalNode;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(ctx: DistanceOperatorsContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RenameClauseItemContext extends ParserRuleContext {
    _fromName: ComponentIDContext;
    _toName: ComponentIDContext;
    TO(): TerminalNode;
    componentID(): ComponentIDContext[];
    componentID(i: number): ComponentIDContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class AggregateClauseContext extends ParserRuleContext {
    aggrFunctionClause(): AggrFunctionClauseContext[];
    aggrFunctionClause(i: number): AggrFunctionClauseContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class AggrFunctionClauseContext extends ParserRuleContext {
    componentID(): ComponentIDContext;
    ASSIGN(): TerminalNode;
    aggrOperatorsGrouping(): AggrOperatorsGroupingContext;
    componentRole(): ComponentRoleContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class CalcClauseItemContext extends ParserRuleContext {
    componentID(): ComponentIDContext;
    ASSIGN(): TerminalNode;
    expr(): ExprContext;
    componentRole(): ComponentRoleContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class SubspaceClauseItemContext extends ParserRuleContext {
    componentID(): ComponentIDContext;
    EQ(): TerminalNode;
    constant(): ConstantContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class JoinClauseWithoutUsingContext extends ParserRuleContext {
    joinClauseItem(): JoinClauseItemContext[];
    joinClauseItem(i: number): JoinClauseItemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class JoinClauseContext extends ParserRuleContext {
    joinClauseItem(): JoinClauseItemContext[];
    joinClauseItem(i: number): JoinClauseItemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    USING(): TerminalNode | undefined;
    componentID(): ComponentIDContext[];
    componentID(i: number): ComponentIDContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class JoinClauseItemContext extends ParserRuleContext {
    expr(): ExprContext;
    AS(): TerminalNode | undefined;
    alias(): AliasContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class JoinBodyContext extends ParserRuleContext {
    filterClause(): FilterClauseContext | undefined;
    calcClause(): CalcClauseContext | undefined;
    joinApplyClause(): JoinApplyClauseContext | undefined;
    aggrClause(): AggrClauseContext | undefined;
    keepOrDropClause(): KeepOrDropClauseContext | undefined;
    renameClause(): RenameClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class JoinApplyClauseContext extends ParserRuleContext {
    APPLY(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class PartitionByClauseContext extends ParserRuleContext {
    PARTITION(): TerminalNode;
    BY(): TerminalNode;
    componentID(): ComponentIDContext[];
    componentID(i: number): ComponentIDContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class OrderByClauseContext extends ParserRuleContext {
    ORDER(): TerminalNode;
    BY(): TerminalNode;
    orderByItem(): OrderByItemContext[];
    orderByItem(i: number): OrderByItemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class OrderByItemContext extends ParserRuleContext {
    componentID(): ComponentIDContext;
    ASC(): TerminalNode | undefined;
    DESC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class WindowingClauseContext extends ParserRuleContext {
    _from_: LimitClauseItemContext;
    _to_: LimitClauseItemContext;
    BETWEEN(): TerminalNode;
    AND(): TerminalNode;
    limitClauseItem(): LimitClauseItemContext[];
    limitClauseItem(i: number): LimitClauseItemContext;
    RANGE(): TerminalNode | undefined;
    DATA(): TerminalNode | undefined;
    POINTS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class SignedIntegerContext extends ParserRuleContext {
    INTEGER_CONSTANT(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class LimitClauseItemContext extends ParserRuleContext {
    INTEGER_CONSTANT(): TerminalNode | undefined;
    PRECEDING(): TerminalNode | undefined;
    FOLLOWING(): TerminalNode | undefined;
    CURRENT(): TerminalNode | undefined;
    DATA(): TerminalNode | undefined;
    POINT(): TerminalNode | undefined;
    UNBOUNDED(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class GroupingClauseContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: GroupingClauseContext): void;
}
export declare class GroupByOrExceptContext extends GroupingClauseContext {
    _op: Token;
    GROUP(): TerminalNode;
    componentID(): ComponentIDContext[];
    componentID(i: number): ComponentIDContext;
    BY(): TerminalNode | undefined;
    EXCEPT(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: GroupingClauseContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class GroupAllContext extends GroupingClauseContext {
    GROUP(): TerminalNode;
    ALL(): TerminalNode;
    expr(): ExprContext;
    constructor(ctx: GroupingClauseContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class HavingClauseContext extends ParserRuleContext {
    HAVING(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ParameterItemContext extends ParserRuleContext {
    varID(): VarIDContext;
    inputParameterType(): InputParameterTypeContext;
    DEFAULT(): TerminalNode | undefined;
    constant(): ConstantContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class OutputParameterTypeContext extends ParserRuleContext {
    scalarType(): ScalarTypeContext | undefined;
    datasetType(): DatasetTypeContext | undefined;
    componentType(): ComponentTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class OutputParameterTypeComponentContext extends ParserRuleContext {
    componentType(): ComponentTypeContext | undefined;
    scalarType(): ScalarTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class InputParameterTypeContext extends ParserRuleContext {
    scalarType(): ScalarTypeContext | undefined;
    datasetType(): DatasetTypeContext | undefined;
    scalarSetType(): ScalarSetTypeContext | undefined;
    rulesetType(): RulesetTypeContext | undefined;
    componentType(): ComponentTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RulesetTypeContext extends ParserRuleContext {
    RULESET(): TerminalNode | undefined;
    dpRuleset(): DpRulesetContext | undefined;
    hrRuleset(): HrRulesetContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ScalarTypeContext extends ParserRuleContext {
    basicScalarType(): BasicScalarTypeContext | undefined;
    valueDomainName(): ValueDomainNameContext | undefined;
    scalarTypeConstraint(): ScalarTypeConstraintContext | undefined;
    NULL_CONSTANT(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ComponentTypeContext extends ParserRuleContext {
    componentRole(): ComponentRoleContext;
    LT(): TerminalNode | undefined;
    scalarType(): ScalarTypeContext | undefined;
    MT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DatasetTypeContext extends ParserRuleContext {
    DATASET(): TerminalNode;
    GLPAREN(): TerminalNode | undefined;
    compConstraint(): CompConstraintContext[];
    compConstraint(i: number): CompConstraintContext;
    GRPAREN(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ScalarSetTypeContext extends ParserRuleContext {
    SET(): TerminalNode;
    LT(): TerminalNode | undefined;
    scalarType(): ScalarTypeContext | undefined;
    MT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DpRulesetContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: DpRulesetContext): void;
}
export declare class DataPointContext extends DpRulesetContext {
    DATAPOINT(): TerminalNode;
    constructor(ctx: DpRulesetContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DataPointVdContext extends DpRulesetContext {
    DATAPOINT_ON_VD(): TerminalNode;
    GLPAREN(): TerminalNode | undefined;
    valueDomainName(): ValueDomainNameContext[];
    valueDomainName(i: number): ValueDomainNameContext;
    GRPAREN(): TerminalNode | undefined;
    MUL(): TerminalNode[];
    MUL(i: number): TerminalNode;
    constructor(ctx: DpRulesetContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class DataPointVarContext extends DpRulesetContext {
    DATAPOINT_ON_VAR(): TerminalNode;
    GLPAREN(): TerminalNode | undefined;
    varID(): VarIDContext[];
    varID(i: number): VarIDContext;
    GRPAREN(): TerminalNode | undefined;
    MUL(): TerminalNode[];
    MUL(i: number): TerminalNode;
    constructor(ctx: DpRulesetContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class HrRulesetContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: HrRulesetContext): void;
}
export declare class HrRulesetTypeContext extends HrRulesetContext {
    HIERARCHICAL(): TerminalNode;
    constructor(ctx: HrRulesetContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class HrRulesetVdTypeContext extends HrRulesetContext {
    _vdName: Token;
    HIERARCHICAL_ON_VD(): TerminalNode;
    GLPAREN(): TerminalNode | undefined;
    GRPAREN(): TerminalNode | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    LPAREN(): TerminalNode | undefined;
    valueDomainName(): ValueDomainNameContext[];
    valueDomainName(i: number): ValueDomainNameContext;
    RPAREN(): TerminalNode | undefined;
    MUL(): TerminalNode[];
    MUL(i: number): TerminalNode;
    constructor(ctx: HrRulesetContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class HrRulesetVarTypeContext extends HrRulesetContext {
    _varName: VarIDContext;
    HIERARCHICAL_ON_VAR(): TerminalNode;
    GLPAREN(): TerminalNode | undefined;
    GRPAREN(): TerminalNode | undefined;
    varID(): VarIDContext[];
    varID(i: number): VarIDContext;
    LPAREN(): TerminalNode | undefined;
    RPAREN(): TerminalNode | undefined;
    MUL(): TerminalNode[];
    MUL(i: number): TerminalNode;
    constructor(ctx: HrRulesetContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ValueDomainNameContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RulesetIDContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RulesetSignatureContext extends ParserRuleContext {
    signature(): SignatureContext[];
    signature(i: number): SignatureContext;
    VALUE_DOMAIN(): TerminalNode | undefined;
    VARIABLE(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class SignatureContext extends ParserRuleContext {
    varID(): VarIDContext;
    AS(): TerminalNode | undefined;
    alias(): AliasContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RuleClauseDatapointContext extends ParserRuleContext {
    ruleItemDatapoint(): RuleItemDatapointContext[];
    ruleItemDatapoint(i: number): RuleItemDatapointContext;
    EOL(): TerminalNode[];
    EOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RuleItemDatapointContext extends ParserRuleContext {
    _ruleName: Token;
    _antecedentContiditon: ExprContext;
    _consequentCondition: ExprContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    COLON(): TerminalNode | undefined;
    WHEN(): TerminalNode | undefined;
    THEN(): TerminalNode | undefined;
    erCode(): ErCodeContext | undefined;
    erLevel(): ErLevelContext | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RuleClauseHierarchicalContext extends ParserRuleContext {
    ruleItemHierarchical(): RuleItemHierarchicalContext[];
    ruleItemHierarchical(i: number): RuleItemHierarchicalContext;
    EOL(): TerminalNode[];
    EOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RuleItemHierarchicalContext extends ParserRuleContext {
    _ruleName: Token;
    codeItemRelation(): CodeItemRelationContext;
    COLON(): TerminalNode | undefined;
    erCode(): ErCodeContext | undefined;
    erLevel(): ErLevelContext | undefined;
    IDENTIFIER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class HierRuleSignatureContext extends ParserRuleContext {
    RULE(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    VALUE_DOMAIN(): TerminalNode | undefined;
    VARIABLE(): TerminalNode | undefined;
    CONDITION(): TerminalNode | undefined;
    valueDomainSignature(): ValueDomainSignatureContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ValueDomainSignatureContext extends ParserRuleContext {
    signature(): SignatureContext[];
    signature(i: number): SignatureContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class CodeItemRelationContext extends ParserRuleContext {
    _codetemRef: ValueDomainValueContext;
    codeItemRelationClause(): CodeItemRelationClauseContext[];
    codeItemRelationClause(i: number): CodeItemRelationClauseContext;
    valueDomainValue(): ValueDomainValueContext;
    WHEN(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    THEN(): TerminalNode | undefined;
    comparisonOperand(): ComparisonOperandContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class CodeItemRelationClauseContext extends ParserRuleContext {
    _opAdd: Token;
    _rightCodeItem: ValueDomainValueContext;
    _rightCondition: ExprContext;
    valueDomainValue(): ValueDomainValueContext;
    QLPAREN(): TerminalNode | undefined;
    QRPAREN(): TerminalNode | undefined;
    expr(): ExprContext | undefined;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ValueDomainValueContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode | undefined;
    INTEGER_CONSTANT(): TerminalNode | undefined;
    NUMBER_CONSTANT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ScalarTypeConstraintContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ScalarTypeConstraintContext): void;
}
export declare class ConditionConstraintContext extends ScalarTypeConstraintContext {
    QLPAREN(): TerminalNode;
    expr(): ExprContext;
    QRPAREN(): TerminalNode;
    constructor(ctx: ScalarTypeConstraintContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RangeConstraintContext extends ScalarTypeConstraintContext {
    GLPAREN(): TerminalNode;
    constant(): ConstantContext[];
    constant(i: number): ConstantContext;
    GRPAREN(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ScalarTypeConstraintContext);
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class CompConstraintContext extends ParserRuleContext {
    componentType(): ComponentTypeContext;
    componentID(): ComponentIDContext | undefined;
    multModifier(): MultModifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class MultModifierContext extends ParserRuleContext {
    OPTIONAL(): TerminalNode;
    PLUS(): TerminalNode | undefined;
    MUL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ValidationOutputContext extends ParserRuleContext {
    INVALID(): TerminalNode | undefined;
    ALL_MEASURES(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ValidationModeContext extends ParserRuleContext {
    NON_NULL(): TerminalNode | undefined;
    NON_ZERO(): TerminalNode | undefined;
    PARTIAL_NULL(): TerminalNode | undefined;
    PARTIAL_ZERO(): TerminalNode | undefined;
    ALWAYS_NULL(): TerminalNode | undefined;
    ALWAYS_ZERO(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ConditionClauseContext extends ParserRuleContext {
    CONDITION(): TerminalNode;
    componentID(): ComponentIDContext[];
    componentID(i: number): ComponentIDContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class InputModeContext extends ParserRuleContext {
    DATASET(): TerminalNode | undefined;
    DATASET_PRIORITY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ImbalanceExprContext extends ParserRuleContext {
    IMBALANCE(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class InputModeHierarchyContext extends ParserRuleContext {
    RULE(): TerminalNode | undefined;
    DATASET(): TerminalNode | undefined;
    RULE_PRIORITY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class OutputModeHierarchyContext extends ParserRuleContext {
    COMPUTED(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class AliasContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class VarIDContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class SimpleComponentIdContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ComponentIDContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    MEMBERSHIP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ListsContext extends ParserRuleContext {
    GLPAREN(): TerminalNode;
    constant(): ConstantContext[];
    constant(i: number): ConstantContext;
    GRPAREN(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ErCodeContext extends ParserRuleContext {
    ERRORCODE(): TerminalNode;
    constant(): ConstantContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ErLevelContext extends ParserRuleContext {
    ERRORLEVEL(): TerminalNode;
    constant(): ConstantContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ComparisonOperandContext extends ParserRuleContext {
    MT(): TerminalNode | undefined;
    ME(): TerminalNode | undefined;
    LE(): TerminalNode | undefined;
    LT(): TerminalNode | undefined;
    EQ(): TerminalNode | undefined;
    NEQ(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class OptionalExprContext extends ParserRuleContext {
    expr(): ExprContext | undefined;
    OPTIONAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ComponentRoleContext extends ParserRuleContext {
    MEASURE(): TerminalNode | undefined;
    COMPONENT(): TerminalNode | undefined;
    DIMENSION(): TerminalNode | undefined;
    ATTRIBUTE(): TerminalNode | undefined;
    viralAttribute(): ViralAttributeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ViralAttributeContext extends ParserRuleContext {
    VIRAL(): TerminalNode;
    ATTRIBUTE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ValueDomainIDContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class OperatorIDContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RoutineNameContext extends ParserRuleContext {
    IDENTIFIER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class ConstantContext extends ParserRuleContext {
    INTEGER_CONSTANT(): TerminalNode | undefined;
    NUMBER_CONSTANT(): TerminalNode | undefined;
    BOOLEAN_CONSTANT(): TerminalNode | undefined;
    STRING_CONSTANT(): TerminalNode | undefined;
    NULL_CONSTANT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class BasicScalarTypeContext extends ParserRuleContext {
    STRING(): TerminalNode | undefined;
    INTEGER(): TerminalNode | undefined;
    NUMBER(): TerminalNode | undefined;
    BOOLEAN(): TerminalNode | undefined;
    DATE(): TerminalNode | undefined;
    TIME(): TerminalNode | undefined;
    TIME_PERIOD(): TerminalNode | undefined;
    DURATION(): TerminalNode | undefined;
    SCALAR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
export declare class RetainTypeContext extends ParserRuleContext {
    BOOLEAN_CONSTANT(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: VtlListener): void;
    exitRule(listener: VtlListener): void;
    accept<Result>(visitor: VtlVisitor<Result>): Result;
}
