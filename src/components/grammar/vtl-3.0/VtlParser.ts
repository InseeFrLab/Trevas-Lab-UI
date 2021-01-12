// Generated from src/grammar/vtl-3.0/Vtl.g4 by ANTLR 4.7.3-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { VtlListener } from './VtlListener';
import { VtlVisitor } from './VtlVisitor';

export class VtlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly LPAREN = 2;
	public static readonly RPAREN = 3;
	public static readonly QLPAREN = 4;
	public static readonly QRPAREN = 5;
	public static readonly GLPAREN = 6;
	public static readonly GRPAREN = 7;
	public static readonly EQ = 8;
	public static readonly LT = 9;
	public static readonly MT = 10;
	public static readonly ME = 11;
	public static readonly NEQ = 12;
	public static readonly LE = 13;
	public static readonly PLUS = 14;
	public static readonly MINUS = 15;
	public static readonly MUL = 16;
	public static readonly DIV = 17;
	public static readonly COMMA = 18;
	public static readonly POINTER = 19;
	public static readonly ASSIGN = 20;
	public static readonly MEMBERSHIP = 21;
	public static readonly EVAL = 22;
	public static readonly IF = 23;
	public static readonly THEN = 24;
	public static readonly ELSE = 25;
	public static readonly USING = 26;
	public static readonly WITH = 27;
	public static readonly CURRENT_DATE = 28;
	public static readonly ON = 29;
	public static readonly DROP = 30;
	public static readonly KEEP = 31;
	public static readonly CALC = 32;
	public static readonly ATTRCALC = 33;
	public static readonly RENAME = 34;
	public static readonly AS = 35;
	public static readonly AND = 36;
	public static readonly OR = 37;
	public static readonly XOR = 38;
	public static readonly NOT = 39;
	public static readonly BETWEEN = 40;
	public static readonly IN = 41;
	public static readonly NOT_IN = 42;
	public static readonly NULL_CONSTANT = 43;
	public static readonly ISNULL = 44;
	public static readonly EX = 45;
	public static readonly UNION = 46;
	public static readonly DIFF = 47;
	public static readonly SYMDIFF = 48;
	public static readonly INTERSECT = 49;
	public static readonly KEYS = 50;
	public static readonly INTYEAR = 51;
	public static readonly INTMONTH = 52;
	public static readonly INTDAY = 53;
	public static readonly CHECK = 54;
	public static readonly EXISTS_IN = 55;
	public static readonly TO = 56;
	public static readonly RETURN = 57;
	public static readonly IMBALANCE = 58;
	public static readonly ERRORCODE = 59;
	public static readonly ALL = 60;
	public static readonly AGGREGATE = 61;
	public static readonly ERRORLEVEL = 62;
	public static readonly ORDER = 63;
	public static readonly BY = 64;
	public static readonly RANK = 65;
	public static readonly ASC = 66;
	public static readonly DESC = 67;
	public static readonly MIN = 68;
	public static readonly MAX = 69;
	public static readonly FIRST = 70;
	public static readonly LAST = 71;
	public static readonly INDEXOF = 72;
	public static readonly ABS = 73;
	public static readonly KEY = 74;
	public static readonly LN = 75;
	public static readonly LOG = 76;
	public static readonly TRUNC = 77;
	public static readonly ROUND = 78;
	public static readonly POWER = 79;
	public static readonly MOD = 80;
	public static readonly LEN = 81;
	public static readonly CONCAT = 82;
	public static readonly TRIM = 83;
	public static readonly UCASE = 84;
	public static readonly LCASE = 85;
	public static readonly SUBSTR = 86;
	public static readonly SUM = 87;
	public static readonly AVG = 88;
	public static readonly MEDIAN = 89;
	public static readonly COUNT = 90;
	public static readonly DIMENSION = 91;
	public static readonly MEASURE = 92;
	public static readonly ATTRIBUTE = 93;
	public static readonly FILTER = 94;
	public static readonly MERGE = 95;
	public static readonly EXP = 96;
	public static readonly ROLE = 97;
	public static readonly VIRAL = 98;
	public static readonly CHARSET_MATCH = 99;
	public static readonly TYPE = 100;
	public static readonly NVL = 101;
	public static readonly HIERARCHY = 102;
	public static readonly OPTIONAL = 103;
	public static readonly INVALID = 104;
	public static readonly VALUE_DOMAIN = 105;
	public static readonly VARIABLE = 106;
	public static readonly DATA = 107;
	public static readonly STRUCTURE = 108;
	public static readonly DATASET = 109;
	public static readonly OPERATOR = 110;
	public static readonly DEFINE = 111;
	public static readonly PUT_SYMBOL = 112;
	public static readonly DATAPOINT = 113;
	public static readonly HIERARCHICAL = 114;
	public static readonly RULESET = 115;
	public static readonly RULE = 116;
	public static readonly END = 117;
	public static readonly ALTER_DATASET = 118;
	public static readonly LTRIM = 119;
	public static readonly RTRIM = 120;
	public static readonly INSTR = 121;
	public static readonly REPLACE = 122;
	public static readonly CEIL = 123;
	public static readonly FLOOR = 124;
	public static readonly SQRT = 125;
	public static readonly ANY = 126;
	public static readonly SETDIFF = 127;
	public static readonly STDDEV_POP = 128;
	public static readonly STDDEV_SAMP = 129;
	public static readonly VAR_POP = 130;
	public static readonly VAR_SAMP = 131;
	public static readonly GROUP = 132;
	public static readonly EXCEPT = 133;
	public static readonly HAVING = 134;
	public static readonly FIRST_VALUE = 135;
	public static readonly LAST_VALUE = 136;
	public static readonly LAG = 137;
	public static readonly LEAD = 138;
	public static readonly RATIO_TO_REPORT = 139;
	public static readonly OVER = 140;
	public static readonly PRECEDING = 141;
	public static readonly FOLLOWING = 142;
	public static readonly UNBOUNDED = 143;
	public static readonly PARTITION = 144;
	public static readonly ROWS = 145;
	public static readonly RANGE = 146;
	public static readonly CURRENT = 147;
	public static readonly VALID = 148;
	public static readonly FILL_TIME_SERIES = 149;
	public static readonly FLOW_TO_STOCK = 150;
	public static readonly STOCK_TO_FLOW = 151;
	public static readonly TIMESHIFT = 152;
	public static readonly MEASURES = 153;
	public static readonly NO_MEASURES = 154;
	public static readonly CONDITION = 155;
	public static readonly BOOLEAN = 156;
	public static readonly DATE = 157;
	public static readonly TIME_PERIOD = 158;
	public static readonly NUMBER = 159;
	public static readonly STRING = 160;
	public static readonly INTEGER = 161;
	public static readonly FLOAT = 162;
	public static readonly LIST = 163;
	public static readonly RECORD = 164;
	public static readonly RESTRICT = 165;
	public static readonly YYYY = 166;
	public static readonly MM = 167;
	public static readonly DD = 168;
	public static readonly MAX_LENGTH = 169;
	public static readonly REGEXP = 170;
	public static readonly IS = 171;
	public static readonly WHEN = 172;
	public static readonly FROM = 173;
	public static readonly AGGREGATES = 174;
	public static readonly POINTS = 175;
	public static readonly POINT = 176;
	public static readonly TOTAL = 177;
	public static readonly PARTIAL = 178;
	public static readonly ALWAYS = 179;
	public static readonly INNER_JOIN = 180;
	public static readonly LEFT_JOIN = 181;
	public static readonly CROSS_JOIN = 182;
	public static readonly FULL_JOIN = 183;
	public static readonly MAPS_FROM = 184;
	public static readonly MAPS_TO = 185;
	public static readonly MAP_TO = 186;
	public static readonly MAP_FROM = 187;
	public static readonly RETURNS = 188;
	public static readonly PIVOT = 189;
	public static readonly CUSTOMPIVOT = 190;
	public static readonly UNPIVOT = 191;
	public static readonly SUBSPACE = 192;
	public static readonly APPLY = 193;
	public static readonly CONDITIONED = 194;
	public static readonly PERIOD_INDICATOR = 195;
	public static readonly SINGLE = 196;
	public static readonly DURATION = 197;
	public static readonly TIME_AGG = 198;
	public static readonly UNIT = 199;
	public static readonly VALUE = 200;
	public static readonly VALUEDOMAINS = 201;
	public static readonly VARIABLES = 202;
	public static readonly INPUT = 203;
	public static readonly OUTPUT = 204;
	public static readonly CAST = 205;
	public static readonly RULE_PRIORITY = 206;
	public static readonly DATASET_PRIORITY = 207;
	public static readonly DEFAULT = 208;
	public static readonly CHECK_DATAPOINT = 209;
	public static readonly CHECK_HIERARCHY = 210;
	public static readonly COMPUTED = 211;
	public static readonly NON_NULL = 212;
	public static readonly NON_ZERO = 213;
	public static readonly PARTIAL_NULL = 214;
	public static readonly PARTIAL_ZERO = 215;
	public static readonly ALWAYS_NULL = 216;
	public static readonly ALWAYS_ZERO = 217;
	public static readonly COMPONENTS = 218;
	public static readonly ALL_MEASURES = 219;
	public static readonly SCALAR = 220;
	public static readonly COMPONENT = 221;
	public static readonly DATAPOINT_ON_VD = 222;
	public static readonly DATAPOINT_ON_VAR = 223;
	public static readonly HIERARCHICAL_ON_VD = 224;
	public static readonly HIERARCHICAL_ON_VAR = 225;
	public static readonly SET = 226;
	public static readonly LANGUAGE = 227;
	public static readonly INTEGER_CONSTANT = 228;
	public static readonly NUMBER_CONSTANT = 229;
	public static readonly BOOLEAN_CONSTANT = 230;
	public static readonly STRING_CONSTANT = 231;
	public static readonly IDENTIFIER = 232;
	public static readonly MONTH = 233;
	public static readonly DAY = 234;
	public static readonly YEAR = 235;
	public static readonly WEEK = 236;
	public static readonly HOURS = 237;
	public static readonly MINUTES = 238;
	public static readonly SECONDS = 239;
	public static readonly DATE_FORMAT = 240;
	public static readonly TIME_FORMAT = 241;
	public static readonly TIME_UNIT = 242;
	public static readonly TIME = 243;
	public static readonly WS = 244;
	public static readonly EOL = 245;
	public static readonly ML_COMMENT = 246;
	public static readonly SL_COMMENT = 247;
	public static readonly FREQUENCY = 248;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_exprComponent = 3;
	public static readonly RULE_functionsComponents = 4;
	public static readonly RULE_functions = 5;
	public static readonly RULE_datasetClause = 6;
	public static readonly RULE_renameClause = 7;
	public static readonly RULE_aggrClause = 8;
	public static readonly RULE_filterClause = 9;
	public static readonly RULE_calcClause = 10;
	public static readonly RULE_keepOrDropClause = 11;
	public static readonly RULE_pivotOrUnpivotClause = 12;
	public static readonly RULE_customPivotClause = 13;
	public static readonly RULE_subspaceClause = 14;
	public static readonly RULE_joinOperators = 15;
	public static readonly RULE_defOperators = 16;
	public static readonly RULE_genericOperators = 17;
	public static readonly RULE_genericOperatorsComponent = 18;
	public static readonly RULE_parameterComponent = 19;
	public static readonly RULE_parameter = 20;
	public static readonly RULE_stringOperators = 21;
	public static readonly RULE_stringOperatorsComponent = 22;
	public static readonly RULE_numericOperators = 23;
	public static readonly RULE_numericOperatorsComponent = 24;
	public static readonly RULE_comparisonOperators = 25;
	public static readonly RULE_comparisonOperatorsComponent = 26;
	public static readonly RULE_timeOperators = 27;
	public static readonly RULE_timeOperatorsComponent = 28;
	public static readonly RULE_setOperators = 29;
	public static readonly RULE_hierarchyOperators = 30;
	public static readonly RULE_validationOperators = 31;
	public static readonly RULE_conditionalOperators = 32;
	public static readonly RULE_conditionalOperatorsComponent = 33;
	public static readonly RULE_aggrOperators = 34;
	public static readonly RULE_aggrOperatorsGrouping = 35;
	public static readonly RULE_anFunction = 36;
	public static readonly RULE_anFunctionComponent = 37;
	public static readonly RULE_renameClauseItem = 38;
	public static readonly RULE_aggregateClause = 39;
	public static readonly RULE_aggrFunctionClause = 40;
	public static readonly RULE_calcClauseItem = 41;
	public static readonly RULE_subspaceClauseItem = 42;
	public static readonly RULE_joinClauseWithoutUsing = 43;
	public static readonly RULE_joinClause = 44;
	public static readonly RULE_joinClauseItem = 45;
	public static readonly RULE_joinBody = 46;
	public static readonly RULE_joinApplyClause = 47;
	public static readonly RULE_partitionByClause = 48;
	public static readonly RULE_orderByClause = 49;
	public static readonly RULE_orderByItem = 50;
	public static readonly RULE_windowingClause = 51;
	public static readonly RULE_signedInteger = 52;
	public static readonly RULE_limitClauseItem = 53;
	public static readonly RULE_groupingClause = 54;
	public static readonly RULE_havingClause = 55;
	public static readonly RULE_parameterItem = 56;
	public static readonly RULE_outputParameterType = 57;
	public static readonly RULE_inputParameterType = 58;
	public static readonly RULE_rulesetType = 59;
	public static readonly RULE_scalarType = 60;
	public static readonly RULE_componentType = 61;
	public static readonly RULE_datasetType = 62;
	public static readonly RULE_scalarSetType = 63;
	public static readonly RULE_dpRuleset = 64;
	public static readonly RULE_hrRuleset = 65;
	public static readonly RULE_valueDomainName = 66;
	public static readonly RULE_rulesetID = 67;
	public static readonly RULE_rulesetSignature = 68;
	public static readonly RULE_signature = 69;
	public static readonly RULE_ruleClauseDatapoint = 70;
	public static readonly RULE_ruleItemDatapoint = 71;
	public static readonly RULE_ruleClauseHierarchical = 72;
	public static readonly RULE_ruleItemHierarchical = 73;
	public static readonly RULE_hierRuleSignature = 74;
	public static readonly RULE_valueDomainSignature = 75;
	public static readonly RULE_codeItemRelation = 76;
	public static readonly RULE_codeItemRelationClause = 77;
	public static readonly RULE_scalarTypeConstraint = 78;
	public static readonly RULE_compConstraint = 79;
	public static readonly RULE_multModifier = 80;
	public static readonly RULE_validationOutput = 81;
	public static readonly RULE_validationMode = 82;
	public static readonly RULE_conditionClause = 83;
	public static readonly RULE_inputMode = 84;
	public static readonly RULE_imbalanceExpr = 85;
	public static readonly RULE_inputModeHierarchy = 86;
	public static readonly RULE_outputModeHierarchy = 87;
	public static readonly RULE_alias = 88;
	public static readonly RULE_varID = 89;
	public static readonly RULE_simpleComponentId = 90;
	public static readonly RULE_componentID = 91;
	public static readonly RULE_lists = 92;
	public static readonly RULE_erCode = 93;
	public static readonly RULE_erLevel = 94;
	public static readonly RULE_comparisonOperand = 95;
	public static readonly RULE_optionalExpr = 96;
	public static readonly RULE_optionalExprComponent = 97;
	public static readonly RULE_componentRole = 98;
	public static readonly RULE_viralAttribute = 99;
	public static readonly RULE_valueDomainID = 100;
	public static readonly RULE_operatorID = 101;
	public static readonly RULE_routineName = 102;
	public static readonly RULE_constant = 103;
	public static readonly RULE_basicScalarType = 104;
	public static readonly RULE_retainType = 105;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		'start',
		'statement',
		'expr',
		'exprComponent',
		'functionsComponents',
		'functions',
		'datasetClause',
		'renameClause',
		'aggrClause',
		'filterClause',
		'calcClause',
		'keepOrDropClause',
		'pivotOrUnpivotClause',
		'customPivotClause',
		'subspaceClause',
		'joinOperators',
		'defOperators',
		'genericOperators',
		'genericOperatorsComponent',
		'parameterComponent',
		'parameter',
		'stringOperators',
		'stringOperatorsComponent',
		'numericOperators',
		'numericOperatorsComponent',
		'comparisonOperators',
		'comparisonOperatorsComponent',
		'timeOperators',
		'timeOperatorsComponent',
		'setOperators',
		'hierarchyOperators',
		'validationOperators',
		'conditionalOperators',
		'conditionalOperatorsComponent',
		'aggrOperators',
		'aggrOperatorsGrouping',
		'anFunction',
		'anFunctionComponent',
		'renameClauseItem',
		'aggregateClause',
		'aggrFunctionClause',
		'calcClauseItem',
		'subspaceClauseItem',
		'joinClauseWithoutUsing',
		'joinClause',
		'joinClauseItem',
		'joinBody',
		'joinApplyClause',
		'partitionByClause',
		'orderByClause',
		'orderByItem',
		'windowingClause',
		'signedInteger',
		'limitClauseItem',
		'groupingClause',
		'havingClause',
		'parameterItem',
		'outputParameterType',
		'inputParameterType',
		'rulesetType',
		'scalarType',
		'componentType',
		'datasetType',
		'scalarSetType',
		'dpRuleset',
		'hrRuleset',
		'valueDomainName',
		'rulesetID',
		'rulesetSignature',
		'signature',
		'ruleClauseDatapoint',
		'ruleItemDatapoint',
		'ruleClauseHierarchical',
		'ruleItemHierarchical',
		'hierRuleSignature',
		'valueDomainSignature',
		'codeItemRelation',
		'codeItemRelationClause',
		'scalarTypeConstraint',
		'compConstraint',
		'multModifier',
		'validationOutput',
		'validationMode',
		'conditionClause',
		'inputMode',
		'imbalanceExpr',
		'inputModeHierarchy',
		'outputModeHierarchy',
		'alias',
		'varID',
		'simpleComponentId',
		'componentID',
		'lists',
		'erCode',
		'erLevel',
		'comparisonOperand',
		'optionalExpr',
		'optionalExprComponent',
		'componentRole',
		'viralAttribute',
		'valueDomainID',
		'operatorID',
		'routineName',
		'constant',
		'basicScalarType',
		'retainType',
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined,
		"':'",
		"'('",
		"')'",
		"'['",
		"']'",
		"'{'",
		"'}'",
		"'='",
		"'<'",
		"'>'",
		"'>='",
		"'<>'",
		"'<='",
		"'+'",
		"'-'",
		"'*'",
		"'/'",
		"','",
		"'->'",
		"':='",
		"'#'",
		"'eval'",
		"'if'",
		"'then'",
		"'else'",
		"'using'",
		"'with'",
		"'current_date'",
		"'on'",
		"'drop'",
		"'keep'",
		"'calc'",
		"'attrcalc'",
		"'rename'",
		"'as'",
		"'and'",
		"'or'",
		"'xor'",
		"'not'",
		"'between'",
		"'in'",
		"'not_in'",
		"'null'",
		"'isnull'",
		"'ex'",
		"'union'",
		"'diff'",
		"'symdiff'",
		"'intersect'",
		"'keys'",
		"'intyear'",
		"'intmonth'",
		"'intday'",
		"'check'",
		"'exists_in'",
		"'to'",
		"'return'",
		"'imbalance'",
		"'errorcode'",
		"'all'",
		"'aggr'",
		"'errorlevel'",
		"'order'",
		"'by'",
		"'rank'",
		"'asc'",
		"'desc'",
		"'min'",
		"'max'",
		"'first'",
		"'last'",
		"'indexof'",
		"'abs'",
		"'key'",
		"'ln'",
		"'log'",
		"'trunc'",
		"'round'",
		"'power'",
		"'mod'",
		"'length'",
		"'||'",
		"'trim'",
		"'upper'",
		"'lower'",
		"'substr'",
		"'sum'",
		"'avg'",
		"'median'",
		"'count'",
		"'identifier'",
		"'measure'",
		"'attribute'",
		"'filter'",
		"'merge'",
		"'exp'",
		"'componentRole'",
		"'viral'",
		"'match_characters'",
		"'type'",
		"'nvl'",
		"'hierarchy'",
		"'_'",
		"'invalid'",
		"'valuedomain'",
		"'variable'",
		"'data'",
		"'structure'",
		"'dataset'",
		"'operator'",
		"'define'",
		"'<-'",
		"'datapoint'",
		"'hierarchical'",
		"'ruleset'",
		"'rule'",
		"'end'",
		"'alterDataset'",
		"'ltrim'",
		"'rtrim'",
		"'instr'",
		"'replace'",
		"'ceil'",
		"'floor'",
		"'sqrt'",
		"'any'",
		"'setdiff'",
		"'stddev_pop'",
		"'stddev_samp'",
		"'var_pop'",
		"'var_samp'",
		"'group'",
		"'except'",
		"'having'",
		"'first_value'",
		"'last_value'",
		"'lag'",
		"'lead'",
		"'ratio_to_report'",
		"'over'",
		"'preceding'",
		"'following'",
		"'unbounded'",
		"'partition'",
		"'rows'",
		"'range'",
		"'current'",
		"'valid'",
		"'fill_time_series'",
		"'flow_to_stock'",
		"'stock_to_flow'",
		"'timeshift'",
		"'measures'",
		"'no_measures'",
		"'condition'",
		"'boolean'",
		"'date'",
		"'time_period'",
		"'number'",
		"'string'",
		"'integer'",
		"'float'",
		"'list'",
		"'record'",
		"'restrict'",
		"'yyyy'",
		"'mm'",
		"'dd'",
		"'maxLength'",
		"'regexp'",
		"'is'",
		"'when'",
		"'from'",
		"'aggregates'",
		"'points'",
		"'point'",
		"'total'",
		"'partial'",
		"'always'",
		"'inner_join'",
		"'left_join'",
		"'cross_join'",
		"'full_join'",
		"'maps_from'",
		"'maps_to'",
		"'map_to'",
		"'map_from'",
		"'returns'",
		"'pivot'",
		"'customPivot'",
		"'unpivot'",
		"'sub'",
		"'apply'",
		"'conditioned'",
		"'period_indicator'",
		"'single'",
		"'duration'",
		"'time_agg'",
		"'unit'",
		"'Value'",
		"'valuedomains'",
		"'variables'",
		"'input'",
		"'output'",
		"'cast'",
		"'rule_priority'",
		"'dataset_priority'",
		"'default'",
		"'check_datapoint'",
		"'check_hierarchy'",
		"'computed'",
		"'non_null'",
		"'non_zero'",
		"'partial_null'",
		"'partial_zero'",
		"'always_null'",
		"'always_zero'",
		"'components'",
		"'all_measures'",
		"'scalar'",
		"'component'",
		"'datapoint_on_valuedomains'",
		"'datapoint_on_variables'",
		"'hierarchical_on_valuedomains'",
		"'hierarchical_on_variables'",
		"'set'",
		"'language'",
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		"';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined,
		undefined,
		'LPAREN',
		'RPAREN',
		'QLPAREN',
		'QRPAREN',
		'GLPAREN',
		'GRPAREN',
		'EQ',
		'LT',
		'MT',
		'ME',
		'NEQ',
		'LE',
		'PLUS',
		'MINUS',
		'MUL',
		'DIV',
		'COMMA',
		'POINTER',
		'ASSIGN',
		'MEMBERSHIP',
		'EVAL',
		'IF',
		'THEN',
		'ELSE',
		'USING',
		'WITH',
		'CURRENT_DATE',
		'ON',
		'DROP',
		'KEEP',
		'CALC',
		'ATTRCALC',
		'RENAME',
		'AS',
		'AND',
		'OR',
		'XOR',
		'NOT',
		'BETWEEN',
		'IN',
		'NOT_IN',
		'NULL_CONSTANT',
		'ISNULL',
		'EX',
		'UNION',
		'DIFF',
		'SYMDIFF',
		'INTERSECT',
		'KEYS',
		'INTYEAR',
		'INTMONTH',
		'INTDAY',
		'CHECK',
		'EXISTS_IN',
		'TO',
		'RETURN',
		'IMBALANCE',
		'ERRORCODE',
		'ALL',
		'AGGREGATE',
		'ERRORLEVEL',
		'ORDER',
		'BY',
		'RANK',
		'ASC',
		'DESC',
		'MIN',
		'MAX',
		'FIRST',
		'LAST',
		'INDEXOF',
		'ABS',
		'KEY',
		'LN',
		'LOG',
		'TRUNC',
		'ROUND',
		'POWER',
		'MOD',
		'LEN',
		'CONCAT',
		'TRIM',
		'UCASE',
		'LCASE',
		'SUBSTR',
		'SUM',
		'AVG',
		'MEDIAN',
		'COUNT',
		'DIMENSION',
		'MEASURE',
		'ATTRIBUTE',
		'FILTER',
		'MERGE',
		'EXP',
		'ROLE',
		'VIRAL',
		'CHARSET_MATCH',
		'TYPE',
		'NVL',
		'HIERARCHY',
		'OPTIONAL',
		'INVALID',
		'VALUE_DOMAIN',
		'VARIABLE',
		'DATA',
		'STRUCTURE',
		'DATASET',
		'OPERATOR',
		'DEFINE',
		'PUT_SYMBOL',
		'DATAPOINT',
		'HIERARCHICAL',
		'RULESET',
		'RULE',
		'END',
		'ALTER_DATASET',
		'LTRIM',
		'RTRIM',
		'INSTR',
		'REPLACE',
		'CEIL',
		'FLOOR',
		'SQRT',
		'ANY',
		'SETDIFF',
		'STDDEV_POP',
		'STDDEV_SAMP',
		'VAR_POP',
		'VAR_SAMP',
		'GROUP',
		'EXCEPT',
		'HAVING',
		'FIRST_VALUE',
		'LAST_VALUE',
		'LAG',
		'LEAD',
		'RATIO_TO_REPORT',
		'OVER',
		'PRECEDING',
		'FOLLOWING',
		'UNBOUNDED',
		'PARTITION',
		'ROWS',
		'RANGE',
		'CURRENT',
		'VALID',
		'FILL_TIME_SERIES',
		'FLOW_TO_STOCK',
		'STOCK_TO_FLOW',
		'TIMESHIFT',
		'MEASURES',
		'NO_MEASURES',
		'CONDITION',
		'BOOLEAN',
		'DATE',
		'TIME_PERIOD',
		'NUMBER',
		'STRING',
		'INTEGER',
		'FLOAT',
		'LIST',
		'RECORD',
		'RESTRICT',
		'YYYY',
		'MM',
		'DD',
		'MAX_LENGTH',
		'REGEXP',
		'IS',
		'WHEN',
		'FROM',
		'AGGREGATES',
		'POINTS',
		'POINT',
		'TOTAL',
		'PARTIAL',
		'ALWAYS',
		'INNER_JOIN',
		'LEFT_JOIN',
		'CROSS_JOIN',
		'FULL_JOIN',
		'MAPS_FROM',
		'MAPS_TO',
		'MAP_TO',
		'MAP_FROM',
		'RETURNS',
		'PIVOT',
		'CUSTOMPIVOT',
		'UNPIVOT',
		'SUBSPACE',
		'APPLY',
		'CONDITIONED',
		'PERIOD_INDICATOR',
		'SINGLE',
		'DURATION',
		'TIME_AGG',
		'UNIT',
		'VALUE',
		'VALUEDOMAINS',
		'VARIABLES',
		'INPUT',
		'OUTPUT',
		'CAST',
		'RULE_PRIORITY',
		'DATASET_PRIORITY',
		'DEFAULT',
		'CHECK_DATAPOINT',
		'CHECK_HIERARCHY',
		'COMPUTED',
		'NON_NULL',
		'NON_ZERO',
		'PARTIAL_NULL',
		'PARTIAL_ZERO',
		'ALWAYS_NULL',
		'ALWAYS_ZERO',
		'COMPONENTS',
		'ALL_MEASURES',
		'SCALAR',
		'COMPONENT',
		'DATAPOINT_ON_VD',
		'DATAPOINT_ON_VAR',
		'HIERARCHICAL_ON_VD',
		'HIERARCHICAL_ON_VAR',
		'SET',
		'LANGUAGE',
		'INTEGER_CONSTANT',
		'NUMBER_CONSTANT',
		'BOOLEAN_CONSTANT',
		'STRING_CONSTANT',
		'IDENTIFIER',
		'MONTH',
		'DAY',
		'YEAR',
		'WEEK',
		'HOURS',
		'MINUTES',
		'SECONDS',
		'DATE_FORMAT',
		'TIME_FORMAT',
		'TIME_UNIT',
		'TIME',
		'WS',
		'EOL',
		'ML_COMMENT',
		'SL_COMMENT',
		'FREQUENCY',
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
		VtlParser._LITERAL_NAMES,
		VtlParser._SYMBOLIC_NAMES,
		[]
	);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VtlParser.VOCABULARY;
	}

	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string {
		return 'Vtl.g4';
	}

	// @Override
	public get ruleNames(): string[] {
		return VtlParser.ruleNames;
	}

	// @Override
	public get serializedATN(): string {
		return VtlParser._serializedATN;
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(VtlParser._ATN, this);
	}

	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, VtlParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.DEFINE || _la === VtlParser.IDENTIFIER) {
					{
						{
							this.state = 212;
							this.statement();
							this.state = 213;
							this.match(VtlParser.EOL);
						}
					}
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 220;
				this.match(VtlParser.EOF);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 2, VtlParser.RULE_statement);
		try {
			this.state = 231;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
				case 1:
					_localctx = new TemporaryAssignmentContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 222;
						this.varID();
						this.state = 223;
						this.match(VtlParser.ASSIGN);
						this.state = 224;
						this.expr(0);
					}
					break;

				case 2:
					_localctx = new PersistAssignmentContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 226;
						this.varID();
						this.state = 227;
						this.match(VtlParser.PUT_SYMBOL);
						this.state = 228;
						this.expr(0);
					}
					break;

				case 3:
					_localctx = new DefineExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 230;
						this.defOperators();
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, VtlParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 250;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
					case 1:
						{
							_localctx = new ParenthesisExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;

							this.state = 234;
							this.match(VtlParser.LPAREN);
							this.state = 235;
							this.expr(0);
							this.state = 236;
							this.match(VtlParser.RPAREN);
						}
						break;

					case 2:
						{
							_localctx = new FunctionsExpressionContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 238;
							this.functions();
						}
						break;

					case 3:
						{
							_localctx = new UnaryExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 239;
							(_localctx as UnaryExprContext)._op = this._input.LT(1);
							_la = this._input.LA(1);
							if (
								!(
									((_la - 14) & ~0x1f) === 0 &&
									((1 << (_la - 14)) &
										((1 << (VtlParser.PLUS - 14)) |
											(1 << (VtlParser.MINUS - 14)) |
											(1 << (VtlParser.NOT - 14)))) !==
										0
								)
							) {
								(_localctx as UnaryExprContext)._op = this._errHandler.recoverInline(
									this
								);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 240;
							(_localctx as UnaryExprContext)._right = this.expr(10);
						}
						break;

					case 4:
						{
							_localctx = new IfExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 241;
							this.match(VtlParser.IF);
							this.state = 242;
							(_localctx as IfExprContext)._conditionalExpr = this.expr(0);
							this.state = 243;
							this.match(VtlParser.THEN);
							this.state = 244;
							(_localctx as IfExprContext)._thenExpr = this.expr(0);
							this.state = 245;
							this.match(VtlParser.ELSE);
							this.state = 246;
							(_localctx as IfExprContext)._elseExpr = this.expr(3);
						}
						break;

					case 5:
						{
							_localctx = new ConstantExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 248;
							this.constant();
						}
						break;

					case 6:
						{
							_localctx = new VarIdExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 249;
							this.varID();
						}
						break;
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 284;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							this.state = 282;
							this._errHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(this._input, 4, this._ctx)
							) {
								case 1:
									{
										_localctx = new ArithmeticExprContext(
											new ExprContext(_parentctx, _parentState)
										);
										(_localctx as ArithmeticExprContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_expr
										);
										this.state = 252;
										if (!this.precpred(this._ctx, 9)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 9)'
											);
										}
										this.state = 253;
										(_localctx as ArithmeticExprContext)._op = this._input.LT(
											1
										);
										_la = this._input.LA(1);
										if (!(_la === VtlParser.MUL || _la === VtlParser.DIV)) {
											(_localctx as ArithmeticExprContext)._op = this._errHandler.recoverInline(
												this
											);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 254;
										(_localctx as ArithmeticExprContext)._right = this.expr(10);
									}
									break;

								case 2:
									{
										_localctx = new ArithmeticExprOrConcatContext(
											new ExprContext(_parentctx, _parentState)
										);
										(_localctx as ArithmeticExprOrConcatContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_expr
										);
										this.state = 255;
										if (!this.precpred(this._ctx, 8)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 8)'
											);
										}
										this.state = 256;
										(_localctx as ArithmeticExprOrConcatContext)._op = this._input.LT(
											1
										);
										_la = this._input.LA(1);
										if (
											!(
												_la === VtlParser.PLUS ||
												_la === VtlParser.MINUS ||
												_la === VtlParser.CONCAT
											)
										) {
											(_localctx as ArithmeticExprOrConcatContext)._op = this._errHandler.recoverInline(
												this
											);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 257;
										(_localctx as ArithmeticExprOrConcatContext)._right = this.expr(
											9
										);
									}
									break;

								case 3:
									{
										_localctx = new ComparisonExprContext(
											new ExprContext(_parentctx, _parentState)
										);
										(_localctx as ComparisonExprContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_expr
										);
										this.state = 258;
										if (!this.precpred(this._ctx, 7)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 7)'
											);
										}
										this.state = 259;
										(_localctx as ComparisonExprContext)._op = this.comparisonOperand();
										this.state = 260;
										(_localctx as ComparisonExprContext)._right = this.expr(8);
									}
									break;

								case 4:
									{
										_localctx = new BooleanExprContext(
											new ExprContext(_parentctx, _parentState)
										);
										(_localctx as BooleanExprContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_expr
										);
										this.state = 262;
										if (!this.precpred(this._ctx, 5)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 5)'
											);
										}
										this.state = 263;
										(_localctx as BooleanExprContext)._op = this.match(
											VtlParser.AND
										);
										this.state = 264;
										(_localctx as BooleanExprContext)._right = this.expr(6);
									}
									break;

								case 5:
									{
										_localctx = new BooleanExprContext(
											new ExprContext(_parentctx, _parentState)
										);
										(_localctx as BooleanExprContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_expr
										);
										this.state = 265;
										if (!this.precpred(this._ctx, 4)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 4)'
											);
										}
										this.state = 266;
										(_localctx as BooleanExprContext)._op = this._input.LT(1);
										_la = this._input.LA(1);
										if (!(_la === VtlParser.OR || _la === VtlParser.XOR)) {
											(_localctx as BooleanExprContext)._op = this._errHandler.recoverInline(
												this
											);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 267;
										(_localctx as BooleanExprContext)._right = this.expr(5);
									}
									break;

								case 6:
									{
										_localctx = new ClauseExprContext(
											new ExprContext(_parentctx, _parentState)
										);
										(_localctx as ClauseExprContext)._dataset = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_expr
										);
										this.state = 268;
										if (!this.precpred(this._ctx, 12)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 12)'
											);
										}
										this.state = 269;
										this.match(VtlParser.QLPAREN);
										this.state = 270;
										(_localctx as ClauseExprContext)._clause = this.datasetClause();
										this.state = 271;
										this.match(VtlParser.QRPAREN);
									}
									break;

								case 7:
									{
										_localctx = new MembershipExprContext(
											new ExprContext(_parentctx, _parentState)
										);
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_expr
										);
										this.state = 273;
										if (!this.precpred(this._ctx, 11)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 11)'
											);
										}
										this.state = 274;
										this.match(VtlParser.MEMBERSHIP);
										this.state = 275;
										this.simpleComponentId();
									}
									break;

								case 8:
									{
										_localctx = new InNotInExprContext(
											new ExprContext(_parentctx, _parentState)
										);
										(_localctx as InNotInExprContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_expr
										);
										this.state = 276;
										if (!this.precpred(this._ctx, 6)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 6)'
											);
										}
										this.state = 277;
										(_localctx as InNotInExprContext)._op = this._input.LT(1);
										_la = this._input.LA(1);
										if (!(_la === VtlParser.IN || _la === VtlParser.NOT_IN)) {
											(_localctx as InNotInExprContext)._op = this._errHandler.recoverInline(
												this
											);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 280;
										this._errHandler.sync(this);
										switch (this._input.LA(1)) {
											case VtlParser.GLPAREN:
												{
													this.state = 278;
													this.lists();
												}
												break;
											case VtlParser.IDENTIFIER:
												{
													this.state = 279;
													this.valueDomainID();
												}
												break;
											default:
												throw new NoViableAltException(this);
										}
									}
									break;
							}
						}
					}
					this.state = 286;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exprComponent(): ExprComponentContext;
	public exprComponent(_p: number): ExprComponentContext;
	// @RuleVersion(0)
	public exprComponent(_p?: number): ExprComponentContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprComponentContext = new ExprComponentContext(
			this._ctx,
			_parentState
		);
		let _prevctx: ExprComponentContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, VtlParser.RULE_exprComponent, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 304;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
					case 1:
						{
							_localctx = new ParenthesisExprCompContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;

							this.state = 288;
							this.match(VtlParser.LPAREN);
							this.state = 289;
							this.exprComponent(0);
							this.state = 290;
							this.match(VtlParser.RPAREN);
						}
						break;

					case 2:
						{
							_localctx = new FunctionsExpressionCompContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 292;
							this.functionsComponents();
						}
						break;

					case 3:
						{
							_localctx = new UnaryExprCompContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 293;
							(_localctx as UnaryExprCompContext)._op = this._input.LT(1);
							_la = this._input.LA(1);
							if (
								!(
									((_la - 14) & ~0x1f) === 0 &&
									((1 << (_la - 14)) &
										((1 << (VtlParser.PLUS - 14)) |
											(1 << (VtlParser.MINUS - 14)) |
											(1 << (VtlParser.NOT - 14)))) !==
										0
								)
							) {
								(_localctx as UnaryExprCompContext)._op = this._errHandler.recoverInline(
									this
								);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 294;
							(_localctx as UnaryExprCompContext)._right = this.exprComponent(
								10
							);
						}
						break;

					case 4:
						{
							_localctx = new IfExprCompContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 295;
							this.match(VtlParser.IF);
							this.state = 296;
							(_localctx as IfExprCompContext)._conditionalExpr = this.exprComponent(
								0
							);
							this.state = 297;
							this.match(VtlParser.THEN);
							this.state = 298;
							(_localctx as IfExprCompContext)._thenExpr = this.exprComponent(
								0
							);
							this.state = 299;
							this.match(VtlParser.ELSE);
							this.state = 300;
							(_localctx as IfExprCompContext)._elseExpr = this.exprComponent(
								3
							);
						}
						break;

					case 5:
						{
							_localctx = new ConstantExprCompContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 302;
							this.constant();
						}
						break;

					case 6:
						{
							_localctx = new CompIdContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 303;
							this.componentID();
						}
						break;
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 330;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							this.state = 328;
							this._errHandler.sync(this);
							switch (
								this.interpreter.adaptivePredict(this._input, 8, this._ctx)
							) {
								case 1:
									{
										_localctx = new ArithmeticExprCompContext(
											new ExprComponentContext(_parentctx, _parentState)
										);
										(_localctx as ArithmeticExprCompContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_exprComponent
										);
										this.state = 306;
										if (!this.precpred(this._ctx, 9)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 9)'
											);
										}
										this.state = 307;
										(_localctx as ArithmeticExprCompContext)._op = this._input.LT(
											1
										);
										_la = this._input.LA(1);
										if (!(_la === VtlParser.MUL || _la === VtlParser.DIV)) {
											(_localctx as ArithmeticExprCompContext)._op = this._errHandler.recoverInline(
												this
											);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 308;
										(_localctx as ArithmeticExprCompContext)._right = this.exprComponent(
											10
										);
									}
									break;

								case 2:
									{
										_localctx = new ArithmeticExprOrConcatCompContext(
											new ExprComponentContext(_parentctx, _parentState)
										);
										(_localctx as ArithmeticExprOrConcatCompContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_exprComponent
										);
										this.state = 309;
										if (!this.precpred(this._ctx, 8)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 8)'
											);
										}
										this.state = 310;
										(_localctx as ArithmeticExprOrConcatCompContext)._op = this._input.LT(
											1
										);
										_la = this._input.LA(1);
										if (
											!(
												_la === VtlParser.PLUS ||
												_la === VtlParser.MINUS ||
												_la === VtlParser.CONCAT
											)
										) {
											(_localctx as ArithmeticExprOrConcatCompContext)._op = this._errHandler.recoverInline(
												this
											);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 311;
										(_localctx as ArithmeticExprOrConcatCompContext)._right = this.exprComponent(
											9
										);
									}
									break;

								case 3:
									{
										_localctx = new ComparisonExprCompContext(
											new ExprComponentContext(_parentctx, _parentState)
										);
										(_localctx as ComparisonExprCompContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_exprComponent
										);
										this.state = 312;
										if (!this.precpred(this._ctx, 7)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 7)'
											);
										}
										this.state = 313;
										this.comparisonOperand();
										this.state = 314;
										(_localctx as ComparisonExprCompContext)._right = this.exprComponent(
											8
										);
									}
									break;

								case 4:
									{
										_localctx = new BooleanExprCompContext(
											new ExprComponentContext(_parentctx, _parentState)
										);
										(_localctx as BooleanExprCompContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_exprComponent
										);
										this.state = 316;
										if (!this.precpred(this._ctx, 5)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 5)'
											);
										}
										this.state = 317;
										(_localctx as BooleanExprCompContext)._op = this.match(
											VtlParser.AND
										);
										this.state = 318;
										(_localctx as BooleanExprCompContext)._right = this.exprComponent(
											6
										);
									}
									break;

								case 5:
									{
										_localctx = new BooleanExprCompContext(
											new ExprComponentContext(_parentctx, _parentState)
										);
										(_localctx as BooleanExprCompContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_exprComponent
										);
										this.state = 319;
										if (!this.precpred(this._ctx, 4)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 4)'
											);
										}
										this.state = 320;
										(_localctx as BooleanExprCompContext)._op = this._input.LT(
											1
										);
										_la = this._input.LA(1);
										if (!(_la === VtlParser.OR || _la === VtlParser.XOR)) {
											(_localctx as BooleanExprCompContext)._op = this._errHandler.recoverInline(
												this
											);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 321;
										(_localctx as BooleanExprCompContext)._right = this.exprComponent(
											5
										);
									}
									break;

								case 6:
									{
										_localctx = new InNotInExprCompContext(
											new ExprComponentContext(_parentctx, _parentState)
										);
										(_localctx as InNotInExprCompContext)._left = _prevctx;
										this.pushNewRecursionContext(
											_localctx,
											_startState,
											VtlParser.RULE_exprComponent
										);
										this.state = 322;
										if (!this.precpred(this._ctx, 6)) {
											throw new FailedPredicateException(
												this,
												'this.precpred(this._ctx, 6)'
											);
										}
										this.state = 323;
										(_localctx as InNotInExprCompContext)._op = this._input.LT(
											1
										);
										_la = this._input.LA(1);
										if (!(_la === VtlParser.IN || _la === VtlParser.NOT_IN)) {
											(_localctx as InNotInExprCompContext)._op = this._errHandler.recoverInline(
												this
											);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 326;
										this._errHandler.sync(this);
										switch (this._input.LA(1)) {
											case VtlParser.GLPAREN:
												{
													this.state = 324;
													this.lists();
												}
												break;
											case VtlParser.IDENTIFIER:
												{
													this.state = 325;
													this.valueDomainID();
												}
												break;
											default:
												throw new NoViableAltException(this);
										}
									}
									break;
							}
						}
					}
					this.state = 332;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public functionsComponents(): FunctionsComponentsContext {
		let _localctx: FunctionsComponentsContext = new FunctionsComponentsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 8, VtlParser.RULE_functionsComponents);
		try {
			this.state = 341;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
				case 1:
					_localctx = new GenericFunctionsComponentsContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 333;
						this.genericOperatorsComponent();
					}
					break;

				case 2:
					_localctx = new StringFunctionsComponentsContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 334;
						this.stringOperatorsComponent();
					}
					break;

				case 3:
					_localctx = new NumericFunctionsComponentsContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 335;
						this.numericOperatorsComponent();
					}
					break;

				case 4:
					_localctx = new ComparisonFunctionsComponentsContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 336;
						this.comparisonOperatorsComponent();
					}
					break;

				case 5:
					_localctx = new TimeFunctionsComponentsContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 337;
						this.timeOperatorsComponent();
					}
					break;

				case 6:
					_localctx = new ConditionalFunctionsComponentsContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 338;
						this.conditionalOperatorsComponent();
					}
					break;

				case 7:
					_localctx = new AggregateFunctionsComponentsContext(_localctx);
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 339;
						this.aggrOperators();
					}
					break;

				case 8:
					_localctx = new AnalyticFunctionsComponentsContext(_localctx);
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 340;
						this.anFunctionComponent();
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public functions(): FunctionsContext {
		let _localctx: FunctionsContext = new FunctionsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 10, VtlParser.RULE_functions);
		try {
			this.state = 355;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
				case 1:
					_localctx = new JoinFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 343;
						this.joinOperators();
					}
					break;

				case 2:
					_localctx = new GenericFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 344;
						this.genericOperators();
					}
					break;

				case 3:
					_localctx = new StringFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 345;
						this.stringOperators();
					}
					break;

				case 4:
					_localctx = new NumericFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 346;
						this.numericOperators();
					}
					break;

				case 5:
					_localctx = new ComparisonFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 347;
						this.comparisonOperators();
					}
					break;

				case 6:
					_localctx = new TimeFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 348;
						this.timeOperators();
					}
					break;

				case 7:
					_localctx = new SetFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 349;
						this.setOperators();
					}
					break;

				case 8:
					_localctx = new HierarchyFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 350;
						this.hierarchyOperators();
					}
					break;

				case 9:
					_localctx = new ValidationFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 9);
					{
						this.state = 351;
						this.validationOperators();
					}
					break;

				case 10:
					_localctx = new ConditionalFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 10);
					{
						this.state = 352;
						this.conditionalOperators();
					}
					break;

				case 11:
					_localctx = new AggregateFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 11);
					{
						this.state = 353;
						this.aggrOperatorsGrouping();
					}
					break;

				case 12:
					_localctx = new AnalyticFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 12);
					{
						this.state = 354;
						this.anFunction();
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public datasetClause(): DatasetClauseContext {
		let _localctx: DatasetClauseContext = new DatasetClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 12, VtlParser.RULE_datasetClause);
		try {
			this.state = 365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.RENAME:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 357;
						this.renameClause();
					}
					break;
				case VtlParser.AGGREGATE:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 358;
						this.aggrClause();
					}
					break;
				case VtlParser.FILTER:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 359;
						this.filterClause();
					}
					break;
				case VtlParser.CALC:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 360;
						this.calcClause();
					}
					break;
				case VtlParser.DROP:
				case VtlParser.KEEP:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 361;
						this.keepOrDropClause();
					}
					break;
				case VtlParser.PIVOT:
				case VtlParser.UNPIVOT:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 362;
						this.pivotOrUnpivotClause();
					}
					break;
				case VtlParser.CUSTOMPIVOT:
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 363;
						this.customPivotClause();
					}
					break;
				case VtlParser.SUBSPACE:
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 364;
						this.subspaceClause();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public renameClause(): RenameClauseContext {
		let _localctx: RenameClauseContext = new RenameClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 14, VtlParser.RULE_renameClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 367;
				this.match(VtlParser.RENAME);
				this.state = 368;
				this.renameClauseItem();
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 369;
							this.match(VtlParser.COMMA);
							this.state = 370;
							this.renameClauseItem();
						}
					}
					this.state = 375;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public aggrClause(): AggrClauseContext {
		let _localctx: AggrClauseContext = new AggrClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 16, VtlParser.RULE_aggrClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 376;
				this.match(VtlParser.AGGREGATE);
				this.state = 377;
				this.aggregateClause();
				this.state = 382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.GROUP) {
					{
						this.state = 378;
						this.groupingClause();
						this.state = 380;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.HAVING) {
							{
								this.state = 379;
								this.havingClause();
							}
						}
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public filterClause(): FilterClauseContext {
		let _localctx: FilterClauseContext = new FilterClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 18, VtlParser.RULE_filterClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 384;
				this.match(VtlParser.FILTER);
				this.state = 385;
				this.exprComponent(0);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public calcClause(): CalcClauseContext {
		let _localctx: CalcClauseContext = new CalcClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 20, VtlParser.RULE_calcClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 387;
				this.match(VtlParser.CALC);
				this.state = 388;
				this.calcClauseItem();
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 389;
							this.match(VtlParser.COMMA);
							this.state = 390;
							this.calcClauseItem();
						}
					}
					this.state = 395;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public keepOrDropClause(): KeepOrDropClauseContext {
		let _localctx: KeepOrDropClauseContext = new KeepOrDropClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 22, VtlParser.RULE_keepOrDropClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 396;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === VtlParser.DROP || _la === VtlParser.KEEP)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 397;
				this.componentID();
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 398;
							this.match(VtlParser.COMMA);
							this.state = 399;
							this.componentID();
						}
					}
					this.state = 404;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public pivotOrUnpivotClause(): PivotOrUnpivotClauseContext {
		let _localctx: PivotOrUnpivotClauseContext = new PivotOrUnpivotClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 24, VtlParser.RULE_pivotOrUnpivotClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 405;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === VtlParser.PIVOT || _la === VtlParser.UNPIVOT)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 406;
				_localctx._id_ = this.componentID();
				this.state = 407;
				this.match(VtlParser.COMMA);
				this.state = 408;
				_localctx._mea = this.componentID();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public customPivotClause(): CustomPivotClauseContext {
		let _localctx: CustomPivotClauseContext = new CustomPivotClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 26, VtlParser.RULE_customPivotClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 410;
				this.match(VtlParser.CUSTOMPIVOT);
				this.state = 411;
				_localctx._id_ = this.componentID();
				this.state = 412;
				this.match(VtlParser.COMMA);
				this.state = 413;
				_localctx._mea = this.componentID();
				this.state = 414;
				this.match(VtlParser.IN);
				this.state = 415;
				this.constant();
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 416;
							this.match(VtlParser.COMMA);
							this.state = 417;
							this.constant();
						}
					}
					this.state = 422;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public subspaceClause(): SubspaceClauseContext {
		let _localctx: SubspaceClauseContext = new SubspaceClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 28, VtlParser.RULE_subspaceClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 423;
				this.match(VtlParser.SUBSPACE);
				this.state = 424;
				this.subspaceClauseItem();
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 425;
							this.match(VtlParser.COMMA);
							this.state = 426;
							this.subspaceClauseItem();
						}
					}
					this.state = 431;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public joinOperators(): JoinOperatorsContext {
		let _localctx: JoinOperatorsContext = new JoinOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 30, VtlParser.RULE_joinOperators);
		let _la: number;
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.INNER_JOIN:
				case VtlParser.LEFT_JOIN:
					_localctx = new JoinExprContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 432;
						(_localctx as JoinExprContext)._joinKeyword = this._input.LT(1);
						_la = this._input.LA(1);
						if (
							!(_la === VtlParser.INNER_JOIN || _la === VtlParser.LEFT_JOIN)
						) {
							(_localctx as JoinExprContext)._joinKeyword = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 433;
						this.match(VtlParser.LPAREN);
						this.state = 434;
						this.joinClause();
						this.state = 435;
						this.joinBody();
						this.state = 436;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.CROSS_JOIN:
				case VtlParser.FULL_JOIN:
					_localctx = new JoinExprContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 438;
						(_localctx as JoinExprContext)._joinKeyword = this._input.LT(1);
						_la = this._input.LA(1);
						if (
							!(_la === VtlParser.CROSS_JOIN || _la === VtlParser.FULL_JOIN)
						) {
							(_localctx as JoinExprContext)._joinKeyword = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 439;
						this.match(VtlParser.LPAREN);
						this.state = 440;
						this.joinClauseWithoutUsing();
						this.state = 441;
						this.joinBody();
						this.state = 442;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public defOperators(): DefOperatorsContext {
		let _localctx: DefOperatorsContext = new DefOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 32, VtlParser.RULE_defOperators);
		let _la: number;
		try {
			this.state = 499;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
				case 1:
					_localctx = new DefOperatorContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 446;
						this.match(VtlParser.DEFINE);
						this.state = 447;
						this.match(VtlParser.OPERATOR);
						this.state = 448;
						this.operatorID();
						this.state = 449;
						this.match(VtlParser.LPAREN);
						this.state = 458;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.IDENTIFIER) {
							{
								this.state = 450;
								this.parameterItem();
								this.state = 455;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === VtlParser.COMMA) {
									{
										{
											this.state = 451;
											this.match(VtlParser.COMMA);
											this.state = 452;
											this.parameterItem();
										}
									}
									this.state = 457;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
							}
						}

						this.state = 460;
						this.match(VtlParser.RPAREN);
						this.state = 463;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.RETURNS) {
							{
								this.state = 461;
								this.match(VtlParser.RETURNS);
								this.state = 462;
								this.outputParameterType();
							}
						}

						this.state = 465;
						this.match(VtlParser.IS);
						this.state = 468;
						this._errHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this._input, 24, this._ctx)
						) {
							case 1:
								{
									this.state = 466;
									this.expr(0);
								}
								break;

							case 2:
								{
									this.state = 467;
									this.exprComponent(0);
								}
								break;
						}
						this.state = 470;
						this.match(VtlParser.END);
						this.state = 471;
						this.match(VtlParser.OPERATOR);
					}
					break;

				case 2:
					_localctx = new DefDatapointRulesetContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 473;
						this.match(VtlParser.DEFINE);
						this.state = 474;
						this.match(VtlParser.DATAPOINT);
						this.state = 475;
						this.match(VtlParser.RULESET);
						this.state = 476;
						this.rulesetID();
						this.state = 477;
						this.match(VtlParser.LPAREN);
						this.state = 478;
						this.rulesetSignature();
						this.state = 479;
						this.match(VtlParser.RPAREN);
						this.state = 480;
						this.match(VtlParser.IS);
						this.state = 481;
						this.ruleClauseDatapoint();
						this.state = 482;
						this.match(VtlParser.END);
						this.state = 483;
						this.match(VtlParser.DATAPOINT);
						this.state = 484;
						this.match(VtlParser.RULESET);
					}
					break;

				case 3:
					_localctx = new DefHierarchicalContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 486;
						this.match(VtlParser.DEFINE);
						this.state = 487;
						this.match(VtlParser.HIERARCHICAL);
						this.state = 488;
						this.match(VtlParser.RULESET);
						this.state = 489;
						this.rulesetID();
						this.state = 490;
						this.match(VtlParser.LPAREN);
						this.state = 491;
						this.hierRuleSignature();
						this.state = 492;
						this.match(VtlParser.RPAREN);
						this.state = 493;
						this.match(VtlParser.IS);
						this.state = 494;
						this.ruleClauseHierarchical();
						this.state = 495;
						this.match(VtlParser.END);
						this.state = 496;
						this.match(VtlParser.HIERARCHICAL);
						this.state = 497;
						this.match(VtlParser.RULESET);
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public genericOperators(): GenericOperatorsContext {
		let _localctx: GenericOperatorsContext = new GenericOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 34, VtlParser.RULE_genericOperators);
		let _la: number;
		try {
			this.state = 558;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.IDENTIFIER:
					_localctx = new CallDatasetContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 501;
						this.operatorID();
						this.state = 502;
						this.match(VtlParser.LPAREN);
						this.state = 511;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							_la === VtlParser.NULL_CONSTANT ||
							_la === VtlParser.OPTIONAL ||
							(((_la - 228) & ~0x1f) === 0 &&
								((1 << (_la - 228)) &
									((1 << (VtlParser.INTEGER_CONSTANT - 228)) |
										(1 << (VtlParser.NUMBER_CONSTANT - 228)) |
										(1 << (VtlParser.BOOLEAN_CONSTANT - 228)) |
										(1 << (VtlParser.STRING_CONSTANT - 228)) |
										(1 << (VtlParser.IDENTIFIER - 228)))) !==
									0)
						) {
							{
								this.state = 503;
								this.parameter();
								this.state = 508;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === VtlParser.COMMA) {
									{
										{
											this.state = 504;
											this.match(VtlParser.COMMA);
											this.state = 505;
											this.parameter();
										}
									}
									this.state = 510;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
							}
						}

						this.state = 513;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.EVAL:
					_localctx = new EvalAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 515;
						this.match(VtlParser.EVAL);
						this.state = 516;
						this.match(VtlParser.LPAREN);
						this.state = 517;
						this.routineName();
						this.state = 518;
						this.match(VtlParser.LPAREN);
						this.state = 521;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case VtlParser.IDENTIFIER:
								{
									this.state = 519;
									this.componentID();
								}
								break;
							case VtlParser.NULL_CONSTANT:
							case VtlParser.INTEGER_CONSTANT:
							case VtlParser.NUMBER_CONSTANT:
							case VtlParser.BOOLEAN_CONSTANT:
							case VtlParser.STRING_CONSTANT:
								{
									this.state = 520;
									this.constant();
								}
								break;
							case VtlParser.RPAREN:
							case VtlParser.COMMA:
								break;
							default:
								break;
						}
						this.state = 530;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.COMMA) {
							{
								{
									this.state = 523;
									this.match(VtlParser.COMMA);
									this.state = 526;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
										case VtlParser.IDENTIFIER:
											{
												this.state = 524;
												this.componentID();
											}
											break;
										case VtlParser.NULL_CONSTANT:
										case VtlParser.INTEGER_CONSTANT:
										case VtlParser.NUMBER_CONSTANT:
										case VtlParser.BOOLEAN_CONSTANT:
										case VtlParser.STRING_CONSTANT:
											{
												this.state = 525;
												this.constant();
											}
											break;
										default:
											throw new NoViableAltException(this);
									}
								}
							}
							this.state = 532;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 533;
						this.match(VtlParser.RPAREN);
						this.state = 536;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.LANGUAGE) {
							{
								this.state = 534;
								this.match(VtlParser.LANGUAGE);
								this.state = 535;
								this.match(VtlParser.STRING_CONSTANT);
							}
						}

						this.state = 540;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.RETURNS) {
							{
								this.state = 538;
								this.match(VtlParser.RETURNS);
								this.state = 539;
								this.outputParameterType();
							}
						}

						this.state = 542;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.CAST:
					_localctx = new CastExprDatasetContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 544;
						this.match(VtlParser.CAST);
						this.state = 545;
						this.match(VtlParser.LPAREN);
						this.state = 546;
						this.expr(0);
						this.state = 547;
						this.match(VtlParser.COMMA);
						this.state = 550;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case VtlParser.BOOLEAN:
							case VtlParser.DATE:
							case VtlParser.TIME_PERIOD:
							case VtlParser.NUMBER:
							case VtlParser.STRING:
							case VtlParser.INTEGER:
							case VtlParser.DURATION:
							case VtlParser.SCALAR:
							case VtlParser.TIME:
								{
									this.state = 548;
									this.basicScalarType();
								}
								break;
							case VtlParser.IDENTIFIER:
								{
									this.state = 549;
									this.valueDomainName();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
						this.state = 554;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 552;
								this.match(VtlParser.COMMA);
								this.state = 553;
								this.match(VtlParser.STRING_CONSTANT);
							}
						}

						this.state = 556;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public genericOperatorsComponent(): GenericOperatorsComponentContext {
		let _localctx: GenericOperatorsComponentContext = new GenericOperatorsComponentContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 36, VtlParser.RULE_genericOperatorsComponent);
		let _la: number;
		try {
			this.state = 588;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.IDENTIFIER:
					_localctx = new CallComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 560;
						this.operatorID();
						this.state = 561;
						this.match(VtlParser.LPAREN);
						this.state = 570;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							_la === VtlParser.NULL_CONSTANT ||
							_la === VtlParser.OPTIONAL ||
							(((_la - 228) & ~0x1f) === 0 &&
								((1 << (_la - 228)) &
									((1 << (VtlParser.INTEGER_CONSTANT - 228)) |
										(1 << (VtlParser.NUMBER_CONSTANT - 228)) |
										(1 << (VtlParser.BOOLEAN_CONSTANT - 228)) |
										(1 << (VtlParser.STRING_CONSTANT - 228)) |
										(1 << (VtlParser.IDENTIFIER - 228)))) !==
									0)
						) {
							{
								this.state = 562;
								this.parameterComponent();
								this.state = 567;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === VtlParser.COMMA) {
									{
										{
											this.state = 563;
											this.match(VtlParser.COMMA);
											this.state = 564;
											this.parameterComponent();
										}
									}
									this.state = 569;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
							}
						}

						this.state = 572;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.CAST:
					_localctx = new CastExprComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 574;
						this.match(VtlParser.CAST);
						this.state = 575;
						this.match(VtlParser.LPAREN);
						this.state = 576;
						this.exprComponent(0);
						this.state = 577;
						this.match(VtlParser.COMMA);
						this.state = 580;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case VtlParser.BOOLEAN:
							case VtlParser.DATE:
							case VtlParser.TIME_PERIOD:
							case VtlParser.NUMBER:
							case VtlParser.STRING:
							case VtlParser.INTEGER:
							case VtlParser.DURATION:
							case VtlParser.SCALAR:
							case VtlParser.TIME:
								{
									this.state = 578;
									this.basicScalarType();
								}
								break;
							case VtlParser.IDENTIFIER:
								{
									this.state = 579;
									this.valueDomainName();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
						this.state = 584;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 582;
								this.match(VtlParser.COMMA);
								this.state = 583;
								this.match(VtlParser.STRING_CONSTANT);
							}
						}

						this.state = 586;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public parameterComponent(): ParameterComponentContext {
		let _localctx: ParameterComponentContext = new ParameterComponentContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 38, VtlParser.RULE_parameterComponent);
		try {
			this.state = 593;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.IDENTIFIER:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 590;
						this.componentID();
					}
					break;
				case VtlParser.NULL_CONSTANT:
				case VtlParser.INTEGER_CONSTANT:
				case VtlParser.NUMBER_CONSTANT:
				case VtlParser.BOOLEAN_CONSTANT:
				case VtlParser.STRING_CONSTANT:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 591;
						this.constant();
					}
					break;
				case VtlParser.OPTIONAL:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 592;
						this.match(VtlParser.OPTIONAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 40, VtlParser.RULE_parameter);
		try {
			this.state = 598;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.IDENTIFIER:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 595;
						this.varID();
					}
					break;
				case VtlParser.NULL_CONSTANT:
				case VtlParser.INTEGER_CONSTANT:
				case VtlParser.NUMBER_CONSTANT:
				case VtlParser.BOOLEAN_CONSTANT:
				case VtlParser.STRING_CONSTANT:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 596;
						this.constant();
					}
					break;
				case VtlParser.OPTIONAL:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 597;
						this.match(VtlParser.OPTIONAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public stringOperators(): StringOperatorsContext {
		let _localctx: StringOperatorsContext = new StringOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 42, VtlParser.RULE_stringOperators);
		let _la: number;
		try {
			this.state = 643;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.LEN:
				case VtlParser.TRIM:
				case VtlParser.UCASE:
				case VtlParser.LCASE:
				case VtlParser.LTRIM:
				case VtlParser.RTRIM:
					_localctx = new UnaryStringFunctionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 600;
						(_localctx as UnaryStringFunctionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (
							!(
								(((_la - 81) & ~0x1f) === 0 &&
									((1 << (_la - 81)) &
										((1 << (VtlParser.LEN - 81)) |
											(1 << (VtlParser.TRIM - 81)) |
											(1 << (VtlParser.UCASE - 81)) |
											(1 << (VtlParser.LCASE - 81)))) !==
										0) ||
								_la === VtlParser.LTRIM ||
								_la === VtlParser.RTRIM
							)
						) {
							(_localctx as UnaryStringFunctionContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 601;
						this.match(VtlParser.LPAREN);
						this.state = 602;
						this.expr(0);
						this.state = 603;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.SUBSTR:
					_localctx = new SubstrAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 605;
						this.match(VtlParser.SUBSTR);
						this.state = 606;
						this.match(VtlParser.LPAREN);
						this.state = 607;
						this.expr(0);
						this.state = 612;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.COMMA) {
							{
								{
									this.state = 608;
									this.match(VtlParser.COMMA);
									this.state = 609;
									this.optionalExpr();
								}
							}
							this.state = 614;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 615;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.REPLACE:
					_localctx = new ReplaceAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 617;
						this.match(VtlParser.REPLACE);
						this.state = 618;
						this.match(VtlParser.LPAREN);
						this.state = 619;
						this.expr(0);
						this.state = 620;
						this.match(VtlParser.COMMA);
						this.state = 621;
						(_localctx as ReplaceAtomContext)._param = this.expr(0);
						this.state = 624;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 622;
								this.match(VtlParser.COMMA);
								this.state = 623;
								this.optionalExpr();
							}
						}

						this.state = 626;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.INSTR:
					_localctx = new InstrAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 628;
						this.match(VtlParser.INSTR);
						this.state = 629;
						this.match(VtlParser.LPAREN);
						this.state = 630;
						this.expr(0);
						this.state = 631;
						this.match(VtlParser.COMMA);
						this.state = 632;
						(_localctx as InstrAtomContext)._param = this.expr(0);
						this.state = 635;
						this._errHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this._input, 45, this._ctx)
						) {
							case 1:
								{
									this.state = 633;
									this.match(VtlParser.COMMA);
									this.state = 634;
									this.optionalExpr();
								}
								break;
						}
						this.state = 639;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 637;
								this.match(VtlParser.COMMA);
								this.state = 638;
								this.optionalExpr();
							}
						}

						this.state = 641;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public stringOperatorsComponent(): StringOperatorsComponentContext {
		let _localctx: StringOperatorsComponentContext = new StringOperatorsComponentContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 44, VtlParser.RULE_stringOperatorsComponent);
		let _la: number;
		try {
			this.state = 688;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.LEN:
				case VtlParser.TRIM:
				case VtlParser.UCASE:
				case VtlParser.LCASE:
				case VtlParser.LTRIM:
				case VtlParser.RTRIM:
					_localctx = new UnaryStringFunctionComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 645;
						(_localctx as UnaryStringFunctionComponentContext)._op = this._input.LT(
							1
						);
						_la = this._input.LA(1);
						if (
							!(
								(((_la - 81) & ~0x1f) === 0 &&
									((1 << (_la - 81)) &
										((1 << (VtlParser.LEN - 81)) |
											(1 << (VtlParser.TRIM - 81)) |
											(1 << (VtlParser.UCASE - 81)) |
											(1 << (VtlParser.LCASE - 81)))) !==
										0) ||
								_la === VtlParser.LTRIM ||
								_la === VtlParser.RTRIM
							)
						) {
							(_localctx as UnaryStringFunctionComponentContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 646;
						this.match(VtlParser.LPAREN);
						this.state = 647;
						this.exprComponent(0);
						this.state = 648;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.SUBSTR:
					_localctx = new SubstrAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 650;
						this.match(VtlParser.SUBSTR);
						this.state = 651;
						this.match(VtlParser.LPAREN);
						this.state = 652;
						this.exprComponent(0);
						this.state = 657;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.COMMA) {
							{
								{
									this.state = 653;
									this.match(VtlParser.COMMA);
									this.state = 654;
									this.optionalExprComponent();
								}
							}
							this.state = 659;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 660;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.REPLACE:
					_localctx = new ReplaceAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 662;
						this.match(VtlParser.REPLACE);
						this.state = 663;
						this.match(VtlParser.LPAREN);
						this.state = 664;
						this.exprComponent(0);
						this.state = 665;
						this.match(VtlParser.COMMA);
						this.state = 666;
						(_localctx as ReplaceAtomComponentContext)._param = this.exprComponent(
							0
						);
						this.state = 669;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 667;
								this.match(VtlParser.COMMA);
								this.state = 668;
								this.optionalExprComponent();
							}
						}

						this.state = 671;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.INSTR:
					_localctx = new InstrAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 673;
						this.match(VtlParser.INSTR);
						this.state = 674;
						this.match(VtlParser.LPAREN);
						this.state = 675;
						this.exprComponent(0);
						this.state = 676;
						this.match(VtlParser.COMMA);
						this.state = 677;
						(_localctx as InstrAtomComponentContext)._param = this.exprComponent(
							0
						);
						this.state = 680;
						this._errHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this._input, 50, this._ctx)
						) {
							case 1:
								{
									this.state = 678;
									this.match(VtlParser.COMMA);
									this.state = 679;
									this.optionalExprComponent();
								}
								break;
						}
						this.state = 684;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 682;
								this.match(VtlParser.COMMA);
								this.state = 683;
								this.optionalExprComponent();
							}
						}

						this.state = 686;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public numericOperators(): NumericOperatorsContext {
		let _localctx: NumericOperatorsContext = new NumericOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 46, VtlParser.RULE_numericOperators);
		let _la: number;
		try {
			this.state = 711;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.ABS:
				case VtlParser.LN:
				case VtlParser.EXP:
				case VtlParser.CEIL:
				case VtlParser.FLOOR:
				case VtlParser.SQRT:
					_localctx = new UnaryNumericContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 690;
						(_localctx as UnaryNumericContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (
							!(
								(((_la - 73) & ~0x1f) === 0 &&
									((1 << (_la - 73)) &
										((1 << (VtlParser.ABS - 73)) |
											(1 << (VtlParser.LN - 73)) |
											(1 << (VtlParser.EXP - 73)))) !==
										0) ||
								(((_la - 123) & ~0x1f) === 0 &&
									((1 << (_la - 123)) &
										((1 << (VtlParser.CEIL - 123)) |
											(1 << (VtlParser.FLOOR - 123)) |
											(1 << (VtlParser.SQRT - 123)))) !==
										0)
							)
						) {
							(_localctx as UnaryNumericContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 691;
						this.match(VtlParser.LPAREN);
						this.state = 692;
						this.expr(0);
						this.state = 693;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.TRUNC:
				case VtlParser.ROUND:
					_localctx = new UnaryWithOptionalNumericContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 695;
						(_localctx as UnaryWithOptionalNumericContext)._op = this._input.LT(
							1
						);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.TRUNC || _la === VtlParser.ROUND)) {
							(_localctx as UnaryWithOptionalNumericContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 696;
						this.match(VtlParser.LPAREN);
						this.state = 697;
						this.expr(0);
						this.state = 700;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 698;
								this.match(VtlParser.COMMA);
								this.state = 699;
								this.optionalExpr();
							}
						}

						this.state = 702;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.LOG:
				case VtlParser.POWER:
				case VtlParser.MOD:
					_localctx = new BinaryNumericContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 704;
						(_localctx as BinaryNumericContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (
							!(
								((_la - 76) & ~0x1f) === 0 &&
								((1 << (_la - 76)) &
									((1 << (VtlParser.LOG - 76)) |
										(1 << (VtlParser.POWER - 76)) |
										(1 << (VtlParser.MOD - 76)))) !==
									0
							)
						) {
							(_localctx as BinaryNumericContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 705;
						this.match(VtlParser.LPAREN);
						this.state = 706;
						(_localctx as BinaryNumericContext)._left = this.expr(0);
						this.state = 707;
						this.match(VtlParser.COMMA);
						this.state = 708;
						(_localctx as BinaryNumericContext)._right = this.expr(0);
						this.state = 709;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public numericOperatorsComponent(): NumericOperatorsComponentContext {
		let _localctx: NumericOperatorsComponentContext = new NumericOperatorsComponentContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 48, VtlParser.RULE_numericOperatorsComponent);
		let _la: number;
		try {
			this.state = 734;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.ABS:
				case VtlParser.LN:
				case VtlParser.EXP:
				case VtlParser.CEIL:
				case VtlParser.FLOOR:
				case VtlParser.SQRT:
					_localctx = new UnaryNumericComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 713;
						(_localctx as UnaryNumericComponentContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (
							!(
								(((_la - 73) & ~0x1f) === 0 &&
									((1 << (_la - 73)) &
										((1 << (VtlParser.ABS - 73)) |
											(1 << (VtlParser.LN - 73)) |
											(1 << (VtlParser.EXP - 73)))) !==
										0) ||
								(((_la - 123) & ~0x1f) === 0 &&
									((1 << (_la - 123)) &
										((1 << (VtlParser.CEIL - 123)) |
											(1 << (VtlParser.FLOOR - 123)) |
											(1 << (VtlParser.SQRT - 123)))) !==
										0)
							)
						) {
							(_localctx as UnaryNumericComponentContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 714;
						this.match(VtlParser.LPAREN);
						this.state = 715;
						this.exprComponent(0);
						this.state = 716;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.TRUNC:
				case VtlParser.ROUND:
					_localctx = new UnaryWithOptionalNumericComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 718;
						(_localctx as UnaryWithOptionalNumericComponentContext)._op = this._input.LT(
							1
						);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.TRUNC || _la === VtlParser.ROUND)) {
							(_localctx as UnaryWithOptionalNumericComponentContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 719;
						this.match(VtlParser.LPAREN);
						this.state = 720;
						this.exprComponent(0);
						this.state = 723;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 721;
								this.match(VtlParser.COMMA);
								this.state = 722;
								this.optionalExprComponent();
							}
						}

						this.state = 725;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.LOG:
				case VtlParser.POWER:
				case VtlParser.MOD:
					_localctx = new BinaryNumericComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 727;
						(_localctx as BinaryNumericComponentContext)._op = this._input.LT(
							1
						);
						_la = this._input.LA(1);
						if (
							!(
								((_la - 76) & ~0x1f) === 0 &&
								((1 << (_la - 76)) &
									((1 << (VtlParser.LOG - 76)) |
										(1 << (VtlParser.POWER - 76)) |
										(1 << (VtlParser.MOD - 76)))) !==
									0
							)
						) {
							(_localctx as BinaryNumericComponentContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 728;
						this.match(VtlParser.LPAREN);
						this.state = 729;
						(_localctx as BinaryNumericComponentContext)._left = this.exprComponent(
							0
						);
						this.state = 730;
						this.match(VtlParser.COMMA);
						this.state = 731;
						(_localctx as BinaryNumericComponentContext)._right = this.exprComponent(
							0
						);
						this.state = 732;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public comparisonOperators(): ComparisonOperatorsContext {
		let _localctx: ComparisonOperatorsContext = new ComparisonOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 50, VtlParser.RULE_comparisonOperators);
		let _la: number;
		try {
			this.state = 768;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.BETWEEN:
					_localctx = new BetweenAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 736;
						this.match(VtlParser.BETWEEN);
						this.state = 737;
						this.match(VtlParser.LPAREN);
						this.state = 738;
						(_localctx as BetweenAtomContext)._element = this.expr(0);
						this.state = 739;
						this.match(VtlParser.COMMA);
						this.state = 740;
						(_localctx as BetweenAtomContext)._from_ = this.expr(0);
						this.state = 741;
						this.match(VtlParser.COMMA);
						this.state = 742;
						(_localctx as BetweenAtomContext)._to_ = this.expr(0);
						this.state = 743;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.CHARSET_MATCH:
					_localctx = new CharsetMatchAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 745;
						this.match(VtlParser.CHARSET_MATCH);
						this.state = 746;
						this.match(VtlParser.LPAREN);
						this.state = 747;
						(_localctx as CharsetMatchAtomContext)._left = this.expr(0);
						this.state = 748;
						this.match(VtlParser.COMMA);
						this.state = 749;
						(_localctx as CharsetMatchAtomContext)._right = this.expr(0);
						this.state = 750;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.ISNULL:
					_localctx = new IsNullAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 752;
						this.match(VtlParser.ISNULL);
						this.state = 753;
						this.match(VtlParser.LPAREN);
						this.state = 754;
						this.expr(0);
						this.state = 755;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.EXISTS_IN:
					_localctx = new ExistInAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 757;
						this.match(VtlParser.EXISTS_IN);
						this.state = 758;
						this.match(VtlParser.LPAREN);
						this.state = 759;
						(_localctx as ExistInAtomContext)._left = this.expr(0);
						this.state = 760;
						this.match(VtlParser.COMMA);
						this.state = 761;
						(_localctx as ExistInAtomContext)._right = this.expr(0);
						this.state = 764;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 762;
								this.match(VtlParser.COMMA);
								this.state = 763;
								this.retainType();
							}
						}

						this.state = 766;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public comparisonOperatorsComponent(): ComparisonOperatorsComponentContext {
		let _localctx: ComparisonOperatorsComponentContext = new ComparisonOperatorsComponentContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 52, VtlParser.RULE_comparisonOperatorsComponent);
		try {
			this.state = 791;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.BETWEEN:
					_localctx = new BetweenAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 770;
						this.match(VtlParser.BETWEEN);
						this.state = 771;
						this.match(VtlParser.LPAREN);
						this.state = 772;
						(_localctx as BetweenAtomComponentContext)._element = this.exprComponent(
							0
						);
						this.state = 773;
						this.match(VtlParser.COMMA);
						this.state = 774;
						(_localctx as BetweenAtomComponentContext)._from_ = this.exprComponent(
							0
						);
						this.state = 775;
						this.match(VtlParser.COMMA);
						this.state = 776;
						(_localctx as BetweenAtomComponentContext)._to_ = this.exprComponent(
							0
						);
						this.state = 777;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.CHARSET_MATCH:
					_localctx = new CharsetMatchAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 779;
						this.match(VtlParser.CHARSET_MATCH);
						this.state = 780;
						this.match(VtlParser.LPAREN);
						this.state = 781;
						(_localctx as CharsetMatchAtomComponentContext)._left = this.exprComponent(
							0
						);
						this.state = 782;
						this.match(VtlParser.COMMA);
						this.state = 783;
						(_localctx as CharsetMatchAtomComponentContext)._right = this.exprComponent(
							0
						);
						this.state = 784;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.ISNULL:
					_localctx = new IsNullAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 786;
						this.match(VtlParser.ISNULL);
						this.state = 787;
						this.match(VtlParser.LPAREN);
						this.state = 788;
						this.exprComponent(0);
						this.state = 789;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public timeOperators(): TimeOperatorsContext {
		let _localctx: TimeOperatorsContext = new TimeOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 54, VtlParser.RULE_timeOperators);
		let _la: number;
		try {
			this.state = 842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.PERIOD_INDICATOR:
					_localctx = new PeriodAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 793;
						this.match(VtlParser.PERIOD_INDICATOR);
						this.state = 794;
						this.match(VtlParser.LPAREN);
						this.state = 796;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							((_la & ~0x1f) === 0 &&
								((1 << _la) &
									((1 << VtlParser.LPAREN) |
										(1 << VtlParser.PLUS) |
										(1 << VtlParser.MINUS) |
										(1 << VtlParser.EVAL) |
										(1 << VtlParser.IF) |
										(1 << VtlParser.CURRENT_DATE))) !==
									0) ||
							(((_la - 39) & ~0x1f) === 0 &&
								((1 << (_la - 39)) &
									((1 << (VtlParser.NOT - 39)) |
										(1 << (VtlParser.BETWEEN - 39)) |
										(1 << (VtlParser.NULL_CONSTANT - 39)) |
										(1 << (VtlParser.ISNULL - 39)) |
										(1 << (VtlParser.UNION - 39)) |
										(1 << (VtlParser.SYMDIFF - 39)) |
										(1 << (VtlParser.INTERSECT - 39)) |
										(1 << (VtlParser.CHECK - 39)) |
										(1 << (VtlParser.EXISTS_IN - 39)) |
										(1 << (VtlParser.MIN - 39)) |
										(1 << (VtlParser.MAX - 39)))) !==
									0) ||
							(((_la - 73) & ~0x1f) === 0 &&
								((1 << (_la - 73)) &
									((1 << (VtlParser.ABS - 73)) |
										(1 << (VtlParser.LN - 73)) |
										(1 << (VtlParser.LOG - 73)) |
										(1 << (VtlParser.TRUNC - 73)) |
										(1 << (VtlParser.ROUND - 73)) |
										(1 << (VtlParser.POWER - 73)) |
										(1 << (VtlParser.MOD - 73)) |
										(1 << (VtlParser.LEN - 73)) |
										(1 << (VtlParser.TRIM - 73)) |
										(1 << (VtlParser.UCASE - 73)) |
										(1 << (VtlParser.LCASE - 73)) |
										(1 << (VtlParser.SUBSTR - 73)) |
										(1 << (VtlParser.SUM - 73)) |
										(1 << (VtlParser.AVG - 73)) |
										(1 << (VtlParser.MEDIAN - 73)) |
										(1 << (VtlParser.COUNT - 73)) |
										(1 << (VtlParser.EXP - 73)) |
										(1 << (VtlParser.CHARSET_MATCH - 73)) |
										(1 << (VtlParser.NVL - 73)) |
										(1 << (VtlParser.HIERARCHY - 73)))) !==
									0) ||
							(((_la - 119) & ~0x1f) === 0 &&
								((1 << (_la - 119)) &
									((1 << (VtlParser.LTRIM - 119)) |
										(1 << (VtlParser.RTRIM - 119)) |
										(1 << (VtlParser.INSTR - 119)) |
										(1 << (VtlParser.REPLACE - 119)) |
										(1 << (VtlParser.CEIL - 119)) |
										(1 << (VtlParser.FLOOR - 119)) |
										(1 << (VtlParser.SQRT - 119)) |
										(1 << (VtlParser.SETDIFF - 119)) |
										(1 << (VtlParser.STDDEV_POP - 119)) |
										(1 << (VtlParser.STDDEV_SAMP - 119)) |
										(1 << (VtlParser.VAR_POP - 119)) |
										(1 << (VtlParser.VAR_SAMP - 119)) |
										(1 << (VtlParser.FIRST_VALUE - 119)) |
										(1 << (VtlParser.LAST_VALUE - 119)) |
										(1 << (VtlParser.LAG - 119)) |
										(1 << (VtlParser.LEAD - 119)) |
										(1 << (VtlParser.RATIO_TO_REPORT - 119)) |
										(1 << (VtlParser.FILL_TIME_SERIES - 119)) |
										(1 << (VtlParser.FLOW_TO_STOCK - 119)))) !==
									0) ||
							(((_la - 151) & ~0x1f) === 0 &&
								((1 << (_la - 151)) &
									((1 << (VtlParser.STOCK_TO_FLOW - 151)) |
										(1 << (VtlParser.TIMESHIFT - 151)) |
										(1 << (VtlParser.INNER_JOIN - 151)) |
										(1 << (VtlParser.LEFT_JOIN - 151)) |
										(1 << (VtlParser.CROSS_JOIN - 151)))) !==
									0) ||
							(((_la - 183) & ~0x1f) === 0 &&
								((1 << (_la - 183)) &
									((1 << (VtlParser.FULL_JOIN - 183)) |
										(1 << (VtlParser.PERIOD_INDICATOR - 183)) |
										(1 << (VtlParser.TIME_AGG - 183)) |
										(1 << (VtlParser.CAST - 183)) |
										(1 << (VtlParser.CHECK_DATAPOINT - 183)) |
										(1 << (VtlParser.CHECK_HIERARCHY - 183)))) !==
									0) ||
							(((_la - 228) & ~0x1f) === 0 &&
								((1 << (_la - 228)) &
									((1 << (VtlParser.INTEGER_CONSTANT - 228)) |
										(1 << (VtlParser.NUMBER_CONSTANT - 228)) |
										(1 << (VtlParser.BOOLEAN_CONSTANT - 228)) |
										(1 << (VtlParser.STRING_CONSTANT - 228)) |
										(1 << (VtlParser.IDENTIFIER - 228)))) !==
									0)
						) {
							{
								this.state = 795;
								this.expr(0);
							}
						}

						this.state = 798;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.FILL_TIME_SERIES:
					_localctx = new FillTimeAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 799;
						this.match(VtlParser.FILL_TIME_SERIES);
						this.state = 800;
						this.match(VtlParser.LPAREN);
						this.state = 801;
						this.expr(0);
						this.state = 804;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 802;
								this.match(VtlParser.COMMA);
								this.state = 803;
								_la = this._input.LA(1);
								if (!(_la === VtlParser.ALL || _la === VtlParser.SINGLE)) {
									this._errHandler.recoverInline(this);
								} else {
									if (this._input.LA(1) === Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
							}
						}

						this.state = 806;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.FLOW_TO_STOCK:
				case VtlParser.STOCK_TO_FLOW:
					_localctx = new FlowAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 808;
						(_localctx as FlowAtomContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (
							!(
								_la === VtlParser.FLOW_TO_STOCK ||
								_la === VtlParser.STOCK_TO_FLOW
							)
						) {
							(_localctx as FlowAtomContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 809;
						this.match(VtlParser.LPAREN);
						this.state = 810;
						this.expr(0);
						this.state = 811;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.TIMESHIFT:
					_localctx = new TimeShiftAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 813;
						this.match(VtlParser.TIMESHIFT);
						this.state = 814;
						this.match(VtlParser.LPAREN);
						this.state = 815;
						this.expr(0);
						this.state = 816;
						this.match(VtlParser.COMMA);
						this.state = 817;
						this.signedInteger();
						this.state = 818;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.TIME_AGG:
					_localctx = new TimeAggAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 820;
						this.match(VtlParser.TIME_AGG);
						this.state = 821;
						this.match(VtlParser.LPAREN);
						this.state = 822;
						this.match(VtlParser.STRING_CONSTANT);
						this.state = 825;
						this._errHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this._input, 62, this._ctx)
						) {
							case 1:
								{
									this.state = 823;
									this.match(VtlParser.COMMA);
									this.state = 824;
									_la = this._input.LA(1);
									if (
										!(
											_la === VtlParser.OPTIONAL ||
											_la === VtlParser.STRING_CONSTANT
										)
									) {
										this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) === Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
								}
								break;
						}
						this.state = 832;
						this._errHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this._input, 64, this._ctx)
						) {
							case 1:
								{
									this.state = 827;
									this.match(VtlParser.COMMA);
									this.state = 830;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
										case VtlParser.LPAREN:
										case VtlParser.PLUS:
										case VtlParser.MINUS:
										case VtlParser.EVAL:
										case VtlParser.IF:
										case VtlParser.CURRENT_DATE:
										case VtlParser.NOT:
										case VtlParser.BETWEEN:
										case VtlParser.NULL_CONSTANT:
										case VtlParser.ISNULL:
										case VtlParser.UNION:
										case VtlParser.SYMDIFF:
										case VtlParser.INTERSECT:
										case VtlParser.CHECK:
										case VtlParser.EXISTS_IN:
										case VtlParser.MIN:
										case VtlParser.MAX:
										case VtlParser.ABS:
										case VtlParser.LN:
										case VtlParser.LOG:
										case VtlParser.TRUNC:
										case VtlParser.ROUND:
										case VtlParser.POWER:
										case VtlParser.MOD:
										case VtlParser.LEN:
										case VtlParser.TRIM:
										case VtlParser.UCASE:
										case VtlParser.LCASE:
										case VtlParser.SUBSTR:
										case VtlParser.SUM:
										case VtlParser.AVG:
										case VtlParser.MEDIAN:
										case VtlParser.COUNT:
										case VtlParser.EXP:
										case VtlParser.CHARSET_MATCH:
										case VtlParser.NVL:
										case VtlParser.HIERARCHY:
										case VtlParser.LTRIM:
										case VtlParser.RTRIM:
										case VtlParser.INSTR:
										case VtlParser.REPLACE:
										case VtlParser.CEIL:
										case VtlParser.FLOOR:
										case VtlParser.SQRT:
										case VtlParser.SETDIFF:
										case VtlParser.STDDEV_POP:
										case VtlParser.STDDEV_SAMP:
										case VtlParser.VAR_POP:
										case VtlParser.VAR_SAMP:
										case VtlParser.FIRST_VALUE:
										case VtlParser.LAST_VALUE:
										case VtlParser.LAG:
										case VtlParser.LEAD:
										case VtlParser.RATIO_TO_REPORT:
										case VtlParser.FILL_TIME_SERIES:
										case VtlParser.FLOW_TO_STOCK:
										case VtlParser.STOCK_TO_FLOW:
										case VtlParser.TIMESHIFT:
										case VtlParser.INNER_JOIN:
										case VtlParser.LEFT_JOIN:
										case VtlParser.CROSS_JOIN:
										case VtlParser.FULL_JOIN:
										case VtlParser.PERIOD_INDICATOR:
										case VtlParser.TIME_AGG:
										case VtlParser.CAST:
										case VtlParser.CHECK_DATAPOINT:
										case VtlParser.CHECK_HIERARCHY:
										case VtlParser.INTEGER_CONSTANT:
										case VtlParser.NUMBER_CONSTANT:
										case VtlParser.BOOLEAN_CONSTANT:
										case VtlParser.STRING_CONSTANT:
										case VtlParser.IDENTIFIER:
											{
												this.state = 828;
												this.expr(0);
											}
											break;
										case VtlParser.OPTIONAL:
											{
												this.state = 829;
												this.match(VtlParser.OPTIONAL);
											}
											break;
										default:
											throw new NoViableAltException(this);
									}
								}
								break;
						}
						this.state = 836;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 834;
								this.match(VtlParser.COMMA);
								this.state = 835;
								_la = this._input.LA(1);
								if (!(_la === VtlParser.FIRST || _la === VtlParser.LAST)) {
									this._errHandler.recoverInline(this);
								} else {
									if (this._input.LA(1) === Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
							}
						}

						this.state = 838;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.CURRENT_DATE:
					_localctx = new CurrentDateAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 839;
						this.match(VtlParser.CURRENT_DATE);
						this.state = 840;
						this.match(VtlParser.LPAREN);
						this.state = 841;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public timeOperatorsComponent(): TimeOperatorsComponentContext {
		let _localctx: TimeOperatorsComponentContext = new TimeOperatorsComponentContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 56, VtlParser.RULE_timeOperatorsComponent);
		let _la: number;
		try {
			this.state = 893;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.PERIOD_INDICATOR:
					_localctx = new PeriodAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 844;
						this.match(VtlParser.PERIOD_INDICATOR);
						this.state = 845;
						this.match(VtlParser.LPAREN);
						this.state = 847;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							((_la & ~0x1f) === 0 &&
								((1 << _la) &
									((1 << VtlParser.LPAREN) |
										(1 << VtlParser.PLUS) |
										(1 << VtlParser.MINUS) |
										(1 << VtlParser.IF) |
										(1 << VtlParser.CURRENT_DATE))) !==
									0) ||
							(((_la - 39) & ~0x1f) === 0 &&
								((1 << (_la - 39)) &
									((1 << (VtlParser.NOT - 39)) |
										(1 << (VtlParser.BETWEEN - 39)) |
										(1 << (VtlParser.NULL_CONSTANT - 39)) |
										(1 << (VtlParser.ISNULL - 39)) |
										(1 << (VtlParser.RANK - 39)) |
										(1 << (VtlParser.MIN - 39)) |
										(1 << (VtlParser.MAX - 39)))) !==
									0) ||
							(((_la - 73) & ~0x1f) === 0 &&
								((1 << (_la - 73)) &
									((1 << (VtlParser.ABS - 73)) |
										(1 << (VtlParser.LN - 73)) |
										(1 << (VtlParser.LOG - 73)) |
										(1 << (VtlParser.TRUNC - 73)) |
										(1 << (VtlParser.ROUND - 73)) |
										(1 << (VtlParser.POWER - 73)) |
										(1 << (VtlParser.MOD - 73)) |
										(1 << (VtlParser.LEN - 73)) |
										(1 << (VtlParser.TRIM - 73)) |
										(1 << (VtlParser.UCASE - 73)) |
										(1 << (VtlParser.LCASE - 73)) |
										(1 << (VtlParser.SUBSTR - 73)) |
										(1 << (VtlParser.SUM - 73)) |
										(1 << (VtlParser.AVG - 73)) |
										(1 << (VtlParser.MEDIAN - 73)) |
										(1 << (VtlParser.COUNT - 73)) |
										(1 << (VtlParser.EXP - 73)) |
										(1 << (VtlParser.CHARSET_MATCH - 73)) |
										(1 << (VtlParser.NVL - 73)))) !==
									0) ||
							(((_la - 119) & ~0x1f) === 0 &&
								((1 << (_la - 119)) &
									((1 << (VtlParser.LTRIM - 119)) |
										(1 << (VtlParser.RTRIM - 119)) |
										(1 << (VtlParser.INSTR - 119)) |
										(1 << (VtlParser.REPLACE - 119)) |
										(1 << (VtlParser.CEIL - 119)) |
										(1 << (VtlParser.FLOOR - 119)) |
										(1 << (VtlParser.SQRT - 119)) |
										(1 << (VtlParser.STDDEV_POP - 119)) |
										(1 << (VtlParser.STDDEV_SAMP - 119)) |
										(1 << (VtlParser.VAR_POP - 119)) |
										(1 << (VtlParser.VAR_SAMP - 119)) |
										(1 << (VtlParser.FIRST_VALUE - 119)) |
										(1 << (VtlParser.LAST_VALUE - 119)) |
										(1 << (VtlParser.LAG - 119)) |
										(1 << (VtlParser.LEAD - 119)) |
										(1 << (VtlParser.RATIO_TO_REPORT - 119)) |
										(1 << (VtlParser.FILL_TIME_SERIES - 119)) |
										(1 << (VtlParser.FLOW_TO_STOCK - 119)))) !==
									0) ||
							_la === VtlParser.STOCK_TO_FLOW ||
							_la === VtlParser.TIMESHIFT ||
							(((_la - 195) & ~0x1f) === 0 &&
								((1 << (_la - 195)) &
									((1 << (VtlParser.PERIOD_INDICATOR - 195)) |
										(1 << (VtlParser.TIME_AGG - 195)) |
										(1 << (VtlParser.CAST - 195)))) !==
									0) ||
							(((_la - 228) & ~0x1f) === 0 &&
								((1 << (_la - 228)) &
									((1 << (VtlParser.INTEGER_CONSTANT - 228)) |
										(1 << (VtlParser.NUMBER_CONSTANT - 228)) |
										(1 << (VtlParser.BOOLEAN_CONSTANT - 228)) |
										(1 << (VtlParser.STRING_CONSTANT - 228)) |
										(1 << (VtlParser.IDENTIFIER - 228)))) !==
									0)
						) {
							{
								this.state = 846;
								this.exprComponent(0);
							}
						}

						this.state = 849;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.FILL_TIME_SERIES:
					_localctx = new FillTimeAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 850;
						this.match(VtlParser.FILL_TIME_SERIES);
						this.state = 851;
						this.match(VtlParser.LPAREN);
						this.state = 852;
						this.exprComponent(0);
						this.state = 855;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 853;
								this.match(VtlParser.COMMA);
								this.state = 854;
								_la = this._input.LA(1);
								if (!(_la === VtlParser.ALL || _la === VtlParser.SINGLE)) {
									this._errHandler.recoverInline(this);
								} else {
									if (this._input.LA(1) === Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
							}
						}

						this.state = 857;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.FLOW_TO_STOCK:
				case VtlParser.STOCK_TO_FLOW:
					_localctx = new FlowAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 859;
						(_localctx as FlowAtomComponentContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (
							!(
								_la === VtlParser.FLOW_TO_STOCK ||
								_la === VtlParser.STOCK_TO_FLOW
							)
						) {
							(_localctx as FlowAtomComponentContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 860;
						this.match(VtlParser.LPAREN);
						this.state = 861;
						this.exprComponent(0);
						this.state = 862;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.TIMESHIFT:
					_localctx = new TimeShiftAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 864;
						this.match(VtlParser.TIMESHIFT);
						this.state = 865;
						this.match(VtlParser.LPAREN);
						this.state = 866;
						this.exprComponent(0);
						this.state = 867;
						this.match(VtlParser.COMMA);
						this.state = 868;
						this.signedInteger();
						this.state = 869;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.TIME_AGG:
					_localctx = new TimeAggAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 871;
						this.match(VtlParser.TIME_AGG);
						this.state = 872;
						this.match(VtlParser.LPAREN);
						this.state = 873;
						this.match(VtlParser.STRING_CONSTANT);
						this.state = 876;
						this._errHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this._input, 69, this._ctx)
						) {
							case 1:
								{
									this.state = 874;
									this.match(VtlParser.COMMA);
									this.state = 875;
									_la = this._input.LA(1);
									if (
										!(
											_la === VtlParser.OPTIONAL ||
											_la === VtlParser.STRING_CONSTANT
										)
									) {
										this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) === Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
								}
								break;
						}
						this.state = 883;
						this._errHandler.sync(this);
						switch (
							this.interpreter.adaptivePredict(this._input, 71, this._ctx)
						) {
							case 1:
								{
									this.state = 878;
									this.match(VtlParser.COMMA);
									this.state = 881;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
										case VtlParser.LPAREN:
										case VtlParser.PLUS:
										case VtlParser.MINUS:
										case VtlParser.IF:
										case VtlParser.CURRENT_DATE:
										case VtlParser.NOT:
										case VtlParser.BETWEEN:
										case VtlParser.NULL_CONSTANT:
										case VtlParser.ISNULL:
										case VtlParser.RANK:
										case VtlParser.MIN:
										case VtlParser.MAX:
										case VtlParser.ABS:
										case VtlParser.LN:
										case VtlParser.LOG:
										case VtlParser.TRUNC:
										case VtlParser.ROUND:
										case VtlParser.POWER:
										case VtlParser.MOD:
										case VtlParser.LEN:
										case VtlParser.TRIM:
										case VtlParser.UCASE:
										case VtlParser.LCASE:
										case VtlParser.SUBSTR:
										case VtlParser.SUM:
										case VtlParser.AVG:
										case VtlParser.MEDIAN:
										case VtlParser.COUNT:
										case VtlParser.EXP:
										case VtlParser.CHARSET_MATCH:
										case VtlParser.NVL:
										case VtlParser.LTRIM:
										case VtlParser.RTRIM:
										case VtlParser.INSTR:
										case VtlParser.REPLACE:
										case VtlParser.CEIL:
										case VtlParser.FLOOR:
										case VtlParser.SQRT:
										case VtlParser.STDDEV_POP:
										case VtlParser.STDDEV_SAMP:
										case VtlParser.VAR_POP:
										case VtlParser.VAR_SAMP:
										case VtlParser.FIRST_VALUE:
										case VtlParser.LAST_VALUE:
										case VtlParser.LAG:
										case VtlParser.LEAD:
										case VtlParser.RATIO_TO_REPORT:
										case VtlParser.FILL_TIME_SERIES:
										case VtlParser.FLOW_TO_STOCK:
										case VtlParser.STOCK_TO_FLOW:
										case VtlParser.TIMESHIFT:
										case VtlParser.PERIOD_INDICATOR:
										case VtlParser.TIME_AGG:
										case VtlParser.CAST:
										case VtlParser.INTEGER_CONSTANT:
										case VtlParser.NUMBER_CONSTANT:
										case VtlParser.BOOLEAN_CONSTANT:
										case VtlParser.STRING_CONSTANT:
										case VtlParser.IDENTIFIER:
											{
												this.state = 879;
												this.exprComponent(0);
											}
											break;
										case VtlParser.OPTIONAL:
											{
												this.state = 880;
												this.match(VtlParser.OPTIONAL);
											}
											break;
										default:
											throw new NoViableAltException(this);
									}
								}
								break;
						}
						this.state = 887;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 885;
								this.match(VtlParser.COMMA);
								this.state = 886;
								_la = this._input.LA(1);
								if (!(_la === VtlParser.FIRST || _la === VtlParser.LAST)) {
									this._errHandler.recoverInline(this);
								} else {
									if (this._input.LA(1) === Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
							}
						}

						this.state = 889;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.CURRENT_DATE:
					_localctx = new CurrentDateAtomComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 890;
						this.match(VtlParser.CURRENT_DATE);
						this.state = 891;
						this.match(VtlParser.LPAREN);
						this.state = 892;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public setOperators(): SetOperatorsContext {
		let _localctx: SetOperatorsContext = new SetOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 58, VtlParser.RULE_setOperators);
		let _la: number;
		try {
			this.state = 924;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.UNION:
					_localctx = new UnionAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 895;
						this.match(VtlParser.UNION);
						this.state = 896;
						this.match(VtlParser.LPAREN);
						this.state = 897;
						(_localctx as UnionAtomContext)._left = this.expr(0);
						this.state = 900;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
								{
									this.state = 898;
									this.match(VtlParser.COMMA);
									this.state = 899;
									this.expr(0);
								}
							}
							this.state = 902;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === VtlParser.COMMA);
						this.state = 904;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.INTERSECT:
					_localctx = new IntersectAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 906;
						this.match(VtlParser.INTERSECT);
						this.state = 907;
						this.match(VtlParser.LPAREN);
						this.state = 908;
						(_localctx as IntersectAtomContext)._left = this.expr(0);
						this.state = 911;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
								{
									this.state = 909;
									this.match(VtlParser.COMMA);
									this.state = 910;
									this.expr(0);
								}
							}
							this.state = 913;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === VtlParser.COMMA);
						this.state = 915;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.SYMDIFF:
				case VtlParser.SETDIFF:
					_localctx = new SetOrSYmDiffAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 917;
						(_localctx as SetOrSYmDiffAtomContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.SYMDIFF || _la === VtlParser.SETDIFF)) {
							(_localctx as SetOrSYmDiffAtomContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 918;
						this.match(VtlParser.LPAREN);
						this.state = 919;
						(_localctx as SetOrSYmDiffAtomContext)._left = this.expr(0);
						this.state = 920;
						this.match(VtlParser.COMMA);
						this.state = 921;
						(_localctx as SetOrSYmDiffAtomContext)._right = this.expr(0);
						this.state = 922;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public hierarchyOperators(): HierarchyOperatorsContext {
		let _localctx: HierarchyOperatorsContext = new HierarchyOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 60, VtlParser.RULE_hierarchyOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 926;
				this.match(VtlParser.HIERARCHY);
				this.state = 927;
				this.match(VtlParser.LPAREN);
				this.state = 928;
				_localctx._op = this.expr(0);
				this.state = 929;
				this.match(VtlParser.COMMA);
				this.state = 930;
				_localctx._hrName = this.match(VtlParser.IDENTIFIER);
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.CONDITION) {
					{
						this.state = 931;
						this.conditionClause();
					}
				}

				this.state = 936;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
					case 1:
						{
							this.state = 934;
							this.match(VtlParser.RULE);
							this.state = 935;
							_localctx._ruleComponent = this.componentID();
						}
						break;
				}
				this.state = 939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la - 212) & ~0x1f) === 0 &&
					((1 << (_la - 212)) &
						((1 << (VtlParser.NON_NULL - 212)) |
							(1 << (VtlParser.NON_ZERO - 212)) |
							(1 << (VtlParser.PARTIAL_NULL - 212)) |
							(1 << (VtlParser.PARTIAL_ZERO - 212)) |
							(1 << (VtlParser.ALWAYS_NULL - 212)) |
							(1 << (VtlParser.ALWAYS_ZERO - 212)))) !==
						0
				) {
					{
						this.state = 938;
						this.validationMode();
					}
				}

				this.state = 942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					_la === VtlParser.DATASET ||
					_la === VtlParser.RULE ||
					_la === VtlParser.RULE_PRIORITY
				) {
					{
						this.state = 941;
						this.inputModeHierarchy();
					}
				}

				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ALL || _la === VtlParser.COMPUTED) {
					{
						this.state = 944;
						this.outputModeHierarchy();
					}
				}

				this.state = 947;
				this.match(VtlParser.RPAREN);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public validationOperators(): ValidationOperatorsContext {
		let _localctx: ValidationOperatorsContext = new ValidationOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 62, VtlParser.RULE_validationOperators);
		let _la: number;
		try {
			this.state = 1010;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.CHECK_DATAPOINT:
					_localctx = new ValidateDPrulesetContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 949;
						this.match(VtlParser.CHECK_DATAPOINT);
						this.state = 950;
						this.match(VtlParser.LPAREN);
						this.state = 951;
						(_localctx as ValidateDPrulesetContext)._op = this.expr(0);
						this.state = 952;
						this.match(VtlParser.COMMA);
						this.state = 953;
						(_localctx as ValidateDPrulesetContext)._dpName = this.match(
							VtlParser.IDENTIFIER
						);
						this.state = 963;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMPONENTS) {
							{
								this.state = 954;
								this.match(VtlParser.COMPONENTS);
								this.state = 955;
								this.componentID();
								this.state = 960;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === VtlParser.COMMA) {
									{
										{
											this.state = 956;
											this.match(VtlParser.COMMA);
											this.state = 957;
											this.componentID();
										}
									}
									this.state = 962;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
							}
						}

						this.state = 966;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							_la === VtlParser.ALL ||
							_la === VtlParser.INVALID ||
							_la === VtlParser.ALL_MEASURES
						) {
							{
								this.state = 965;
								this.validationOutput();
							}
						}

						this.state = 968;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.CHECK_HIERARCHY:
					_localctx = new ValidateHRrulesetContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 970;
						this.match(VtlParser.CHECK_HIERARCHY);
						this.state = 971;
						this.match(VtlParser.LPAREN);
						this.state = 972;
						(_localctx as ValidateHRrulesetContext)._op = this.expr(0);
						this.state = 973;
						this.match(VtlParser.COMMA);
						this.state = 974;
						(_localctx as ValidateHRrulesetContext)._hrName = this.match(
							VtlParser.IDENTIFIER
						);
						this.state = 976;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.CONDITION) {
							{
								this.state = 975;
								this.conditionClause();
							}
						}

						this.state = 980;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.RULE) {
							{
								this.state = 978;
								this.match(VtlParser.RULE);
								this.state = 979;
								this.componentID();
							}
						}

						this.state = 983;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							((_la - 212) & ~0x1f) === 0 &&
							((1 << (_la - 212)) &
								((1 << (VtlParser.NON_NULL - 212)) |
									(1 << (VtlParser.NON_ZERO - 212)) |
									(1 << (VtlParser.PARTIAL_NULL - 212)) |
									(1 << (VtlParser.PARTIAL_ZERO - 212)) |
									(1 << (VtlParser.ALWAYS_NULL - 212)) |
									(1 << (VtlParser.ALWAYS_ZERO - 212)))) !==
								0
						) {
							{
								this.state = 982;
								this.validationMode();
							}
						}

						this.state = 986;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							_la === VtlParser.DATASET ||
							_la === VtlParser.DATASET_PRIORITY
						) {
							{
								this.state = 985;
								this.inputMode();
							}
						}

						this.state = 989;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							_la === VtlParser.ALL ||
							_la === VtlParser.INVALID ||
							_la === VtlParser.ALL_MEASURES
						) {
							{
								this.state = 988;
								this.validationOutput();
							}
						}

						this.state = 991;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.CHECK:
					_localctx = new ValidationSimpleContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 993;
						this.match(VtlParser.CHECK);
						this.state = 994;
						this.match(VtlParser.LPAREN);
						this.state = 995;
						(_localctx as ValidationSimpleContext)._op = this.expr(0);
						this.state = 997;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.ERRORCODE) {
							{
								this.state = 996;
								(_localctx as ValidationSimpleContext)._codeErr = this.erCode();
							}
						}

						this.state = 1000;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.ERRORLEVEL) {
							{
								this.state = 999;
								(_localctx as ValidationSimpleContext)._levelCode = this.erLevel();
							}
						}

						this.state = 1003;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.IMBALANCE) {
							{
								this.state = 1002;
								this.imbalanceExpr();
							}
						}

						this.state = 1006;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.ALL || _la === VtlParser.INVALID) {
							{
								this.state = 1005;
								(_localctx as ValidationSimpleContext)._output = this._input.LT(
									1
								);
								_la = this._input.LA(1);
								if (!(_la === VtlParser.ALL || _la === VtlParser.INVALID)) {
									(_localctx as ValidationSimpleContext)._output = this._errHandler.recoverInline(
										this
									);
								} else {
									if (this._input.LA(1) === Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
							}
						}

						this.state = 1008;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public conditionalOperators(): ConditionalOperatorsContext {
		let _localctx: ConditionalOperatorsContext = new ConditionalOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 64, VtlParser.RULE_conditionalOperators);
		try {
			_localctx = new NvlAtomContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1012;
				this.match(VtlParser.NVL);
				this.state = 1013;
				this.match(VtlParser.LPAREN);
				this.state = 1014;
				(_localctx as NvlAtomContext)._left = this.expr(0);
				this.state = 1015;
				this.match(VtlParser.COMMA);
				this.state = 1016;
				(_localctx as NvlAtomContext)._right = this.expr(0);
				this.state = 1017;
				this.match(VtlParser.RPAREN);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public conditionalOperatorsComponent(): ConditionalOperatorsComponentContext {
		let _localctx: ConditionalOperatorsComponentContext = new ConditionalOperatorsComponentContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 66, VtlParser.RULE_conditionalOperatorsComponent);
		try {
			_localctx = new NvlAtomComponentContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1019;
				this.match(VtlParser.NVL);
				this.state = 1020;
				this.match(VtlParser.LPAREN);
				this.state = 1021;
				(_localctx as NvlAtomComponentContext)._left = this.exprComponent(0);
				this.state = 1022;
				this.match(VtlParser.COMMA);
				this.state = 1023;
				(_localctx as NvlAtomComponentContext)._right = this.exprComponent(0);
				this.state = 1024;
				this.match(VtlParser.RPAREN);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public aggrOperators(): AggrOperatorsContext {
		let _localctx: AggrOperatorsContext = new AggrOperatorsContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 68, VtlParser.RULE_aggrOperators);
		let _la: number;
		try {
			this.state = 1034;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
				case 1:
					_localctx = new AggrCompContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1026;
						(_localctx as AggrCompContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (
							!(
								(((_la - 68) & ~0x1f) === 0 &&
									((1 << (_la - 68)) &
										((1 << (VtlParser.MIN - 68)) |
											(1 << (VtlParser.MAX - 68)) |
											(1 << (VtlParser.SUM - 68)) |
											(1 << (VtlParser.AVG - 68)) |
											(1 << (VtlParser.MEDIAN - 68)) |
											(1 << (VtlParser.COUNT - 68)))) !==
										0) ||
								(((_la - 128) & ~0x1f) === 0 &&
									((1 << (_la - 128)) &
										((1 << (VtlParser.STDDEV_POP - 128)) |
											(1 << (VtlParser.STDDEV_SAMP - 128)) |
											(1 << (VtlParser.VAR_POP - 128)) |
											(1 << (VtlParser.VAR_SAMP - 128)))) !==
										0)
							)
						) {
							(_localctx as AggrCompContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1027;
						this.match(VtlParser.LPAREN);
						this.state = 1028;
						this.exprComponent(0);
						this.state = 1029;
						this.match(VtlParser.RPAREN);
					}
					break;

				case 2:
					_localctx = new CountAggrCompContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1031;
						this.match(VtlParser.COUNT);
						this.state = 1032;
						this.match(VtlParser.LPAREN);
						this.state = 1033;
						this.match(VtlParser.RPAREN);
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public aggrOperatorsGrouping(): AggrOperatorsGroupingContext {
		let _localctx: AggrOperatorsGroupingContext = new AggrOperatorsGroupingContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 70, VtlParser.RULE_aggrOperatorsGrouping);
		let _la: number;
		try {
			_localctx = new AggrDatasetContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1036;
				(_localctx as AggrDatasetContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (
					!(
						(((_la - 68) & ~0x1f) === 0 &&
							((1 << (_la - 68)) &
								((1 << (VtlParser.MIN - 68)) |
									(1 << (VtlParser.MAX - 68)) |
									(1 << (VtlParser.SUM - 68)) |
									(1 << (VtlParser.AVG - 68)) |
									(1 << (VtlParser.MEDIAN - 68)) |
									(1 << (VtlParser.COUNT - 68)))) !==
								0) ||
						(((_la - 128) & ~0x1f) === 0 &&
							((1 << (_la - 128)) &
								((1 << (VtlParser.STDDEV_POP - 128)) |
									(1 << (VtlParser.STDDEV_SAMP - 128)) |
									(1 << (VtlParser.VAR_POP - 128)) |
									(1 << (VtlParser.VAR_SAMP - 128)))) !==
								0)
					)
				) {
					(_localctx as AggrDatasetContext)._op = this._errHandler.recoverInline(
						this
					);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1037;
				this.match(VtlParser.LPAREN);
				this.state = 1038;
				this.expr(0);
				this.state = 1043;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.GROUP) {
					{
						this.state = 1039;
						this.groupingClause();
						this.state = 1041;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.HAVING) {
							{
								this.state = 1040;
								this.havingClause();
							}
						}
					}
				}

				this.state = 1045;
				this.match(VtlParser.RPAREN);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public anFunction(): AnFunctionContext {
		let _localctx: AnFunctionContext = new AnFunctionContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 72, VtlParser.RULE_anFunction);
		let _la: number;
		try {
			this.state = 1093;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.MIN:
				case VtlParser.MAX:
				case VtlParser.SUM:
				case VtlParser.AVG:
				case VtlParser.MEDIAN:
				case VtlParser.COUNT:
				case VtlParser.STDDEV_POP:
				case VtlParser.STDDEV_SAMP:
				case VtlParser.VAR_POP:
				case VtlParser.VAR_SAMP:
				case VtlParser.FIRST_VALUE:
				case VtlParser.LAST_VALUE:
					_localctx = new AnSimpleFunctionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1047;
						(_localctx as AnSimpleFunctionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (
							!(
								(((_la - 68) & ~0x1f) === 0 &&
									((1 << (_la - 68)) &
										((1 << (VtlParser.MIN - 68)) |
											(1 << (VtlParser.MAX - 68)) |
											(1 << (VtlParser.SUM - 68)) |
											(1 << (VtlParser.AVG - 68)) |
											(1 << (VtlParser.MEDIAN - 68)) |
											(1 << (VtlParser.COUNT - 68)))) !==
										0) ||
								(((_la - 128) & ~0x1f) === 0 &&
									((1 << (_la - 128)) &
										((1 << (VtlParser.STDDEV_POP - 128)) |
											(1 << (VtlParser.STDDEV_SAMP - 128)) |
											(1 << (VtlParser.VAR_POP - 128)) |
											(1 << (VtlParser.VAR_SAMP - 128)) |
											(1 << (VtlParser.FIRST_VALUE - 128)) |
											(1 << (VtlParser.LAST_VALUE - 128)))) !==
										0)
							)
						) {
							(_localctx as AnSimpleFunctionContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1048;
						this.match(VtlParser.LPAREN);
						this.state = 1049;
						this.expr(0);
						this.state = 1050;
						this.match(VtlParser.OVER);
						this.state = 1051;
						this.match(VtlParser.LPAREN);
						{
							this.state = 1053;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.PARTITION) {
								{
									this.state = 1052;
									(_localctx as AnSimpleFunctionContext)._partition = this.partitionByClause();
								}
							}

							this.state = 1056;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.ORDER) {
								{
									this.state = 1055;
									(_localctx as AnSimpleFunctionContext)._orderBy = this.orderByClause();
								}
							}

							this.state = 1059;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.DATA || _la === VtlParser.RANGE) {
								{
									this.state = 1058;
									(_localctx as AnSimpleFunctionContext)._windowing = this.windowingClause();
								}
							}
						}
						this.state = 1061;
						this.match(VtlParser.RPAREN);
						this.state = 1062;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.LAG:
				case VtlParser.LEAD:
					_localctx = new LagOrLeadAnContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1064;
						(_localctx as LagOrLeadAnContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.LAG || _la === VtlParser.LEAD)) {
							(_localctx as LagOrLeadAnContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1065;
						this.match(VtlParser.LPAREN);
						this.state = 1066;
						this.expr(0);
						this.state = 1072;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 1067;
								this.match(VtlParser.COMMA);
								this.state = 1068;
								(_localctx as LagOrLeadAnContext)._offet = this.signedInteger();
								this.state = 1070;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (
									_la === VtlParser.NULL_CONSTANT ||
									(((_la - 228) & ~0x1f) === 0 &&
										((1 << (_la - 228)) &
											((1 << (VtlParser.INTEGER_CONSTANT - 228)) |
												(1 << (VtlParser.NUMBER_CONSTANT - 228)) |
												(1 << (VtlParser.BOOLEAN_CONSTANT - 228)) |
												(1 << (VtlParser.STRING_CONSTANT - 228)))) !==
											0)
								) {
									{
										this.state = 1069;
										(_localctx as LagOrLeadAnContext)._defaultValue = this.constant();
									}
								}
							}
						}

						this.state = 1074;
						this.match(VtlParser.OVER);
						this.state = 1075;
						this.match(VtlParser.LPAREN);
						{
							this.state = 1077;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.PARTITION) {
								{
									this.state = 1076;
									(_localctx as LagOrLeadAnContext)._partition = this.partitionByClause();
								}
							}

							this.state = 1079;
							(_localctx as LagOrLeadAnContext)._orderBy = this.orderByClause();
						}
						this.state = 1081;
						this.match(VtlParser.RPAREN);
						this.state = 1082;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.RATIO_TO_REPORT:
					_localctx = new RatioToReportAnContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1084;
						(_localctx as RatioToReportAnContext)._op = this.match(
							VtlParser.RATIO_TO_REPORT
						);
						this.state = 1085;
						this.match(VtlParser.LPAREN);
						this.state = 1086;
						this.expr(0);
						this.state = 1087;
						this.match(VtlParser.OVER);
						this.state = 1088;
						this.match(VtlParser.LPAREN);
						{
							this.state = 1089;
							(_localctx as RatioToReportAnContext)._partition = this.partitionByClause();
						}
						this.state = 1090;
						this.match(VtlParser.RPAREN);
						this.state = 1091;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public anFunctionComponent(): AnFunctionComponentContext {
		let _localctx: AnFunctionComponentContext = new AnFunctionComponentContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 74, VtlParser.RULE_anFunctionComponent);
		let _la: number;
		try {
			this.state = 1153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.MIN:
				case VtlParser.MAX:
				case VtlParser.SUM:
				case VtlParser.AVG:
				case VtlParser.MEDIAN:
				case VtlParser.COUNT:
				case VtlParser.STDDEV_POP:
				case VtlParser.STDDEV_SAMP:
				case VtlParser.VAR_POP:
				case VtlParser.VAR_SAMP:
				case VtlParser.FIRST_VALUE:
				case VtlParser.LAST_VALUE:
					_localctx = new AnSimpleFunctionComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1095;
						(_localctx as AnSimpleFunctionComponentContext)._op = this._input.LT(
							1
						);
						_la = this._input.LA(1);
						if (
							!(
								(((_la - 68) & ~0x1f) === 0 &&
									((1 << (_la - 68)) &
										((1 << (VtlParser.MIN - 68)) |
											(1 << (VtlParser.MAX - 68)) |
											(1 << (VtlParser.SUM - 68)) |
											(1 << (VtlParser.AVG - 68)) |
											(1 << (VtlParser.MEDIAN - 68)) |
											(1 << (VtlParser.COUNT - 68)))) !==
										0) ||
								(((_la - 128) & ~0x1f) === 0 &&
									((1 << (_la - 128)) &
										((1 << (VtlParser.STDDEV_POP - 128)) |
											(1 << (VtlParser.STDDEV_SAMP - 128)) |
											(1 << (VtlParser.VAR_POP - 128)) |
											(1 << (VtlParser.VAR_SAMP - 128)) |
											(1 << (VtlParser.FIRST_VALUE - 128)) |
											(1 << (VtlParser.LAST_VALUE - 128)))) !==
										0)
							)
						) {
							(_localctx as AnSimpleFunctionComponentContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1096;
						this.match(VtlParser.LPAREN);
						this.state = 1097;
						this.exprComponent(0);
						this.state = 1098;
						this.match(VtlParser.OVER);
						this.state = 1099;
						this.match(VtlParser.LPAREN);
						{
							this.state = 1101;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.PARTITION) {
								{
									this.state = 1100;
									(_localctx as AnSimpleFunctionComponentContext)._partition = this.partitionByClause();
								}
							}

							this.state = 1104;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.ORDER) {
								{
									this.state = 1103;
									(_localctx as AnSimpleFunctionComponentContext)._orderBy = this.orderByClause();
								}
							}

							this.state = 1107;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.DATA || _la === VtlParser.RANGE) {
								{
									this.state = 1106;
									(_localctx as AnSimpleFunctionComponentContext)._windowing = this.windowingClause();
								}
							}
						}
						this.state = 1109;
						this.match(VtlParser.RPAREN);
						this.state = 1110;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.LAG:
				case VtlParser.LEAD:
					_localctx = new LagOrLeadAnComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1112;
						(_localctx as LagOrLeadAnComponentContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.LAG || _la === VtlParser.LEAD)) {
							(_localctx as LagOrLeadAnComponentContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1113;
						this.match(VtlParser.LPAREN);
						this.state = 1114;
						this.exprComponent(0);
						this.state = 1120;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.COMMA) {
							{
								this.state = 1115;
								this.match(VtlParser.COMMA);
								this.state = 1116;
								(_localctx as LagOrLeadAnComponentContext)._offet = this.signedInteger();
								this.state = 1118;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (
									_la === VtlParser.NULL_CONSTANT ||
									(((_la - 228) & ~0x1f) === 0 &&
										((1 << (_la - 228)) &
											((1 << (VtlParser.INTEGER_CONSTANT - 228)) |
												(1 << (VtlParser.NUMBER_CONSTANT - 228)) |
												(1 << (VtlParser.BOOLEAN_CONSTANT - 228)) |
												(1 << (VtlParser.STRING_CONSTANT - 228)))) !==
											0)
								) {
									{
										this.state = 1117;
										(_localctx as LagOrLeadAnComponentContext)._defaultValue = this.constant();
									}
								}
							}
						}

						this.state = 1122;
						this.match(VtlParser.OVER);
						this.state = 1123;
						this.match(VtlParser.LPAREN);
						{
							this.state = 1125;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.PARTITION) {
								{
									this.state = 1124;
									(_localctx as LagOrLeadAnComponentContext)._partition = this.partitionByClause();
								}
							}

							this.state = 1127;
							(_localctx as LagOrLeadAnComponentContext)._orderBy = this.orderByClause();
						}
						this.state = 1129;
						this.match(VtlParser.RPAREN);
						this.state = 1130;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.RANK:
					_localctx = new RankAnComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1132;
						(_localctx as RankAnComponentContext)._op = this.match(
							VtlParser.RANK
						);
						this.state = 1133;
						this.match(VtlParser.LPAREN);
						this.state = 1134;
						this.match(VtlParser.OVER);
						this.state = 1135;
						this.match(VtlParser.LPAREN);
						{
							this.state = 1137;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.PARTITION) {
								{
									this.state = 1136;
									(_localctx as RankAnComponentContext)._partition = this.partitionByClause();
								}
							}

							this.state = 1139;
							(_localctx as RankAnComponentContext)._orderBy = this.orderByClause();
						}
						this.state = 1141;
						this.match(VtlParser.RPAREN);
						this.state = 1142;
						this.match(VtlParser.RPAREN);
					}
					break;
				case VtlParser.RATIO_TO_REPORT:
					_localctx = new RatioToReportAnComponentContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 1144;
						(_localctx as RatioToReportAnComponentContext)._op = this.match(
							VtlParser.RATIO_TO_REPORT
						);
						this.state = 1145;
						this.match(VtlParser.LPAREN);
						this.state = 1146;
						this.exprComponent(0);
						this.state = 1147;
						this.match(VtlParser.OVER);
						this.state = 1148;
						this.match(VtlParser.LPAREN);
						{
							this.state = 1149;
							(_localctx as RatioToReportAnComponentContext)._partition = this.partitionByClause();
						}
						this.state = 1150;
						this.match(VtlParser.RPAREN);
						this.state = 1151;
						this.match(VtlParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public renameClauseItem(): RenameClauseItemContext {
		let _localctx: RenameClauseItemContext = new RenameClauseItemContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 76, VtlParser.RULE_renameClauseItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1155;
				_localctx._fromName = this.componentID();
				this.state = 1156;
				this.match(VtlParser.TO);
				this.state = 1157;
				_localctx._toName = this.componentID();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public aggregateClause(): AggregateClauseContext {
		let _localctx: AggregateClauseContext = new AggregateClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 78, VtlParser.RULE_aggregateClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1159;
				this.aggrFunctionClause();
				this.state = 1164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 1160;
							this.match(VtlParser.COMMA);
							this.state = 1161;
							this.aggrFunctionClause();
						}
					}
					this.state = 1166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public aggrFunctionClause(): AggrFunctionClauseContext {
		let _localctx: AggrFunctionClauseContext = new AggrFunctionClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 80, VtlParser.RULE_aggrFunctionClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 91) & ~0x1f) === 0 &&
						((1 << (_la - 91)) &
							((1 << (VtlParser.DIMENSION - 91)) |
								(1 << (VtlParser.MEASURE - 91)) |
								(1 << (VtlParser.ATTRIBUTE - 91)) |
								(1 << (VtlParser.VIRAL - 91)))) !==
							0) ||
					_la === VtlParser.COMPONENT
				) {
					{
						this.state = 1167;
						this.componentRole();
					}
				}

				this.state = 1170;
				this.componentID();
				this.state = 1171;
				this.match(VtlParser.ASSIGN);
				this.state = 1172;
				this.aggrOperators();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public calcClauseItem(): CalcClauseItemContext {
		let _localctx: CalcClauseItemContext = new CalcClauseItemContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 82, VtlParser.RULE_calcClauseItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 91) & ~0x1f) === 0 &&
						((1 << (_la - 91)) &
							((1 << (VtlParser.DIMENSION - 91)) |
								(1 << (VtlParser.MEASURE - 91)) |
								(1 << (VtlParser.ATTRIBUTE - 91)) |
								(1 << (VtlParser.VIRAL - 91)))) !==
							0) ||
					_la === VtlParser.COMPONENT
				) {
					{
						this.state = 1174;
						this.componentRole();
					}
				}

				this.state = 1177;
				this.componentID();
				this.state = 1178;
				this.match(VtlParser.ASSIGN);
				this.state = 1179;
				this.exprComponent(0);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public subspaceClauseItem(): SubspaceClauseItemContext {
		let _localctx: SubspaceClauseItemContext = new SubspaceClauseItemContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 84, VtlParser.RULE_subspaceClauseItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1181;
				this.componentID();
				this.state = 1182;
				this.match(VtlParser.EQ);
				this.state = 1183;
				this.constant();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public joinClauseWithoutUsing(): JoinClauseWithoutUsingContext {
		let _localctx: JoinClauseWithoutUsingContext = new JoinClauseWithoutUsingContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 86, VtlParser.RULE_joinClauseWithoutUsing);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1185;
				this.joinClauseItem();
				this.state = 1190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 1186;
							this.match(VtlParser.COMMA);
							this.state = 1187;
							this.joinClauseItem();
						}
					}
					this.state = 1192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public joinClause(): JoinClauseContext {
		let _localctx: JoinClauseContext = new JoinClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 88, VtlParser.RULE_joinClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1193;
				this.joinClauseItem();
				this.state = 1198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 1194;
							this.match(VtlParser.COMMA);
							this.state = 1195;
							this.joinClauseItem();
						}
					}
					this.state = 1200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.USING) {
					{
						this.state = 1201;
						this.match(VtlParser.USING);
						this.state = 1202;
						this.componentID();
						this.state = 1207;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.COMMA) {
							{
								{
									this.state = 1203;
									this.match(VtlParser.COMMA);
									this.state = 1204;
									this.componentID();
								}
							}
							this.state = 1209;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public joinClauseItem(): JoinClauseItemContext {
		let _localctx: JoinClauseItemContext = new JoinClauseItemContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 90, VtlParser.RULE_joinClauseItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1212;
				this.expr(0);
				this.state = 1215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.AS) {
					{
						this.state = 1213;
						this.match(VtlParser.AS);
						this.state = 1214;
						this.alias();
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public joinBody(): JoinBodyContext {
		let _localctx: JoinBodyContext = new JoinBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, VtlParser.RULE_joinBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.FILTER) {
					{
						this.state = 1217;
						this.filterClause();
					}
				}

				this.state = 1223;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case VtlParser.CALC:
						{
							this.state = 1220;
							this.calcClause();
						}
						break;
					case VtlParser.APPLY:
						{
							this.state = 1221;
							this.joinApplyClause();
						}
						break;
					case VtlParser.AGGREGATE:
						{
							this.state = 1222;
							this.aggrClause();
						}
						break;
					case VtlParser.RPAREN:
					case VtlParser.DROP:
					case VtlParser.KEEP:
					case VtlParser.RENAME:
						break;
					default:
						break;
				}
				this.state = 1226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.DROP || _la === VtlParser.KEEP) {
					{
						this.state = 1225;
						this.keepOrDropClause();
					}
				}

				this.state = 1229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.RENAME) {
					{
						this.state = 1228;
						this.renameClause();
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public joinApplyClause(): JoinApplyClauseContext {
		let _localctx: JoinApplyClauseContext = new JoinApplyClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 94, VtlParser.RULE_joinApplyClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1231;
				this.match(VtlParser.APPLY);
				this.state = 1232;
				this.expr(0);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public partitionByClause(): PartitionByClauseContext {
		let _localctx: PartitionByClauseContext = new PartitionByClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 96, VtlParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1234;
				this.match(VtlParser.PARTITION);
				this.state = 1235;
				this.match(VtlParser.BY);
				this.state = 1236;
				this.componentID();
				this.state = 1241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 1237;
							this.match(VtlParser.COMMA);
							this.state = 1238;
							this.componentID();
						}
					}
					this.state = 1243;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public orderByClause(): OrderByClauseContext {
		let _localctx: OrderByClauseContext = new OrderByClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 98, VtlParser.RULE_orderByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1244;
				this.match(VtlParser.ORDER);
				this.state = 1245;
				this.match(VtlParser.BY);
				this.state = 1246;
				this.orderByItem();
				this.state = 1251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 1247;
							this.match(VtlParser.COMMA);
							this.state = 1248;
							this.orderByItem();
						}
					}
					this.state = 1253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public orderByItem(): OrderByItemContext {
		let _localctx: OrderByItemContext = new OrderByItemContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 100, VtlParser.RULE_orderByItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1254;
				this.componentID();
				this.state = 1256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ASC || _la === VtlParser.DESC) {
					{
						this.state = 1255;
						_la = this._input.LA(1);
						if (!(_la === VtlParser.ASC || _la === VtlParser.DESC)) {
							this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public windowingClause(): WindowingClauseContext {
		let _localctx: WindowingClauseContext = new WindowingClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 102, VtlParser.RULE_windowingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1261;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case VtlParser.DATA:
						{
							{
								this.state = 1258;
								this.match(VtlParser.DATA);
								this.state = 1259;
								this.match(VtlParser.POINTS);
							}
						}
						break;
					case VtlParser.RANGE:
						{
							this.state = 1260;
							this.match(VtlParser.RANGE);
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 1263;
				this.match(VtlParser.BETWEEN);
				this.state = 1264;
				_localctx._from_ = this.limitClauseItem();
				this.state = 1265;
				this.match(VtlParser.AND);
				this.state = 1266;
				_localctx._to_ = this.limitClauseItem();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public signedInteger(): SignedIntegerContext {
		let _localctx: SignedIntegerContext = new SignedIntegerContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 104, VtlParser.RULE_signedInteger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1268;
				this.match(VtlParser.INTEGER_CONSTANT);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public limitClauseItem(): LimitClauseItemContext {
		let _localctx: LimitClauseItemContext = new LimitClauseItemContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 106, VtlParser.RULE_limitClauseItem);
		try {
			this.state = 1281;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1270;
						this.match(VtlParser.INTEGER_CONSTANT);
						this.state = 1271;
						this.match(VtlParser.PRECEDING);
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1272;
						this.match(VtlParser.INTEGER_CONSTANT);
						this.state = 1273;
						this.match(VtlParser.FOLLOWING);
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1274;
						this.match(VtlParser.CURRENT);
						this.state = 1275;
						this.match(VtlParser.DATA);
						this.state = 1276;
						this.match(VtlParser.POINT);
					}
					break;

				case 4:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 1277;
						this.match(VtlParser.UNBOUNDED);
						this.state = 1278;
						this.match(VtlParser.PRECEDING);
					}
					break;

				case 5:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 1279;
						this.match(VtlParser.UNBOUNDED);
						this.state = 1280;
						this.match(VtlParser.FOLLOWING);
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public groupingClause(): GroupingClauseContext {
		let _localctx: GroupingClauseContext = new GroupingClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 108, VtlParser.RULE_groupingClause);
		let _la: number;
		try {
			this.state = 1296;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
				case 1:
					_localctx = new GroupByOrExceptContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1283;
						this.match(VtlParser.GROUP);
						this.state = 1284;
						(_localctx as GroupByOrExceptContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.BY || _la === VtlParser.EXCEPT)) {
							(_localctx as GroupByOrExceptContext)._op = this._errHandler.recoverInline(
								this
							);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1285;
						this.componentID();
						this.state = 1290;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.COMMA) {
							{
								{
									this.state = 1286;
									this.match(VtlParser.COMMA);
									this.state = 1287;
									this.componentID();
								}
							}
							this.state = 1292;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
					break;

				case 2:
					_localctx = new GroupAllContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1293;
						this.match(VtlParser.GROUP);
						this.state = 1294;
						this.match(VtlParser.ALL);
						this.state = 1295;
						this.exprComponent(0);
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public havingClause(): HavingClauseContext {
		let _localctx: HavingClauseContext = new HavingClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 110, VtlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1298;
				this.match(VtlParser.HAVING);
				this.state = 1299;
				this.exprComponent(0);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public parameterItem(): ParameterItemContext {
		let _localctx: ParameterItemContext = new ParameterItemContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 112, VtlParser.RULE_parameterItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1301;
				this.varID();
				this.state = 1302;
				this.inputParameterType();
				this.state = 1305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.DEFAULT) {
					{
						this.state = 1303;
						this.match(VtlParser.DEFAULT);
						this.state = 1304;
						this.constant();
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public outputParameterType(): OutputParameterTypeContext {
		let _localctx: OutputParameterTypeContext = new OutputParameterTypeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 114, VtlParser.RULE_outputParameterType);
		try {
			this.state = 1310;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.BOOLEAN:
				case VtlParser.DATE:
				case VtlParser.TIME_PERIOD:
				case VtlParser.NUMBER:
				case VtlParser.STRING:
				case VtlParser.INTEGER:
				case VtlParser.DURATION:
				case VtlParser.SCALAR:
				case VtlParser.IDENTIFIER:
				case VtlParser.TIME:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1307;
						this.scalarType();
					}
					break;
				case VtlParser.DATASET:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1308;
						this.datasetType();
					}
					break;
				case VtlParser.DIMENSION:
				case VtlParser.MEASURE:
				case VtlParser.ATTRIBUTE:
				case VtlParser.VIRAL:
				case VtlParser.COMPONENT:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1309;
						this.componentType();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public inputParameterType(): InputParameterTypeContext {
		let _localctx: InputParameterTypeContext = new InputParameterTypeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 116, VtlParser.RULE_inputParameterType);
		try {
			this.state = 1317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.BOOLEAN:
				case VtlParser.DATE:
				case VtlParser.TIME_PERIOD:
				case VtlParser.NUMBER:
				case VtlParser.STRING:
				case VtlParser.INTEGER:
				case VtlParser.DURATION:
				case VtlParser.SCALAR:
				case VtlParser.IDENTIFIER:
				case VtlParser.TIME:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1312;
						this.scalarType();
					}
					break;
				case VtlParser.DATASET:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1313;
						this.datasetType();
					}
					break;
				case VtlParser.SET:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1314;
						this.scalarSetType();
					}
					break;
				case VtlParser.DATAPOINT:
				case VtlParser.HIERARCHICAL:
				case VtlParser.RULESET:
				case VtlParser.DATAPOINT_ON_VD:
				case VtlParser.DATAPOINT_ON_VAR:
				case VtlParser.HIERARCHICAL_ON_VD:
				case VtlParser.HIERARCHICAL_ON_VAR:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 1315;
						this.rulesetType();
					}
					break;
				case VtlParser.DIMENSION:
				case VtlParser.MEASURE:
				case VtlParser.ATTRIBUTE:
				case VtlParser.VIRAL:
				case VtlParser.COMPONENT:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 1316;
						this.componentType();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public rulesetType(): RulesetTypeContext {
		let _localctx: RulesetTypeContext = new RulesetTypeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 118, VtlParser.RULE_rulesetType);
		try {
			this.state = 1322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.RULESET:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1319;
						this.match(VtlParser.RULESET);
					}
					break;
				case VtlParser.DATAPOINT:
				case VtlParser.DATAPOINT_ON_VD:
				case VtlParser.DATAPOINT_ON_VAR:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1320;
						this.dpRuleset();
					}
					break;
				case VtlParser.HIERARCHICAL:
				case VtlParser.HIERARCHICAL_ON_VD:
				case VtlParser.HIERARCHICAL_ON_VAR:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1321;
						this.hrRuleset();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public scalarType(): ScalarTypeContext {
		let _localctx: ScalarTypeContext = new ScalarTypeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 120, VtlParser.RULE_scalarType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1326;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case VtlParser.BOOLEAN:
					case VtlParser.DATE:
					case VtlParser.TIME_PERIOD:
					case VtlParser.NUMBER:
					case VtlParser.STRING:
					case VtlParser.INTEGER:
					case VtlParser.DURATION:
					case VtlParser.SCALAR:
					case VtlParser.TIME:
						{
							this.state = 1324;
							this.basicScalarType();
						}
						break;
					case VtlParser.IDENTIFIER:
						{
							this.state = 1325;
							this.valueDomainName();
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 1329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.QLPAREN || _la === VtlParser.GLPAREN) {
					{
						this.state = 1328;
						this.scalarTypeConstraint();
					}
				}

				this.state = 1335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.NOT || _la === VtlParser.NULL_CONSTANT) {
					{
						this.state = 1332;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.NOT) {
							{
								this.state = 1331;
								this.match(VtlParser.NOT);
							}
						}

						this.state = 1334;
						this.match(VtlParser.NULL_CONSTANT);
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public componentType(): ComponentTypeContext {
		let _localctx: ComponentTypeContext = new ComponentTypeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 122, VtlParser.RULE_componentType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1337;
				this.componentRole();
				this.state = 1342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.LT) {
					{
						this.state = 1338;
						this.match(VtlParser.LT);
						this.state = 1339;
						this.scalarType();
						this.state = 1340;
						this.match(VtlParser.MT);
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public datasetType(): DatasetTypeContext {
		let _localctx: DatasetTypeContext = new DatasetTypeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 124, VtlParser.RULE_datasetType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1344;
				this.match(VtlParser.DATASET);
				this.state = 1356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.GLPAREN) {
					{
						this.state = 1345;
						this.match(VtlParser.GLPAREN);
						this.state = 1346;
						this.compConstraint();
						this.state = 1351;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.COMMA) {
							{
								{
									this.state = 1347;
									this.match(VtlParser.COMMA);
									this.state = 1348;
									this.compConstraint();
								}
							}
							this.state = 1353;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1354;
						this.match(VtlParser.GRPAREN);
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public scalarSetType(): ScalarSetTypeContext {
		let _localctx: ScalarSetTypeContext = new ScalarSetTypeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 126, VtlParser.RULE_scalarSetType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1358;
				this.match(VtlParser.SET);
				this.state = 1363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.LT) {
					{
						this.state = 1359;
						this.match(VtlParser.LT);
						this.state = 1360;
						this.scalarType();
						this.state = 1361;
						this.match(VtlParser.MT);
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public dpRuleset(): DpRulesetContext {
		let _localctx: DpRulesetContext = new DpRulesetContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 128, VtlParser.RULE_dpRuleset);
		let _la: number;
		try {
			this.state = 1394;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.DATAPOINT:
					_localctx = new DataPointContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1365;
						this.match(VtlParser.DATAPOINT);
					}
					break;
				case VtlParser.DATAPOINT_ON_VD:
					_localctx = new DataPointVdContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1366;
						this.match(VtlParser.DATAPOINT_ON_VD);
						this.state = 1378;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.GLPAREN) {
							{
								this.state = 1367;
								this.match(VtlParser.GLPAREN);
								this.state = 1368;
								this.valueDomainName();
								this.state = 1373;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === VtlParser.MUL) {
									{
										{
											this.state = 1369;
											this.match(VtlParser.MUL);
											this.state = 1370;
											this.valueDomainName();
										}
									}
									this.state = 1375;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 1376;
								this.match(VtlParser.GRPAREN);
							}
						}
					}
					break;
				case VtlParser.DATAPOINT_ON_VAR:
					_localctx = new DataPointVarContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1380;
						this.match(VtlParser.DATAPOINT_ON_VAR);
						this.state = 1392;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.GLPAREN) {
							{
								this.state = 1381;
								this.match(VtlParser.GLPAREN);
								this.state = 1382;
								this.varID();
								this.state = 1387;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === VtlParser.MUL) {
									{
										{
											this.state = 1383;
											this.match(VtlParser.MUL);
											this.state = 1384;
											this.varID();
										}
									}
									this.state = 1389;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 1390;
								this.match(VtlParser.GRPAREN);
							}
						}
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public hrRuleset(): HrRulesetContext {
		let _localctx: HrRulesetContext = new HrRulesetContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 130, VtlParser.RULE_hrRuleset);
		let _la: number;
		try {
			this.state = 1436;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.HIERARCHICAL:
					_localctx = new HrRulesetTypeContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1396;
						this.match(VtlParser.HIERARCHICAL);
					}
					break;
				case VtlParser.HIERARCHICAL_ON_VD:
					_localctx = new HrRulesetVdTypeContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1397;
						this.match(VtlParser.HIERARCHICAL_ON_VD);
						this.state = 1414;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.GLPAREN) {
							{
								this.state = 1398;
								this.match(VtlParser.GLPAREN);
								this.state = 1399;
								(_localctx as HrRulesetVdTypeContext)._vdName = this.match(
									VtlParser.IDENTIFIER
								);
								this.state = 1411;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === VtlParser.LPAREN) {
									{
										this.state = 1400;
										this.match(VtlParser.LPAREN);
										this.state = 1401;
										this.valueDomainName();
										this.state = 1406;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										while (_la === VtlParser.MUL) {
											{
												{
													this.state = 1402;
													this.match(VtlParser.MUL);
													this.state = 1403;
													this.valueDomainName();
												}
											}
											this.state = 1408;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
										}
										this.state = 1409;
										this.match(VtlParser.RPAREN);
									}
								}

								this.state = 1413;
								this.match(VtlParser.GRPAREN);
							}
						}
					}
					break;
				case VtlParser.HIERARCHICAL_ON_VAR:
					_localctx = new HrRulesetVarTypeContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1416;
						this.match(VtlParser.HIERARCHICAL_ON_VAR);
						this.state = 1434;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.GLPAREN) {
							{
								this.state = 1417;
								this.match(VtlParser.GLPAREN);
								this.state = 1418;
								(_localctx as HrRulesetVarTypeContext)._varName = this.varID();
								this.state = 1430;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la === VtlParser.LPAREN) {
									{
										this.state = 1419;
										this.match(VtlParser.LPAREN);
										this.state = 1420;
										this.varID();
										this.state = 1425;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										while (_la === VtlParser.MUL) {
											{
												{
													this.state = 1421;
													this.match(VtlParser.MUL);
													this.state = 1422;
													this.varID();
												}
											}
											this.state = 1427;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
										}
										this.state = 1428;
										this.match(VtlParser.RPAREN);
									}
								}

								this.state = 1432;
								this.match(VtlParser.GRPAREN);
							}
						}
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public valueDomainName(): ValueDomainNameContext {
		let _localctx: ValueDomainNameContext = new ValueDomainNameContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 132, VtlParser.RULE_valueDomainName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1438;
				this.match(VtlParser.IDENTIFIER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public rulesetID(): RulesetIDContext {
		let _localctx: RulesetIDContext = new RulesetIDContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 134, VtlParser.RULE_rulesetID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1440;
				this.match(VtlParser.IDENTIFIER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public rulesetSignature(): RulesetSignatureContext {
		let _localctx: RulesetSignatureContext = new RulesetSignatureContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 136, VtlParser.RULE_rulesetSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1442;
				_la = this._input.LA(1);
				if (!(_la === VtlParser.VALUE_DOMAIN || _la === VtlParser.VARIABLE)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1443;
				this.signature();
				this.state = 1448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 1444;
							this.match(VtlParser.COMMA);
							this.state = 1445;
							this.signature();
						}
					}
					this.state = 1450;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public signature(): SignatureContext {
		let _localctx: SignatureContext = new SignatureContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 138, VtlParser.RULE_signature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1451;
				this.varID();
				this.state = 1454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.AS) {
					{
						this.state = 1452;
						this.match(VtlParser.AS);
						this.state = 1453;
						this.alias();
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public ruleClauseDatapoint(): RuleClauseDatapointContext {
		let _localctx: RuleClauseDatapointContext = new RuleClauseDatapointContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 140, VtlParser.RULE_ruleClauseDatapoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1456;
				this.ruleItemDatapoint();
				this.state = 1461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.EOL) {
					{
						{
							this.state = 1457;
							this.match(VtlParser.EOL);
							this.state = 1458;
							this.ruleItemDatapoint();
						}
					}
					this.state = 1463;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public ruleItemDatapoint(): RuleItemDatapointContext {
		let _localctx: RuleItemDatapointContext = new RuleItemDatapointContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 142, VtlParser.RULE_ruleItemDatapoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1466;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
					case 1:
						{
							this.state = 1464;
							_localctx._ruleName = this.match(VtlParser.IDENTIFIER);
							this.state = 1465;
							this.match(VtlParser.T__0);
						}
						break;
				}
				this.state = 1472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.WHEN) {
					{
						this.state = 1468;
						this.match(VtlParser.WHEN);
						this.state = 1469;
						_localctx._antecedentContiditon = this.exprComponent(0);
						this.state = 1470;
						this.match(VtlParser.THEN);
					}
				}

				this.state = 1474;
				_localctx._consequentCondition = this.exprComponent(0);
				this.state = 1476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORCODE) {
					{
						this.state = 1475;
						this.erCode();
					}
				}

				this.state = 1479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORLEVEL) {
					{
						this.state = 1478;
						this.erLevel();
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public ruleClauseHierarchical(): RuleClauseHierarchicalContext {
		let _localctx: RuleClauseHierarchicalContext = new RuleClauseHierarchicalContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 144, VtlParser.RULE_ruleClauseHierarchical);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1481;
				this.ruleItemHierarchical();
				this.state = 1486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.EOL) {
					{
						{
							this.state = 1482;
							this.match(VtlParser.EOL);
							this.state = 1483;
							this.ruleItemHierarchical();
						}
					}
					this.state = 1488;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public ruleItemHierarchical(): RuleItemHierarchicalContext {
		let _localctx: RuleItemHierarchicalContext = new RuleItemHierarchicalContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 146, VtlParser.RULE_ruleItemHierarchical);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1491;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
					case 1:
						{
							this.state = 1489;
							_localctx._ruleName = this.match(VtlParser.IDENTIFIER);
							this.state = 1490;
							this.match(VtlParser.T__0);
						}
						break;
				}
				this.state = 1493;
				this.codeItemRelation();
				this.state = 1495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORCODE) {
					{
						this.state = 1494;
						this.erCode();
					}
				}

				this.state = 1498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORLEVEL) {
					{
						this.state = 1497;
						this.erLevel();
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public hierRuleSignature(): HierRuleSignatureContext {
		let _localctx: HierRuleSignatureContext = new HierRuleSignatureContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 148, VtlParser.RULE_hierRuleSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1500;
				_la = this._input.LA(1);
				if (!(_la === VtlParser.VALUE_DOMAIN || _la === VtlParser.VARIABLE)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.CONDITION) {
					{
						this.state = 1501;
						this.match(VtlParser.CONDITION);
						this.state = 1502;
						this.valueDomainSignature();
					}
				}

				this.state = 1505;
				this.match(VtlParser.RULE);
				this.state = 1506;
				this.match(VtlParser.IDENTIFIER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public valueDomainSignature(): ValueDomainSignatureContext {
		let _localctx: ValueDomainSignatureContext = new ValueDomainSignatureContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 150, VtlParser.RULE_valueDomainSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1508;
				this.signature();
				this.state = 1513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 1509;
							this.match(VtlParser.COMMA);
							this.state = 1510;
							this.signature();
						}
					}
					this.state = 1515;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public codeItemRelation(): CodeItemRelationContext {
		let _localctx: CodeItemRelationContext = new CodeItemRelationContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 152, VtlParser.RULE_codeItemRelation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.WHEN) {
					{
						this.state = 1516;
						this.match(VtlParser.WHEN);
						this.state = 1517;
						this.exprComponent(0);
						this.state = 1518;
						this.match(VtlParser.THEN);
					}
				}

				this.state = 1522;
				_localctx._codeItemRef = this.match(VtlParser.IDENTIFIER);
				this.state = 1524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(_la & ~0x1f) === 0 &&
					((1 << _la) &
						((1 << VtlParser.EQ) |
							(1 << VtlParser.LT) |
							(1 << VtlParser.MT) |
							(1 << VtlParser.ME) |
							(1 << VtlParser.NEQ) |
							(1 << VtlParser.LE))) !==
						0
				) {
					{
						this.state = 1523;
						this.comparisonOperand();
					}
				}

				this.state = 1526;
				this.codeItemRelationClause();
				this.state = 1530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (
					_la === VtlParser.PLUS ||
					_la === VtlParser.MINUS ||
					_la === VtlParser.IDENTIFIER
				) {
					{
						{
							this.state = 1527;
							this.codeItemRelationClause();
						}
					}
					this.state = 1532;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public codeItemRelationClause(): CodeItemRelationClauseContext {
		let _localctx: CodeItemRelationClauseContext = new CodeItemRelationClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 154, VtlParser.RULE_codeItemRelationClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.PLUS || _la === VtlParser.MINUS) {
					{
						this.state = 1533;
						_localctx._opAdd = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.PLUS || _la === VtlParser.MINUS)) {
							_localctx._opAdd = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
				}

				this.state = 1536;
				_localctx._rightCodeItem = this.match(VtlParser.IDENTIFIER);
				this.state = 1541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.QLPAREN) {
					{
						this.state = 1537;
						this.match(VtlParser.QLPAREN);
						this.state = 1538;
						_localctx._rightCondition = this.exprComponent(0);
						this.state = 1539;
						this.match(VtlParser.QRPAREN);
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public scalarTypeConstraint(): ScalarTypeConstraintContext {
		let _localctx: ScalarTypeConstraintContext = new ScalarTypeConstraintContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 156, VtlParser.RULE_scalarTypeConstraint);
		let _la: number;
		try {
			this.state = 1558;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.QLPAREN:
					_localctx = new ConditionConstraintContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1543;
						this.match(VtlParser.QLPAREN);
						this.state = 1544;
						this.exprComponent(0);
						this.state = 1545;
						this.match(VtlParser.QRPAREN);
					}
					break;
				case VtlParser.GLPAREN:
					_localctx = new RangeConstraintContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1547;
						this.match(VtlParser.GLPAREN);
						this.state = 1548;
						this.constant();
						this.state = 1553;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.COMMA) {
							{
								{
									this.state = 1549;
									this.match(VtlParser.COMMA);
									this.state = 1550;
									this.constant();
								}
							}
							this.state = 1555;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1556;
						this.match(VtlParser.GRPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public compConstraint(): CompConstraintContext {
		let _localctx: CompConstraintContext = new CompConstraintContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 158, VtlParser.RULE_compConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1560;
				this.componentType();
				this.state = 1563;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case VtlParser.IDENTIFIER:
						{
							this.state = 1561;
							this.componentID();
						}
						break;
					case VtlParser.OPTIONAL:
						{
							this.state = 1562;
							this.multModifier();
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public multModifier(): MultModifierContext {
		let _localctx: MultModifierContext = new MultModifierContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 160, VtlParser.RULE_multModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1565;
				this.match(VtlParser.OPTIONAL);
				this.state = 1567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.PLUS || _la === VtlParser.MUL) {
					{
						this.state = 1566;
						_la = this._input.LA(1);
						if (!(_la === VtlParser.PLUS || _la === VtlParser.MUL)) {
							this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public validationOutput(): ValidationOutputContext {
		let _localctx: ValidationOutputContext = new ValidationOutputContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 162, VtlParser.RULE_validationOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1569;
				_la = this._input.LA(1);
				if (
					!(
						_la === VtlParser.ALL ||
						_la === VtlParser.INVALID ||
						_la === VtlParser.ALL_MEASURES
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public validationMode(): ValidationModeContext {
		let _localctx: ValidationModeContext = new ValidationModeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 164, VtlParser.RULE_validationMode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1571;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 212) & ~0x1f) === 0 &&
						((1 << (_la - 212)) &
							((1 << (VtlParser.NON_NULL - 212)) |
								(1 << (VtlParser.NON_ZERO - 212)) |
								(1 << (VtlParser.PARTIAL_NULL - 212)) |
								(1 << (VtlParser.PARTIAL_ZERO - 212)) |
								(1 << (VtlParser.ALWAYS_NULL - 212)) |
								(1 << (VtlParser.ALWAYS_ZERO - 212)))) !==
							0
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public conditionClause(): ConditionClauseContext {
		let _localctx: ConditionClauseContext = new ConditionClauseContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 166, VtlParser.RULE_conditionClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1573;
				this.match(VtlParser.CONDITION);
				this.state = 1574;
				this.componentID();
				this.state = 1579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 1575;
							this.match(VtlParser.COMMA);
							this.state = 1576;
							this.componentID();
						}
					}
					this.state = 1581;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public inputMode(): InputModeContext {
		let _localctx: InputModeContext = new InputModeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 168, VtlParser.RULE_inputMode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1582;
				_la = this._input.LA(1);
				if (
					!(_la === VtlParser.DATASET || _la === VtlParser.DATASET_PRIORITY)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public imbalanceExpr(): ImbalanceExprContext {
		let _localctx: ImbalanceExprContext = new ImbalanceExprContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 170, VtlParser.RULE_imbalanceExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1584;
				this.match(VtlParser.IMBALANCE);
				this.state = 1585;
				this.expr(0);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public inputModeHierarchy(): InputModeHierarchyContext {
		let _localctx: InputModeHierarchyContext = new InputModeHierarchyContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 172, VtlParser.RULE_inputModeHierarchy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1587;
				_la = this._input.LA(1);
				if (
					!(
						_la === VtlParser.DATASET ||
						_la === VtlParser.RULE ||
						_la === VtlParser.RULE_PRIORITY
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public outputModeHierarchy(): OutputModeHierarchyContext {
		let _localctx: OutputModeHierarchyContext = new OutputModeHierarchyContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 174, VtlParser.RULE_outputModeHierarchy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1589;
				_la = this._input.LA(1);
				if (!(_la === VtlParser.ALL || _la === VtlParser.COMPUTED)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public alias(): AliasContext {
		let _localctx: AliasContext = new AliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, VtlParser.RULE_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1591;
				this.match(VtlParser.IDENTIFIER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public varID(): VarIDContext {
		let _localctx: VarIDContext = new VarIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, VtlParser.RULE_varID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1593;
				this.match(VtlParser.IDENTIFIER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public simpleComponentId(): SimpleComponentIdContext {
		let _localctx: SimpleComponentIdContext = new SimpleComponentIdContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 180, VtlParser.RULE_simpleComponentId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1595;
				this.match(VtlParser.IDENTIFIER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public componentID(): ComponentIDContext {
		let _localctx: ComponentIDContext = new ComponentIDContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 182, VtlParser.RULE_componentID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1597;
				this.match(VtlParser.IDENTIFIER);
				this.state = 1600;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 179, this._ctx)) {
					case 1:
						{
							this.state = 1598;
							this.match(VtlParser.MEMBERSHIP);
							this.state = 1599;
							this.match(VtlParser.IDENTIFIER);
						}
						break;
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public lists(): ListsContext {
		let _localctx: ListsContext = new ListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, VtlParser.RULE_lists);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1602;
				this.match(VtlParser.GLPAREN);
				this.state = 1603;
				this.constant();
				this.state = 1608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
						{
							this.state = 1604;
							this.match(VtlParser.COMMA);
							this.state = 1605;
							this.constant();
						}
					}
					this.state = 1610;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1611;
				this.match(VtlParser.GRPAREN);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public erCode(): ErCodeContext {
		let _localctx: ErCodeContext = new ErCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, VtlParser.RULE_erCode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1613;
				this.match(VtlParser.ERRORCODE);
				this.state = 1614;
				this.constant();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public erLevel(): ErLevelContext {
		let _localctx: ErLevelContext = new ErLevelContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, VtlParser.RULE_erLevel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1616;
				this.match(VtlParser.ERRORLEVEL);
				this.state = 1617;
				this.constant();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public comparisonOperand(): ComparisonOperandContext {
		let _localctx: ComparisonOperandContext = new ComparisonOperandContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 190, VtlParser.RULE_comparisonOperand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1619;
				_la = this._input.LA(1);
				if (
					!(
						(_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << VtlParser.EQ) |
								(1 << VtlParser.LT) |
								(1 << VtlParser.MT) |
								(1 << VtlParser.ME) |
								(1 << VtlParser.NEQ) |
								(1 << VtlParser.LE))) !==
							0
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public optionalExpr(): OptionalExprContext {
		let _localctx: OptionalExprContext = new OptionalExprContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 192, VtlParser.RULE_optionalExpr);
		try {
			this.state = 1623;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.LPAREN:
				case VtlParser.PLUS:
				case VtlParser.MINUS:
				case VtlParser.EVAL:
				case VtlParser.IF:
				case VtlParser.CURRENT_DATE:
				case VtlParser.NOT:
				case VtlParser.BETWEEN:
				case VtlParser.NULL_CONSTANT:
				case VtlParser.ISNULL:
				case VtlParser.UNION:
				case VtlParser.SYMDIFF:
				case VtlParser.INTERSECT:
				case VtlParser.CHECK:
				case VtlParser.EXISTS_IN:
				case VtlParser.MIN:
				case VtlParser.MAX:
				case VtlParser.ABS:
				case VtlParser.LN:
				case VtlParser.LOG:
				case VtlParser.TRUNC:
				case VtlParser.ROUND:
				case VtlParser.POWER:
				case VtlParser.MOD:
				case VtlParser.LEN:
				case VtlParser.TRIM:
				case VtlParser.UCASE:
				case VtlParser.LCASE:
				case VtlParser.SUBSTR:
				case VtlParser.SUM:
				case VtlParser.AVG:
				case VtlParser.MEDIAN:
				case VtlParser.COUNT:
				case VtlParser.EXP:
				case VtlParser.CHARSET_MATCH:
				case VtlParser.NVL:
				case VtlParser.HIERARCHY:
				case VtlParser.LTRIM:
				case VtlParser.RTRIM:
				case VtlParser.INSTR:
				case VtlParser.REPLACE:
				case VtlParser.CEIL:
				case VtlParser.FLOOR:
				case VtlParser.SQRT:
				case VtlParser.SETDIFF:
				case VtlParser.STDDEV_POP:
				case VtlParser.STDDEV_SAMP:
				case VtlParser.VAR_POP:
				case VtlParser.VAR_SAMP:
				case VtlParser.FIRST_VALUE:
				case VtlParser.LAST_VALUE:
				case VtlParser.LAG:
				case VtlParser.LEAD:
				case VtlParser.RATIO_TO_REPORT:
				case VtlParser.FILL_TIME_SERIES:
				case VtlParser.FLOW_TO_STOCK:
				case VtlParser.STOCK_TO_FLOW:
				case VtlParser.TIMESHIFT:
				case VtlParser.INNER_JOIN:
				case VtlParser.LEFT_JOIN:
				case VtlParser.CROSS_JOIN:
				case VtlParser.FULL_JOIN:
				case VtlParser.PERIOD_INDICATOR:
				case VtlParser.TIME_AGG:
				case VtlParser.CAST:
				case VtlParser.CHECK_DATAPOINT:
				case VtlParser.CHECK_HIERARCHY:
				case VtlParser.INTEGER_CONSTANT:
				case VtlParser.NUMBER_CONSTANT:
				case VtlParser.BOOLEAN_CONSTANT:
				case VtlParser.STRING_CONSTANT:
				case VtlParser.IDENTIFIER:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1621;
						this.expr(0);
					}
					break;
				case VtlParser.OPTIONAL:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1622;
						this.match(VtlParser.OPTIONAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public optionalExprComponent(): OptionalExprComponentContext {
		let _localctx: OptionalExprComponentContext = new OptionalExprComponentContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 194, VtlParser.RULE_optionalExprComponent);
		try {
			this.state = 1627;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.LPAREN:
				case VtlParser.PLUS:
				case VtlParser.MINUS:
				case VtlParser.IF:
				case VtlParser.CURRENT_DATE:
				case VtlParser.NOT:
				case VtlParser.BETWEEN:
				case VtlParser.NULL_CONSTANT:
				case VtlParser.ISNULL:
				case VtlParser.RANK:
				case VtlParser.MIN:
				case VtlParser.MAX:
				case VtlParser.ABS:
				case VtlParser.LN:
				case VtlParser.LOG:
				case VtlParser.TRUNC:
				case VtlParser.ROUND:
				case VtlParser.POWER:
				case VtlParser.MOD:
				case VtlParser.LEN:
				case VtlParser.TRIM:
				case VtlParser.UCASE:
				case VtlParser.LCASE:
				case VtlParser.SUBSTR:
				case VtlParser.SUM:
				case VtlParser.AVG:
				case VtlParser.MEDIAN:
				case VtlParser.COUNT:
				case VtlParser.EXP:
				case VtlParser.CHARSET_MATCH:
				case VtlParser.NVL:
				case VtlParser.LTRIM:
				case VtlParser.RTRIM:
				case VtlParser.INSTR:
				case VtlParser.REPLACE:
				case VtlParser.CEIL:
				case VtlParser.FLOOR:
				case VtlParser.SQRT:
				case VtlParser.STDDEV_POP:
				case VtlParser.STDDEV_SAMP:
				case VtlParser.VAR_POP:
				case VtlParser.VAR_SAMP:
				case VtlParser.FIRST_VALUE:
				case VtlParser.LAST_VALUE:
				case VtlParser.LAG:
				case VtlParser.LEAD:
				case VtlParser.RATIO_TO_REPORT:
				case VtlParser.FILL_TIME_SERIES:
				case VtlParser.FLOW_TO_STOCK:
				case VtlParser.STOCK_TO_FLOW:
				case VtlParser.TIMESHIFT:
				case VtlParser.PERIOD_INDICATOR:
				case VtlParser.TIME_AGG:
				case VtlParser.CAST:
				case VtlParser.INTEGER_CONSTANT:
				case VtlParser.NUMBER_CONSTANT:
				case VtlParser.BOOLEAN_CONSTANT:
				case VtlParser.STRING_CONSTANT:
				case VtlParser.IDENTIFIER:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1625;
						this.exprComponent(0);
					}
					break;
				case VtlParser.OPTIONAL:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1626;
						this.match(VtlParser.OPTIONAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public componentRole(): ComponentRoleContext {
		let _localctx: ComponentRoleContext = new ComponentRoleContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 196, VtlParser.RULE_componentRole);
		try {
			this.state = 1634;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.MEASURE:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1629;
						this.match(VtlParser.MEASURE);
					}
					break;
				case VtlParser.COMPONENT:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1630;
						this.match(VtlParser.COMPONENT);
					}
					break;
				case VtlParser.DIMENSION:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1631;
						this.match(VtlParser.DIMENSION);
					}
					break;
				case VtlParser.ATTRIBUTE:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 1632;
						this.match(VtlParser.ATTRIBUTE);
					}
					break;
				case VtlParser.VIRAL:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 1633;
						this.viralAttribute();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public viralAttribute(): ViralAttributeContext {
		let _localctx: ViralAttributeContext = new ViralAttributeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 198, VtlParser.RULE_viralAttribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1636;
				this.match(VtlParser.VIRAL);
				this.state = 1637;
				this.match(VtlParser.ATTRIBUTE);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public valueDomainID(): ValueDomainIDContext {
		let _localctx: ValueDomainIDContext = new ValueDomainIDContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 200, VtlParser.RULE_valueDomainID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1639;
				this.match(VtlParser.IDENTIFIER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public operatorID(): OperatorIDContext {
		let _localctx: OperatorIDContext = new OperatorIDContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 202, VtlParser.RULE_operatorID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1641;
				this.match(VtlParser.IDENTIFIER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public routineName(): RoutineNameContext {
		let _localctx: RoutineNameContext = new RoutineNameContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 204, VtlParser.RULE_routineName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1643;
				this.match(VtlParser.IDENTIFIER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, VtlParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1645;
				_la = this._input.LA(1);
				if (
					!(
						_la === VtlParser.NULL_CONSTANT ||
						(((_la - 228) & ~0x1f) === 0 &&
							((1 << (_la - 228)) &
								((1 << (VtlParser.INTEGER_CONSTANT - 228)) |
									(1 << (VtlParser.NUMBER_CONSTANT - 228)) |
									(1 << (VtlParser.BOOLEAN_CONSTANT - 228)) |
									(1 << (VtlParser.STRING_CONSTANT - 228)))) !==
								0)
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public basicScalarType(): BasicScalarTypeContext {
		let _localctx: BasicScalarTypeContext = new BasicScalarTypeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 208, VtlParser.RULE_basicScalarType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1647;
				_la = this._input.LA(1);
				if (
					!(
						(((_la - 156) & ~0x1f) === 0 &&
							((1 << (_la - 156)) &
								((1 << (VtlParser.BOOLEAN - 156)) |
									(1 << (VtlParser.DATE - 156)) |
									(1 << (VtlParser.TIME_PERIOD - 156)) |
									(1 << (VtlParser.NUMBER - 156)) |
									(1 << (VtlParser.STRING - 156)) |
									(1 << (VtlParser.INTEGER - 156)))) !==
								0) ||
						_la === VtlParser.DURATION ||
						_la === VtlParser.SCALAR ||
						_la === VtlParser.TIME
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	// @RuleVersion(0)
	public retainType(): RetainTypeContext {
		let _localctx: RetainTypeContext = new RetainTypeContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 210, VtlParser.RULE_retainType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1649;
				_la = this._input.LA(1);
				if (!(_la === VtlParser.ALL || _la === VtlParser.BOOLEAN_CONSTANT)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(
		_localctx: RuleContext,
		ruleIndex: number,
		predIndex: number
	): boolean {
		switch (ruleIndex) {
			case 2:
				return this.expr_sempred(_localctx as ExprContext, predIndex);

			case 3:
				return this.exprComponent_sempred(
					_localctx as ExprComponentContext,
					predIndex
				);
		}
		return true;
	}

	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return this.precpred(this._ctx, 9);

			case 1:
				return this.precpred(this._ctx, 8);

			case 2:
				return this.precpred(this._ctx, 7);

			case 3:
				return this.precpred(this._ctx, 5);

			case 4:
				return this.precpred(this._ctx, 4);

			case 5:
				return this.precpred(this._ctx, 12);

			case 6:
				return this.precpred(this._ctx, 11);

			case 7:
				return this.precpred(this._ctx, 6);
		}
		return true;
	}

	private exprComponent_sempred(
		_localctx: ExprComponentContext,
		predIndex: number
	): boolean {
		switch (predIndex) {
			case 8:
				return this.precpred(this._ctx, 9);

			case 9:
				return this.precpred(this._ctx, 8);

			case 10:
				return this.precpred(this._ctx, 7);

			case 11:
				return this.precpred(this._ctx, 5);

			case 12:
				return this.precpred(this._ctx, 4);

			case 13:
				return this.precpred(this._ctx, 6);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		'\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xFA\u0676\x04' +
		'\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04' +
		'\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r' +
		'\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12' +
		'\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17' +
		'\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C' +
		'\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04' +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		'+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04' +
		'4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
		'=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
		'F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04' +
		'O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04' +
		'X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t' +
		'`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04' +
		'i\ti\x04j\tj\x04k\tk\x03\x02\x03\x02\x03\x02\x07\x02\xDA\n\x02\f\x02\x0E' +
		'\x02\xDD\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
		'\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xEA\n\x03\x03\x04\x03\x04\x03' +
		'\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
		'\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xFD\n\x04\x03\x04' +
		'\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
		'\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
		'\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
		'\x05\x04\u011B\n\x04\x07\x04\u011D\n\x04\f\x04\x0E\x04\u0120\v\x04\x03' +
		'\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03' +
		'\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0133' +
		'\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
		'\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
		'\x03\x05\x03\x05\x03\x05\x05\x05\u0149\n\x05\x07\x05\u014B\n\x05\f\x05' +
		'\x0E\x05\u014E\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
		'\x06\x03\x06\x05\x06\u0158\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07' +
		'\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0166' +
		'\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0170\n\b' +
		'\x03\t\x03\t\x03\t\x03\t\x07\t\u0176\n\t\f\t\x0E\t\u0179\v\t\x03\n\x03' +
		'\n\x03\n\x03\n\x05\n\u017F\n\n\x05\n\u0181\n\n\x03\v\x03\v\x03\v\x03\f' +
		'\x03\f\x03\f\x03\f\x07\f\u018A\n\f\f\f\x0E\f\u018D\v\f\x03\r\x03\r\x03' +
		'\r\x03\r\x07\r\u0193\n\r\f\r\x0E\r\u0196\v\r\x03\x0E\x03\x0E\x03\x0E\x03' +
		'\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03' +
		'\x0F\x07\x0F\u01A5\n\x0F\f\x0F\x0E\x0F\u01A8\v\x0F\x03\x10\x03\x10\x03' +
		'\x10\x03\x10\x07\x10\u01AE\n\x10\f\x10\x0E\x10\u01B1\v\x10\x03\x11\x03' +
		'\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03' +
		'\x11\x03\x11\x05\x11\u01BF\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
		'\x03\x12\x03\x12\x07\x12\u01C8\n\x12\f\x12\x0E\x12\u01CB\v\x12\x05\x12' +
		'\u01CD\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01D2\n\x12\x03\x12\x03\x12' +
		'\x03\x12\x05\x12\u01D7\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03' +
		'\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03' +
		'\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03' +
		'\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01F6\n\x12\x03\x13' +
		'\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u01FD\n\x13\f\x13\x0E\x13\u0200' +
		'\v\x13\x05\x13\u0202\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03' +
		'\x13\x03\x13\x03\x13\x05\x13\u020C\n\x13\x03\x13\x03\x13\x03\x13\x05\x13' +
		'\u0211\n\x13\x07\x13\u0213\n\x13\f\x13\x0E\x13\u0216\v\x13\x03\x13\x03' +
		'\x13\x03\x13\x05\x13\u021B\n\x13\x03\x13\x03\x13\x05\x13\u021F\n\x13\x03' +
		'\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0229' +
		'\n\x13\x03\x13\x03\x13\x05\x13\u022D\n\x13\x03\x13\x03\x13\x05\x13\u0231' +
		'\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0238\n\x14\f\x14' +
		'\x0E\x14\u023B\v\x14\x05\x14\u023D\n\x14\x03\x14\x03\x14\x03\x14\x03\x14' +
		'\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0247\n\x14\x03\x14\x03\x14\x05' +
		'\x14\u024B\n\x14\x03\x14\x03\x14\x05\x14\u024F\n\x14\x03\x15\x03\x15\x03' +
		'\x15\x05\x15\u0254\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0259\n\x16\x03' +
		'\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03' +
		'\x17\x07\x17\u0265\n\x17\f\x17\x0E\x17\u0268\v\x17\x03\x17\x03\x17\x03' +
		'\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0273\n\x17' +
		'\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17' +
		'\x05\x17\u027E\n\x17\x03\x17\x03\x17\x05\x17\u0282\n\x17\x03\x17\x03\x17' +
		'\x05\x17\u0286\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03' +
		'\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0292\n\x18\f\x18\x0E\x18\u0295\v' +
		'\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03' +
		'\x18\x05\x18\u02A0\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18' +
		'\x03\x18\x03\x18\x03\x18\x05\x18\u02AB\n\x18\x03\x18\x03\x18\x05\x18\u02AF' +
		'\n\x18\x03\x18\x03\x18\x05\x18\u02B3\n\x18\x03\x19\x03\x19\x03\x19\x03' +
		'\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02BF\n\x19' +
		'\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19' +
		'\x05\x19\u02CA\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03' +
		'\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02D6\n\x1A\x03\x1A\x03\x1A\x03\x1A' +
		'\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02E1\n\x1A\x03' +
		'\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03' +
		'\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03' +
		'\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03' +
		'\x1B\x05\x1B\u02FF\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0303\n\x1B\x03\x1C\x03' +
		'\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03' +
		'\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03' +
		'\x1C\x03\x1C\x05\x1C\u031A\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u031F' +
		'\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0327\n' +
		'\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03' +
		'\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03' +
		'\x1D\x03\x1D\x05\x1D\u033C\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0341' +
		'\n\x1D\x05\x1D\u0343\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0347\n\x1D\x03\x1D' +
		'\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u034D\n\x1D\x03\x1E\x03\x1E\x03\x1E\x05' +
		'\x1E\u0352\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E' +
		'\u035A\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03' +
		'\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03' +
		'\x1E\x03\x1E\x03\x1E\x05\x1E\u036F\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E' +
		'\u0374\n\x1E\x05\x1E\u0376\n\x1E\x03\x1E\x03\x1E\x05\x1E\u037A\n\x1E\x03' +
		'\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0380\n\x1E\x03\x1F\x03\x1F\x03\x1F' +
		'\x03\x1F\x03\x1F\x06\x1F\u0387\n\x1F\r\x1F\x0E\x1F\u0388\x03\x1F\x03\x1F' +
		'\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x06\x1F\u0392\n\x1F\r\x1F\x0E' +
		'\x1F\u0393\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03' +
		'\x1F\x03\x1F\x05\x1F\u039F\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x05 \u03A7' +
		'\n \x03 \x03 \x05 \u03AB\n \x03 \x05 \u03AE\n \x03 \x05 \u03B1\n \x03' +
		' \x05 \u03B4\n \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03' +
		'!\x07!\u03C1\n!\f!\x0E!\u03C4\v!\x05!\u03C6\n!\x03!\x05!\u03C9\n!\x03' +
		'!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u03D3\n!\x03!\x03!\x05!\u03D7' +
		'\n!\x03!\x05!\u03DA\n!\x03!\x05!\u03DD\n!\x03!\x05!\u03E0\n!\x03!\x03' +
		'!\x03!\x03!\x03!\x03!\x05!\u03E8\n!\x03!\x05!\u03EB\n!\x03!\x05!\u03EE' +
		'\n!\x03!\x05!\u03F1\n!\x03!\x03!\x05!\u03F5\n!\x03"\x03"\x03"\x03"' +
		'\x03"\x03"\x03"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03' +
		'$\x03$\x03$\x03$\x03$\x05$\u040D\n$\x03%\x03%\x03%\x03%\x03%\x05%\u0414' +
		'\n%\x05%\u0416\n%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0420\n' +
		'&\x03&\x05&\u0423\n&\x03&\x05&\u0426\n&\x03&\x03&\x03&\x03&\x03&\x03&' +
		'\x03&\x03&\x03&\x05&\u0431\n&\x05&\u0433\n&\x03&\x03&\x03&\x05&\u0438' +
		'\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03' +
		"&\x05&\u0448\n&\x03'\x03'\x03'\x03'\x03'\x03'\x05'\u0450\n'\x03" +
		"'\x05'\u0453\n'\x03'\x05'\u0456\n'\x03'\x03'\x03'\x03'\x03'" +
		"\x03'\x03'\x03'\x03'\x05'\u0461\n'\x05'\u0463\n'\x03'\x03'\x03" +
		"'\x05'\u0468\n'\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x03" +
		"'\x03'\x05'\u0474\n'\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x03" +
		"'\x03'\x03'\x03'\x03'\x03'\x03'\x05'\u0484\n'\x03(\x03(\x03(" +
		'\x03(\x03)\x03)\x03)\x07)\u048D\n)\f)\x0E)\u0490\v)\x03*\x05*\u0493\n' +
		'*\x03*\x03*\x03*\x03*\x03+\x05+\u049A\n+\x03+\x03+\x03+\x03+\x03,\x03' +
		',\x03,\x03,\x03-\x03-\x03-\x07-\u04A7\n-\f-\x0E-\u04AA\v-\x03.\x03.\x03' +
		'.\x07.\u04AF\n.\f.\x0E.\u04B2\v.\x03.\x03.\x03.\x03.\x07.\u04B8\n.\f.' +
		'\x0E.\u04BB\v.\x05.\u04BD\n.\x03/\x03/\x03/\x05/\u04C2\n/\x030\x050\u04C5' +
		'\n0\x030\x030\x030\x050\u04CA\n0\x030\x050\u04CD\n0\x030\x050\u04D0\n' +
		'0\x031\x031\x031\x032\x032\x032\x032\x032\x072\u04DA\n2\f2\x0E2\u04DD' +
		'\v2\x033\x033\x033\x033\x033\x073\u04E4\n3\f3\x0E3\u04E7\v3\x034\x034' +
		'\x054\u04EB\n4\x035\x035\x035\x055\u04F0\n5\x035\x035\x035\x035\x035\x03' +
		'6\x036\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x057\u0504' +
		'\n7\x038\x038\x038\x038\x038\x078\u050B\n8\f8\x0E8\u050E\v8\x038\x038' +
		'\x038\x058\u0513\n8\x039\x039\x039\x03:\x03:\x03:\x03:\x05:\u051C\n:\x03' +
		';\x03;\x03;\x05;\u0521\n;\x03<\x03<\x03<\x03<\x03<\x05<\u0528\n<\x03=' +
		'\x03=\x03=\x05=\u052D\n=\x03>\x03>\x05>\u0531\n>\x03>\x05>\u0534\n>\x03' +
		'>\x05>\u0537\n>\x03>\x05>\u053A\n>\x03?\x03?\x03?\x03?\x03?\x05?\u0541' +
		'\n?\x03@\x03@\x03@\x03@\x03@\x07@\u0548\n@\f@\x0E@\u054B\v@\x03@\x03@' +
		'\x05@\u054F\n@\x03A\x03A\x03A\x03A\x03A\x05A\u0556\nA\x03B\x03B\x03B\x03' +
		'B\x03B\x03B\x07B\u055E\nB\fB\x0EB\u0561\vB\x03B\x03B\x05B\u0565\nB\x03' +
		'B\x03B\x03B\x03B\x03B\x07B\u056C\nB\fB\x0EB\u056F\vB\x03B\x03B\x05B\u0573' +
		'\nB\x05B\u0575\nB\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x07C\u057F\n' +
		'C\fC\x0EC\u0582\vC\x03C\x03C\x05C\u0586\nC\x03C\x05C\u0589\nC\x03C\x03' +
		'C\x03C\x03C\x03C\x03C\x03C\x07C\u0592\nC\fC\x0EC\u0595\vC\x03C\x03C\x05' +
		'C\u0599\nC\x03C\x03C\x05C\u059D\nC\x05C\u059F\nC\x03D\x03D\x03E\x03E\x03' +
		'F\x03F\x03F\x03F\x07F\u05A9\nF\fF\x0EF\u05AC\vF\x03G\x03G\x03G\x05G\u05B1' +
		'\nG\x03H\x03H\x03H\x07H\u05B6\nH\fH\x0EH\u05B9\vH\x03I\x03I\x05I\u05BD' +
		'\nI\x03I\x03I\x03I\x03I\x05I\u05C3\nI\x03I\x03I\x05I\u05C7\nI\x03I\x05' +
		'I\u05CA\nI\x03J\x03J\x03J\x07J\u05CF\nJ\fJ\x0EJ\u05D2\vJ\x03K\x03K\x05' +
		'K\u05D6\nK\x03K\x03K\x05K\u05DA\nK\x03K\x05K\u05DD\nK\x03L\x03L\x03L\x05' +
		'L\u05E2\nL\x03L\x03L\x03L\x03M\x03M\x03M\x07M\u05EA\nM\fM\x0EM\u05ED\v' +
		'M\x03N\x03N\x03N\x03N\x05N\u05F3\nN\x03N\x03N\x05N\u05F7\nN\x03N\x03N' +
		'\x07N\u05FB\nN\fN\x0EN\u05FE\vN\x03O\x05O\u0601\nO\x03O\x03O\x03O\x03' +
		'O\x03O\x05O\u0608\nO\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x07P\u0612' +
		'\nP\fP\x0EP\u0615\vP\x03P\x03P\x05P\u0619\nP\x03Q\x03Q\x03Q\x05Q\u061E' +
		'\nQ\x03R\x03R\x05R\u0622\nR\x03S\x03S\x03T\x03T\x03U\x03U\x03U\x03U\x07' +
		'U\u062C\nU\fU\x0EU\u062F\vU\x03V\x03V\x03W\x03W\x03W\x03X\x03X\x03Y\x03' +
		'Y\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03]\x03]\x03]\x05]\u0643\n]\x03^\x03' +
		'^\x03^\x03^\x07^\u0649\n^\f^\x0E^\u064C\v^\x03^\x03^\x03_\x03_\x03_\x03' +
		'`\x03`\x03`\x03a\x03a\x03b\x03b\x05b\u065A\nb\x03c\x03c\x05c\u065E\nc' +
		'\x03d\x03d\x03d\x03d\x03d\x05d\u0665\nd\x03e\x03e\x03e\x03f\x03f\x03g' +
		'\x03g\x03h\x03h\x03i\x03i\x03j\x03j\x03k\x03k\x03k\x02\x02\x04\x06\bl' +
		'\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14' +
		'\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02' +
		'*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02' +
		'F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02' +
		'b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02' +
		'~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02' +
		'\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02' +
		'\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02' +
		'\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02' +
		'\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\x02&' +
		"\x04\x02\x10\x11))\x03\x02\x12\x13\x04\x02\x10\x11TT\x03\x02'(\x03\x02" +
		'+,\x03\x02 !\x04\x02\xBF\xBF\xC1\xC1\x03\x02\xB6\xB7\x03\x02\xB8\xB9\x05' +
		'\x02SSUWyz\x06\x02KKMMbb}\x7F\x03\x02OP\x04\x02NNQR\x04\x02>>\xC6\xC6' +
		'\x03\x02\x98\x99\x04\x02ii\xE9\xE9\x03\x02HI\x04\x0222\x81\x81\x04\x02' +
		'>>jj\x05\x02FGY\\\x82\x85\x06\x02FGY\\\x82\x85\x89\x8A\x03\x02\x8B\x8C' +
		'\x03\x02DE\x04\x02BB\x87\x87\x03\x02kl\x03\x02\x10\x11\x04\x02\x10\x10' +
		'\x12\x12\x05\x02>>jj\xDD\xDD\x03\x02\xD6\xDB\x04\x02oo\xD1\xD1\x05\x02' +
		'oovv\xD0\xD0\x04\x02>>\xD5\xD5\x03\x02\n\x0F\x04\x02--\xE6\xE9\x06\x02' +
		'\x9E\xA3\xC7\xC7\xDE\xDE\xF5\xF5\x04\x02>>\xE8\xE8\x02\u0716\x02\xDB\x03' +
		'\x02\x02\x02\x04\xE9\x03\x02\x02\x02\x06\xFC\x03\x02\x02\x02\b\u0132\x03' +
		'\x02\x02\x02\n\u0157\x03\x02\x02\x02\f\u0165\x03\x02\x02\x02\x0E\u016F' +
		'\x03\x02\x02\x02\x10\u0171\x03\x02\x02\x02\x12\u017A\x03\x02\x02\x02\x14' +
		'\u0182\x03\x02\x02\x02\x16\u0185\x03\x02\x02\x02\x18\u018E\x03\x02\x02' +
		'\x02\x1A\u0197\x03\x02\x02\x02\x1C\u019C\x03\x02\x02\x02\x1E\u01A9\x03' +
		'\x02\x02\x02 \u01BE\x03\x02\x02\x02"\u01F5\x03\x02\x02\x02$\u0230\x03' +
		'\x02\x02\x02&\u024E\x03\x02\x02\x02(\u0253\x03\x02\x02\x02*\u0258\x03' +
		'\x02\x02\x02,\u0285\x03\x02\x02\x02.\u02B2\x03\x02\x02\x020\u02C9\x03' +
		'\x02\x02\x022\u02E0\x03\x02\x02\x024\u0302\x03\x02\x02\x026\u0319\x03' +
		'\x02\x02\x028\u034C\x03\x02\x02\x02:\u037F\x03\x02\x02\x02<\u039E\x03' +
		'\x02\x02\x02>\u03A0\x03\x02\x02\x02@\u03F4\x03\x02\x02\x02B\u03F6\x03' +
		'\x02\x02\x02D\u03FD\x03\x02\x02\x02F\u040C\x03\x02\x02\x02H\u040E\x03' +
		'\x02\x02\x02J\u0447\x03\x02\x02\x02L\u0483\x03\x02\x02\x02N\u0485\x03' +
		'\x02\x02\x02P\u0489\x03\x02\x02\x02R\u0492\x03\x02\x02\x02T\u0499\x03' +
		'\x02\x02\x02V\u049F\x03\x02\x02\x02X\u04A3\x03\x02\x02\x02Z\u04AB\x03' +
		'\x02\x02\x02\\\u04BE\x03\x02\x02\x02^\u04C4\x03\x02\x02\x02`\u04D1\x03' +
		'\x02\x02\x02b\u04D4\x03\x02\x02\x02d\u04DE\x03\x02\x02\x02f\u04E8\x03' +
		'\x02\x02\x02h\u04EF\x03\x02\x02\x02j\u04F6\x03\x02\x02\x02l\u0503\x03' +
		'\x02\x02\x02n\u0512\x03\x02\x02\x02p\u0514\x03\x02\x02\x02r\u0517\x03' +
		'\x02\x02\x02t\u0520\x03\x02\x02\x02v\u0527\x03\x02\x02\x02x\u052C\x03' +
		'\x02\x02\x02z\u0530\x03\x02\x02\x02|\u053B\x03\x02\x02\x02~\u0542\x03' +
		'\x02\x02\x02\x80\u0550\x03\x02\x02\x02\x82\u0574\x03\x02\x02\x02\x84\u059E' +
		'\x03\x02\x02\x02\x86\u05A0\x03\x02\x02\x02\x88\u05A2\x03\x02\x02\x02\x8A' +
		'\u05A4\x03\x02\x02\x02\x8C\u05AD\x03\x02\x02\x02\x8E\u05B2\x03\x02\x02' +
		'\x02\x90\u05BC\x03\x02\x02\x02\x92\u05CB\x03\x02\x02\x02\x94\u05D5\x03' +
		'\x02\x02\x02\x96\u05DE\x03\x02\x02\x02\x98\u05E6\x03\x02\x02\x02\x9A\u05F2' +
		'\x03\x02\x02\x02\x9C\u0600\x03\x02\x02\x02\x9E\u0618\x03\x02\x02\x02\xA0' +
		'\u061A\x03\x02\x02\x02\xA2\u061F\x03\x02\x02\x02\xA4\u0623\x03\x02\x02' +
		'\x02\xA6\u0625\x03\x02\x02\x02\xA8\u0627\x03\x02\x02\x02\xAA\u0630\x03' +
		'\x02\x02\x02\xAC\u0632\x03\x02\x02\x02\xAE\u0635\x03\x02\x02\x02\xB0\u0637' +
		'\x03\x02\x02\x02\xB2\u0639\x03\x02\x02\x02\xB4\u063B\x03\x02\x02\x02\xB6' +
		'\u063D\x03\x02\x02\x02\xB8\u063F\x03\x02\x02\x02\xBA\u0644\x03\x02\x02' +
		'\x02\xBC\u064F\x03\x02\x02\x02\xBE\u0652\x03\x02\x02\x02\xC0\u0655\x03' +
		'\x02\x02\x02\xC2\u0659\x03\x02\x02\x02\xC4\u065D\x03\x02\x02\x02\xC6\u0664' +
		'\x03\x02\x02\x02\xC8\u0666\x03\x02\x02\x02\xCA\u0669\x03\x02\x02\x02\xCC' +
		'\u066B\x03\x02\x02\x02\xCE\u066D\x03\x02\x02\x02\xD0\u066F\x03\x02\x02' +
		'\x02\xD2\u0671\x03\x02\x02\x02\xD4\u0673\x03\x02\x02\x02\xD6\xD7\x05\x04' +
		'\x03\x02\xD7\xD8\x07\xF7\x02\x02\xD8\xDA\x03\x02\x02\x02\xD9\xD6\x03\x02' +
		'\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02' +
		'\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xDF\x07\x02' +
		'\x02\x03\xDF\x03\x03\x02\x02\x02\xE0\xE1\x05\xB4[\x02\xE1\xE2\x07\x16' +
		'\x02\x02\xE2\xE3\x05\x06\x04\x02\xE3\xEA\x03\x02\x02\x02\xE4\xE5\x05\xB4' +
		'[\x02\xE5\xE6\x07r\x02\x02\xE6\xE7\x05\x06\x04\x02\xE7\xEA\x03\x02\x02' +
		'\x02\xE8\xEA\x05"\x12\x02\xE9\xE0\x03\x02\x02\x02\xE9\xE4\x03\x02\x02' +
		'\x02\xE9\xE8\x03\x02\x02\x02\xEA\x05\x03\x02\x02\x02\xEB\xEC\b\x04\x01' +
		'\x02\xEC\xED\x07\x04\x02\x02\xED\xEE\x05\x06\x04\x02\xEE\xEF\x07\x05\x02' +
		'\x02\xEF\xFD\x03\x02\x02\x02\xF0\xFD\x05\f\x07\x02\xF1\xF2\t\x02\x02\x02' +
		'\xF2\xFD\x05\x06\x04\f\xF3\xF4\x07\x19\x02\x02\xF4\xF5\x05\x06\x04\x02' +
		'\xF5\xF6\x07\x1A\x02\x02\xF6\xF7\x05\x06\x04\x02\xF7\xF8\x07\x1B\x02\x02' +
		'\xF8\xF9\x05\x06\x04\x05\xF9\xFD\x03\x02\x02\x02\xFA\xFD\x05\xD0i\x02' +
		'\xFB\xFD\x05\xB4[\x02\xFC\xEB\x03\x02\x02\x02\xFC\xF0\x03\x02\x02\x02' +
		'\xFC\xF1\x03\x02\x02\x02\xFC\xF3\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02' +
		'\xFC\xFB\x03\x02\x02\x02\xFD\u011E\x03\x02\x02\x02\xFE\xFF\f\v\x02\x02' +
		'\xFF\u0100\t\x03\x02\x02\u0100\u011D\x05\x06\x04\f\u0101\u0102\f\n\x02' +
		'\x02\u0102\u0103\t\x04\x02\x02\u0103\u011D\x05\x06\x04\v\u0104\u0105\f' +
		'\t\x02\x02\u0105\u0106\x05\xC0a\x02\u0106\u0107\x05\x06\x04\n\u0107\u011D' +
		'\x03\x02\x02\x02\u0108\u0109\f\x07\x02\x02\u0109\u010A\x07&\x02\x02\u010A' +
		'\u011D\x05\x06\x04\b\u010B\u010C\f\x06\x02\x02\u010C\u010D\t\x05\x02\x02' +
		'\u010D\u011D\x05\x06\x04\x07\u010E\u010F\f\x0E\x02\x02\u010F\u0110\x07' +
		'\x06\x02\x02\u0110\u0111\x05\x0E\b';
	private static readonly _serializedATNSegment1: string =
		'\x02\u0111\u0112\x07\x07\x02\x02\u0112\u011D\x03\x02\x02\x02\u0113\u0114' +
		'\f\r\x02\x02\u0114\u0115\x07\x17\x02\x02\u0115\u011D\x05\xB6\\\x02\u0116' +
		'\u0117\f\b\x02\x02\u0117\u011A\t\x06\x02\x02\u0118\u011B\x05\xBA^\x02' +
		'\u0119\u011B\x05\xCAf\x02\u011A\u0118\x03\x02\x02\x02\u011A\u0119\x03' +
		'\x02\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C\xFE\x03\x02\x02\x02\u011C' +
		'\u0101\x03\x02\x02\x02\u011C\u0104\x03\x02\x02\x02\u011C\u0108\x03\x02' +
		'\x02\x02\u011C\u010B\x03\x02\x02\x02\u011C\u010E\x03\x02\x02\x02\u011C' +
		'\u0113\x03\x02\x02\x02\u011C\u0116\x03\x02\x02\x02\u011D\u0120\x03\x02' +
		'\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F' +
		'\x07\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0122\b\x05\x01' +
		'\x02\u0122\u0123\x07\x04\x02\x02\u0123\u0124\x05\b\x05\x02\u0124\u0125' +
		'\x07\x05\x02\x02\u0125\u0133\x03\x02\x02\x02\u0126\u0133\x05\n\x06\x02' +
		'\u0127\u0128\t\x02\x02\x02\u0128\u0133\x05\b\x05\f\u0129\u012A\x07\x19' +
		'\x02\x02\u012A\u012B\x05\b\x05\x02\u012B\u012C\x07\x1A\x02\x02\u012C\u012D' +
		'\x05\b\x05\x02\u012D\u012E\x07\x1B\x02\x02\u012E\u012F\x05\b\x05\x05\u012F' +
		'\u0133\x03\x02\x02\x02\u0130\u0133\x05\xD0i\x02\u0131\u0133\x05\xB8]\x02' +
		'\u0132\u0121\x03\x02\x02\x02\u0132\u0126\x03\x02\x02\x02\u0132\u0127\x03' +
		'\x02\x02\x02\u0132\u0129\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132' +
		'\u0131\x03\x02\x02\x02\u0133\u014C\x03\x02\x02\x02\u0134\u0135\f\v\x02' +
		'\x02\u0135\u0136\t\x03\x02\x02\u0136\u014B\x05\b\x05\f\u0137\u0138\f\n' +
		'\x02\x02\u0138\u0139\t\x04\x02\x02\u0139\u014B\x05\b\x05\v\u013A\u013B' +
		'\f\t\x02\x02\u013B\u013C\x05\xC0a\x02\u013C\u013D\x05\b\x05\n\u013D\u014B' +
		'\x03\x02\x02\x02\u013E\u013F\f\x07\x02\x02\u013F\u0140\x07&\x02\x02\u0140' +
		'\u014B\x05\b\x05\b\u0141\u0142\f\x06\x02\x02\u0142\u0143\t\x05\x02\x02' +
		'\u0143\u014B\x05\b\x05\x07\u0144\u0145\f\b\x02\x02\u0145\u0148\t\x06\x02' +
		'\x02\u0146\u0149\x05\xBA^\x02\u0147\u0149\x05\xCAf\x02\u0148\u0146\x03' +
		'\x02\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149\u014B\x03\x02\x02\x02\u014A' +
		'\u0134\x03\x02\x02\x02\u014A\u0137\x03\x02\x02\x02\u014A\u013A\x03\x02' +
		'\x02\x02\u014A\u013E\x03\x02\x02\x02\u014A\u0141\x03\x02\x02\x02\u014A' +
		'\u0144\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02' +
		'\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\t\x03\x02\x02\x02\u014E\u014C' +
		'\x03\x02\x02\x02\u014F\u0158\x05&\x14\x02\u0150\u0158\x05.\x18\x02\u0151' +
		'\u0158\x052\x1A\x02\u0152\u0158\x056\x1C\x02\u0153\u0158\x05:\x1E\x02' +
		"\u0154\u0158\x05D#\x02\u0155\u0158\x05F$\x02\u0156\u0158\x05L'\x02\u0157" +
		'\u014F\x03\x02\x02\x02\u0157\u0150\x03\x02\x02\x02\u0157\u0151\x03\x02' +
		'\x02\x02\u0157\u0152\x03\x02\x02\x02\u0157\u0153\x03\x02\x02\x02\u0157' +
		'\u0154\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0156\x03\x02' +
		'\x02\x02\u0158\v\x03\x02\x02\x02\u0159\u0166\x05 \x11\x02\u015A\u0166' +
		'\x05$\x13\x02\u015B\u0166\x05,\x17\x02\u015C\u0166\x050\x19\x02\u015D' +
		'\u0166\x054\x1B\x02\u015E\u0166\x058\x1D\x02\u015F\u0166\x05<\x1F\x02' +
		'\u0160\u0166\x05> \x02\u0161\u0166\x05@!\x02\u0162\u0166\x05B"\x02\u0163' +
		'\u0166\x05H%\x02\u0164\u0166\x05J&\x02\u0165\u0159\x03\x02\x02\x02\u0165' +
		'\u015A\x03\x02\x02\x02\u0165\u015B\x03\x02\x02\x02\u0165\u015C\x03\x02' +
		'\x02\x02\u0165\u015D\x03\x02\x02\x02\u0165\u015E\x03\x02\x02\x02\u0165' +
		'\u015F\x03\x02\x02\x02\u0165\u0160\x03\x02\x02\x02\u0165\u0161\x03\x02' +
		'\x02\x02\u0165\u0162\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165' +
		'\u0164\x03\x02\x02\x02\u0166\r\x03\x02\x02\x02\u0167\u0170\x05\x10\t\x02' +
		'\u0168\u0170\x05\x12\n\x02\u0169\u0170\x05\x14\v\x02\u016A\u0170\x05\x16' +
		'\f\x02\u016B\u0170\x05\x18\r\x02\u016C\u0170\x05\x1A\x0E\x02\u016D\u0170' +
		'\x05\x1C\x0F\x02\u016E\u0170\x05\x1E\x10\x02\u016F\u0167\x03\x02\x02\x02' +
		'\u016F\u0168\x03\x02\x02\x02\u016F\u0169\x03\x02\x02\x02\u016F\u016A\x03' +
		'\x02\x02\x02\u016F\u016B\x03\x02\x02\x02\u016F\u016C\x03\x02\x02\x02\u016F' +
		'\u016D\x03\x02\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\x0F\x03\x02\x02' +
		'\x02\u0171\u0172\x07$\x02\x02\u0172\u0177\x05N(\x02\u0173\u0174\x07\x14' +
		'\x02\x02\u0174\u0176\x05N(\x02\u0175\u0173\x03\x02\x02\x02\u0176\u0179' +
		'\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02' +
		'\u0178\x11\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017B\x07' +
		'?\x02\x02\u017B\u0180\x05P)\x02\u017C\u017E\x05n8\x02\u017D\u017F\x05' +
		'p9\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0181' +
		'\x03\x02\x02\x02\u0180\u017C\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02' +
		'\u0181\x13\x03\x02\x02\x02\u0182\u0183\x07`\x02\x02\u0183\u0184\x05\b' +
		'\x05\x02\u0184\x15\x03\x02\x02\x02\u0185\u0186\x07"\x02\x02\u0186\u018B' +
		'\x05T+\x02\u0187\u0188\x07\x14\x02\x02\u0188\u018A\x05T+\x02\u0189\u0187' +
		'\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02' +
		'\u018B\u018C\x03\x02\x02\x02\u018C\x17\x03\x02\x02\x02\u018D\u018B\x03' +
		'\x02\x02\x02\u018E\u018F\t\x07\x02\x02\u018F\u0194\x05\xB8]\x02\u0190' +
		'\u0191\x07\x14\x02\x02\u0191\u0193\x05\xB8]\x02\u0192\u0190\x03\x02\x02' +
		'\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194\u0195' +
		'\x03\x02\x02\x02\u0195\x19\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02' +
		'\u0197\u0198\t\b\x02\x02\u0198\u0199\x05\xB8]\x02\u0199\u019A\x07\x14' +
		'\x02\x02\u019A\u019B\x05\xB8]\x02\u019B\x1B\x03\x02\x02\x02\u019C\u019D' +
		'\x07\xC0\x02\x02\u019D\u019E\x05\xB8]\x02\u019E\u019F\x07\x14\x02\x02' +
		'\u019F\u01A0\x05\xB8]\x02\u01A0\u01A1\x07+\x02\x02\u01A1\u01A6\x05\xD0' +
		'i\x02\u01A2\u01A3\x07\x14\x02\x02\u01A3\u01A5\x05\xD0i\x02\u01A4\u01A2' +
		'\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02' +
		'\u01A6\u01A7\x03\x02\x02\x02\u01A7\x1D\x03\x02\x02\x02\u01A8\u01A6\x03' +
		'\x02\x02\x02\u01A9\u01AA\x07\xC2\x02\x02\u01AA\u01AF\x05V,\x02\u01AB\u01AC' +
		'\x07\x14\x02\x02\u01AC\u01AE\x05V,\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE' +
		'\u01B1\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02' +
		'\x02\x02\u01B0\x1F\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B2\u01B3' +
		'\t\t\x02\x02\u01B3\u01B4\x07\x04\x02\x02\u01B4\u01B5\x05Z.\x02\u01B5\u01B6' +
		'\x05^0\x02\u01B6\u01B7\x07\x05\x02\x02\u01B7\u01BF\x03\x02\x02\x02\u01B8' +
		'\u01B9\t\n\x02\x02\u01B9\u01BA\x07\x04\x02\x02\u01BA\u01BB\x05X-\x02\u01BB' +
		'\u01BC\x05^0\x02\u01BC\u01BD\x07\x05\x02\x02\u01BD\u01BF\x03\x02\x02\x02' +
		'\u01BE\u01B2\x03\x02\x02\x02\u01BE\u01B8\x03\x02\x02\x02\u01BF!\x03\x02' +
		'\x02\x02\u01C0\u01C1\x07q\x02\x02\u01C1\u01C2\x07p\x02\x02\u01C2\u01C3' +
		'\x05\xCCg\x02\u01C3\u01CC\x07\x04\x02\x02\u01C4\u01C9\x05r:\x02\u01C5' +
		'\u01C6\x07\x14\x02\x02\u01C6\u01C8\x05r:\x02\u01C7\u01C5\x03\x02\x02\x02' +
		'\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03' +
		'\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC' +
		'\u01C4\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02' +
		'\x02\x02\u01CE\u01D1\x07\x05\x02\x02\u01CF\u01D0\x07\xBE\x02\x02\u01D0' +
		'\u01D2\x05t;\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02' +
		'\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D6\x07\xAD\x02\x02\u01D4\u01D7\x05' +
		'\x06\x04\x02\u01D5\u01D7\x05\b\x05\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6' +
		'\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x07w\x02' +
		'\x02\u01D9\u01DA\x07p\x02\x02\u01DA\u01F6\x03\x02\x02\x02\u01DB\u01DC' +
		'\x07q\x02\x02\u01DC\u01DD\x07s\x02\x02\u01DD\u01DE\x07u\x02\x02\u01DE' +
		'\u01DF\x05\x88E\x02\u01DF\u01E0\x07\x04\x02\x02\u01E0\u01E1\x05\x8AF\x02' +
		'\u01E1\u01E2\x07\x05\x02\x02\u01E2\u01E3\x07\xAD\x02\x02\u01E3\u01E4\x05' +
		'\x8EH\x02\u01E4\u01E5\x07w\x02\x02\u01E5\u01E6\x07s\x02\x02\u01E6\u01E7' +
		'\x07u\x02\x02\u01E7\u01F6\x03\x02\x02\x02\u01E8\u01E9\x07q\x02\x02\u01E9' +
		'\u01EA\x07t\x02\x02\u01EA\u01EB\x07u\x02\x02\u01EB\u01EC\x05\x88E\x02' +
		'\u01EC\u01ED\x07\x04\x02\x02\u01ED\u01EE\x05\x96L\x02\u01EE\u01EF\x07' +
		'\x05\x02\x02\u01EF\u01F0\x07\xAD\x02\x02\u01F0\u01F1\x05\x92J\x02\u01F1' +
		'\u01F2\x07w\x02\x02\u01F2\u01F3\x07t\x02\x02\u01F3\u01F4\x07u\x02\x02' +
		'\u01F4\u01F6\x03\x02\x02\x02\u01F5\u01C0\x03\x02\x02\x02\u01F5\u01DB\x03' +
		'\x02\x02\x02\u01F5\u01E8\x03\x02\x02\x02\u01F6#\x03\x02\x02\x02\u01F7' +
		'\u01F8\x05\xCCg\x02\u01F8\u0201\x07\x04\x02\x02\u01F9\u01FE\x05*\x16\x02' +
		'\u01FA\u01FB\x07\x14\x02\x02\u01FB\u01FD\x05*\x16\x02\u01FC\u01FA\x03' +
		'\x02\x02\x02\u01FD\u0200\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE' +
		'\u01FF\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02\x02\u0200\u01FE\x03\x02' +
		'\x02\x02\u0201\u01F9\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202' +
		'\u0203\x03\x02\x02\x02\u0203\u0204\x07\x05\x02\x02\u0204\u0231\x03\x02' +
		'\x02\x02\u0205\u0206\x07\x18\x02\x02\u0206\u0207\x07\x04\x02\x02\u0207' +
		'\u0208\x05\xCEh\x02\u0208\u020B\x07\x04\x02\x02\u0209\u020C\x05\xB8]\x02' +
		'\u020A\u020C\x05\xD0i\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020A\x03' +
		'\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u0214\x03\x02\x02\x02\u020D' +
		'\u0210\x07\x14\x02\x02\u020E\u0211\x05\xB8]\x02\u020F\u0211\x05\xD0i\x02' +
		'\u0210\u020E\x03\x02\x02\x02\u0210\u020F\x03\x02\x02\x02\u0211\u0213\x03' +
		'\x02\x02\x02\u0212\u020D\x03\x02\x02\x02\u0213\u0216\x03\x02\x02\x02\u0214' +
		'\u0212\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0217\x03\x02' +
		'\x02\x02\u0216\u0214\x03\x02\x02\x02\u0217\u021A\x07\x05\x02\x02\u0218' +
		'\u0219\x07\xE5\x02\x02\u0219\u021B\x07\xE9\x02\x02\u021A\u0218\x03\x02' +
		'\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021E\x03\x02\x02\x02\u021C' +
		'\u021D\x07\xBE\x02\x02\u021D\u021F\x05t;\x02\u021E\u021C\x03\x02\x02\x02' +
		'\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221\x07' +
		'\x05\x02\x02\u0221\u0231\x03\x02\x02\x02\u0222\u0223\x07\xCF\x02\x02\u0223' +
		'\u0224\x07\x04\x02\x02\u0224\u0225\x05\x06\x04\x02\u0225\u0228\x07\x14' +
		'\x02\x02\u0226\u0229\x05\xD2j\x02\u0227\u0229\x05\x86D\x02\u0228\u0226' +
		'\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02' +
		'\u022A\u022B\x07\x14\x02\x02\u022B\u022D\x07\xE9\x02\x02\u022C\u022A\x03' +
		'\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E' +
		'\u022F\x07\x05\x02\x02\u022F\u0231\x03\x02\x02\x02\u0230\u01F7\x03\x02' +
		'\x02\x02\u0230\u0205\x03\x02\x02\x02\u0230\u0222\x03\x02\x02\x02\u0231' +
		'%\x03\x02\x02\x02\u0232\u0233\x05\xCCg\x02\u0233\u023C\x07\x04\x02\x02' +
		'\u0234\u0239\x05(\x15\x02\u0235\u0236\x07\x14\x02\x02\u0236\u0238\x05' +
		'(\x15\x02\u0237\u0235\x03\x02\x02\x02\u0238\u023B\x03\x02\x02\x02\u0239' +
		'\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023D\x03\x02' +
		'\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C\u0234\x03\x02\x02\x02\u023C' +
		'\u023D\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x07\x05' +
		'\x02\x02\u023F\u024F\x03\x02\x02\x02\u0240\u0241\x07\xCF\x02\x02\u0241' +
		'\u0242\x07\x04\x02\x02\u0242\u0243\x05\b\x05\x02\u0243\u0246\x07\x14\x02' +
		'\x02\u0244\u0247\x05\xD2j\x02\u0245\u0247\x05\x86D\x02\u0246\u0244\x03' +
		'\x02\x02\x02\u0246\u0245\x03\x02\x02\x02\u0247\u024A\x03\x02\x02\x02\u0248' +
		'\u0249\x07\x14\x02\x02\u0249\u024B\x07\xE9\x02\x02\u024A\u0248\x03\x02' +
		'\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C' +
		'\u024D\x07\x05\x02\x02\u024D\u024F\x03\x02\x02\x02\u024E\u0232\x03\x02' +
		"\x02\x02\u024E\u0240\x03\x02\x02\x02\u024F'\x03\x02\x02\x02\u0250\u0254" +
		'\x05\xB8]\x02\u0251\u0254\x05\xD0i\x02\u0252\u0254\x07i\x02\x02\u0253' +
		'\u0250\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0252\x03\x02' +
		'\x02\x02\u0254)\x03\x02\x02\x02\u0255\u0259\x05\xB4[\x02\u0256\u0259\x05' +
		'\xD0i\x02\u0257\u0259\x07i\x02\x02\u0258\u0255\x03\x02\x02\x02\u0258\u0256' +
		'\x03\x02\x02\x02\u0258\u0257\x03\x02\x02\x02\u0259+\x03\x02\x02\x02\u025A' +
		'\u025B\t\v\x02\x02\u025B\u025C\x07\x04\x02\x02\u025C\u025D\x05\x06\x04' +
		'\x02\u025D\u025E\x07\x05\x02\x02\u025E\u0286\x03\x02\x02\x02\u025F\u0260' +
		'\x07X\x02\x02\u0260\u0261\x07\x04\x02\x02\u0261\u0266\x05\x06\x04\x02' +
		'\u0262\u0263\x07\x14\x02\x02\u0263\u0265\x05\xC2b\x02\u0264\u0262\x03' +
		'\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266' +
		'\u0267\x03\x02\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268\u0266\x03\x02' +
		'\x02\x02\u0269\u026A\x07\x05\x02\x02\u026A\u0286\x03\x02\x02\x02\u026B' +
		'\u026C\x07|\x02\x02\u026C\u026D\x07\x04\x02\x02\u026D\u026E\x05\x06\x04' +
		'\x02\u026E\u026F\x07\x14\x02\x02\u026F\u0272\x05\x06\x04\x02\u0270\u0271' +
		'\x07\x14\x02\x02\u0271\u0273\x05\xC2b\x02\u0272\u0270\x03\x02\x02\x02' +
		'\u0272\u0273\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0275\x07' +
		'\x05\x02\x02\u0275\u0286\x03\x02\x02\x02\u0276\u0277\x07{\x02\x02\u0277' +
		'\u0278\x07\x04\x02\x02\u0278\u0279\x05\x06\x04\x02\u0279\u027A\x07\x14' +
		'\x02\x02\u027A\u027D\x05\x06\x04\x02\u027B\u027C\x07\x14\x02\x02\u027C' +
		'\u027E\x05\xC2b\x02\u027D\u027B\x03\x02\x02\x02\u027D\u027E\x03\x02\x02' +
		'\x02\u027E\u0281\x03\x02\x02\x02\u027F\u0280\x07\x14\x02\x02\u0280\u0282' +
		'\x05\xC2b\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02' +
		'\u0282\u0283\x03\x02\x02\x02\u0283\u0284\x07\x05\x02\x02\u0284\u0286\x03' +
		'\x02\x02\x02\u0285\u025A\x03\x02\x02\x02\u0285\u025F\x03\x02\x02\x02\u0285' +
		'\u026B\x03\x02\x02\x02\u0285\u0276\x03\x02\x02\x02\u0286-\x03\x02\x02' +
		'\x02\u0287\u0288\t\v\x02\x02\u0288\u0289\x07\x04\x02\x02\u0289\u028A\x05' +
		'\b\x05\x02\u028A\u028B\x07\x05\x02\x02\u028B\u02B3\x03\x02\x02\x02\u028C' +
		'\u028D\x07X\x02\x02\u028D\u028E\x07\x04\x02\x02\u028E\u0293\x05\b\x05' +
		'\x02\u028F\u0290\x07\x14\x02\x02\u0290\u0292\x05\xC4c\x02\u0291\u028F' +
		'\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02' +
		'\u0293\u0294\x03\x02\x02\x02\u0294\u0296\x03\x02\x02\x02\u0295\u0293\x03' +
		'\x02\x02\x02\u0296\u0297\x07\x05\x02\x02\u0297\u02B3\x03\x02\x02\x02\u0298' +
		'\u0299\x07|\x02\x02\u0299\u029A\x07\x04\x02\x02\u029A\u029B\x05\b\x05' +
		'\x02\u029B\u029C\x07\x14\x02\x02\u029C\u029F\x05\b\x05\x02\u029D\u029E' +
		'\x07\x14\x02\x02\u029E\u02A0\x05\xC4c\x02\u029F\u029D\x03\x02\x02\x02' +
		'\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2\x07' +
		'\x05\x02\x02\u02A2\u02B3\x03\x02\x02\x02\u02A3\u02A4\x07{\x02\x02\u02A4' +
		'\u02A5\x07\x04\x02\x02\u02A5\u02A6\x05\b\x05\x02\u02A6\u02A7\x07\x14\x02' +
		'\x02\u02A7\u02AA\x05\b\x05\x02\u02A8\u02A9\x07\x14\x02\x02\u02A9\u02AB' +
		'\x05\xC4c\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02' +
		'\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AD\x07\x14\x02\x02\u02AD\u02AF\x05' +
		'\xC4c\x02\u02AE\u02AC\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF' +
		'\u02B0\x03\x02\x02\x02\u02B0\u02B1\x07\x05\x02\x02\u02B1\u02B3\x03\x02' +
		'\x02\x02\u02B2\u0287\x03\x02\x02\x02\u02B2\u028C\x03\x02\x02\x02\u02B2' +
		'\u0298\x03\x02\x02\x02\u02B2\u02A3\x03\x02\x02\x02\u02B3/\x03\x02\x02' +
		'\x02\u02B4\u02B5\t\f\x02\x02\u02B5\u02B6\x07\x04\x02\x02\u02B6\u02B7\x05' +
		'\x06\x04\x02\u02B7\u02B8\x07\x05\x02\x02\u02B8\u02CA\x03\x02\x02\x02\u02B9' +
		'\u02BA\t\r\x02\x02\u02BA\u02BB\x07\x04\x02\x02\u02BB\u02BE\x05\x06\x04' +
		'\x02\u02BC\u02BD\x07\x14\x02\x02\u02BD\u02BF\x05\xC2b\x02\u02BE\u02BC' +
		'\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02' +
		'\u02C0\u02C1\x07\x05\x02\x02\u02C1\u02CA\x03\x02\x02\x02\u02C2\u02C3\t' +
		'\x0E\x02\x02\u02C3\u02C4\x07\x04\x02\x02\u02C4\u02C5\x05\x06\x04\x02\u02C5' +
		'\u02C6\x07\x14\x02\x02\u02C6\u02C7\x05\x06\x04\x02\u02C7\u02C8\x07\x05' +
		'\x02\x02\u02C8\u02CA\x03\x02\x02\x02\u02C9\u02B4\x03\x02\x02\x02\u02C9' +
		'\u02B9\x03\x02\x02\x02\u02C9\u02C2\x03\x02\x02\x02\u02CA1\x03\x02\x02' +
		'\x02\u02CB\u02CC\t\f\x02\x02\u02CC\u02CD\x07\x04\x02\x02\u02CD\u02CE\x05' +
		'\b\x05\x02\u02CE\u02CF\x07\x05\x02\x02\u02CF\u02E1\x03\x02\x02\x02\u02D0' +
		'\u02D1\t\r\x02\x02\u02D1\u02D2\x07\x04\x02\x02\u02D2\u02D5\x05\b\x05\x02' +
		'\u02D3\u02D4\x07\x14\x02\x02\u02D4\u02D6\x05\xC4c\x02\u02D5\u02D3\x03' +
		'\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7' +
		'\u02D8\x07\x05\x02\x02\u02D8\u02E1\x03\x02\x02\x02\u02D9\u02DA\t\x0E\x02' +
		'\x02\u02DA\u02DB\x07\x04\x02\x02\u02DB\u02DC\x05\b\x05\x02\u02DC\u02DD' +
		'\x07\x14\x02\x02\u02DD\u02DE\x05\b\x05\x02\u02DE\u02DF\x07\x05\x02\x02' +
		'\u02DF\u02E1\x03\x02\x02\x02\u02E0\u02CB\x03\x02\x02\x02\u02E0\u02D0\x03' +
		'\x02\x02\x02\u02E0\u02D9\x03\x02\x02\x02\u02E13\x03\x02\x02\x02\u02E2' +
		'\u02E3\x07*\x02\x02\u02E3\u02E4\x07\x04\x02\x02\u02E4\u02E5\x05\x06\x04' +
		'\x02\u02E5\u02E6\x07\x14\x02\x02\u02E6\u02E7\x05\x06\x04\x02\u02E7\u02E8' +
		'\x07\x14\x02\x02\u02E8\u02E9\x05\x06\x04\x02\u02E9\u02EA\x07\x05\x02\x02' +
		'\u02EA\u0303\x03\x02\x02\x02\u02EB\u02EC\x07e\x02\x02\u02EC\u02ED\x07' +
		'\x04\x02\x02\u02ED\u02EE\x05\x06\x04\x02\u02EE\u02EF\x07\x14\x02\x02\u02EF' +
		'\u02F0\x05\x06\x04\x02\u02F0\u02F1\x07\x05\x02\x02\u02F1\u0303\x03\x02' +
		'\x02\x02\u02F2\u02F3\x07.\x02\x02\u02F3\u02F4\x07\x04\x02\x02\u02F4\u02F5' +
		'\x05\x06\x04\x02\u02F5\u02F6\x07\x05\x02\x02\u02F6\u0303\x03\x02\x02\x02' +
		'\u02F7\u02F8\x079\x02\x02\u02F8\u02F9\x07\x04\x02\x02\u02F9\u02FA\x05' +
		'\x06\x04\x02\u02FA\u02FB\x07\x14\x02\x02\u02FB\u02FE\x05\x06\x04\x02\u02FC' +
		'\u02FD\x07\x14\x02\x02\u02FD\u02FF\x05\xD4k\x02\u02FE\u02FC\x03\x02\x02' +
		'\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0301' +
		'\x07\x05\x02\x02\u0301\u0303\x03\x02\x02\x02\u0302\u02E2\x03\x02\x02\x02' +
		'\u0302\u02EB\x03\x02\x02\x02\u0302\u02F2\x03\x02\x02\x02\u0302\u02F7\x03' +
		'\x02\x02\x02\u03035\x03\x02\x02\x02\u0304\u0305\x07*\x02\x02\u0305\u0306' +
		'\x07\x04\x02\x02\u0306\u0307\x05\b\x05\x02\u0307\u0308\x07\x14\x02\x02' +
		'\u0308\u0309\x05\b\x05\x02\u0309\u030A\x07\x14\x02\x02\u030A\u030B\x05' +
		'\b\x05\x02\u030B\u030C\x07\x05\x02\x02\u030C\u031A\x03\x02\x02\x02\u030D' +
		'\u030E\x07e\x02\x02\u030E\u030F\x07\x04\x02\x02\u030F\u0310\x05\b\x05' +
		'\x02\u0310\u0311\x07\x14\x02\x02\u0311\u0312\x05\b\x05\x02\u0312\u0313' +
		'\x07\x05\x02\x02\u0313\u031A\x03\x02\x02\x02\u0314\u0315\x07.\x02\x02' +
		'\u0315\u0316\x07\x04\x02\x02\u0316\u0317\x05\b\x05\x02\u0317\u0318\x07' +
		'\x05\x02\x02\u0318\u031A\x03\x02\x02\x02\u0319\u0304\x03\x02\x02\x02\u0319' +
		'\u030D\x03\x02\x02\x02\u0319\u0314\x03\x02\x02\x02\u031A7\x03\x02\x02' +
		'\x02\u031B\u031C\x07\xC5\x02\x02\u031C\u031E\x07\x04\x02\x02\u031D\u031F' +
		'\x05\x06\x04\x02\u031E\u031D\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02' +
		'\u031F\u0320\x03\x02\x02\x02\u0320\u034D\x07\x05\x02\x02\u0321\u0322\x07' +
		'\x97\x02\x02\u0322\u0323\x07\x04\x02\x02\u0323\u0326\x05\x06\x04\x02\u0324' +
		'\u0325\x07\x14\x02\x02\u0325\u0327\t\x0F\x02\x02\u0326\u0324\x03\x02\x02' +
		'\x02\u0326\u0327\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u0329' +
		'\x07\x05\x02\x02\u0329\u034D\x03\x02\x02\x02\u032A\u032B\t\x10\x02\x02' +
		'\u032B\u032C\x07\x04\x02\x02\u032C\u032D\x05\x06\x04\x02\u032D\u032E\x07' +
		'\x05\x02\x02\u032E\u034D\x03\x02\x02\x02\u032F\u0330\x07\x9A\x02\x02\u0330' +
		'\u0331\x07\x04\x02\x02\u0331\u0332\x05\x06\x04\x02\u0332\u0333\x07\x14' +
		'\x02\x02\u0333\u0334\x05j6\x02\u0334\u0335\x07\x05\x02\x02\u0335\u034D' +
		'\x03\x02\x02\x02\u0336\u0337\x07\xC8\x02\x02\u0337\u0338\x07\x04\x02\x02' +
		'\u0338\u033B\x07\xE9\x02\x02\u0339\u033A\x07\x14\x02\x02\u033A\u033C\t' +
		'\x11\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C' +
		'\u0342\x03\x02\x02\x02\u033D\u0340\x07\x14\x02\x02\u033E\u0341\x05\x06' +
		'\x04\x02\u033F\u0341\x07i\x02\x02\u0340\u033E\x03\x02\x02\x02\u0340\u033F' +
		'\x03\x02\x02\x02\u0341\u0343\x03\x02\x02\x02\u0342\u033D\x03\x02\x02\x02' +
		'\u0342\u0343\x03\x02\x02\x02\u0343\u0346\x03\x02\x02\x02\u0344\u0345\x07' +
		'\x14\x02\x02\u0345\u0347\t\x12\x02\x02\u0346\u0344\x03\x02\x02\x02\u0346' +
		'\u0347\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u034D\x07\x05' +
		'\x02\x02\u0349\u034A\x07\x1E\x02\x02\u034A\u034B\x07\x04\x02\x02\u034B' +
		'\u034D\x07\x05\x02\x02\u034C\u031B\x03\x02\x02\x02\u034C\u0321\x03\x02' +
		'\x02\x02\u034C\u032A\x03\x02\x02\x02\u034C\u032F\x03\x02\x02\x02\u034C' +
		'\u0336\x03\x02\x02\x02\u034C\u0349\x03\x02\x02\x02\u034D9\x03\x02\x02' +
		'\x02\u034E\u034F\x07\xC5\x02\x02\u034F\u0351\x07\x04\x02\x02\u0350\u0352' +
		'\x05\b\x05\x02\u0351\u0350\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02' +
		'\u0352\u0353\x03\x02\x02\x02\u0353\u0380\x07\x05\x02\x02\u0354\u0355\x07' +
		'\x97\x02\x02\u0355\u0356\x07\x04\x02\x02\u0356\u0359\x05\b\x05\x02\u0357' +
		'\u0358\x07\x14\x02\x02\u0358\u035A\t\x0F\x02\x02\u0359\u0357\x03\x02\x02' +
		'\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u035C' +
		'\x07\x05\x02\x02\u035C\u0380\x03\x02\x02\x02\u035D\u035E\t\x10\x02\x02' +
		'\u035E\u035F\x07\x04\x02\x02\u035F\u0360\x05\b\x05\x02\u0360\u0361\x07' +
		'\x05\x02\x02\u0361\u0380\x03\x02\x02\x02\u0362\u0363\x07\x9A\x02\x02\u0363' +
		'\u0364\x07\x04\x02\x02\u0364\u0365\x05\b\x05\x02\u0365\u0366\x07\x14\x02' +
		'\x02\u0366\u0367\x05j6\x02\u0367\u0368\x07\x05\x02\x02\u0368\u0380\x03' +
		'\x02\x02\x02\u0369\u036A\x07\xC8\x02\x02\u036A\u036B\x07\x04\x02\x02\u036B' +
		'\u036E\x07\xE9\x02\x02\u036C\u036D\x07\x14\x02\x02\u036D\u036F\t\x11\x02' +
		'\x02\u036E\u036C\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F\u0375' +
		'\x03\x02\x02\x02\u0370\u0373\x07\x14\x02\x02\u0371\u0374\x05\b\x05\x02' +
		'\u0372\u0374\x07i\x02\x02\u0373\u0371\x03\x02\x02\x02\u0373\u0372\x03' +
		'\x02\x02\x02\u0374\u0376\x03\x02\x02\x02\u0375\u0370\x03\x02\x02\x02\u0375' +
		'\u0376\x03\x02\x02\x02\u0376\u0379\x03\x02\x02\x02\u0377\u0378\x07\x14' +
		'\x02\x02\u0378\u037A\t\x12\x02\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A' +
		'\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u0380\x07\x05\x02\x02' +
		'\u037C\u037D\x07\x1E\x02\x02\u037D\u037E\x07\x04\x02\x02\u037E\u0380\x07' +
		'\x05\x02\x02\u037F\u034E\x03\x02\x02\x02\u037F\u0354\x03\x02\x02\x02\u037F' +
		'\u035D\x03\x02\x02\x02\u037F\u0362\x03\x02\x02\x02\u037F\u0369\x03\x02' +
		'\x02\x02\u037F\u037C\x03\x02\x02\x02\u0380;\x03\x02\x02\x02\u0381\u0382' +
		'\x070\x02\x02\u0382\u0383\x07\x04\x02\x02\u0383\u0386\x05\x06\x04\x02' +
		'\u0384\u0385\x07\x14\x02\x02\u0385\u0387\x05\x06\x04\x02\u0386\u0384\x03' +
		'\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02\u0388' +
		'\u0389\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038B\x07\x05' +
		'\x02\x02\u038B\u039F\x03\x02\x02\x02\u038C\u038D\x073\x02\x02\u038D\u038E' +
		'\x07\x04\x02\x02\u038E\u0391\x05\x06\x04\x02\u038F\u0390\x07\x14\x02\x02' +
		'\u0390\u0392\x05\x06\x04\x02\u0391\u038F\x03\x02\x02\x02\u0392\u0393\x03' +
		'\x02\x02\x02\u0393\u0391\x03\x02\x02\x02\u0393\u0394\x03\x02\x02\x02\u0394' +
		'\u0395\x03\x02\x02\x02\u0395\u0396\x07\x05\x02\x02\u0396\u039F\x03\x02' +
		'\x02\x02\u0397\u0398\t\x13\x02\x02\u0398\u0399\x07\x04\x02\x02\u0399\u039A' +
		'\x05\x06\x04\x02\u039A\u039B\x07\x14\x02\x02\u039B\u039C\x05\x06\x04\x02' +
		'\u039C\u039D\x07\x05\x02\x02\u039D\u039F\x03\x02\x02\x02\u039E\u0381\x03' +
		'\x02\x02\x02\u039E\u038C\x03\x02\x02\x02\u039E\u0397\x03\x02\x02\x02\u039F' +
		'=\x03\x02\x02\x02\u03A0\u03A1\x07h\x02\x02\u03A1\u03A2\x07\x04\x02\x02' +
		'\u03A2\u03A3\x05\x06\x04\x02\u03A3\u03A4\x07\x14\x02\x02\u03A4\u03A6\x07' +
		'\xEA\x02\x02\u03A5\u03A7\x05\xA8U\x02\u03A6\u03A5\x03\x02\x02\x02\u03A6' +
		'\u03A7\x03\x02\x02\x02\u03A7\u03AA\x03\x02\x02\x02\u03A8\u03A9\x07v\x02' +
		'\x02\u03A9\u03AB\x05\xB8]\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03AB' +
		'\x03\x02\x02\x02\u03AB\u03AD\x03\x02\x02\x02\u03AC\u03AE\x05\xA6T\x02' +
		'\u03AD\u03AC\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B0\x03' +
		'\x02\x02\x02\u03AF\u03B1\x05\xAEX\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0' +
		'\u03B1\x03\x02\x02\x02\u03B1\u03B3\x03\x02\x02\x02\u03B2\u03B4\x05\xB0' +
		'Y\x02\u03B3\u03B2\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B5' +
		'\x03\x02\x02\x02\u03B5\u03B6\x07\x05\x02\x02\u03B6?\x03\x02\x02\x02\u03B7' +
		'\u03B8\x07\xD3\x02\x02\u03B8\u03B9\x07\x04\x02\x02\u03B9\u03BA\x05\x06' +
		'\x04\x02\u03BA\u03BB\x07\x14\x02\x02\u03BB\u03C5\x07\xEA\x02\x02\u03BC' +
		'\u03BD\x07\xDC\x02\x02\u03BD\u03C2\x05\xB8]\x02\u03BE\u03BF\x07\x14\x02' +
		'\x02\u03BF\u03C1\x05\xB8]\x02\u03C0\u03BE\x03\x02\x02\x02\u03C1\u03C4' +
		'\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02' +
		'\u03C3\u03C6\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C5\u03BC\x03' +
		'\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6';
	private static readonly _serializedATNSegment2: string =
		'\u03C8\x03\x02\x02\x02\u03C7\u03C9\x05\xA4S\x02\u03C8\u03C7\x03\x02\x02' +
		'\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB' +
		'\x07\x05\x02\x02\u03CB\u03F5\x03\x02\x02\x02\u03CC\u03CD\x07\xD4\x02\x02' +
		'\u03CD\u03CE\x07\x04\x02\x02\u03CE\u03CF\x05\x06\x04\x02\u03CF\u03D0\x07' +
		'\x14\x02\x02\u03D0\u03D2\x07\xEA\x02\x02\u03D1\u03D3\x05\xA8U\x02\u03D2' +
		'\u03D1\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03D6\x03\x02' +
		'\x02\x02\u03D4\u03D5\x07v\x02\x02\u03D5\u03D7\x05\xB8]\x02\u03D6\u03D4' +
		'\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D9\x03\x02\x02\x02' +
		'\u03D8\u03DA\x05\xA6T\x02\u03D9\u03D8\x03\x02\x02\x02\u03D9\u03DA\x03' +
		'\x02\x02\x02\u03DA\u03DC\x03\x02\x02\x02\u03DB\u03DD\x05\xAAV\x02\u03DC' +
		'\u03DB\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DF\x03\x02' +
		'\x02\x02\u03DE\u03E0\x05\xA4S\x02\u03DF\u03DE\x03\x02\x02\x02\u03DF\u03E0' +
		'\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1\u03E2\x07\x05\x02\x02' +
		'\u03E2\u03F5\x03\x02\x02\x02\u03E3\u03E4\x078\x02\x02\u03E4\u03E5\x07' +
		'\x04\x02\x02\u03E5\u03E7\x05\x06\x04\x02\u03E6\u03E8\x05\xBC_\x02\u03E7' +
		'\u03E6\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03EA\x03\x02' +
		'\x02\x02\u03E9\u03EB\x05\xBE`\x02\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB' +
		'\x03\x02\x02\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC\u03EE\x05\xACW\x02' +
		'\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F0\x03' +
		'\x02\x02\x02\u03EF\u03F1\t\x14\x02\x02\u03F0\u03EF\x03\x02\x02\x02\u03F0' +
		'\u03F1\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F3\x07\x05' +
		'\x02\x02\u03F3\u03F5\x03\x02\x02\x02\u03F4\u03B7\x03\x02\x02\x02\u03F4' +
		'\u03CC\x03\x02\x02\x02\u03F4\u03E3\x03\x02\x02\x02\u03F5A\x03\x02\x02' +
		'\x02\u03F6\u03F7\x07g\x02\x02\u03F7\u03F8\x07\x04\x02\x02\u03F8\u03F9' +
		'\x05\x06\x04\x02\u03F9\u03FA\x07\x14\x02\x02\u03FA\u03FB\x05\x06\x04\x02' +
		'\u03FB\u03FC\x07\x05\x02\x02\u03FCC\x03\x02\x02\x02\u03FD\u03FE\x07g\x02' +
		'\x02\u03FE\u03FF\x07\x04\x02\x02\u03FF\u0400\x05\b\x05\x02\u0400\u0401' +
		'\x07\x14\x02\x02\u0401\u0402\x05\b\x05\x02\u0402\u0403\x07\x05\x02\x02' +
		'\u0403E\x03\x02\x02\x02\u0404\u0405\t\x15\x02\x02\u0405\u0406\x07\x04' +
		'\x02\x02\u0406\u0407\x05\b\x05\x02\u0407\u0408\x07\x05\x02\x02\u0408\u040D' +
		'\x03\x02\x02\x02\u0409\u040A\x07\\\x02\x02\u040A\u040B\x07\x04\x02\x02' +
		'\u040B\u040D\x07\x05\x02\x02\u040C\u0404\x03\x02\x02\x02\u040C\u0409\x03' +
		'\x02\x02\x02\u040DG\x03\x02\x02\x02\u040E\u040F\t\x15\x02\x02\u040F\u0410' +
		'\x07\x04\x02\x02\u0410\u0415\x05\x06\x04\x02\u0411\u0413\x05n8\x02\u0412' +
		'\u0414\x05p9\x02\u0413\u0412\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02' +
		'\u0414\u0416\x03\x02\x02\x02\u0415\u0411\x03\x02\x02\x02\u0415\u0416\x03' +
		'\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0418\x07\x05\x02\x02\u0418' +
		'I\x03\x02\x02\x02\u0419\u041A\t\x16\x02\x02\u041A\u041B\x07\x04\x02\x02' +
		'\u041B\u041C\x05\x06\x04\x02\u041C\u041D\x07\x8E\x02\x02\u041D\u041F\x07' +
		'\x04\x02\x02\u041E\u0420\x05b2\x02\u041F\u041E\x03\x02\x02\x02\u041F\u0420' +
		'\x03\x02\x02\x02\u0420\u0422\x03\x02\x02\x02\u0421\u0423\x05d3\x02\u0422' +
		'\u0421\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0425\x03\x02' +
		'\x02\x02\u0424\u0426\x05h5\x02\u0425\u0424\x03\x02\x02\x02\u0425\u0426' +
		'\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\u0428\x07\x05\x02\x02' +
		'\u0428\u0429\x07\x05\x02\x02\u0429\u0448\x03\x02\x02\x02\u042A\u042B\t' +
		'\x17\x02\x02\u042B\u042C\x07\x04\x02\x02\u042C\u0432\x05\x06\x04\x02\u042D' +
		'\u042E\x07\x14\x02\x02\u042E\u0430\x05j6\x02\u042F\u0431\x05\xD0i\x02' +
		'\u0430\u042F\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0433\x03' +
		'\x02\x02\x02\u0432\u042D\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433' +
		'\u0434\x03\x02\x02\x02\u0434\u0435\x07\x8E\x02\x02\u0435\u0437\x07\x04' +
		'\x02\x02\u0436\u0438\x05b2\x02\u0437\u0436\x03\x02\x02\x02\u0437\u0438' +
		'\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043A\x05d3\x02\u043A' +
		'\u043B\x03\x02\x02\x02\u043B\u043C\x07\x05\x02\x02\u043C\u043D\x07\x05' +
		'\x02\x02\u043D\u0448\x03\x02\x02\x02\u043E\u043F\x07\x8D\x02\x02\u043F' +
		'\u0440\x07\x04\x02\x02\u0440\u0441\x05\x06\x04\x02\u0441\u0442\x07\x8E' +
		'\x02\x02\u0442\u0443\x07\x04\x02\x02\u0443\u0444\x05b2\x02\u0444\u0445' +
		'\x07\x05\x02\x02\u0445\u0446\x07\x05\x02\x02\u0446\u0448\x03\x02\x02\x02' +
		'\u0447\u0419\x03\x02\x02\x02\u0447\u042A\x03\x02\x02\x02\u0447\u043E\x03' +
		'\x02\x02\x02\u0448K\x03\x02\x02\x02\u0449\u044A\t\x16\x02\x02\u044A\u044B' +
		'\x07\x04\x02\x02\u044B\u044C\x05\b\x05\x02\u044C\u044D\x07\x8E\x02\x02' +
		'\u044D\u044F\x07\x04\x02\x02\u044E\u0450\x05b2\x02\u044F\u044E\x03\x02' +
		'\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0452\x03\x02\x02\x02\u0451' +
		'\u0453\x05d3\x02\u0452\u0451\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02' +
		'\u0453\u0455\x03\x02\x02\x02\u0454\u0456\x05h5\x02\u0455\u0454\x03\x02' +
		'\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457' +
		'\u0458\x07\x05\x02\x02\u0458\u0459\x07\x05\x02\x02\u0459\u0484\x03\x02' +
		'\x02\x02\u045A\u045B\t\x17\x02\x02\u045B\u045C\x07\x04\x02\x02\u045C\u0462' +
		'\x05\b\x05\x02\u045D\u045E\x07\x14\x02\x02\u045E\u0460\x05j6\x02\u045F' +
		'\u0461\x05\xD0i\x02\u0460\u045F\x03\x02\x02\x02\u0460\u0461\x03\x02\x02' +
		'\x02\u0461\u0463\x03\x02\x02\x02\u0462\u045D\x03\x02\x02\x02\u0462\u0463' +
		'\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\u0465\x07\x8E\x02\x02' +
		'\u0465\u0467\x07\x04\x02\x02\u0466\u0468\x05b2\x02\u0467\u0466\x03\x02' +
		'\x02\x02\u0467\u0468\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469' +
		'\u046A\x05d3\x02\u046A\u046B\x03\x02\x02\x02\u046B\u046C\x07\x05\x02\x02' +
		'\u046C\u046D\x07\x05\x02\x02\u046D\u0484\x03\x02\x02\x02\u046E\u046F\x07' +
		'C\x02\x02\u046F\u0470\x07\x04\x02\x02\u0470\u0471\x07\x8E\x02\x02\u0471' +
		'\u0473\x07\x04\x02\x02\u0472\u0474\x05b2\x02\u0473\u0472\x03\x02\x02\x02' +
		'\u0473\u0474\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475\u0476\x05' +
		'd3\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0478\x07\x05\x02\x02\u0478\u0479' +
		'\x07\x05\x02\x02\u0479\u0484\x03\x02\x02\x02\u047A\u047B\x07\x8D\x02\x02' +
		'\u047B\u047C\x07\x04\x02\x02\u047C\u047D\x05\b\x05\x02\u047D\u047E\x07' +
		'\x8E\x02\x02\u047E\u047F\x07\x04\x02\x02\u047F\u0480\x05b2\x02\u0480\u0481' +
		'\x07\x05\x02\x02\u0481\u0482\x07\x05\x02\x02\u0482\u0484\x03\x02\x02\x02' +
		'\u0483\u0449\x03\x02\x02\x02\u0483\u045A\x03\x02\x02\x02\u0483\u046E\x03' +
		'\x02\x02\x02\u0483\u047A\x03\x02\x02\x02\u0484M\x03\x02\x02\x02\u0485' +
		'\u0486\x05\xB8]\x02\u0486\u0487\x07:\x02\x02\u0487\u0488\x05\xB8]\x02' +
		'\u0488O\x03\x02\x02\x02\u0489\u048E\x05R*\x02\u048A\u048B\x07\x14\x02' +
		'\x02\u048B\u048D\x05R*\x02\u048C\u048A\x03\x02\x02\x02\u048D\u0490\x03' +
		'\x02\x02\x02\u048E\u048C\x03\x02\x02\x02\u048E\u048F\x03\x02\x02\x02\u048F' +
		'Q\x03\x02\x02\x02\u0490\u048E\x03\x02\x02\x02\u0491\u0493\x05\xC6d\x02' +
		'\u0492\u0491\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x03' +
		'\x02\x02\x02\u0494\u0495\x05\xB8]\x02\u0495\u0496\x07\x16\x02\x02\u0496' +
		'\u0497\x05F$\x02\u0497S\x03\x02\x02\x02\u0498\u049A\x05\xC6d\x02\u0499' +
		'\u0498\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049B\x03\x02' +
		'\x02\x02\u049B\u049C\x05\xB8]\x02\u049C\u049D\x07\x16\x02\x02\u049D\u049E' +
		'\x05\b\x05\x02\u049EU\x03\x02\x02\x02\u049F\u04A0\x05\xB8]\x02\u04A0\u04A1' +
		'\x07\n\x02\x02\u04A1\u04A2\x05\xD0i\x02\u04A2W\x03\x02\x02\x02\u04A3\u04A8' +
		'\x05\\/\x02\u04A4\u04A5\x07\x14\x02\x02\u04A5\u04A7\x05\\/\x02\u04A6\u04A4' +
		'\x03\x02\x02\x02\u04A7\u04AA\x03\x02\x02\x02\u04A8\u04A6\x03\x02\x02\x02' +
		'\u04A8\u04A9\x03\x02\x02\x02\u04A9Y\x03\x02\x02\x02\u04AA\u04A8\x03\x02' +
		'\x02\x02\u04AB\u04B0\x05\\/\x02\u04AC\u04AD\x07\x14\x02\x02\u04AD\u04AF' +
		'\x05\\/\x02\u04AE\u04AC\x03\x02\x02\x02\u04AF\u04B2\x03\x02\x02\x02\u04B0' +
		'\u04AE\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04BC\x03\x02' +
		'\x02\x02\u04B2\u04B0\x03\x02\x02\x02\u04B3\u04B4\x07\x1C\x02\x02\u04B4' +
		'\u04B9\x05\xB8]\x02\u04B5\u04B6\x07\x14\x02\x02\u04B6\u04B8\x05\xB8]\x02' +
		'\u04B7\u04B5\x03\x02\x02\x02\u04B8\u04BB\x03\x02\x02\x02\u04B9\u04B7\x03' +
		'\x02\x02\x02\u04B9\u04BA\x03\x02\x02\x02\u04BA\u04BD\x03\x02\x02\x02\u04BB' +
		'\u04B9\x03\x02\x02\x02\u04BC\u04B3\x03\x02\x02\x02\u04BC\u04BD\x03\x02' +
		'\x02\x02\u04BD[\x03\x02\x02\x02\u04BE\u04C1\x05\x06\x04\x02\u04BF\u04C0' +
		'\x07%\x02\x02\u04C0\u04C2\x05\xB2Z\x02\u04C1\u04BF\x03\x02\x02\x02\u04C1' +
		'\u04C2\x03\x02\x02\x02\u04C2]\x03\x02\x02\x02\u04C3\u04C5\x05\x14\v\x02' +
		'\u04C4\u04C3\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u04C9\x03' +
		'\x02\x02\x02\u04C6\u04CA\x05\x16\f\x02\u04C7\u04CA\x05`1\x02\u04C8\u04CA' +
		'\x05\x12\n\x02\u04C9\u04C6\x03\x02\x02\x02\u04C9\u04C7\x03\x02\x02\x02' +
		'\u04C9\u04C8\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CC\x03' +
		'\x02\x02\x02\u04CB\u04CD\x05\x18\r\x02\u04CC\u04CB\x03\x02\x02\x02\u04CC' +
		'\u04CD\x03\x02\x02\x02\u04CD\u04CF\x03\x02\x02\x02\u04CE\u04D0\x05\x10' +
		'\t\x02\u04CF\u04CE\x03\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0_' +
		'\x03\x02\x02\x02\u04D1\u04D2\x07\xC3\x02\x02\u04D2\u04D3\x05\x06\x04\x02' +
		'\u04D3a\x03\x02\x02\x02\u04D4\u04D5\x07\x92\x02\x02\u04D5\u04D6\x07B\x02' +
		'\x02\u04D6\u04DB\x05\xB8]\x02\u04D7\u04D8\x07\x14\x02\x02\u04D8\u04DA' +
		'\x05\xB8]\x02\u04D9\u04D7\x03\x02\x02\x02\u04DA\u04DD\x03\x02\x02\x02' +
		'\u04DB\u04D9\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DCc\x03\x02' +
		'\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DE\u04DF\x07A\x02\x02\u04DF\u04E0' +
		'\x07B\x02\x02\u04E0\u04E5\x05f4\x02\u04E1\u04E2\x07\x14\x02\x02\u04E2' +
		'\u04E4\x05f4\x02\u04E3\u04E1\x03\x02\x02\x02\u04E4\u04E7\x03\x02\x02\x02' +
		'\u04E5\u04E3\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6e\x03\x02' +
		'\x02\x02\u04E7\u04E5\x03\x02\x02\x02\u04E8\u04EA\x05\xB8]\x02\u04E9\u04EB' +
		'\t\x18\x02\x02\u04EA\u04E9\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02' +
		'\u04EBg\x03\x02\x02\x02\u04EC\u04ED\x07m\x02\x02\u04ED\u04F0\x07\xB1\x02' +
		'\x02\u04EE\u04F0\x07\x94\x02\x02\u04EF\u04EC\x03\x02\x02\x02\u04EF\u04EE' +
		'\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1\u04F2\x07*\x02\x02' +
		'\u04F2\u04F3\x05l7\x02\u04F3\u04F4\x07&\x02\x02\u04F4\u04F5\x05l7\x02' +
		'\u04F5i\x03\x02\x02\x02\u04F6\u04F7\x07\xE6\x02\x02\u04F7k\x03\x02\x02' +
		'\x02\u04F8\u04F9\x07\xE6\x02\x02\u04F9\u0504\x07\x8F\x02\x02\u04FA\u04FB' +
		'\x07\xE6\x02\x02\u04FB\u0504\x07\x90\x02\x02\u04FC\u04FD\x07\x95\x02\x02' +
		'\u04FD\u04FE\x07m\x02\x02\u04FE\u0504\x07\xB2\x02\x02\u04FF\u0500\x07' +
		'\x91\x02\x02\u0500\u0504\x07\x8F\x02\x02\u0501\u0502\x07\x91\x02\x02\u0502' +
		'\u0504\x07\x90\x02\x02\u0503\u04F8\x03\x02\x02\x02\u0503\u04FA\x03\x02' +
		'\x02\x02\u0503\u04FC\x03\x02\x02\x02\u0503\u04FF\x03\x02\x02\x02\u0503' +
		'\u0501\x03\x02\x02\x02\u0504m\x03\x02\x02\x02\u0505\u0506\x07\x86\x02' +
		'\x02\u0506\u0507\t\x19\x02\x02\u0507\u050C\x05\xB8]\x02\u0508\u0509\x07' +
		'\x14\x02\x02\u0509\u050B\x05\xB8]\x02\u050A\u0508\x03\x02\x02\x02\u050B' +
		'\u050E\x03\x02\x02\x02\u050C\u050A\x03\x02\x02\x02\u050C\u050D\x03\x02' +
		'\x02\x02\u050D\u0513\x03\x02\x02\x02\u050E\u050C\x03\x02\x02\x02\u050F' +
		'\u0510\x07\x86\x02\x02\u0510\u0511\x07>\x02\x02\u0511\u0513\x05\b\x05' +
		'\x02\u0512\u0505\x03\x02\x02\x02\u0512\u050F\x03\x02\x02\x02\u0513o\x03' +
		'\x02\x02\x02\u0514\u0515\x07\x88\x02\x02\u0515\u0516\x05\b\x05\x02\u0516' +
		'q\x03\x02\x02\x02\u0517\u0518\x05\xB4[\x02\u0518\u051B\x05v<\x02\u0519' +
		'\u051A\x07\xD2\x02\x02\u051A\u051C\x05\xD0i\x02\u051B\u0519\x03\x02\x02' +
		'\x02\u051B\u051C\x03\x02\x02\x02\u051Cs\x03\x02\x02\x02\u051D\u0521\x05' +
		'z>\x02\u051E\u0521\x05~@\x02\u051F\u0521\x05|?\x02\u0520\u051D\x03\x02' +
		'\x02\x02\u0520\u051E\x03\x02\x02\x02\u0520\u051F\x03\x02\x02\x02\u0521' +
		'u\x03\x02\x02\x02\u0522\u0528\x05z>\x02\u0523\u0528\x05~@\x02\u0524\u0528' +
		'\x05\x80A\x02\u0525\u0528\x05x=\x02\u0526\u0528\x05|?\x02\u0527\u0522' +
		'\x03\x02\x02\x02\u0527\u0523\x03\x02\x02\x02\u0527\u0524\x03\x02\x02\x02' +
		'\u0527\u0525\x03\x02\x02\x02\u0527\u0526\x03\x02\x02\x02\u0528w\x03\x02' +
		'\x02\x02\u0529\u052D\x07u\x02\x02\u052A\u052D\x05\x82B\x02\u052B\u052D' +
		'\x05\x84C\x02\u052C\u0529\x03\x02\x02\x02\u052C\u052A\x03\x02\x02\x02' +
		'\u052C\u052B\x03\x02\x02\x02\u052Dy\x03\x02\x02\x02\u052E\u0531\x05\xD2' +
		'j\x02\u052F\u0531\x05\x86D\x02\u0530\u052E\x03\x02\x02\x02\u0530\u052F' +
		'\x03\x02\x02\x02\u0531\u0533\x03\x02\x02\x02\u0532\u0534\x05\x9EP\x02' +
		'\u0533\u0532\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534\u0539\x03' +
		'\x02\x02\x02\u0535\u0537\x07)\x02\x02\u0536\u0535\x03\x02\x02\x02\u0536' +
		'\u0537\x03\x02\x02\x02\u0537\u0538\x03\x02\x02\x02\u0538\u053A\x07-\x02' +
		'\x02\u0539\u0536\x03\x02\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A{\x03' +
		'\x02\x02\x02\u053B\u0540\x05\xC6d\x02\u053C\u053D\x07\v\x02\x02\u053D' +
		'\u053E\x05z>\x02\u053E\u053F\x07\f\x02\x02\u053F\u0541\x03\x02\x02\x02' +
		'\u0540\u053C\x03\x02\x02\x02\u0540\u0541\x03\x02\x02\x02\u0541}\x03\x02' +
		'\x02\x02\u0542\u054E\x07o\x02\x02\u0543\u0544\x07\b\x02\x02\u0544\u0549' +
		'\x05\xA0Q\x02\u0545\u0546\x07\x14\x02\x02\u0546\u0548\x05\xA0Q\x02\u0547' +
		'\u0545\x03\x02\x02\x02\u0548\u054B\x03\x02\x02\x02\u0549\u0547\x03\x02' +
		'\x02\x02\u0549\u054A\x03\x02\x02\x02\u054A\u054C\x03\x02\x02\x02\u054B' +
		'\u0549\x03\x02\x02\x02\u054C\u054D\x07\t\x02\x02\u054D\u054F\x03\x02\x02' +
		'\x02\u054E\u0543\x03\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F\x7F' +
		'\x03\x02\x02\x02\u0550\u0555\x07\xE4\x02\x02\u0551\u0552\x07\v\x02\x02' +
		'\u0552\u0553\x05z>\x02\u0553\u0554\x07\f\x02\x02\u0554\u0556\x03\x02\x02' +
		'\x02\u0555\u0551\x03\x02\x02\x02\u0555\u0556\x03\x02\x02\x02\u0556\x81' +
		'\x03\x02\x02\x02\u0557\u0575\x07s\x02\x02\u0558\u0564\x07\xE0\x02\x02' +
		'\u0559\u055A\x07\b\x02\x02\u055A\u055F\x05\x86D\x02\u055B\u055C\x07\x12' +
		'\x02\x02\u055C\u055E\x05\x86D\x02\u055D\u055B\x03\x02\x02\x02\u055E\u0561' +
		'\x03\x02\x02\x02\u055F\u055D\x03\x02\x02\x02\u055F\u0560\x03\x02\x02\x02' +
		'\u0560\u0562\x03\x02\x02\x02\u0561\u055F\x03\x02\x02\x02\u0562\u0563\x07' +
		'\t\x02\x02\u0563\u0565\x03\x02\x02\x02\u0564\u0559\x03\x02\x02\x02\u0564' +
		'\u0565\x03\x02\x02\x02\u0565\u0575\x03\x02\x02\x02\u0566\u0572\x07\xE1' +
		'\x02\x02\u0567\u0568\x07\b\x02\x02\u0568\u056D\x05\xB4[\x02\u0569\u056A' +
		'\x07\x12\x02\x02\u056A\u056C\x05\xB4[\x02\u056B\u0569\x03\x02\x02\x02' +
		'\u056C\u056F\x03\x02\x02\x02\u056D\u056B\x03\x02\x02\x02\u056D\u056E\x03' +
		'\x02\x02\x02\u056E\u0570\x03\x02\x02\x02\u056F\u056D\x03\x02\x02\x02\u0570' +
		'\u0571\x07\t\x02\x02\u0571\u0573\x03\x02\x02\x02\u0572\u0567\x03\x02\x02' +
		'\x02\u0572\u0573\x03\x02\x02\x02\u0573\u0575\x03\x02\x02\x02\u0574\u0557' +
		'\x03\x02\x02\x02\u0574\u0558\x03\x02\x02\x02\u0574\u0566\x03\x02\x02\x02' +
		'\u0575\x83\x03\x02\x02\x02\u0576\u059F\x07t\x02\x02\u0577\u0588\x07\xE2' +
		'\x02\x02\u0578\u0579\x07\b\x02\x02\u0579\u0585\x07\xEA\x02\x02\u057A\u057B' +
		'\x07\x04\x02\x02\u057B\u0580\x05\x86D\x02\u057C\u057D\x07\x12\x02\x02' +
		'\u057D\u057F\x05\x86D\x02\u057E\u057C\x03\x02\x02\x02\u057F\u0582\x03' +
		'\x02\x02\x02\u0580\u057E\x03\x02\x02\x02\u0580\u0581\x03\x02\x02\x02\u0581' +
		'\u0583\x03\x02\x02\x02\u0582\u0580\x03\x02\x02\x02\u0583\u0584\x07\x05' +
		'\x02\x02\u0584\u0586\x03\x02\x02\x02\u0585\u057A\x03\x02\x02\x02\u0585' +
		'\u0586\x03\x02\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587\u0589\x07\t\x02' +
		'\x02\u0588\u0578\x03\x02\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589\u059F' +
		'\x03\x02\x02\x02\u058A\u059C\x07\xE3\x02\x02\u058B\u058C\x07\b\x02\x02' +
		'\u058C\u0598\x05\xB4[\x02\u058D\u058E\x07\x04\x02\x02\u058E\u0593\x05' +
		'\xB4[\x02\u058F\u0590\x07\x12\x02\x02\u0590\u0592\x05\xB4[\x02\u0591\u058F' +
		'\x03\x02\x02\x02\u0592\u0595\x03\x02\x02\x02\u0593\u0591\x03\x02\x02\x02' +
		'\u0593\u0594\x03\x02\x02\x02\u0594\u0596\x03\x02\x02\x02\u0595\u0593\x03' +
		'\x02\x02\x02\u0596\u0597\x07\x05\x02\x02\u0597\u0599\x03\x02\x02\x02\u0598' +
		'\u058D\x03\x02\x02\x02\u0598\u0599\x03\x02\x02\x02\u0599\u059A\x03\x02' +
		'\x02\x02\u059A\u059B\x07\t\x02\x02\u059B\u059D\x03\x02\x02\x02\u059C\u058B' +
		'\x03\x02\x02\x02\u059C\u059D\x03\x02\x02\x02\u059D\u059F\x03\x02\x02\x02' +
		'\u059E\u0576\x03\x02\x02\x02\u059E\u0577\x03\x02\x02\x02\u059E\u058A\x03' +
		'\x02\x02\x02\u059F\x85\x03\x02\x02\x02\u05A0\u05A1\x07\xEA\x02\x02\u05A1' +
		'\x87\x03\x02\x02\x02\u05A2\u05A3\x07\xEA\x02\x02\u05A3\x89\x03\x02\x02' +
		'\x02\u05A4\u05A5\t\x1A\x02\x02\u05A5\u05AA\x05\x8CG\x02\u05A6\u05A7\x07' +
		'\x14\x02\x02\u05A7\u05A9\x05\x8CG\x02\u05A8\u05A6\x03\x02\x02\x02\u05A9' +
		'\u05AC\x03\x02\x02\x02\u05AA\u05A8\x03\x02\x02\x02\u05AA\u05AB\x03\x02' +
		'\x02\x02\u05AB\x8B\x03\x02\x02\x02\u05AC\u05AA\x03\x02\x02\x02\u05AD\u05B0' +
		'\x05\xB4[\x02\u05AE\u05AF\x07%\x02\x02\u05AF\u05B1\x05\xB2Z\x02\u05B0' +
		'\u05AE\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\x8D\x03\x02\x02' +
		'\x02\u05B2\u05B7\x05\x90I\x02\u05B3\u05B4\x07\xF7\x02\x02\u05B4\u05B6' +
		'\x05\x90I\x02\u05B5\u05B3\x03\x02\x02\x02\u05B6\u05B9\x03\x02\x02\x02' +
		'\u05B7\u05B5\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8\x8F\x03' +
		'\x02\x02\x02\u05B9\u05B7\x03\x02\x02\x02\u05BA\u05BB\x07\xEA\x02\x02\u05BB' +
		'\u05BD\x07\x03\x02\x02\u05BC\u05BA\x03\x02\x02\x02\u05BC\u05BD\x03\x02' +
		'\x02\x02\u05BD\u05C2\x03\x02\x02\x02\u05BE\u05BF\x07\xAE\x02\x02\u05BF' +
		'\u05C0\x05\b\x05\x02\u05C0\u05C1\x07\x1A\x02\x02\u05C1\u05C3\x03\x02\x02' +
		'\x02\u05C2\u05BE\x03\x02\x02\x02\u05C2\u05C3\x03\x02\x02\x02\u05C3\u05C4' +
		'\x03\x02\x02\x02\u05C4\u05C6\x05\b\x05\x02\u05C5\u05C7\x05\xBC_\x02\u05C6' +
		'\u05C5\x03\x02\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C9\x03\x02' +
		'\x02\x02\u05C8\u05CA\x05\xBE`\x02\u05C9\u05C8\x03\x02\x02\x02\u05C9\u05CA' +
		'\x03\x02\x02\x02\u05CA\x91\x03\x02\x02\x02\u05CB\u05D0\x05\x94K\x02\u05CC' +
		'\u05CD\x07\xF7\x02\x02\u05CD\u05CF\x05\x94K\x02\u05CE\u05CC\x03\x02\x02' +
		'\x02\u05CF\u05D2\x03\x02\x02\x02\u05D0\u05CE\x03\x02\x02\x02\u05D0\u05D1' +
		'\x03\x02\x02\x02\u05D1\x93\x03\x02\x02\x02\u05D2\u05D0\x03\x02\x02\x02' +
		'\u05D3\u05D4\x07\xEA\x02\x02\u05D4\u05D6\x07\x03\x02\x02\u05D5\u05D3\x03' +
		'\x02\x02\x02\u05D5\u05D6\x03\x02\x02\x02\u05D6\u05D7\x03\x02\x02\x02\u05D7' +
		'\u05D9\x05\x9AN\x02\u05D8\u05DA\x05\xBC_\x02\u05D9\u05D8\x03\x02\x02\x02' +
		'\u05D9\u05DA\x03\x02\x02\x02\u05DA\u05DC\x03\x02\x02\x02\u05DB\u05DD\x05' +
		'\xBE`\x02\u05DC\u05DB\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD' +
		'\x95\x03\x02\x02\x02\u05DE\u05E1\t\x1A\x02\x02\u05DF\u05E0\x07\x9D\x02' +
		'\x02\u05E0\u05E2\x05\x98M\x02\u05E1\u05DF\x03\x02\x02\x02\u05E1\u05E2' +
		'\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E4\x07v\x02\x02' +
		'\u05E4\u05E5\x07\xEA\x02\x02\u05E5\x97\x03\x02\x02\x02\u05E6\u05EB\x05' +
		'\x8CG\x02\u05E7\u05E8\x07\x14\x02\x02\u05E8\u05EA\x05\x8CG\x02\u05E9\u05E7' +
		'\x03\x02\x02\x02\u05EA\u05ED\x03\x02\x02\x02\u05EB\u05E9\x03\x02\x02\x02' +
		'\u05EB\u05EC\x03\x02\x02\x02\u05EC\x99\x03\x02\x02\x02\u05ED\u05EB\x03' +
		'\x02\x02\x02\u05EE\u05EF\x07\xAE\x02\x02\u05EF\u05F0\x05\b\x05\x02\u05F0' +
		'\u05F1\x07\x1A\x02\x02\u05F1\u05F3\x03\x02\x02\x02\u05F2\u05EE\x03\x02' +
		'\x02\x02\u05F2\u05F3\x03\x02\x02\x02\u05F3\u05F4\x03\x02\x02\x02\u05F4' +
		'\u05F6\x07\xEA\x02\x02\u05F5\u05F7\x05\xC0a\x02\u05F6\u05F5\x03\x02\x02' +
		'\x02\u05F6\u05F7\x03\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\u05FC' +
		'\x05\x9CO\x02\u05F9\u05FB\x05\x9CO\x02\u05FA\u05F9\x03\x02\x02\x02\u05FB' +
		'\u05FE\x03\x02\x02\x02\u05FC\u05FA\x03\x02\x02\x02\u05FC\u05FD\x03\x02' +
		'\x02\x02\u05FD\x9B\x03\x02\x02\x02\u05FE\u05FC\x03\x02\x02\x02\u05FF\u0601' +
		'\t\x1B\x02\x02\u0600\u05FF\x03\x02\x02\x02\u0600\u0601\x03\x02\x02\x02' +
		'\u0601\u0602\x03\x02\x02\x02\u0602\u0607\x07\xEA\x02\x02\u0603\u0604\x07' +
		'\x06\x02\x02\u0604\u0605\x05\b\x05\x02\u0605\u0606\x07\x07\x02\x02\u0606' +
		'\u0608\x03\x02\x02\x02\u0607\u0603\x03\x02\x02\x02\u0607\u0608\x03\x02' +
		'\x02\x02\u0608\x9D\x03\x02\x02\x02\u0609\u060A\x07\x06\x02\x02\u060A\u060B' +
		'\x05\b\x05\x02\u060B\u060C\x07\x07\x02\x02\u060C\u0619\x03\x02\x02\x02' +
		'\u060D\u060E\x07\b\x02\x02\u060E\u0613\x05\xD0i\x02\u060F\u0610\x07\x14' +
		'\x02\x02\u0610\u0612\x05\xD0i\x02\u0611\u060F\x03\x02\x02\x02\u0612\u0615' +
		'\x03\x02\x02\x02\u0613\u0611\x03\x02\x02\x02\u0613\u0614\x03\x02\x02\x02' +
		'\u0614\u0616\x03\x02\x02\x02\u0615\u0613\x03\x02\x02\x02\u0616\u0617\x07' +
		'\t\x02\x02\u0617\u0619\x03\x02\x02\x02\u0618\u0609\x03\x02\x02\x02\u0618' +
		'\u060D\x03\x02\x02\x02\u0619\x9F\x03\x02\x02\x02\u061A\u061D\x05|?\x02' +
		'\u061B\u061E\x05\xB8]\x02\u061C\u061E\x05\xA2R\x02\u061D\u061B\x03\x02' +
		'\x02\x02\u061D\u061C\x03\x02\x02\x02\u061E\xA1\x03\x02\x02\x02\u061F\u0621' +
		'\x07i\x02\x02\u0620\u0622\t\x1C\x02\x02\u0621\u0620\x03\x02\x02\x02\u0621' +
		'\u0622\x03\x02\x02\x02\u0622\xA3\x03\x02\x02\x02\u0623\u0624\t\x1D\x02' +
		'\x02\u0624\xA5\x03\x02\x02\x02\u0625\u0626\t\x1E\x02\x02\u0626\xA7\x03' +
		'\x02\x02\x02\u0627\u0628\x07\x9D\x02\x02\u0628\u062D\x05\xB8]\x02\u0629' +
		'\u062A\x07\x14\x02\x02\u062A\u062C\x05\xB8]\x02\u062B\u0629\x03\x02\x02' +
		'\x02\u062C\u062F\x03\x02\x02\x02\u062D\u062B\x03\x02\x02\x02\u062D\u062E' +
		'\x03\x02\x02\x02\u062E\xA9\x03\x02\x02\x02\u062F\u062D\x03\x02\x02\x02' +
		'\u0630\u0631\t\x1F\x02\x02\u0631\xAB\x03\x02\x02\x02\u0632\u0633\x07<' +
		'\x02\x02\u0633\u0634\x05\x06\x04\x02\u0634\xAD\x03\x02\x02\x02\u0635\u0636' +
		'\t \x02\x02\u0636\xAF\x03\x02\x02\x02\u0637\u0638\t!\x02\x02\u0638\xB1' +
		'\x03\x02\x02\x02\u0639\u063A\x07\xEA\x02\x02\u063A\xB3\x03\x02\x02\x02' +
		'\u063B\u063C\x07\xEA\x02\x02\u063C\xB5\x03\x02\x02\x02\u063D\u063E\x07' +
		'\xEA\x02\x02\u063E\xB7\x03\x02\x02\x02\u063F\u0642\x07\xEA\x02\x02\u0640' +
		'\u0641\x07\x17\x02\x02\u0641\u0643\x07\xEA\x02\x02\u0642\u0640\x03\x02' +
		'\x02\x02\u0642\u0643\x03\x02\x02\x02\u0643\xB9\x03\x02\x02\x02\u0644\u0645' +
		'\x07\b\x02\x02\u0645\u064A\x05\xD0i\x02\u0646\u0647\x07\x14\x02\x02\u0647' +
		'\u0649\x05\xD0i\x02\u0648\u0646\x03\x02\x02\x02\u0649\u064C\x03\x02\x02' +
		'\x02\u064A\u0648\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02\u064B\u064D' +
		'\x03\x02\x02\x02\u064C\u064A\x03\x02\x02\x02\u064D\u064E\x07\t\x02\x02' +
		'\u064E\xBB\x03\x02\x02\x02\u064F\u0650\x07=\x02\x02\u0650\u0651\x05\xD0' +
		'i\x02\u0651\xBD\x03\x02\x02\x02\u0652\u0653\x07@\x02\x02\u0653\u0654\x05' +
		'\xD0i\x02\u0654\xBF\x03\x02\x02\x02\u0655\u0656\t"\x02\x02\u0656\xC1' +
		'\x03\x02\x02\x02\u0657\u065A\x05\x06\x04\x02\u0658\u065A\x07i\x02\x02' +
		'\u0659\u0657\x03\x02\x02\x02\u0659\u0658\x03\x02\x02\x02\u065A\xC3\x03' +
		'\x02\x02\x02\u065B\u065E\x05\b\x05\x02\u065C\u065E\x07i\x02\x02\u065D' +
		'\u065B\x03\x02\x02\x02\u065D\u065C\x03\x02\x02\x02\u065E\xC5\x03\x02\x02' +
		'\x02\u065F\u0665\x07^\x02\x02\u0660\u0665\x07\xDF\x02\x02\u0661\u0665' +
		'\x07]\x02\x02\u0662\u0665\x07_\x02\x02\u0663\u0665\x05\xC8e\x02\u0664' +
		'\u065F\x03\x02\x02\x02\u0664\u0660\x03\x02\x02\x02\u0664\u0661\x03\x02' +
		'\x02\x02\u0664\u0662\x03\x02\x02\x02\u0664\u0663\x03\x02\x02\x02\u0665' +
		'\xC7\x03\x02\x02\x02\u0666\u0667\x07d\x02\x02\u0667\u0668\x07_\x02\x02' +
		'\u0668\xC9\x03\x02\x02\x02\u0669\u066A\x07\xEA\x02\x02\u066A\xCB\x03\x02' +
		'\x02\x02\u066B\u066C\x07\xEA\x02\x02\u066C\xCD\x03\x02\x02\x02\u066D\u066E' +
		'\x07\xEA\x02\x02\u066E\xCF\x03\x02\x02\x02\u066F\u0670\t#\x02\x02\u0670' +
		'\xD1\x03\x02\x02\x02\u0671\u0672\t$\x02\x02\u0672\xD3\x03\x02\x02\x02' +
		'\u0673\u0674\t%\x02\x02\u0674\xD5\x03\x02\x02\x02\xBA\xDB\xE9\xFC\u011A' +
		'\u011C\u011E\u0132\u0148\u014A\u014C\u0157\u0165\u016F\u0177\u017E\u0180' +
		'\u018B\u0194\u01A6\u01AF\u01BE\u01C9\u01CC\u01D1\u01D6\u01F5\u01FE\u0201' +
		'\u020B\u0210\u0214\u021A\u021E\u0228\u022C\u0230\u0239\u023C\u0246\u024A' +
		'\u024E\u0253\u0258\u0266\u0272\u027D\u0281\u0285\u0293\u029F\u02AA\u02AE' +
		'\u02B2\u02BE\u02C9\u02D5\u02E0\u02FE\u0302\u0319\u031E\u0326\u033B\u0340' +
		'\u0342\u0346\u034C\u0351\u0359\u036E\u0373\u0375\u0379\u037F\u0388\u0393' +
		'\u039E\u03A6\u03AA\u03AD\u03B0\u03B3\u03C2\u03C5\u03C8\u03D2\u03D6\u03D9' +
		'\u03DC\u03DF\u03E7\u03EA\u03ED\u03F0\u03F4\u040C\u0413\u0415\u041F\u0422' +
		'\u0425\u0430\u0432\u0437\u0447\u044F\u0452\u0455\u0460\u0462\u0467\u0473' +
		'\u0483\u048E\u0492\u0499\u04A8\u04B0\u04B9\u04BC\u04C1\u04C4\u04C9\u04CC' +
		'\u04CF\u04DB\u04E5\u04EA\u04EF\u0503\u050C\u0512\u051B\u0520\u0527\u052C' +
		'\u0530\u0533\u0536\u0539\u0540\u0549\u054E\u0555\u055F\u0564\u056D\u0572' +
		'\u0574\u0580\u0585\u0588\u0593\u0598\u059C\u059E\u05AA\u05B0\u05B7\u05BC' +
		'\u05C2\u05C6\u05C9\u05D0';
	private static readonly _serializedATNSegment3: string =
		'\u05D5\u05D9\u05DC\u05E1\u05EB\u05F2\u05F6\u05FC\u0600\u0607\u0613\u0618' +
		'\u061D\u0621\u062D\u0642\u064A\u0659\u065D\u0664';
	public static readonly _serializedATN: string = Utils.join(
		[
			VtlParser._serializedATNSegment0,
			VtlParser._serializedATNSegment1,
			VtlParser._serializedATNSegment2,
			VtlParser._serializedATNSegment3,
		],
		''
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VtlParser.__ATN) {
			VtlParser.__ATN = new ATNDeserializer().deserialize(
				Utils.toCharArray(VtlParser._serializedATN)
			);
		}

		return VtlParser.__ATN;
	}
}

export class StartContext extends ParserRuleContext {
	public EOF(): TerminalNode {
		return this.getToken(VtlParser.EOF, 0);
	}

	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}

	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.EOL);
		} else {
			return this.getToken(VtlParser.EOL, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_start;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_statement;
	}

	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}

export class TemporaryAssignmentContext extends StatementContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}

	public ASSIGN(): TerminalNode {
		return this.getToken(VtlParser.ASSIGN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTemporaryAssignment) {
			listener.enterTemporaryAssignment(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTemporaryAssignment) {
			listener.exitTemporaryAssignment(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTemporaryAssignment) {
			return visitor.visitTemporaryAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PersistAssignmentContext extends StatementContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}

	public PUT_SYMBOL(): TerminalNode {
		return this.getToken(VtlParser.PUT_SYMBOL, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPersistAssignment) {
			listener.enterPersistAssignment(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPersistAssignment) {
			listener.exitPersistAssignment(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPersistAssignment) {
			return visitor.visitPersistAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DefineExpressionContext extends StatementContext {
	public defOperators(): DefOperatorsContext {
		return this.getRuleContext(0, DefOperatorsContext);
	}

	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefineExpression) {
			listener.enterDefineExpression(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefineExpression) {
			listener.exitDefineExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefineExpression) {
			return visitor.visitDefineExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_expr;
	}

	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}

export class ParenthesisExprContext extends ExprContext {
	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterParenthesisExpr) {
			listener.enterParenthesisExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitParenthesisExpr) {
			listener.exitParenthesisExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitParenthesisExpr) {
			return visitor.visitParenthesisExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FunctionsExpressionContext extends ExprContext {
	public functions(): FunctionsContext {
		return this.getRuleContext(0, FunctionsContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFunctionsExpression) {
			listener.enterFunctionsExpression(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFunctionsExpression) {
			listener.exitFunctionsExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFunctionsExpression) {
			return visitor.visitFunctionsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClauseExprContext extends ExprContext {
	public _dataset: ExprContext | undefined;
	public _clause: DatasetClauseContext | undefined;

	public QLPAREN(): TerminalNode {
		return this.getToken(VtlParser.QLPAREN, 0);
	}

	public QRPAREN(): TerminalNode {
		return this.getToken(VtlParser.QRPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public datasetClause(): DatasetClauseContext {
		return this.getRuleContext(0, DatasetClauseContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterClauseExpr) {
			listener.enterClauseExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitClauseExpr) {
			listener.exitClauseExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitClauseExpr) {
			return visitor.visitClauseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MembershipExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public MEMBERSHIP(): TerminalNode {
		return this.getToken(VtlParser.MEMBERSHIP, 0);
	}

	public simpleComponentId(): SimpleComponentIdContext {
		return this.getRuleContext(0, SimpleComponentIdContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterMembershipExpr) {
			listener.enterMembershipExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitMembershipExpr) {
			listener.exitMembershipExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitMembershipExpr) {
			return visitor.visitMembershipExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryExprContext extends ExprContext {
	public _op: Token | undefined;
	public _right: ExprContext | undefined;

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public PLUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.PLUS, 0);
	}

	public MINUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MINUS, 0);
	}

	public NOT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NOT, 0);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryExpr) {
			return visitor.visitUnaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArithmeticExprContext extends ExprContext {
	public _left: ExprContext | undefined;
	public _op: Token | undefined;
	public _right: ExprContext | undefined;

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public MUL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MUL, 0);
	}

	public DIV(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DIV, 0);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterArithmeticExpr) {
			listener.enterArithmeticExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitArithmeticExpr) {
			listener.exitArithmeticExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitArithmeticExpr) {
			return visitor.visitArithmeticExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArithmeticExprOrConcatContext extends ExprContext {
	public _left: ExprContext | undefined;
	public _op: Token | undefined;
	public _right: ExprContext | undefined;

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public PLUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.PLUS, 0);
	}

	public MINUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MINUS, 0);
	}

	public CONCAT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.CONCAT, 0);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterArithmeticExprOrConcat) {
			listener.enterArithmeticExprOrConcat(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitArithmeticExprOrConcat) {
			listener.exitArithmeticExprOrConcat(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitArithmeticExprOrConcat) {
			return visitor.visitArithmeticExprOrConcat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComparisonExprContext extends ExprContext {
	public _left: ExprContext | undefined;
	public _op: ComparisonOperandContext | undefined;
	public _right: ExprContext | undefined;

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public comparisonOperand(): ComparisonOperandContext {
		return this.getRuleContext(0, ComparisonOperandContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComparisonExpr) {
			listener.enterComparisonExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComparisonExpr) {
			listener.exitComparisonExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComparisonExpr) {
			return visitor.visitComparisonExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InNotInExprContext extends ExprContext {
	public _left: ExprContext | undefined;
	public _op: Token | undefined;

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public IN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.IN, 0);
	}

	public NOT_IN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NOT_IN, 0);
	}

	public lists(): ListsContext | undefined {
		return this.tryGetRuleContext(0, ListsContext);
	}

	public valueDomainID(): ValueDomainIDContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainIDContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInNotInExpr) {
			listener.enterInNotInExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInNotInExpr) {
			listener.exitInNotInExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInNotInExpr) {
			return visitor.visitInNotInExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BooleanExprContext extends ExprContext {
	public _left: ExprContext | undefined;
	public _op: Token | undefined;
	public _right: ExprContext | undefined;

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public AND(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.AND, 0);
	}

	public OR(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.OR, 0);
	}

	public XOR(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.XOR, 0);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBooleanExpr) {
			listener.enterBooleanExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBooleanExpr) {
			listener.exitBooleanExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBooleanExpr) {
			return visitor.visitBooleanExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IfExprContext extends ExprContext {
	public _conditionalExpr: ExprContext | undefined;
	public _thenExpr: ExprContext | undefined;
	public _elseExpr: ExprContext | undefined;

	public IF(): TerminalNode {
		return this.getToken(VtlParser.IF, 0);
	}

	public THEN(): TerminalNode {
		return this.getToken(VtlParser.THEN, 0);
	}

	public ELSE(): TerminalNode {
		return this.getToken(VtlParser.ELSE, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterIfExpr) {
			listener.enterIfExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitIfExpr) {
			listener.exitIfExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitIfExpr) {
			return visitor.visitIfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConstantExprContext extends ExprContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConstantExpr) {
			listener.enterConstantExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConstantExpr) {
			listener.exitConstantExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConstantExpr) {
			return visitor.visitConstantExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VarIdExprContext extends ExprContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}

	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterVarIdExpr) {
			listener.enterVarIdExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitVarIdExpr) {
			listener.exitVarIdExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitVarIdExpr) {
			return visitor.visitVarIdExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExprComponentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_exprComponent;
	}

	public copyFrom(ctx: ExprComponentContext): void {
		super.copyFrom(ctx);
	}
}

export class ParenthesisExprCompContext extends ExprComponentContext {
	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterParenthesisExprComp) {
			listener.enterParenthesisExprComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitParenthesisExprComp) {
			listener.exitParenthesisExprComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitParenthesisExprComp) {
			return visitor.visitParenthesisExprComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FunctionsExpressionCompContext extends ExprComponentContext {
	public functionsComponents(): FunctionsComponentsContext {
		return this.getRuleContext(0, FunctionsComponentsContext);
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFunctionsExpressionComp) {
			listener.enterFunctionsExpressionComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFunctionsExpressionComp) {
			listener.exitFunctionsExpressionComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFunctionsExpressionComp) {
			return visitor.visitFunctionsExpressionComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryExprCompContext extends ExprComponentContext {
	public _op: Token | undefined;
	public _right: ExprComponentContext | undefined;

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public PLUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.PLUS, 0);
	}

	public MINUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MINUS, 0);
	}

	public NOT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NOT, 0);
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryExprComp) {
			listener.enterUnaryExprComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryExprComp) {
			listener.exitUnaryExprComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryExprComp) {
			return visitor.visitUnaryExprComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArithmeticExprCompContext extends ExprComponentContext {
	public _left: ExprComponentContext | undefined;
	public _op: Token | undefined;
	public _right: ExprComponentContext | undefined;

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	public MUL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MUL, 0);
	}

	public DIV(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DIV, 0);
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterArithmeticExprComp) {
			listener.enterArithmeticExprComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitArithmeticExprComp) {
			listener.exitArithmeticExprComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitArithmeticExprComp) {
			return visitor.visitArithmeticExprComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArithmeticExprOrConcatCompContext extends ExprComponentContext {
	public _left: ExprComponentContext | undefined;
	public _op: Token | undefined;
	public _right: ExprComponentContext | undefined;

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	public PLUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.PLUS, 0);
	}

	public MINUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MINUS, 0);
	}

	public CONCAT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.CONCAT, 0);
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterArithmeticExprOrConcatComp) {
			listener.enterArithmeticExprOrConcatComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitArithmeticExprOrConcatComp) {
			listener.exitArithmeticExprOrConcatComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitArithmeticExprOrConcatComp) {
			return visitor.visitArithmeticExprOrConcatComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComparisonExprCompContext extends ExprComponentContext {
	public _left: ExprComponentContext | undefined;
	public _right: ExprComponentContext | undefined;

	public comparisonOperand(): ComparisonOperandContext {
		return this.getRuleContext(0, ComparisonOperandContext);
	}

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComparisonExprComp) {
			listener.enterComparisonExprComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComparisonExprComp) {
			listener.exitComparisonExprComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComparisonExprComp) {
			return visitor.visitComparisonExprComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InNotInExprCompContext extends ExprComponentContext {
	public _left: ExprComponentContext | undefined;
	public _op: Token | undefined;

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public IN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.IN, 0);
	}

	public NOT_IN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NOT_IN, 0);
	}

	public lists(): ListsContext | undefined {
		return this.tryGetRuleContext(0, ListsContext);
	}

	public valueDomainID(): ValueDomainIDContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainIDContext);
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInNotInExprComp) {
			listener.enterInNotInExprComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInNotInExprComp) {
			listener.exitInNotInExprComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInNotInExprComp) {
			return visitor.visitInNotInExprComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BooleanExprCompContext extends ExprComponentContext {
	public _left: ExprComponentContext | undefined;
	public _op: Token | undefined;
	public _right: ExprComponentContext | undefined;

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	public AND(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.AND, 0);
	}

	public OR(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.OR, 0);
	}

	public XOR(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.XOR, 0);
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBooleanExprComp) {
			listener.enterBooleanExprComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBooleanExprComp) {
			listener.exitBooleanExprComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBooleanExprComp) {
			return visitor.visitBooleanExprComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IfExprCompContext extends ExprComponentContext {
	public _conditionalExpr: ExprComponentContext | undefined;
	public _thenExpr: ExprComponentContext | undefined;
	public _elseExpr: ExprComponentContext | undefined;

	public IF(): TerminalNode {
		return this.getToken(VtlParser.IF, 0);
	}

	public THEN(): TerminalNode {
		return this.getToken(VtlParser.THEN, 0);
	}

	public ELSE(): TerminalNode {
		return this.getToken(VtlParser.ELSE, 0);
	}

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterIfExprComp) {
			listener.enterIfExprComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitIfExprComp) {
			listener.exitIfExprComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitIfExprComp) {
			return visitor.visitIfExprComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConstantExprCompContext extends ExprComponentContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConstantExprComp) {
			listener.enterConstantExprComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConstantExprComp) {
			listener.exitConstantExprComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConstantExprComp) {
			return visitor.visitConstantExprComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CompIdContext extends ExprComponentContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}

	constructor(ctx: ExprComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCompId) {
			listener.enterCompId(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCompId) {
			listener.exitCompId(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCompId) {
			return visitor.visitCompId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FunctionsComponentsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_functionsComponents;
	}

	public copyFrom(ctx: FunctionsComponentsContext): void {
		super.copyFrom(ctx);
	}
}

export class GenericFunctionsComponentsContext extends FunctionsComponentsContext {
	public genericOperatorsComponent(): GenericOperatorsComponentContext {
		return this.getRuleContext(0, GenericOperatorsComponentContext);
	}

	constructor(ctx: FunctionsComponentsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGenericFunctionsComponents) {
			listener.enterGenericFunctionsComponents(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGenericFunctionsComponents) {
			listener.exitGenericFunctionsComponents(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGenericFunctionsComponents) {
			return visitor.visitGenericFunctionsComponents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StringFunctionsComponentsContext extends FunctionsComponentsContext {
	public stringOperatorsComponent(): StringOperatorsComponentContext {
		return this.getRuleContext(0, StringOperatorsComponentContext);
	}

	constructor(ctx: FunctionsComponentsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterStringFunctionsComponents) {
			listener.enterStringFunctionsComponents(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitStringFunctionsComponents) {
			listener.exitStringFunctionsComponents(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitStringFunctionsComponents) {
			return visitor.visitStringFunctionsComponents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NumericFunctionsComponentsContext extends FunctionsComponentsContext {
	public numericOperatorsComponent(): NumericOperatorsComponentContext {
		return this.getRuleContext(0, NumericOperatorsComponentContext);
	}

	constructor(ctx: FunctionsComponentsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterNumericFunctionsComponents) {
			listener.enterNumericFunctionsComponents(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitNumericFunctionsComponents) {
			listener.exitNumericFunctionsComponents(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitNumericFunctionsComponents) {
			return visitor.visitNumericFunctionsComponents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComparisonFunctionsComponentsContext extends FunctionsComponentsContext {
	public comparisonOperatorsComponent(): ComparisonOperatorsComponentContext {
		return this.getRuleContext(0, ComparisonOperatorsComponentContext);
	}

	constructor(ctx: FunctionsComponentsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComparisonFunctionsComponents) {
			listener.enterComparisonFunctionsComponents(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComparisonFunctionsComponents) {
			listener.exitComparisonFunctionsComponents(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComparisonFunctionsComponents) {
			return visitor.visitComparisonFunctionsComponents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TimeFunctionsComponentsContext extends FunctionsComponentsContext {
	public timeOperatorsComponent(): TimeOperatorsComponentContext {
		return this.getRuleContext(0, TimeOperatorsComponentContext);
	}

	constructor(ctx: FunctionsComponentsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeFunctionsComponents) {
			listener.enterTimeFunctionsComponents(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeFunctionsComponents) {
			listener.exitTimeFunctionsComponents(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeFunctionsComponents) {
			return visitor.visitTimeFunctionsComponents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConditionalFunctionsComponentsContext extends FunctionsComponentsContext {
	public conditionalOperatorsComponent(): ConditionalOperatorsComponentContext {
		return this.getRuleContext(0, ConditionalOperatorsComponentContext);
	}

	constructor(ctx: FunctionsComponentsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConditionalFunctionsComponents) {
			listener.enterConditionalFunctionsComponents(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConditionalFunctionsComponents) {
			listener.exitConditionalFunctionsComponents(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConditionalFunctionsComponents) {
			return visitor.visitConditionalFunctionsComponents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AggregateFunctionsComponentsContext extends FunctionsComponentsContext {
	public aggrOperators(): AggrOperatorsContext {
		return this.getRuleContext(0, AggrOperatorsContext);
	}

	constructor(ctx: FunctionsComponentsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggregateFunctionsComponents) {
			listener.enterAggregateFunctionsComponents(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggregateFunctionsComponents) {
			listener.exitAggregateFunctionsComponents(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggregateFunctionsComponents) {
			return visitor.visitAggregateFunctionsComponents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AnalyticFunctionsComponentsContext extends FunctionsComponentsContext {
	public anFunctionComponent(): AnFunctionComponentContext {
		return this.getRuleContext(0, AnFunctionComponentContext);
	}

	constructor(ctx: FunctionsComponentsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAnalyticFunctionsComponents) {
			listener.enterAnalyticFunctionsComponents(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAnalyticFunctionsComponents) {
			listener.exitAnalyticFunctionsComponents(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAnalyticFunctionsComponents) {
			return visitor.visitAnalyticFunctionsComponents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FunctionsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_functions;
	}

	public copyFrom(ctx: FunctionsContext): void {
		super.copyFrom(ctx);
	}
}

export class JoinFunctionsContext extends FunctionsContext {
	public joinOperators(): JoinOperatorsContext {
		return this.getRuleContext(0, JoinOperatorsContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinFunctions) {
			listener.enterJoinFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinFunctions) {
			listener.exitJoinFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinFunctions) {
			return visitor.visitJoinFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GenericFunctionsContext extends FunctionsContext {
	public genericOperators(): GenericOperatorsContext {
		return this.getRuleContext(0, GenericOperatorsContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGenericFunctions) {
			listener.enterGenericFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGenericFunctions) {
			listener.exitGenericFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGenericFunctions) {
			return visitor.visitGenericFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StringFunctionsContext extends FunctionsContext {
	public stringOperators(): StringOperatorsContext {
		return this.getRuleContext(0, StringOperatorsContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterStringFunctions) {
			listener.enterStringFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitStringFunctions) {
			listener.exitStringFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitStringFunctions) {
			return visitor.visitStringFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NumericFunctionsContext extends FunctionsContext {
	public numericOperators(): NumericOperatorsContext {
		return this.getRuleContext(0, NumericOperatorsContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterNumericFunctions) {
			listener.enterNumericFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitNumericFunctions) {
			listener.exitNumericFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitNumericFunctions) {
			return visitor.visitNumericFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComparisonFunctionsContext extends FunctionsContext {
	public comparisonOperators(): ComparisonOperatorsContext {
		return this.getRuleContext(0, ComparisonOperatorsContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComparisonFunctions) {
			listener.enterComparisonFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComparisonFunctions) {
			listener.exitComparisonFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComparisonFunctions) {
			return visitor.visitComparisonFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TimeFunctionsContext extends FunctionsContext {
	public timeOperators(): TimeOperatorsContext {
		return this.getRuleContext(0, TimeOperatorsContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeFunctions) {
			listener.enterTimeFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeFunctions) {
			listener.exitTimeFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeFunctions) {
			return visitor.visitTimeFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SetFunctionsContext extends FunctionsContext {
	public setOperators(): SetOperatorsContext {
		return this.getRuleContext(0, SetOperatorsContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSetFunctions) {
			listener.enterSetFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSetFunctions) {
			listener.exitSetFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSetFunctions) {
			return visitor.visitSetFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class HierarchyFunctionsContext extends FunctionsContext {
	public hierarchyOperators(): HierarchyOperatorsContext {
		return this.getRuleContext(0, HierarchyOperatorsContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHierarchyFunctions) {
			listener.enterHierarchyFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHierarchyFunctions) {
			listener.exitHierarchyFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHierarchyFunctions) {
			return visitor.visitHierarchyFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ValidationFunctionsContext extends FunctionsContext {
	public validationOperators(): ValidationOperatorsContext {
		return this.getRuleContext(0, ValidationOperatorsContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationFunctions) {
			listener.enterValidationFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationFunctions) {
			listener.exitValidationFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationFunctions) {
			return visitor.visitValidationFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConditionalFunctionsContext extends FunctionsContext {
	public conditionalOperators(): ConditionalOperatorsContext {
		return this.getRuleContext(0, ConditionalOperatorsContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConditionalFunctions) {
			listener.enterConditionalFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConditionalFunctions) {
			listener.exitConditionalFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConditionalFunctions) {
			return visitor.visitConditionalFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AggregateFunctionsContext extends FunctionsContext {
	public aggrOperatorsGrouping(): AggrOperatorsGroupingContext {
		return this.getRuleContext(0, AggrOperatorsGroupingContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggregateFunctions) {
			listener.enterAggregateFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggregateFunctions) {
			listener.exitAggregateFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggregateFunctions) {
			return visitor.visitAggregateFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AnalyticFunctionsContext extends FunctionsContext {
	public anFunction(): AnFunctionContext {
		return this.getRuleContext(0, AnFunctionContext);
	}

	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAnalyticFunctions) {
			listener.enterAnalyticFunctions(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAnalyticFunctions) {
			listener.exitAnalyticFunctions(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAnalyticFunctions) {
			return visitor.visitAnalyticFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DatasetClauseContext extends ParserRuleContext {
	public renameClause(): RenameClauseContext | undefined {
		return this.tryGetRuleContext(0, RenameClauseContext);
	}

	public aggrClause(): AggrClauseContext | undefined {
		return this.tryGetRuleContext(0, AggrClauseContext);
	}

	public filterClause(): FilterClauseContext | undefined {
		return this.tryGetRuleContext(0, FilterClauseContext);
	}

	public calcClause(): CalcClauseContext | undefined {
		return this.tryGetRuleContext(0, CalcClauseContext);
	}

	public keepOrDropClause(): KeepOrDropClauseContext | undefined {
		return this.tryGetRuleContext(0, KeepOrDropClauseContext);
	}

	public pivotOrUnpivotClause(): PivotOrUnpivotClauseContext | undefined {
		return this.tryGetRuleContext(0, PivotOrUnpivotClauseContext);
	}

	public customPivotClause(): CustomPivotClauseContext | undefined {
		return this.tryGetRuleContext(0, CustomPivotClauseContext);
	}

	public subspaceClause(): SubspaceClauseContext | undefined {
		return this.tryGetRuleContext(0, SubspaceClauseContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_datasetClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDatasetClause) {
			listener.enterDatasetClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDatasetClause) {
			listener.exitDatasetClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDatasetClause) {
			return visitor.visitDatasetClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RenameClauseContext extends ParserRuleContext {
	public RENAME(): TerminalNode {
		return this.getToken(VtlParser.RENAME, 0);
	}

	public renameClauseItem(): RenameClauseItemContext[];
	public renameClauseItem(i: number): RenameClauseItemContext;
	public renameClauseItem(
		i?: number
	): RenameClauseItemContext | RenameClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RenameClauseItemContext);
		} else {
			return this.getRuleContext(i, RenameClauseItemContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_renameClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRenameClause) {
			listener.enterRenameClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRenameClause) {
			listener.exitRenameClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRenameClause) {
			return visitor.visitRenameClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AggrClauseContext extends ParserRuleContext {
	public AGGREGATE(): TerminalNode {
		return this.getToken(VtlParser.AGGREGATE, 0);
	}

	public aggregateClause(): AggregateClauseContext {
		return this.getRuleContext(0, AggregateClauseContext);
	}

	public groupingClause(): GroupingClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupingClauseContext);
	}

	public havingClause(): HavingClauseContext | undefined {
		return this.tryGetRuleContext(0, HavingClauseContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_aggrClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrClause) {
			listener.enterAggrClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrClause) {
			listener.exitAggrClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrClause) {
			return visitor.visitAggrClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FilterClauseContext extends ParserRuleContext {
	public FILTER(): TerminalNode {
		return this.getToken(VtlParser.FILTER, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_filterClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFilterClause) {
			listener.enterFilterClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFilterClause) {
			listener.exitFilterClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFilterClause) {
			return visitor.visitFilterClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CalcClauseContext extends ParserRuleContext {
	public CALC(): TerminalNode {
		return this.getToken(VtlParser.CALC, 0);
	}

	public calcClauseItem(): CalcClauseItemContext[];
	public calcClauseItem(i: number): CalcClauseItemContext;
	public calcClauseItem(
		i?: number
	): CalcClauseItemContext | CalcClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CalcClauseItemContext);
		} else {
			return this.getRuleContext(i, CalcClauseItemContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_calcClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCalcClause) {
			listener.enterCalcClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCalcClause) {
			listener.exitCalcClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCalcClause) {
			return visitor.visitCalcClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class KeepOrDropClauseContext extends ParserRuleContext {
	public _op: Token | undefined;

	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}

	public KEEP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.KEEP, 0);
	}

	public DROP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DROP, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_keepOrDropClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterKeepOrDropClause) {
			listener.enterKeepOrDropClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitKeepOrDropClause) {
			listener.exitKeepOrDropClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitKeepOrDropClause) {
			return visitor.visitKeepOrDropClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PivotOrUnpivotClauseContext extends ParserRuleContext {
	public _op: Token | undefined;
	public _id_: ComponentIDContext | undefined;
	public _mea: ComponentIDContext | undefined;

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}

	public PIVOT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.PIVOT, 0);
	}

	public UNPIVOT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.UNPIVOT, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_pivotOrUnpivotClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPivotOrUnpivotClause) {
			listener.enterPivotOrUnpivotClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPivotOrUnpivotClause) {
			listener.exitPivotOrUnpivotClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPivotOrUnpivotClause) {
			return visitor.visitPivotOrUnpivotClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CustomPivotClauseContext extends ParserRuleContext {
	public _id_: ComponentIDContext | undefined;
	public _mea: ComponentIDContext | undefined;

	public CUSTOMPIVOT(): TerminalNode {
		return this.getToken(VtlParser.CUSTOMPIVOT, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public IN(): TerminalNode {
		return this.getToken(VtlParser.IN, 0);
	}

	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}

	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_customPivotClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCustomPivotClause) {
			listener.enterCustomPivotClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCustomPivotClause) {
			listener.exitCustomPivotClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCustomPivotClause) {
			return visitor.visitCustomPivotClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SubspaceClauseContext extends ParserRuleContext {
	public SUBSPACE(): TerminalNode {
		return this.getToken(VtlParser.SUBSPACE, 0);
	}

	public subspaceClauseItem(): SubspaceClauseItemContext[];
	public subspaceClauseItem(i: number): SubspaceClauseItemContext;
	public subspaceClauseItem(
		i?: number
	): SubspaceClauseItemContext | SubspaceClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubspaceClauseItemContext);
		} else {
			return this.getRuleContext(i, SubspaceClauseItemContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_subspaceClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSubspaceClause) {
			listener.enterSubspaceClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSubspaceClause) {
			listener.exitSubspaceClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSubspaceClause) {
			return visitor.visitSubspaceClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class JoinOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_joinOperators;
	}

	public copyFrom(ctx: JoinOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class JoinExprContext extends JoinOperatorsContext {
	public _joinKeyword: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public joinClause(): JoinClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinClauseContext);
	}

	public joinBody(): JoinBodyContext {
		return this.getRuleContext(0, JoinBodyContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public INNER_JOIN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.INNER_JOIN, 0);
	}

	public LEFT_JOIN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LEFT_JOIN, 0);
	}

	public joinClauseWithoutUsing(): JoinClauseWithoutUsingContext | undefined {
		return this.tryGetRuleContext(0, JoinClauseWithoutUsingContext);
	}

	public FULL_JOIN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.FULL_JOIN, 0);
	}

	public CROSS_JOIN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.CROSS_JOIN, 0);
	}

	constructor(ctx: JoinOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinExpr) {
			listener.enterJoinExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinExpr) {
			listener.exitJoinExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinExpr) {
			return visitor.visitJoinExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DefOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_defOperators;
	}

	public copyFrom(ctx: DefOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class DefOperatorContext extends DefOperatorsContext {
	public DEFINE(): TerminalNode {
		return this.getToken(VtlParser.DEFINE, 0);
	}

	public OPERATOR(): TerminalNode[];
	public OPERATOR(i: number): TerminalNode;
	public OPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.OPERATOR);
		} else {
			return this.getToken(VtlParser.OPERATOR, i);
		}
	}

	public operatorID(): OperatorIDContext {
		return this.getRuleContext(0, OperatorIDContext);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public IS(): TerminalNode {
		return this.getToken(VtlParser.IS, 0);
	}

	public END(): TerminalNode {
		return this.getToken(VtlParser.END, 0);
	}

	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}

	public exprComponent(): ExprComponentContext | undefined {
		return this.tryGetRuleContext(0, ExprComponentContext);
	}

	public parameterItem(): ParameterItemContext[];
	public parameterItem(i: number): ParameterItemContext;
	public parameterItem(
		i?: number
	): ParameterItemContext | ParameterItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterItemContext);
		} else {
			return this.getRuleContext(i, ParameterItemContext);
		}
	}

	public RETURNS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RETURNS, 0);
	}

	public outputParameterType(): OutputParameterTypeContext | undefined {
		return this.tryGetRuleContext(0, OutputParameterTypeContext);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(ctx: DefOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefOperator) {
			listener.enterDefOperator(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefOperator) {
			listener.exitDefOperator(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefOperator) {
			return visitor.visitDefOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DefDatapointRulesetContext extends DefOperatorsContext {
	public DEFINE(): TerminalNode {
		return this.getToken(VtlParser.DEFINE, 0);
	}

	public DATAPOINT(): TerminalNode[];
	public DATAPOINT(i: number): TerminalNode;
	public DATAPOINT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.DATAPOINT);
		} else {
			return this.getToken(VtlParser.DATAPOINT, i);
		}
	}

	public RULESET(): TerminalNode[];
	public RULESET(i: number): TerminalNode;
	public RULESET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RULESET);
		} else {
			return this.getToken(VtlParser.RULESET, i);
		}
	}

	public rulesetID(): RulesetIDContext {
		return this.getRuleContext(0, RulesetIDContext);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public rulesetSignature(): RulesetSignatureContext {
		return this.getRuleContext(0, RulesetSignatureContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public IS(): TerminalNode {
		return this.getToken(VtlParser.IS, 0);
	}

	public ruleClauseDatapoint(): RuleClauseDatapointContext {
		return this.getRuleContext(0, RuleClauseDatapointContext);
	}

	public END(): TerminalNode {
		return this.getToken(VtlParser.END, 0);
	}

	constructor(ctx: DefOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefDatapointRuleset) {
			listener.enterDefDatapointRuleset(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefDatapointRuleset) {
			listener.exitDefDatapointRuleset(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefDatapointRuleset) {
			return visitor.visitDefDatapointRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DefHierarchicalContext extends DefOperatorsContext {
	public DEFINE(): TerminalNode {
		return this.getToken(VtlParser.DEFINE, 0);
	}

	public HIERARCHICAL(): TerminalNode[];
	public HIERARCHICAL(i: number): TerminalNode;
	public HIERARCHICAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.HIERARCHICAL);
		} else {
			return this.getToken(VtlParser.HIERARCHICAL, i);
		}
	}

	public RULESET(): TerminalNode[];
	public RULESET(i: number): TerminalNode;
	public RULESET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RULESET);
		} else {
			return this.getToken(VtlParser.RULESET, i);
		}
	}

	public rulesetID(): RulesetIDContext {
		return this.getRuleContext(0, RulesetIDContext);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public hierRuleSignature(): HierRuleSignatureContext {
		return this.getRuleContext(0, HierRuleSignatureContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public IS(): TerminalNode {
		return this.getToken(VtlParser.IS, 0);
	}

	public ruleClauseHierarchical(): RuleClauseHierarchicalContext {
		return this.getRuleContext(0, RuleClauseHierarchicalContext);
	}

	public END(): TerminalNode {
		return this.getToken(VtlParser.END, 0);
	}

	constructor(ctx: DefOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefHierarchical) {
			listener.enterDefHierarchical(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefHierarchical) {
			listener.exitDefHierarchical(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefHierarchical) {
			return visitor.visitDefHierarchical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GenericOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_genericOperators;
	}

	public copyFrom(ctx: GenericOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class CallDatasetContext extends GenericOperatorsContext {
	public operatorID(): OperatorIDContext {
		return this.getRuleContext(0, OperatorIDContext);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(ctx: GenericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCallDataset) {
			listener.enterCallDataset(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCallDataset) {
			listener.exitCallDataset(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCallDataset) {
			return visitor.visitCallDataset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EvalAtomContext extends GenericOperatorsContext {
	public EVAL(): TerminalNode {
		return this.getToken(VtlParser.EVAL, 0);
	}

	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}

	public routineName(): RoutineNameContext {
		return this.getRuleContext(0, RoutineNameContext);
	}

	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}

	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}

	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public LANGUAGE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LANGUAGE, 0);
	}

	public STRING_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STRING_CONSTANT, 0);
	}

	public RETURNS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RETURNS, 0);
	}

	public outputParameterType(): OutputParameterTypeContext | undefined {
		return this.tryGetRuleContext(0, OutputParameterTypeContext);
	}

	constructor(ctx: GenericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterEvalAtom) {
			listener.enterEvalAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitEvalAtom) {
			listener.exitEvalAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitEvalAtom) {
			return visitor.visitEvalAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CastExprDatasetContext extends GenericOperatorsContext {
	public CAST(): TerminalNode {
		return this.getToken(VtlParser.CAST, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public basicScalarType(): BasicScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, BasicScalarTypeContext);
	}

	public valueDomainName(): ValueDomainNameContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainNameContext);
	}

	public STRING_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STRING_CONSTANT, 0);
	}

	constructor(ctx: GenericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCastExprDataset) {
			listener.enterCastExprDataset(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCastExprDataset) {
			listener.exitCastExprDataset(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCastExprDataset) {
			return visitor.visitCastExprDataset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GenericOperatorsComponentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_genericOperatorsComponent;
	}

	public copyFrom(ctx: GenericOperatorsComponentContext): void {
		super.copyFrom(ctx);
	}
}

export class CallComponentContext extends GenericOperatorsComponentContext {
	public operatorID(): OperatorIDContext {
		return this.getRuleContext(0, OperatorIDContext);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public parameterComponent(): ParameterComponentContext[];
	public parameterComponent(i: number): ParameterComponentContext;
	public parameterComponent(
		i?: number
	): ParameterComponentContext | ParameterComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterComponentContext);
		} else {
			return this.getRuleContext(i, ParameterComponentContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(ctx: GenericOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCallComponent) {
			listener.enterCallComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCallComponent) {
			listener.exitCallComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCallComponent) {
			return visitor.visitCallComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CastExprComponentContext extends GenericOperatorsComponentContext {
	public CAST(): TerminalNode {
		return this.getToken(VtlParser.CAST, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public basicScalarType(): BasicScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, BasicScalarTypeContext);
	}

	public valueDomainName(): ValueDomainNameContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainNameContext);
	}

	public STRING_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STRING_CONSTANT, 0);
	}

	constructor(ctx: GenericOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCastExprComponent) {
			listener.enterCastExprComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCastExprComponent) {
			listener.exitCastExprComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCastExprComponent) {
			return visitor.visitCastExprComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParameterComponentContext extends ParserRuleContext {
	public componentID(): ComponentIDContext | undefined {
		return this.tryGetRuleContext(0, ComponentIDContext);
	}

	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}

	public OPTIONAL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.OPTIONAL, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_parameterComponent;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterParameterComponent) {
			listener.enterParameterComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitParameterComponent) {
			listener.exitParameterComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitParameterComponent) {
			return visitor.visitParameterComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParameterContext extends ParserRuleContext {
	public varID(): VarIDContext | undefined {
		return this.tryGetRuleContext(0, VarIDContext);
	}

	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}

	public OPTIONAL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.OPTIONAL, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_parameter;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StringOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_stringOperators;
	}

	public copyFrom(ctx: StringOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class UnaryStringFunctionContext extends StringOperatorsContext {
	public _op: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public TRIM(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.TRIM, 0);
	}

	public LTRIM(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LTRIM, 0);
	}

	public RTRIM(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RTRIM, 0);
	}

	public UCASE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.UCASE, 0);
	}

	public LCASE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LCASE, 0);
	}

	public LEN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LEN, 0);
	}

	constructor(ctx: StringOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryStringFunction) {
			listener.enterUnaryStringFunction(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryStringFunction) {
			listener.exitUnaryStringFunction(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryStringFunction) {
			return visitor.visitUnaryStringFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SubstrAtomContext extends StringOperatorsContext {
	public SUBSTR(): TerminalNode {
		return this.getToken(VtlParser.SUBSTR, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public optionalExpr(): OptionalExprContext[];
	public optionalExpr(i: number): OptionalExprContext;
	public optionalExpr(i?: number): OptionalExprContext | OptionalExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalExprContext);
		} else {
			return this.getRuleContext(i, OptionalExprContext);
		}
	}

	constructor(ctx: StringOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSubstrAtom) {
			listener.enterSubstrAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSubstrAtom) {
			listener.exitSubstrAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSubstrAtom) {
			return visitor.visitSubstrAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ReplaceAtomContext extends StringOperatorsContext {
	public _param: ExprContext | undefined;

	public REPLACE(): TerminalNode {
		return this.getToken(VtlParser.REPLACE, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public optionalExpr(): OptionalExprContext | undefined {
		return this.tryGetRuleContext(0, OptionalExprContext);
	}

	constructor(ctx: StringOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterReplaceAtom) {
			listener.enterReplaceAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitReplaceAtom) {
			listener.exitReplaceAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitReplaceAtom) {
			return visitor.visitReplaceAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InstrAtomContext extends StringOperatorsContext {
	public _param: ExprContext | undefined;

	public INSTR(): TerminalNode {
		return this.getToken(VtlParser.INSTR, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public optionalExpr(): OptionalExprContext[];
	public optionalExpr(i: number): OptionalExprContext;
	public optionalExpr(i?: number): OptionalExprContext | OptionalExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalExprContext);
		} else {
			return this.getRuleContext(i, OptionalExprContext);
		}
	}

	constructor(ctx: StringOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInstrAtom) {
			listener.enterInstrAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInstrAtom) {
			listener.exitInstrAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInstrAtom) {
			return visitor.visitInstrAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StringOperatorsComponentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_stringOperatorsComponent;
	}

	public copyFrom(ctx: StringOperatorsComponentContext): void {
		super.copyFrom(ctx);
	}
}

export class UnaryStringFunctionComponentContext extends StringOperatorsComponentContext {
	public _op: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public TRIM(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.TRIM, 0);
	}

	public LTRIM(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LTRIM, 0);
	}

	public RTRIM(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RTRIM, 0);
	}

	public UCASE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.UCASE, 0);
	}

	public LCASE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LCASE, 0);
	}

	public LEN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LEN, 0);
	}

	constructor(ctx: StringOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryStringFunctionComponent) {
			listener.enterUnaryStringFunctionComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryStringFunctionComponent) {
			listener.exitUnaryStringFunctionComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryStringFunctionComponent) {
			return visitor.visitUnaryStringFunctionComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SubstrAtomComponentContext extends StringOperatorsComponentContext {
	public SUBSTR(): TerminalNode {
		return this.getToken(VtlParser.SUBSTR, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public optionalExprComponent(): OptionalExprComponentContext[];
	public optionalExprComponent(i: number): OptionalExprComponentContext;
	public optionalExprComponent(
		i?: number
	): OptionalExprComponentContext | OptionalExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalExprComponentContext);
		} else {
			return this.getRuleContext(i, OptionalExprComponentContext);
		}
	}

	constructor(ctx: StringOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSubstrAtomComponent) {
			listener.enterSubstrAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSubstrAtomComponent) {
			listener.exitSubstrAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSubstrAtomComponent) {
			return visitor.visitSubstrAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ReplaceAtomComponentContext extends StringOperatorsComponentContext {
	public _param: ExprComponentContext | undefined;

	public REPLACE(): TerminalNode {
		return this.getToken(VtlParser.REPLACE, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public optionalExprComponent(): OptionalExprComponentContext | undefined {
		return this.tryGetRuleContext(0, OptionalExprComponentContext);
	}

	constructor(ctx: StringOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterReplaceAtomComponent) {
			listener.enterReplaceAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitReplaceAtomComponent) {
			listener.exitReplaceAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitReplaceAtomComponent) {
			return visitor.visitReplaceAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InstrAtomComponentContext extends StringOperatorsComponentContext {
	public _param: ExprComponentContext | undefined;

	public INSTR(): TerminalNode {
		return this.getToken(VtlParser.INSTR, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public optionalExprComponent(): OptionalExprComponentContext[];
	public optionalExprComponent(i: number): OptionalExprComponentContext;
	public optionalExprComponent(
		i?: number
	): OptionalExprComponentContext | OptionalExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalExprComponentContext);
		} else {
			return this.getRuleContext(i, OptionalExprComponentContext);
		}
	}

	constructor(ctx: StringOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInstrAtomComponent) {
			listener.enterInstrAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInstrAtomComponent) {
			listener.exitInstrAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInstrAtomComponent) {
			return visitor.visitInstrAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NumericOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_numericOperators;
	}

	public copyFrom(ctx: NumericOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class UnaryNumericContext extends NumericOperatorsContext {
	public _op: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public CEIL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.CEIL, 0);
	}

	public FLOOR(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.FLOOR, 0);
	}

	public ABS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ABS, 0);
	}

	public EXP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.EXP, 0);
	}

	public LN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LN, 0);
	}

	public SQRT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SQRT, 0);
	}

	constructor(ctx: NumericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryNumeric) {
			listener.enterUnaryNumeric(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryNumeric) {
			listener.exitUnaryNumeric(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryNumeric) {
			return visitor.visitUnaryNumeric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryWithOptionalNumericContext extends NumericOperatorsContext {
	public _op: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public ROUND(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ROUND, 0);
	}

	public TRUNC(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.TRUNC, 0);
	}

	public COMMA(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COMMA, 0);
	}

	public optionalExpr(): OptionalExprContext | undefined {
		return this.tryGetRuleContext(0, OptionalExprContext);
	}

	constructor(ctx: NumericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryWithOptionalNumeric) {
			listener.enterUnaryWithOptionalNumeric(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryWithOptionalNumeric) {
			listener.exitUnaryWithOptionalNumeric(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryWithOptionalNumeric) {
			return visitor.visitUnaryWithOptionalNumeric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BinaryNumericContext extends NumericOperatorsContext {
	public _op: Token | undefined;
	public _left: ExprContext | undefined;
	public _right: ExprContext | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public MOD(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MOD, 0);
	}

	public POWER(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.POWER, 0);
	}

	public LOG(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LOG, 0);
	}

	constructor(ctx: NumericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBinaryNumeric) {
			listener.enterBinaryNumeric(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBinaryNumeric) {
			listener.exitBinaryNumeric(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBinaryNumeric) {
			return visitor.visitBinaryNumeric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NumericOperatorsComponentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_numericOperatorsComponent;
	}

	public copyFrom(ctx: NumericOperatorsComponentContext): void {
		super.copyFrom(ctx);
	}
}

export class UnaryNumericComponentContext extends NumericOperatorsComponentContext {
	public _op: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public CEIL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.CEIL, 0);
	}

	public FLOOR(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.FLOOR, 0);
	}

	public ABS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ABS, 0);
	}

	public EXP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.EXP, 0);
	}

	public LN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LN, 0);
	}

	public SQRT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SQRT, 0);
	}

	constructor(ctx: NumericOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryNumericComponent) {
			listener.enterUnaryNumericComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryNumericComponent) {
			listener.exitUnaryNumericComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryNumericComponent) {
			return visitor.visitUnaryNumericComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryWithOptionalNumericComponentContext extends NumericOperatorsComponentContext {
	public _op: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public ROUND(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ROUND, 0);
	}

	public TRUNC(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.TRUNC, 0);
	}

	public COMMA(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COMMA, 0);
	}

	public optionalExprComponent(): OptionalExprComponentContext | undefined {
		return this.tryGetRuleContext(0, OptionalExprComponentContext);
	}

	constructor(ctx: NumericOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryWithOptionalNumericComponent) {
			listener.enterUnaryWithOptionalNumericComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryWithOptionalNumericComponent) {
			listener.exitUnaryWithOptionalNumericComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryWithOptionalNumericComponent) {
			return visitor.visitUnaryWithOptionalNumericComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BinaryNumericComponentContext extends NumericOperatorsComponentContext {
	public _op: Token | undefined;
	public _left: ExprComponentContext | undefined;
	public _right: ExprComponentContext | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	public MOD(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MOD, 0);
	}

	public POWER(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.POWER, 0);
	}

	public LOG(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LOG, 0);
	}

	constructor(ctx: NumericOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBinaryNumericComponent) {
			listener.enterBinaryNumericComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBinaryNumericComponent) {
			listener.exitBinaryNumericComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBinaryNumericComponent) {
			return visitor.visitBinaryNumericComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComparisonOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_comparisonOperators;
	}

	public copyFrom(ctx: ComparisonOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class BetweenAtomContext extends ComparisonOperatorsContext {
	public _element: ExprContext | undefined;
	public _from_: ExprContext | undefined;
	public _to_: ExprContext | undefined;

	public BETWEEN(): TerminalNode {
		return this.getToken(VtlParser.BETWEEN, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	constructor(ctx: ComparisonOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBetweenAtom) {
			listener.enterBetweenAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBetweenAtom) {
			listener.exitBetweenAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBetweenAtom) {
			return visitor.visitBetweenAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CharsetMatchAtomContext extends ComparisonOperatorsContext {
	public _left: ExprContext | undefined;
	public _right: ExprContext | undefined;

	public CHARSET_MATCH(): TerminalNode {
		return this.getToken(VtlParser.CHARSET_MATCH, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	constructor(ctx: ComparisonOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCharsetMatchAtom) {
			listener.enterCharsetMatchAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCharsetMatchAtom) {
			listener.exitCharsetMatchAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCharsetMatchAtom) {
			return visitor.visitCharsetMatchAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IsNullAtomContext extends ComparisonOperatorsContext {
	public ISNULL(): TerminalNode {
		return this.getToken(VtlParser.ISNULL, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	constructor(ctx: ComparisonOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterIsNullAtom) {
			listener.enterIsNullAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitIsNullAtom) {
			listener.exitIsNullAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitIsNullAtom) {
			return visitor.visitIsNullAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExistInAtomContext extends ComparisonOperatorsContext {
	public _left: ExprContext | undefined;
	public _right: ExprContext | undefined;

	public EXISTS_IN(): TerminalNode {
		return this.getToken(VtlParser.EXISTS_IN, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public retainType(): RetainTypeContext | undefined {
		return this.tryGetRuleContext(0, RetainTypeContext);
	}

	constructor(ctx: ComparisonOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterExistInAtom) {
			listener.enterExistInAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitExistInAtom) {
			listener.exitExistInAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitExistInAtom) {
			return visitor.visitExistInAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComparisonOperatorsComponentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_comparisonOperatorsComponent;
	}

	public copyFrom(ctx: ComparisonOperatorsComponentContext): void {
		super.copyFrom(ctx);
	}
}

export class BetweenAtomComponentContext extends ComparisonOperatorsComponentContext {
	public _element: ExprComponentContext | undefined;
	public _from_: ExprComponentContext | undefined;
	public _to_: ExprComponentContext | undefined;

	public BETWEEN(): TerminalNode {
		return this.getToken(VtlParser.BETWEEN, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	constructor(ctx: ComparisonOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBetweenAtomComponent) {
			listener.enterBetweenAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBetweenAtomComponent) {
			listener.exitBetweenAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBetweenAtomComponent) {
			return visitor.visitBetweenAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CharsetMatchAtomComponentContext extends ComparisonOperatorsComponentContext {
	public _left: ExprComponentContext | undefined;
	public _right: ExprComponentContext | undefined;

	public CHARSET_MATCH(): TerminalNode {
		return this.getToken(VtlParser.CHARSET_MATCH, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	constructor(ctx: ComparisonOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCharsetMatchAtomComponent) {
			listener.enterCharsetMatchAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCharsetMatchAtomComponent) {
			listener.exitCharsetMatchAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCharsetMatchAtomComponent) {
			return visitor.visitCharsetMatchAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IsNullAtomComponentContext extends ComparisonOperatorsComponentContext {
	public ISNULL(): TerminalNode {
		return this.getToken(VtlParser.ISNULL, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	constructor(ctx: ComparisonOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterIsNullAtomComponent) {
			listener.enterIsNullAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitIsNullAtomComponent) {
			listener.exitIsNullAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitIsNullAtomComponent) {
			return visitor.visitIsNullAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TimeOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_timeOperators;
	}

	public copyFrom(ctx: TimeOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class PeriodAtomContext extends TimeOperatorsContext {
	public PERIOD_INDICATOR(): TerminalNode {
		return this.getToken(VtlParser.PERIOD_INDICATOR, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}

	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPeriodAtom) {
			listener.enterPeriodAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPeriodAtom) {
			listener.exitPeriodAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPeriodAtom) {
			return visitor.visitPeriodAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FillTimeAtomContext extends TimeOperatorsContext {
	public FILL_TIME_SERIES(): TerminalNode {
		return this.getToken(VtlParser.FILL_TIME_SERIES, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public COMMA(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COMMA, 0);
	}

	public SINGLE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SINGLE, 0);
	}

	public ALL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ALL, 0);
	}

	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFillTimeAtom) {
			listener.enterFillTimeAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFillTimeAtom) {
			listener.exitFillTimeAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFillTimeAtom) {
			return visitor.visitFillTimeAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FlowAtomContext extends TimeOperatorsContext {
	public _op: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public FLOW_TO_STOCK(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.FLOW_TO_STOCK, 0);
	}

	public STOCK_TO_FLOW(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STOCK_TO_FLOW, 0);
	}

	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFlowAtom) {
			listener.enterFlowAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFlowAtom) {
			listener.exitFlowAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFlowAtom) {
			return visitor.visitFlowAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TimeShiftAtomContext extends TimeOperatorsContext {
	public TIMESHIFT(): TerminalNode {
		return this.getToken(VtlParser.TIMESHIFT, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public signedInteger(): SignedIntegerContext {
		return this.getRuleContext(0, SignedIntegerContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeShiftAtom) {
			listener.enterTimeShiftAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeShiftAtom) {
			listener.exitTimeShiftAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeShiftAtom) {
			return visitor.visitTimeShiftAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TimeAggAtomContext extends TimeOperatorsContext {
	public TIME_AGG(): TerminalNode {
		return this.getToken(VtlParser.TIME_AGG, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public STRING_CONSTANT(): TerminalNode[];
	public STRING_CONSTANT(i: number): TerminalNode;
	public STRING_CONSTANT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.STRING_CONSTANT);
		} else {
			return this.getToken(VtlParser.STRING_CONSTANT, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public OPTIONAL(): TerminalNode[];
	public OPTIONAL(i: number): TerminalNode;
	public OPTIONAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.OPTIONAL);
		} else {
			return this.getToken(VtlParser.OPTIONAL, i);
		}
	}

	public FIRST(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.FIRST, 0);
	}

	public LAST(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LAST, 0);
	}

	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}

	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeAggAtom) {
			listener.enterTimeAggAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeAggAtom) {
			listener.exitTimeAggAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeAggAtom) {
			return visitor.visitTimeAggAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CurrentDateAtomContext extends TimeOperatorsContext {
	public CURRENT_DATE(): TerminalNode {
		return this.getToken(VtlParser.CURRENT_DATE, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCurrentDateAtom) {
			listener.enterCurrentDateAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCurrentDateAtom) {
			listener.exitCurrentDateAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCurrentDateAtom) {
			return visitor.visitCurrentDateAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TimeOperatorsComponentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_timeOperatorsComponent;
	}

	public copyFrom(ctx: TimeOperatorsComponentContext): void {
		super.copyFrom(ctx);
	}
}

export class PeriodAtomComponentContext extends TimeOperatorsComponentContext {
	public PERIOD_INDICATOR(): TerminalNode {
		return this.getToken(VtlParser.PERIOD_INDICATOR, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public exprComponent(): ExprComponentContext | undefined {
		return this.tryGetRuleContext(0, ExprComponentContext);
	}

	constructor(ctx: TimeOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPeriodAtomComponent) {
			listener.enterPeriodAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPeriodAtomComponent) {
			listener.exitPeriodAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPeriodAtomComponent) {
			return visitor.visitPeriodAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FillTimeAtomComponentContext extends TimeOperatorsComponentContext {
	public FILL_TIME_SERIES(): TerminalNode {
		return this.getToken(VtlParser.FILL_TIME_SERIES, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public COMMA(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COMMA, 0);
	}

	public SINGLE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SINGLE, 0);
	}

	public ALL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ALL, 0);
	}

	constructor(ctx: TimeOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFillTimeAtomComponent) {
			listener.enterFillTimeAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFillTimeAtomComponent) {
			listener.exitFillTimeAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFillTimeAtomComponent) {
			return visitor.visitFillTimeAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FlowAtomComponentContext extends TimeOperatorsComponentContext {
	public _op: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public FLOW_TO_STOCK(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.FLOW_TO_STOCK, 0);
	}

	public STOCK_TO_FLOW(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STOCK_TO_FLOW, 0);
	}

	constructor(ctx: TimeOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFlowAtomComponent) {
			listener.enterFlowAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFlowAtomComponent) {
			listener.exitFlowAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFlowAtomComponent) {
			return visitor.visitFlowAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TimeShiftAtomComponentContext extends TimeOperatorsComponentContext {
	public TIMESHIFT(): TerminalNode {
		return this.getToken(VtlParser.TIMESHIFT, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public signedInteger(): SignedIntegerContext {
		return this.getRuleContext(0, SignedIntegerContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	constructor(ctx: TimeOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeShiftAtomComponent) {
			listener.enterTimeShiftAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeShiftAtomComponent) {
			listener.exitTimeShiftAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeShiftAtomComponent) {
			return visitor.visitTimeShiftAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TimeAggAtomComponentContext extends TimeOperatorsComponentContext {
	public TIME_AGG(): TerminalNode {
		return this.getToken(VtlParser.TIME_AGG, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public STRING_CONSTANT(): TerminalNode[];
	public STRING_CONSTANT(i: number): TerminalNode;
	public STRING_CONSTANT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.STRING_CONSTANT);
		} else {
			return this.getToken(VtlParser.STRING_CONSTANT, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public OPTIONAL(): TerminalNode[];
	public OPTIONAL(i: number): TerminalNode;
	public OPTIONAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.OPTIONAL);
		} else {
			return this.getToken(VtlParser.OPTIONAL, i);
		}
	}

	public FIRST(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.FIRST, 0);
	}

	public LAST(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LAST, 0);
	}

	public exprComponent(): ExprComponentContext | undefined {
		return this.tryGetRuleContext(0, ExprComponentContext);
	}

	constructor(ctx: TimeOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeAggAtomComponent) {
			listener.enterTimeAggAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeAggAtomComponent) {
			listener.exitTimeAggAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeAggAtomComponent) {
			return visitor.visitTimeAggAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CurrentDateAtomComponentContext extends TimeOperatorsComponentContext {
	public CURRENT_DATE(): TerminalNode {
		return this.getToken(VtlParser.CURRENT_DATE, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	constructor(ctx: TimeOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCurrentDateAtomComponent) {
			listener.enterCurrentDateAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCurrentDateAtomComponent) {
			listener.exitCurrentDateAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCurrentDateAtomComponent) {
			return visitor.visitCurrentDateAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SetOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_setOperators;
	}

	public copyFrom(ctx: SetOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class UnionAtomContext extends SetOperatorsContext {
	public _left: ExprContext | undefined;

	public UNION(): TerminalNode {
		return this.getToken(VtlParser.UNION, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(ctx: SetOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnionAtom) {
			listener.enterUnionAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnionAtom) {
			listener.exitUnionAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnionAtom) {
			return visitor.visitUnionAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IntersectAtomContext extends SetOperatorsContext {
	public _left: ExprContext | undefined;

	public INTERSECT(): TerminalNode {
		return this.getToken(VtlParser.INTERSECT, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(ctx: SetOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterIntersectAtom) {
			listener.enterIntersectAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitIntersectAtom) {
			listener.exitIntersectAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitIntersectAtom) {
			return visitor.visitIntersectAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SetOrSYmDiffAtomContext extends SetOperatorsContext {
	public _op: Token | undefined;
	public _left: ExprContext | undefined;
	public _right: ExprContext | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	public SETDIFF(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SETDIFF, 0);
	}

	public SYMDIFF(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SYMDIFF, 0);
	}

	constructor(ctx: SetOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSetOrSYmDiffAtom) {
			listener.enterSetOrSYmDiffAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSetOrSYmDiffAtom) {
			listener.exitSetOrSYmDiffAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSetOrSYmDiffAtom) {
			return visitor.visitSetOrSYmDiffAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class HierarchyOperatorsContext extends ParserRuleContext {
	public _op: ExprContext | undefined;
	public _hrName: Token | undefined;
	public _ruleComponent: ComponentIDContext | undefined;

	public HIERARCHY(): TerminalNode {
		return this.getToken(VtlParser.HIERARCHY, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	public conditionClause(): ConditionClauseContext | undefined {
		return this.tryGetRuleContext(0, ConditionClauseContext);
	}

	public RULE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RULE, 0);
	}

	public validationMode(): ValidationModeContext | undefined {
		return this.tryGetRuleContext(0, ValidationModeContext);
	}

	public inputModeHierarchy(): InputModeHierarchyContext | undefined {
		return this.tryGetRuleContext(0, InputModeHierarchyContext);
	}

	public outputModeHierarchy(): OutputModeHierarchyContext | undefined {
		return this.tryGetRuleContext(0, OutputModeHierarchyContext);
	}

	public componentID(): ComponentIDContext | undefined {
		return this.tryGetRuleContext(0, ComponentIDContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_hierarchyOperators;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHierarchyOperators) {
			listener.enterHierarchyOperators(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHierarchyOperators) {
			listener.exitHierarchyOperators(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHierarchyOperators) {
			return visitor.visitHierarchyOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ValidationOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_validationOperators;
	}

	public copyFrom(ctx: ValidationOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class ValidateDPrulesetContext extends ValidationOperatorsContext {
	public _op: ExprContext | undefined;
	public _dpName: Token | undefined;

	public CHECK_DATAPOINT(): TerminalNode {
		return this.getToken(VtlParser.CHECK_DATAPOINT, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	public COMPONENTS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COMPONENTS, 0);
	}

	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}

	public validationOutput(): ValidationOutputContext | undefined {
		return this.tryGetRuleContext(0, ValidationOutputContext);
	}

	constructor(ctx: ValidationOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidateDPruleset) {
			listener.enterValidateDPruleset(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidateDPruleset) {
			listener.exitValidateDPruleset(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidateDPruleset) {
			return visitor.visitValidateDPruleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ValidateHRrulesetContext extends ValidationOperatorsContext {
	public _op: ExprContext | undefined;
	public _hrName: Token | undefined;

	public CHECK_HIERARCHY(): TerminalNode {
		return this.getToken(VtlParser.CHECK_HIERARCHY, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	public conditionClause(): ConditionClauseContext | undefined {
		return this.tryGetRuleContext(0, ConditionClauseContext);
	}

	public RULE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RULE, 0);
	}

	public componentID(): ComponentIDContext | undefined {
		return this.tryGetRuleContext(0, ComponentIDContext);
	}

	public validationMode(): ValidationModeContext | undefined {
		return this.tryGetRuleContext(0, ValidationModeContext);
	}

	public inputMode(): InputModeContext | undefined {
		return this.tryGetRuleContext(0, InputModeContext);
	}

	public validationOutput(): ValidationOutputContext | undefined {
		return this.tryGetRuleContext(0, ValidationOutputContext);
	}

	constructor(ctx: ValidationOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidateHRruleset) {
			listener.enterValidateHRruleset(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidateHRruleset) {
			listener.exitValidateHRruleset(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidateHRruleset) {
			return visitor.visitValidateHRruleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ValidationSimpleContext extends ValidationOperatorsContext {
	public _op: ExprContext | undefined;
	public _codeErr: ErCodeContext | undefined;
	public _levelCode: ErLevelContext | undefined;
	public _output: Token | undefined;

	public CHECK(): TerminalNode {
		return this.getToken(VtlParser.CHECK, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public imbalanceExpr(): ImbalanceExprContext | undefined {
		return this.tryGetRuleContext(0, ImbalanceExprContext);
	}

	public erCode(): ErCodeContext | undefined {
		return this.tryGetRuleContext(0, ErCodeContext);
	}

	public erLevel(): ErLevelContext | undefined {
		return this.tryGetRuleContext(0, ErLevelContext);
	}

	public INVALID(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.INVALID, 0);
	}

	public ALL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ALL, 0);
	}

	constructor(ctx: ValidationOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationSimple) {
			listener.enterValidationSimple(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationSimple) {
			listener.exitValidationSimple(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationSimple) {
			return visitor.visitValidationSimple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConditionalOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_conditionalOperators;
	}

	public copyFrom(ctx: ConditionalOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class NvlAtomContext extends ConditionalOperatorsContext {
	public _left: ExprContext | undefined;
	public _right: ExprContext | undefined;

	public NVL(): TerminalNode {
		return this.getToken(VtlParser.NVL, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}

	constructor(ctx: ConditionalOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterNvlAtom) {
			listener.enterNvlAtom(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitNvlAtom) {
			listener.exitNvlAtom(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitNvlAtom) {
			return visitor.visitNvlAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConditionalOperatorsComponentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_conditionalOperatorsComponent;
	}

	public copyFrom(ctx: ConditionalOperatorsComponentContext): void {
		super.copyFrom(ctx);
	}
}

export class NvlAtomComponentContext extends ConditionalOperatorsComponentContext {
	public _left: ExprComponentContext | undefined;
	public _right: ExprComponentContext | undefined;

	public NVL(): TerminalNode {
		return this.getToken(VtlParser.NVL, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(VtlParser.COMMA, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	constructor(ctx: ConditionalOperatorsComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterNvlAtomComponent) {
			listener.enterNvlAtomComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitNvlAtomComponent) {
			listener.exitNvlAtomComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitNvlAtomComponent) {
			return visitor.visitNvlAtomComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AggrOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_aggrOperators;
	}

	public copyFrom(ctx: AggrOperatorsContext): void {
		super.copyFrom(ctx);
	}
}

export class AggrCompContext extends AggrOperatorsContext {
	public _op: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public SUM(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SUM, 0);
	}

	public AVG(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.AVG, 0);
	}

	public COUNT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COUNT, 0);
	}

	public MEDIAN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MEDIAN, 0);
	}

	public MIN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MIN, 0);
	}

	public MAX(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MAX, 0);
	}

	public STDDEV_POP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STDDEV_POP, 0);
	}

	public STDDEV_SAMP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STDDEV_SAMP, 0);
	}

	public VAR_POP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VAR_POP, 0);
	}

	public VAR_SAMP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VAR_SAMP, 0);
	}

	constructor(ctx: AggrOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrComp) {
			listener.enterAggrComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrComp) {
			listener.exitAggrComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrComp) {
			return visitor.visitAggrComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CountAggrCompContext extends AggrOperatorsContext {
	public COUNT(): TerminalNode {
		return this.getToken(VtlParser.COUNT, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	constructor(ctx: AggrOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCountAggrComp) {
			listener.enterCountAggrComp(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCountAggrComp) {
			listener.exitCountAggrComp(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCountAggrComp) {
			return visitor.visitCountAggrComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AggrOperatorsGroupingContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_aggrOperatorsGrouping;
	}

	public copyFrom(ctx: AggrOperatorsGroupingContext): void {
		super.copyFrom(ctx);
	}
}

export class AggrDatasetContext extends AggrOperatorsGroupingContext {
	public _op: Token | undefined;

	public LPAREN(): TerminalNode {
		return this.getToken(VtlParser.LPAREN, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public RPAREN(): TerminalNode {
		return this.getToken(VtlParser.RPAREN, 0);
	}

	public SUM(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SUM, 0);
	}

	public AVG(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.AVG, 0);
	}

	public COUNT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COUNT, 0);
	}

	public MEDIAN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MEDIAN, 0);
	}

	public MIN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MIN, 0);
	}

	public MAX(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MAX, 0);
	}

	public STDDEV_POP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STDDEV_POP, 0);
	}

	public STDDEV_SAMP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STDDEV_SAMP, 0);
	}

	public VAR_POP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VAR_POP, 0);
	}

	public VAR_SAMP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VAR_SAMP, 0);
	}

	public groupingClause(): GroupingClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupingClauseContext);
	}

	public havingClause(): HavingClauseContext | undefined {
		return this.tryGetRuleContext(0, HavingClauseContext);
	}

	constructor(ctx: AggrOperatorsGroupingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrDataset) {
			listener.enterAggrDataset(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrDataset) {
			listener.exitAggrDataset(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrDataset) {
			return visitor.visitAggrDataset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AnFunctionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_anFunction;
	}

	public copyFrom(ctx: AnFunctionContext): void {
		super.copyFrom(ctx);
	}
}

export class AnSimpleFunctionContext extends AnFunctionContext {
	public _op: Token | undefined;
	public _partition: PartitionByClauseContext | undefined;
	public _orderBy: OrderByClauseContext | undefined;
	public _windowing: WindowingClauseContext | undefined;

	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public OVER(): TerminalNode {
		return this.getToken(VtlParser.OVER, 0);
	}

	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}

	public SUM(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SUM, 0);
	}

	public AVG(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.AVG, 0);
	}

	public COUNT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COUNT, 0);
	}

	public MEDIAN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MEDIAN, 0);
	}

	public MIN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MIN, 0);
	}

	public MAX(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MAX, 0);
	}

	public STDDEV_POP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STDDEV_POP, 0);
	}

	public STDDEV_SAMP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STDDEV_SAMP, 0);
	}

	public VAR_POP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VAR_POP, 0);
	}

	public VAR_SAMP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VAR_SAMP, 0);
	}

	public FIRST_VALUE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.FIRST_VALUE, 0);
	}

	public LAST_VALUE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LAST_VALUE, 0);
	}

	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}

	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}

	public windowingClause(): WindowingClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowingClauseContext);
	}

	constructor(ctx: AnFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAnSimpleFunction) {
			listener.enterAnSimpleFunction(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAnSimpleFunction) {
			listener.exitAnSimpleFunction(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAnSimpleFunction) {
			return visitor.visitAnSimpleFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LagOrLeadAnContext extends AnFunctionContext {
	public _op: Token | undefined;
	public _offet: SignedIntegerContext | undefined;
	public _defaultValue: ConstantContext | undefined;
	public _partition: PartitionByClauseContext | undefined;
	public _orderBy: OrderByClauseContext | undefined;

	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public OVER(): TerminalNode {
		return this.getToken(VtlParser.OVER, 0);
	}

	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}

	public LAG(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LAG, 0);
	}

	public LEAD(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LEAD, 0);
	}

	public COMMA(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COMMA, 0);
	}

	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}

	public signedInteger(): SignedIntegerContext | undefined {
		return this.tryGetRuleContext(0, SignedIntegerContext);
	}

	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}

	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}

	constructor(ctx: AnFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLagOrLeadAn) {
			listener.enterLagOrLeadAn(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLagOrLeadAn) {
			listener.exitLagOrLeadAn(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLagOrLeadAn) {
			return visitor.visitLagOrLeadAn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RatioToReportAnContext extends AnFunctionContext {
	public _op: Token | undefined;
	public _partition: PartitionByClauseContext | undefined;

	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public OVER(): TerminalNode {
		return this.getToken(VtlParser.OVER, 0);
	}

	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}

	public RATIO_TO_REPORT(): TerminalNode {
		return this.getToken(VtlParser.RATIO_TO_REPORT, 0);
	}

	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}

	constructor(ctx: AnFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRatioToReportAn) {
			listener.enterRatioToReportAn(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRatioToReportAn) {
			listener.exitRatioToReportAn(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRatioToReportAn) {
			return visitor.visitRatioToReportAn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AnFunctionComponentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_anFunctionComponent;
	}

	public copyFrom(ctx: AnFunctionComponentContext): void {
		super.copyFrom(ctx);
	}
}

export class AnSimpleFunctionComponentContext extends AnFunctionComponentContext {
	public _op: Token | undefined;
	public _partition: PartitionByClauseContext | undefined;
	public _orderBy: OrderByClauseContext | undefined;
	public _windowing: WindowingClauseContext | undefined;

	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public OVER(): TerminalNode {
		return this.getToken(VtlParser.OVER, 0);
	}

	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}

	public SUM(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SUM, 0);
	}

	public AVG(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.AVG, 0);
	}

	public COUNT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COUNT, 0);
	}

	public MEDIAN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MEDIAN, 0);
	}

	public MIN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MIN, 0);
	}

	public MAX(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MAX, 0);
	}

	public STDDEV_POP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STDDEV_POP, 0);
	}

	public STDDEV_SAMP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STDDEV_SAMP, 0);
	}

	public VAR_POP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VAR_POP, 0);
	}

	public VAR_SAMP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VAR_SAMP, 0);
	}

	public FIRST_VALUE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.FIRST_VALUE, 0);
	}

	public LAST_VALUE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LAST_VALUE, 0);
	}

	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}

	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}

	public windowingClause(): WindowingClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowingClauseContext);
	}

	constructor(ctx: AnFunctionComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAnSimpleFunctionComponent) {
			listener.enterAnSimpleFunctionComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAnSimpleFunctionComponent) {
			listener.exitAnSimpleFunctionComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAnSimpleFunctionComponent) {
			return visitor.visitAnSimpleFunctionComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LagOrLeadAnComponentContext extends AnFunctionComponentContext {
	public _op: Token | undefined;
	public _offet: SignedIntegerContext | undefined;
	public _defaultValue: ConstantContext | undefined;
	public _partition: PartitionByClauseContext | undefined;
	public _orderBy: OrderByClauseContext | undefined;

	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public OVER(): TerminalNode {
		return this.getToken(VtlParser.OVER, 0);
	}

	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}

	public LAG(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LAG, 0);
	}

	public LEAD(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LEAD, 0);
	}

	public COMMA(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COMMA, 0);
	}

	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}

	public signedInteger(): SignedIntegerContext | undefined {
		return this.tryGetRuleContext(0, SignedIntegerContext);
	}

	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}

	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}

	constructor(ctx: AnFunctionComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLagOrLeadAnComponent) {
			listener.enterLagOrLeadAnComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLagOrLeadAnComponent) {
			listener.exitLagOrLeadAnComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLagOrLeadAnComponent) {
			return visitor.visitLagOrLeadAnComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RankAnComponentContext extends AnFunctionComponentContext {
	public _op: Token | undefined;
	public _partition: PartitionByClauseContext | undefined;
	public _orderBy: OrderByClauseContext | undefined;

	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}

	public OVER(): TerminalNode {
		return this.getToken(VtlParser.OVER, 0);
	}

	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}

	public RANK(): TerminalNode {
		return this.getToken(VtlParser.RANK, 0);
	}

	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}

	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}

	constructor(ctx: AnFunctionComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRankAnComponent) {
			listener.enterRankAnComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRankAnComponent) {
			listener.exitRankAnComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRankAnComponent) {
			return visitor.visitRankAnComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RatioToReportAnComponentContext extends AnFunctionComponentContext {
	public _op: Token | undefined;
	public _partition: PartitionByClauseContext | undefined;

	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public OVER(): TerminalNode {
		return this.getToken(VtlParser.OVER, 0);
	}

	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}

	public RATIO_TO_REPORT(): TerminalNode {
		return this.getToken(VtlParser.RATIO_TO_REPORT, 0);
	}

	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}

	constructor(ctx: AnFunctionComponentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRatioToReportAnComponent) {
			listener.enterRatioToReportAnComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRatioToReportAnComponent) {
			listener.exitRatioToReportAnComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRatioToReportAnComponent) {
			return visitor.visitRatioToReportAnComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RenameClauseItemContext extends ParserRuleContext {
	public _fromName: ComponentIDContext | undefined;
	public _toName: ComponentIDContext | undefined;

	public TO(): TerminalNode {
		return this.getToken(VtlParser.TO, 0);
	}

	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_renameClauseItem;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRenameClauseItem) {
			listener.enterRenameClauseItem(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRenameClauseItem) {
			listener.exitRenameClauseItem(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRenameClauseItem) {
			return visitor.visitRenameClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AggregateClauseContext extends ParserRuleContext {
	public aggrFunctionClause(): AggrFunctionClauseContext[];
	public aggrFunctionClause(i: number): AggrFunctionClauseContext;
	public aggrFunctionClause(
		i?: number
	): AggrFunctionClauseContext | AggrFunctionClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AggrFunctionClauseContext);
		} else {
			return this.getRuleContext(i, AggrFunctionClauseContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_aggregateClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggregateClause) {
			listener.enterAggregateClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggregateClause) {
			listener.exitAggregateClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggregateClause) {
			return visitor.visitAggregateClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AggrFunctionClauseContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}

	public ASSIGN(): TerminalNode {
		return this.getToken(VtlParser.ASSIGN, 0);
	}

	public aggrOperators(): AggrOperatorsContext {
		return this.getRuleContext(0, AggrOperatorsContext);
	}

	public componentRole(): ComponentRoleContext | undefined {
		return this.tryGetRuleContext(0, ComponentRoleContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_aggrFunctionClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrFunctionClause) {
			listener.enterAggrFunctionClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrFunctionClause) {
			listener.exitAggrFunctionClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrFunctionClause) {
			return visitor.visitAggrFunctionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CalcClauseItemContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}

	public ASSIGN(): TerminalNode {
		return this.getToken(VtlParser.ASSIGN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public componentRole(): ComponentRoleContext | undefined {
		return this.tryGetRuleContext(0, ComponentRoleContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_calcClauseItem;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCalcClauseItem) {
			listener.enterCalcClauseItem(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCalcClauseItem) {
			listener.exitCalcClauseItem(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCalcClauseItem) {
			return visitor.visitCalcClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SubspaceClauseItemContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}

	public EQ(): TerminalNode {
		return this.getToken(VtlParser.EQ, 0);
	}

	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_subspaceClauseItem;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSubspaceClauseItem) {
			listener.enterSubspaceClauseItem(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSubspaceClauseItem) {
			listener.exitSubspaceClauseItem(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSubspaceClauseItem) {
			return visitor.visitSubspaceClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class JoinClauseWithoutUsingContext extends ParserRuleContext {
	public joinClauseItem(): JoinClauseItemContext[];
	public joinClauseItem(i: number): JoinClauseItemContext;
	public joinClauseItem(
		i?: number
	): JoinClauseItemContext | JoinClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinClauseItemContext);
		} else {
			return this.getRuleContext(i, JoinClauseItemContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_joinClauseWithoutUsing;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinClauseWithoutUsing) {
			listener.enterJoinClauseWithoutUsing(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinClauseWithoutUsing) {
			listener.exitJoinClauseWithoutUsing(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinClauseWithoutUsing) {
			return visitor.visitJoinClauseWithoutUsing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class JoinClauseContext extends ParserRuleContext {
	public joinClauseItem(): JoinClauseItemContext[];
	public joinClauseItem(i: number): JoinClauseItemContext;
	public joinClauseItem(
		i?: number
	): JoinClauseItemContext | JoinClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinClauseItemContext);
		} else {
			return this.getRuleContext(i, JoinClauseItemContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	public USING(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.USING, 0);
	}

	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_joinClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinClause) {
			listener.enterJoinClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinClause) {
			listener.exitJoinClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinClause) {
			return visitor.visitJoinClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class JoinClauseItemContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	public AS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.AS, 0);
	}

	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_joinClauseItem;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinClauseItem) {
			listener.enterJoinClauseItem(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinClauseItem) {
			listener.exitJoinClauseItem(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinClauseItem) {
			return visitor.visitJoinClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class JoinBodyContext extends ParserRuleContext {
	public filterClause(): FilterClauseContext | undefined {
		return this.tryGetRuleContext(0, FilterClauseContext);
	}

	public calcClause(): CalcClauseContext | undefined {
		return this.tryGetRuleContext(0, CalcClauseContext);
	}

	public joinApplyClause(): JoinApplyClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinApplyClauseContext);
	}

	public aggrClause(): AggrClauseContext | undefined {
		return this.tryGetRuleContext(0, AggrClauseContext);
	}

	public keepOrDropClause(): KeepOrDropClauseContext | undefined {
		return this.tryGetRuleContext(0, KeepOrDropClauseContext);
	}

	public renameClause(): RenameClauseContext | undefined {
		return this.tryGetRuleContext(0, RenameClauseContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_joinBody;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinBody) {
			listener.enterJoinBody(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinBody) {
			listener.exitJoinBody(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinBody) {
			return visitor.visitJoinBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class JoinApplyClauseContext extends ParserRuleContext {
	public APPLY(): TerminalNode {
		return this.getToken(VtlParser.APPLY, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_joinApplyClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinApplyClause) {
			listener.enterJoinApplyClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinApplyClause) {
			listener.exitJoinApplyClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinApplyClause) {
			return visitor.visitJoinApplyClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PartitionByClauseContext extends ParserRuleContext {
	public PARTITION(): TerminalNode {
		return this.getToken(VtlParser.PARTITION, 0);
	}

	public BY(): TerminalNode {
		return this.getToken(VtlParser.BY, 0);
	}

	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_partitionByClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPartitionByClause) {
			listener.enterPartitionByClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPartitionByClause) {
			listener.exitPartitionByClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPartitionByClause) {
			return visitor.visitPartitionByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OrderByClauseContext extends ParserRuleContext {
	public ORDER(): TerminalNode {
		return this.getToken(VtlParser.ORDER, 0);
	}

	public BY(): TerminalNode {
		return this.getToken(VtlParser.BY, 0);
	}

	public orderByItem(): OrderByItemContext[];
	public orderByItem(i: number): OrderByItemContext;
	public orderByItem(i?: number): OrderByItemContext | OrderByItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderByItemContext);
		} else {
			return this.getRuleContext(i, OrderByItemContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_orderByClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOrderByClause) {
			listener.enterOrderByClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOrderByClause) {
			listener.exitOrderByClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOrderByClause) {
			return visitor.visitOrderByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OrderByItemContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}

	public ASC(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ASC, 0);
	}

	public DESC(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DESC, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_orderByItem;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOrderByItem) {
			listener.enterOrderByItem(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOrderByItem) {
			listener.exitOrderByItem(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOrderByItem) {
			return visitor.visitOrderByItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class WindowingClauseContext extends ParserRuleContext {
	public _from_: LimitClauseItemContext | undefined;
	public _to_: LimitClauseItemContext | undefined;

	public BETWEEN(): TerminalNode {
		return this.getToken(VtlParser.BETWEEN, 0);
	}

	public AND(): TerminalNode {
		return this.getToken(VtlParser.AND, 0);
	}

	public limitClauseItem(): LimitClauseItemContext[];
	public limitClauseItem(i: number): LimitClauseItemContext;
	public limitClauseItem(
		i?: number
	): LimitClauseItemContext | LimitClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LimitClauseItemContext);
		} else {
			return this.getRuleContext(i, LimitClauseItemContext);
		}
	}

	public RANGE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RANGE, 0);
	}

	public DATA(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DATA, 0);
	}

	public POINTS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.POINTS, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_windowingClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterWindowingClause) {
			listener.enterWindowingClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitWindowingClause) {
			listener.exitWindowingClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitWindowingClause) {
			return visitor.visitWindowingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SignedIntegerContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode {
		return this.getToken(VtlParser.INTEGER_CONSTANT, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_signedInteger;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSignedInteger) {
			listener.enterSignedInteger(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSignedInteger) {
			listener.exitSignedInteger(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSignedInteger) {
			return visitor.visitSignedInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LimitClauseItemContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.INTEGER_CONSTANT, 0);
	}

	public PRECEDING(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.PRECEDING, 0);
	}

	public FOLLOWING(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.FOLLOWING, 0);
	}

	public CURRENT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.CURRENT, 0);
	}

	public DATA(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DATA, 0);
	}

	public POINT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.POINT, 0);
	}

	public UNBOUNDED(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.UNBOUNDED, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_limitClauseItem;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLimitClauseItem) {
			listener.enterLimitClauseItem(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLimitClauseItem) {
			listener.exitLimitClauseItem(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLimitClauseItem) {
			return visitor.visitLimitClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GroupingClauseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_groupingClause;
	}

	public copyFrom(ctx: GroupingClauseContext): void {
		super.copyFrom(ctx);
	}
}

export class GroupByOrExceptContext extends GroupingClauseContext {
	public _op: Token | undefined;

	public GROUP(): TerminalNode {
		return this.getToken(VtlParser.GROUP, 0);
	}

	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}

	public BY(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.BY, 0);
	}

	public EXCEPT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.EXCEPT, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(ctx: GroupingClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGroupByOrExcept) {
			listener.enterGroupByOrExcept(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGroupByOrExcept) {
			listener.exitGroupByOrExcept(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGroupByOrExcept) {
			return visitor.visitGroupByOrExcept(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GroupAllContext extends GroupingClauseContext {
	public GROUP(): TerminalNode {
		return this.getToken(VtlParser.GROUP, 0);
	}

	public ALL(): TerminalNode {
		return this.getToken(VtlParser.ALL, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	constructor(ctx: GroupingClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGroupAll) {
			listener.enterGroupAll(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGroupAll) {
			listener.exitGroupAll(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGroupAll) {
			return visitor.visitGroupAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class HavingClauseContext extends ParserRuleContext {
	public HAVING(): TerminalNode {
		return this.getToken(VtlParser.HAVING, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_havingClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHavingClause) {
			listener.enterHavingClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHavingClause) {
			listener.exitHavingClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHavingClause) {
			return visitor.visitHavingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParameterItemContext extends ParserRuleContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}

	public inputParameterType(): InputParameterTypeContext {
		return this.getRuleContext(0, InputParameterTypeContext);
	}

	public DEFAULT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DEFAULT, 0);
	}

	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_parameterItem;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterParameterItem) {
			listener.enterParameterItem(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitParameterItem) {
			listener.exitParameterItem(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitParameterItem) {
			return visitor.visitParameterItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OutputParameterTypeContext extends ParserRuleContext {
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}

	public datasetType(): DatasetTypeContext | undefined {
		return this.tryGetRuleContext(0, DatasetTypeContext);
	}

	public componentType(): ComponentTypeContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_outputParameterType;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOutputParameterType) {
			listener.enterOutputParameterType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOutputParameterType) {
			listener.exitOutputParameterType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOutputParameterType) {
			return visitor.visitOutputParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InputParameterTypeContext extends ParserRuleContext {
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}

	public datasetType(): DatasetTypeContext | undefined {
		return this.tryGetRuleContext(0, DatasetTypeContext);
	}

	public scalarSetType(): ScalarSetTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarSetTypeContext);
	}

	public rulesetType(): RulesetTypeContext | undefined {
		return this.tryGetRuleContext(0, RulesetTypeContext);
	}

	public componentType(): ComponentTypeContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_inputParameterType;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInputParameterType) {
			listener.enterInputParameterType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInputParameterType) {
			listener.exitInputParameterType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInputParameterType) {
			return visitor.visitInputParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RulesetTypeContext extends ParserRuleContext {
	public RULESET(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RULESET, 0);
	}

	public dpRuleset(): DpRulesetContext | undefined {
		return this.tryGetRuleContext(0, DpRulesetContext);
	}

	public hrRuleset(): HrRulesetContext | undefined {
		return this.tryGetRuleContext(0, HrRulesetContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_rulesetType;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRulesetType) {
			listener.enterRulesetType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRulesetType) {
			listener.exitRulesetType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRulesetType) {
			return visitor.visitRulesetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ScalarTypeContext extends ParserRuleContext {
	public basicScalarType(): BasicScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, BasicScalarTypeContext);
	}

	public valueDomainName(): ValueDomainNameContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainNameContext);
	}

	public scalarTypeConstraint(): ScalarTypeConstraintContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeConstraintContext);
	}

	public NULL_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NULL_CONSTANT, 0);
	}

	public NOT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NOT, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_scalarType;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterScalarType) {
			listener.enterScalarType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitScalarType) {
			listener.exitScalarType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitScalarType) {
			return visitor.visitScalarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComponentTypeContext extends ParserRuleContext {
	public componentRole(): ComponentRoleContext {
		return this.getRuleContext(0, ComponentRoleContext);
	}

	public LT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LT, 0);
	}

	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}

	public MT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MT, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_componentType;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComponentType) {
			listener.enterComponentType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComponentType) {
			listener.exitComponentType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComponentType) {
			return visitor.visitComponentType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DatasetTypeContext extends ParserRuleContext {
	public DATASET(): TerminalNode {
		return this.getToken(VtlParser.DATASET, 0);
	}

	public GLPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.GLPAREN, 0);
	}

	public compConstraint(): CompConstraintContext[];
	public compConstraint(i: number): CompConstraintContext;
	public compConstraint(
		i?: number
	): CompConstraintContext | CompConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CompConstraintContext);
		} else {
			return this.getRuleContext(i, CompConstraintContext);
		}
	}

	public GRPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.GRPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_datasetType;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDatasetType) {
			listener.enterDatasetType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDatasetType) {
			listener.exitDatasetType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDatasetType) {
			return visitor.visitDatasetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ScalarSetTypeContext extends ParserRuleContext {
	public SET(): TerminalNode {
		return this.getToken(VtlParser.SET, 0);
	}

	public LT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LT, 0);
	}

	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}

	public MT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MT, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_scalarSetType;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterScalarSetType) {
			listener.enterScalarSetType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitScalarSetType) {
			listener.exitScalarSetType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitScalarSetType) {
			return visitor.visitScalarSetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DpRulesetContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_dpRuleset;
	}

	public copyFrom(ctx: DpRulesetContext): void {
		super.copyFrom(ctx);
	}
}

export class DataPointContext extends DpRulesetContext {
	public DATAPOINT(): TerminalNode {
		return this.getToken(VtlParser.DATAPOINT, 0);
	}

	constructor(ctx: DpRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDataPoint) {
			listener.enterDataPoint(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDataPoint) {
			listener.exitDataPoint(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDataPoint) {
			return visitor.visitDataPoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DataPointVdContext extends DpRulesetContext {
	public DATAPOINT_ON_VD(): TerminalNode {
		return this.getToken(VtlParser.DATAPOINT_ON_VD, 0);
	}

	public GLPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.GLPAREN, 0);
	}

	public valueDomainName(): ValueDomainNameContext[];
	public valueDomainName(i: number): ValueDomainNameContext;
	public valueDomainName(
		i?: number
	): ValueDomainNameContext | ValueDomainNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueDomainNameContext);
		} else {
			return this.getRuleContext(i, ValueDomainNameContext);
		}
	}

	public GRPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.GRPAREN, 0);
	}

	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MUL);
		} else {
			return this.getToken(VtlParser.MUL, i);
		}
	}

	constructor(ctx: DpRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDataPointVd) {
			listener.enterDataPointVd(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDataPointVd) {
			listener.exitDataPointVd(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDataPointVd) {
			return visitor.visitDataPointVd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DataPointVarContext extends DpRulesetContext {
	public DATAPOINT_ON_VAR(): TerminalNode {
		return this.getToken(VtlParser.DATAPOINT_ON_VAR, 0);
	}

	public GLPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.GLPAREN, 0);
	}

	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
		}
	}

	public GRPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.GRPAREN, 0);
	}

	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MUL);
		} else {
			return this.getToken(VtlParser.MUL, i);
		}
	}

	constructor(ctx: DpRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDataPointVar) {
			listener.enterDataPointVar(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDataPointVar) {
			listener.exitDataPointVar(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDataPointVar) {
			return visitor.visitDataPointVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class HrRulesetContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_hrRuleset;
	}

	public copyFrom(ctx: HrRulesetContext): void {
		super.copyFrom(ctx);
	}
}

export class HrRulesetTypeContext extends HrRulesetContext {
	public HIERARCHICAL(): TerminalNode {
		return this.getToken(VtlParser.HIERARCHICAL, 0);
	}

	constructor(ctx: HrRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHrRulesetType) {
			listener.enterHrRulesetType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHrRulesetType) {
			listener.exitHrRulesetType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHrRulesetType) {
			return visitor.visitHrRulesetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class HrRulesetVdTypeContext extends HrRulesetContext {
	public _vdName: Token | undefined;

	public HIERARCHICAL_ON_VD(): TerminalNode {
		return this.getToken(VtlParser.HIERARCHICAL_ON_VD, 0);
	}

	public GLPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.GLPAREN, 0);
	}

	public GRPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.GRPAREN, 0);
	}

	public IDENTIFIER(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.IDENTIFIER, 0);
	}

	public LPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LPAREN, 0);
	}

	public valueDomainName(): ValueDomainNameContext[];
	public valueDomainName(i: number): ValueDomainNameContext;
	public valueDomainName(
		i?: number
	): ValueDomainNameContext | ValueDomainNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueDomainNameContext);
		} else {
			return this.getRuleContext(i, ValueDomainNameContext);
		}
	}

	public RPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RPAREN, 0);
	}

	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MUL);
		} else {
			return this.getToken(VtlParser.MUL, i);
		}
	}

	constructor(ctx: HrRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHrRulesetVdType) {
			listener.enterHrRulesetVdType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHrRulesetVdType) {
			listener.exitHrRulesetVdType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHrRulesetVdType) {
			return visitor.visitHrRulesetVdType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class HrRulesetVarTypeContext extends HrRulesetContext {
	public _varName: VarIDContext | undefined;

	public HIERARCHICAL_ON_VAR(): TerminalNode {
		return this.getToken(VtlParser.HIERARCHICAL_ON_VAR, 0);
	}

	public GLPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.GLPAREN, 0);
	}

	public GRPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.GRPAREN, 0);
	}

	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
		}
	}

	public LPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LPAREN, 0);
	}

	public RPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RPAREN, 0);
	}

	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MUL);
		} else {
			return this.getToken(VtlParser.MUL, i);
		}
	}

	constructor(ctx: HrRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHrRulesetVarType) {
			listener.enterHrRulesetVarType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHrRulesetVarType) {
			listener.exitHrRulesetVarType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHrRulesetVarType) {
			return visitor.visitHrRulesetVarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ValueDomainNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_valueDomainName;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValueDomainName) {
			listener.enterValueDomainName(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValueDomainName) {
			listener.exitValueDomainName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValueDomainName) {
			return visitor.visitValueDomainName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RulesetIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_rulesetID;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRulesetID) {
			listener.enterRulesetID(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRulesetID) {
			listener.exitRulesetID(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRulesetID) {
			return visitor.visitRulesetID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RulesetSignatureContext extends ParserRuleContext {
	public signature(): SignatureContext[];
	public signature(i: number): SignatureContext;
	public signature(i?: number): SignatureContext | SignatureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignatureContext);
		} else {
			return this.getRuleContext(i, SignatureContext);
		}
	}

	public VALUE_DOMAIN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VALUE_DOMAIN, 0);
	}

	public VARIABLE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VARIABLE, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_rulesetSignature;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRulesetSignature) {
			listener.enterRulesetSignature(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRulesetSignature) {
			listener.exitRulesetSignature(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRulesetSignature) {
			return visitor.visitRulesetSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SignatureContext extends ParserRuleContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}

	public AS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.AS, 0);
	}

	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_signature;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSignature) {
			listener.enterSignature(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSignature) {
			listener.exitSignature(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSignature) {
			return visitor.visitSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RuleClauseDatapointContext extends ParserRuleContext {
	public ruleItemDatapoint(): RuleItemDatapointContext[];
	public ruleItemDatapoint(i: number): RuleItemDatapointContext;
	public ruleItemDatapoint(
		i?: number
	): RuleItemDatapointContext | RuleItemDatapointContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleItemDatapointContext);
		} else {
			return this.getRuleContext(i, RuleItemDatapointContext);
		}
	}

	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.EOL);
		} else {
			return this.getToken(VtlParser.EOL, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_ruleClauseDatapoint;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRuleClauseDatapoint) {
			listener.enterRuleClauseDatapoint(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRuleClauseDatapoint) {
			listener.exitRuleClauseDatapoint(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRuleClauseDatapoint) {
			return visitor.visitRuleClauseDatapoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RuleItemDatapointContext extends ParserRuleContext {
	public _ruleName: Token | undefined;
	public _antecedentContiditon: ExprComponentContext | undefined;
	public _consequentCondition: ExprComponentContext | undefined;

	public exprComponent(): ExprComponentContext[];
	public exprComponent(i: number): ExprComponentContext;
	public exprComponent(
		i?: number
	): ExprComponentContext | ExprComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprComponentContext);
		} else {
			return this.getRuleContext(i, ExprComponentContext);
		}
	}

	public WHEN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.WHEN, 0);
	}

	public THEN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.THEN, 0);
	}

	public erCode(): ErCodeContext | undefined {
		return this.tryGetRuleContext(0, ErCodeContext);
	}

	public erLevel(): ErLevelContext | undefined {
		return this.tryGetRuleContext(0, ErLevelContext);
	}

	public IDENTIFIER(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.IDENTIFIER, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_ruleItemDatapoint;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRuleItemDatapoint) {
			listener.enterRuleItemDatapoint(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRuleItemDatapoint) {
			listener.exitRuleItemDatapoint(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRuleItemDatapoint) {
			return visitor.visitRuleItemDatapoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RuleClauseHierarchicalContext extends ParserRuleContext {
	public ruleItemHierarchical(): RuleItemHierarchicalContext[];
	public ruleItemHierarchical(i: number): RuleItemHierarchicalContext;
	public ruleItemHierarchical(
		i?: number
	): RuleItemHierarchicalContext | RuleItemHierarchicalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleItemHierarchicalContext);
		} else {
			return this.getRuleContext(i, RuleItemHierarchicalContext);
		}
	}

	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.EOL);
		} else {
			return this.getToken(VtlParser.EOL, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_ruleClauseHierarchical;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRuleClauseHierarchical) {
			listener.enterRuleClauseHierarchical(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRuleClauseHierarchical) {
			listener.exitRuleClauseHierarchical(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRuleClauseHierarchical) {
			return visitor.visitRuleClauseHierarchical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RuleItemHierarchicalContext extends ParserRuleContext {
	public _ruleName: Token | undefined;

	public codeItemRelation(): CodeItemRelationContext {
		return this.getRuleContext(0, CodeItemRelationContext);
	}

	public erCode(): ErCodeContext | undefined {
		return this.tryGetRuleContext(0, ErCodeContext);
	}

	public erLevel(): ErLevelContext | undefined {
		return this.tryGetRuleContext(0, ErLevelContext);
	}

	public IDENTIFIER(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.IDENTIFIER, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_ruleItemHierarchical;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRuleItemHierarchical) {
			listener.enterRuleItemHierarchical(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRuleItemHierarchical) {
			listener.exitRuleItemHierarchical(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRuleItemHierarchical) {
			return visitor.visitRuleItemHierarchical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class HierRuleSignatureContext extends ParserRuleContext {
	public RULE(): TerminalNode {
		return this.getToken(VtlParser.RULE, 0);
	}

	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	public VALUE_DOMAIN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VALUE_DOMAIN, 0);
	}

	public VARIABLE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.VARIABLE, 0);
	}

	public CONDITION(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.CONDITION, 0);
	}

	public valueDomainSignature(): ValueDomainSignatureContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainSignatureContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_hierRuleSignature;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHierRuleSignature) {
			listener.enterHierRuleSignature(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHierRuleSignature) {
			listener.exitHierRuleSignature(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHierRuleSignature) {
			return visitor.visitHierRuleSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ValueDomainSignatureContext extends ParserRuleContext {
	public signature(): SignatureContext[];
	public signature(i: number): SignatureContext;
	public signature(i?: number): SignatureContext | SignatureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignatureContext);
		} else {
			return this.getRuleContext(i, SignatureContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_valueDomainSignature;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValueDomainSignature) {
			listener.enterValueDomainSignature(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValueDomainSignature) {
			listener.exitValueDomainSignature(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValueDomainSignature) {
			return visitor.visitValueDomainSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CodeItemRelationContext extends ParserRuleContext {
	public _codeItemRef: Token | undefined;

	public codeItemRelationClause(): CodeItemRelationClauseContext[];
	public codeItemRelationClause(i: number): CodeItemRelationClauseContext;
	public codeItemRelationClause(
		i?: number
	): CodeItemRelationClauseContext | CodeItemRelationClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeItemRelationClauseContext);
		} else {
			return this.getRuleContext(i, CodeItemRelationClauseContext);
		}
	}

	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	public WHEN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.WHEN, 0);
	}

	public exprComponent(): ExprComponentContext | undefined {
		return this.tryGetRuleContext(0, ExprComponentContext);
	}

	public THEN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.THEN, 0);
	}

	public comparisonOperand(): ComparisonOperandContext | undefined {
		return this.tryGetRuleContext(0, ComparisonOperandContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_codeItemRelation;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCodeItemRelation) {
			listener.enterCodeItemRelation(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCodeItemRelation) {
			listener.exitCodeItemRelation(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCodeItemRelation) {
			return visitor.visitCodeItemRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CodeItemRelationClauseContext extends ParserRuleContext {
	public _opAdd: Token | undefined;
	public _rightCodeItem: Token | undefined;
	public _rightCondition: ExprComponentContext | undefined;

	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	public QLPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.QLPAREN, 0);
	}

	public QRPAREN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.QRPAREN, 0);
	}

	public exprComponent(): ExprComponentContext | undefined {
		return this.tryGetRuleContext(0, ExprComponentContext);
	}

	public PLUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.PLUS, 0);
	}

	public MINUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MINUS, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_codeItemRelationClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCodeItemRelationClause) {
			listener.enterCodeItemRelationClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCodeItemRelationClause) {
			listener.exitCodeItemRelationClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCodeItemRelationClause) {
			return visitor.visitCodeItemRelationClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ScalarTypeConstraintContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_scalarTypeConstraint;
	}

	public copyFrom(ctx: ScalarTypeConstraintContext): void {
		super.copyFrom(ctx);
	}
}

export class ConditionConstraintContext extends ScalarTypeConstraintContext {
	public QLPAREN(): TerminalNode {
		return this.getToken(VtlParser.QLPAREN, 0);
	}

	public exprComponent(): ExprComponentContext {
		return this.getRuleContext(0, ExprComponentContext);
	}

	public QRPAREN(): TerminalNode {
		return this.getToken(VtlParser.QRPAREN, 0);
	}

	constructor(ctx: ScalarTypeConstraintContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConditionConstraint) {
			listener.enterConditionConstraint(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConditionConstraint) {
			listener.exitConditionConstraint(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConditionConstraint) {
			return visitor.visitConditionConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RangeConstraintContext extends ScalarTypeConstraintContext {
	public GLPAREN(): TerminalNode {
		return this.getToken(VtlParser.GLPAREN, 0);
	}

	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}

	public GRPAREN(): TerminalNode {
		return this.getToken(VtlParser.GRPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(ctx: ScalarTypeConstraintContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRangeConstraint) {
			listener.enterRangeConstraint(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRangeConstraint) {
			listener.exitRangeConstraint(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRangeConstraint) {
			return visitor.visitRangeConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CompConstraintContext extends ParserRuleContext {
	public componentType(): ComponentTypeContext {
		return this.getRuleContext(0, ComponentTypeContext);
	}

	public componentID(): ComponentIDContext | undefined {
		return this.tryGetRuleContext(0, ComponentIDContext);
	}

	public multModifier(): MultModifierContext | undefined {
		return this.tryGetRuleContext(0, MultModifierContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_compConstraint;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCompConstraint) {
			listener.enterCompConstraint(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCompConstraint) {
			listener.exitCompConstraint(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCompConstraint) {
			return visitor.visitCompConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MultModifierContext extends ParserRuleContext {
	public OPTIONAL(): TerminalNode {
		return this.getToken(VtlParser.OPTIONAL, 0);
	}

	public PLUS(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.PLUS, 0);
	}

	public MUL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MUL, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_multModifier;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterMultModifier) {
			listener.enterMultModifier(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitMultModifier) {
			listener.exitMultModifier(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitMultModifier) {
			return visitor.visitMultModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ValidationOutputContext extends ParserRuleContext {
	public INVALID(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.INVALID, 0);
	}

	public ALL_MEASURES(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ALL_MEASURES, 0);
	}

	public ALL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ALL, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_validationOutput;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationOutput) {
			listener.enterValidationOutput(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationOutput) {
			listener.exitValidationOutput(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationOutput) {
			return visitor.visitValidationOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ValidationModeContext extends ParserRuleContext {
	public NON_NULL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NON_NULL, 0);
	}

	public NON_ZERO(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NON_ZERO, 0);
	}

	public PARTIAL_NULL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.PARTIAL_NULL, 0);
	}

	public PARTIAL_ZERO(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.PARTIAL_ZERO, 0);
	}

	public ALWAYS_NULL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ALWAYS_NULL, 0);
	}

	public ALWAYS_ZERO(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ALWAYS_ZERO, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_validationMode;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationMode) {
			listener.enterValidationMode(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationMode) {
			listener.exitValidationMode(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationMode) {
			return visitor.visitValidationMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConditionClauseContext extends ParserRuleContext {
	public CONDITION(): TerminalNode {
		return this.getToken(VtlParser.CONDITION, 0);
	}

	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_conditionClause;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConditionClause) {
			listener.enterConditionClause(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConditionClause) {
			listener.exitConditionClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConditionClause) {
			return visitor.visitConditionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InputModeContext extends ParserRuleContext {
	public DATASET(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DATASET, 0);
	}

	public DATASET_PRIORITY(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DATASET_PRIORITY, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_inputMode;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInputMode) {
			listener.enterInputMode(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInputMode) {
			listener.exitInputMode(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInputMode) {
			return visitor.visitInputMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ImbalanceExprContext extends ParserRuleContext {
	public IMBALANCE(): TerminalNode {
		return this.getToken(VtlParser.IMBALANCE, 0);
	}

	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_imbalanceExpr;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterImbalanceExpr) {
			listener.enterImbalanceExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitImbalanceExpr) {
			listener.exitImbalanceExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitImbalanceExpr) {
			return visitor.visitImbalanceExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InputModeHierarchyContext extends ParserRuleContext {
	public RULE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RULE, 0);
	}

	public DATASET(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DATASET, 0);
	}

	public RULE_PRIORITY(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.RULE_PRIORITY, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_inputModeHierarchy;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInputModeHierarchy) {
			listener.enterInputModeHierarchy(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInputModeHierarchy) {
			listener.exitInputModeHierarchy(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInputModeHierarchy) {
			return visitor.visitInputModeHierarchy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OutputModeHierarchyContext extends ParserRuleContext {
	public COMPUTED(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COMPUTED, 0);
	}

	public ALL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ALL, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_outputModeHierarchy;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOutputModeHierarchy) {
			listener.enterOutputModeHierarchy(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOutputModeHierarchy) {
			listener.exitOutputModeHierarchy(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOutputModeHierarchy) {
			return visitor.visitOutputModeHierarchy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AliasContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_alias;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAlias) {
			listener.enterAlias(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAlias) {
			listener.exitAlias(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAlias) {
			return visitor.visitAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VarIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_varID;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterVarID) {
			listener.enterVarID(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitVarID) {
			listener.exitVarID(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitVarID) {
			return visitor.visitVarID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SimpleComponentIdContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_simpleComponentId;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSimpleComponentId) {
			listener.enterSimpleComponentId(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSimpleComponentId) {
			listener.exitSimpleComponentId(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSimpleComponentId) {
			return visitor.visitSimpleComponentId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComponentIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}

	public MEMBERSHIP(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MEMBERSHIP, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_componentID;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComponentID) {
			listener.enterComponentID(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComponentID) {
			listener.exitComponentID(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComponentID) {
			return visitor.visitComponentID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ListsContext extends ParserRuleContext {
	public GLPAREN(): TerminalNode {
		return this.getToken(VtlParser.GLPAREN, 0);
	}

	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}

	public GRPAREN(): TerminalNode {
		return this.getToken(VtlParser.GRPAREN, 0);
	}

	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_lists;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLists) {
			listener.enterLists(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLists) {
			listener.exitLists(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLists) {
			return visitor.visitLists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ErCodeContext extends ParserRuleContext {
	public ERRORCODE(): TerminalNode {
		return this.getToken(VtlParser.ERRORCODE, 0);
	}

	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_erCode;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterErCode) {
			listener.enterErCode(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitErCode) {
			listener.exitErCode(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitErCode) {
			return visitor.visitErCode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ErLevelContext extends ParserRuleContext {
	public ERRORLEVEL(): TerminalNode {
		return this.getToken(VtlParser.ERRORLEVEL, 0);
	}

	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_erLevel;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterErLevel) {
			listener.enterErLevel(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitErLevel) {
			listener.exitErLevel(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitErLevel) {
			return visitor.visitErLevel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComparisonOperandContext extends ParserRuleContext {
	public MT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MT, 0);
	}

	public ME(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ME, 0);
	}

	public LE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LE, 0);
	}

	public LT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.LT, 0);
	}

	public EQ(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.EQ, 0);
	}

	public NEQ(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NEQ, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_comparisonOperand;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComparisonOperand) {
			listener.enterComparisonOperand(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComparisonOperand) {
			listener.exitComparisonOperand(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComparisonOperand) {
			return visitor.visitComparisonOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OptionalExprContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}

	public OPTIONAL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.OPTIONAL, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_optionalExpr;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOptionalExpr) {
			listener.enterOptionalExpr(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOptionalExpr) {
			listener.exitOptionalExpr(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOptionalExpr) {
			return visitor.visitOptionalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OptionalExprComponentContext extends ParserRuleContext {
	public exprComponent(): ExprComponentContext | undefined {
		return this.tryGetRuleContext(0, ExprComponentContext);
	}

	public OPTIONAL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.OPTIONAL, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_optionalExprComponent;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOptionalExprComponent) {
			listener.enterOptionalExprComponent(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOptionalExprComponent) {
			listener.exitOptionalExprComponent(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOptionalExprComponent) {
			return visitor.visitOptionalExprComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComponentRoleContext extends ParserRuleContext {
	public MEASURE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.MEASURE, 0);
	}

	public COMPONENT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.COMPONENT, 0);
	}

	public DIMENSION(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DIMENSION, 0);
	}

	public ATTRIBUTE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ATTRIBUTE, 0);
	}

	public viralAttribute(): ViralAttributeContext | undefined {
		return this.tryGetRuleContext(0, ViralAttributeContext);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_componentRole;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComponentRole) {
			listener.enterComponentRole(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComponentRole) {
			listener.exitComponentRole(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComponentRole) {
			return visitor.visitComponentRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ViralAttributeContext extends ParserRuleContext {
	public VIRAL(): TerminalNode {
		return this.getToken(VtlParser.VIRAL, 0);
	}

	public ATTRIBUTE(): TerminalNode {
		return this.getToken(VtlParser.ATTRIBUTE, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_viralAttribute;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterViralAttribute) {
			listener.enterViralAttribute(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitViralAttribute) {
			listener.exitViralAttribute(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitViralAttribute) {
			return visitor.visitViralAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ValueDomainIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_valueDomainID;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValueDomainID) {
			listener.enterValueDomainID(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValueDomainID) {
			listener.exitValueDomainID(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValueDomainID) {
			return visitor.visitValueDomainID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OperatorIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_operatorID;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOperatorID) {
			listener.enterOperatorID(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOperatorID) {
			listener.exitOperatorID(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOperatorID) {
			return visitor.visitOperatorID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RoutineNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode {
		return this.getToken(VtlParser.IDENTIFIER, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_routineName;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRoutineName) {
			listener.enterRoutineName(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRoutineName) {
			listener.exitRoutineName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRoutineName) {
			return visitor.visitRoutineName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConstantContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.INTEGER_CONSTANT, 0);
	}

	public NUMBER_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NUMBER_CONSTANT, 0);
	}

	public BOOLEAN_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.BOOLEAN_CONSTANT, 0);
	}

	public STRING_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STRING_CONSTANT, 0);
	}

	public NULL_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NULL_CONSTANT, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_constant;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BasicScalarTypeContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.STRING, 0);
	}

	public INTEGER(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.INTEGER, 0);
	}

	public NUMBER(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.NUMBER, 0);
	}

	public BOOLEAN(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.BOOLEAN, 0);
	}

	public DATE(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DATE, 0);
	}

	public TIME(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.TIME, 0);
	}

	public TIME_PERIOD(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.TIME_PERIOD, 0);
	}

	public DURATION(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.DURATION, 0);
	}

	public SCALAR(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.SCALAR, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_basicScalarType;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBasicScalarType) {
			listener.enterBasicScalarType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBasicScalarType) {
			listener.exitBasicScalarType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBasicScalarType) {
			return visitor.visitBasicScalarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RetainTypeContext extends ParserRuleContext {
	public BOOLEAN_CONSTANT(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.BOOLEAN_CONSTANT, 0);
	}

	public ALL(): TerminalNode | undefined {
		return this.tryGetToken(VtlParser.ALL, 0);
	}

	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}

	// @Override
	public get ruleIndex(): number {
		return VtlParser.RULE_retainType;
	}

	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRetainType) {
			listener.enterRetainType(this);
		}
	}

	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRetainType) {
			listener.exitRetainType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRetainType) {
			return visitor.visitRetainType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
