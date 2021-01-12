// Generated from src/grammar/Vtl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { VtlListener } from "./VtlListener";
import { VtlVisitor } from "./VtlVisitor";


export class VtlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly ASSIGN = 19;
	public static readonly MEMBERSHIP = 20;
	public static readonly EVAL = 21;
	public static readonly IF = 22;
	public static readonly THEN = 23;
	public static readonly ELSE = 24;
	public static readonly USING = 25;
	public static readonly WITH = 26;
	public static readonly CURRENT_DATE = 27;
	public static readonly ON = 28;
	public static readonly DROP = 29;
	public static readonly KEEP = 30;
	public static readonly CALC = 31;
	public static readonly ATTRCALC = 32;
	public static readonly RENAME = 33;
	public static readonly AS = 34;
	public static readonly AND = 35;
	public static readonly OR = 36;
	public static readonly XOR = 37;
	public static readonly NOT = 38;
	public static readonly BETWEEN = 39;
	public static readonly IN = 40;
	public static readonly NOT_IN = 41;
	public static readonly ISNULL = 42;
	public static readonly EX = 43;
	public static readonly UNION = 44;
	public static readonly DIFF = 45;
	public static readonly SYMDIFF = 46;
	public static readonly INTERSECT = 47;
	public static readonly KEYS = 48;
	public static readonly CARTESIAN_PER = 49;
	public static readonly INTYEAR = 50;
	public static readonly INTMONTH = 51;
	public static readonly INTDAY = 52;
	public static readonly CHECK = 53;
	public static readonly EXISTS_IN = 54;
	public static readonly TO = 55;
	public static readonly RETURN = 56;
	public static readonly IMBALANCE = 57;
	public static readonly ERRORCODE = 58;
	public static readonly ALL = 59;
	public static readonly AGGREGATE = 60;
	public static readonly ERRORLEVEL = 61;
	public static readonly ORDER = 62;
	public static readonly BY = 63;
	public static readonly RANK = 64;
	public static readonly ASC = 65;
	public static readonly DESC = 66;
	public static readonly MIN = 67;
	public static readonly MAX = 68;
	public static readonly FIRST = 69;
	public static readonly LAST = 70;
	public static readonly INDEXOF = 71;
	public static readonly ABS = 72;
	public static readonly KEY = 73;
	public static readonly LN = 74;
	public static readonly LOG = 75;
	public static readonly TRUNC = 76;
	public static readonly ROUND = 77;
	public static readonly POWER = 78;
	public static readonly MOD = 79;
	public static readonly LEN = 80;
	public static readonly CONCAT = 81;
	public static readonly TRIM = 82;
	public static readonly UCASE = 83;
	public static readonly LCASE = 84;
	public static readonly SUBSTR = 85;
	public static readonly SUM = 86;
	public static readonly AVG = 87;
	public static readonly MEDIAN = 88;
	public static readonly COUNT = 89;
	public static readonly DIMENSION = 90;
	public static readonly MEASURE = 91;
	public static readonly ATTRIBUTE = 92;
	public static readonly FILTER = 93;
	public static readonly MERGE = 94;
	public static readonly EXP = 95;
	public static readonly ROLE = 96;
	public static readonly VIRAL = 97;
	public static readonly CHARSET_MATCH = 98;
	public static readonly TYPE = 99;
	public static readonly NVL = 100;
	public static readonly HIERARCHY = 101;
	public static readonly OPTIONAL = 102;
	public static readonly INVALID = 103;
	public static readonly VALUE_DOMAIN = 104;
	public static readonly VARIABLE = 105;
	public static readonly DATA = 106;
	public static readonly STRUCTURE = 107;
	public static readonly DATASET = 108;
	public static readonly OPERATOR = 109;
	public static readonly DEFINE = 110;
	public static readonly PUT_SYMBOL = 111;
	public static readonly DATAPOINT = 112;
	public static readonly HIERARCHICAL = 113;
	public static readonly RULESET = 114;
	public static readonly RULE = 115;
	public static readonly END = 116;
	public static readonly ALTER_DATASET = 117;
	public static readonly LTRIM = 118;
	public static readonly RTRIM = 119;
	public static readonly INSTR = 120;
	public static readonly REPLACE = 121;
	public static readonly CEIL = 122;
	public static readonly FLOOR = 123;
	public static readonly SQRT = 124;
	public static readonly ANY = 125;
	public static readonly SETDIFF = 126;
	public static readonly STDDEV_POP = 127;
	public static readonly STDDEV_SAMP = 128;
	public static readonly VAR_POP = 129;
	public static readonly VAR_SAMP = 130;
	public static readonly GROUP = 131;
	public static readonly EXCEPT = 132;
	public static readonly HAVING = 133;
	public static readonly FIRST_VALUE = 134;
	public static readonly LAST_VALUE = 135;
	public static readonly LAG = 136;
	public static readonly LEAD = 137;
	public static readonly RATIO_TO_REPORT = 138;
	public static readonly OVER = 139;
	public static readonly PRECEDING = 140;
	public static readonly FOLLOWING = 141;
	public static readonly UNBOUNDED = 142;
	public static readonly PARTITION = 143;
	public static readonly ROWS = 144;
	public static readonly RANGE = 145;
	public static readonly CURRENT = 146;
	public static readonly VALID = 147;
	public static readonly FILL_TIME_SERIES = 148;
	public static readonly FLOW_TO_STOCK = 149;
	public static readonly STOCK_TO_FLOW = 150;
	public static readonly TIMESHIFT = 151;
	public static readonly MEASURES = 152;
	public static readonly NO_MEASURES = 153;
	public static readonly CONDITION = 154;
	public static readonly BOOLEAN = 155;
	public static readonly DATE = 156;
	public static readonly TIME_PERIOD = 157;
	public static readonly NUMBER = 158;
	public static readonly STRING = 159;
	public static readonly INTEGER = 160;
	public static readonly FLOAT = 161;
	public static readonly LIST = 162;
	public static readonly RECORD = 163;
	public static readonly RESTRICT = 164;
	public static readonly YYYY = 165;
	public static readonly MM = 166;
	public static readonly DD = 167;
	public static readonly MAX_LENGTH = 168;
	public static readonly REGEXP = 169;
	public static readonly IS = 170;
	public static readonly WHEN = 171;
	public static readonly FROM = 172;
	public static readonly AGGREGATES = 173;
	public static readonly POINTS = 174;
	public static readonly POINT = 175;
	public static readonly TOTAL = 176;
	public static readonly PARTIAL = 177;
	public static readonly ALWAYS = 178;
	public static readonly INNER_JOIN = 179;
	public static readonly LEFT_JOIN = 180;
	public static readonly CROSS_JOIN = 181;
	public static readonly FULL_JOIN = 182;
	public static readonly MAPS_FROM = 183;
	public static readonly MAPS_TO = 184;
	public static readonly MAP_TO = 185;
	public static readonly MAP_FROM = 186;
	public static readonly RETURNS = 187;
	public static readonly PIVOT = 188;
	public static readonly UNPIVOT = 189;
	public static readonly SUBSPACE = 190;
	public static readonly APPLY = 191;
	public static readonly CONDITIONED = 192;
	public static readonly PERIOD_INDICATOR = 193;
	public static readonly SINGLE = 194;
	public static readonly DURATION = 195;
	public static readonly TIME_AGG = 196;
	public static readonly UNIT = 197;
	public static readonly VALUE = 198;
	public static readonly VALUEDOMAINS = 199;
	public static readonly VARIABLES = 200;
	public static readonly INPUT = 201;
	public static readonly OUTPUT = 202;
	public static readonly CAST = 203;
	public static readonly RULE_PRIORITY = 204;
	public static readonly DATASET_PRIORITY = 205;
	public static readonly DEFAULT = 206;
	public static readonly CHECK_DATAPOINT = 207;
	public static readonly CHECK_HIERARCHY = 208;
	public static readonly COMPUTED = 209;
	public static readonly NON_NULL = 210;
	public static readonly NON_ZERO = 211;
	public static readonly PARTIAL_NULL = 212;
	public static readonly PARTIAL_ZERO = 213;
	public static readonly ALWAYS_NULL = 214;
	public static readonly ALWAYS_ZERO = 215;
	public static readonly COMPONENTS = 216;
	public static readonly ALL_MEASURES = 217;
	public static readonly SCALAR = 218;
	public static readonly COMPONENT = 219;
	public static readonly DATAPOINT_ON_VD = 220;
	public static readonly DATAPOINT_ON_VAR = 221;
	public static readonly HIERARCHICAL_ON_VD = 222;
	public static readonly HIERARCHICAL_ON_VAR = 223;
	public static readonly SET = 224;
	public static readonly LANGUAGE = 225;
	public static readonly INTEGER_CONSTANT = 226;
	public static readonly POSITIVE_CONSTANT = 227;
	public static readonly NEGATIVE_CONSTANT = 228;
	public static readonly FLOAT_CONSTANT = 229;
	public static readonly BOOLEAN_CONSTANT = 230;
	public static readonly NULL_CONSTANT = 231;
	public static readonly STRING_CONSTANT = 232;
	public static readonly IDENTIFIER = 233;
	public static readonly DIGITS0_9 = 234;
	public static readonly MONTH = 235;
	public static readonly DAY = 236;
	public static readonly YEAR = 237;
	public static readonly WEEK = 238;
	public static readonly HOURS = 239;
	public static readonly MINUTES = 240;
	public static readonly SECONDS = 241;
	public static readonly DATE_FORMAT = 242;
	public static readonly TIME_FORMAT = 243;
	public static readonly TIME_UNIT = 244;
	public static readonly TIME = 245;
	public static readonly WS = 246;
	public static readonly EOL = 247;
	public static readonly ML_COMMENT = 248;
	public static readonly SL_COMMENT = 249;
	public static readonly COMPARISON_OP = 250;
	public static readonly FREQUENCY = 251;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_persistentAssignment = 2;
	public static readonly RULE_optionalExpr = 3;
	public static readonly RULE_expr = 4;
	public static readonly RULE_exprComplex = 5;
	public static readonly RULE_timeExpr = 6;
	public static readonly RULE_defHierarchical = 7;
	public static readonly RULE_ruleClauseHierarchical = 8;
	public static readonly RULE_ruleItemHierarchical = 9;
	public static readonly RULE_hierRuleSignature = 10;
	public static readonly RULE_valueDomainSignature = 11;
	public static readonly RULE_codeItemRelation = 12;
	public static readonly RULE_codeItemRelationClause = 13;
	public static readonly RULE_codeItemRef = 14;
	public static readonly RULE_defDatapoint = 15;
	public static readonly RULE_ruleClauseDatapoint = 16;
	public static readonly RULE_ruleItemDatapoint = 17;
	public static readonly RULE_rulesetSignature = 18;
	public static readonly RULE_varSignature = 19;
	public static readonly RULE_defExpr = 20;
	public static readonly RULE_defOperator = 21;
	public static readonly RULE_parameterItem = 22;
	public static readonly RULE_callFunction = 23;
	public static readonly RULE_exprAtom = 24;
	public static readonly RULE_ref = 25;
	public static readonly RULE_identifierList = 26;
	public static readonly RULE_lists = 27;
	public static readonly RULE_evalExpr = 28;
	public static readonly RULE_castExpr = 29;
	public static readonly RULE_periodExpr = 30;
	public static readonly RULE_timeShiftExpr = 31;
	public static readonly RULE_timeSeriesExpr = 32;
	public static readonly RULE_timeAggExpr = 33;
	public static readonly RULE_validationExpr = 34;
	public static readonly RULE_validationDatapoint = 35;
	public static readonly RULE_validationHierarchical = 36;
	public static readonly RULE_erCode = 37;
	public static readonly RULE_erLevel = 38;
	public static readonly RULE_hierarchyExpr = 39;
	public static readonly RULE_datasetClause = 40;
	public static readonly RULE_anFunctionClause = 41;
	public static readonly RULE_partitionByClause = 42;
	public static readonly RULE_orderByClause = 43;
	public static readonly RULE_windowingClause = 44;
	public static readonly RULE_limitClauseItem = 45;
	public static readonly RULE_joinExpr = 46;
	public static readonly RULE_joinClause = 47;
	public static readonly RULE_joinBody = 48;
	public static readonly RULE_joinCalcClause = 49;
	public static readonly RULE_joinCalcClauseItem = 50;
	public static readonly RULE_joinCalcExpr = 51;
	public static readonly RULE_joinAggClause = 52;
	public static readonly RULE_joinAggClauseItem = 53;
	public static readonly RULE_joinAggExpr = 54;
	public static readonly RULE_joinKeepClause = 55;
	public static readonly RULE_joinDropClause = 56;
	public static readonly RULE_joinFilterClause = 57;
	public static readonly RULE_joinRenameClause = 58;
	public static readonly RULE_joinApplyClause = 59;
	public static readonly RULE_anFunction = 60;
	public static readonly RULE_aggregateClause = 61;
	public static readonly RULE_aggrFunctionClause = 62;
	public static readonly RULE_getFiltersClause = 63;
	public static readonly RULE_getFilterClause = 64;
	public static readonly RULE_aggrClause = 65;
	public static readonly RULE_filterClause = 66;
	public static readonly RULE_renameClause = 67;
	public static readonly RULE_aggrFunction = 68;
	public static readonly RULE_calcClause = 69;
	public static readonly RULE_calcClauseItem = 70;
	public static readonly RULE_calcExpr = 71;
	public static readonly RULE_dropClause = 72;
	public static readonly RULE_dropClauseItem = 73;
	public static readonly RULE_keepClause = 74;
	public static readonly RULE_keepClauseItem = 75;
	public static readonly RULE_unpivotExpr = 76;
	public static readonly RULE_pivotExpr = 77;
	public static readonly RULE_subspaceExpr = 78;
	public static readonly RULE_inBetweenClause = 79;
	public static readonly RULE_setExpr = 80;
	public static readonly RULE_subscriptExpr = 81;
	public static readonly RULE_aggrInvocation = 82;
	public static readonly RULE_aggrInvocationCompExpr = 83;
	public static readonly RULE_aggrFunctionName = 84;
	public static readonly RULE_groupingClause = 85;
	public static readonly RULE_havingClause = 86;
	public static readonly RULE_returnAll = 87;
	public static readonly RULE_componentRole = 88;
	public static readonly RULE_viralAttribute = 89;
	public static readonly RULE_logBase = 90;
	public static readonly RULE_exponent = 91;
	public static readonly RULE_persistentDatasetID = 92;
	public static readonly RULE_datasetID = 93;
	public static readonly RULE_rulesetID = 94;
	public static readonly RULE_varID = 95;
	public static readonly RULE_componentID = 96;
	public static readonly RULE_operatorID = 97;
	public static readonly RULE_routineName = 98;
	public static readonly RULE_joinKeyword = 99;
	public static readonly RULE_groupKeyword = 100;
	public static readonly RULE_constant = 101;
	public static readonly RULE_componentType2 = 102;
	public static readonly RULE_scalarType = 103;
	public static readonly RULE_basicScalarType = 104;
	public static readonly RULE_valueDomainName = 105;
	public static readonly RULE_setName = 106;
	public static readonly RULE_scalarTypeConstraint = 107;
	public static readonly RULE_dataType = 108;
	public static readonly RULE_componentType = 109;
	public static readonly RULE_datasetType = 110;
	public static readonly RULE_compConstraint = 111;
	public static readonly RULE_multModifier = 112;
	public static readonly RULE_rulesetType = 113;
	public static readonly RULE_dpRuleset = 114;
	public static readonly RULE_hrRuleset = 115;
	public static readonly RULE_prodValueDomains = 116;
	public static readonly RULE_prodVariables = 117;
	public static readonly RULE_operatorType = 118;
	public static readonly RULE_inputParameterType = 119;
	public static readonly RULE_outputParameterType = 120;
	public static readonly RULE_scalarSetType = 121;
	public static readonly RULE_retainType = 122;
	public static readonly RULE_defineDatapointRuleset = 123;
	public static readonly RULE_defineHierarchicalRuleset = 124;
	public static readonly RULE_endDatapointRuleset = 125;
	public static readonly RULE_endHierarchicalRuleset = 126;
	public static readonly RULE_defineDataStructure = 127;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "persistentAssignment", "optionalExpr", "expr",
		"exprComplex", "timeExpr", "defHierarchical", "ruleClauseHierarchical",
		"ruleItemHierarchical", "hierRuleSignature", "valueDomainSignature", "codeItemRelation",
		"codeItemRelationClause", "codeItemRef", "defDatapoint", "ruleClauseDatapoint",
		"ruleItemDatapoint", "rulesetSignature", "varSignature", "defExpr", "defOperator",
		"parameterItem", "callFunction", "exprAtom", "ref", "identifierList",
		"lists", "evalExpr", "castExpr", "periodExpr", "timeShiftExpr", "timeSeriesExpr",
		"timeAggExpr", "validationExpr", "validationDatapoint", "validationHierarchical",
		"erCode", "erLevel", "hierarchyExpr", "datasetClause", "anFunctionClause",
		"partitionByClause", "orderByClause", "windowingClause", "limitClauseItem",
		"joinExpr", "joinClause", "joinBody", "joinCalcClause", "joinCalcClauseItem",
		"joinCalcExpr", "joinAggClause", "joinAggClauseItem", "joinAggExpr", "joinKeepClause",
		"joinDropClause", "joinFilterClause", "joinRenameClause", "joinApplyClause",
		"anFunction", "aggregateClause", "aggrFunctionClause", "getFiltersClause",
		"getFilterClause", "aggrClause", "filterClause", "renameClause", "aggrFunction",
		"calcClause", "calcClauseItem", "calcExpr", "dropClause", "dropClauseItem",
		"keepClause", "keepClauseItem", "unpivotExpr", "pivotExpr", "subspaceExpr",
		"inBetweenClause", "setExpr", "subscriptExpr", "aggrInvocation", "aggrInvocationCompExpr",
		"aggrFunctionName", "groupingClause", "havingClause", "returnAll", "componentRole",
		"viralAttribute", "logBase", "exponent", "persistentDatasetID", "datasetID",
		"rulesetID", "varID", "componentID", "operatorID", "routineName", "joinKeyword",
		"groupKeyword", "constant", "componentType2", "scalarType", "basicScalarType",
		"valueDomainName", "setName", "scalarTypeConstraint", "dataType", "componentType",
		"datasetType", "compConstraint", "multModifier", "rulesetType", "dpRuleset",
		"hrRuleset", "prodValueDomains", "prodVariables", "operatorType", "inputParameterType",
		"outputParameterType", "scalarSetType", "retainType", "defineDatapointRuleset",
		"defineHierarchicalRuleset", "endDatapointRuleset", "endHierarchicalRuleset",
		"defineDataStructure",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", "'<='",
		"'>='", "'='", "'<>'", "'('", "')'", "':'", "'{'", "'}'", "'->'", "':='",
		"'#'", "'eval'", "'if'", "'then'", "'else'", "'using'", "'with'", "'current_date'",
		"'on'", "'drop'", "'keep'", "'calc'", "'attrcalc'", "'rename'", "'as'",
		"'and'", "'or'", "'xor'", "'not'", "'between'", "'in'", "'not_in'", "'isnull'",
		"'ex'", "'union'", "'diff'", "'symdiff'", "'intersect'", "'keys'", "','",
		"'intyear'", "'intmonth'", "'intday'", "'check'", "'exists_in'", "'to'",
		"'return'", "'imbalance'", "'errorcode'", "'all'", "'aggr'", "'errorlevel'",
		"'order'", "'by'", "'rank'", "'asc'", "'desc'", "'min'", "'max'", "'first'",
		"'last'", "'indexof'", "'abs'", "'key'", "'ln'", "'log'", "'trunc'", "'round'",
		"'power'", "'mod'", "'length'", "'||'", "'trim'", "'upper'", "'lower'",
		"'substr'", "'sum'", "'avg'", "'median'", "'count'", "'identifier'", "'measure'",
		"'attribute'", "'filter'", "'merge'", "'exp'", "'role'", "'viral'", "'match_characters'",
		"'type'", "'nvl'", "'hierarchy'", "'_'", "'invalid'", "'valuedomain'",
		"'variable'", "'data'", "'structure'", "'dataset'", "'operator'", "'define'",
		"'<-'", "'datapoint'", "'hierarchical'", "'ruleset'", "'rule'", "'end'",
		"'alterDataset'", "'ltrim'", "'rtrim'", "'instr'", "'replace'", "'ceil'",
		"'floor'", "'sqrt'", "'any'", "'setdiff'", "'stddev_pop'", "'stddev_samp'",
		"'var_pop'", "'var_samp'", "'group'", "'except'", "'having'", "'first_value'",
		"'last_value'", "'lag'", "'lead'", "'ratio_to_report'", "'over'", "'preceding'",
		"'following'", "'unbounded'", "'partition'", "'rows'", "'range'", "'current'",
		"'valid'", "'fill_time_series'", "'flow_to_stock'", "'stock_to_flow'",
		"'timeshift'", "'measures'", "'no_measures'", "'condition'", "'boolean'",
		"'date'", "'time_period'", "'number'", "'string'", "'integer'", "'float'",
		"'list'", "'record'", "'restrict'", "'yyyy'", "'mm'", "'dd'", "'maxLength'",
		"'regexp'", "'is'", "'when'", "'from'", "'aggregates'", "'points'", "'point'",
		"'total'", "'partial'", "'always'", "'inner_join'", "'left_join'", "'cross_join'",
		"'full_join'", "'maps_from'", "'maps_to'", "'map_to'", "'map_from'", "'returns'",
		"'pivot'", "'unpivot'", "'sub'", "'apply'", "'conditioned'", "'period_indicator'",
		"'single'", "'duration'", "'time_agg'", "'unit'", "'Value'", "'valuedomains'",
		"'variables'", "'input'", "'output'", "'cast'", "'rule_priority'", "'dataset_priority'",
		"'default'", "'check_datapoint'", "'check_hierarchy'", "'computed'", "'non_null'",
		"'non_zero'", "'partial_null'", "'partial_zero'", "'always_null'", "'always_zero'",
		"'components'", "'all_measures'", "'scalar'", "'component'", "'datapoint_on_valuedomains'",
		"'datapoint_on_variables'", "'hierarchical_on_valuedomains'", "'hierarchical_on_variables'",
		"'set'", "'language'", undefined, undefined, undefined, undefined, undefined,
		"'null'", undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, "ASSIGN", "MEMBERSHIP",
		"EVAL", "IF", "THEN", "ELSE", "USING", "WITH", "CURRENT_DATE", "ON", "DROP",
		"KEEP", "CALC", "ATTRCALC", "RENAME", "AS", "AND", "OR", "XOR", "NOT",
		"BETWEEN", "IN", "NOT_IN", "ISNULL", "EX", "UNION", "DIFF", "SYMDIFF",
		"INTERSECT", "KEYS", "CARTESIAN_PER", "INTYEAR", "INTMONTH", "INTDAY",
		"CHECK", "EXISTS_IN", "TO", "RETURN", "IMBALANCE", "ERRORCODE", "ALL",
		"AGGREGATE", "ERRORLEVEL", "ORDER", "BY", "RANK", "ASC", "DESC", "MIN",
		"MAX", "FIRST", "LAST", "INDEXOF", "ABS", "KEY", "LN", "LOG", "TRUNC",
		"ROUND", "POWER", "MOD", "LEN", "CONCAT", "TRIM", "UCASE", "LCASE", "SUBSTR",
		"SUM", "AVG", "MEDIAN", "COUNT", "DIMENSION", "MEASURE", "ATTRIBUTE",
		"FILTER", "MERGE", "EXP", "ROLE", "VIRAL", "CHARSET_MATCH", "TYPE", "NVL",
		"HIERARCHY", "OPTIONAL", "INVALID", "VALUE_DOMAIN", "VARIABLE", "DATA",
		"STRUCTURE", "DATASET", "OPERATOR", "DEFINE", "PUT_SYMBOL", "DATAPOINT",
		"HIERARCHICAL", "RULESET", "RULE", "END", "ALTER_DATASET", "LTRIM", "RTRIM",
		"INSTR", "REPLACE", "CEIL", "FLOOR", "SQRT", "ANY", "SETDIFF", "STDDEV_POP",
		"STDDEV_SAMP", "VAR_POP", "VAR_SAMP", "GROUP", "EXCEPT", "HAVING", "FIRST_VALUE",
		"LAST_VALUE", "LAG", "LEAD", "RATIO_TO_REPORT", "OVER", "PRECEDING", "FOLLOWING",
		"UNBOUNDED", "PARTITION", "ROWS", "RANGE", "CURRENT", "VALID", "FILL_TIME_SERIES",
		"FLOW_TO_STOCK", "STOCK_TO_FLOW", "TIMESHIFT", "MEASURES", "NO_MEASURES",
		"CONDITION", "BOOLEAN", "DATE", "TIME_PERIOD", "NUMBER", "STRING", "INTEGER",
		"FLOAT", "LIST", "RECORD", "RESTRICT", "YYYY", "MM", "DD", "MAX_LENGTH",
		"REGEXP", "IS", "WHEN", "FROM", "AGGREGATES", "POINTS", "POINT", "TOTAL",
		"PARTIAL", "ALWAYS", "INNER_JOIN", "LEFT_JOIN", "CROSS_JOIN", "FULL_JOIN",
		"MAPS_FROM", "MAPS_TO", "MAP_TO", "MAP_FROM", "RETURNS", "PIVOT", "UNPIVOT",
		"SUBSPACE", "APPLY", "CONDITIONED", "PERIOD_INDICATOR", "SINGLE", "DURATION",
		"TIME_AGG", "UNIT", "VALUE", "VALUEDOMAINS", "VARIABLES", "INPUT", "OUTPUT",
		"CAST", "RULE_PRIORITY", "DATASET_PRIORITY", "DEFAULT", "CHECK_DATAPOINT",
		"CHECK_HIERARCHY", "COMPUTED", "NON_NULL", "NON_ZERO", "PARTIAL_NULL",
		"PARTIAL_ZERO", "ALWAYS_NULL", "ALWAYS_ZERO", "COMPONENTS", "ALL_MEASURES",
		"SCALAR", "COMPONENT", "DATAPOINT_ON_VD", "DATAPOINT_ON_VAR", "HIERARCHICAL_ON_VD",
		"HIERARCHICAL_ON_VAR", "SET", "LANGUAGE", "INTEGER_CONSTANT", "POSITIVE_CONSTANT",
		"NEGATIVE_CONSTANT", "FLOAT_CONSTANT", "BOOLEAN_CONSTANT", "NULL_CONSTANT",
		"STRING_CONSTANT", "IDENTIFIER", "DIGITS0_9", "MONTH", "DAY", "YEAR",
		"WEEK", "HOURS", "MINUTES", "SECONDS", "DATE_FORMAT", "TIME_FORMAT", "TIME_UNIT",
		"TIME", "WS", "EOL", "ML_COMMENT", "SL_COMMENT", "COMPARISON_OP", "FREQUENCY",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(VtlParser._LITERAL_NAMES, VtlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VtlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Vtl.g4"; }

	// @Override
	public get ruleNames(): string[] { return VtlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return VtlParser._serializedATN; }

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
			let _alt: number;
			this.state = 283;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 274;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 257;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.T__2) | (1 << VtlParser.T__3) | (1 << VtlParser.T__12) | (1 << VtlParser.EVAL) | (1 << VtlParser.IF) | (1 << VtlParser.CURRENT_DATE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VtlParser.NOT - 38)) | (1 << (VtlParser.BETWEEN - 38)) | (1 << (VtlParser.ISNULL - 38)) | (1 << (VtlParser.UNION - 38)) | (1 << (VtlParser.SYMDIFF - 38)) | (1 << (VtlParser.INTERSECT - 38)) | (1 << (VtlParser.CHECK - 38)) | (1 << (VtlParser.EXISTS_IN - 38)) | (1 << (VtlParser.RANK - 38)) | (1 << (VtlParser.MIN - 38)) | (1 << (VtlParser.MAX - 38)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (VtlParser.ABS - 72)) | (1 << (VtlParser.LN - 72)) | (1 << (VtlParser.LOG - 72)) | (1 << (VtlParser.TRUNC - 72)) | (1 << (VtlParser.ROUND - 72)) | (1 << (VtlParser.POWER - 72)) | (1 << (VtlParser.MOD - 72)) | (1 << (VtlParser.LEN - 72)) | (1 << (VtlParser.TRIM - 72)) | (1 << (VtlParser.UCASE - 72)) | (1 << (VtlParser.LCASE - 72)) | (1 << (VtlParser.SUBSTR - 72)) | (1 << (VtlParser.SUM - 72)) | (1 << (VtlParser.AVG - 72)) | (1 << (VtlParser.MEDIAN - 72)) | (1 << (VtlParser.COUNT - 72)) | (1 << (VtlParser.EXP - 72)) | (1 << (VtlParser.CHARSET_MATCH - 72)) | (1 << (VtlParser.NVL - 72)) | (1 << (VtlParser.HIERARCHY - 72)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (VtlParser.DEFINE - 110)) | (1 << (VtlParser.LTRIM - 110)) | (1 << (VtlParser.RTRIM - 110)) | (1 << (VtlParser.INSTR - 110)) | (1 << (VtlParser.REPLACE - 110)) | (1 << (VtlParser.CEIL - 110)) | (1 << (VtlParser.FLOOR - 110)) | (1 << (VtlParser.SQRT - 110)) | (1 << (VtlParser.SETDIFF - 110)) | (1 << (VtlParser.STDDEV_POP - 110)) | (1 << (VtlParser.STDDEV_SAMP - 110)) | (1 << (VtlParser.VAR_POP - 110)) | (1 << (VtlParser.VAR_SAMP - 110)) | (1 << (VtlParser.FIRST_VALUE - 110)) | (1 << (VtlParser.LAST_VALUE - 110)) | (1 << (VtlParser.LAG - 110)) | (1 << (VtlParser.LEAD - 110)) | (1 << (VtlParser.RATIO_TO_REPORT - 110)))) !== 0) || ((((_la - 148)) & ~0x1F) === 0 && ((1 << (_la - 148)) & ((1 << (VtlParser.FILL_TIME_SERIES - 148)) | (1 << (VtlParser.FLOW_TO_STOCK - 148)) | (1 << (VtlParser.STOCK_TO_FLOW - 148)) | (1 << (VtlParser.TIMESHIFT - 148)) | (1 << (VtlParser.INNER_JOIN - 148)))) !== 0) || ((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (VtlParser.LEFT_JOIN - 180)) | (1 << (VtlParser.CROSS_JOIN - 180)) | (1 << (VtlParser.FULL_JOIN - 180)) | (1 << (VtlParser.PERIOD_INDICATOR - 180)) | (1 << (VtlParser.TIME_AGG - 180)) | (1 << (VtlParser.CAST - 180)) | (1 << (VtlParser.CHECK_DATAPOINT - 180)) | (1 << (VtlParser.CHECK_HIERARCHY - 180)))) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (VtlParser.INTEGER_CONSTANT - 226)) | (1 << (VtlParser.FLOAT_CONSTANT - 226)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 226)) | (1 << (VtlParser.NULL_CONSTANT - 226)) | (1 << (VtlParser.STRING_CONSTANT - 226)) | (1 << (VtlParser.IDENTIFIER - 226)))) !== 0)) {
											{
												this.state = 256;
												this.statement();
											}
										}

										this.state = 262;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										while (_la === VtlParser.ML_COMMENT) {
											{
												{
													this.state = 259;
													this.match(VtlParser.ML_COMMENT);
												}
											}
											this.state = 264;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
										}
										this.state = 268;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										while (_la === VtlParser.SL_COMMENT) {
											{
												{
													this.state = 265;
													this.match(VtlParser.SL_COMMENT);
												}
											}
											this.state = 270;
											this._errHandler.sync(this);
											_la = this._input.LA(1);
										}
										this.state = 271;
										this.match(VtlParser.EOL);
									}
								}
							}
							this.state = 276;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
						}
						this.state = 278;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.T__2) | (1 << VtlParser.T__3) | (1 << VtlParser.T__12) | (1 << VtlParser.EVAL) | (1 << VtlParser.IF) | (1 << VtlParser.CURRENT_DATE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VtlParser.NOT - 38)) | (1 << (VtlParser.BETWEEN - 38)) | (1 << (VtlParser.ISNULL - 38)) | (1 << (VtlParser.UNION - 38)) | (1 << (VtlParser.SYMDIFF - 38)) | (1 << (VtlParser.INTERSECT - 38)) | (1 << (VtlParser.CHECK - 38)) | (1 << (VtlParser.EXISTS_IN - 38)) | (1 << (VtlParser.RANK - 38)) | (1 << (VtlParser.MIN - 38)) | (1 << (VtlParser.MAX - 38)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (VtlParser.ABS - 72)) | (1 << (VtlParser.LN - 72)) | (1 << (VtlParser.LOG - 72)) | (1 << (VtlParser.TRUNC - 72)) | (1 << (VtlParser.ROUND - 72)) | (1 << (VtlParser.POWER - 72)) | (1 << (VtlParser.MOD - 72)) | (1 << (VtlParser.LEN - 72)) | (1 << (VtlParser.TRIM - 72)) | (1 << (VtlParser.UCASE - 72)) | (1 << (VtlParser.LCASE - 72)) | (1 << (VtlParser.SUBSTR - 72)) | (1 << (VtlParser.SUM - 72)) | (1 << (VtlParser.AVG - 72)) | (1 << (VtlParser.MEDIAN - 72)) | (1 << (VtlParser.COUNT - 72)) | (1 << (VtlParser.EXP - 72)) | (1 << (VtlParser.CHARSET_MATCH - 72)) | (1 << (VtlParser.NVL - 72)) | (1 << (VtlParser.HIERARCHY - 72)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (VtlParser.DEFINE - 110)) | (1 << (VtlParser.LTRIM - 110)) | (1 << (VtlParser.RTRIM - 110)) | (1 << (VtlParser.INSTR - 110)) | (1 << (VtlParser.REPLACE - 110)) | (1 << (VtlParser.CEIL - 110)) | (1 << (VtlParser.FLOOR - 110)) | (1 << (VtlParser.SQRT - 110)) | (1 << (VtlParser.SETDIFF - 110)) | (1 << (VtlParser.STDDEV_POP - 110)) | (1 << (VtlParser.STDDEV_SAMP - 110)) | (1 << (VtlParser.VAR_POP - 110)) | (1 << (VtlParser.VAR_SAMP - 110)) | (1 << (VtlParser.FIRST_VALUE - 110)) | (1 << (VtlParser.LAST_VALUE - 110)) | (1 << (VtlParser.LAG - 110)) | (1 << (VtlParser.LEAD - 110)) | (1 << (VtlParser.RATIO_TO_REPORT - 110)))) !== 0) || ((((_la - 148)) & ~0x1F) === 0 && ((1 << (_la - 148)) & ((1 << (VtlParser.FILL_TIME_SERIES - 148)) | (1 << (VtlParser.FLOW_TO_STOCK - 148)) | (1 << (VtlParser.STOCK_TO_FLOW - 148)) | (1 << (VtlParser.TIMESHIFT - 148)) | (1 << (VtlParser.INNER_JOIN - 148)))) !== 0) || ((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (VtlParser.LEFT_JOIN - 180)) | (1 << (VtlParser.CROSS_JOIN - 180)) | (1 << (VtlParser.FULL_JOIN - 180)) | (1 << (VtlParser.PERIOD_INDICATOR - 180)) | (1 << (VtlParser.TIME_AGG - 180)) | (1 << (VtlParser.CAST - 180)) | (1 << (VtlParser.CHECK_DATAPOINT - 180)) | (1 << (VtlParser.CHECK_HIERARCHY - 180)))) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (VtlParser.INTEGER_CONSTANT - 226)) | (1 << (VtlParser.FLOAT_CONSTANT - 226)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 226)) | (1 << (VtlParser.NULL_CONSTANT - 226)) | (1 << (VtlParser.STRING_CONSTANT - 226)) | (1 << (VtlParser.IDENTIFIER - 226)))) !== 0)) {
							{
								this.state = 277;
								this.statement();
							}
						}

						this.state = 280;
						this.match(VtlParser.EOF);
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 281;
						this.match(VtlParser.ML_COMMENT);
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 282;
						this.match(VtlParser.SL_COMMENT);
					}
					break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, VtlParser.RULE_statement);
		try {
			this.state = 292;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						{
							this.state = 288;
							this._errHandler.sync(this);
							switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
								case 1:
									{
										this.state = 285;
										this.varID();
										this.state = 286;
										this.match(VtlParser.ASSIGN);
									}
									break;
							}
							this.state = 290;
							this.expr(0);
						}
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 291;
						this.persistentAssignment();
					}
					break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public persistentAssignment(): PersistentAssignmentContext {
		let _localctx: PersistentAssignmentContext = new PersistentAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, VtlParser.RULE_persistentAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 294;
				this.varID();
				this.state = 295;
				this.match(VtlParser.PUT_SYMBOL);
				this.state = 296;
				this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalExpr(): OptionalExprContext {
		let _localctx: OptionalExprContext = new OptionalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, VtlParser.RULE_optionalExpr);
		try {
			this.state = 300;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.T__2:
				case VtlParser.T__3:
				case VtlParser.T__12:
				case VtlParser.EVAL:
				case VtlParser.IF:
				case VtlParser.CURRENT_DATE:
				case VtlParser.NOT:
				case VtlParser.BETWEEN:
				case VtlParser.ISNULL:
				case VtlParser.UNION:
				case VtlParser.SYMDIFF:
				case VtlParser.INTERSECT:
				case VtlParser.CHECK:
				case VtlParser.EXISTS_IN:
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
				case VtlParser.HIERARCHY:
				case VtlParser.DEFINE:
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
				case VtlParser.FLOAT_CONSTANT:
				case VtlParser.BOOLEAN_CONSTANT:
				case VtlParser.NULL_CONSTANT:
				case VtlParser.STRING_CONSTANT:
				case VtlParser.IDENTIFIER:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 298;
						this.expr(0);
					}
					break;
				case VtlParser.OPTIONAL:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 299;
						this.match(VtlParser.OPTIONAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, VtlParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 347;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
					case 1:
						{
							this.state = 303;
							this.exprAtom();
							this.state = 316;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
										{
											this.state = 304;
											this.match(VtlParser.T__0);
											this.state = 310;
											this._errHandler.sync(this);
											switch (this._input.LA(1)) {
												case VtlParser.DROP:
												case VtlParser.KEEP:
												case VtlParser.CALC:
												case VtlParser.RENAME:
												case VtlParser.AGGREGATE:
												case VtlParser.FILTER:
												case VtlParser.PIVOT:
												case VtlParser.UNPIVOT:
												case VtlParser.SUBSPACE:
													{
														this.state = 305;
														this.datasetClause();
													}
													break;
												case VtlParser.T__2:
												case VtlParser.T__3:
												case VtlParser.T__12:
												case VtlParser.EVAL:
												case VtlParser.IF:
												case VtlParser.CURRENT_DATE:
												case VtlParser.NOT:
												case VtlParser.BETWEEN:
												case VtlParser.ISNULL:
												case VtlParser.UNION:
												case VtlParser.SYMDIFF:
												case VtlParser.INTERSECT:
												case VtlParser.CHECK:
												case VtlParser.EXISTS_IN:
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
												case VtlParser.HIERARCHY:
												case VtlParser.DEFINE:
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
												case VtlParser.FLOAT_CONSTANT:
												case VtlParser.BOOLEAN_CONSTANT:
												case VtlParser.NULL_CONSTANT:
												case VtlParser.STRING_CONSTANT:
												case VtlParser.IDENTIFIER:
													{
														{
															this.state = 306;
															this.expr(0);
															this.state = 307;
															this.match(VtlParser.ASSIGN);
															this.state = 308;
															this.expr(0);
														}
													}
													break;
												default:
													throw new NoViableAltException(this);
											}
											this.state = 312;
											this.match(VtlParser.T__1);
										}
									}
								}
								this.state = 318;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
							}
							this.state = 321;
							this._errHandler.sync(this);
							switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
								case 1:
									{
										this.state = 319;
										this.match(VtlParser.MEMBERSHIP);
										this.state = 320;
										this.componentID();
									}
									break;
							}
						}
						break;

					case 2:
						{
							this.state = 323;
							_la = this._input.LA(1);
							if (!(_la === VtlParser.T__2 || _la === VtlParser.T__3 || _la === VtlParser.NOT)) {
								this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 324;
							this.expr(16);
						}
						break;

					case 3:
						{
							this.state = 325;
							this.match(VtlParser.EXISTS_IN);
							this.state = 326;
							this.match(VtlParser.T__12);
							this.state = 327;
							this.expr(0);
							this.state = 328;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 329;
							this.expr(0);
							this.state = 332;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.CARTESIAN_PER) {
								{
									this.state = 330;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 331;
									this.retainType();
								}
							}

							this.state = 334;
							this.match(VtlParser.T__13);
						}
						break;

					case 4:
						{
							this.state = 336;
							this.match(VtlParser.IF);
							this.state = 337;
							this.expr(0);
							this.state = 338;
							this.match(VtlParser.THEN);
							this.state = 339;
							this.expr(0);
							this.state = 340;
							this.match(VtlParser.ELSE);
							this.state = 341;
							this.expr(6);
						}
						break;

					case 5:
						{
							this.state = 343;
							this.exprComplex();
						}
						break;

					case 6:
						{
							this.state = 344;
							this.exprAtom();
						}
						break;

					case 7:
						{
							this.state = 345;
							this.constant();
						}
						break;

					case 8:
						{
							this.state = 346;
							this.match(VtlParser.IDENTIFIER);
						}
						break;
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							this.state = 382;
							this._errHandler.sync(this);
							switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
								case 1:
									{
										_localctx = new ExprContext(_parentctx, _parentState);
										this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
										this.state = 349;
										if (!(this.precpred(this._ctx, 15))) {
											throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
										}
										this.state = 350;
										_la = this._input.LA(1);
										if (!(_la === VtlParser.T__4 || _la === VtlParser.T__5)) {
											this._errHandler.recoverInline(this);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 351;
										this.expr(16);
									}
									break;

								case 2:
									{
										_localctx = new ExprContext(_parentctx, _parentState);
										this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
										this.state = 352;
										if (!(this.precpred(this._ctx, 14))) {
											throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
										}
										this.state = 353;
										_la = this._input.LA(1);
										if (!(_la === VtlParser.T__2 || _la === VtlParser.T__3)) {
											this._errHandler.recoverInline(this);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 354;
										this.expr(15);
									}
									break;

								case 3:
									{
										_localctx = new ExprContext(_parentctx, _parentState);
										this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
										this.state = 355;
										if (!(this.precpred(this._ctx, 13))) {
											throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
										}
										this.state = 356;
										_la = this._input.LA(1);
										if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.T__6) | (1 << VtlParser.T__7) | (1 << VtlParser.T__8) | (1 << VtlParser.T__9) | (1 << VtlParser.T__10) | (1 << VtlParser.T__11))) !== 0))) {
											this._errHandler.recoverInline(this);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 357;
										this.expr(14);
									}
									break;

								case 4:
									{
										_localctx = new ExprContext(_parentctx, _parentState);
										this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
										this.state = 358;
										if (!(this.precpred(this._ctx, 9))) {
											throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
										}
										this.state = 359;
										_la = this._input.LA(1);
										if (!(_la === VtlParser.T__10 || _la === VtlParser.T__11)) {
											this._errHandler.recoverInline(this);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 360;
										this.expr(10);
									}
									break;

								case 5:
									{
										_localctx = new ExprContext(_parentctx, _parentState);
										this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
										this.state = 361;
										if (!(this.precpred(this._ctx, 8))) {
											throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
										}
										this.state = 362;
										this.match(VtlParser.AND);
										this.state = 363;
										this.expr(9);
									}
									break;

								case 6:
									{
										_localctx = new ExprContext(_parentctx, _parentState);
										this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
										this.state = 364;
										if (!(this.precpred(this._ctx, 7))) {
											throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
										}
										this.state = 365;
										_la = this._input.LA(1);
										if (!(_la === VtlParser.OR || _la === VtlParser.XOR)) {
											this._errHandler.recoverInline(this);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 366;
										this.expr(8);
									}
									break;

								case 7:
									{
										_localctx = new ExprContext(_parentctx, _parentState);
										this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
										this.state = 367;
										if (!(this.precpred(this._ctx, 3))) {
											throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
										}
										this.state = 368;
										this.match(VtlParser.CONCAT);
										this.state = 369;
										this.expr(4);
									}
									break;

								case 8:
									{
										_localctx = new ExprContext(_parentctx, _parentState);
										this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
										this.state = 370;
										if (!(this.precpred(this._ctx, 12))) {
											throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
										}
										this.state = 371;
										_la = this._input.LA(1);
										if (!(_la === VtlParser.IN || _la === VtlParser.NOT_IN)) {
											this._errHandler.recoverInline(this);
										} else {
											if (this._input.LA(1) === Token.EOF) {
												this.matchedEOF = true;
											}

											this._errHandler.reportMatch(this);
											this.consume();
										}
										this.state = 374;
										this._errHandler.sync(this);
										switch (this._input.LA(1)) {
											case VtlParser.T__15:
												{
													this.state = 372;
													this.lists();
												}
												break;
											case VtlParser.IDENTIFIER:
												{
													this.state = 373;
													this.match(VtlParser.IDENTIFIER);
												}
												break;
											default:
												throw new NoViableAltException(this);
										}
									}
									break;

								case 9:
									{
										_localctx = new ExprContext(_parentctx, _parentState);
										this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
										this.state = 376;
										if (!(this.precpred(this._ctx, 11))) {
											throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
										}
										this.state = 377;
										this.match(VtlParser.EXISTS_IN);
										this.state = 378;
										this.expr(0);
										this.state = 380;
										this._errHandler.sync(this);
										switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
											case 1:
												{
													this.state = 379;
													this.match(VtlParser.ALL);
												}
												break;
										}
									}
									break;
							}
						}
					}
					this.state = 386;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprComplex(): ExprComplexContext {
		let _localctx: ExprComplexContext = new ExprComplexContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, VtlParser.RULE_exprComplex);
		try {
			this.state = 397;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
				case 1:
					_localctx = new ExprValidationExprContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 387;
						this.validationExpr();
					}
					break;

				case 2:
					_localctx = new DefinitionExpressionsContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 388;
						this.defExpr();
					}
					break;

				case 3:
					_localctx = new StandaloneAggregateFunctionContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 389;
						this.aggrInvocation();
					}
					break;

				case 4:
					_localctx = new ComponentExpressionwithAggrClauseContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 390;
						this.aggrInvocationCompExpr();
					}
					break;

				case 5:
					_localctx = new StandaloneAnalyticFunctionContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 391;
						this.anFunctionClause();
					}
					break;

				case 6:
					_localctx = new SimpleaggregateFunctionsContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 392;
						this.aggrFunction();
					}
					break;

				case 7:
					_localctx = new TimeexpressionsContext(_localctx);
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 393;
						this.timeExpr();
					}
					break;

				case 8:
					_localctx = new SetExpressionsContext(_localctx);
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 394;
						this.setExpr();
					}
					break;

				case 9:
					_localctx = new CallFunctionExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 9);
					{
						this.state = 395;
						this.callFunction();
					}
					break;

				case 10:
					_localctx = new JoinExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 10);
					{
						this.state = 396;
						this.joinExpr();
					}
					break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeExpr(): TimeExprContext {
		let _localctx: TimeExprContext = new TimeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, VtlParser.RULE_timeExpr);
		let _la: number;
		try {
			this.state = 408;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.FILL_TIME_SERIES:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 399;
						this.timeSeriesExpr();
					}
					break;
				case VtlParser.PERIOD_INDICATOR:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 400;
						this.periodExpr();
						this.state = 403;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
							case 1:
								{
									this.state = 401;
									_localctx._opComp = this._input.LT(1);
									_la = this._input.LA(1);
									if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.T__6) | (1 << VtlParser.T__7) | (1 << VtlParser.T__8) | (1 << VtlParser.T__9) | (1 << VtlParser.T__10) | (1 << VtlParser.T__11))) !== 0))) {
										_localctx._opComp = this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) === Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 402;
									this.expr(0);
								}
								break;
						}
					}
					break;
				case VtlParser.TIMESHIFT:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 405;
						this.timeShiftExpr();
					}
					break;
				case VtlParser.TIME_AGG:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 406;
						this.timeAggExpr();
					}
					break;
				case VtlParser.CURRENT_DATE:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 407;
						this.match(VtlParser.CURRENT_DATE);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defHierarchical(): DefHierarchicalContext {
		let _localctx: DefHierarchicalContext = new DefHierarchicalContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, VtlParser.RULE_defHierarchical);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 410;
				this.defineHierarchicalRuleset();
				this.state = 411;
				this.rulesetID();
				this.state = 412;
				this.match(VtlParser.T__12);
				this.state = 413;
				this.hierRuleSignature();
				this.state = 414;
				this.match(VtlParser.T__13);
				this.state = 415;
				this.match(VtlParser.IS);
				this.state = 416;
				this.ruleClauseHierarchical();
				this.state = 417;
				this.endHierarchicalRuleset();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleClauseHierarchical(): RuleClauseHierarchicalContext {
		let _localctx: RuleClauseHierarchicalContext = new RuleClauseHierarchicalContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, VtlParser.RULE_ruleClauseHierarchical);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 419;
				this.ruleItemHierarchical();
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.EOL) {
					{
						{
							this.state = 420;
							this.match(VtlParser.EOL);
							this.state = 421;
							this.ruleItemHierarchical();
						}
					}
					this.state = 426;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleItemHierarchical(): RuleItemHierarchicalContext {
		let _localctx: RuleItemHierarchicalContext = new RuleItemHierarchicalContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, VtlParser.RULE_ruleItemHierarchical);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 429;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
					case 1:
						{
							this.state = 427;
							this.match(VtlParser.IDENTIFIER);
							this.state = 428;
							this.match(VtlParser.T__14);
						}
						break;
				}
				this.state = 431;
				this.codeItemRelation();
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORCODE) {
					{
						this.state = 432;
						this.erCode();
					}
				}

				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORLEVEL) {
					{
						this.state = 435;
						this.erLevel();
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hierRuleSignature(): HierRuleSignatureContext {
		let _localctx: HierRuleSignatureContext = new HierRuleSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, VtlParser.RULE_hierRuleSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 438;
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
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.CONDITION) {
					{
						this.state = 439;
						this.valueDomainSignature();
					}
				}

				this.state = 442;
				this.match(VtlParser.RULE);
				this.state = 443;
				this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueDomainSignature(): ValueDomainSignatureContext {
		let _localctx: ValueDomainSignatureContext = new ValueDomainSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, VtlParser.RULE_valueDomainSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 445;
				this.match(VtlParser.CONDITION);
				this.state = 446;
				this.match(VtlParser.IDENTIFIER);
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.AS) {
					{
						this.state = 447;
						this.match(VtlParser.AS);
						this.state = 448;
						this.match(VtlParser.IDENTIFIER);
					}
				}

				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 451;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 452;
							this.match(VtlParser.IDENTIFIER);
							this.state = 455;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.AS) {
								{
									this.state = 453;
									this.match(VtlParser.AS);
									this.state = 454;
									this.match(VtlParser.IDENTIFIER);
								}
							}

						}
					}
					this.state = 461;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeItemRelation(): CodeItemRelationContext {
		let _localctx: CodeItemRelationContext = new CodeItemRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, VtlParser.RULE_codeItemRelation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.WHEN) {
					{
						this.state = 462;
						this.match(VtlParser.WHEN);
						this.state = 463;
						this.expr(0);
						this.state = 464;
						this.match(VtlParser.THEN);
					}
				}

				this.state = 468;
				this.codeItemRef();
				this.state = 469;
				this.codeItemRelationClause();
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.T__2 || _la === VtlParser.T__3 || _la === VtlParser.IDENTIFIER) {
					{
						{
							this.state = 470;
							this.codeItemRelationClause();
						}
					}
					this.state = 475;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeItemRelationClause(): CodeItemRelationClauseContext {
		let _localctx: CodeItemRelationClauseContext = new CodeItemRelationClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, VtlParser.RULE_codeItemRelationClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 477;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.T__2 || _la === VtlParser.T__3) {
					{
						this.state = 476;
						_localctx._opAdd = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.T__2 || _la === VtlParser.T__3)) {
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

				this.state = 479;
				this.match(VtlParser.IDENTIFIER);
				this.state = 484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.T__0) {
					{
						this.state = 480;
						this.match(VtlParser.T__0);
						this.state = 481;
						this.expr(0);
						this.state = 482;
						this.match(VtlParser.T__1);
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeItemRef(): CodeItemRefContext {
		let _localctx: CodeItemRefContext = new CodeItemRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, VtlParser.RULE_codeItemRef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 486;
				this.match(VtlParser.IDENTIFIER);
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.T__6) | (1 << VtlParser.T__7) | (1 << VtlParser.T__8) | (1 << VtlParser.T__9) | (1 << VtlParser.T__10))) !== 0)) {
					{
						this.state = 487;
						_localctx._opComp = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.T__6) | (1 << VtlParser.T__7) | (1 << VtlParser.T__8) | (1 << VtlParser.T__9) | (1 << VtlParser.T__10))) !== 0))) {
							_localctx._opComp = this._errHandler.recoverInline(this);
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
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defDatapoint(): DefDatapointContext {
		let _localctx: DefDatapointContext = new DefDatapointContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, VtlParser.RULE_defDatapoint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 490;
				this.defineDatapointRuleset();
				this.state = 491;
				this.rulesetID();
				this.state = 492;
				this.match(VtlParser.T__12);
				this.state = 493;
				this.rulesetSignature();
				this.state = 494;
				this.match(VtlParser.T__13);
				this.state = 495;
				this.match(VtlParser.IS);
				this.state = 496;
				this.ruleClauseDatapoint();
				this.state = 497;
				this.endDatapointRuleset();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleClauseDatapoint(): RuleClauseDatapointContext {
		let _localctx: RuleClauseDatapointContext = new RuleClauseDatapointContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, VtlParser.RULE_ruleClauseDatapoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 499;
				this.ruleItemDatapoint();
				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.EOL) {
					{
						{
							this.state = 500;
							this.match(VtlParser.EOL);
							this.state = 501;
							this.ruleItemDatapoint();
						}
					}
					this.state = 506;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleItemDatapoint(): RuleItemDatapointContext {
		let _localctx: RuleItemDatapointContext = new RuleItemDatapointContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, VtlParser.RULE_ruleItemDatapoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 509;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
					case 1:
						{
							this.state = 507;
							this.match(VtlParser.IDENTIFIER);
							this.state = 508;
							this.match(VtlParser.T__14);
						}
						break;
				}
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.WHEN) {
					{
						this.state = 511;
						this.match(VtlParser.WHEN);
						this.state = 512;
						this.expr(0);
						this.state = 513;
						this.match(VtlParser.THEN);
					}
				}

				this.state = 517;
				this.expr(0);
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORCODE) {
					{
						this.state = 518;
						this.erCode();
					}
				}

				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORLEVEL) {
					{
						this.state = 521;
						this.erLevel();
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rulesetSignature(): RulesetSignatureContext {
		let _localctx: RulesetSignatureContext = new RulesetSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, VtlParser.RULE_rulesetSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 524;
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
				this.state = 525;
				this.varSignature();
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 526;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 527;
							this.varSignature();
						}
					}
					this.state = 532;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varSignature(): VarSignatureContext {
		let _localctx: VarSignatureContext = new VarSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, VtlParser.RULE_varSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 533;
				this.varID();
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.AS) {
					{
						this.state = 534;
						this.match(VtlParser.AS);
						this.state = 535;
						this.match(VtlParser.IDENTIFIER);
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defExpr(): DefExprContext {
		let _localctx: DefExprContext = new DefExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, VtlParser.RULE_defExpr);
		try {
			this.state = 541;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 538;
						this.defOperator();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 539;
						this.defDatapoint();
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 540;
						this.defHierarchical();
					}
					break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defOperator(): DefOperatorContext {
		let _localctx: DefOperatorContext = new DefOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, VtlParser.RULE_defOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 543;
				this.match(VtlParser.DEFINE);
				this.state = 544;
				this.match(VtlParser.OPERATOR);
				this.state = 545;
				this.operatorID();
				this.state = 546;
				this.match(VtlParser.T__12);
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.IDENTIFIER) {
					{
						this.state = 547;
						this.parameterItem();
						this.state = 552;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.CARTESIAN_PER) {
							{
								{
									this.state = 548;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 549;
									this.parameterItem();
								}
							}
							this.state = 554;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 557;
				this.match(VtlParser.T__13);
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.RETURNS) {
					{
						this.state = 558;
						this.match(VtlParser.RETURNS);
						this.state = 559;
						this.dataType();
					}
				}

				this.state = 562;
				this.match(VtlParser.IS);
				this.state = 563;
				this.expr(0);
				this.state = 564;
				this.match(VtlParser.END);
				this.state = 565;
				this.match(VtlParser.OPERATOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterItem(): ParameterItemContext {
		let _localctx: ParameterItemContext = new ParameterItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, VtlParser.RULE_parameterItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 567;
				this.varID();
				this.state = 568;
				this.dataType();
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.DEFAULT) {
					{
						this.state = 569;
						this.match(VtlParser.DEFAULT);
						this.state = 570;
						this.constant();
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callFunction(): CallFunctionContext {
		let _localctx: CallFunctionContext = new CallFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, VtlParser.RULE_callFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 573;
				this.operatorID();
				this.state = 574;
				this.match(VtlParser.T__12);
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.OPTIONAL || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (VtlParser.INTEGER_CONSTANT - 226)) | (1 << (VtlParser.FLOAT_CONSTANT - 226)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 226)) | (1 << (VtlParser.NULL_CONSTANT - 226)) | (1 << (VtlParser.STRING_CONSTANT - 226)))) !== 0)) {
					{
						this.state = 577;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case VtlParser.INTEGER_CONSTANT:
							case VtlParser.FLOAT_CONSTANT:
							case VtlParser.BOOLEAN_CONSTANT:
							case VtlParser.NULL_CONSTANT:
							case VtlParser.STRING_CONSTANT:
								{
									this.state = 575;
									this.constant();
								}
								break;
							case VtlParser.OPTIONAL:
								{
									this.state = 576;
									this.match(VtlParser.OPTIONAL);
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
						this.state = 586;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.CARTESIAN_PER) {
							{
								{
									this.state = 579;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 582;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
										case VtlParser.INTEGER_CONSTANT:
										case VtlParser.FLOAT_CONSTANT:
										case VtlParser.BOOLEAN_CONSTANT:
										case VtlParser.NULL_CONSTANT:
										case VtlParser.STRING_CONSTANT:
											{
												this.state = 580;
												this.constant();
											}
											break;
										case VtlParser.OPTIONAL:
											{
												this.state = 581;
												this.match(VtlParser.OPTIONAL);
											}
											break;
										default:
											throw new NoViableAltException(this);
									}
								}
							}
							this.state = 588;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 591;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprAtom(): ExprAtomContext {
		let _localctx: ExprAtomContext = new ExprAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, VtlParser.RULE_exprAtom);
		let _la: number;
		try {
			this.state = 776;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.ROUND:
					_localctx = new RoundAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 593;
						this.match(VtlParser.ROUND);
						this.state = 594;
						this.match(VtlParser.T__12);
						this.state = 595;
						this.expr(0);
						this.state = 598;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.CARTESIAN_PER) {
							{
								this.state = 596;
								this.match(VtlParser.CARTESIAN_PER);
								this.state = 597;
								this.optionalExpr();
							}
						}

						this.state = 600;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.CEIL:
					_localctx = new CeilAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 602;
						this.match(VtlParser.CEIL);
						this.state = 603;
						this.match(VtlParser.T__12);
						this.state = 604;
						this.expr(0);
						this.state = 605;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.FLOOR:
					_localctx = new FloorAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 607;
						this.match(VtlParser.FLOOR);
						this.state = 608;
						this.match(VtlParser.T__12);
						this.state = 609;
						this.expr(0);
						this.state = 610;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.ABS:
					_localctx = new MinAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 612;
						this.match(VtlParser.ABS);
						this.state = 613;
						this.match(VtlParser.T__12);
						this.state = 614;
						this.expr(0);
						this.state = 615;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.EXP:
					_localctx = new ExpAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 617;
						this.match(VtlParser.EXP);
						this.state = 618;
						this.match(VtlParser.T__12);
						this.state = 619;
						this.expr(0);
						this.state = 620;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.LN:
					_localctx = new LnAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 622;
						this.match(VtlParser.LN);
						this.state = 623;
						this.match(VtlParser.T__12);
						this.state = 624;
						this.expr(0);
						this.state = 625;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.LOG:
					_localctx = new LogAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 627;
						this.match(VtlParser.LOG);
						this.state = 628;
						this.match(VtlParser.T__12);
						this.state = 629;
						this.expr(0);
						this.state = 630;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 631;
						this.expr(0);
						this.state = 632;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.TRUNC:
					_localctx = new LnAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 634;
						this.match(VtlParser.TRUNC);
						this.state = 635;
						this.match(VtlParser.T__12);
						this.state = 636;
						this.expr(0);
						this.state = 639;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.CARTESIAN_PER) {
							{
								this.state = 637;
								this.match(VtlParser.CARTESIAN_PER);
								this.state = 638;
								this.optionalExpr();
							}
						}

						this.state = 641;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.POWER:
					_localctx = new PowerAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 9);
					{
						this.state = 643;
						this.match(VtlParser.POWER);
						this.state = 644;
						this.match(VtlParser.T__12);
						this.state = 645;
						this.expr(0);
						this.state = 646;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 647;
						this.expr(0);
						this.state = 648;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.SQRT:
					_localctx = new SqrtAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 10);
					{
						this.state = 650;
						this.match(VtlParser.SQRT);
						this.state = 651;
						this.match(VtlParser.T__12);
						this.state = 652;
						this.expr(0);
						this.state = 653;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.LEN:
					_localctx = new LenAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 11);
					{
						this.state = 655;
						this.match(VtlParser.LEN);
						this.state = 656;
						this.match(VtlParser.T__12);
						this.state = 657;
						this.expr(0);
						this.state = 658;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.BETWEEN:
					_localctx = new BetweenAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 12);
					{
						this.state = 660;
						this.match(VtlParser.BETWEEN);
						this.state = 661;
						this.match(VtlParser.T__12);
						this.state = 662;
						this.expr(0);
						this.state = 663;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 664;
						this.expr(0);
						this.state = 665;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 666;
						this.expr(0);
						this.state = 667;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.TRIM:
					_localctx = new TrimAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 13);
					{
						this.state = 669;
						this.match(VtlParser.TRIM);
						this.state = 670;
						this.match(VtlParser.T__12);
						this.state = 671;
						this.expr(0);
						this.state = 672;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.LTRIM:
					_localctx = new LtrimAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 14);
					{
						this.state = 674;
						this.match(VtlParser.LTRIM);
						this.state = 675;
						this.match(VtlParser.T__12);
						this.state = 676;
						this.expr(0);
						this.state = 677;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.RTRIM:
					_localctx = new RtrimAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 15);
					{
						this.state = 679;
						this.match(VtlParser.RTRIM);
						this.state = 680;
						this.match(VtlParser.T__12);
						this.state = 681;
						this.expr(0);
						this.state = 682;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.UCASE:
					_localctx = new UcaseAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 16);
					{
						this.state = 684;
						this.match(VtlParser.UCASE);
						this.state = 685;
						this.match(VtlParser.T__12);
						this.state = 686;
						this.expr(0);
						this.state = 687;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.LCASE:
					_localctx = new LcaseAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 17);
					{
						this.state = 689;
						this.match(VtlParser.LCASE);
						this.state = 690;
						this.match(VtlParser.T__12);
						this.state = 691;
						this.expr(0);
						this.state = 692;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.SUBSTR:
					_localctx = new SubstrAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 18);
					{
						this.state = 694;
						this.match(VtlParser.SUBSTR);
						this.state = 695;
						this.match(VtlParser.T__12);
						this.state = 696;
						this.expr(0);
						this.state = 699;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
							case 1:
								{
									this.state = 697;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 698;
									this.optionalExpr();
								}
								break;
						}
						this.state = 703;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.CARTESIAN_PER) {
							{
								this.state = 701;
								this.match(VtlParser.CARTESIAN_PER);
								this.state = 702;
								this.optionalExpr();
							}
						}

						this.state = 705;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.INSTR:
					_localctx = new InstrAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 19);
					{
						this.state = 707;
						this.match(VtlParser.INSTR);
						this.state = 708;
						this.match(VtlParser.T__12);
						this.state = 709;
						this.expr(0);
						this.state = 710;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 711;
						this.expr(0);
						this.state = 714;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
							case 1:
								{
									this.state = 712;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 713;
									this.optionalExpr();
								}
								break;
						}
						this.state = 718;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.CARTESIAN_PER) {
							{
								this.state = 716;
								this.match(VtlParser.CARTESIAN_PER);
								this.state = 717;
								this.optionalExpr();
							}
						}

						this.state = 720;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.REPLACE:
					_localctx = new ReplaceAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 20);
					{
						this.state = 722;
						this.match(VtlParser.REPLACE);
						this.state = 723;
						this.match(VtlParser.T__12);
						this.state = 724;
						this.expr(0);
						this.state = 725;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 726;
						this.expr(0);
						this.state = 729;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.CARTESIAN_PER) {
							{
								this.state = 727;
								this.match(VtlParser.CARTESIAN_PER);
								this.state = 728;
								this.optionalExpr();
							}
						}

						this.state = 731;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.CHARSET_MATCH:
					_localctx = new CharsetMatchAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 21);
					{
						this.state = 733;
						this.match(VtlParser.CHARSET_MATCH);
						this.state = 734;
						this.match(VtlParser.T__12);
						this.state = 735;
						this.expr(0);
						this.state = 736;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 737;
						this.expr(0);
						this.state = 738;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.ISNULL:
					_localctx = new IsNullAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 22);
					{
						this.state = 740;
						this.match(VtlParser.ISNULL);
						this.state = 741;
						this.match(VtlParser.T__12);
						this.state = 742;
						this.expr(0);
						this.state = 743;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.NVL:
					_localctx = new NvlAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 23);
					{
						this.state = 745;
						this.match(VtlParser.NVL);
						this.state = 746;
						this.match(VtlParser.T__12);
						this.state = 747;
						this.expr(0);
						this.state = 748;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 749;
						this.expr(0);
						this.state = 750;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.MOD:
					_localctx = new ModAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 24);
					{
						this.state = 752;
						this.match(VtlParser.MOD);
						this.state = 753;
						this.match(VtlParser.T__12);
						this.state = 754;
						this.expr(0);
						this.state = 755;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 756;
						this.expr(0);
						this.state = 757;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.T__12:
				case VtlParser.INTEGER_CONSTANT:
				case VtlParser.FLOAT_CONSTANT:
				case VtlParser.BOOLEAN_CONSTANT:
				case VtlParser.NULL_CONSTANT:
				case VtlParser.STRING_CONSTANT:
				case VtlParser.IDENTIFIER:
					_localctx = new RefAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 25);
					{
						this.state = 759;
						this.ref();
					}
					break;
				case VtlParser.EVAL:
					_localctx = new EvalExprAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 26);
					{
						this.state = 760;
						this.evalExpr();
					}
					break;
				case VtlParser.CAST:
					_localctx = new CastExprAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 27);
					{
						this.state = 761;
						this.castExpr();
					}
					break;
				case VtlParser.HIERARCHY:
					_localctx = new HierarchyExprAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 28);
					{
						this.state = 762;
						this.hierarchyExpr();
					}
					break;
				case VtlParser.FLOW_TO_STOCK:
					_localctx = new FlowToStockAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 29);
					{
						this.state = 763;
						this.match(VtlParser.FLOW_TO_STOCK);
						this.state = 764;
						this.match(VtlParser.T__12);
						this.state = 765;
						this.expr(0);
						this.state = 766;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.STOCK_TO_FLOW:
					_localctx = new StockToFlowAtomContext(_localctx);
					this.enterOuterAlt(_localctx, 30);
					{
						this.state = 768;
						this.match(VtlParser.STOCK_TO_FLOW);
						this.state = 769;
						this.match(VtlParser.T__12);
						this.state = 770;
						this.expr(0);
						this.state = 771;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.CHECK_DATAPOINT:
					_localctx = new ValidateDPrulesetContext(_localctx);
					this.enterOuterAlt(_localctx, 31);
					{
						this.state = 773;
						this.validationDatapoint();
					}
					break;
				case VtlParser.CHECK_HIERARCHY:
					_localctx = new ValidateHRrulesetContext(_localctx);
					this.enterOuterAlt(_localctx, 32);
					{
						this.state = 774;
						this.validationHierarchical();
					}
					break;
				case VtlParser.CHECK:
					_localctx = new ValidationSimpleContext(_localctx);
					this.enterOuterAlt(_localctx, 33);
					{
						this.state = 775;
						this.validationExpr();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ref(): RefContext {
		let _localctx: RefContext = new RefContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, VtlParser.RULE_ref);
		try {
			this.state = 784;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.T__12:
					_localctx = new ParenthesisExprRefContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 778;
						this.match(VtlParser.T__12);
						this.state = 779;
						this.expr(0);
						this.state = 780;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.IDENTIFIER:
					_localctx = new VarIdRefContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 782;
						this.varID();
					}
					break;
				case VtlParser.INTEGER_CONSTANT:
				case VtlParser.FLOAT_CONSTANT:
				case VtlParser.BOOLEAN_CONSTANT:
				case VtlParser.NULL_CONSTANT:
				case VtlParser.STRING_CONSTANT:
					_localctx = new ConstantRefContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 783;
						this.constant();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, VtlParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 786;
				this.match(VtlParser.T__0);
				this.state = 787;
				this.match(VtlParser.IDENTIFIER);
				this.state = 792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 788;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 789;
							this.match(VtlParser.IDENTIFIER);
						}
					}
					this.state = 794;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 795;
				this.match(VtlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lists(): ListsContext {
		let _localctx: ListsContext = new ListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, VtlParser.RULE_lists);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 797;
				this.match(VtlParser.T__15);
				this.state = 798;
				this.constant();
				this.state = 803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 799;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 800;
							this.constant();
						}
					}
					this.state = 805;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 806;
				this.match(VtlParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public evalExpr(): EvalExprContext {
		let _localctx: EvalExprContext = new EvalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, VtlParser.RULE_evalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 808;
				this.match(VtlParser.EVAL);
				this.state = 809;
				this.match(VtlParser.T__12);
				this.state = 810;
				this.routineName();
				this.state = 811;
				this.match(VtlParser.T__12);
				this.state = 814;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case VtlParser.IDENTIFIER:
						{
							this.state = 812;
							this.componentID();
						}
						break;
					case VtlParser.INTEGER_CONSTANT:
					case VtlParser.FLOAT_CONSTANT:
					case VtlParser.BOOLEAN_CONSTANT:
					case VtlParser.NULL_CONSTANT:
					case VtlParser.STRING_CONSTANT:
						{
							this.state = 813;
							this.constant();
						}
						break;
					case VtlParser.T__13:
					case VtlParser.CARTESIAN_PER:
						break;
					default:
						break;
				}
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 816;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 819;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
								case VtlParser.IDENTIFIER:
									{
										this.state = 817;
										this.componentID();
									}
									break;
								case VtlParser.INTEGER_CONSTANT:
								case VtlParser.FLOAT_CONSTANT:
								case VtlParser.BOOLEAN_CONSTANT:
								case VtlParser.NULL_CONSTANT:
								case VtlParser.STRING_CONSTANT:
									{
										this.state = 818;
										this.constant();
									}
									break;
								default:
									throw new NoViableAltException(this);
							}
						}
					}
					this.state = 825;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 826;
				this.match(VtlParser.T__13);
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.LANGUAGE) {
					{
						this.state = 827;
						this.match(VtlParser.LANGUAGE);
						this.state = 828;
						this.match(VtlParser.STRING_CONSTANT);
					}
				}

				this.state = 833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.RETURNS) {
					{
						this.state = 831;
						this.match(VtlParser.RETURNS);
						this.state = 832;
						this.outputParameterType();
					}
				}

				this.state = 835;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castExpr(): CastExprContext {
		let _localctx: CastExprContext = new CastExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, VtlParser.RULE_castExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 837;
				this.match(VtlParser.CAST);
				this.state = 838;
				this.match(VtlParser.T__12);
				this.state = 839;
				this.expr(0);
				this.state = 840;
				this.match(VtlParser.CARTESIAN_PER);
				this.state = 843;
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
							this.state = 841;
							this.basicScalarType();
						}
						break;
					case VtlParser.IDENTIFIER:
						{
							this.state = 842;
							this.valueDomainName();
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 847;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.CARTESIAN_PER) {
					{
						this.state = 845;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 846;
						this.match(VtlParser.STRING_CONSTANT);
					}
				}

				this.state = 849;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public periodExpr(): PeriodExprContext {
		let _localctx: PeriodExprContext = new PeriodExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, VtlParser.RULE_periodExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 851;
				this.match(VtlParser.PERIOD_INDICATOR);
				this.state = 852;
				this.match(VtlParser.T__12);
				this.state = 854;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.T__2) | (1 << VtlParser.T__3) | (1 << VtlParser.T__12) | (1 << VtlParser.EVAL) | (1 << VtlParser.IF) | (1 << VtlParser.CURRENT_DATE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VtlParser.NOT - 38)) | (1 << (VtlParser.BETWEEN - 38)) | (1 << (VtlParser.ISNULL - 38)) | (1 << (VtlParser.UNION - 38)) | (1 << (VtlParser.SYMDIFF - 38)) | (1 << (VtlParser.INTERSECT - 38)) | (1 << (VtlParser.CHECK - 38)) | (1 << (VtlParser.EXISTS_IN - 38)) | (1 << (VtlParser.RANK - 38)) | (1 << (VtlParser.MIN - 38)) | (1 << (VtlParser.MAX - 38)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (VtlParser.ABS - 72)) | (1 << (VtlParser.LN - 72)) | (1 << (VtlParser.LOG - 72)) | (1 << (VtlParser.TRUNC - 72)) | (1 << (VtlParser.ROUND - 72)) | (1 << (VtlParser.POWER - 72)) | (1 << (VtlParser.MOD - 72)) | (1 << (VtlParser.LEN - 72)) | (1 << (VtlParser.TRIM - 72)) | (1 << (VtlParser.UCASE - 72)) | (1 << (VtlParser.LCASE - 72)) | (1 << (VtlParser.SUBSTR - 72)) | (1 << (VtlParser.SUM - 72)) | (1 << (VtlParser.AVG - 72)) | (1 << (VtlParser.MEDIAN - 72)) | (1 << (VtlParser.COUNT - 72)) | (1 << (VtlParser.EXP - 72)) | (1 << (VtlParser.CHARSET_MATCH - 72)) | (1 << (VtlParser.NVL - 72)) | (1 << (VtlParser.HIERARCHY - 72)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (VtlParser.DEFINE - 110)) | (1 << (VtlParser.LTRIM - 110)) | (1 << (VtlParser.RTRIM - 110)) | (1 << (VtlParser.INSTR - 110)) | (1 << (VtlParser.REPLACE - 110)) | (1 << (VtlParser.CEIL - 110)) | (1 << (VtlParser.FLOOR - 110)) | (1 << (VtlParser.SQRT - 110)) | (1 << (VtlParser.SETDIFF - 110)) | (1 << (VtlParser.STDDEV_POP - 110)) | (1 << (VtlParser.STDDEV_SAMP - 110)) | (1 << (VtlParser.VAR_POP - 110)) | (1 << (VtlParser.VAR_SAMP - 110)) | (1 << (VtlParser.FIRST_VALUE - 110)) | (1 << (VtlParser.LAST_VALUE - 110)) | (1 << (VtlParser.LAG - 110)) | (1 << (VtlParser.LEAD - 110)) | (1 << (VtlParser.RATIO_TO_REPORT - 110)))) !== 0) || ((((_la - 148)) & ~0x1F) === 0 && ((1 << (_la - 148)) & ((1 << (VtlParser.FILL_TIME_SERIES - 148)) | (1 << (VtlParser.FLOW_TO_STOCK - 148)) | (1 << (VtlParser.STOCK_TO_FLOW - 148)) | (1 << (VtlParser.TIMESHIFT - 148)) | (1 << (VtlParser.INNER_JOIN - 148)))) !== 0) || ((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (VtlParser.LEFT_JOIN - 180)) | (1 << (VtlParser.CROSS_JOIN - 180)) | (1 << (VtlParser.FULL_JOIN - 180)) | (1 << (VtlParser.PERIOD_INDICATOR - 180)) | (1 << (VtlParser.TIME_AGG - 180)) | (1 << (VtlParser.CAST - 180)) | (1 << (VtlParser.CHECK_DATAPOINT - 180)) | (1 << (VtlParser.CHECK_HIERARCHY - 180)))) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (VtlParser.INTEGER_CONSTANT - 226)) | (1 << (VtlParser.FLOAT_CONSTANT - 226)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 226)) | (1 << (VtlParser.NULL_CONSTANT - 226)) | (1 << (VtlParser.STRING_CONSTANT - 226)) | (1 << (VtlParser.IDENTIFIER - 226)))) !== 0)) {
					{
						this.state = 853;
						this.expr(0);
					}
				}

				this.state = 856;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeShiftExpr(): TimeShiftExprContext {
		let _localctx: TimeShiftExprContext = new TimeShiftExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, VtlParser.RULE_timeShiftExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 858;
				this.match(VtlParser.TIMESHIFT);
				this.state = 859;
				this.match(VtlParser.T__12);
				this.state = 860;
				this.expr(0);
				this.state = 861;
				this.match(VtlParser.CARTESIAN_PER);
				this.state = 862;
				this.match(VtlParser.INTEGER_CONSTANT);
				this.state = 863;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeSeriesExpr(): TimeSeriesExprContext {
		let _localctx: TimeSeriesExprContext = new TimeSeriesExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, VtlParser.RULE_timeSeriesExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 865;
				this.match(VtlParser.FILL_TIME_SERIES);
				this.state = 866;
				this.match(VtlParser.T__12);
				this.state = 867;
				this.expr(0);
				this.state = 870;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.CARTESIAN_PER) {
					{
						this.state = 868;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 869;
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

				this.state = 872;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeAggExpr(): TimeAggExprContext {
		let _localctx: TimeAggExprContext = new TimeAggExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, VtlParser.RULE_timeAggExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 874;
				this.match(VtlParser.TIME_AGG);
				this.state = 875;
				this.match(VtlParser.T__12);
				this.state = 876;
				this.match(VtlParser.STRING_CONSTANT);
				this.state = 879;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
					case 1:
						{
							this.state = 877;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 878;
							_la = this._input.LA(1);
							if (!(_la === VtlParser.OPTIONAL || _la === VtlParser.STRING_CONSTANT)) {
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
				this.state = 886;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
					case 1:
						{
							this.state = 881;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 884;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
								case VtlParser.T__2:
								case VtlParser.T__3:
								case VtlParser.T__12:
								case VtlParser.EVAL:
								case VtlParser.IF:
								case VtlParser.CURRENT_DATE:
								case VtlParser.NOT:
								case VtlParser.BETWEEN:
								case VtlParser.ISNULL:
								case VtlParser.UNION:
								case VtlParser.SYMDIFF:
								case VtlParser.INTERSECT:
								case VtlParser.CHECK:
								case VtlParser.EXISTS_IN:
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
								case VtlParser.HIERARCHY:
								case VtlParser.DEFINE:
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
								case VtlParser.FLOAT_CONSTANT:
								case VtlParser.BOOLEAN_CONSTANT:
								case VtlParser.NULL_CONSTANT:
								case VtlParser.STRING_CONSTANT:
								case VtlParser.IDENTIFIER:
									{
										this.state = 882;
										this.expr(0);
									}
									break;
								case VtlParser.OPTIONAL:
									{
										this.state = 883;
										this.match(VtlParser.OPTIONAL);
									}
									break;
								default:
									throw new NoViableAltException(this);
							}
						}
						break;
				}
				this.state = 890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.CARTESIAN_PER) {
					{
						this.state = 888;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 889;
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

				this.state = 892;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public validationExpr(): ValidationExprContext {
		let _localctx: ValidationExprContext = new ValidationExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, VtlParser.RULE_validationExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 894;
				this.match(VtlParser.CHECK);
				this.state = 895;
				this.match(VtlParser.T__12);
				this.state = 896;
				this.expr(0);
				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORCODE) {
					{
						this.state = 897;
						this.erCode();
					}
				}

				this.state = 901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORLEVEL) {
					{
						this.state = 900;
						this.erLevel();
					}
				}

				this.state = 905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.IMBALANCE) {
					{
						this.state = 903;
						this.match(VtlParser.IMBALANCE);
						this.state = 904;
						this.expr(0);
					}
				}

				this.state = 908;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ALL || _la === VtlParser.INVALID) {
					{
						this.state = 907;
						_la = this._input.LA(1);
						if (!(_la === VtlParser.ALL || _la === VtlParser.INVALID)) {
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

				this.state = 910;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public validationDatapoint(): ValidationDatapointContext {
		let _localctx: ValidationDatapointContext = new ValidationDatapointContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, VtlParser.RULE_validationDatapoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 912;
				this.match(VtlParser.CHECK_DATAPOINT);
				this.state = 913;
				this.match(VtlParser.T__12);
				this.state = 914;
				this.expr(0);
				this.state = 915;
				this.match(VtlParser.CARTESIAN_PER);
				this.state = 916;
				this.match(VtlParser.IDENTIFIER);
				this.state = 926;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.COMPONENTS) {
					{
						this.state = 917;
						this.match(VtlParser.COMPONENTS);
						this.state = 918;
						this.componentID();
						this.state = 923;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.CARTESIAN_PER) {
							{
								{
									this.state = 919;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 920;
									this.componentID();
								}
							}
							this.state = 925;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ALL || _la === VtlParser.INVALID || _la === VtlParser.ALL_MEASURES) {
					{
						this.state = 928;
						_la = this._input.LA(1);
						if (!(_la === VtlParser.ALL || _la === VtlParser.INVALID || _la === VtlParser.ALL_MEASURES)) {
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

				this.state = 931;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public validationHierarchical(): ValidationHierarchicalContext {
		let _localctx: ValidationHierarchicalContext = new ValidationHierarchicalContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, VtlParser.RULE_validationHierarchical);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 933;
				this.match(VtlParser.CHECK_HIERARCHY);
				this.state = 934;
				this.match(VtlParser.T__12);
				this.state = 935;
				this.expr(0);
				this.state = 936;
				this.match(VtlParser.CARTESIAN_PER);
				this.state = 937;
				this.match(VtlParser.IDENTIFIER);
				this.state = 947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.CONDITION) {
					{
						this.state = 938;
						this.match(VtlParser.CONDITION);
						this.state = 939;
						this.componentID();
						this.state = 944;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.CARTESIAN_PER) {
							{
								{
									this.state = 940;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 941;
									this.componentID();
								}
							}
							this.state = 946;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.RULE) {
					{
						this.state = 949;
						this.match(VtlParser.RULE);
						this.state = 950;
						this.match(VtlParser.IDENTIFIER);
					}
				}

				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & ((1 << (VtlParser.NON_NULL - 210)) | (1 << (VtlParser.NON_ZERO - 210)) | (1 << (VtlParser.PARTIAL_NULL - 210)) | (1 << (VtlParser.PARTIAL_ZERO - 210)) | (1 << (VtlParser.ALWAYS_NULL - 210)) | (1 << (VtlParser.ALWAYS_ZERO - 210)))) !== 0)) {
					{
						this.state = 953;
						_la = this._input.LA(1);
						if (!(((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & ((1 << (VtlParser.NON_NULL - 210)) | (1 << (VtlParser.NON_ZERO - 210)) | (1 << (VtlParser.PARTIAL_NULL - 210)) | (1 << (VtlParser.PARTIAL_ZERO - 210)) | (1 << (VtlParser.ALWAYS_NULL - 210)) | (1 << (VtlParser.ALWAYS_ZERO - 210)))) !== 0))) {
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

				this.state = 957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.DATASET || _la === VtlParser.DATASET_PRIORITY) {
					{
						this.state = 956;
						_la = this._input.LA(1);
						if (!(_la === VtlParser.DATASET || _la === VtlParser.DATASET_PRIORITY)) {
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

				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ALL || _la === VtlParser.INVALID || _la === VtlParser.ALL_MEASURES) {
					{
						this.state = 959;
						_la = this._input.LA(1);
						if (!(_la === VtlParser.ALL || _la === VtlParser.INVALID || _la === VtlParser.ALL_MEASURES)) {
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

				this.state = 962;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public erCode(): ErCodeContext {
		let _localctx: ErCodeContext = new ErCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, VtlParser.RULE_erCode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 964;
				this.match(VtlParser.ERRORCODE);
				this.state = 965;
				this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public erLevel(): ErLevelContext {
		let _localctx: ErLevelContext = new ErLevelContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, VtlParser.RULE_erLevel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 967;
				this.match(VtlParser.ERRORLEVEL);
				this.state = 968;
				this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hierarchyExpr(): HierarchyExprContext {
		let _localctx: HierarchyExprContext = new HierarchyExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, VtlParser.RULE_hierarchyExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 970;
				this.match(VtlParser.HIERARCHY);
				this.state = 971;
				this.match(VtlParser.T__12);
				this.state = 972;
				this.expr(0);
				this.state = 973;
				this.match(VtlParser.CARTESIAN_PER);
				this.state = 974;
				this.match(VtlParser.IDENTIFIER);
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.CONDITION) {
					{
						this.state = 975;
						this.match(VtlParser.CONDITION);
						this.state = 976;
						this.componentID();
						this.state = 981;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.CARTESIAN_PER) {
							{
								{
									this.state = 977;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 978;
									this.componentID();
								}
							}
							this.state = 983;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 988;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
					case 1:
						{
							this.state = 986;
							this.match(VtlParser.RULE);
							this.state = 987;
							this.match(VtlParser.IDENTIFIER);
						}
						break;
				}
				this.state = 992;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
					case 1:
						{
							this.state = 990;
							_la = this._input.LA(1);
							if (!(((((_la - 210)) & ~0x1F) === 0 && ((1 << (_la - 210)) & ((1 << (VtlParser.NON_NULL - 210)) | (1 << (VtlParser.NON_ZERO - 210)) | (1 << (VtlParser.PARTIAL_NULL - 210)) | (1 << (VtlParser.PARTIAL_ZERO - 210)) | (1 << (VtlParser.ALWAYS_NULL - 210)) | (1 << (VtlParser.ALWAYS_ZERO - 210)))) !== 0))) {
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

					case 2:
						{
							this.state = 991;
							this.match(VtlParser.OPTIONAL);
						}
						break;
				}
				this.state = 996;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
					case 1:
						{
							this.state = 994;
							_la = this._input.LA(1);
							if (!(_la === VtlParser.DATASET || _la === VtlParser.RULE || _la === VtlParser.RULE_PRIORITY)) {
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

					case 2:
						{
							this.state = 995;
							this.match(VtlParser.OPTIONAL);
						}
						break;
				}
				this.state = 1000;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case VtlParser.ALL:
					case VtlParser.COMPUTED:
						{
							this.state = 998;
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
						break;
					case VtlParser.OPTIONAL:
						{
							this.state = 999;
							this.match(VtlParser.OPTIONAL);
						}
						break;
					case VtlParser.T__13:
						break;
					default:
						break;
				}
				this.state = 1002;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datasetClause(): DatasetClauseContext {
		let _localctx: DatasetClauseContext = new DatasetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, VtlParser.RULE_datasetClause);
		try {
			this.state = 1014;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.RENAME:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1004;
						this.match(VtlParser.RENAME);
						this.state = 1005;
						this.renameClause();
					}
					break;
				case VtlParser.AGGREGATE:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1006;
						this.aggrClause();
					}
					break;
				case VtlParser.FILTER:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1007;
						this.filterClause();
					}
					break;
				case VtlParser.CALC:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 1008;
						this.calcClause();
					}
					break;
				case VtlParser.KEEP:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 1009;
						this.keepClause();
					}
					break;
				case VtlParser.DROP:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 1010;
						this.dropClause();
					}
					break;
				case VtlParser.PIVOT:
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 1011;
						this.pivotExpr();
					}
					break;
				case VtlParser.UNPIVOT:
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 1012;
						this.unpivotExpr();
					}
					break;
				case VtlParser.SUBSPACE:
					this.enterOuterAlt(_localctx, 9);
					{
						this.state = 1013;
						this.subspaceExpr();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anFunctionClause(): AnFunctionClauseContext {
		let _localctx: AnFunctionClauseContext = new AnFunctionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, VtlParser.RULE_anFunctionClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1018;
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
						{
							this.state = 1016;
							this.aggrFunctionName();
						}
						break;
					case VtlParser.RANK:
					case VtlParser.FIRST_VALUE:
					case VtlParser.LAST_VALUE:
					case VtlParser.LAG:
					case VtlParser.LEAD:
					case VtlParser.RATIO_TO_REPORT:
						{
							this.state = 1017;
							this.anFunction();
						}
						break;
					case VtlParser.T__12:
						break;
					default:
						break;
				}
				this.state = 1020;
				this.match(VtlParser.T__12);
				this.state = 1022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.T__2) | (1 << VtlParser.T__3) | (1 << VtlParser.T__12) | (1 << VtlParser.EVAL) | (1 << VtlParser.IF) | (1 << VtlParser.CURRENT_DATE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VtlParser.NOT - 38)) | (1 << (VtlParser.BETWEEN - 38)) | (1 << (VtlParser.ISNULL - 38)) | (1 << (VtlParser.UNION - 38)) | (1 << (VtlParser.SYMDIFF - 38)) | (1 << (VtlParser.INTERSECT - 38)) | (1 << (VtlParser.CHECK - 38)) | (1 << (VtlParser.EXISTS_IN - 38)) | (1 << (VtlParser.RANK - 38)) | (1 << (VtlParser.MIN - 38)) | (1 << (VtlParser.MAX - 38)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (VtlParser.ABS - 72)) | (1 << (VtlParser.LN - 72)) | (1 << (VtlParser.LOG - 72)) | (1 << (VtlParser.TRUNC - 72)) | (1 << (VtlParser.ROUND - 72)) | (1 << (VtlParser.POWER - 72)) | (1 << (VtlParser.MOD - 72)) | (1 << (VtlParser.LEN - 72)) | (1 << (VtlParser.TRIM - 72)) | (1 << (VtlParser.UCASE - 72)) | (1 << (VtlParser.LCASE - 72)) | (1 << (VtlParser.SUBSTR - 72)) | (1 << (VtlParser.SUM - 72)) | (1 << (VtlParser.AVG - 72)) | (1 << (VtlParser.MEDIAN - 72)) | (1 << (VtlParser.COUNT - 72)) | (1 << (VtlParser.EXP - 72)) | (1 << (VtlParser.CHARSET_MATCH - 72)) | (1 << (VtlParser.NVL - 72)) | (1 << (VtlParser.HIERARCHY - 72)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (VtlParser.DEFINE - 110)) | (1 << (VtlParser.LTRIM - 110)) | (1 << (VtlParser.RTRIM - 110)) | (1 << (VtlParser.INSTR - 110)) | (1 << (VtlParser.REPLACE - 110)) | (1 << (VtlParser.CEIL - 110)) | (1 << (VtlParser.FLOOR - 110)) | (1 << (VtlParser.SQRT - 110)) | (1 << (VtlParser.SETDIFF - 110)) | (1 << (VtlParser.STDDEV_POP - 110)) | (1 << (VtlParser.STDDEV_SAMP - 110)) | (1 << (VtlParser.VAR_POP - 110)) | (1 << (VtlParser.VAR_SAMP - 110)) | (1 << (VtlParser.FIRST_VALUE - 110)) | (1 << (VtlParser.LAST_VALUE - 110)) | (1 << (VtlParser.LAG - 110)) | (1 << (VtlParser.LEAD - 110)) | (1 << (VtlParser.RATIO_TO_REPORT - 110)))) !== 0) || ((((_la - 148)) & ~0x1F) === 0 && ((1 << (_la - 148)) & ((1 << (VtlParser.FILL_TIME_SERIES - 148)) | (1 << (VtlParser.FLOW_TO_STOCK - 148)) | (1 << (VtlParser.STOCK_TO_FLOW - 148)) | (1 << (VtlParser.TIMESHIFT - 148)) | (1 << (VtlParser.INNER_JOIN - 148)))) !== 0) || ((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (VtlParser.LEFT_JOIN - 180)) | (1 << (VtlParser.CROSS_JOIN - 180)) | (1 << (VtlParser.FULL_JOIN - 180)) | (1 << (VtlParser.PERIOD_INDICATOR - 180)) | (1 << (VtlParser.TIME_AGG - 180)) | (1 << (VtlParser.CAST - 180)) | (1 << (VtlParser.CHECK_DATAPOINT - 180)) | (1 << (VtlParser.CHECK_HIERARCHY - 180)))) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (VtlParser.INTEGER_CONSTANT - 226)) | (1 << (VtlParser.FLOAT_CONSTANT - 226)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 226)) | (1 << (VtlParser.NULL_CONSTANT - 226)) | (1 << (VtlParser.STRING_CONSTANT - 226)) | (1 << (VtlParser.IDENTIFIER - 226)))) !== 0)) {
					{
						this.state = 1021;
						this.expr(0);
					}
				}

				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1024;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1025;
							this.expr(0);
						}
					}
					this.state = 1030;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1031;
				this.match(VtlParser.OVER);
				this.state = 1032;
				this.match(VtlParser.T__12);
				this.state = 1034;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.PARTITION) {
					{
						this.state = 1033;
						this.partitionByClause();
					}
				}

				this.state = 1037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ORDER) {
					{
						this.state = 1036;
						this.orderByClause();
					}
				}

				this.state = 1040;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.DATA || _la === VtlParser.RANGE) {
					{
						this.state = 1039;
						this.windowingClause();
					}
				}

				this.state = 1042;
				this.match(VtlParser.T__13);
				this.state = 1043;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionByClause(): PartitionByClauseContext {
		let _localctx: PartitionByClauseContext = new PartitionByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, VtlParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1045;
				this.match(VtlParser.PARTITION);
				this.state = 1046;
				this.match(VtlParser.BY);
				this.state = 1047;
				this.match(VtlParser.IDENTIFIER);
				this.state = 1052;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1048;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1049;
							this.match(VtlParser.IDENTIFIER);
						}
					}
					this.state = 1054;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByClause(): OrderByClauseContext {
		let _localctx: OrderByClauseContext = new OrderByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, VtlParser.RULE_orderByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1055;
				this.match(VtlParser.ORDER);
				this.state = 1056;
				this.match(VtlParser.BY);
				this.state = 1057;
				this.componentID();
				this.state = 1059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ASC || _la === VtlParser.DESC) {
					{
						this.state = 1058;
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

				this.state = 1068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1061;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1062;
							this.componentID();
							this.state = 1064;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.ASC || _la === VtlParser.DESC) {
								{
									this.state = 1063;
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
					}
					this.state = 1070;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowingClause(): WindowingClauseContext {
		let _localctx: WindowingClauseContext = new WindowingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, VtlParser.RULE_windowingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1074;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case VtlParser.DATA:
						{
							{
								this.state = 1071;
								this.match(VtlParser.DATA);
								this.state = 1072;
								this.match(VtlParser.POINTS);
							}
						}
						break;
					case VtlParser.RANGE:
						{
							this.state = 1073;
							this.match(VtlParser.RANGE);
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 1076;
				this.match(VtlParser.BETWEEN);
				this.state = 1077;
				this.limitClauseItem();
				this.state = 1078;
				this.match(VtlParser.AND);
				this.state = 1079;
				this.limitClauseItem();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitClauseItem(): LimitClauseItemContext {
		let _localctx: LimitClauseItemContext = new LimitClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, VtlParser.RULE_limitClauseItem);
		try {
			this.state = 1092;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						{
							this.state = 1081;
							this.match(VtlParser.INTEGER_CONSTANT);
							this.state = 1082;
							this.match(VtlParser.PRECEDING);
						}
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						{
							this.state = 1083;
							this.match(VtlParser.INTEGER_CONSTANT);
							this.state = 1084;
							this.match(VtlParser.FOLLOWING);
						}
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						{
							this.state = 1085;
							this.match(VtlParser.CURRENT);
							this.state = 1086;
							this.match(VtlParser.DATA);
							this.state = 1087;
							this.match(VtlParser.POINT);
						}
					}
					break;

				case 4:
					this.enterOuterAlt(_localctx, 4);
					{
						{
							this.state = 1088;
							this.match(VtlParser.UNBOUNDED);
							this.state = 1089;
							this.match(VtlParser.PRECEDING);
						}
					}
					break;

				case 5:
					this.enterOuterAlt(_localctx, 5);
					{
						{
							this.state = 1090;
							this.match(VtlParser.UNBOUNDED);
							this.state = 1091;
							this.match(VtlParser.FOLLOWING);
						}
					}
					break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinExpr(): JoinExprContext {
		let _localctx: JoinExprContext = new JoinExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, VtlParser.RULE_joinExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1094;
				this.joinKeyword();
				this.state = 1095;
				this.match(VtlParser.T__12);
				this.state = 1096;
				this.joinClause();
				this.state = 1098;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
					case 1:
						{
							this.state = 1097;
							this.joinBody();
						}
						break;
				}
				this.state = 1100;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinClause(): JoinClauseContext {
		let _localctx: JoinClauseContext = new JoinClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, VtlParser.RULE_joinClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1102;
				this.expr(0);
				this.state = 1105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.AS) {
					{
						this.state = 1103;
						this.match(VtlParser.AS);
						this.state = 1104;
						this.match(VtlParser.IDENTIFIER);
					}
				}

				this.state = 1115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1107;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1108;
							this.expr(0);
							this.state = 1111;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.AS) {
								{
									this.state = 1109;
									this.match(VtlParser.AS);
									this.state = 1110;
									this.match(VtlParser.IDENTIFIER);
								}
							}

						}
					}
					this.state = 1117;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.USING) {
					{
						this.state = 1118;
						this.match(VtlParser.USING);
						this.state = 1119;
						this.componentID();
						this.state = 1124;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.CARTESIAN_PER) {
							{
								{
									this.state = 1120;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 1121;
									this.componentID();
								}
							}
							this.state = 1126;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinBody(): JoinBodyContext {
		let _localctx: JoinBodyContext = new JoinBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, VtlParser.RULE_joinBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.FILTER || _la === VtlParser.IDENTIFIER) {
					{
						this.state = 1129;
						this.joinFilterClause();
					}
				}

				this.state = 1135;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
					case 1:
						{
							this.state = 1132;
							this.joinCalcClause();
						}
						break;

					case 2:
						{
							this.state = 1133;
							this.joinApplyClause();
						}
						break;

					case 3:
						{
							this.state = 1134;
							this.joinAggClause();
						}
						break;
				}
				this.state = 1139;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case VtlParser.KEEP:
						{
							this.state = 1137;
							this.joinKeepClause();
						}
						break;
					case VtlParser.DROP:
						{
							this.state = 1138;
							this.joinDropClause();
						}
						break;
					case VtlParser.T__13:
					case VtlParser.RENAME:
						break;
					default:
						break;
				}
				this.state = 1142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.RENAME) {
					{
						this.state = 1141;
						this.joinRenameClause();
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCalcClause(): JoinCalcClauseContext {
		let _localctx: JoinCalcClauseContext = new JoinCalcClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, VtlParser.RULE_joinCalcClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (VtlParser.DIMENSION - 90)) | (1 << (VtlParser.MEASURE - 90)) | (1 << (VtlParser.ATTRIBUTE - 90)) | (1 << (VtlParser.VIRAL - 90)))) !== 0) || _la === VtlParser.COMPONENT) {
					{
						this.state = 1144;
						this.componentRole();
					}
				}

				this.state = 1147;
				this.joinCalcClauseItem();
				this.state = 1152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1148;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1149;
							this.joinCalcClauseItem();
						}
					}
					this.state = 1154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCalcClauseItem(): JoinCalcClauseItemContext {
		let _localctx: JoinCalcClauseItemContext = new JoinCalcClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, VtlParser.RULE_joinCalcClauseItem);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1155;
				this.match(VtlParser.CALC);
				this.state = 1157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (VtlParser.DIMENSION - 90)) | (1 << (VtlParser.MEASURE - 90)) | (1 << (VtlParser.ATTRIBUTE - 90)) | (1 << (VtlParser.VIRAL - 90)))) !== 0) || _la === VtlParser.COMPONENT) {
					{
						this.state = 1156;
						this.componentRole();
					}
				}

				this.state = 1159;
				this.joinCalcExpr();
				this.state = 1167;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 1160;
								this.match(VtlParser.CARTESIAN_PER);
								this.state = 1162;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (VtlParser.DIMENSION - 90)) | (1 << (VtlParser.MEASURE - 90)) | (1 << (VtlParser.ATTRIBUTE - 90)) | (1 << (VtlParser.VIRAL - 90)))) !== 0) || _la === VtlParser.COMPONENT) {
									{
										this.state = 1161;
										this.componentRole();
									}
								}

								this.state = 1164;
								this.joinCalcExpr();
							}
						}
					}
					this.state = 1169;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCalcExpr(): JoinCalcExprContext {
		let _localctx: JoinCalcExprContext = new JoinCalcExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, VtlParser.RULE_joinCalcExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1170;
				this.componentID();
				this.state = 1171;
				this.match(VtlParser.ASSIGN);
				this.state = 1172;
				this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinAggClause(): JoinAggClauseContext {
		let _localctx: JoinAggClauseContext = new JoinAggClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, VtlParser.RULE_joinAggClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (VtlParser.DIMENSION - 90)) | (1 << (VtlParser.MEASURE - 90)) | (1 << (VtlParser.ATTRIBUTE - 90)) | (1 << (VtlParser.VIRAL - 90)))) !== 0) || _la === VtlParser.COMPONENT) {
					{
						this.state = 1174;
						this.componentRole();
					}
				}

				this.state = 1177;
				this.match(VtlParser.AGGREGATE);
				this.state = 1178;
				this.joinAggClauseItem();
				this.state = 1183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1179;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1180;
							this.joinAggClauseItem();
						}
					}
					this.state = 1185;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.GROUP) {
					{
						this.state = 1186;
						this.groupingClause();
					}
				}

				this.state = 1190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.HAVING) {
					{
						this.state = 1189;
						this.havingClause();
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinAggClauseItem(): JoinAggClauseItemContext {
		let _localctx: JoinAggClauseItemContext = new JoinAggClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, VtlParser.RULE_joinAggClauseItem);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (VtlParser.DIMENSION - 90)) | (1 << (VtlParser.MEASURE - 90)) | (1 << (VtlParser.ATTRIBUTE - 90)) | (1 << (VtlParser.VIRAL - 90)))) !== 0) || _la === VtlParser.COMPONENT) {
					{
						this.state = 1192;
						this.componentRole();
					}
				}

				this.state = 1195;
				this.joinAggExpr();
				this.state = 1200;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 1196;
								this.match(VtlParser.CARTESIAN_PER);
								this.state = 1197;
								this.joinAggExpr();
							}
						}
					}
					this.state = 1202;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinAggExpr(): JoinAggExprContext {
		let _localctx: JoinAggExprContext = new JoinAggExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, VtlParser.RULE_joinAggExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1203;
				this.componentID();
				this.state = 1204;
				this.match(VtlParser.ASSIGN);
				this.state = 1205;
				this.aggrFunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinKeepClause(): JoinKeepClauseContext {
		let _localctx: JoinKeepClauseContext = new JoinKeepClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, VtlParser.RULE_joinKeepClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1207;
				this.match(VtlParser.KEEP);
				this.state = 1208;
				this.keepClauseItem();
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1209;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1210;
							this.keepClauseItem();
						}
					}
					this.state = 1215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinDropClause(): JoinDropClauseContext {
		let _localctx: JoinDropClauseContext = new JoinDropClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, VtlParser.RULE_joinDropClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1216;
				this.match(VtlParser.DROP);
				this.state = 1217;
				this.dropClauseItem();
				this.state = 1222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1218;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1219;
							this.dropClauseItem();
						}
					}
					this.state = 1224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinFilterClause(): JoinFilterClauseContext {
		let _localctx: JoinFilterClauseContext = new JoinFilterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, VtlParser.RULE_joinFilterClause);
		try {
			this.state = 1228;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.FILTER:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1225;
						this.match(VtlParser.FILTER);
						this.state = 1226;
						this.expr(0);
					}
					break;
				case VtlParser.IDENTIFIER:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1227;
						this.rulesetID();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinRenameClause(): JoinRenameClauseContext {
		let _localctx: JoinRenameClauseContext = new JoinRenameClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, VtlParser.RULE_joinRenameClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1230;
				this.match(VtlParser.RENAME);
				this.state = 1234;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
					case 1:
						{
							this.state = 1231;
							this.componentID();
							this.state = 1232;
							this.match(VtlParser.MEMBERSHIP);
						}
						break;
				}
				this.state = 1236;
				this.varID();
				this.state = 1237;
				this.match(VtlParser.TO);
				this.state = 1241;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
					case 1:
						{
							this.state = 1238;
							this.componentID();
							this.state = 1239;
							this.match(VtlParser.MEMBERSHIP);
						}
						break;
				}
				this.state = 1243;
				this.varID();
				this.state = 1261;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
							{
								this.state = 1244;
								this.match(VtlParser.CARTESIAN_PER);
								this.state = 1248;
								this._errHandler.sync(this);
								switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
									case 1:
										{
											this.state = 1245;
											this.componentID();
											this.state = 1246;
											this.match(VtlParser.MEMBERSHIP);
										}
										break;
								}
								this.state = 1250;
								this.varID();
								this.state = 1251;
								this.match(VtlParser.TO);
								this.state = 1255;
								this._errHandler.sync(this);
								switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
									case 1:
										{
											this.state = 1252;
											this.componentID();
											this.state = 1253;
											this.match(VtlParser.MEMBERSHIP);
										}
										break;
								}
								this.state = 1257;
								this.varID();
							}
						}
					}
					this.state = 1263;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinApplyClause(): JoinApplyClauseContext {
		let _localctx: JoinApplyClauseContext = new JoinApplyClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, VtlParser.RULE_joinApplyClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1264;
				this.match(VtlParser.APPLY);
				this.state = 1265;
				this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anFunction(): AnFunctionContext {
		let _localctx: AnFunctionContext = new AnFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, VtlParser.RULE_anFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1267;
				_la = this._input.LA(1);
				if (!(_la === VtlParser.RANK || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (VtlParser.FIRST_VALUE - 134)) | (1 << (VtlParser.LAST_VALUE - 134)) | (1 << (VtlParser.LAG - 134)) | (1 << (VtlParser.LEAD - 134)) | (1 << (VtlParser.RATIO_TO_REPORT - 134)))) !== 0))) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregateClause(): AggregateClauseContext {
		let _localctx: AggregateClauseContext = new AggregateClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, VtlParser.RULE_aggregateClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1269;
				this.aggrFunctionClause();
				this.state = 1274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1270;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1271;
							this.aggrFunctionClause();
						}
					}
					this.state = 1276;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggrFunctionClause(): AggrFunctionClauseContext {
		let _localctx: AggrFunctionClauseContext = new AggrFunctionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, VtlParser.RULE_aggrFunctionClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (VtlParser.DIMENSION - 90)) | (1 << (VtlParser.MEASURE - 90)) | (1 << (VtlParser.ATTRIBUTE - 90)) | (1 << (VtlParser.VIRAL - 90)))) !== 0) || _la === VtlParser.COMPONENT) {
					{
						this.state = 1277;
						this.componentRole();
					}
				}

				this.state = 1280;
				this.componentID();
				this.state = 1281;
				this.match(VtlParser.ASSIGN);
				this.state = 1282;
				this.aggrFunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getFiltersClause(): GetFiltersClauseContext {
		let _localctx: GetFiltersClauseContext = new GetFiltersClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, VtlParser.RULE_getFiltersClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1284;
				this.getFilterClause();
				this.state = 1289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1285;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1286;
							this.getFilterClause();
						}
					}
					this.state = 1291;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getFilterClause(): GetFilterClauseContext {
		let _localctx: GetFilterClauseContext = new GetFilterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, VtlParser.RULE_getFilterClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				{
					this.state = 1293;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VtlParser.FILTER) {
						{
							this.state = 1292;
							this.match(VtlParser.FILTER);
						}
					}

					this.state = 1295;
					this.expr(0);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggrClause(): AggrClauseContext {
		let _localctx: AggrClauseContext = new AggrClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, VtlParser.RULE_aggrClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1297;
				this.match(VtlParser.AGGREGATE);
				this.state = 1298;
				this.aggregateClause();
				this.state = 1300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.GROUP) {
					{
						this.state = 1299;
						this.groupingClause();
					}
				}

				this.state = 1303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.HAVING) {
					{
						this.state = 1302;
						this.havingClause();
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filterClause(): FilterClauseContext {
		let _localctx: FilterClauseContext = new FilterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, VtlParser.RULE_filterClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1305;
				this.match(VtlParser.FILTER);
				this.state = 1306;
				this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameClause(): RenameClauseContext {
		let _localctx: RenameClauseContext = new RenameClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, VtlParser.RULE_renameClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1308;
				this.varID();
				this.state = 1309;
				this.match(VtlParser.TO);
				this.state = 1310;
				this.varID();
				this.state = 1318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1311;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1312;
							this.varID();
							this.state = 1313;
							this.match(VtlParser.TO);
							this.state = 1314;
							this.varID();
						}
					}
					this.state = 1320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggrFunction(): AggrFunctionContext {
		let _localctx: AggrFunctionContext = new AggrFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, VtlParser.RULE_aggrFunction);
		let _la: number;
		try {
			this.state = 1377;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.SUM:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1321;
						this.match(VtlParser.SUM);
						this.state = 1322;
						this.match(VtlParser.T__12);
						this.state = 1323;
						this.expr(0);
						this.state = 1324;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.AVG:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1326;
						this.match(VtlParser.AVG);
						this.state = 1327;
						this.match(VtlParser.T__12);
						this.state = 1328;
						this.expr(0);
						this.state = 1329;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.COUNT:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1331;
						this.match(VtlParser.COUNT);
						this.state = 1332;
						this.match(VtlParser.T__12);
						this.state = 1334;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.T__2) | (1 << VtlParser.T__3) | (1 << VtlParser.T__12) | (1 << VtlParser.EVAL) | (1 << VtlParser.IF) | (1 << VtlParser.CURRENT_DATE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (VtlParser.NOT - 38)) | (1 << (VtlParser.BETWEEN - 38)) | (1 << (VtlParser.ISNULL - 38)) | (1 << (VtlParser.UNION - 38)) | (1 << (VtlParser.SYMDIFF - 38)) | (1 << (VtlParser.INTERSECT - 38)) | (1 << (VtlParser.CHECK - 38)) | (1 << (VtlParser.EXISTS_IN - 38)) | (1 << (VtlParser.RANK - 38)) | (1 << (VtlParser.MIN - 38)) | (1 << (VtlParser.MAX - 38)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (VtlParser.ABS - 72)) | (1 << (VtlParser.LN - 72)) | (1 << (VtlParser.LOG - 72)) | (1 << (VtlParser.TRUNC - 72)) | (1 << (VtlParser.ROUND - 72)) | (1 << (VtlParser.POWER - 72)) | (1 << (VtlParser.MOD - 72)) | (1 << (VtlParser.LEN - 72)) | (1 << (VtlParser.TRIM - 72)) | (1 << (VtlParser.UCASE - 72)) | (1 << (VtlParser.LCASE - 72)) | (1 << (VtlParser.SUBSTR - 72)) | (1 << (VtlParser.SUM - 72)) | (1 << (VtlParser.AVG - 72)) | (1 << (VtlParser.MEDIAN - 72)) | (1 << (VtlParser.COUNT - 72)) | (1 << (VtlParser.EXP - 72)) | (1 << (VtlParser.CHARSET_MATCH - 72)) | (1 << (VtlParser.NVL - 72)) | (1 << (VtlParser.HIERARCHY - 72)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (VtlParser.DEFINE - 110)) | (1 << (VtlParser.LTRIM - 110)) | (1 << (VtlParser.RTRIM - 110)) | (1 << (VtlParser.INSTR - 110)) | (1 << (VtlParser.REPLACE - 110)) | (1 << (VtlParser.CEIL - 110)) | (1 << (VtlParser.FLOOR - 110)) | (1 << (VtlParser.SQRT - 110)) | (1 << (VtlParser.SETDIFF - 110)) | (1 << (VtlParser.STDDEV_POP - 110)) | (1 << (VtlParser.STDDEV_SAMP - 110)) | (1 << (VtlParser.VAR_POP - 110)) | (1 << (VtlParser.VAR_SAMP - 110)) | (1 << (VtlParser.FIRST_VALUE - 110)) | (1 << (VtlParser.LAST_VALUE - 110)) | (1 << (VtlParser.LAG - 110)) | (1 << (VtlParser.LEAD - 110)) | (1 << (VtlParser.RATIO_TO_REPORT - 110)))) !== 0) || ((((_la - 148)) & ~0x1F) === 0 && ((1 << (_la - 148)) & ((1 << (VtlParser.FILL_TIME_SERIES - 148)) | (1 << (VtlParser.FLOW_TO_STOCK - 148)) | (1 << (VtlParser.STOCK_TO_FLOW - 148)) | (1 << (VtlParser.TIMESHIFT - 148)) | (1 << (VtlParser.INNER_JOIN - 148)))) !== 0) || ((((_la - 180)) & ~0x1F) === 0 && ((1 << (_la - 180)) & ((1 << (VtlParser.LEFT_JOIN - 180)) | (1 << (VtlParser.CROSS_JOIN - 180)) | (1 << (VtlParser.FULL_JOIN - 180)) | (1 << (VtlParser.PERIOD_INDICATOR - 180)) | (1 << (VtlParser.TIME_AGG - 180)) | (1 << (VtlParser.CAST - 180)) | (1 << (VtlParser.CHECK_DATAPOINT - 180)) | (1 << (VtlParser.CHECK_HIERARCHY - 180)))) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (VtlParser.INTEGER_CONSTANT - 226)) | (1 << (VtlParser.FLOAT_CONSTANT - 226)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 226)) | (1 << (VtlParser.NULL_CONSTANT - 226)) | (1 << (VtlParser.STRING_CONSTANT - 226)) | (1 << (VtlParser.IDENTIFIER - 226)))) !== 0)) {
							{
								this.state = 1333;
								this.expr(0);
							}
						}

						this.state = 1336;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.MEDIAN:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 1337;
						this.match(VtlParser.MEDIAN);
						this.state = 1338;
						this.match(VtlParser.T__12);
						this.state = 1339;
						this.expr(0);
						this.state = 1340;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.MIN:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 1342;
						this.match(VtlParser.MIN);
						this.state = 1343;
						this.match(VtlParser.T__12);
						this.state = 1344;
						this.expr(0);
						this.state = 1345;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.MAX:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 1347;
						this.match(VtlParser.MAX);
						this.state = 1348;
						this.match(VtlParser.T__12);
						this.state = 1349;
						this.expr(0);
						this.state = 1350;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.RANK:
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 1352;
						this.match(VtlParser.RANK);
						this.state = 1353;
						this.match(VtlParser.T__12);
						this.state = 1354;
						this.expr(0);
						this.state = 1355;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.STDDEV_POP:
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 1357;
						this.match(VtlParser.STDDEV_POP);
						this.state = 1358;
						this.match(VtlParser.T__12);
						this.state = 1359;
						this.expr(0);
						this.state = 1360;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.STDDEV_SAMP:
					this.enterOuterAlt(_localctx, 9);
					{
						this.state = 1362;
						this.match(VtlParser.STDDEV_SAMP);
						this.state = 1363;
						this.match(VtlParser.T__12);
						this.state = 1364;
						this.expr(0);
						this.state = 1365;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.VAR_POP:
					this.enterOuterAlt(_localctx, 10);
					{
						this.state = 1367;
						this.match(VtlParser.VAR_POP);
						this.state = 1368;
						this.match(VtlParser.T__12);
						this.state = 1369;
						this.expr(0);
						this.state = 1370;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.VAR_SAMP:
					this.enterOuterAlt(_localctx, 11);
					{
						this.state = 1372;
						this.match(VtlParser.VAR_SAMP);
						this.state = 1373;
						this.match(VtlParser.T__12);
						this.state = 1374;
						this.expr(0);
						this.state = 1375;
						this.match(VtlParser.T__13);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calcClause(): CalcClauseContext {
		let _localctx: CalcClauseContext = new CalcClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, VtlParser.RULE_calcClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1379;
				this.match(VtlParser.CALC);
				this.state = 1380;
				this.calcClauseItem();
				this.state = 1385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1381;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1382;
							this.calcClauseItem();
						}
					}
					this.state = 1387;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calcClauseItem(): CalcClauseItemContext {
		let _localctx: CalcClauseItemContext = new CalcClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, VtlParser.RULE_calcClauseItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (VtlParser.DIMENSION - 90)) | (1 << (VtlParser.MEASURE - 90)) | (1 << (VtlParser.ATTRIBUTE - 90)) | (1 << (VtlParser.VIRAL - 90)))) !== 0) || _la === VtlParser.COMPONENT) {
					{
						this.state = 1388;
						this.componentRole();
					}
				}

				this.state = 1391;
				this.componentID();
				this.state = 1392;
				this.match(VtlParser.ASSIGN);
				this.state = 1393;
				this.calcExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calcExpr(): CalcExprContext {
		let _localctx: CalcExprContext = new CalcExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, VtlParser.RULE_calcExpr);
		try {
			this.state = 1401;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1395;
						this.aggrFunction();
						this.state = 1396;
						this.match(VtlParser.T__12);
						this.state = 1397;
						this.expr(0);
						this.state = 1398;
						this.match(VtlParser.T__13);
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1400;
						this.expr(0);
					}
					break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropClause(): DropClauseContext {
		let _localctx: DropClauseContext = new DropClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, VtlParser.RULE_dropClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1403;
				this.match(VtlParser.DROP);
				this.state = 1404;
				this.dropClauseItem();
				this.state = 1409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1405;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1406;
							this.dropClauseItem();
						}
					}
					this.state = 1411;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropClauseItem(): DropClauseItemContext {
		let _localctx: DropClauseItemContext = new DropClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, VtlParser.RULE_dropClauseItem);
		try {
			this.state = 1417;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1412;
						this.componentID();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						{
							this.state = 1413;
							this.datasetID();
							this.state = 1414;
							this.match(VtlParser.MEMBERSHIP);
							this.state = 1415;
							this.componentID();
						}
					}
					break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keepClause(): KeepClauseContext {
		let _localctx: KeepClauseContext = new KeepClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, VtlParser.RULE_keepClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1419;
				this.match(VtlParser.KEEP);
				this.state = 1420;
				this.keepClauseItem();
				this.state = 1425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1421;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1422;
							this.keepClauseItem();
						}
					}
					this.state = 1427;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keepClauseItem(): KeepClauseItemContext {
		let _localctx: KeepClauseItemContext = new KeepClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, VtlParser.RULE_keepClauseItem);
		try {
			this.state = 1433;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1428;
						this.componentID();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						{
							this.state = 1429;
							this.datasetID();
							this.state = 1430;
							this.match(VtlParser.MEMBERSHIP);
							this.state = 1431;
							this.componentID();
						}
					}
					break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unpivotExpr(): UnpivotExprContext {
		let _localctx: UnpivotExprContext = new UnpivotExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, VtlParser.RULE_unpivotExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1435;
				this.match(VtlParser.UNPIVOT);
				this.state = 1436;
				this.varID();
				this.state = 1437;
				this.match(VtlParser.CARTESIAN_PER);
				this.state = 1438;
				this.varID();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pivotExpr(): PivotExprContext {
		let _localctx: PivotExprContext = new PivotExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, VtlParser.RULE_pivotExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1440;
				this.match(VtlParser.PIVOT);
				this.state = 1441;
				this.varID();
				this.state = 1442;
				this.match(VtlParser.CARTESIAN_PER);
				this.state = 1443;
				this.varID();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subspaceExpr(): SubspaceExprContext {
		let _localctx: SubspaceExprContext = new SubspaceExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, VtlParser.RULE_subspaceExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1445;
				this.match(VtlParser.SUBSPACE);
				this.state = 1446;
				this.varID();
				this.state = 1447;
				this.match(VtlParser.T__10);
				this.state = 1448;
				this.constant();
				this.state = 1456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1449;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1450;
							this.varID();
							this.state = 1451;
							this.match(VtlParser.T__10);
							this.state = 1452;
							this.constant();
						}
					}
					this.state = 1458;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inBetweenClause(): InBetweenClauseContext {
		let _localctx: InBetweenClauseContext = new InBetweenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, VtlParser.RULE_inBetweenClause);
		try {
			this.state = 1469;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.IN:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1459;
						this.match(VtlParser.IN);
						this.state = 1462;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case VtlParser.UNION:
							case VtlParser.SYMDIFF:
							case VtlParser.INTERSECT:
							case VtlParser.SETDIFF:
								{
									this.state = 1460;
									this.setExpr();
								}
								break;
							case VtlParser.IDENTIFIER:
								{
									this.state = 1461;
									this.match(VtlParser.IDENTIFIER);
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					break;
				case VtlParser.NOT_IN:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1464;
						this.match(VtlParser.NOT_IN);
						this.state = 1467;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case VtlParser.UNION:
							case VtlParser.SYMDIFF:
							case VtlParser.INTERSECT:
							case VtlParser.SETDIFF:
								{
									this.state = 1465;
									this.setExpr();
								}
								break;
							case VtlParser.IDENTIFIER:
								{
									this.state = 1466;
									this.match(VtlParser.IDENTIFIER);
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setExpr(): SetExprContext {
		let _localctx: SetExprContext = new SetExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, VtlParser.RULE_setExpr);
		let _la: number;
		try {
			this.state = 1509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.UNION:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1471;
						this.match(VtlParser.UNION);
						this.state = 1472;
						this.match(VtlParser.T__12);
						this.state = 1473;
						this.expr(0);
						this.state = 1478;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.CARTESIAN_PER) {
							{
								{
									this.state = 1474;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 1475;
									this.expr(0);
								}
							}
							this.state = 1480;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1481;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.SYMDIFF:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1483;
						this.match(VtlParser.SYMDIFF);
						this.state = 1484;
						this.match(VtlParser.T__12);
						this.state = 1485;
						this.expr(0);
						this.state = 1486;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 1487;
						this.expr(0);
						this.state = 1488;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.SETDIFF:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1490;
						this.match(VtlParser.SETDIFF);
						this.state = 1491;
						this.match(VtlParser.T__12);
						this.state = 1492;
						this.expr(0);
						this.state = 1493;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 1494;
						this.expr(0);
						this.state = 1495;
						this.match(VtlParser.T__13);
					}
					break;
				case VtlParser.INTERSECT:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 1497;
						this.match(VtlParser.INTERSECT);
						this.state = 1498;
						this.match(VtlParser.T__12);
						this.state = 1499;
						this.expr(0);
						this.state = 1504;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.CARTESIAN_PER) {
							{
								{
									this.state = 1500;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 1501;
									this.expr(0);
								}
							}
							this.state = 1506;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1507;
						this.match(VtlParser.T__13);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscriptExpr(): SubscriptExprContext {
		let _localctx: SubscriptExprContext = new SubscriptExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, VtlParser.RULE_subscriptExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1511;
				this.persistentDatasetID();
				this.state = 1512;
				this.match(VtlParser.T__0);
				this.state = 1513;
				this.componentID();
				this.state = 1514;
				this.match(VtlParser.T__10);
				this.state = 1515;
				this.constant();
				this.state = 1521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.CARTESIAN_PER) {
					{
						this.state = 1516;
						this.match(VtlParser.CARTESIAN_PER);
						this.state = 1517;
						this.componentID();
						this.state = 1518;
						this.match(VtlParser.T__10);
						this.state = 1519;
						this.constant();
					}
				}

				this.state = 1523;
				this.match(VtlParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggrInvocation(): AggrInvocationContext {
		let _localctx: AggrInvocationContext = new AggrInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, VtlParser.RULE_aggrInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1525;
				this.aggrFunctionName();
				this.state = 1526;
				this.match(VtlParser.T__12);
				this.state = 1527;
				this.match(VtlParser.IDENTIFIER);
				this.state = 1530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.MEMBERSHIP) {
					{
						this.state = 1528;
						this.match(VtlParser.MEMBERSHIP);
						this.state = 1529;
						this.componentID();
					}
				}

				this.state = 1540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1532;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1533;
							this.match(VtlParser.IDENTIFIER);
							this.state = 1536;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.MEMBERSHIP) {
								{
									this.state = 1534;
									this.match(VtlParser.MEMBERSHIP);
									this.state = 1535;
									this.componentID();
								}
							}

						}
					}
					this.state = 1542;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.GROUP) {
					{
						this.state = 1543;
						this.groupingClause();
					}
				}

				this.state = 1547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.HAVING) {
					{
						this.state = 1546;
						this.havingClause();
					}
				}

				this.state = 1549;
				this.match(VtlParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggrInvocationCompExpr(): AggrInvocationCompExprContext {
		let _localctx: AggrInvocationCompExprContext = new AggrInvocationCompExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, VtlParser.RULE_aggrInvocationCompExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1551;
				this.aggrFunctionName();
				this.state = 1552;
				this.match(VtlParser.T__12);
				this.state = 1553;
				this.match(VtlParser.IDENTIFIER);
				this.state = 1556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.MEMBERSHIP) {
					{
						this.state = 1554;
						this.match(VtlParser.MEMBERSHIP);
						this.state = 1555;
						this.componentID();
					}
				}

				this.state = 1566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.CARTESIAN_PER) {
					{
						{
							this.state = 1558;
							this.match(VtlParser.CARTESIAN_PER);
							this.state = 1559;
							this.match(VtlParser.IDENTIFIER);
							this.state = 1562;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.MEMBERSHIP) {
								{
									this.state = 1560;
									this.match(VtlParser.MEMBERSHIP);
									this.state = 1561;
									this.componentID();
								}
							}

						}
					}
					this.state = 1568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1569;
				this.match(VtlParser.T__13);
				this.state = 1571;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 167, this._ctx)) {
					case 1:
						{
							this.state = 1570;
							this.groupingClause();
						}
						break;
				}
				this.state = 1574;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
					case 1:
						{
							this.state = 1573;
							this.havingClause();
						}
						break;
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggrFunctionName(): AggrFunctionNameContext {
		let _localctx: AggrFunctionNameContext = new AggrFunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, VtlParser.RULE_aggrFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1576;
				_la = this._input.LA(1);
				if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VtlParser.MIN - 67)) | (1 << (VtlParser.MAX - 67)) | (1 << (VtlParser.SUM - 67)) | (1 << (VtlParser.AVG - 67)) | (1 << (VtlParser.MEDIAN - 67)) | (1 << (VtlParser.COUNT - 67)))) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (VtlParser.STDDEV_POP - 127)) | (1 << (VtlParser.STDDEV_SAMP - 127)) | (1 << (VtlParser.VAR_POP - 127)) | (1 << (VtlParser.VAR_SAMP - 127)))) !== 0))) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingClause(): GroupingClauseContext {
		let _localctx: GroupingClauseContext = new GroupingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, VtlParser.RULE_groupingClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1578;
				this.groupKeyword();
				this.state = 1588;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
					case 1:
						{
							{
								this.state = 1579;
								this.match(VtlParser.IDENTIFIER);
								this.state = 1584;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
											{
												this.state = 1580;
												this.match(VtlParser.CARTESIAN_PER);
												this.state = 1581;
												this.match(VtlParser.IDENTIFIER);
											}
										}
									}
									this.state = 1586;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
								}
							}
						}
						break;

					case 2:
						{
							{
								this.state = 1587;
								this.expr(0);
							}
						}
						break;
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public havingClause(): HavingClauseContext {
		let _localctx: HavingClauseContext = new HavingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, VtlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1590;
				this.match(VtlParser.HAVING);
				this.state = 1592;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
					case 1:
						{
							this.state = 1591;
							this.match(VtlParser.T__12);
						}
						break;
				}
				this.state = 1595;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
					case 1:
						{
							this.state = 1594;
							this.aggrFunction();
						}
						break;
				}
				this.state = 1597;
				this.expr(0);
				this.state = 1599;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
					case 1:
						{
							this.state = 1598;
							this.match(VtlParser.T__13);
						}
						break;
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnAll(): ReturnAllContext {
		let _localctx: ReturnAllContext = new ReturnAllContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, VtlParser.RULE_returnAll);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1601;
				this.match(VtlParser.RETURN);
				this.state = 1602;
				this.match(VtlParser.ALL);
				this.state = 1603;
				this.match(VtlParser.DATA);
				this.state = 1604;
				this.match(VtlParser.POINTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentRole(): ComponentRoleContext {
		let _localctx: ComponentRoleContext = new ComponentRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, VtlParser.RULE_componentRole);
		try {
			this.state = 1611;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.MEASURE:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1606;
						this.match(VtlParser.MEASURE);
					}
					break;
				case VtlParser.COMPONENT:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1607;
						this.match(VtlParser.COMPONENT);
					}
					break;
				case VtlParser.DIMENSION:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1608;
						this.match(VtlParser.DIMENSION);
					}
					break;
				case VtlParser.ATTRIBUTE:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 1609;
						this.match(VtlParser.ATTRIBUTE);
					}
					break;
				case VtlParser.VIRAL:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 1610;
						this.viralAttribute();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public viralAttribute(): ViralAttributeContext {
		let _localctx: ViralAttributeContext = new ViralAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, VtlParser.RULE_viralAttribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1613;
				this.match(VtlParser.VIRAL);
				this.state = 1614;
				this.match(VtlParser.ATTRIBUTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logBase(): LogBaseContext {
		let _localctx: LogBaseContext = new LogBaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, VtlParser.RULE_logBase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1616;
				this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exponent(): ExponentContext {
		let _localctx: ExponentContext = new ExponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, VtlParser.RULE_exponent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1618;
				_la = this._input.LA(1);
				if (!(_la === VtlParser.INTEGER_CONSTANT || _la === VtlParser.FLOAT_CONSTANT)) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public persistentDatasetID(): PersistentDatasetIDContext {
		let _localctx: PersistentDatasetIDContext = new PersistentDatasetIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, VtlParser.RULE_persistentDatasetID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1620;
				this.match(VtlParser.STRING_CONSTANT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datasetID(): DatasetIDContext {
		let _localctx: DatasetIDContext = new DatasetIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, VtlParser.RULE_datasetID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1622;
				this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rulesetID(): RulesetIDContext {
		let _localctx: RulesetIDContext = new RulesetIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, VtlParser.RULE_rulesetID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1624;
				this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varID(): VarIDContext {
		let _localctx: VarIDContext = new VarIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, VtlParser.RULE_varID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1626;
				this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentID(): ComponentIDContext {
		let _localctx: ComponentIDContext = new ComponentIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, VtlParser.RULE_componentID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1628;
				this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorID(): OperatorIDContext {
		let _localctx: OperatorIDContext = new OperatorIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, VtlParser.RULE_operatorID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1630;
				this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public routineName(): RoutineNameContext {
		let _localctx: RoutineNameContext = new RoutineNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, VtlParser.RULE_routineName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1632;
				this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinKeyword(): JoinKeywordContext {
		let _localctx: JoinKeywordContext = new JoinKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, VtlParser.RULE_joinKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1634;
				_la = this._input.LA(1);
				if (!(((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & ((1 << (VtlParser.INNER_JOIN - 179)) | (1 << (VtlParser.LEFT_JOIN - 179)) | (1 << (VtlParser.CROSS_JOIN - 179)) | (1 << (VtlParser.FULL_JOIN - 179)))) !== 0))) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupKeyword(): GroupKeywordContext {
		let _localctx: GroupKeywordContext = new GroupKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, VtlParser.RULE_groupKeyword);
		try {
			this.state = 1642;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 175, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						{
							this.state = 1636;
							this.match(VtlParser.GROUP);
							this.state = 1637;
							this.match(VtlParser.BY);
						}
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						{
							this.state = 1638;
							this.match(VtlParser.GROUP);
							this.state = 1639;
							this.match(VtlParser.EXCEPT);
						}
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						{
							this.state = 1640;
							this.match(VtlParser.GROUP);
							this.state = 1641;
							this.match(VtlParser.ALL);
						}
					}
					break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, VtlParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1644;
				_la = this._input.LA(1);
				if (!(((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (VtlParser.INTEGER_CONSTANT - 226)) | (1 << (VtlParser.FLOAT_CONSTANT - 226)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 226)) | (1 << (VtlParser.NULL_CONSTANT - 226)) | (1 << (VtlParser.STRING_CONSTANT - 226)))) !== 0))) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentType2(): ComponentType2Context {
		let _localctx: ComponentType2Context = new ComponentType2Context(this._ctx, this.state);
		this.enterRule(_localctx, 204, VtlParser.RULE_componentType2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1646;
				_la = this._input.LA(1);
				if (!(((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (VtlParser.BOOLEAN - 155)) | (1 << (VtlParser.DATE - 155)) | (1 << (VtlParser.STRING - 155)) | (1 << (VtlParser.INTEGER - 155)) | (1 << (VtlParser.FLOAT - 155)))) !== 0))) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalarType(): ScalarTypeContext {
		let _localctx: ScalarTypeContext = new ScalarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, VtlParser.RULE_scalarType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1651;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
					case 1:
						{
							this.state = 1648;
							this.basicScalarType();
						}
						break;

					case 2:
						{
							this.state = 1649;
							this.valueDomainName();
						}
						break;

					case 3:
						{
							this.state = 1650;
							this.setName();
						}
						break;
				}
				this.state = 1654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.T__0 || _la === VtlParser.T__15) {
					{
						this.state = 1653;
						this.scalarTypeConstraint();
					}
				}

				this.state = 1660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.NOT || _la === VtlParser.NULL_CONSTANT) {
					{
						this.state = 1657;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VtlParser.NOT) {
							{
								this.state = 1656;
								this.match(VtlParser.NOT);
							}
						}

						this.state = 1659;
						this.match(VtlParser.NULL_CONSTANT);
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicScalarType(): BasicScalarTypeContext {
		let _localctx: BasicScalarTypeContext = new BasicScalarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, VtlParser.RULE_basicScalarType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1662;
				_la = this._input.LA(1);
				if (!(((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & ((1 << (VtlParser.BOOLEAN - 155)) | (1 << (VtlParser.DATE - 155)) | (1 << (VtlParser.TIME_PERIOD - 155)) | (1 << (VtlParser.NUMBER - 155)) | (1 << (VtlParser.STRING - 155)) | (1 << (VtlParser.INTEGER - 155)))) !== 0) || _la === VtlParser.DURATION || _la === VtlParser.SCALAR || _la === VtlParser.TIME)) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueDomainName(): ValueDomainNameContext {
		let _localctx: ValueDomainNameContext = new ValueDomainNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, VtlParser.RULE_valueDomainName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1664;
				this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setName(): SetNameContext {
		let _localctx: SetNameContext = new SetNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, VtlParser.RULE_setName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1666;
				this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalarTypeConstraint(): ScalarTypeConstraintContext {
		let _localctx: ScalarTypeConstraintContext = new ScalarTypeConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, VtlParser.RULE_scalarTypeConstraint);
		let _la: number;
		try {
			this.state = 1683;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.T__0:
					this.enterOuterAlt(_localctx, 1);
					{
						{
							this.state = 1668;
							this.match(VtlParser.T__0);
							this.state = 1669;
							this.expr(0);
							this.state = 1670;
							this.match(VtlParser.T__1);
						}
					}
					break;
				case VtlParser.T__15:
					this.enterOuterAlt(_localctx, 2);
					{
						{
							this.state = 1672;
							this.match(VtlParser.T__15);
							this.state = 1673;
							this.constant();
							this.state = 1678;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === VtlParser.CARTESIAN_PER) {
								{
									{
										this.state = 1674;
										this.match(VtlParser.CARTESIAN_PER);
										this.state = 1675;
										this.constant();
									}
								}
								this.state = 1680;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 1681;
							this.match(VtlParser.T__16);
						}
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, VtlParser.RULE_dataType);
		try {
			this.state = 1691;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 182, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1685;
						this.scalarType();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1686;
						this.componentType();
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1687;
						this.datasetType();
					}
					break;

				case 4:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 1688;
						this.scalarSetType();
					}
					break;

				case 5:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 1689;
						this.operatorType();
					}
					break;

				case 6:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 1690;
						this.rulesetType();
					}
					break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentType(): ComponentTypeContext {
		let _localctx: ComponentTypeContext = new ComponentTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, VtlParser.RULE_componentType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1693;
				this.componentRole();
				this.state = 1698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.T__7) {
					{
						this.state = 1694;
						this.match(VtlParser.T__7);
						this.state = 1695;
						this.scalarType();
						this.state = 1696;
						this.match(VtlParser.T__6);
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datasetType(): DatasetTypeContext {
		let _localctx: DatasetTypeContext = new DatasetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, VtlParser.RULE_datasetType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1700;
				this.match(VtlParser.DATASET);
				this.state = 1712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.T__15) {
					{
						this.state = 1701;
						this.match(VtlParser.T__15);
						this.state = 1702;
						this.compConstraint();
						this.state = 1707;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.CARTESIAN_PER) {
							{
								{
									this.state = 1703;
									this.match(VtlParser.CARTESIAN_PER);
									this.state = 1704;
									this.compConstraint();
								}
							}
							this.state = 1709;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1710;
						this.match(VtlParser.T__16);
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compConstraint(): CompConstraintContext {
		let _localctx: CompConstraintContext = new CompConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, VtlParser.RULE_compConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1714;
				this.componentType();
				this.state = 1717;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case VtlParser.IDENTIFIER:
						{
							this.state = 1715;
							this.componentID();
						}
						break;
					case VtlParser.OPTIONAL:
						{
							this.state = 1716;
							this.multModifier();
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multModifier(): MultModifierContext {
		let _localctx: MultModifierContext = new MultModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, VtlParser.RULE_multModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1719;
				this.match(VtlParser.OPTIONAL);
				this.state = 1721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.T__2 || _la === VtlParser.T__4) {
					{
						this.state = 1720;
						_la = this._input.LA(1);
						if (!(_la === VtlParser.T__2 || _la === VtlParser.T__4)) {
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
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rulesetType(): RulesetTypeContext {
		let _localctx: RulesetTypeContext = new RulesetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, VtlParser.RULE_rulesetType);
		try {
			this.state = 1726;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.RULESET:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1723;
						this.match(VtlParser.RULESET);
					}
					break;
				case VtlParser.DATAPOINT:
				case VtlParser.DATAPOINT_ON_VD:
				case VtlParser.DATAPOINT_ON_VAR:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1724;
						this.dpRuleset();
					}
					break;
				case VtlParser.HIERARCHICAL:
				case VtlParser.HIERARCHICAL_ON_VD:
				case VtlParser.HIERARCHICAL_ON_VAR:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1725;
						this.hrRuleset();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dpRuleset(): DpRulesetContext {
		let _localctx: DpRulesetContext = new DpRulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, VtlParser.RULE_dpRuleset);
		try {
			this.state = 1739;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.DATAPOINT:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1728;
						this.match(VtlParser.DATAPOINT);
					}
					break;
				case VtlParser.DATAPOINT_ON_VD:
					this.enterOuterAlt(_localctx, 2);
					{
						{
							this.state = 1729;
							this.match(VtlParser.DATAPOINT_ON_VD);
							this.state = 1730;
							this.match(VtlParser.T__15);
							this.state = 1731;
							this.prodValueDomains();
							this.state = 1732;
							this.match(VtlParser.T__16);
						}
					}
					break;
				case VtlParser.DATAPOINT_ON_VAR:
					this.enterOuterAlt(_localctx, 3);
					{
						{
							this.state = 1734;
							this.match(VtlParser.DATAPOINT_ON_VAR);
							this.state = 1735;
							this.match(VtlParser.T__15);
							this.state = 1736;
							this.prodVariables();
							this.state = 1737;
							this.match(VtlParser.T__16);
						}
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hrRuleset(): HrRulesetContext {
		let _localctx: HrRulesetContext = new HrRulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, VtlParser.RULE_hrRuleset);
		let _la: number;
		try {
			this.state = 1767;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case VtlParser.HIERARCHICAL:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 1741;
						this.match(VtlParser.HIERARCHICAL);
					}
					break;
				case VtlParser.HIERARCHICAL_ON_VD:
					this.enterOuterAlt(_localctx, 2);
					{
						{
							this.state = 1742;
							this.match(VtlParser.HIERARCHICAL_ON_VD);
							this.state = 1752;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.T__15) {
								{
									this.state = 1743;
									this.match(VtlParser.T__15);
									this.state = 1744;
									this.match(VtlParser.IDENTIFIER);
									this.state = 1749;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === VtlParser.T__12) {
										{
											this.state = 1745;
											this.match(VtlParser.T__12);
											this.state = 1746;
											this.prodValueDomains();
											this.state = 1747;
											this.match(VtlParser.T__13);
										}
									}

									this.state = 1751;
									this.match(VtlParser.T__16);
								}
							}

						}
					}
					break;
				case VtlParser.HIERARCHICAL_ON_VAR:
					this.enterOuterAlt(_localctx, 3);
					{
						{
							this.state = 1754;
							this.match(VtlParser.HIERARCHICAL_ON_VAR);
							this.state = 1765;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === VtlParser.T__15) {
								{
									this.state = 1755;
									this.match(VtlParser.T__15);
									this.state = 1756;
									this.varID();
									this.state = 1761;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									if (_la === VtlParser.T__12) {
										{
											this.state = 1757;
											this.match(VtlParser.T__12);
											this.state = 1758;
											this.prodVariables();
											this.state = 1759;
											this.match(VtlParser.T__13);
										}
									}

									this.state = 1763;
									this.match(VtlParser.T__16);
								}
							}

						}
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prodValueDomains(): ProdValueDomainsContext {
		let _localctx: ProdValueDomainsContext = new ProdValueDomainsContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, VtlParser.RULE_prodValueDomains);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1769;
				this.match(VtlParser.IDENTIFIER);
				this.state = 1774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.T__4) {
					{
						{
							this.state = 1770;
							this.match(VtlParser.T__4);
							this.state = 1771;
							this.match(VtlParser.IDENTIFIER);
						}
					}
					this.state = 1776;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prodVariables(): ProdVariablesContext {
		let _localctx: ProdVariablesContext = new ProdVariablesContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, VtlParser.RULE_prodVariables);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1777;
				this.varID();
				this.state = 1782;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.T__4) {
					{
						{
							this.state = 1778;
							this.match(VtlParser.T__4);
							this.state = 1779;
							this.varID();
						}
					}
					this.state = 1784;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorType(): OperatorTypeContext {
		let _localctx: OperatorTypeContext = new OperatorTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, VtlParser.RULE_operatorType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1785;
				this.inputParameterType();
				this.state = 1790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.T__4) {
					{
						{
							this.state = 1786;
							this.match(VtlParser.T__4);
							this.state = 1787;
							this.inputParameterType();
						}
					}
					this.state = 1792;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1793;
				this.match(VtlParser.T__17);
				this.state = 1794;
				this.outputParameterType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputParameterType(): InputParameterTypeContext {
		let _localctx: InputParameterTypeContext = new InputParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, VtlParser.RULE_inputParameterType);
		try {
			this.state = 1799;
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
						this.state = 1796;
						this.scalarType();
					}
					break;
				case VtlParser.DATASET:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1797;
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
						this.state = 1798;
						this.componentType();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputParameterType(): OutputParameterTypeContext {
		let _localctx: OutputParameterTypeContext = new OutputParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, VtlParser.RULE_outputParameterType);
		try {
			this.state = 1806;
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
						this.state = 1801;
						this.scalarType();
					}
					break;
				case VtlParser.DATASET:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1802;
						this.datasetType();
					}
					break;
				case VtlParser.SET:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1803;
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
						this.state = 1804;
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
						this.state = 1805;
						this.componentType();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalarSetType(): ScalarSetTypeContext {
		let _localctx: ScalarSetTypeContext = new ScalarSetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, VtlParser.RULE_scalarSetType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1808;
				this.match(VtlParser.SET);
				this.state = 1813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.T__7) {
					{
						this.state = 1809;
						this.match(VtlParser.T__7);
						this.state = 1810;
						this.scalarType();
						this.state = 1811;
						this.match(VtlParser.T__6);
					}
				}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public retainType(): RetainTypeContext {
		let _localctx: RetainTypeContext = new RetainTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, VtlParser.RULE_retainType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1815;
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
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defineDatapointRuleset(): DefineDatapointRulesetContext {
		let _localctx: DefineDatapointRulesetContext = new DefineDatapointRulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, VtlParser.RULE_defineDatapointRuleset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1817;
				this.match(VtlParser.DEFINE);
				this.state = 1818;
				this.match(VtlParser.DATAPOINT);
				this.state = 1819;
				this.match(VtlParser.RULESET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defineHierarchicalRuleset(): DefineHierarchicalRulesetContext {
		let _localctx: DefineHierarchicalRulesetContext = new DefineHierarchicalRulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, VtlParser.RULE_defineHierarchicalRuleset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1821;
				this.match(VtlParser.DEFINE);
				this.state = 1822;
				this.match(VtlParser.HIERARCHICAL);
				this.state = 1823;
				this.match(VtlParser.RULESET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endDatapointRuleset(): EndDatapointRulesetContext {
		let _localctx: EndDatapointRulesetContext = new EndDatapointRulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, VtlParser.RULE_endDatapointRuleset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1825;
				this.match(VtlParser.END);
				this.state = 1826;
				this.match(VtlParser.DATAPOINT);
				this.state = 1827;
				this.match(VtlParser.RULESET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endHierarchicalRuleset(): EndHierarchicalRulesetContext {
		let _localctx: EndHierarchicalRulesetContext = new EndHierarchicalRulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, VtlParser.RULE_endHierarchicalRuleset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1829;
				this.match(VtlParser.END);
				this.state = 1830;
				this.match(VtlParser.HIERARCHICAL);
				this.state = 1831;
				this.match(VtlParser.RULESET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defineDataStructure(): DefineDataStructureContext {
		let _localctx: DefineDataStructureContext = new DefineDataStructureContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, VtlParser.RULE_defineDataStructure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1833;
				this.match(VtlParser.DEFINE);
				this.state = 1834;
				this.match(VtlParser.DATA);
				this.state = 1835;
				this.match(VtlParser.STRUCTURE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
			case 4:
				return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return this.precpred(this._ctx, 15);

			case 1:
				return this.precpred(this._ctx, 14);

			case 2:
				return this.precpred(this._ctx, 13);

			case 3:
				return this.precpred(this._ctx, 9);

			case 4:
				return this.precpred(this._ctx, 8);

			case 5:
				return this.precpred(this._ctx, 7);

			case 6:
				return this.precpred(this._ctx, 3);

			case 7:
				return this.precpred(this._ctx, 12);

			case 8:
				return this.precpred(this._ctx, 11);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xFD\u0730\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x03\x02\x05\x02\u0104\n\x02\x03\x02\x07\x02\u0107\n\x02\f\x02\x0E\x02" +
		"\u010A\v\x02\x03\x02\x07\x02\u010D\n\x02\f\x02\x0E\x02\u0110\v\x02\x03" +
		"\x02\x07\x02\u0113\n\x02\f\x02\x0E\x02\u0116\v\x02\x03\x02\x05\x02\u0119" +
		"\n\x02\x03\x02\x03\x02\x03\x02\x05\x02\u011E\n\x02\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\u0123\n\x03\x03\x03\x03\x03\x05\x03\u0127\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05\u012F\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0139\n\x06\x03" +
		"\x06\x03\x06\x07\x06\u013D\n\x06\f\x06\x0E\x06\u0140\v\x06\x03\x06\x03" +
		"\x06\x05\x06\u0144\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06\u014F\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\u015E\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\u0179\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u017F" +
		"\n\x06\x07\x06\u0181\n\x06\f\x06\x0E\x06\u0184\v\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0190" +
		"\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\u0196\n\b\x03\b\x03\b\x03\b\x05\b" +
		"\u019B\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n" +
		"\x03\n\x03\n\x07\n\u01A9\n\n\f\n\x0E\n\u01AC\v\n\x03\v\x03\v\x05\v\u01B0" +
		"\n\v\x03\v\x03\v\x05\v\u01B4\n\v\x03\v\x05\v\u01B7\n\v\x03\f\x03\f\x05" +
		"\f\u01BB\n\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\u01C4\n\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u01CA\n\r\x07\r\u01CC\n\r\f\r\x0E\r\u01CF" +
		"\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01D5\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x07\x0E\u01DA\n\x0E\f\x0E\x0E\x0E\u01DD\v\x0E\x03\x0F\x05\x0F" +
		"\u01E0\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01E7\n\x0F" +
		"\x03\x10\x03\x10\x05\x10\u01EB\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\u01F9" +
		"\n\x12\f\x12\x0E\x12\u01FC\v\x12\x03\x13\x03\x13\x05\x13\u0200\n\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0206\n\x13\x03\x13\x03\x13\x05\x13" +
		"\u020A\n\x13\x03\x13\x05\x13\u020D\n\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x07\x14\u0213\n\x14\f\x14\x0E\x14\u0216\v\x14\x03\x15\x03\x15\x03\x15" +
		"\x05\x15\u021B\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0220\n\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0229\n\x17\f" +
		"\x17\x0E\x17\u022C\v\x17\x05\x17\u022E\n\x17\x03\x17\x03\x17\x03\x17\x05" +
		"\x17\u0233\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u023E\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\u0244\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0249\n\x19\x07\x19\u024B" +
		"\n\x19\f\x19\x0E\x19\u024E\v\x19\x05\x19\u0250\n\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0259\n\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u0282\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02BE" +
		"\n\x1A\x03\x1A\x03\x1A\x05\x1A\u02C2\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02CD\n\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u02D1\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02DC\n\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u030B\n\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0313\n\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0319\n\x1C\f\x1C\x0E\x1C\u031C\v\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0324\n\x1D\f" +
		"\x1D\x0E\x1D\u0327\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u0331\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0336" +
		"\n\x1E\x07\x1E\u0338\n\x1E\f\x1E\x0E\x1E\u033B\v\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0340\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0344\n\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u034E\n\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u0352\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x05" +
		" \u0359\n \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x05\"\u0369\n\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x05" +
		"#\u0372\n#\x03#\x03#\x03#\x05#\u0377\n#\x05#\u0379\n#\x03#\x03#\x05#\u037D" +
		"\n#\x03#\x03#\x03$\x03$\x03$\x03$\x05$\u0385\n$\x03$\x05$\u0388\n$\x03" +
		"$\x03$\x05$\u038C\n$\x03$\x05$\u038F\n$\x03$\x03$\x03%\x03%\x03%\x03%" +
		"\x03%\x03%\x03%\x03%\x03%\x07%\u039C\n%\f%\x0E%\u039F\v%\x05%\u03A1\n" +
		"%\x03%\x05%\u03A4\n%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x07&\u03B1\n&\f&\x0E&\u03B4\v&\x05&\u03B6\n&\x03&\x03&\x05&\u03BA" +
		"\n&\x03&\x05&\u03BD\n&\x03&\x05&\u03C0\n&\x03&\x05&\u03C3\n&\x03&\x03" +
		"&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)" +
		"\x03)\x03)\x07)\u03D6\n)\f)\x0E)\u03D9\v)\x05)\u03DB\n)\x03)\x03)\x05" +
		")\u03DF\n)\x03)\x03)\x05)\u03E3\n)\x03)\x03)\x05)\u03E7\n)\x03)\x03)\x05" +
		")\u03EB\n)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x05*\u03F9\n*\x03+\x03+\x05+\u03FD\n+\x03+\x03+\x05+\u0401\n+\x03+\x03" +
		"+\x07+\u0405\n+\f+\x0E+\u0408\v+\x03+\x03+\x03+\x05+\u040D\n+\x03+\x05" +
		"+\u0410\n+\x03+\x05+\u0413\n+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03," +
		"\x07,\u041D\n,\f,\x0E,\u0420\v,\x03-\x03-\x03-\x03-\x05-\u0426\n-\x03" +
		"-\x03-\x03-\x05-\u042B\n-\x07-\u042D\n-\f-\x0E-\u0430\v-\x03.\x03.\x03" +
		".\x05.\u0435\n.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x05/\u0447\n/\x030\x030\x030\x030\x050\u044D" +
		"\n0\x030\x030\x031\x031\x031\x051\u0454\n1\x031\x031\x031\x031\x051\u045A" +
		"\n1\x071\u045C\n1\f1\x0E1\u045F\v1\x031\x031\x031\x031\x071\u0465\n1\f" +
		"1\x0E1\u0468\v1\x051\u046A\n1\x032\x052\u046D\n2\x032\x032\x032\x052\u0472" +
		"\n2\x032\x032\x052\u0476\n2\x032\x052\u0479\n2\x033\x053\u047C\n3\x03" +
		"3\x033\x033\x073\u0481\n3\f3\x0E3\u0484\v3\x034\x034\x054\u0488\n4\x03" +
		"4\x034\x034\x054\u048D\n4\x034\x074\u0490\n4\f4\x0E4\u0493\v4\x035\x03" +
		"5\x035\x035\x036\x056\u049A\n6\x036\x036\x036\x036\x076\u04A0\n6\f6\x0E" +
		"6\u04A3\v6\x036\x056\u04A6\n6\x036\x056\u04A9\n6\x037\x057\u04AC\n7\x03" +
		"7\x037\x037\x077\u04B1\n7\f7\x0E7\u04B4\v7\x038\x038\x038\x038\x039\x03" +
		"9\x039\x039\x079\u04BE\n9\f9\x0E9\u04C1\v9\x03:\x03:\x03:\x03:\x07:\u04C7" +
		"\n:\f:\x0E:\u04CA\v:\x03;\x03;\x03;\x05;\u04CF\n;\x03<\x03<\x03<\x03<" +
		"\x05<\u04D5\n<\x03<\x03<\x03<\x03<\x03<\x05<\u04DC\n<\x03<\x03<\x03<\x03" +
		"<\x03<\x05<\u04E3\n<\x03<\x03<\x03<\x03<\x03<\x05<\u04EA\n<\x03<\x03<" +
		"\x07<\u04EE\n<\f<\x0E<\u04F1\v<\x03=\x03=\x03=\x03>\x03>\x03?\x03?\x03" +
		"?\x07?\u04FB\n?\f?\x0E?\u04FE\v?\x03@\x05@\u0501\n@\x03@\x03@\x03@\x03" +
		"@\x03A\x03A\x03A\x07A\u050A\nA\fA\x0EA\u050D\vA\x03B\x05B\u0510\nB\x03" +
		"B\x03B\x03C\x03C\x03C\x05C\u0517\nC\x03C\x05C\u051A\nC\x03D\x03D\x03D" +
		"\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x07E\u0527\nE\fE\x0EE\u052A\v" +
		"E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05" +
		"F\u0539\nF\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x05F\u0564\nF\x03G\x03G\x03G\x03G\x07G\u056A\nG\fG\x0EG\u056D\v" +
		"G\x03H\x05H\u0570\nH\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x05I\u057C\nI\x03J\x03J\x03J\x03J\x07J\u0582\nJ\fJ\x0EJ\u0585\vJ\x03" +
		"K\x03K\x03K\x03K\x03K\x05K\u058C\nK\x03L\x03L\x03L\x03L\x07L\u0592\nL" +
		"\fL\x0EL\u0595\vL\x03M\x03M\x03M\x03M\x03M\x05M\u059C\nM\x03N\x03N\x03" +
		"N\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03" +
		"P\x03P\x03P\x07P\u05B1\nP\fP\x0EP\u05B4\vP\x03Q\x03Q\x03Q\x05Q\u05B9\n" +
		"Q\x03Q\x03Q\x03Q\x05Q\u05BE\nQ\x05Q\u05C0\nQ\x03R\x03R\x03R\x03R\x03R" +
		"\x07R\u05C7\nR\fR\x0ER\u05CA\vR\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x07" +
		"R\u05E1\nR\fR\x0ER\u05E4\vR\x03R\x03R\x05R\u05E8\nR\x03S\x03S\x03S\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u05F4\nS\x03S\x03S\x03T\x03T\x03" +
		"T\x03T\x03T\x05T\u05FD\nT\x03T\x03T\x03T\x03T\x05T\u0603\nT\x07T\u0605" +
		"\nT\fT\x0ET\u0608\vT\x03T\x05T\u060B\nT\x03T\x05T\u060E\nT\x03T\x03T\x03" +
		"U\x03U\x03U\x03U\x03U\x05U\u0617\nU\x03U\x03U\x03U\x03U\x05U\u061D\nU" +
		"\x07U\u061F\nU\fU\x0EU\u0622\vU\x03U\x03U\x05U\u0626\nU\x03U\x05U\u0629" +
		"\nU\x03V\x03V\x03W\x03W\x03W\x03W\x07W\u0631\nW\fW\x0EW\u0634\vW\x03W" +
		"\x05W\u0637\nW\x03X\x03X\x05X\u063B\nX\x03X\x05X\u063E\nX\x03X\x03X\x05" +
		"X\u0642\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u064E" +
		"\nZ\x03[\x03[\x03[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03_\x03_\x03`\x03" +
		"`\x03a\x03a\x03b\x03b\x03c\x03c\x03d\x03d\x03e\x03e\x03f\x03f\x03f\x03" +
		"f\x03f\x03f\x05f\u066D\nf\x03g\x03g\x03h\x03h\x03i\x03i\x03i\x05i\u0676" +
		"\ni\x03i\x05i\u0679\ni\x03i\x05i\u067C\ni\x03i\x05i\u067F\ni\x03j\x03" +
		"j\x03k\x03k\x03l\x03l\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x07m\u068F" +
		"\nm\fm\x0Em\u0692\vm\x03m\x03m\x05m\u0696\nm\x03n\x03n\x03n\x03n\x03n" +
		"\x03n\x05n\u069E\nn\x03o\x03o\x03o\x03o\x03o\x05o\u06A5\no\x03p\x03p\x03" +
		"p\x03p\x03p\x07p\u06AC\np\fp\x0Ep\u06AF\vp\x03p\x03p\x05p\u06B3\np\x03" +
		"q\x03q\x03q\x05q\u06B8\nq\x03r\x03r\x05r\u06BC\nr\x03s\x03s\x03s\x05s" +
		"\u06C1\ns\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x05t" +
		"\u06CE\nt\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x05u\u06D8\nu\x03u\x05" +
		"u\u06DB\nu\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x05u\u06E4\nu\x03u\x03u" +
		"\x05u\u06E8\nu\x05u\u06EA\nu\x03v\x03v\x03v\x07v\u06EF\nv\fv\x0Ev\u06F2" +
		"\vv\x03w\x03w\x03w\x07w\u06F7\nw\fw\x0Ew\u06FA\vw\x03x\x03x\x03x\x07x" +
		"\u06FF\nx\fx\x0Ex\u0702\vx\x03x\x03x\x03x\x03y\x03y\x03y\x05y\u070A\n" +
		"y\x03z\x03z\x03z\x03z\x03z\x05z\u0711\nz\x03{\x03{\x03{\x03{\x03{\x05" +
		"{\u0718\n{\x03|\x03|\x03}\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03\x7F\x03" +
		"\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\u04EF\x02\x03\n\x82\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02" +
		"\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02" +
		"\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02" +
		"\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\x02" +
		"\x1E\x04\x02\x05\x06((\x03\x02\x07\b\x03\x02\x05\x06\x03\x02\t\x0E\x03" +
		"\x02\r\x0E\x03\x02&\'\x03\x02*+\x03\x02jk\x03\x02\t\r\x04\x02==\xC4\xC4" +
		"\x04\x02hh\xEA\xEA\x03\x02GH\x04\x02==ii\x05\x02==ii\xDB\xDB\x03\x02\xD4" +
		"\xD9\x04\x02nn\xCF\xCF\x05\x02nnuu\xCE\xCE\x04\x02==\xD3\xD3\x03\x02C" +
		"D\x04\x02BB\x88\x8C\x05\x02EFX[\x81\x84\x04\x02\xE4\xE4\xE7\xE7\x03\x02" +
		"\xB5\xB8\x04\x02\xE4\xE4\xE7\xEA\x04\x02\x9D\x9E\xA1\xA3\x06\x02\x9D\xA2" +
		"\xC5\xC5\xDC\xDC\xF7\xF7\x04\x02\x05\x05\x07\x07\x04\x02==\xE8\xE8\x02" +
		"\u07DF\x02\u011D\x03\x02\x02\x02\x04\u0126\x03\x02\x02\x02\x06\u0128\x03" +
		"\x02\x02\x02\b\u012E\x03\x02\x02\x02\n\u015D\x03\x02\x02\x02\f\u018F\x03" +
		"\x02\x02\x02\x0E\u019A\x03\x02\x02\x02\x10\u019C\x03\x02\x02\x02\x12\u01A5" +
		"\x03\x02\x02\x02\x14\u01AF\x03\x02\x02\x02\x16\u01B8\x03\x02\x02\x02\x18" +
		"\u01BF\x03\x02\x02\x02\x1A\u01D4\x03\x02\x02\x02\x1C\u01DF\x03\x02\x02" +
		"\x02\x1E\u01E8\x03\x02\x02\x02 \u01EC\x03\x02\x02\x02\"\u01F5\x03\x02" +
		"\x02\x02$\u01FF\x03\x02\x02\x02&\u020E\x03\x02\x02\x02(\u0217\x03\x02" +
		"\x02\x02*\u021F\x03\x02\x02\x02,\u0221\x03\x02\x02\x02.\u0239\x03\x02" +
		"\x02\x020\u023F\x03\x02\x02\x022\u030A\x03\x02\x02\x024\u0312\x03\x02" +
		"\x02\x026\u0314\x03\x02\x02\x028\u031F\x03\x02\x02\x02:\u032A\x03\x02" +
		"\x02\x02<\u0347\x03\x02\x02\x02>\u0355\x03\x02\x02\x02@\u035C\x03\x02" +
		"\x02\x02B\u0363\x03\x02\x02\x02D\u036C\x03\x02\x02\x02F\u0380\x03\x02" +
		"\x02\x02H\u0392\x03\x02\x02\x02J\u03A7\x03\x02\x02\x02L\u03C6\x03\x02" +
		"\x02\x02N\u03C9\x03\x02\x02\x02P\u03CC\x03\x02\x02\x02R\u03F8\x03\x02" +
		"\x02\x02T\u03FC\x03\x02\x02\x02V\u0417\x03\x02\x02\x02X\u0421\x03\x02" +
		"\x02\x02Z\u0434\x03\x02\x02\x02\\\u0446\x03\x02\x02\x02^\u0448\x03\x02" +
		"\x02\x02`\u0450\x03\x02\x02\x02b\u046C\x03\x02\x02\x02d\u047B\x03\x02" +
		"\x02\x02f\u0485\x03\x02\x02\x02h\u0494\x03\x02\x02\x02j\u0499\x03\x02" +
		"\x02\x02l\u04AB\x03\x02\x02\x02n\u04B5\x03\x02\x02\x02p\u04B9\x03\x02" +
		"\x02\x02r\u04C2\x03\x02\x02\x02t\u04CE\x03\x02\x02\x02v\u04D0\x03\x02" +
		"\x02\x02x\u04F2\x03\x02\x02\x02z\u04F5\x03\x02\x02\x02|\u04F7\x03\x02" +
		"\x02\x02~\u0500\x03\x02\x02\x02\x80\u0506\x03\x02\x02\x02\x82\u050F\x03" +
		"\x02\x02\x02\x84\u0513\x03\x02\x02\x02\x86\u051B\x03\x02\x02\x02\x88\u051E" +
		"\x03\x02\x02\x02\x8A\u0563\x03\x02\x02\x02\x8C\u0565\x03\x02\x02\x02\x8E" +
		"\u056F\x03\x02\x02\x02\x90\u057B\x03\x02\x02\x02\x92\u057D\x03\x02\x02" +
		"\x02\x94\u058B\x03\x02\x02\x02\x96\u058D\x03\x02\x02\x02\x98\u059B\x03" +
		"\x02\x02\x02\x9A\u059D\x03\x02\x02\x02\x9C\u05A2\x03\x02\x02\x02\x9E\u05A7" +
		"\x03\x02\x02\x02\xA0\u05BF\x03\x02\x02\x02\xA2\u05E7\x03\x02\x02\x02\xA4" +
		"\u05E9\x03\x02\x02\x02\xA6\u05F7\x03\x02\x02\x02\xA8\u0611\x03\x02\x02" +
		"\x02\xAA\u062A\x03\x02\x02\x02\xAC\u062C\x03\x02\x02\x02\xAE\u0638\x03" +
		"\x02\x02\x02\xB0\u0643\x03\x02\x02\x02\xB2\u064D\x03\x02\x02\x02\xB4\u064F" +
		"\x03\x02\x02\x02\xB6\u0652\x03\x02\x02\x02\xB8\u0654\x03\x02\x02\x02\xBA" +
		"\u0656\x03\x02\x02\x02\xBC\u0658\x03\x02\x02\x02\xBE\u065A\x03\x02\x02" +
		"\x02\xC0\u065C\x03\x02\x02\x02\xC2\u065E\x03\x02\x02\x02\xC4\u0660\x03" +
		"\x02\x02\x02\xC6\u0662\x03\x02\x02\x02\xC8\u0664\x03\x02\x02\x02\xCA\u066C" +
		"\x03\x02\x02\x02\xCC\u066E\x03\x02\x02\x02\xCE\u0670\x03\x02\x02\x02\xD0" +
		"\u0675\x03\x02\x02\x02\xD2\u0680\x03\x02\x02\x02\xD4\u0682\x03\x02\x02" +
		"\x02\xD6\u0684\x03\x02\x02\x02\xD8\u0695\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\xDA\u069D\x03\x02\x02\x02\xDC\u069F\x03\x02\x02\x02\xDE\u06A6" +
		"\x03\x02\x02\x02\xE0\u06B4\x03\x02\x02\x02\xE2\u06B9\x03\x02\x02\x02\xE4" +
		"\u06C0\x03\x02\x02\x02\xE6\u06CD\x03\x02\x02\x02\xE8\u06E9\x03\x02\x02" +
		"\x02\xEA\u06EB\x03\x02\x02\x02\xEC\u06F3\x03\x02\x02\x02\xEE\u06FB\x03" +
		"\x02\x02\x02\xF0\u0709\x03\x02\x02\x02\xF2\u0710\x03\x02\x02\x02\xF4\u0712" +
		"\x03\x02\x02\x02\xF6\u0719\x03\x02\x02\x02\xF8\u071B\x03\x02\x02\x02\xFA" +
		"\u071F\x03\x02\x02\x02\xFC\u0723\x03\x02\x02\x02\xFE\u0727\x03\x02\x02" +
		"\x02\u0100\u072B\x03\x02\x02\x02\u0102\u0104\x05\x04\x03\x02\u0103\u0102" +
		"\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0108\x03\x02\x02\x02" +
		"\u0105\u0107\x07\xFA\x02\x02\u0106\u0105\x03\x02\x02\x02\u0107\u010A\x03" +
		"\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109" +
		"\u010E\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010D\x07\xFB" +
		"\x02\x02\u010C\u010B\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E" +
		"\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0111\x03\x02" +
		"\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0113\x07\xF9\x02\x02\u0112" +
		"\u0103\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0112\x03\x02" +
		"\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116" +
		"\u0114\x03\x02\x02\x02\u0117\u0119\x05\x04\x03\x02\u0118\u0117\x03\x02" +
		"\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A" +
		"\u011E\x07\x02\x02\x03\u011B\u011E\x07\xFA\x02\x02\u011C\u011E\x07\xFB" +
		"\x02\x02\u011D\u0114\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D" +
		"\u011C\x03\x02\x02\x02\u011E\x03\x03\x02\x02\x02\u011F\u0120\x05\xC0a" +
		"\x02\u0120\u0121\x07\x15\x02\x02\u0121\u0123\x03\x02\x02\x02\u0122\u011F" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
		"\u0124\u0127\x05\n\x06\x02\u0125\u0127\x05\x06\x04\x02\u0126\u0122\x03" +
		"\x02\x02\x02\u0126\u0125\x03\x02\x02\x02\u0127\x05\x03\x02\x02\x02\u0128" +
		"\u0129\x05\xC0a\x02\u0129\u012A\x07q\x02\x02\u012A\u012B\x05\n\x06\x02" +
		"\u012B\x07\x03\x02\x02\x02\u012C\u012F\x05\n\x06\x02\u012D\u012F\x07h" +
		"\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F" +
		"\t\x03\x02\x02\x02\u0130\u0131\b\x06\x01\x02\u0131\u013E\x052\x1A\x02" +
		"\u0132\u0138\x07\x03\x02\x02\u0133\u0139\x05R*\x02\u0134\u0135\x05\n\x06" +
		"\x02\u0135\u0136\x07\x15\x02\x02\u0136\u0137\x05\n\x06\x02\u0137\u0139" +
		"\x03\x02\x02\x02\u0138\u0133\x03\x02\x02\x02\u0138\u0134\x03\x02\x02\x02" +
		"\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x07\x04\x02\x02\u013B\u013D\x03" +
		"\x02\x02\x02\u013C\u0132\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E" +
		"\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0143\x03\x02" +
		"\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0142\x07\x16\x02\x02\u0142" +
		"\u0144\x05\xC2b\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02" +
		"\x02\u0144\u015E\x03\x02\x02\x02\u0145\u0146\t\x02\x02\x02\u0146\u015E" +
		"\x05\n\x06\x12\u0147\u0148\x078\x02\x02\u0148\u0149\x07\x0F\x02\x02\u0149" +
		"\u014A\x05\n\x06\x02\u014A\u014B\x073\x02\x02\u014B\u014E\x05\n\x06\x02" +
		"\u014C\u014D\x073\x02\x02\u014D\u014F\x05\xF6|\x02\u014E\u014C\x03\x02" +
		"\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150" +
		"\u0151\x07\x10\x02\x02\u0151\u015E\x03\x02\x02\x02\u0152\u0153\x07\x18" +
		"\x02\x02\u0153\u0154\x05\n\x06\x02\u0154\u0155\x07\x19\x02\x02\u0155\u0156" +
		"\x05\n\x06\x02\u0156\u0157\x07\x1A\x02\x02\u0157\u0158\x05\n\x06\b\u0158" +
		"\u015E\x03\x02\x02\x02\u0159\u015E\x05\f\x07\x02\u015A\u015E\x052\x1A" +
		"\x02\u015B\u015E\x05\xCCg\x02\u015C\u015E\x07\xEB\x02\x02\u015D\u0130" +
		"\x03\x02\x02\x02\u015D\u0145\x03\x02\x02\x02\u015D\u0147\x03\x02\x02\x02" +
		"\u015D\u0152\x03\x02\x02\x02\u015D\u0159\x03\x02\x02\x02\u015D\u015A\x03" +
		"\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015C\x03\x02\x02\x02\u015E" +
		"\u0182\x03\x02\x02\x02\u015F\u0160\f\x11\x02\x02\u0160\u0161\t\x03\x02" +
		"\x02\u0161\u0181\x05\n\x06\x12\u0162\u0163\f\x10\x02\x02\u0163\u0164\t" +
		"\x04\x02\x02\u0164\u0181\x05\n\x06\x11\u0165\u0166\f\x0F\x02\x02\u0166" +
		"\u0167\t\x05\x02\x02\u0167\u0181\x05\n\x06\x10\u0168\u0169\f\v\x02\x02" +
		"\u0169\u016A\t\x06\x02\x02\u016A\u0181\x05\n\x06\f\u016B\u016C\f\n\x02" +
		"\x02\u016C\u016D\x07%\x02\x02\u016D\u0181\x05\n\x06\v\u016E\u016F\f\t" +
		"\x02\x02\u016F\u0170\t\x07\x02\x02\u0170\u0181\x05\n\x06\n\u0171\u0172" +
		"\f\x05\x02\x02\u0172\u0173\x07S\x02\x02\u0173\u0181\x05\n\x06\x06\u0174" +
		"\u0175\f\x0E\x02\x02\u0175\u0178\t\b\x02\x02\u0176\u0179\x058\x1D\x02" +
		"\u0177\u0179\x07\xEB\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0177\x03" +
		"\x02\x02\x02\u0179\u0181\x03\x02\x02\x02\u017A\u017B\f\r\x02\x02\u017B" +
		"\u017C\x078\x02\x02\u017C\u017E\x05\n\x06\x02\u017D\u017F\x07=\x02\x02" +
		"\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0181\x03" +
		"\x02\x02\x02\u0180\u015F\x03\x02\x02\x02\u0180\u0162\x03\x02\x02\x02\u0180" +
		"\u0165\x03\x02\x02\x02\u0180\u0168\x03\x02\x02\x02\u0180\u016B\x03\x02" +
		"\x02\x02\u0180\u016E\x03\x02\x02\x02\u0180\u0171\x03\x02\x02\x02\u0180" +
		"\u0174\x03\x02\x02\x02\u0180\u017A\x03\x02\x02\x02\u0181\u0184\x03\x02" +
		"\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183" +
		"\v\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0190\x05F$\x02\u0186" +
		"\u0190\x05*\x16\x02\u0187\u0190\x05\xA6T\x02\u0188\u0190\x05\xA8U\x02" +
		"\u0189\u0190\x05T+\x02\u018A\u0190\x05\x8AF\x02\u018B\u0190\x05\x0E\b" +
		"\x02\u018C\u0190\x05\xA2R\x02\u018D\u0190\x050\x19\x02\u018E\u0190\x05" +
		"^0\x02\u018F\u0185\x03\x02\x02\x02\u018F\u0186\x03\x02\x02\x02\u018F\u0187" +
		"\x03\x02\x02\x02\u018F\u0188\x03\x02\x02\x02\u018F\u0189\x03\x02\x02\x02" +
		"\u018F\u018A\x03\x02\x02\x02\u018F\u018B\x03\x02\x02\x02\u018F\u018C\x03" +
		"\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u018E\x03\x02\x02\x02\u0190" +
		"\r\x03\x02\x02\x02\u0191\u019B\x05B\"\x02\u0192\u0195\x05> \x02\u0193" +
		"\u0194\t\x05\x02\x02\u0194\u0196\x05\n\x06\x02\u0195\u0193\x03\x02\x02" +
		"\x02\u0195\u0196\x03\x02\x02\x02\u0196\u019B\x03\x02\x02\x02\u0197\u019B" +
		"\x05@!\x02\u0198\u019B\x05D#\x02\u0199\u019B\x07\x1D\x02\x02\u019A\u0191" +
		"\x03\x02\x02\x02\u019A\u0192\x03\x02\x02\x02\u019A\u0197\x03\x02\x02\x02" +
		"\u019A\u0198\x03\x02\x02\x02\u019A\u0199\x03\x02\x02\x02\u019B\x0F\x03" +
		"\x02\x02\x02\u019C\u019D\x05\xFA~\x02\u019D\u019E\x05\xBE`\x02\u019E\u019F" +
		"\x07\x0F\x02\x02\u019F\u01A0\x05\x16\f\x02\u01A0\u01A1\x07\x10\x02\x02" +
		"\u01A1\u01A2\x07\xAC\x02\x02\u01A2\u01A3\x05\x12\n\x02\u01A3\u01A4\x05" +
		"\xFE\x80\x02\u01A4\x11\x03\x02\x02\x02\u01A5\u01AA\x05\x14\v\x02\u01A6" +
		"\u01A7\x07\xF9\x02\x02\u01A7\u01A9\x05\x14\v\x02\u01A8\u01A6\x03\x02\x02" +
		"\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB" +
		"\x03\x02\x02\x02\u01AB\x13\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02" +
		"\u01AD\u01AE\x07\xEB\x02\x02\u01AE\u01B0\x07\x11\x02\x02\u01AF\u01AD\x03" +
		"\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1" +
		"\u01B3\x05\x1A\x0E\x02\u01B2\u01B4\x05L\'\x02\u01B3\u01B2\x03\x02\x02" +
		"\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B7" +
		"\x05N(\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
		"\x15\x03\x02\x02\x02\u01B8\u01BA\t\t\x02\x02\u01B9\u01BB\x05\x18\r\x02" +
		"\u01BA\u01B9\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x03" +
		"\x02\x02\x02\u01BC\u01BD\x07u\x02\x02\u01BD\u01BE\x07\xEB\x02\x02\u01BE" +
		"\x17\x03\x02\x02\x02\u01BF\u01C0\x07\x9C\x02\x02\u01C0\u01C3\x07\xEB\x02" +
		"\x02\u01C1\u01C2\x07$\x02\x02\u01C2\u01C4\x07\xEB\x02\x02\u01C3\u01C1" +
		"\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01CD\x03\x02\x02\x02" +
		"\u01C5\u01C6\x073\x02\x02\u01C6\u01C9\x07\xEB\x02\x02\u01C7\u01C8\x07" +
		"$\x02\x02\u01C8\u01CA\x07\xEB\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9" +
		"\u01CA\x03\x02\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01C5\x03\x02" +
		"\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD" +
		"\u01CE\x03\x02\x02\x02\u01CE\x19\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02" +
		"\x02\u01D0\u01D1\x07\xAD\x02\x02\u01D1\u01D2\x05\n\x06\x02\u01D2\u01D3" +
		"\x07\x19\x02\x02\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01D0\x03\x02\x02\x02" +
		"\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D7\x05" +
		"\x1E\x10\x02\u01D7\u01DB\x05\x1C\x0F\x02\u01D8\u01DA\x05\x1C\x0F\x02\u01D9" +
		"\u01D8\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03\x02" +
		"\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\x1B\x03\x02\x02\x02\u01DD\u01DB" +
		"\x03\x02\x02\x02\u01DE\u01E0\t\x04\x02\x02\u01DF\u01DE\x03\x02\x02\x02" +
		"\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E6\x07" +
		"\xEB\x02\x02\u01E2\u01E3\x07\x03\x02\x02\u01E3\u01E4\x05\n\x06\x02\u01E4" +
		"\u01E5\x07\x04\x02\x02\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E2\x03\x02" +
		"\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\x1D\x03\x02\x02\x02\u01E8\u01EA" +
		"\x07\xEB\x02\x02\u01E9\u01EB\t\n\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA" +
		"\u01EB\x03\x02\x02\x02\u01EB\x1F\x03\x02\x02\x02\u01EC\u01ED\x05\xF8}" +
		"\x02\u01ED\u01EE\x05\xBE`\x02\u01EE\u01EF\x07\x0F\x02\x02\u01EF\u01F0" +
		"\x05&\x14\x02\u01F0\u01F1\x07\x10\x02\x02\u01F1\u01F2\x07\xAC\x02\x02" +
		"\u01F2\u01F3\x05\"\x12\x02\u01F3\u01F4\x05\xFC\x7F\x02\u01F4!\x03\x02" +
		"\x02\x02\u01F5\u01FA\x05$\x13\x02\u01F6\u01F7\x07\xF9\x02\x02\u01F7\u01F9" +
		"\x05$\x13\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02" +
		"\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB#\x03\x02" +
		"\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\x07\xEB\x02\x02\u01FE" +
		"\u0200\x07\x11\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u0200\x03\x02" +
		"\x02\x02\u0200\u0205\x03\x02\x02\x02\u0201\u0202\x07\xAD\x02\x02\u0202" +
		"\u0203\x05\n\x06\x02\u0203\u0204\x07\x19\x02\x02\u0204\u0206\x03\x02\x02" +
		"\x02\u0205\u0201\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207" +
		"\x03\x02\x02\x02\u0207\u0209\x05\n\x06\x02\u0208\u020A\x05L\'\x02\u0209" +
		"\u0208\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020C\x03\x02" +
		"\x02\x02\u020B\u020D\x05N(\x02\u020C\u020B\x03\x02\x02\x02\u020C\u020D" +
		"\x03\x02\x02\x02\u020D%\x03\x02\x02\x02\u020E\u020F\t\t\x02\x02\u020F" +
		"\u0214\x05(\x15\x02\u0210\u0211\x073\x02\x02\u0211\u0213\x05(\x15\x02" +
		"\u0212\u0210\x03\x02\x02\x02\u0213\u0216\x03\x02\x02\x02\u0214\u0212\x03" +
		"\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\'\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0217\u021A\x05\xC0a\x02\u0218\u0219\x07$\x02\x02" +
		"\u0219\u021B\x07\xEB\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03" +
		"\x02\x02\x02\u021B)\x03\x02\x02\x02\u021C\u0220\x05,\x17\x02\u021D\u0220" +
		"\x05 \x11\x02\u021E\u0220\x05\x10\t\x02\u021F\u021C\x03\x02\x02\x02\u021F" +
		"\u021D\x03\x02\x02\x02\u021F\u021E\x03\x02\x02\x02\u0220+\x03\x02\x02" +
		"\x02\u0221\u0222\x07p\x02\x02\u0222\u0223\x07o\x02\x02\u0223\u0224\x05" +
		"\xC4c\x02\u0224\u022D\x07\x0F\x02\x02\u0225\u022A\x05.\x18\x02\u0226\u0227" +
		"\x073\x02\x02\u0227\u0229\x05.\x18\x02\u0228\u0226\x03\x02\x02\x02\u0229" +
		"\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03\x02" +
		"\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022D" +
		"\u0225\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u022F\x03\x02" +
		"\x02\x02\u022F\u0232\x07\x10\x02\x02\u0230\u0231\x07\xBD\x02\x02\u0231" +
		"\u0233\x05\xDAn\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02" +
		"\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x07\xAC\x02\x02\u0235\u0236" +
		"\x05\n\x06\x02\u0236\u0237\x07v\x02\x02\u0237\u0238\x07o\x02\x02\u0238" +
		"-\x03\x02\x02\x02\u0239\u023A\x05\xC0a\x02\u023A\u023D\x05\xDAn\x02\u023B" +
		"\u023C\x07\xD0\x02\x02\u023C\u023E\x05\xCCg\x02\u023D\u023B\x03\x02\x02" +
		"\x02\u023D\u023E\x03\x02\x02\x02\u023E/\x03\x02\x02\x02\u023F\u0240\x05" +
		"\xC4c\x02\u0240\u024F\x07\x0F\x02\x02\u0241\u0244\x05\xCCg\x02\u0242\u0244" +
		"\x07h\x02\x02\u0243\u0241\x03\x02\x02\x02\u0243\u0242\x03\x02\x02\x02" +
		"\u0244\u024C\x03\x02\x02\x02\u0245\u0248\x073\x02\x02\u0246\u0249\x05" +
		"\xCCg\x02\u0247\u0249\x07h\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248\u0247" +
		"\x03\x02\x02\x02\u0249\u024B\x03\x02\x02\x02\u024A\u0245\x03\x02\x02\x02" +
		"\u024B\u024E\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024C\u024D\x03" +
		"\x02\x02\x02\u024D\u0250\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024F" +
		"\u0243\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0251\x03\x02" +
		"\x02\x02\u0251\u0252\x07\x10\x02\x02\u02521\x03\x02\x02\x02\u0253\u0254" +
		"\x07O\x02\x02\u0254\u0255\x07\x0F\x02\x02\u0255\u0258\x05\n\x06\x02\u0256" +
		"\u0257\x073\x02\x02\u0257\u0259\x05\b\x05\x02\u0258\u0256\x03\x02\x02" +
		"\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025B" +
		"\x07\x10\x02\x02\u025B\u030B\x03\x02\x02\x02\u025C\u025D\x07|\x02\x02" +
		"\u025D\u025E\x07\x0F\x02\x02\u025E\u025F\x05\n\x06\x02\u025F\u0260\x07" +
		"\x10\x02\x02\u0260\u030B\x03\x02\x02\x02\u0261\u0262\x07}\x02\x02\u0262" +
		"\u0263\x07\x0F\x02\x02\u0263\u0264\x05\n\x06\x02\u0264\u0265\x07\x10\x02" +
		"\x02\u0265\u030B\x03\x02\x02\x02\u0266\u0267\x07J\x02\x02\u0267\u0268" +
		"\x07\x0F\x02\x02\u0268\u0269\x05\n\x06\x02\u0269\u026A\x07\x10\x02\x02" +
		"\u026A\u030B\x03\x02\x02\x02\u026B\u026C\x07a\x02\x02\u026C\u026D\x07" +
		"\x0F\x02\x02\u026D\u026E\x05\n\x06\x02\u026E\u026F\x07\x10\x02\x02\u026F" +
		"\u030B\x03\x02\x02\x02\u0270\u0271\x07L\x02\x02\u0271\u0272\x07\x0F\x02" +
		"\x02\u0272\u0273\x05\n\x06\x02\u0273\u0274\x07\x10\x02\x02\u0274\u030B" +
		"\x03\x02\x02\x02\u0275\u0276\x07M\x02\x02\u0276\u0277\x07\x0F\x02\x02" +
		"\u0277\u0278\x05\n\x06\x02\u0278\u0279\x073\x02\x02\u0279\u027A\x05\n" +
		"\x06\x02\u027A\u027B\x07\x10\x02\x02\u027B\u030B\x03\x02\x02\x02\u027C" +
		"\u027D\x07N\x02\x02\u027D\u027E\x07\x0F\x02\x02\u027E\u0281\x05\n\x06" +
		"\x02\u027F\u0280\x073\x02\x02\u0280\u0282\x05\b\x05\x02\u0281\u027F\x03" +
		"\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283" +
		"\u0284\x07\x10\x02\x02\u0284\u030B\x03\x02\x02\x02\u0285\u0286\x07P\x02" +
		"\x02\u0286\u0287\x07\x0F\x02\x02\u0287\u0288\x05\n\x06\x02\u0288\u0289" +
		"\x073\x02\x02\u0289\u028A\x05\n\x06\x02\u028A\u028B\x07\x10\x02\x02\u028B" +
		"\u030B\x03\x02\x02\x02\u028C\u028D\x07~\x02\x02\u028D\u028E\x07\x0F\x02" +
		"\x02\u028E\u028F\x05\n\x06\x02\u028F\u0290\x07\x10\x02\x02\u0290\u030B" +
		"\x03\x02\x02\x02\u0291\u0292\x07R\x02\x02\u0292\u0293\x07\x0F\x02\x02" +
		"\u0293\u0294\x05\n\x06\x02\u0294\u0295\x07\x10\x02\x02\u0295\u030B\x03" +
		"\x02\x02\x02\u0296\u0297\x07)\x02\x02\u0297\u0298\x07\x0F\x02\x02\u0298" +
		"\u0299\x05\n\x06\x02\u0299\u029A\x073\x02\x02\u029A\u029B\x05\n\x06\x02" +
		"\u029B\u029C\x073\x02\x02\u029C\u029D\x05\n\x06\x02\u029D\u029E\x07\x10" +
		"\x02\x02\u029E\u030B\x03\x02\x02\x02\u029F\u02A0\x07T\x02\x02\u02A0\u02A1" +
		"\x07\x0F\x02\x02\u02A1\u02A2\x05\n\x06\x02\u02A2\u02A3\x07\x10\x02\x02" +
		"\u02A3\u030B\x03\x02\x02\x02\u02A4\u02A5\x07x\x02\x02\u02A5\u02A6\x07" +
		"\x0F\x02\x02\u02A6\u02A7\x05\n\x06\x02\u02A7\u02A8\x07\x10\x02\x02\u02A8" +
		"\u030B\x03\x02\x02\x02\u02A9\u02AA\x07y\x02\x02\u02AA\u02AB\x07\x0F\x02" +
		"\x02\u02AB\u02AC\x05\n\x06\x02\u02AC\u02AD\x07\x10\x02\x02\u02AD\u030B" +
		"\x03\x02\x02\x02\u02AE\u02AF\x07U\x02\x02\u02AF\u02B0\x07\x0F\x02\x02" +
		"\u02B0\u02B1\x05\n\x06\x02\u02B1\u02B2\x07\x10\x02\x02\u02B2\u030B\x03" +
		"\x02\x02\x02\u02B3\u02B4\x07V\x02\x02\u02B4\u02B5\x07\x0F\x02\x02\u02B5" +
		"\u02B6\x05\n\x06\x02\u02B6\u02B7\x07\x10\x02\x02\u02B7\u030B\x03\x02\x02" +
		"\x02\u02B8\u02B9\x07W\x02\x02\u02B9\u02BA\x07\x0F\x02\x02\u02BA\u02BD" +
		"\x05\n\x06\x02\u02BB\u02BC\x073\x02\x02\u02BC\u02BE\x05\b\x05\x02\u02BD" +
		"\u02BB\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C1\x03\x02" +
		"\x02\x02\u02BF\u02C0\x073\x02\x02\u02C0\u02C2\x05\b\x05\x02\u02C1\u02BF" +
		"\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02" +
		"\u02C3\u02C4\x07\x10\x02\x02\u02C4\u030B\x03\x02\x02\x02\u02C5\u02C6\x07" +
		"z\x02\x02\u02C6\u02C7\x07\x0F\x02\x02\u02C7\u02C8\x05\n\x06\x02\u02C8" +
		"\u02C9\x073\x02\x02\u02C9\u02CC\x05\n\x06\x02\u02CA\u02CB\x073\x02\x02" +
		"\u02CB\u02CD\x05\b\x05\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CD\x03" +
		"\x02\x02\x02\u02CD\u02D0\x03\x02\x02\x02\u02CE\u02CF\x073\x02\x02\u02CF" +
		"\u02D1\x05\b\x05\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02" +
		"\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D3\x07\x10\x02\x02\u02D3\u030B" +
		"\x03\x02\x02\x02\u02D4\u02D5\x07{\x02\x02\u02D5\u02D6\x07\x0F\x02\x02" +
		"\u02D6\u02D7\x05\n\x06\x02\u02D7\u02D8\x073\x02\x02\u02D8\u02DB\x05\n" +
		"\x06\x02\u02D9\u02DA\x073\x02\x02\u02DA\u02DC\x05\b\x05\x02\u02DB\u02D9" +
		"\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02" +
		"\u02DD\u02DE\x07\x10\x02\x02\u02DE\u030B\x03\x02\x02\x02\u02DF\u02E0\x07" +
		"d\x02\x02\u02E0\u02E1\x07\x0F\x02\x02\u02E1\u02E2\x05\n\x06\x02\u02E2" +
		"\u02E3\x073\x02\x02\u02E3\u02E4\x05\n\x06\x02\u02E4\u02E5\x07\x10\x02" +
		"\x02\u02E5\u030B\x03\x02\x02\x02\u02E6\u02E7\x07,\x02\x02\u02E7\u02E8" +
		"\x07\x0F\x02\x02\u02E8\u02E9\x05\n\x06\x02\u02E9\u02EA\x07\x10\x02\x02" +
		"\u02EA\u030B\x03\x02\x02\x02\u02EB\u02EC\x07f\x02\x02\u02EC\u02ED\x07" +
		"\x0F\x02\x02\u02ED\u02EE\x05\n\x06\x02\u02EE\u02EF\x073\x02\x02\u02EF" +
		"\u02F0\x05\n\x06\x02\u02F0\u02F1\x07\x10\x02\x02\u02F1\u030B\x03\x02\x02" +
		"\x02\u02F2\u02F3\x07Q\x02\x02\u02F3\u02F4\x07\x0F\x02\x02\u02F4\u02F5" +
		"\x05\n\x06\x02\u02F5\u02F6\x073\x02\x02\u02F6\u02F7\x05\n\x06\x02\u02F7" +
		"\u02F8\x07\x10\x02\x02\u02F8\u030B\x03\x02\x02\x02\u02F9\u030B\x054\x1B" +
		"\x02\u02FA\u030B\x05:\x1E\x02\u02FB\u030B\x05<\x1F\x02\u02FC\u030B\x05" +
		"P)\x02\u02FD\u02FE\x07\x97\x02\x02\u02FE\u02FF\x07\x0F\x02\x02\u02FF\u0300" +
		"\x05\n\x06\x02\u0300\u0301\x07\x10\x02\x02\u0301\u030B\x03\x02\x02\x02" +
		"\u0302\u0303\x07\x98\x02\x02\u0303\u0304\x07\x0F\x02\x02\u0304\u0305\x05" +
		"\n\x06\x02\u0305\u0306\x07\x10\x02\x02\u0306\u030B\x03\x02\x02\x02\u0307" +
		"\u030B\x05H%\x02\u0308\u030B\x05J&\x02\u0309\u030B\x05F$\x02\u030A\u0253" +
		"\x03\x02\x02\x02\u030A\u025C\x03\x02\x02\x02\u030A\u0261\x03\x02\x02\x02" +
		"\u030A\u0266\x03\x02\x02\x02\u030A\u026B\x03\x02\x02\x02\u030A\u0270\x03" +
		"\x02\x02\x02\u030A\u0275\x03\x02\x02\x02\u030A\u027C\x03\x02\x02\x02\u030A" +
		"\u0285\x03\x02\x02\x02\u030A\u028C\x03\x02\x02\x02\u030A\u0291\x03\x02" +
		"\x02\x02\u030A\u0296\x03\x02\x02\x02\u030A\u029F\x03\x02\x02\x02\u030A" +
		"\u02A4\x03\x02\x02\x02\u030A\u02A9\x03\x02\x02\x02\u030A\u02AE\x03\x02" +
		"\x02\x02\u030A\u02B3\x03\x02\x02\x02\u030A\u02B8\x03\x02\x02\x02\u030A" +
		"\u02C5\x03\x02\x02\x02\u030A\u02D4\x03\x02\x02\x02\u030A\u02DF\x03\x02" +
		"\x02\x02\u030A\u02E6\x03\x02\x02\x02\u030A\u02EB\x03\x02\x02\x02\u030A" +
		"\u02F2\x03\x02\x02\x02\u030A\u02F9\x03\x02\x02\x02\u030A\u02FA\x03\x02" +
		"\x02\x02\u030A\u02FB\x03\x02\x02\x02\u030A\u02FC\x03\x02\x02\x02\u030A" +
		"\u02FD\x03\x02\x02\x02\u030A\u0302\x03\x02\x02\x02\u030A\u0307\x03\x02" +
		"\x02\x02\u030A\u0308\x03\x02\x02\x02\u030A\u0309\x03\x02\x02\x02\u030B" +
		"3\x03\x02\x02\x02\u030C\u030D\x07\x0F\x02\x02\u030D\u030E\x05\n\x06\x02" +
		"\u030E\u030F\x07\x10\x02\x02\u030F\u0313\x03\x02\x02\x02\u0310\u0313\x05" +
		"\xC0a\x02\u0311\u0313\x05\xCCg\x02\u0312\u030C\x03\x02\x02\x02\u0312\u0310" +
		"\x03\x02\x02\x02\u0312\u0311\x03\x02\x02\x02\u03135\x03\x02\x02\x02\u0314" +
		"\u0315\x07\x03\x02\x02\u0315\u031A\x07\xEB\x02\x02\u0316\u0317\x073\x02" +
		"\x02\u0317\u0319\x07\xEB\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319\u031C" +
		"\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02" +
		"\u031B\u031D\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031D\u031E\x07" +
		"\x04\x02\x02\u031E7\x03\x02\x02\x02\u031F\u0320\x07\x12\x02\x02\u0320" +
		"\u0325\x05\xCCg\x02\u0321\u0322\x073\x02\x02\u0322\u0324\x05\xCCg\x02" +
		"\u0323\u0321\x03\x02\x02\x02\u0324\u0327\x03\x02\x02\x02\u0325\u0323\x03" +
		"\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u0328\x03\x02\x02\x02\u0327" +
		"\u0325\x03\x02\x02\x02\u0328\u0329\x07\x13\x02\x02\u03299\x03\x02\x02" +
		"\x02\u032A\u032B\x07\x17\x02\x02\u032B\u032C\x07\x0F\x02\x02\u032C\u032D" +
		"\x05\xC6d\x02\u032D\u0330\x07\x0F\x02\x02\u032E\u0331\x05\xC2b\x02\u032F" +
		"\u0331\x05\xCCg\x02\u0330\u032E\x03\x02\x02\x02\u0330\u032F\x03\x02\x02" +
		"\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0339\x03\x02\x02\x02\u0332\u0335" +
		"\x073\x02\x02\u0333\u0336\x05\xC2b\x02\u0334\u0336\x05\xCCg\x02\u0335" +
		"\u0333\x03\x02\x02\x02\u0335\u0334\x03\x02\x02\x02\u0336\u0338\x03\x02" +
		"\x02\x02\u0337\u0332\x03\x02\x02\x02\u0338\u033B\x03\x02\x02\x02\u0339" +
		"\u0337\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u033C\x03\x02" +
		"\x02\x02\u033B\u0339\x03\x02\x02\x02\u033C\u033F\x07\x10\x02\x02\u033D" +
		"\u033E\x07\xE3\x02\x02\u033E\u0340\x07\xEA\x02\x02\u033F\u033D\x03\x02" +
		"\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0343\x03\x02\x02\x02\u0341" +
		"\u0342\x07\xBD\x02\x02\u0342\u0344\x05\xF2z\x02\u0343\u0341\x03\x02\x02" +
		"\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0346" +
		"\x07\x10\x02\x02\u0346;\x03\x02\x02\x02\u0347\u0348\x07\xCD\x02\x02\u0348" +
		"\u0349\x07\x0F\x02\x02\u0349\u034A\x05\n\x06\x02\u034A\u034D\x073\x02" +
		"\x02\u034B\u034E\x05\xD2j\x02\u034C\u034E\x05\xD4k\x02\u034D\u034B\x03" +
		"\x02\x02\x02\u034D\u034C\x03\x02\x02\x02\u034E\u0351\x03\x02\x02\x02\u034F" +
		"\u0350\x073\x02\x02\u0350\u0352\x07\xEA\x02\x02\u0351\u034F\x03\x02\x02" +
		"\x02\u0351\u0352\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0354" +
		"\x07\x10\x02\x02\u0354=\x03\x02\x02\x02\u0355\u0356\x07\xC3\x02\x02\u0356" +
		"\u0358\x07\x0F\x02\x02\u0357\u0359\x05\n\x06\x02\u0358\u0357\x03\x02\x02" +
		"\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035B" +
		"\x07\x10\x02\x02\u035B?\x03\x02\x02\x02\u035C\u035D\x07\x99\x02\x02\u035D" +
		"\u035E\x07\x0F\x02\x02\u035E\u035F\x05\n\x06\x02\u035F\u0360\x073\x02" +
		"\x02\u0360\u0361\x07\xE4\x02\x02\u0361\u0362\x07\x10\x02\x02\u0362A\x03" +
		"\x02\x02\x02\u0363\u0364\x07\x96\x02\x02\u0364\u0365\x07\x0F\x02\x02\u0365" +
		"\u0368\x05\n\x06\x02\u0366\u0367\x073\x02\x02\u0367\u0369\t\v\x02\x02" +
		"\u0368\u0366\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036A\x03" +
		"\x02\x02\x02\u036A\u036B\x07\x10\x02\x02\u036BC\x03\x02\x02\x02\u036C" +
		"\u036D\x07\xC6\x02\x02\u036D\u036E\x07\x0F\x02\x02\u036E\u0371\x07\xEA" +
		"\x02\x02\u036F\u0370\x073\x02\x02\u0370\u0372\t\f\x02\x02\u0371\u036F" +
		"\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372\u0378\x03\x02\x02\x02" +
		"\u0373\u0376\x073\x02\x02\u0374\u0377\x05\n\x06\x02\u0375\u0377\x07h\x02" +
		"\x02\u0376\u0374\x03\x02\x02\x02\u0376\u0375\x03\x02\x02\x02\u0377\u0379" +
		"\x03\x02\x02\x02\u0378\u0373\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02" +
		"\u0379\u037C\x03\x02\x02\x02\u037A\u037B\x073\x02\x02\u037B\u037D\t\r" +
		"\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D" +
		"\u037E\x03\x02\x02\x02\u037E\u037F\x07\x10\x02\x02\u037FE\x03\x02\x02" +
		"\x02\u0380\u0381\x077\x02\x02\u0381\u0382\x07\x0F\x02\x02\u0382\u0384" +
		"\x05\n\x06\x02\u0383\u0385\x05L\'\x02\u0384\u0383\x03\x02\x02\x02\u0384" +
		"\u0385\x03\x02\x02\x02\u0385\u0387\x03\x02\x02\x02\u0386\u0388\x05N(\x02" +
		"\u0387\u0386\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u038B\x03" +
		"\x02\x02\x02\u0389\u038A\x07;\x02\x02\u038A\u038C\x05\n\x06\x02\u038B" +
		"\u0389\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u038E\x03\x02" +
		"\x02\x02\u038D\u038F\t\x0E\x02\x02\u038E\u038D\x03\x02\x02\x02\u038E\u038F" +
		"\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u0391\x07\x10\x02\x02" +
		"\u0391G\x03\x02\x02\x02\u0392\u0393\x07\xD1\x02\x02\u0393\u0394\x07\x0F" +
		"\x02\x02\u0394\u0395\x05\n\x06\x02\u0395\u0396\x073\x02\x02\u0396\u03A0" +
		"\x07\xEB\x02\x02\u0397\u0398\x07\xDA\x02\x02\u0398\u039D\x05\xC2b\x02" +
		"\u0399\u039A\x073\x02\x02\u039A\u039C\x05\xC2b\x02\u039B\u0399\x03\x02" +
		"\x02\x02\u039C\u039F\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039D" +
		"\u039E\x03\x02\x02\x02\u039E\u03A1\x03\x02\x02\x02\u039F\u039D\x03\x02" +
		"\x02\x02\u03A0\u0397\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1" +
		"\u03A3\x03\x02\x02\x02\u03A2\u03A4\t\x0F\x02\x02\u03A3\u03A2\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A6" +
		"\x07\x10\x02\x02\u03A6I\x03\x02\x02\x02\u03A7\u03A8\x07\xD2\x02\x02\u03A8" +
		"\u03A9\x07\x0F\x02\x02\u03A9\u03AA\x05\n\x06\x02\u03AA\u03AB\x073\x02" +
		"\x02\u03AB\u03B5\x07\xEB\x02\x02\u03AC\u03AD\x07\x9C\x02\x02\u03AD\u03B2" +
		"\x05\xC2b\x02\u03AE\u03AF\x073\x02\x02\u03AF\u03B1\x05\xC2b\x02\u03B0" +
		"\u03AE\x03\x02\x02\x02\u03B1\u03B4\x03\x02\x02\x02\u03B2\u03B0\x03\x02" +
		"\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03B6\x03\x02\x02\x02\u03B4" +
		"\u03B2\x03\x02\x02\x02\u03B5\u03AC\x03\x02\x02\x02\u03B5\u03B6\x03\x02" +
		"\x02\x02\u03B6\u03B9\x03\x02\x02\x02\u03B7\u03B8\x07u\x02\x02\u03B8\u03BA" +
		"\x07\xEB\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02" +
		"\u03BA\u03BC\x03\x02\x02\x02\u03BB\u03BD\t\x10\x02\x02\u03BC\u03BB\x03" +
		"\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BF\x03\x02\x02\x02\u03BE" +
		"\u03C0\t\x11\x02\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02" +
		"\x02\u03C0\u03C2\x03\x02\x02\x02\u03C1\u03C3\t\x0F\x02\x02\u03C2\u03C1" +
		"\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02" +
		"\u03C4\u03C5\x07\x10\x02\x02\u03C5K\x03\x02\x02\x02\u03C6\u03C7\x07<\x02" +
		"\x02\u03C7\u03C8\x05\xCCg\x02\u03C8M\x03\x02\x02\x02\u03C9\u03CA\x07?" +
		"\x02\x02\u03CA\u03CB\x05\xCCg\x02\u03CBO\x03\x02\x02\x02\u03CC\u03CD\x07" +
		"g\x02\x02\u03CD\u03CE\x07\x0F\x02\x02\u03CE\u03CF\x05\n\x06\x02\u03CF" +
		"\u03D0\x073\x02\x02\u03D0\u03DA\x07\xEB\x02\x02\u03D1\u03D2\x07\x9C\x02" +
		"\x02\u03D2\u03D7\x05\xC2b\x02\u03D3\u03D4\x073\x02\x02\u03D4\u03D6\x05" +
		"\xC2b\x02\u03D5\u03D3\x03\x02\x02\x02\u03D6\u03D9\x03\x02\x02\x02\u03D7" +
		"\u03D5\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03DB\x03\x02" +
		"\x02\x02\u03D9\u03D7\x03\x02\x02\x02\u03DA\u03D1\x03\x02\x02\x02\u03DA" +
		"\u03DB\x03\x02\x02\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC\u03DD\x07u\x02" +
		"\x02\u03DD\u03DF\x07\xEB\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF" +
		"\x03\x02\x02\x02\u03DF\u03E2\x03\x02\x02\x02\u03E0\u03E3\t\x10\x02\x02" +
		"\u03E1\u03E3\x07h\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E2\u03E1\x03" +
		"\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E6\x03\x02\x02\x02\u03E4" +
		"\u03E7\t\x12\x02\x02\u03E5\u03E7\x07h\x02\x02\u03E6\u03E4\x03\x02\x02" +
		"\x02\u03E6\u03E5\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03EA" +
		"\x03\x02\x02\x02\u03E8\u03EB\t\x13\x02\x02\u03E9\u03EB\x07h\x02\x02\u03EA" +
		"\u03E8\x03\x02\x02\x02\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB\x03\x02" +
		"\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03ED\x07\x10\x02\x02\u03ED" +
		"Q\x03\x02\x02\x02\u03EE\u03EF\x07#\x02\x02\u03EF\u03F9\x05\x88E\x02\u03F0" +
		"\u03F9\x05\x84C\x02\u03F1\u03F9\x05\x86D\x02\u03F2\u03F9\x05\x8CG\x02" +
		"\u03F3\u03F9\x05\x96L\x02\u03F4\u03F9\x05\x92J\x02\u03F5\u03F9\x05\x9C" +
		"O\x02\u03F6\u03F9\x05\x9AN\x02\u03F7\u03F9\x05\x9EP\x02\u03F8\u03EE\x03" +
		"\x02\x02\x02\u03F8\u03F0\x03\x02\x02\x02\u03F8\u03F1\x03\x02\x02\x02\u03F8" +
		"\u03F2\x03\x02\x02\x02\u03F8\u03F3\x03\x02\x02\x02\u03F8\u03F4\x03\x02" +
		"\x02\x02\u03F8\u03F5\x03\x02\x02\x02\u03F8\u03F6\x03\x02\x02\x02\u03F8" +
		"\u03F7\x03\x02\x02\x02\u03F9S\x03\x02\x02\x02\u03FA\u03FD\x05\xAAV\x02" +
		"\u03FB\u03FD\x05z>\x02\u03FC\u03FA\x03\x02\x02\x02\u03FC\u03FB\x03\x02" +
		"\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE" +
		"\u0400\x07\x0F\x02\x02\u03FF\u0401\x05\n\x06\x02\u0400\u03FF\x03\x02\x02" +
		"\x02\u0400\u0401\x03\x02\x02\x02\u0401\u0406\x03\x02\x02\x02\u0402\u0403" +
		"\x073\x02\x02\u0403\u0405\x05\n\x06\x02\u0404\u0402\x03\x02\x02\x02\u0405" +
		"\u0408\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02" +
		"\x02\x02\u0407\u0409\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0409" +
		"\u040A\x07\x8D\x02\x02\u040A\u040C\x07\x0F\x02\x02\u040B\u040D\x05V,\x02" +
		"\u040C\u040B\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02\u040D\u040F\x03" +
		"\x02\x02\x02\u040E\u0410\x05X-\x02\u040F\u040E\x03\x02\x02\x02\u040F\u0410" +
		"\x03\x02\x02\x02\u0410\u0412\x03\x02\x02\x02\u0411\u0413\x05Z.\x02\u0412" +
		"\u0411\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0414\x03\x02" +
		"\x02\x02\u0414\u0415\x07\x10\x02\x02\u0415\u0416\x07\x10\x02\x02\u0416" +
		"U\x03\x02\x02\x02\u0417\u0418\x07\x91\x02\x02\u0418\u0419\x07A\x02\x02" +
		"\u0419\u041E\x07\xEB\x02\x02\u041A\u041B\x073\x02\x02\u041B\u041D\x07" +
		"\xEB\x02\x02\u041C\u041A\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02\u041E" +
		"\u041C\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041FW\x03\x02\x02" +
		"\x02\u0420\u041E\x03\x02\x02\x02\u0421\u0422\x07@\x02\x02\u0422\u0423" +
		"\x07A\x02\x02\u0423\u0425\x05\xC2b\x02\u0424\u0426\t\x14\x02\x02\u0425" +
		"\u0424\x03\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u042E\x03\x02" +
		"\x02\x02\u0427\u0428\x073\x02\x02\u0428\u042A\x05\xC2b\x02\u0429\u042B" +
		"\t\x14\x02\x02\u042A\u0429\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02" +
		"\u042B\u042D\x03\x02\x02\x02\u042C\u0427\x03\x02\x02\x02\u042D\u0430\x03" +
		"\x02\x02\x02\u042E\u042C\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F" +
		"Y\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0431\u0432\x07l\x02\x02" +
		"\u0432\u0435\x07\xB0\x02\x02\u0433\u0435\x07\x93\x02\x02\u0434\u0431\x03" +
		"\x02\x02\x02\u0434\u0433\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436" +
		"\u0437\x07)\x02\x02\u0437\u0438\x05\\/\x02\u0438\u0439\x07%\x02\x02\u0439" +
		"\u043A\x05\\/\x02\u043A[\x03\x02\x02\x02\u043B\u043C\x07\xE4\x02\x02\u043C" +
		"\u0447\x07\x8E\x02\x02\u043D\u043E\x07\xE4\x02\x02\u043E\u0447\x07\x8F" +
		"\x02\x02\u043F\u0440\x07\x94\x02\x02\u0440\u0441\x07l\x02\x02\u0441\u0447" +
		"\x07\xB1\x02\x02\u0442\u0443\x07\x90\x02\x02\u0443\u0447\x07\x8E\x02\x02" +
		"\u0444\u0445\x07\x90\x02\x02\u0445\u0447\x07\x8F\x02\x02\u0446\u043B\x03" +
		"\x02\x02\x02\u0446\u043D\x03\x02\x02\x02\u0446\u043F\x03\x02\x02\x02\u0446" +
		"\u0442\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0447]\x03\x02\x02" +
		"\x02\u0448\u0449\x05\xC8e\x02\u0449\u044A\x07\x0F\x02\x02\u044A\u044C" +
		"\x05`1\x02\u044B\u044D\x05b2\x02\u044C\u044B\x03\x02\x02\x02\u044C\u044D" +
		"\x03\x02\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E\u044F\x07\x10\x02\x02" +
		"\u044F_\x03\x02\x02\x02\u0450\u0453\x05\n\x06\x02\u0451\u0452\x07$\x02" +
		"\x02\u0452\u0454\x07\xEB\x02\x02\u0453\u0451\x03\x02\x02\x02\u0453\u0454" +
		"\x03\x02\x02\x02\u0454\u045D\x03\x02\x02\x02\u0455\u0456\x073\x02\x02" +
		"\u0456\u0459\x05\n\x06\x02\u0457\u0458\x07$\x02\x02\u0458\u045A\x07\xEB" +
		"\x02\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A" +
		"\u045C\x03\x02\x02\x02\u045B\u0455\x03\x02\x02\x02\u045C\u045F\x03\x02" +
		"\x02\x02\u045D\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E" +
		"\u0469\x03\x02\x02\x02\u045F\u045D\x03\x02\x02\x02\u0460\u0461\x07\x1B" +
		"\x02\x02\u0461\u0466\x05\xC2b\x02\u0462\u0463\x073\x02\x02\u0463\u0465" +
		"\x05\xC2b\x02\u0464\u0462\x03\x02\x02\x02\u0465\u0468\x03\x02\x02\x02" +
		"\u0466\u0464\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u046A\x03" +
		"\x02\x02\x02\u0468\u0466\x03\x02\x02\x02\u0469\u0460\x03\x02\x02\x02\u0469" +
		"\u046A\x03\x02\x02\x02\u046Aa\x03\x02\x02\x02\u046B\u046D\x05t;\x02\u046C" +
		"\u046B\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u0471\x03\x02" +
		"\x02\x02\u046E\u0472\x05d3\x02\u046F\u0472\x05x=\x02\u0470\u0472\x05j" +
		"6\x02\u0471\u046E\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02\u0471\u0470" +
		"\x03\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0475\x03\x02\x02\x02" +
		"\u0473\u0476\x05p9\x02\u0474\u0476\x05r:\x02\u0475\u0473\x03\x02\x02\x02" +
		"\u0475\u0474\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u0478\x03" +
		"\x02\x02\x02\u0477\u0479\x05v<\x02\u0478\u0477\x03\x02\x02\x02\u0478\u0479" +
		"\x03\x02\x02\x02\u0479c\x03\x02\x02\x02\u047A\u047C\x05\xB2Z\x02\u047B" +
		"\u047A\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C\u047D\x03\x02" +
		"\x02\x02\u047D\u0482\x05f4\x02\u047E\u047F\x073\x02\x02\u047F\u0481\x05" +
		"f4\x02\u0480\u047E\x03\x02\x02\x02\u0481\u0484\x03\x02\x02\x02\u0482\u0480" +
		"\x03\x02\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483e\x03\x02\x02\x02\u0484" +
		"\u0482\x03\x02\x02\x02\u0485\u0487\x07!\x02\x02\u0486\u0488\x05\xB2Z\x02" +
		"\u0487\u0486\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u0489\x03" +
		"\x02\x02\x02\u0489\u0491\x05h5\x02\u048A\u048C\x073\x02\x02\u048B\u048D" +
		"\x05\xB2Z\x02\u048C\u048B\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02" +
		"\u048D\u048E\x03\x02\x02\x02\u048E\u0490\x05h5\x02\u048F\u048A\x03\x02" +
		"\x02\x02\u0490\u0493\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02\u0491" +
		"\u0492\x03\x02\x02\x02\u0492g\x03\x02\x02\x02\u0493\u0491\x03\x02\x02" +
		"\x02\u0494\u0495\x05\xC2b\x02\u0495\u0496\x07\x15\x02\x02\u0496\u0497" +
		"\x05\n\x06\x02\u0497i\x03\x02\x02\x02\u0498\u049A\x05\xB2Z\x02\u0499\u0498" +
		"\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02" +
		"\u049B\u049C\x07>\x02\x02\u049C\u04A1\x05l7\x02\u049D\u049E\x073\x02\x02" +
		"\u049E\u04A0\x05l7\x02\u049F\u049D\x03\x02\x02\x02\u04A0\u04A3\x03\x02" +
		"\x02\x02\u04A1\u049F\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2" +
		"\u04A5\x03\x02\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A4\u04A6\x05\xAC" +
		"W\x02\u04A5\u04A4\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A8" +
		"\x03\x02\x02\x02\u04A7\u04A9\x05\xAEX\x02\u04A8\u04A7\x03\x02\x02\x02" +
		"\u04A8\u04A9\x03\x02\x02\x02\u04A9k\x03\x02\x02\x02\u04AA\u04AC\x05\xB2" +
		"Z\x02\u04AB\u04AA\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AD" +
		"\x03\x02\x02\x02\u04AD\u04B2\x05n8\x02\u04AE\u04AF\x073\x02\x02\u04AF" +
		"\u04B1\x05n8\x02\u04B0\u04AE\x03\x02\x02\x02\u04B1\u04B4\x03\x02\x02\x02" +
		"\u04B2\u04B0\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3m\x03\x02" +
		"\x02\x02\u04B4\u04B2\x03\x02\x02\x02\u04B5\u04B6\x05\xC2b\x02\u04B6\u04B7" +
		"\x07\x15\x02\x02\u04B7\u04B8\x05\x8AF\x02\u04B8o\x03\x02\x02\x02\u04B9" +
		"\u04BA\x07 \x02\x02\u04BA\u04BF\x05\x98M\x02\u04BB\u04BC\x073\x02\x02" +
		"\u04BC\u04BE\x05\x98M\x02\u04BD\u04BB\x03\x02\x02\x02\u04BE\u04C1\x03" +
		"\x02\x02\x02\u04BF\u04BD\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0" +
		"q\x03\x02\x02\x02\u04C1\u04BF\x03\x02\x02\x02\u04C2\u04C3\x07\x1F\x02" +
		"\x02\u04C3\u04C8\x05\x94K\x02\u04C4\u04C5\x073\x02\x02\u04C5\u04C7\x05" +
		"\x94K\x02\u04C6\u04C4\x03\x02\x02\x02\u04C7\u04CA\x03\x02\x02\x02\u04C8" +
		"\u04C6\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9s\x03\x02\x02" +
		"\x02\u04CA\u04C8\x03\x02\x02\x02\u04CB\u04CC\x07_\x02\x02\u04CC\u04CF" +
		"\x05\n\x06\x02\u04CD\u04CF\x05\xBE`\x02\u04CE\u04CB\x03\x02\x02\x02\u04CE" +
		"\u04CD\x03\x02\x02\x02\u04CFu\x03\x02\x02\x02\u04D0\u04D4\x07#\x02\x02" +
		"\u04D1\u04D2\x05\xC2b\x02\u04D2\u04D3\x07\x16\x02\x02\u04D3\u04D5\x03" +
		"\x02\x02\x02\u04D4\u04D1\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5" +
		"\u04D6\x03\x02\x02\x02\u04D6\u04D7\x05\xC0a\x02\u04D7\u04DB\x079\x02\x02" +
		"\u04D8\u04D9\x05\xC2b\x02\u04D9\u04DA\x07\x16\x02\x02\u04DA\u04DC\x03" +
		"\x02\x02\x02\u04DB\u04D8\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC" +
		"\u04DD\x03\x02\x02\x02\u04DD\u04EF\x05\xC0a\x02\u04DE\u04E2\x073\x02\x02" +
		"\u04DF\u04E0\x05\xC2b\x02\u04E0\u04E1\x07\x16\x02\x02\u04E1\u04E3\x03" +
		"\x02\x02\x02\u04E2\u04DF\x03\x02\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3" +
		"\u04E4\x03\x02\x02\x02\u04E4\u04E5\x05\xC0a\x02\u04E5\u04E9\x079\x02\x02" +
		"\u04E6\u04E7\x05\xC2b\x02\u04E7\u04E8\x07\x16\x02\x02\u04E8\u04EA\x03" +
		"\x02\x02\x02\u04E9\u04E6\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA" +
		"\u04EB\x03\x02\x02\x02\u04EB\u04EC\x05\xC0a\x02\u04EC\u04EE\x03\x02\x02" +
		"\x02\u04ED\u04DE\x03\x02\x02\x02\u04EE\u04F1\x03\x02\x02\x02\u04EF\u04F0" +
		"\x03\x02\x02\x02\u04EF\u04ED\x03\x02\x02\x02\u04F0w\x03\x02\x02\x02\u04F1" +
		"\u04EF\x03\x02\x02\x02\u04F2\u04F3\x07\xC1\x02\x02\u04F3\u04F4\x05\n\x06" +
		"\x02\u04F4y\x03\x02\x02\x02\u04F5\u04F6\t\x15\x02\x02\u04F6{\x03\x02\x02" +
		"\x02\u04F7\u04FC\x05~@\x02\u04F8\u04F9\x073\x02\x02\u04F9\u04FB\x05~@" +
		"\x02\u04FA\u04F8\x03\x02\x02\x02\u04FB\u04FE\x03\x02\x02\x02\u04FC\u04FA" +
		"\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD}\x03\x02\x02\x02\u04FE" +
		"\u04FC\x03\x02\x02\x02\u04FF\u0501\x05\xB2Z\x02\u0500\u04FF\x03\x02\x02" +
		"\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\u0503" +
		"\x05\xC2b\x02\u0503\u0504\x07\x15\x02\x02\u0504\u0505\x05\x8AF\x02\u0505" +
		"\x7F\x03\x02\x02\x02\u0506\u050B\x05\x82B\x02\u0507\u0508\x073\x02\x02" +
		"\u0508\u050A\x05\x82B\x02\u0509\u0507\x03\x02\x02\x02\u050A\u050D\x03" +
		"\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02\u050C" +
		"\x81\x03\x02\x02\x02\u050D\u050B\x03\x02\x02\x02\u050E\u0510\x07_\x02" +
		"\x02\u050F\u050E\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510\u0511" +
		"\x03\x02\x02\x02\u0511\u0512\x05\n\x06\x02\u0512\x83\x03\x02\x02\x02\u0513" +
		"\u0514\x07>\x02\x02\u0514\u0516\x05|?\x02\u0515\u0517\x05\xACW\x02\u0516" +
		"\u0515\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517\u0519\x03\x02" +
		"\x02\x02\u0518\u051A\x05\xAEX\x02\u0519\u0518\x03\x02\x02\x02\u0519\u051A" +
		"\x03\x02\x02\x02\u051A\x85\x03\x02\x02\x02\u051B\u051C\x07_\x02\x02\u051C" +
		"\u051D\x05\n\x06\x02\u051D\x87\x03\x02\x02\x02\u051E\u051F\x05\xC0a\x02" +
		"\u051F\u0520\x079\x02\x02\u0520\u0528\x05\xC0a\x02\u0521\u0522\x073\x02" +
		"\x02\u0522\u0523\x05\xC0a\x02\u0523\u0524\x079\x02\x02\u0524\u0525\x05" +
		"\xC0a\x02\u0525\u0527\x03\x02\x02\x02\u0526\u0521\x03\x02\x02\x02\u0527" +
		"\u052A\x03\x02\x02\x02\u0528\u0526\x03\x02\x02\x02\u0528\u0529\x03\x02" +
		"\x02\x02\u0529\x89\x03\x02\x02\x02\u052A\u0528\x03\x02\x02\x02\u052B\u052C" +
		"\x07X\x02\x02\u052C\u052D\x07\x0F\x02\x02\u052D\u052E\x05\n\x06\x02\u052E" +
		"\u052F\x07\x10\x02\x02\u052F\u0564\x03\x02\x02\x02\u0530\u0531\x07Y\x02" +
		"\x02\u0531\u0532\x07\x0F\x02\x02\u0532\u0533\x05\n\x06\x02\u0533\u0534" +
		"\x07\x10\x02\x02\u0534\u0564\x03\x02\x02\x02\u0535\u0536\x07[\x02\x02" +
		"\u0536\u0538\x07\x0F\x02\x02\u0537\u0539\x05\n\x06\x02\u0538\u0537\x03" +
		"\x02\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A" +
		"\u0564\x07\x10\x02\x02\u053B\u053C\x07Z\x02\x02\u053C\u053D\x07\x0F\x02" +
		"\x02\u053D\u053E\x05\n\x06\x02\u053E\u053F\x07\x10\x02\x02\u053F\u0564" +
		"\x03\x02\x02\x02\u0540\u0541\x07E\x02\x02\u0541\u0542\x07\x0F\x02\x02" +
		"\u0542\u0543\x05\n\x06\x02\u0543\u0544\x07\x10\x02\x02\u0544\u0564\x03" +
		"\x02\x02\x02\u0545\u0546\x07F\x02\x02\u0546\u0547\x07\x0F\x02\x02\u0547" +
		"\u0548\x05\n\x06\x02\u0548\u0549\x07\x10\x02\x02\u0549\u0564\x03\x02\x02" +
		"\x02\u054A\u054B\x07B\x02\x02\u054B\u054C\x07\x0F\x02\x02\u054C\u054D" +
		"\x05\n\x06\x02\u054D\u054E\x07\x10\x02\x02\u054E\u0564\x03\x02\x02\x02" +
		"\u054F\u0550\x07\x81\x02\x02\u0550\u0551\x07\x0F\x02\x02\u0551\u0552\x05" +
		"\n\x06\x02\u0552\u0553\x07\x10\x02\x02\u0553\u0564\x03\x02\x02\x02\u0554" +
		"\u0555\x07\x82\x02\x02\u0555\u0556\x07\x0F\x02\x02\u0556\u0557\x05\n\x06" +
		"\x02\u0557\u0558\x07\x10\x02\x02\u0558\u0564\x03\x02\x02\x02\u0559\u055A" +
		"\x07\x83\x02\x02\u055A\u055B\x07\x0F\x02\x02\u055B\u055C\x05\n\x06\x02" +
		"\u055C\u055D\x07\x10\x02\x02\u055D\u0564\x03\x02\x02\x02\u055E\u055F\x07" +
		"\x84\x02\x02\u055F\u0560\x07\x0F\x02\x02\u0560\u0561\x05\n\x06\x02\u0561" +
		"\u0562\x07\x10\x02\x02\u0562\u0564\x03\x02\x02\x02\u0563\u052B\x03\x02" +
		"\x02\x02\u0563\u0530\x03\x02\x02\x02\u0563\u0535\x03\x02\x02\x02\u0563" +
		"\u053B\x03\x02\x02\x02\u0563\u0540\x03\x02\x02\x02\u0563\u0545\x03\x02" +
		"\x02\x02\u0563\u054A\x03\x02\x02\x02\u0563\u054F\x03\x02\x02\x02\u0563" +
		"\u0554\x03\x02\x02\x02\u0563\u0559\x03\x02\x02\x02\u0563\u055E\x03\x02" +
		"\x02\x02\u0564\x8B\x03\x02\x02\x02\u0565\u0566\x07!\x02\x02\u0566\u056B" +
		"\x05\x8EH\x02\u0567\u0568\x073\x02\x02\u0568\u056A\x05\x8EH\x02\u0569" +
		"\u0567\x03\x02\x02\x02\u056A\u056D\x03\x02\x02\x02\u056B\u0569\x03\x02" +
		"\x02\x02\u056B\u056C\x03\x02\x02\x02\u056C\x8D\x03\x02\x02\x02\u056D\u056B" +
		"\x03\x02\x02\x02\u056E\u0570\x05\xB2Z\x02\u056F\u056E\x03\x02\x02\x02" +
		"\u056F\u0570\x03\x02\x02\x02\u0570\u0571\x03\x02\x02\x02\u0571\u0572\x05" +
		"\xC2b\x02\u0572\u0573\x07\x15\x02\x02\u0573\u0574\x05\x90I\x02\u0574\x8F" +
		"\x03\x02\x02\x02\u0575\u0576\x05\x8AF\x02\u0576\u0577\x07\x0F\x02\x02" +
		"\u0577\u0578\x05\n\x06\x02\u0578\u0579\x07\x10\x02\x02\u0579\u057C\x03" +
		"\x02\x02\x02\u057A\u057C\x05\n\x06\x02\u057B\u0575\x03\x02\x02\x02\u057B" +
		"\u057A\x03\x02\x02\x02\u057C\x91\x03\x02\x02\x02\u057D\u057E\x07\x1F\x02" +
		"\x02\u057E\u0583\x05\x94K\x02\u057F\u0580\x073\x02\x02\u0580\u0582\x05" +
		"\x94K\x02\u0581\u057F\x03\x02\x02\x02\u0582\u0585\x03\x02\x02\x02\u0583" +
		"\u0581\x03\x02\x02\x02\u0583\u0584\x03\x02\x02\x02\u0584\x93\x03\x02\x02" +
		"\x02\u0585\u0583\x03\x02\x02\x02\u0586\u058C\x05\xC2b\x02\u0587\u0588" +
		"\x05\xBC_\x02\u0588\u0589\x07\x16\x02\x02\u0589\u058A\x05\xC2b\x02\u058A" +
		"\u058C\x03\x02\x02\x02\u058B\u0586\x03\x02\x02\x02\u058B\u0587\x03\x02" +
		"\x02\x02\u058C\x95\x03\x02\x02\x02\u058D\u058E\x07 \x02\x02\u058E\u0593" +
		"\x05\x98M\x02\u058F\u0590\x073\x02\x02\u0590\u0592\x05\x98M\x02\u0591" +
		"\u058F\x03\x02\x02\x02\u0592\u0595\x03\x02\x02\x02\u0593\u0591\x03\x02" +
		"\x02\x02\u0593\u0594\x03\x02\x02\x02\u0594\x97\x03\x02\x02\x02\u0595\u0593" +
		"\x03\x02\x02\x02\u0596\u059C\x05\xC2b\x02\u0597\u0598\x05\xBC_\x02\u0598" +
		"\u0599\x07\x16\x02\x02\u0599\u059A\x05\xC2b\x02\u059A\u059C\x03\x02\x02" +
		"\x02\u059B\u0596\x03\x02\x02\x02\u059B\u0597\x03\x02\x02\x02\u059C\x99" +
		"\x03\x02\x02\x02\u059D\u059E\x07\xBF\x02\x02\u059E\u059F\x05\xC0a\x02" +
		"\u059F\u05A0\x073\x02\x02\u05A0\u05A1\x05\xC0a\x02\u05A1\x9B\x03\x02\x02" +
		"\x02\u05A2\u05A3\x07\xBE\x02\x02\u05A3\u05A4\x05\xC0a\x02\u05A4\u05A5" +
		"\x073\x02\x02\u05A5\u05A6\x05\xC0a\x02\u05A6\x9D\x03\x02\x02\x02\u05A7" +
		"\u05A8\x07\xC0\x02\x02\u05A8\u05A9\x05\xC0a\x02\u05A9\u05AA\x07\r\x02" +
		"\x02\u05AA\u05B2\x05\xCCg\x02\u05AB\u05AC\x073\x02\x02\u05AC\u05AD\x05" +
		"\xC0a\x02\u05AD\u05AE\x07\r\x02\x02\u05AE\u05AF\x05\xCCg\x02\u05AF\u05B1" +
		"\x03\x02\x02\x02\u05B0\u05AB\x03\x02\x02\x02\u05B1\u05B4\x03\x02\x02\x02" +
		"\u05B2\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02\u05B3\x9F\x03" +
		"\x02\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B5\u05B8\x07*\x02\x02\u05B6" +
		"\u05B9\x05\xA2R\x02\u05B7\u05B9\x07\xEB\x02\x02\u05B8\u05B6\x03\x02\x02" +
		"\x02\u05B8\u05B7\x03\x02\x02\x02\u05B9\u05C0\x03\x02\x02\x02\u05BA\u05BD" +
		"\x07+\x02\x02\u05BB\u05BE\x05\xA2R\x02\u05BC\u05BE\x07\xEB\x02\x02\u05BD" +
		"\u05BB\x03\x02\x02\x02\u05BD\u05BC\x03\x02\x02\x02\u05BE\u05C0\x03\x02" +
		"\x02\x02\u05BF\u05B5\x03\x02\x02\x02\u05BF\u05BA\x03\x02\x02\x02\u05C0" +
		"\xA1\x03\x02\x02\x02\u05C1\u05C2\x07.\x02\x02\u05C2\u05C3\x07\x0F\x02" +
		"\x02\u05C3\u05C8\x05\n\x06\x02\u05C4\u05C5\x073\x02\x02\u05C5\u05C7\x05" +
		"\n\x06\x02\u05C6\u05C4\x03\x02\x02\x02\u05C7\u05CA\x03\x02\x02\x02\u05C8" +
		"\u05C6\x03\x02\x02\x02\u05C8\u05C9\x03\x02\x02\x02\u05C9\u05CB\x03\x02" +
		"\x02\x02\u05CA\u05C8\x03\x02\x02\x02\u05CB\u05CC\x07\x10\x02\x02\u05CC" +
		"\u05E8\x03\x02\x02\x02\u05CD\u05CE\x070\x02\x02\u05CE\u05CF\x07\x0F\x02" +
		"\x02\u05CF\u05D0\x05\n\x06\x02\u05D0\u05D1\x073\x02\x02\u05D1\u05D2\x05" +
		"\n\x06\x02\u05D2\u05D3\x07\x10\x02\x02\u05D3\u05E8\x03\x02\x02\x02\u05D4" +
		"\u05D5\x07\x80\x02\x02\u05D5\u05D6\x07\x0F\x02\x02\u05D6\u05D7\x05\n\x06" +
		"\x02\u05D7\u05D8\x073\x02\x02\u05D8\u05D9\x05\n\x06\x02\u05D9\u05DA\x07" +
		"\x10\x02\x02\u05DA\u05E8\x03\x02\x02\x02\u05DB\u05DC\x071\x02\x02\u05DC" +
		"\u05DD\x07\x0F\x02\x02\u05DD\u05E2\x05\n\x06\x02\u05DE\u05DF\x073\x02" +
		"\x02\u05DF\u05E1\x05\n\x06\x02\u05E0\u05DE\x03\x02\x02\x02\u05E1\u05E4" +
		"\x03\x02\x02\x02\u05E2\u05E0\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02" +
		"\u05E3\u05E5\x03\x02\x02\x02\u05E4\u05E2\x03\x02\x02\x02\u05E5\u05E6\x07" +
		"\x10\x02\x02\u05E6\u05E8\x03\x02\x02\x02\u05E7\u05C1\x03\x02\x02\x02\u05E7" +
		"\u05CD\x03\x02\x02\x02\u05E7\u05D4\x03\x02\x02\x02\u05E7\u05DB\x03\x02" +
		"\x02\x02\u05E8\xA3\x03\x02\x02\x02\u05E9\u05EA\x05\xBA^\x02\u05EA\u05EB" +
		"\x07\x03\x02\x02\u05EB\u05EC\x05\xC2b\x02\u05EC\u05ED\x07\r\x02\x02\u05ED" +
		"\u05F3\x05\xCCg\x02\u05EE\u05EF\x073\x02\x02\u05EF\u05F0\x05\xC2b\x02" +
		"\u05F0\u05F1\x07\r\x02\x02\u05F1\u05F2\x05\xCCg\x02\u05F2\u05F4\x03\x02" +
		"\x02\x02\u05F3\u05EE\x03\x02\x02\x02\u05F3\u05F4\x03\x02\x02\x02\u05F4" +
		"\u05F5\x03\x02\x02\x02\u05F5\u05F6\x07\x04\x02\x02\u05F6\xA5\x03\x02\x02" +
		"\x02\u05F7\u05F8\x05\xAAV\x02\u05F8\u05F9\x07\x0F\x02\x02\u05F9\u05FC" +
		"\x07\xEB\x02\x02\u05FA\u05FB\x07\x16\x02\x02\u05FB\u05FD\x05\xC2b\x02" +
		"\u05FC\u05FA\x03\x02\x02\x02\u05FC\u05FD\x03\x02\x02\x02\u05FD\u0606\x03" +
		"\x02\x02\x02\u05FE\u05FF\x073\x02\x02\u05FF\u0602\x07\xEB\x02\x02\u0600" +
		"\u0601\x07\x16\x02\x02\u0601\u0603\x05\xC2b\x02\u0602\u0600\x03\x02\x02" +
		"\x02\u0602\u0603\x03\x02\x02\x02\u0603\u0605\x03\x02\x02\x02\u0604\u05FE" +
		"\x03\x02\x02\x02\u0605\u0608\x03\x02\x02\x02\u0606\u0604\x03\x02\x02\x02" +
		"\u0606\u0607\x03\x02\x02\x02\u0607\u060A\x03\x02\x02\x02\u0608\u0606\x03" +
		"\x02\x02\x02\u0609\u060B\x05\xACW\x02\u060A\u0609\x03\x02\x02\x02\u060A" +
		"\u060B\x03\x02\x02\x02\u060B\u060D\x03\x02\x02\x02\u060C\u060E\x05\xAE" +
		"X\x02\u060D\u060C\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E\u060F" +
		"\x03\x02\x02\x02\u060F\u0610\x07\x10\x02\x02\u0610\xA7\x03\x02\x02\x02" +
		"\u0611\u0612\x05\xAAV\x02\u0612\u0613\x07\x0F\x02\x02\u0613\u0616\x07" +
		"\xEB\x02\x02\u0614\u0615\x07\x16\x02\x02\u0615\u0617\x05\xC2b\x02\u0616" +
		"\u0614\x03\x02\x02\x02\u0616\u0617\x03\x02\x02\x02\u0617\u0620\x03\x02" +
		"\x02\x02\u0618\u0619\x073\x02\x02\u0619\u061C\x07\xEB\x02\x02\u061A\u061B" +
		"\x07\x16\x02\x02\u061B\u061D\x05\xC2b\x02\u061C\u061A\x03\x02\x02\x02" +
		"\u061C\u061D\x03\x02\x02\x02\u061D\u061F\x03\x02\x02\x02\u061E\u0618\x03" +
		"\x02\x02\x02\u061F\u0622\x03\x02\x02\x02\u0620\u061E\x03\x02\x02\x02\u0620" +
		"\u0621\x03\x02\x02\x02\u0621\u0623\x03\x02\x02\x02\u0622\u0620\x03\x02" +
		"\x02\x02\u0623\u0625\x07\x10\x02\x02\u0624\u0626\x05\xACW\x02\u0625\u0624" +
		"\x03\x02\x02\x02\u0625\u0626\x03\x02\x02\x02\u0626\u0628\x03\x02\x02\x02" +
		"\u0627\u0629\x05\xAEX\x02\u0628\u0627\x03\x02\x02\x02\u0628\u0629\x03" +
		"\x02\x02\x02\u0629\xA9\x03\x02\x02\x02\u062A\u062B\t\x16\x02\x02\u062B" +
		"\xAB\x03\x02\x02\x02\u062C\u0636\x05\xCAf\x02\u062D\u0632\x07\xEB\x02" +
		"\x02\u062E\u062F\x073\x02\x02\u062F\u0631\x07\xEB\x02\x02\u0630\u062E" +
		"\x03\x02\x02\x02\u0631\u0634\x03\x02\x02\x02\u0632\u0630\x03\x02\x02\x02" +
		"\u0632\u0633\x03\x02\x02\x02\u0633\u0637\x03\x02\x02\x02\u0634\u0632\x03" +
		"\x02\x02\x02\u0635\u0637\x05\n\x06\x02\u0636\u062D\x03\x02\x02\x02\u0636" +
		"\u0635\x03\x02\x02\x02\u0637\xAD\x03\x02\x02\x02\u0638\u063A\x07\x87\x02" +
		"\x02\u0639\u063B\x07\x0F\x02\x02\u063A\u0639\x03\x02\x02\x02\u063A\u063B" +
		"\x03\x02\x02\x02\u063B\u063D\x03\x02\x02\x02\u063C\u063E\x05\x8AF\x02" +
		"\u063D\u063C\x03\x02\x02\x02\u063D\u063E\x03\x02\x02\x02\u063E\u063F\x03" +
		"\x02\x02\x02\u063F\u0641\x05\n\x06\x02\u0640\u0642\x07\x10\x02\x02\u0641" +
		"\u0640\x03\x02\x02\x02\u0641\u0642\x03\x02\x02\x02\u0642\xAF\x03\x02\x02" +
		"\x02\u0643\u0644\x07:\x02\x02\u0644\u0645\x07=\x02\x02\u0645\u0646\x07" +
		"l\x02\x02\u0646\u0647\x07\xB0\x02\x02\u0647\xB1\x03\x02\x02\x02\u0648" +
		"\u064E\x07]\x02\x02\u0649\u064E\x07\xDD\x02\x02\u064A\u064E\x07\\\x02" +
		"\x02\u064B\u064E\x07^\x02\x02\u064C\u064E\x05\xB4[\x02\u064D\u0648\x03" +
		"\x02\x02\x02\u064D\u0649\x03\x02\x02\x02\u064D\u064A\x03\x02\x02\x02\u064D" +
		"\u064B\x03\x02\x02\x02\u064D\u064C\x03\x02\x02\x02\u064E\xB3\x03\x02\x02" +
		"\x02\u064F\u0650\x07c\x02\x02\u0650\u0651\x07^\x02\x02\u0651\xB5\x03\x02" +
		"\x02\x02\u0652\u0653\x05\n\x06\x02\u0653\xB7\x03\x02\x02\x02\u0654\u0655" +
		"\t\x17\x02\x02\u0655\xB9\x03\x02\x02\x02\u0656\u0657\x07\xEA\x02\x02\u0657" +
		"\xBB\x03\x02\x02\x02\u0658\u0659\x07\xEB\x02\x02\u0659\xBD\x03\x02\x02" +
		"\x02\u065A\u065B\x07\xEB\x02\x02\u065B\xBF\x03\x02\x02\x02\u065C\u065D" +
		"\x07\xEB\x02\x02\u065D\xC1\x03\x02\x02\x02\u065E\u065F\x07\xEB\x02\x02" +
		"\u065F\xC3\x03\x02\x02\x02\u0660\u0661\x07\xEB\x02\x02\u0661\xC5\x03\x02" +
		"\x02\x02\u0662\u0663\x07\xEB\x02\x02\u0663\xC7\x03\x02\x02\x02\u0664\u0665" +
		"\t\x18\x02\x02\u0665\xC9\x03\x02\x02\x02\u0666\u0667\x07\x85\x02\x02\u0667";
	private static readonly _serializedATNSegment3: string =
		"\u066D\x07A\x02\x02\u0668\u0669\x07\x85\x02\x02\u0669\u066D\x07\x86\x02" +
		"\x02\u066A\u066B\x07\x85\x02\x02\u066B\u066D\x07=\x02\x02\u066C\u0666" +
		"\x03\x02\x02\x02\u066C\u0668\x03\x02\x02\x02\u066C\u066A\x03\x02\x02\x02" +
		"\u066D\xCB\x03\x02\x02\x02\u066E\u066F\t\x19\x02\x02\u066F\xCD\x03\x02" +
		"\x02\x02\u0670\u0671\t\x1A\x02\x02\u0671\xCF\x03\x02\x02\x02\u0672\u0676" +
		"\x05\xD2j\x02\u0673\u0676\x05\xD4k\x02\u0674\u0676\x05\xD6l\x02\u0675" +
		"\u0672\x03\x02\x02\x02\u0675\u0673\x03\x02\x02\x02\u0675\u0674\x03\x02" +
		"\x02\x02\u0676\u0678\x03\x02\x02\x02\u0677\u0679\x05\xD8m\x02\u0678\u0677" +
		"\x03\x02\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679\u067E\x03\x02\x02\x02" +
		"\u067A\u067C\x07(\x02\x02\u067B\u067A\x03\x02\x02\x02\u067B\u067C\x03" +
		"\x02\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D\u067F\x07\xE9\x02\x02\u067E" +
		"\u067B\x03\x02\x02\x02\u067E\u067F\x03\x02\x02\x02\u067F\xD1\x03\x02\x02" +
		"\x02\u0680\u0681\t\x1B\x02\x02\u0681\xD3\x03\x02\x02\x02\u0682\u0683\x07" +
		"\xEB\x02\x02\u0683\xD5\x03\x02\x02\x02\u0684\u0685\x07\xEB\x02\x02\u0685" +
		"\xD7\x03\x02\x02\x02\u0686\u0687\x07\x03\x02\x02\u0687\u0688\x05\n\x06" +
		"\x02\u0688\u0689\x07\x04\x02\x02\u0689\u0696\x03\x02\x02\x02\u068A\u068B" +
		"\x07\x12\x02\x02\u068B\u0690\x05\xCCg\x02\u068C\u068D\x073\x02\x02\u068D" +
		"\u068F\x05\xCCg\x02\u068E\u068C\x03\x02\x02\x02\u068F\u0692\x03\x02\x02" +
		"\x02\u0690\u068E\x03\x02\x02\x02\u0690\u0691\x03\x02\x02\x02\u0691\u0693" +
		"\x03\x02\x02\x02\u0692\u0690\x03\x02\x02\x02\u0693\u0694\x07\x13\x02\x02" +
		"\u0694\u0696\x03\x02\x02\x02\u0695\u0686\x03\x02\x02\x02\u0695\u068A\x03" +
		"\x02\x02\x02\u0696\xD9\x03\x02\x02\x02\u0697\u069E\x05\xD0i\x02\u0698" +
		"\u069E\x05\xDCo\x02\u0699\u069E\x05\xDEp\x02\u069A\u069E\x05\xF4{\x02" +
		"\u069B\u069E\x05\xEEx\x02\u069C\u069E\x05\xE4s\x02\u069D\u0697\x03\x02" +
		"\x02\x02\u069D\u0698\x03\x02\x02\x02\u069D\u0699\x03\x02\x02\x02\u069D" +
		"\u069A\x03\x02\x02\x02\u069D\u069B\x03\x02\x02\x02\u069D\u069C\x03\x02" +
		"\x02\x02\u069E\xDB\x03\x02\x02\x02\u069F\u06A4\x05\xB2Z\x02\u06A0\u06A1" +
		"\x07\n\x02\x02\u06A1\u06A2\x05\xD0i\x02\u06A2\u06A3\x07\t\x02\x02\u06A3" +
		"\u06A5\x03\x02\x02\x02\u06A4\u06A0\x03\x02\x02\x02\u06A4\u06A5\x03\x02" +
		"\x02\x02\u06A5\xDD\x03\x02\x02\x02\u06A6\u06B2\x07n\x02\x02\u06A7\u06A8" +
		"\x07\x12\x02\x02\u06A8\u06AD\x05\xE0q\x02\u06A9\u06AA\x073\x02\x02\u06AA" +
		"\u06AC\x05\xE0q\x02\u06AB\u06A9\x03\x02\x02\x02\u06AC\u06AF\x03\x02\x02" +
		"\x02\u06AD\u06AB\x03\x02\x02\x02\u06AD\u06AE\x03\x02\x02\x02\u06AE\u06B0" +
		"\x03\x02\x02\x02\u06AF\u06AD\x03\x02\x02\x02\u06B0\u06B1\x07\x13\x02\x02" +
		"\u06B1\u06B3\x03\x02\x02\x02\u06B2\u06A7\x03\x02\x02\x02\u06B2\u06B3\x03" +
		"\x02\x02\x02\u06B3\xDF\x03\x02\x02\x02\u06B4\u06B7\x05\xDCo\x02\u06B5" +
		"\u06B8\x05\xC2b\x02\u06B6\u06B8\x05\xE2r\x02\u06B7\u06B5\x03\x02\x02\x02" +
		"\u06B7\u06B6\x03\x02\x02\x02\u06B8\xE1\x03\x02\x02\x02\u06B9\u06BB\x07" +
		"h\x02\x02\u06BA\u06BC\t\x1C\x02\x02\u06BB\u06BA\x03\x02\x02\x02\u06BB" +
		"\u06BC\x03\x02\x02\x02\u06BC\xE3\x03\x02\x02\x02\u06BD\u06C1\x07t\x02" +
		"\x02\u06BE\u06C1\x05\xE6t\x02\u06BF\u06C1\x05\xE8u\x02\u06C0\u06BD\x03" +
		"\x02\x02\x02\u06C0\u06BE\x03\x02\x02\x02\u06C0\u06BF\x03\x02\x02\x02\u06C1" +
		"\xE5\x03\x02\x02\x02\u06C2\u06CE\x07r\x02\x02\u06C3\u06C4\x07\xDE\x02" +
		"\x02\u06C4\u06C5\x07\x12\x02\x02\u06C5\u06C6\x05\xEAv\x02\u06C6\u06C7" +
		"\x07\x13\x02\x02\u06C7\u06CE\x03\x02\x02\x02\u06C8\u06C9\x07\xDF\x02\x02" +
		"\u06C9\u06CA\x07\x12\x02\x02\u06CA\u06CB\x05\xECw\x02\u06CB\u06CC\x07" +
		"\x13\x02\x02\u06CC\u06CE\x03\x02\x02\x02\u06CD\u06C2\x03\x02\x02\x02\u06CD" +
		"\u06C3\x03\x02\x02\x02\u06CD\u06C8\x03\x02\x02\x02\u06CE\xE7\x03\x02\x02" +
		"\x02\u06CF\u06EA\x07s\x02\x02\u06D0\u06DA\x07\xE0\x02\x02\u06D1\u06D2" +
		"\x07\x12\x02\x02\u06D2\u06D7\x07\xEB\x02\x02\u06D3\u06D4\x07\x0F\x02\x02" +
		"\u06D4\u06D5\x05\xEAv\x02\u06D5\u06D6\x07\x10\x02\x02\u06D6\u06D8\x03" +
		"\x02\x02\x02\u06D7\u06D3\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8" +
		"\u06D9\x03\x02\x02\x02\u06D9\u06DB\x07\x13\x02\x02\u06DA\u06D1\x03\x02" +
		"\x02\x02\u06DA\u06DB\x03\x02\x02\x02\u06DB\u06EA\x03\x02\x02\x02\u06DC" +
		"\u06E7\x07\xE1\x02\x02\u06DD\u06DE\x07\x12\x02\x02\u06DE\u06E3\x05\xC0" +
		"a\x02\u06DF\u06E0\x07\x0F\x02\x02\u06E0\u06E1\x05\xECw\x02\u06E1\u06E2" +
		"\x07\x10\x02\x02\u06E2\u06E4\x03\x02\x02\x02\u06E3\u06DF\x03\x02\x02\x02" +
		"\u06E3\u06E4\x03\x02\x02\x02\u06E4\u06E5\x03\x02\x02\x02\u06E5\u06E6\x07" +
		"\x13\x02\x02\u06E6\u06E8\x03\x02\x02\x02\u06E7\u06DD\x03\x02\x02\x02\u06E7" +
		"\u06E8\x03\x02\x02\x02\u06E8\u06EA\x03\x02\x02\x02\u06E9\u06CF\x03\x02" +
		"\x02\x02\u06E9\u06D0\x03\x02\x02\x02\u06E9\u06DC\x03\x02\x02\x02\u06EA" +
		"\xE9\x03\x02\x02\x02\u06EB\u06F0\x07\xEB\x02\x02\u06EC\u06ED\x07\x07\x02" +
		"\x02\u06ED\u06EF\x07\xEB\x02\x02\u06EE\u06EC\x03\x02\x02\x02\u06EF\u06F2" +
		"\x03\x02\x02\x02\u06F0\u06EE\x03\x02\x02\x02\u06F0\u06F1\x03\x02\x02\x02" +
		"\u06F1\xEB\x03\x02\x02\x02\u06F2\u06F0\x03\x02\x02\x02\u06F3\u06F8\x05" +
		"\xC0a\x02\u06F4\u06F5\x07\x07\x02\x02\u06F5\u06F7\x05\xC0a\x02\u06F6\u06F4" +
		"\x03\x02\x02\x02\u06F7\u06FA\x03\x02\x02\x02\u06F8\u06F6\x03\x02\x02\x02" +
		"\u06F8\u06F9\x03\x02\x02\x02\u06F9\xED\x03\x02\x02\x02\u06FA\u06F8\x03" +
		"\x02\x02\x02\u06FB\u0700\x05\xF0y\x02\u06FC\u06FD\x07\x07\x02\x02\u06FD" +
		"\u06FF\x05\xF0y\x02\u06FE\u06FC\x03\x02\x02\x02\u06FF\u0702\x03\x02\x02" +
		"\x02\u0700\u06FE\x03\x02\x02\x02\u0700\u0701\x03\x02\x02\x02\u0701\u0703" +
		"\x03\x02\x02\x02\u0702\u0700\x03\x02\x02\x02\u0703\u0704\x07\x14\x02\x02" +
		"\u0704\u0705\x05\xF2z\x02\u0705\xEF\x03\x02\x02\x02\u0706\u070A\x05\xD0" +
		"i\x02\u0707\u070A\x05\xDEp\x02\u0708\u070A\x05\xDCo\x02\u0709\u0706\x03" +
		"\x02\x02\x02\u0709\u0707\x03\x02\x02\x02\u0709\u0708\x03\x02\x02\x02\u070A" +
		"\xF1\x03\x02\x02\x02\u070B\u0711\x05\xD0i\x02\u070C\u0711\x05\xDEp\x02" +
		"\u070D\u0711\x05\xF4{\x02\u070E\u0711\x05\xE4s\x02\u070F\u0711\x05\xDC" +
		"o\x02\u0710\u070B\x03\x02\x02\x02\u0710\u070C\x03\x02\x02\x02\u0710\u070D" +
		"\x03\x02\x02\x02\u0710\u070E\x03\x02\x02\x02\u0710\u070F\x03\x02\x02\x02" +
		"\u0711\xF3\x03\x02\x02\x02\u0712\u0717\x07\xE2\x02\x02\u0713\u0714\x07" +
		"\n\x02\x02\u0714\u0715\x05\xD0i\x02\u0715\u0716\x07\t\x02\x02\u0716\u0718" +
		"\x03\x02\x02\x02\u0717\u0713\x03\x02\x02\x02\u0717\u0718\x03\x02\x02\x02" +
		"\u0718\xF5\x03\x02\x02\x02\u0719\u071A\t\x1D\x02\x02\u071A\xF7\x03\x02" +
		"\x02\x02\u071B\u071C\x07p\x02\x02\u071C\u071D\x07r\x02\x02\u071D\u071E" +
		"\x07t\x02\x02\u071E\xF9\x03\x02\x02\x02\u071F\u0720\x07p\x02\x02\u0720" +
		"\u0721\x07s\x02\x02\u0721\u0722\x07t\x02\x02\u0722\xFB\x03\x02\x02\x02" +
		"\u0723\u0724\x07v\x02\x02\u0724\u0725\x07r\x02\x02\u0725\u0726\x07t\x02" +
		"\x02\u0726\xFD\x03\x02\x02\x02\u0727\u0728\x07v\x02\x02\u0728\u0729\x07" +
		"s\x02\x02\u0729\u072A\x07t\x02\x02\u072A\xFF\x03\x02\x02\x02\u072B\u072C" +
		"\x07p\x02\x02\u072C\u072D\x07l\x02\x02\u072D\u072E\x07m\x02\x02\u072E" +
		"\u0101\x03\x02\x02\x02\xCB\u0103\u0108\u010E\u0114\u0118\u011D\u0122\u0126" +
		"\u012E\u0138\u013E\u0143\u014E\u015D\u0178\u017E\u0180\u0182\u018F\u0195" +
		"\u019A\u01AA\u01AF\u01B3\u01B6\u01BA\u01C3\u01C9\u01CD\u01D4\u01DB\u01DF" +
		"\u01E6\u01EA\u01FA\u01FF\u0205\u0209\u020C\u0214\u021A\u021F\u022A\u022D" +
		"\u0232\u023D\u0243\u0248\u024C\u024F\u0258\u0281\u02BD\u02C1\u02CC\u02D0" +
		"\u02DB\u030A\u0312\u031A\u0325\u0330\u0335\u0339\u033F\u0343\u034D\u0351" +
		"\u0358\u0368\u0371\u0376\u0378\u037C\u0384\u0387\u038B\u038E\u039D\u03A0" +
		"\u03A3\u03B2\u03B5\u03B9\u03BC\u03BF\u03C2\u03D7\u03DA\u03DE\u03E2\u03E6" +
		"\u03EA\u03F8\u03FC\u0400\u0406\u040C\u040F\u0412\u041E\u0425\u042A\u042E" +
		"\u0434\u0446\u044C\u0453\u0459\u045D\u0466\u0469\u046C\u0471\u0475\u0478" +
		"\u047B\u0482\u0487\u048C\u0491\u0499\u04A1\u04A5\u04A8\u04AB\u04B2\u04BF" +
		"\u04C8\u04CE\u04D4\u04DB\u04E2\u04E9\u04EF\u04FC\u0500\u050B\u050F\u0516" +
		"\u0519\u0528\u0538\u0563\u056B\u056F\u057B\u0583\u058B\u0593\u059B\u05B2" +
		"\u05B8\u05BD\u05BF\u05C8\u05E2\u05E7\u05F3\u05FC\u0602\u0606\u060A\u060D" +
		"\u0616\u061C\u0620\u0625\u0628\u0632\u0636\u063A\u063D\u0641\u064D\u066C" +
		"\u0675\u0678\u067B\u067E\u0690\u0695\u069D\u06A4\u06AD\u06B2\u06B7\u06BB" +
		"\u06C0\u06CD\u06D7\u06DA\u06E3\u06E7\u06E9\u06F0\u06F8\u0700\u0709\u0710" +
		"\u0717";
	public static readonly _serializedATN: string = Utils.join(
		[
			VtlParser._serializedATNSegment0,
			VtlParser._serializedATNSegment1,
			VtlParser._serializedATNSegment2,
			VtlParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VtlParser.__ATN) {
			VtlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(VtlParser._serializedATN));
		}

		return VtlParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public EOF(): TerminalNode | undefined { return this.tryGetToken(VtlParser.EOF, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.EOL);
		} else {
			return this.getToken(VtlParser.EOL, i);
		}
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
	public ML_COMMENT(): TerminalNode[];
	public ML_COMMENT(i: number): TerminalNode;
	public ML_COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.ML_COMMENT);
		} else {
			return this.getToken(VtlParser.ML_COMMENT, i);
		}
	}
	public SL_COMMENT(): TerminalNode[];
	public SL_COMMENT(i: number): TerminalNode;
	public SL_COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.SL_COMMENT);
		} else {
			return this.getToken(VtlParser.SL_COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_start; }
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
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public varID(): VarIDContext | undefined {
		return this.tryGetRuleContext(0, VarIDContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ASSIGN, 0); }
	public persistentAssignment(): PersistentAssignmentContext | undefined {
		return this.tryGetRuleContext(0, PersistentAssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_statement; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PersistentAssignmentContext extends ParserRuleContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}
	public PUT_SYMBOL(): TerminalNode { return this.getToken(VtlParser.PUT_SYMBOL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_persistentAssignment; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPersistentAssignment) {
			listener.enterPersistentAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPersistentAssignment) {
			listener.exitPersistentAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPersistentAssignment) {
			return visitor.visitPersistentAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalExprContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.OPTIONAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_optionalExpr; }
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


export class ExprContext extends ParserRuleContext {
	public exprAtom(): ExprAtomContext | undefined {
		return this.tryGetRuleContext(0, ExprAtomContext);
	}
	public MEMBERSHIP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MEMBERSHIP, 0); }
	public componentID(): ComponentIDContext | undefined {
		return this.tryGetRuleContext(0, ComponentIDContext);
	}
	public datasetClause(): DatasetClauseContext[];
	public datasetClause(i: number): DatasetClauseContext;
	public datasetClause(i?: number): DatasetClauseContext | DatasetClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DatasetClauseContext);
		} else {
			return this.getRuleContext(i, DatasetClauseContext);
		}
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
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.ASSIGN);
		} else {
			return this.getToken(VtlParser.ASSIGN, i);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NOT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IN, 0); }
	public NOT_IN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NOT_IN, 0); }
	public lists(): ListsContext | undefined {
		return this.tryGetRuleContext(0, ListsContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IDENTIFIER, 0); }
	public EXISTS_IN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.EXISTS_IN, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	public retainType(): RetainTypeContext | undefined {
		return this.tryGetRuleContext(0, RetainTypeContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(VtlParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(VtlParser.OR, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(VtlParser.XOR, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IF, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.THEN, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ELSE, 0); }
	public exprComplex(): ExprComplexContext | undefined {
		return this.tryGetRuleContext(0, ExprComplexContext);
	}
	public CONCAT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CONCAT, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_expr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprComplexContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_exprComplex; }
	public copyFrom(ctx: ExprComplexContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprValidationExprContext extends ExprComplexContext {
	public validationExpr(): ValidationExprContext {
		return this.getRuleContext(0, ValidationExprContext);
	}
	constructor(ctx: ExprComplexContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterExprValidationExpr) {
			listener.enterExprValidationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitExprValidationExpr) {
			listener.exitExprValidationExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitExprValidationExpr) {
			return visitor.visitExprValidationExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefinitionExpressionsContext extends ExprComplexContext {
	public defExpr(): DefExprContext {
		return this.getRuleContext(0, DefExprContext);
	}
	constructor(ctx: ExprComplexContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefinitionExpressions) {
			listener.enterDefinitionExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefinitionExpressions) {
			listener.exitDefinitionExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefinitionExpressions) {
			return visitor.visitDefinitionExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StandaloneAggregateFunctionContext extends ExprComplexContext {
	public aggrInvocation(): AggrInvocationContext {
		return this.getRuleContext(0, AggrInvocationContext);
	}
	constructor(ctx: ExprComplexContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterStandaloneAggregateFunction) {
			listener.enterStandaloneAggregateFunction(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitStandaloneAggregateFunction) {
			listener.exitStandaloneAggregateFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitStandaloneAggregateFunction) {
			return visitor.visitStandaloneAggregateFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComponentExpressionwithAggrClauseContext extends ExprComplexContext {
	public aggrInvocationCompExpr(): AggrInvocationCompExprContext {
		return this.getRuleContext(0, AggrInvocationCompExprContext);
	}
	constructor(ctx: ExprComplexContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComponentExpressionwithAggrClause) {
			listener.enterComponentExpressionwithAggrClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComponentExpressionwithAggrClause) {
			listener.exitComponentExpressionwithAggrClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComponentExpressionwithAggrClause) {
			return visitor.visitComponentExpressionwithAggrClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StandaloneAnalyticFunctionContext extends ExprComplexContext {
	public anFunctionClause(): AnFunctionClauseContext {
		return this.getRuleContext(0, AnFunctionClauseContext);
	}
	constructor(ctx: ExprComplexContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterStandaloneAnalyticFunction) {
			listener.enterStandaloneAnalyticFunction(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitStandaloneAnalyticFunction) {
			listener.exitStandaloneAnalyticFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitStandaloneAnalyticFunction) {
			return visitor.visitStandaloneAnalyticFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleaggregateFunctionsContext extends ExprComplexContext {
	public aggrFunction(): AggrFunctionContext {
		return this.getRuleContext(0, AggrFunctionContext);
	}
	constructor(ctx: ExprComplexContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSimpleaggregateFunctions) {
			listener.enterSimpleaggregateFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSimpleaggregateFunctions) {
			listener.exitSimpleaggregateFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSimpleaggregateFunctions) {
			return visitor.visitSimpleaggregateFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeexpressionsContext extends ExprComplexContext {
	public timeExpr(): TimeExprContext {
		return this.getRuleContext(0, TimeExprContext);
	}
	constructor(ctx: ExprComplexContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeexpressions) {
			listener.enterTimeexpressions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeexpressions) {
			listener.exitTimeexpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeexpressions) {
			return visitor.visitTimeexpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetExpressionsContext extends ExprComplexContext {
	public setExpr(): SetExprContext {
		return this.getRuleContext(0, SetExprContext);
	}
	constructor(ctx: ExprComplexContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSetExpressions) {
			listener.enterSetExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSetExpressions) {
			listener.exitSetExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSetExpressions) {
			return visitor.visitSetExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallFunctionExpressionContext extends ExprComplexContext {
	public callFunction(): CallFunctionContext {
		return this.getRuleContext(0, CallFunctionContext);
	}
	constructor(ctx: ExprComplexContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCallFunctionExpression) {
			listener.enterCallFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCallFunctionExpression) {
			listener.exitCallFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCallFunctionExpression) {
			return visitor.visitCallFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JoinExpressionContext extends ExprComplexContext {
	public joinExpr(): JoinExprContext {
		return this.getRuleContext(0, JoinExprContext);
	}
	constructor(ctx: ExprComplexContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinExpression) {
			listener.enterJoinExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinExpression) {
			listener.exitJoinExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinExpression) {
			return visitor.visitJoinExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeExprContext extends ParserRuleContext {
	public _opComp: Token | undefined;
	public timeSeriesExpr(): TimeSeriesExprContext | undefined {
		return this.tryGetRuleContext(0, TimeSeriesExprContext);
	}
	public periodExpr(): PeriodExprContext | undefined {
		return this.tryGetRuleContext(0, PeriodExprContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public timeShiftExpr(): TimeShiftExprContext | undefined {
		return this.tryGetRuleContext(0, TimeShiftExprContext);
	}
	public timeAggExpr(): TimeAggExprContext | undefined {
		return this.tryGetRuleContext(0, TimeAggExprContext);
	}
	public CURRENT_DATE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CURRENT_DATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_timeExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeExpr) {
			listener.enterTimeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeExpr) {
			listener.exitTimeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeExpr) {
			return visitor.visitTimeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefHierarchicalContext extends ParserRuleContext {
	public defineHierarchicalRuleset(): DefineHierarchicalRulesetContext {
		return this.getRuleContext(0, DefineHierarchicalRulesetContext);
	}
	public rulesetID(): RulesetIDContext {
		return this.getRuleContext(0, RulesetIDContext);
	}
	public hierRuleSignature(): HierRuleSignatureContext {
		return this.getRuleContext(0, HierRuleSignatureContext);
	}
	public IS(): TerminalNode { return this.getToken(VtlParser.IS, 0); }
	public ruleClauseHierarchical(): RuleClauseHierarchicalContext {
		return this.getRuleContext(0, RuleClauseHierarchicalContext);
	}
	public endHierarchicalRuleset(): EndHierarchicalRulesetContext {
		return this.getRuleContext(0, EndHierarchicalRulesetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_defHierarchical; }
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


export class RuleClauseHierarchicalContext extends ParserRuleContext {
	public ruleItemHierarchical(): RuleItemHierarchicalContext[];
	public ruleItemHierarchical(i: number): RuleItemHierarchicalContext;
	public ruleItemHierarchical(i?: number): RuleItemHierarchicalContext | RuleItemHierarchicalContext[] {
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
	public get ruleIndex(): number { return VtlParser.RULE_ruleClauseHierarchical; }
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
	public codeItemRelation(): CodeItemRelationContext {
		return this.getRuleContext(0, CodeItemRelationContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IDENTIFIER, 0); }
	public erCode(): ErCodeContext | undefined {
		return this.tryGetRuleContext(0, ErCodeContext);
	}
	public erLevel(): ErLevelContext | undefined {
		return this.tryGetRuleContext(0, ErLevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_ruleItemHierarchical; }
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
	public RULE(): TerminalNode { return this.getToken(VtlParser.RULE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	public VALUE_DOMAIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VALUE_DOMAIN, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VARIABLE, 0); }
	public valueDomainSignature(): ValueDomainSignatureContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainSignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_hierRuleSignature; }
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
	public CONDITION(): TerminalNode { return this.getToken(VtlParser.CONDITION, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.AS);
		} else {
			return this.getToken(VtlParser.AS, i);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_valueDomainSignature; }
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
	public codeItemRef(): CodeItemRefContext {
		return this.getRuleContext(0, CodeItemRefContext);
	}
	public codeItemRelationClause(): CodeItemRelationClauseContext[];
	public codeItemRelationClause(i: number): CodeItemRelationClauseContext;
	public codeItemRelationClause(i?: number): CodeItemRelationClauseContext | CodeItemRelationClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeItemRelationClauseContext);
		} else {
			return this.getRuleContext(i, CodeItemRelationClauseContext);
		}
	}
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.WHEN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public THEN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.THEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_codeItemRelation; }
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
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_codeItemRelationClause; }
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


export class CodeItemRefContext extends ParserRuleContext {
	public _opComp: Token | undefined;
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_codeItemRef; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCodeItemRef) {
			listener.enterCodeItemRef(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCodeItemRef) {
			listener.exitCodeItemRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCodeItemRef) {
			return visitor.visitCodeItemRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefDatapointContext extends ParserRuleContext {
	public defineDatapointRuleset(): DefineDatapointRulesetContext {
		return this.getRuleContext(0, DefineDatapointRulesetContext);
	}
	public rulesetID(): RulesetIDContext {
		return this.getRuleContext(0, RulesetIDContext);
	}
	public rulesetSignature(): RulesetSignatureContext {
		return this.getRuleContext(0, RulesetSignatureContext);
	}
	public IS(): TerminalNode { return this.getToken(VtlParser.IS, 0); }
	public ruleClauseDatapoint(): RuleClauseDatapointContext {
		return this.getRuleContext(0, RuleClauseDatapointContext);
	}
	public endDatapointRuleset(): EndDatapointRulesetContext {
		return this.getRuleContext(0, EndDatapointRulesetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_defDatapoint; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefDatapoint) {
			listener.enterDefDatapoint(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefDatapoint) {
			listener.exitDefDatapoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefDatapoint) {
			return visitor.visitDefDatapoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleClauseDatapointContext extends ParserRuleContext {
	public ruleItemDatapoint(): RuleItemDatapointContext[];
	public ruleItemDatapoint(i: number): RuleItemDatapointContext;
	public ruleItemDatapoint(i?: number): RuleItemDatapointContext | RuleItemDatapointContext[] {
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
	public get ruleIndex(): number { return VtlParser.RULE_ruleClauseDatapoint; }
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
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IDENTIFIER, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.WHEN, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.THEN, 0); }
	public erCode(): ErCodeContext | undefined {
		return this.tryGetRuleContext(0, ErCodeContext);
	}
	public erLevel(): ErLevelContext | undefined {
		return this.tryGetRuleContext(0, ErLevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_ruleItemDatapoint; }
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


export class RulesetSignatureContext extends ParserRuleContext {
	public varSignature(): VarSignatureContext[];
	public varSignature(i: number): VarSignatureContext;
	public varSignature(i?: number): VarSignatureContext | VarSignatureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarSignatureContext);
		} else {
			return this.getRuleContext(i, VarSignatureContext);
		}
	}
	public VALUE_DOMAIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VALUE_DOMAIN, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VARIABLE, 0); }
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_rulesetSignature; }
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


export class VarSignatureContext extends ParserRuleContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.AS, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_varSignature; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterVarSignature) {
			listener.enterVarSignature(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitVarSignature) {
			listener.exitVarSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitVarSignature) {
			return visitor.visitVarSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefExprContext extends ParserRuleContext {
	public defOperator(): DefOperatorContext | undefined {
		return this.tryGetRuleContext(0, DefOperatorContext);
	}
	public defDatapoint(): DefDatapointContext | undefined {
		return this.tryGetRuleContext(0, DefDatapointContext);
	}
	public defHierarchical(): DefHierarchicalContext | undefined {
		return this.tryGetRuleContext(0, DefHierarchicalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_defExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefExpr) {
			listener.enterDefExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefExpr) {
			listener.exitDefExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefExpr) {
			return visitor.visitDefExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefOperatorContext extends ParserRuleContext {
	public DEFINE(): TerminalNode { return this.getToken(VtlParser.DEFINE, 0); }
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
	public IS(): TerminalNode { return this.getToken(VtlParser.IS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public END(): TerminalNode { return this.getToken(VtlParser.END, 0); }
	public parameterItem(): ParameterItemContext[];
	public parameterItem(i: number): ParameterItemContext;
	public parameterItem(i?: number): ParameterItemContext | ParameterItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterItemContext);
		} else {
			return this.getRuleContext(i, ParameterItemContext);
		}
	}
	public RETURNS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RETURNS, 0); }
	public dataType(): DataTypeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeContext);
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_defOperator; }
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


export class ParameterItemContext extends ParserRuleContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DEFAULT, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_parameterItem; }
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


export class CallFunctionContext extends ParserRuleContext {
	public operatorID(): OperatorIDContext {
		return this.getRuleContext(0, OperatorIDContext);
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
	public OPTIONAL(): TerminalNode[];
	public OPTIONAL(i: number): TerminalNode;
	public OPTIONAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.OPTIONAL);
		} else {
			return this.getToken(VtlParser.OPTIONAL, i);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_callFunction; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCallFunction) {
			listener.enterCallFunction(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCallFunction) {
			listener.exitCallFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCallFunction) {
			return visitor.visitCallFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprAtomContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_exprAtom; }
	public copyFrom(ctx: ExprAtomContext): void {
		super.copyFrom(ctx);
	}
}
export class RoundAtomContext extends ExprAtomContext {
	public ROUND(): TerminalNode { return this.getToken(VtlParser.ROUND, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CARTESIAN_PER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CARTESIAN_PER, 0); }
	public optionalExpr(): OptionalExprContext | undefined {
		return this.tryGetRuleContext(0, OptionalExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRoundAtom) {
			listener.enterRoundAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRoundAtom) {
			listener.exitRoundAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRoundAtom) {
			return visitor.visitRoundAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CeilAtomContext extends ExprAtomContext {
	public CEIL(): TerminalNode { return this.getToken(VtlParser.CEIL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCeilAtom) {
			listener.enterCeilAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCeilAtom) {
			listener.exitCeilAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCeilAtom) {
			return visitor.visitCeilAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloorAtomContext extends ExprAtomContext {
	public FLOOR(): TerminalNode { return this.getToken(VtlParser.FLOOR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFloorAtom) {
			listener.enterFloorAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFloorAtom) {
			listener.exitFloorAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFloorAtom) {
			return visitor.visitFloorAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MinAtomContext extends ExprAtomContext {
	public ABS(): TerminalNode { return this.getToken(VtlParser.ABS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterMinAtom) {
			listener.enterMinAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitMinAtom) {
			listener.exitMinAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitMinAtom) {
			return visitor.visitMinAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpAtomContext extends ExprAtomContext {
	public EXP(): TerminalNode { return this.getToken(VtlParser.EXP, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterExpAtom) {
			listener.enterExpAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitExpAtom) {
			listener.exitExpAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitExpAtom) {
			return visitor.visitExpAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LnAtomContext extends ExprAtomContext {
	public LN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public TRUNC(): TerminalNode | undefined { return this.tryGetToken(VtlParser.TRUNC, 0); }
	public CARTESIAN_PER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CARTESIAN_PER, 0); }
	public optionalExpr(): OptionalExprContext | undefined {
		return this.tryGetRuleContext(0, OptionalExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLnAtom) {
			listener.enterLnAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLnAtom) {
			listener.exitLnAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLnAtom) {
			return visitor.visitLnAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogAtomContext extends ExprAtomContext {
	public LOG(): TerminalNode { return this.getToken(VtlParser.LOG, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode { return this.getToken(VtlParser.CARTESIAN_PER, 0); }
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLogAtom) {
			listener.enterLogAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLogAtom) {
			listener.exitLogAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLogAtom) {
			return visitor.visitLogAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerAtomContext extends ExprAtomContext {
	public POWER(): TerminalNode { return this.getToken(VtlParser.POWER, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode { return this.getToken(VtlParser.CARTESIAN_PER, 0); }
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPowerAtom) {
			listener.enterPowerAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPowerAtom) {
			listener.exitPowerAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPowerAtom) {
			return visitor.visitPowerAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SqrtAtomContext extends ExprAtomContext {
	public SQRT(): TerminalNode { return this.getToken(VtlParser.SQRT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSqrtAtom) {
			listener.enterSqrtAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSqrtAtom) {
			listener.exitSqrtAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSqrtAtom) {
			return visitor.visitSqrtAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LenAtomContext extends ExprAtomContext {
	public LEN(): TerminalNode { return this.getToken(VtlParser.LEN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLenAtom) {
			listener.enterLenAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLenAtom) {
			listener.exitLenAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLenAtom) {
			return visitor.visitLenAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BetweenAtomContext extends ExprAtomContext {
	public BETWEEN(): TerminalNode { return this.getToken(VtlParser.BETWEEN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(ctx: ExprAtomContext) {
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
export class TrimAtomContext extends ExprAtomContext {
	public TRIM(): TerminalNode { return this.getToken(VtlParser.TRIM, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTrimAtom) {
			listener.enterTrimAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTrimAtom) {
			listener.exitTrimAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTrimAtom) {
			return visitor.visitTrimAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LtrimAtomContext extends ExprAtomContext {
	public LTRIM(): TerminalNode { return this.getToken(VtlParser.LTRIM, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLtrimAtom) {
			listener.enterLtrimAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLtrimAtom) {
			listener.exitLtrimAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLtrimAtom) {
			return visitor.visitLtrimAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RtrimAtomContext extends ExprAtomContext {
	public RTRIM(): TerminalNode { return this.getToken(VtlParser.RTRIM, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRtrimAtom) {
			listener.enterRtrimAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRtrimAtom) {
			listener.exitRtrimAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRtrimAtom) {
			return visitor.visitRtrimAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UcaseAtomContext extends ExprAtomContext {
	public UCASE(): TerminalNode { return this.getToken(VtlParser.UCASE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUcaseAtom) {
			listener.enterUcaseAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUcaseAtom) {
			listener.exitUcaseAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUcaseAtom) {
			return visitor.visitUcaseAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LcaseAtomContext extends ExprAtomContext {
	public LCASE(): TerminalNode { return this.getToken(VtlParser.LCASE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLcaseAtom) {
			listener.enterLcaseAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLcaseAtom) {
			listener.exitLcaseAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLcaseAtom) {
			return visitor.visitLcaseAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubstrAtomContext extends ExprAtomContext {
	public SUBSTR(): TerminalNode { return this.getToken(VtlParser.SUBSTR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
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
	constructor(ctx: ExprAtomContext) {
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
export class InstrAtomContext extends ExprAtomContext {
	public INSTR(): TerminalNode { return this.getToken(VtlParser.INSTR, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
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
	constructor(ctx: ExprAtomContext) {
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
export class ReplaceAtomContext extends ExprAtomContext {
	public REPLACE(): TerminalNode { return this.getToken(VtlParser.REPLACE, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	public optionalExpr(): OptionalExprContext | undefined {
		return this.tryGetRuleContext(0, OptionalExprContext);
	}
	constructor(ctx: ExprAtomContext) {
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
export class CharsetMatchAtomContext extends ExprAtomContext {
	public CHARSET_MATCH(): TerminalNode { return this.getToken(VtlParser.CHARSET_MATCH, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode { return this.getToken(VtlParser.CARTESIAN_PER, 0); }
	constructor(ctx: ExprAtomContext) {
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
export class IsNullAtomContext extends ExprAtomContext {
	public ISNULL(): TerminalNode { return this.getToken(VtlParser.ISNULL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
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
export class NvlAtomContext extends ExprAtomContext {
	public NVL(): TerminalNode { return this.getToken(VtlParser.NVL, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode { return this.getToken(VtlParser.CARTESIAN_PER, 0); }
	constructor(ctx: ExprAtomContext) {
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
export class ModAtomContext extends ExprAtomContext {
	public MOD(): TerminalNode { return this.getToken(VtlParser.MOD, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode { return this.getToken(VtlParser.CARTESIAN_PER, 0); }
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterModAtom) {
			listener.enterModAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitModAtom) {
			listener.exitModAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitModAtom) {
			return visitor.visitModAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefAtomContext extends ExprAtomContext {
	public ref(): RefContext {
		return this.getRuleContext(0, RefContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRefAtom) {
			listener.enterRefAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRefAtom) {
			listener.exitRefAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRefAtom) {
			return visitor.visitRefAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EvalExprAtomContext extends ExprAtomContext {
	public evalExpr(): EvalExprContext {
		return this.getRuleContext(0, EvalExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterEvalExprAtom) {
			listener.enterEvalExprAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitEvalExprAtom) {
			listener.exitEvalExprAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitEvalExprAtom) {
			return visitor.visitEvalExprAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastExprAtomContext extends ExprAtomContext {
	public castExpr(): CastExprContext {
		return this.getRuleContext(0, CastExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCastExprAtom) {
			listener.enterCastExprAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCastExprAtom) {
			listener.exitCastExprAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCastExprAtom) {
			return visitor.visitCastExprAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HierarchyExprAtomContext extends ExprAtomContext {
	public hierarchyExpr(): HierarchyExprContext {
		return this.getRuleContext(0, HierarchyExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHierarchyExprAtom) {
			listener.enterHierarchyExprAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHierarchyExprAtom) {
			listener.exitHierarchyExprAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHierarchyExprAtom) {
			return visitor.visitHierarchyExprAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FlowToStockAtomContext extends ExprAtomContext {
	public FLOW_TO_STOCK(): TerminalNode { return this.getToken(VtlParser.FLOW_TO_STOCK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFlowToStockAtom) {
			listener.enterFlowToStockAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFlowToStockAtom) {
			listener.exitFlowToStockAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFlowToStockAtom) {
			return visitor.visitFlowToStockAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StockToFlowAtomContext extends ExprAtomContext {
	public STOCK_TO_FLOW(): TerminalNode { return this.getToken(VtlParser.STOCK_TO_FLOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprAtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterStockToFlowAtom) {
			listener.enterStockToFlowAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitStockToFlowAtom) {
			listener.exitStockToFlowAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitStockToFlowAtom) {
			return visitor.visitStockToFlowAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValidateDPrulesetContext extends ExprAtomContext {
	public validationDatapoint(): ValidationDatapointContext {
		return this.getRuleContext(0, ValidationDatapointContext);
	}
	constructor(ctx: ExprAtomContext) {
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
export class ValidateHRrulesetContext extends ExprAtomContext {
	public validationHierarchical(): ValidationHierarchicalContext {
		return this.getRuleContext(0, ValidationHierarchicalContext);
	}
	constructor(ctx: ExprAtomContext) {
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
export class ValidationSimpleContext extends ExprAtomContext {
	public validationExpr(): ValidationExprContext {
		return this.getRuleContext(0, ValidationExprContext);
	}
	constructor(ctx: ExprAtomContext) {
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


export class RefContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_ref; }
	public copyFrom(ctx: RefContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenthesisExprRefContext extends RefContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: RefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterParenthesisExprRef) {
			listener.enterParenthesisExprRef(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitParenthesisExprRef) {
			listener.exitParenthesisExprRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitParenthesisExprRef) {
			return visitor.visitParenthesisExprRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarIdRefContext extends RefContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}
	constructor(ctx: RefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterVarIdRef) {
			listener.enterVarIdRef(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitVarIdRef) {
			listener.exitVarIdRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitVarIdRef) {
			return visitor.visitVarIdRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantRefContext extends RefContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: RefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConstantRef) {
			listener.enterConstantRef(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConstantRef) {
			listener.exitConstantRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConstantRef) {
			return visitor.visitConstantRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListsContext extends ParserRuleContext {
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_lists; }
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


export class EvalExprContext extends ParserRuleContext {
	public EVAL(): TerminalNode { return this.getToken(VtlParser.EVAL, 0); }
	public routineName(): RoutineNameContext {
		return this.getRuleContext(0, RoutineNameContext);
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
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	public LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LANGUAGE, 0); }
	public STRING_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STRING_CONSTANT, 0); }
	public RETURNS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RETURNS, 0); }
	public outputParameterType(): OutputParameterTypeContext | undefined {
		return this.tryGetRuleContext(0, OutputParameterTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_evalExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterEvalExpr) {
			listener.enterEvalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitEvalExpr) {
			listener.exitEvalExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitEvalExpr) {
			return visitor.visitEvalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExprContext extends ParserRuleContext {
	public CAST(): TerminalNode { return this.getToken(VtlParser.CAST, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	public basicScalarType(): BasicScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, BasicScalarTypeContext);
	}
	public valueDomainName(): ValueDomainNameContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainNameContext);
	}
	public STRING_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STRING_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_castExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCastExpr) {
			listener.enterCastExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCastExpr) {
			listener.exitCastExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCastExpr) {
			return visitor.visitCastExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PeriodExprContext extends ParserRuleContext {
	public PERIOD_INDICATOR(): TerminalNode { return this.getToken(VtlParser.PERIOD_INDICATOR, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_periodExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPeriodExpr) {
			listener.enterPeriodExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPeriodExpr) {
			listener.exitPeriodExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPeriodExpr) {
			return visitor.visitPeriodExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeShiftExprContext extends ParserRuleContext {
	public TIMESHIFT(): TerminalNode { return this.getToken(VtlParser.TIMESHIFT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CARTESIAN_PER(): TerminalNode { return this.getToken(VtlParser.CARTESIAN_PER, 0); }
	public INTEGER_CONSTANT(): TerminalNode { return this.getToken(VtlParser.INTEGER_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_timeShiftExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeShiftExpr) {
			listener.enterTimeShiftExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeShiftExpr) {
			listener.exitTimeShiftExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeShiftExpr) {
			return visitor.visitTimeShiftExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeSeriesExprContext extends ParserRuleContext {
	public FILL_TIME_SERIES(): TerminalNode { return this.getToken(VtlParser.FILL_TIME_SERIES, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CARTESIAN_PER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CARTESIAN_PER, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SINGLE, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_timeSeriesExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeSeriesExpr) {
			listener.enterTimeSeriesExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeSeriesExpr) {
			listener.exitTimeSeriesExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeSeriesExpr) {
			return visitor.visitTimeSeriesExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeAggExprContext extends ParserRuleContext {
	public TIME_AGG(): TerminalNode { return this.getToken(VtlParser.TIME_AGG, 0); }
	public STRING_CONSTANT(): TerminalNode[];
	public STRING_CONSTANT(i: number): TerminalNode;
	public STRING_CONSTANT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.STRING_CONSTANT);
		} else {
			return this.getToken(VtlParser.STRING_CONSTANT, i);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
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
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LAST, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_timeAggExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeAggExpr) {
			listener.enterTimeAggExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeAggExpr) {
			listener.exitTimeAggExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeAggExpr) {
			return visitor.visitTimeAggExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValidationExprContext extends ParserRuleContext {
	public CHECK(): TerminalNode { return this.getToken(VtlParser.CHECK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public erCode(): ErCodeContext | undefined {
		return this.tryGetRuleContext(0, ErCodeContext);
	}
	public erLevel(): ErLevelContext | undefined {
		return this.tryGetRuleContext(0, ErLevelContext);
	}
	public IMBALANCE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IMBALANCE, 0); }
	public INVALID(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INVALID, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_validationExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationExpr) {
			listener.enterValidationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationExpr) {
			listener.exitValidationExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationExpr) {
			return visitor.visitValidationExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValidationDatapointContext extends ParserRuleContext {
	public CHECK_DATAPOINT(): TerminalNode { return this.getToken(VtlParser.CHECK_DATAPOINT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	public COMPONENTS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COMPONENTS, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	public INVALID(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INVALID, 0); }
	public ALL_MEASURES(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL_MEASURES, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_validationDatapoint; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationDatapoint) {
			listener.enterValidationDatapoint(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationDatapoint) {
			listener.exitValidationDatapoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationDatapoint) {
			return visitor.visitValidationDatapoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValidationHierarchicalContext extends ParserRuleContext {
	public CHECK_HIERARCHY(): TerminalNode { return this.getToken(VtlParser.CHECK_HIERARCHY, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	public CONDITION(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CONDITION, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	public RULE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RULE, 0); }
	public NON_NULL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NON_NULL, 0); }
	public NON_ZERO(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NON_ZERO, 0); }
	public PARTIAL_NULL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PARTIAL_NULL, 0); }
	public PARTIAL_ZERO(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PARTIAL_ZERO, 0); }
	public ALWAYS_NULL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALWAYS_NULL, 0); }
	public ALWAYS_ZERO(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALWAYS_ZERO, 0); }
	public DATASET(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATASET, 0); }
	public DATASET_PRIORITY(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATASET_PRIORITY, 0); }
	public INVALID(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INVALID, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	public ALL_MEASURES(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL_MEASURES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_validationHierarchical; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationHierarchical) {
			listener.enterValidationHierarchical(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationHierarchical) {
			listener.exitValidationHierarchical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationHierarchical) {
			return visitor.visitValidationHierarchical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErCodeContext extends ParserRuleContext {
	public ERRORCODE(): TerminalNode { return this.getToken(VtlParser.ERRORCODE, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_erCode; }
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
	public ERRORLEVEL(): TerminalNode { return this.getToken(VtlParser.ERRORLEVEL, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_erLevel; }
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


export class HierarchyExprContext extends ParserRuleContext {
	public HIERARCHY(): TerminalNode { return this.getToken(VtlParser.HIERARCHY, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	public CONDITION(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CONDITION, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	public RULE(): TerminalNode[];
	public RULE(i: number): TerminalNode;
	public RULE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RULE);
		} else {
			return this.getToken(VtlParser.RULE, i);
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
	public NON_NULL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NON_NULL, 0); }
	public NON_ZERO(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NON_ZERO, 0); }
	public PARTIAL_NULL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PARTIAL_NULL, 0); }
	public PARTIAL_ZERO(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PARTIAL_ZERO, 0); }
	public ALWAYS_NULL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALWAYS_NULL, 0); }
	public ALWAYS_ZERO(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALWAYS_ZERO, 0); }
	public DATASET(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATASET, 0); }
	public RULE_PRIORITY(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RULE_PRIORITY, 0); }
	public COMPUTED(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COMPUTED, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_hierarchyExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHierarchyExpr) {
			listener.enterHierarchyExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHierarchyExpr) {
			listener.exitHierarchyExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHierarchyExpr) {
			return visitor.visitHierarchyExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatasetClauseContext extends ParserRuleContext {
	public RENAME(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RENAME, 0); }
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
	public keepClause(): KeepClauseContext | undefined {
		return this.tryGetRuleContext(0, KeepClauseContext);
	}
	public dropClause(): DropClauseContext | undefined {
		return this.tryGetRuleContext(0, DropClauseContext);
	}
	public pivotExpr(): PivotExprContext | undefined {
		return this.tryGetRuleContext(0, PivotExprContext);
	}
	public unpivotExpr(): UnpivotExprContext | undefined {
		return this.tryGetRuleContext(0, UnpivotExprContext);
	}
	public subspaceExpr(): SubspaceExprContext | undefined {
		return this.tryGetRuleContext(0, SubspaceExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_datasetClause; }
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


export class AnFunctionClauseContext extends ParserRuleContext {
	public OVER(): TerminalNode { return this.getToken(VtlParser.OVER, 0); }
	public aggrFunctionName(): AggrFunctionNameContext | undefined {
		return this.tryGetRuleContext(0, AggrFunctionNameContext);
	}
	public anFunction(): AnFunctionContext | undefined {
		return this.tryGetRuleContext(0, AnFunctionContext);
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
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_anFunctionClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAnFunctionClause) {
			listener.enterAnFunctionClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAnFunctionClause) {
			listener.exitAnFunctionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAnFunctionClause) {
			return visitor.visitAnFunctionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionByClauseContext extends ParserRuleContext {
	public PARTITION(): TerminalNode { return this.getToken(VtlParser.PARTITION, 0); }
	public BY(): TerminalNode { return this.getToken(VtlParser.BY, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_partitionByClause; }
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
	public ORDER(): TerminalNode { return this.getToken(VtlParser.ORDER, 0); }
	public BY(): TerminalNode { return this.getToken(VtlParser.BY, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	public ASC(): TerminalNode[];
	public ASC(i: number): TerminalNode;
	public ASC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.ASC);
		} else {
			return this.getToken(VtlParser.ASC, i);
		}
	}
	public DESC(): TerminalNode[];
	public DESC(i: number): TerminalNode;
	public DESC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.DESC);
		} else {
			return this.getToken(VtlParser.DESC, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_orderByClause; }
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


export class WindowingClauseContext extends ParserRuleContext {
	public BETWEEN(): TerminalNode { return this.getToken(VtlParser.BETWEEN, 0); }
	public limitClauseItem(): LimitClauseItemContext[];
	public limitClauseItem(i: number): LimitClauseItemContext;
	public limitClauseItem(i?: number): LimitClauseItemContext | LimitClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LimitClauseItemContext);
		} else {
			return this.getRuleContext(i, LimitClauseItemContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(VtlParser.AND, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RANGE, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATA, 0); }
	public POINTS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.POINTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_windowingClause; }
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


export class LimitClauseItemContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INTEGER_CONSTANT, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PRECEDING, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FOLLOWING, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CURRENT, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATA, 0); }
	public POINT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.POINT, 0); }
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(VtlParser.UNBOUNDED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_limitClauseItem; }
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


export class JoinExprContext extends ParserRuleContext {
	public joinKeyword(): JoinKeywordContext {
		return this.getRuleContext(0, JoinKeywordContext);
	}
	public joinClause(): JoinClauseContext {
		return this.getRuleContext(0, JoinClauseContext);
	}
	public joinBody(): JoinBodyContext | undefined {
		return this.tryGetRuleContext(0, JoinBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinExpr; }
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


export class JoinClauseContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.AS);
		} else {
			return this.getToken(VtlParser.AS, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(VtlParser.USING, 0); }
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
	public get ruleIndex(): number { return VtlParser.RULE_joinClause; }
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


export class JoinBodyContext extends ParserRuleContext {
	public joinFilterClause(): JoinFilterClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinFilterClauseContext);
	}
	public joinCalcClause(): JoinCalcClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinCalcClauseContext);
	}
	public joinApplyClause(): JoinApplyClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinApplyClauseContext);
	}
	public joinAggClause(): JoinAggClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinAggClauseContext);
	}
	public joinKeepClause(): JoinKeepClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinKeepClauseContext);
	}
	public joinDropClause(): JoinDropClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinDropClauseContext);
	}
	public joinRenameClause(): JoinRenameClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinRenameClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinBody; }
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


export class JoinCalcClauseContext extends ParserRuleContext {
	public joinCalcClauseItem(): JoinCalcClauseItemContext[];
	public joinCalcClauseItem(i: number): JoinCalcClauseItemContext;
	public joinCalcClauseItem(i?: number): JoinCalcClauseItemContext | JoinCalcClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinCalcClauseItemContext);
		} else {
			return this.getRuleContext(i, JoinCalcClauseItemContext);
		}
	}
	public componentRole(): ComponentRoleContext | undefined {
		return this.tryGetRuleContext(0, ComponentRoleContext);
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinCalcClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinCalcClause) {
			listener.enterJoinCalcClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinCalcClause) {
			listener.exitJoinCalcClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinCalcClause) {
			return visitor.visitJoinCalcClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinCalcClauseItemContext extends ParserRuleContext {
	public CALC(): TerminalNode { return this.getToken(VtlParser.CALC, 0); }
	public joinCalcExpr(): JoinCalcExprContext[];
	public joinCalcExpr(i: number): JoinCalcExprContext;
	public joinCalcExpr(i?: number): JoinCalcExprContext | JoinCalcExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinCalcExprContext);
		} else {
			return this.getRuleContext(i, JoinCalcExprContext);
		}
	}
	public componentRole(): ComponentRoleContext[];
	public componentRole(i: number): ComponentRoleContext;
	public componentRole(i?: number): ComponentRoleContext | ComponentRoleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentRoleContext);
		} else {
			return this.getRuleContext(i, ComponentRoleContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinCalcClauseItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinCalcClauseItem) {
			listener.enterJoinCalcClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinCalcClauseItem) {
			listener.exitJoinCalcClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinCalcClauseItem) {
			return visitor.visitJoinCalcClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinCalcExprContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(VtlParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinCalcExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinCalcExpr) {
			listener.enterJoinCalcExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinCalcExpr) {
			listener.exitJoinCalcExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinCalcExpr) {
			return visitor.visitJoinCalcExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinAggClauseContext extends ParserRuleContext {
	public AGGREGATE(): TerminalNode { return this.getToken(VtlParser.AGGREGATE, 0); }
	public joinAggClauseItem(): JoinAggClauseItemContext[];
	public joinAggClauseItem(i: number): JoinAggClauseItemContext;
	public joinAggClauseItem(i?: number): JoinAggClauseItemContext | JoinAggClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinAggClauseItemContext);
		} else {
			return this.getRuleContext(i, JoinAggClauseItemContext);
		}
	}
	public componentRole(): ComponentRoleContext | undefined {
		return this.tryGetRuleContext(0, ComponentRoleContext);
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
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
	public get ruleIndex(): number { return VtlParser.RULE_joinAggClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinAggClause) {
			listener.enterJoinAggClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinAggClause) {
			listener.exitJoinAggClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinAggClause) {
			return visitor.visitJoinAggClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinAggClauseItemContext extends ParserRuleContext {
	public joinAggExpr(): JoinAggExprContext[];
	public joinAggExpr(i: number): JoinAggExprContext;
	public joinAggExpr(i?: number): JoinAggExprContext | JoinAggExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinAggExprContext);
		} else {
			return this.getRuleContext(i, JoinAggExprContext);
		}
	}
	public componentRole(): ComponentRoleContext | undefined {
		return this.tryGetRuleContext(0, ComponentRoleContext);
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinAggClauseItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinAggClauseItem) {
			listener.enterJoinAggClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinAggClauseItem) {
			listener.exitJoinAggClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinAggClauseItem) {
			return visitor.visitJoinAggClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinAggExprContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(VtlParser.ASSIGN, 0); }
	public aggrFunction(): AggrFunctionContext {
		return this.getRuleContext(0, AggrFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinAggExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinAggExpr) {
			listener.enterJoinAggExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinAggExpr) {
			listener.exitJoinAggExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinAggExpr) {
			return visitor.visitJoinAggExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinKeepClauseContext extends ParserRuleContext {
	public KEEP(): TerminalNode { return this.getToken(VtlParser.KEEP, 0); }
	public keepClauseItem(): KeepClauseItemContext[];
	public keepClauseItem(i: number): KeepClauseItemContext;
	public keepClauseItem(i?: number): KeepClauseItemContext | KeepClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeepClauseItemContext);
		} else {
			return this.getRuleContext(i, KeepClauseItemContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinKeepClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinKeepClause) {
			listener.enterJoinKeepClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinKeepClause) {
			listener.exitJoinKeepClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinKeepClause) {
			return visitor.visitJoinKeepClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinDropClauseContext extends ParserRuleContext {
	public DROP(): TerminalNode { return this.getToken(VtlParser.DROP, 0); }
	public dropClauseItem(): DropClauseItemContext[];
	public dropClauseItem(i: number): DropClauseItemContext;
	public dropClauseItem(i?: number): DropClauseItemContext | DropClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DropClauseItemContext);
		} else {
			return this.getRuleContext(i, DropClauseItemContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinDropClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinDropClause) {
			listener.enterJoinDropClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinDropClause) {
			listener.exitJoinDropClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinDropClause) {
			return visitor.visitJoinDropClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinFilterClauseContext extends ParserRuleContext {
	public FILTER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FILTER, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public rulesetID(): RulesetIDContext | undefined {
		return this.tryGetRuleContext(0, RulesetIDContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinFilterClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinFilterClause) {
			listener.enterJoinFilterClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinFilterClause) {
			listener.exitJoinFilterClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinFilterClause) {
			return visitor.visitJoinFilterClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinRenameClauseContext extends ParserRuleContext {
	public RENAME(): TerminalNode { return this.getToken(VtlParser.RENAME, 0); }
	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
		}
	}
	public TO(): TerminalNode[];
	public TO(i: number): TerminalNode;
	public TO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.TO);
		} else {
			return this.getToken(VtlParser.TO, i);
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
	public MEMBERSHIP(): TerminalNode[];
	public MEMBERSHIP(i: number): TerminalNode;
	public MEMBERSHIP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MEMBERSHIP);
		} else {
			return this.getToken(VtlParser.MEMBERSHIP, i);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinRenameClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinRenameClause) {
			listener.enterJoinRenameClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinRenameClause) {
			listener.exitJoinRenameClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinRenameClause) {
			return visitor.visitJoinRenameClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinApplyClauseContext extends ParserRuleContext {
	public APPLY(): TerminalNode { return this.getToken(VtlParser.APPLY, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinApplyClause; }
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


export class AnFunctionContext extends ParserRuleContext {
	public FIRST_VALUE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FIRST_VALUE, 0); }
	public LAG(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LAG, 0); }
	public LAST_VALUE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LAST_VALUE, 0); }
	public RANK(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RANK, 0); }
	public RATIO_TO_REPORT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RATIO_TO_REPORT, 0); }
	public LEAD(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LEAD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_anFunction; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAnFunction) {
			listener.enterAnFunction(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAnFunction) {
			listener.exitAnFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAnFunction) {
			return visitor.visitAnFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregateClauseContext extends ParserRuleContext {
	public aggrFunctionClause(): AggrFunctionClauseContext[];
	public aggrFunctionClause(i: number): AggrFunctionClauseContext;
	public aggrFunctionClause(i?: number): AggrFunctionClauseContext | AggrFunctionClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AggrFunctionClauseContext);
		} else {
			return this.getRuleContext(i, AggrFunctionClauseContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_aggregateClause; }
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
	public ASSIGN(): TerminalNode { return this.getToken(VtlParser.ASSIGN, 0); }
	public aggrFunction(): AggrFunctionContext {
		return this.getRuleContext(0, AggrFunctionContext);
	}
	public componentRole(): ComponentRoleContext | undefined {
		return this.tryGetRuleContext(0, ComponentRoleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_aggrFunctionClause; }
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


export class GetFiltersClauseContext extends ParserRuleContext {
	public getFilterClause(): GetFilterClauseContext[];
	public getFilterClause(i: number): GetFilterClauseContext;
	public getFilterClause(i?: number): GetFilterClauseContext | GetFilterClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GetFilterClauseContext);
		} else {
			return this.getRuleContext(i, GetFilterClauseContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_getFiltersClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGetFiltersClause) {
			listener.enterGetFiltersClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGetFiltersClause) {
			listener.exitGetFiltersClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGetFiltersClause) {
			return visitor.visitGetFiltersClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetFilterClauseContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public FILTER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FILTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_getFilterClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGetFilterClause) {
			listener.enterGetFilterClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGetFilterClause) {
			listener.exitGetFilterClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGetFilterClause) {
			return visitor.visitGetFilterClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggrClauseContext extends ParserRuleContext {
	public AGGREGATE(): TerminalNode { return this.getToken(VtlParser.AGGREGATE, 0); }
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
	public get ruleIndex(): number { return VtlParser.RULE_aggrClause; }
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
	public FILTER(): TerminalNode { return this.getToken(VtlParser.FILTER, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_filterClause; }
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


export class RenameClauseContext extends ParserRuleContext {
	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
		}
	}
	public TO(): TerminalNode[];
	public TO(i: number): TerminalNode;
	public TO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.TO);
		} else {
			return this.getToken(VtlParser.TO, i);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_renameClause; }
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


export class AggrFunctionContext extends ParserRuleContext {
	public SUM(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SUM, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public AVG(): TerminalNode | undefined { return this.tryGetToken(VtlParser.AVG, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COUNT, 0); }
	public MEDIAN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MEDIAN, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MAX, 0); }
	public RANK(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RANK, 0); }
	public STDDEV_POP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STDDEV_POP, 0); }
	public STDDEV_SAMP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STDDEV_SAMP, 0); }
	public VAR_POP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VAR_POP, 0); }
	public VAR_SAMP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VAR_SAMP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_aggrFunction; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrFunction) {
			listener.enterAggrFunction(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrFunction) {
			listener.exitAggrFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrFunction) {
			return visitor.visitAggrFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalcClauseContext extends ParserRuleContext {
	public CALC(): TerminalNode { return this.getToken(VtlParser.CALC, 0); }
	public calcClauseItem(): CalcClauseItemContext[];
	public calcClauseItem(i: number): CalcClauseItemContext;
	public calcClauseItem(i?: number): CalcClauseItemContext | CalcClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CalcClauseItemContext);
		} else {
			return this.getRuleContext(i, CalcClauseItemContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_calcClause; }
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


export class CalcClauseItemContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(VtlParser.ASSIGN, 0); }
	public calcExpr(): CalcExprContext {
		return this.getRuleContext(0, CalcExprContext);
	}
	public componentRole(): ComponentRoleContext | undefined {
		return this.tryGetRuleContext(0, ComponentRoleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_calcClauseItem; }
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


export class CalcExprContext extends ParserRuleContext {
	public aggrFunction(): AggrFunctionContext | undefined {
		return this.tryGetRuleContext(0, AggrFunctionContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_calcExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCalcExpr) {
			listener.enterCalcExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCalcExpr) {
			listener.exitCalcExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCalcExpr) {
			return visitor.visitCalcExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropClauseContext extends ParserRuleContext {
	public DROP(): TerminalNode { return this.getToken(VtlParser.DROP, 0); }
	public dropClauseItem(): DropClauseItemContext[];
	public dropClauseItem(i: number): DropClauseItemContext;
	public dropClauseItem(i?: number): DropClauseItemContext | DropClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DropClauseItemContext);
		} else {
			return this.getRuleContext(i, DropClauseItemContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_dropClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDropClause) {
			listener.enterDropClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDropClause) {
			listener.exitDropClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDropClause) {
			return visitor.visitDropClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropClauseItemContext extends ParserRuleContext {
	public componentID(): ComponentIDContext | undefined {
		return this.tryGetRuleContext(0, ComponentIDContext);
	}
	public datasetID(): DatasetIDContext | undefined {
		return this.tryGetRuleContext(0, DatasetIDContext);
	}
	public MEMBERSHIP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MEMBERSHIP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_dropClauseItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDropClauseItem) {
			listener.enterDropClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDropClauseItem) {
			listener.exitDropClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDropClauseItem) {
			return visitor.visitDropClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeepClauseContext extends ParserRuleContext {
	public KEEP(): TerminalNode { return this.getToken(VtlParser.KEEP, 0); }
	public keepClauseItem(): KeepClauseItemContext[];
	public keepClauseItem(i: number): KeepClauseItemContext;
	public keepClauseItem(i?: number): KeepClauseItemContext | KeepClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeepClauseItemContext);
		} else {
			return this.getRuleContext(i, KeepClauseItemContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_keepClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterKeepClause) {
			listener.enterKeepClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitKeepClause) {
			listener.exitKeepClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitKeepClause) {
			return visitor.visitKeepClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeepClauseItemContext extends ParserRuleContext {
	public componentID(): ComponentIDContext | undefined {
		return this.tryGetRuleContext(0, ComponentIDContext);
	}
	public datasetID(): DatasetIDContext | undefined {
		return this.tryGetRuleContext(0, DatasetIDContext);
	}
	public MEMBERSHIP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MEMBERSHIP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_keepClauseItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterKeepClauseItem) {
			listener.enterKeepClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitKeepClauseItem) {
			listener.exitKeepClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitKeepClauseItem) {
			return visitor.visitKeepClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnpivotExprContext extends ParserRuleContext {
	public UNPIVOT(): TerminalNode { return this.getToken(VtlParser.UNPIVOT, 0); }
	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode { return this.getToken(VtlParser.CARTESIAN_PER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_unpivotExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnpivotExpr) {
			listener.enterUnpivotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnpivotExpr) {
			listener.exitUnpivotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnpivotExpr) {
			return visitor.visitUnpivotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PivotExprContext extends ParserRuleContext {
	public PIVOT(): TerminalNode { return this.getToken(VtlParser.PIVOT, 0); }
	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode { return this.getToken(VtlParser.CARTESIAN_PER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_pivotExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPivotExpr) {
			listener.enterPivotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPivotExpr) {
			listener.exitPivotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPivotExpr) {
			return visitor.visitPivotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubspaceExprContext extends ParserRuleContext {
	public SUBSPACE(): TerminalNode { return this.getToken(VtlParser.SUBSPACE, 0); }
	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
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
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_subspaceExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSubspaceExpr) {
			listener.enterSubspaceExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSubspaceExpr) {
			listener.exitSubspaceExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSubspaceExpr) {
			return visitor.visitSubspaceExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InBetweenClauseContext extends ParserRuleContext {
	public IN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IN, 0); }
	public setExpr(): SetExprContext | undefined {
		return this.tryGetRuleContext(0, SetExprContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IDENTIFIER, 0); }
	public NOT_IN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NOT_IN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_inBetweenClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInBetweenClause) {
			listener.enterInBetweenClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInBetweenClause) {
			listener.exitInBetweenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInBetweenClause) {
			return visitor.visitInBetweenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetExprContext extends ParserRuleContext {
	public UNION(): TerminalNode | undefined { return this.tryGetToken(VtlParser.UNION, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	public SYMDIFF(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SYMDIFF, 0); }
	public SETDIFF(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SETDIFF, 0); }
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INTERSECT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_setExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSetExpr) {
			listener.enterSetExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSetExpr) {
			listener.exitSetExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSetExpr) {
			return visitor.visitSetExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptExprContext extends ParserRuleContext {
	public persistentDatasetID(): PersistentDatasetIDContext {
		return this.getRuleContext(0, PersistentDatasetIDContext);
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
	public CARTESIAN_PER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CARTESIAN_PER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_subscriptExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSubscriptExpr) {
			listener.enterSubscriptExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSubscriptExpr) {
			listener.exitSubscriptExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSubscriptExpr) {
			return visitor.visitSubscriptExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggrInvocationContext extends ParserRuleContext {
	public aggrFunctionName(): AggrFunctionNameContext {
		return this.getRuleContext(0, AggrFunctionNameContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	public MEMBERSHIP(): TerminalNode[];
	public MEMBERSHIP(i: number): TerminalNode;
	public MEMBERSHIP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MEMBERSHIP);
		} else {
			return this.getToken(VtlParser.MEMBERSHIP, i);
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
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
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
	public get ruleIndex(): number { return VtlParser.RULE_aggrInvocation; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrInvocation) {
			listener.enterAggrInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrInvocation) {
			listener.exitAggrInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrInvocation) {
			return visitor.visitAggrInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggrInvocationCompExprContext extends ParserRuleContext {
	public aggrFunctionName(): AggrFunctionNameContext {
		return this.getRuleContext(0, AggrFunctionNameContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	public MEMBERSHIP(): TerminalNode[];
	public MEMBERSHIP(i: number): TerminalNode;
	public MEMBERSHIP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MEMBERSHIP);
		} else {
			return this.getToken(VtlParser.MEMBERSHIP, i);
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
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
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
	public get ruleIndex(): number { return VtlParser.RULE_aggrInvocationCompExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrInvocationCompExpr) {
			listener.enterAggrInvocationCompExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrInvocationCompExpr) {
			listener.exitAggrInvocationCompExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrInvocationCompExpr) {
			return visitor.visitAggrInvocationCompExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggrFunctionNameContext extends ParserRuleContext {
	public SUM(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SUM, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(VtlParser.AVG, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COUNT, 0); }
	public MEDIAN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MEDIAN, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MAX, 0); }
	public STDDEV_POP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STDDEV_POP, 0); }
	public STDDEV_SAMP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STDDEV_SAMP, 0); }
	public VAR_POP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VAR_POP, 0); }
	public VAR_SAMP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VAR_SAMP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_aggrFunctionName; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrFunctionName) {
			listener.enterAggrFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrFunctionName) {
			listener.exitAggrFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrFunctionName) {
			return visitor.visitAggrFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingClauseContext extends ParserRuleContext {
	public groupKeyword(): GroupKeywordContext {
		return this.getRuleContext(0, GroupKeywordContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_groupingClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGroupingClause) {
			listener.enterGroupingClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGroupingClause) {
			listener.exitGroupingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGroupingClause) {
			return visitor.visitGroupingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HavingClauseContext extends ParserRuleContext {
	public HAVING(): TerminalNode { return this.getToken(VtlParser.HAVING, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public aggrFunction(): AggrFunctionContext | undefined {
		return this.tryGetRuleContext(0, AggrFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_havingClause; }
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


export class ReturnAllContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(VtlParser.RETURN, 0); }
	public ALL(): TerminalNode { return this.getToken(VtlParser.ALL, 0); }
	public DATA(): TerminalNode { return this.getToken(VtlParser.DATA, 0); }
	public POINTS(): TerminalNode { return this.getToken(VtlParser.POINTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_returnAll; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterReturnAll) {
			listener.enterReturnAll(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitReturnAll) {
			listener.exitReturnAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitReturnAll) {
			return visitor.visitReturnAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentRoleContext extends ParserRuleContext {
	public MEASURE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MEASURE, 0); }
	public COMPONENT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COMPONENT, 0); }
	public DIMENSION(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DIMENSION, 0); }
	public ATTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ATTRIBUTE, 0); }
	public viralAttribute(): ViralAttributeContext | undefined {
		return this.tryGetRuleContext(0, ViralAttributeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_componentRole; }
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
	public VIRAL(): TerminalNode { return this.getToken(VtlParser.VIRAL, 0); }
	public ATTRIBUTE(): TerminalNode { return this.getToken(VtlParser.ATTRIBUTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_viralAttribute; }
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


export class LogBaseContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_logBase; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLogBase) {
			listener.enterLogBase(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLogBase) {
			listener.exitLogBase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLogBase) {
			return visitor.visitLogBase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExponentContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INTEGER_CONSTANT, 0); }
	public FLOAT_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FLOAT_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_exponent; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterExponent) {
			listener.enterExponent(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitExponent) {
			listener.exitExponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitExponent) {
			return visitor.visitExponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PersistentDatasetIDContext extends ParserRuleContext {
	public STRING_CONSTANT(): TerminalNode { return this.getToken(VtlParser.STRING_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_persistentDatasetID; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPersistentDatasetID) {
			listener.enterPersistentDatasetID(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPersistentDatasetID) {
			listener.exitPersistentDatasetID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPersistentDatasetID) {
			return visitor.visitPersistentDatasetID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatasetIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_datasetID; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDatasetID) {
			listener.enterDatasetID(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDatasetID) {
			listener.exitDatasetID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDatasetID) {
			return visitor.visitDatasetID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesetIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_rulesetID; }
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


export class VarIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_varID; }
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


export class ComponentIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_componentID; }
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


export class OperatorIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_operatorID; }
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
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_routineName; }
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


export class JoinKeywordContext extends ParserRuleContext {
	public INNER_JOIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INNER_JOIN, 0); }
	public LEFT_JOIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LEFT_JOIN, 0); }
	public FULL_JOIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FULL_JOIN, 0); }
	public CROSS_JOIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CROSS_JOIN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinKeyword; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinKeyword) {
			listener.enterJoinKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinKeyword) {
			listener.exitJoinKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinKeyword) {
			return visitor.visitJoinKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupKeywordContext extends ParserRuleContext {
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GROUP, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(VtlParser.BY, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.EXCEPT, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_groupKeyword; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGroupKeyword) {
			listener.enterGroupKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGroupKeyword) {
			listener.exitGroupKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGroupKeyword) {
			return visitor.visitGroupKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INTEGER_CONSTANT, 0); }
	public FLOAT_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FLOAT_CONSTANT, 0); }
	public BOOLEAN_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.BOOLEAN_CONSTANT, 0); }
	public STRING_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STRING_CONSTANT, 0); }
	public NULL_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NULL_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_constant; }
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


export class ComponentType2Context extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STRING, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INTEGER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FLOAT, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.BOOLEAN, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_componentType2; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComponentType2) {
			listener.enterComponentType2(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComponentType2) {
			listener.exitComponentType2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComponentType2) {
			return visitor.visitComponentType2(this);
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
	public setName(): SetNameContext | undefined {
		return this.tryGetRuleContext(0, SetNameContext);
	}
	public scalarTypeConstraint(): ScalarTypeConstraintContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeConstraintContext);
	}
	public NULL_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NULL_CONSTANT, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_scalarType; }
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


export class BasicScalarTypeContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STRING, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INTEGER, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NUMBER, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.BOOLEAN, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATE, 0); }
	public TIME_PERIOD(): TerminalNode | undefined { return this.tryGetToken(VtlParser.TIME_PERIOD, 0); }
	public DURATION(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DURATION, 0); }
	public SCALAR(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SCALAR, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(VtlParser.TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_basicScalarType; }
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


export class ValueDomainNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_valueDomainName; }
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


export class SetNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_setName; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSetName) {
			listener.enterSetName(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSetName) {
			listener.exitSetName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSetName) {
			return visitor.visitSetName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScalarTypeConstraintContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
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
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_scalarTypeConstraint; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterScalarTypeConstraint) {
			listener.enterScalarTypeConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitScalarTypeConstraint) {
			listener.exitScalarTypeConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitScalarTypeConstraint) {
			return visitor.visitScalarTypeConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}
	public componentType(): ComponentTypeContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeContext);
	}
	public datasetType(): DatasetTypeContext | undefined {
		return this.tryGetRuleContext(0, DatasetTypeContext);
	}
	public scalarSetType(): ScalarSetTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarSetTypeContext);
	}
	public operatorType(): OperatorTypeContext | undefined {
		return this.tryGetRuleContext(0, OperatorTypeContext);
	}
	public rulesetType(): RulesetTypeContext | undefined {
		return this.tryGetRuleContext(0, RulesetTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_dataType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDataType) {
			listener.enterDataType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDataType) {
			listener.exitDataType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDataType) {
			return visitor.visitDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentTypeContext extends ParserRuleContext {
	public componentRole(): ComponentRoleContext {
		return this.getRuleContext(0, ComponentRoleContext);
	}
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_componentType; }
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
	public DATASET(): TerminalNode { return this.getToken(VtlParser.DATASET, 0); }
	public compConstraint(): CompConstraintContext[];
	public compConstraint(i: number): CompConstraintContext;
	public compConstraint(i?: number): CompConstraintContext | CompConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CompConstraintContext);
		} else {
			return this.getRuleContext(i, CompConstraintContext);
		}
	}
	public CARTESIAN_PER(): TerminalNode[];
	public CARTESIAN_PER(i: number): TerminalNode;
	public CARTESIAN_PER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.CARTESIAN_PER);
		} else {
			return this.getToken(VtlParser.CARTESIAN_PER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_datasetType; }
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
	public get ruleIndex(): number { return VtlParser.RULE_compConstraint; }
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
	public OPTIONAL(): TerminalNode { return this.getToken(VtlParser.OPTIONAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_multModifier; }
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


export class RulesetTypeContext extends ParserRuleContext {
	public RULESET(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RULESET, 0); }
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
	public get ruleIndex(): number { return VtlParser.RULE_rulesetType; }
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


export class DpRulesetContext extends ParserRuleContext {
	public DATAPOINT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATAPOINT, 0); }
	public DATAPOINT_ON_VD(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATAPOINT_ON_VD, 0); }
	public prodValueDomains(): ProdValueDomainsContext | undefined {
		return this.tryGetRuleContext(0, ProdValueDomainsContext);
	}
	public DATAPOINT_ON_VAR(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATAPOINT_ON_VAR, 0); }
	public prodVariables(): ProdVariablesContext | undefined {
		return this.tryGetRuleContext(0, ProdVariablesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_dpRuleset; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDpRuleset) {
			listener.enterDpRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDpRuleset) {
			listener.exitDpRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDpRuleset) {
			return visitor.visitDpRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HrRulesetContext extends ParserRuleContext {
	public HIERARCHICAL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.HIERARCHICAL, 0); }
	public HIERARCHICAL_ON_VD(): TerminalNode | undefined { return this.tryGetToken(VtlParser.HIERARCHICAL_ON_VD, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IDENTIFIER, 0); }
	public prodValueDomains(): ProdValueDomainsContext | undefined {
		return this.tryGetRuleContext(0, ProdValueDomainsContext);
	}
	public HIERARCHICAL_ON_VAR(): TerminalNode | undefined { return this.tryGetToken(VtlParser.HIERARCHICAL_ON_VAR, 0); }
	public varID(): VarIDContext | undefined {
		return this.tryGetRuleContext(0, VarIDContext);
	}
	public prodVariables(): ProdVariablesContext | undefined {
		return this.tryGetRuleContext(0, ProdVariablesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_hrRuleset; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHrRuleset) {
			listener.enterHrRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHrRuleset) {
			listener.exitHrRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHrRuleset) {
			return visitor.visitHrRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProdValueDomainsContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_prodValueDomains; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterProdValueDomains) {
			listener.enterProdValueDomains(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitProdValueDomains) {
			listener.exitProdValueDomains(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitProdValueDomains) {
			return visitor.visitProdValueDomains(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProdVariablesContext extends ParserRuleContext {
	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_prodVariables; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterProdVariables) {
			listener.enterProdVariables(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitProdVariables) {
			listener.exitProdVariables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitProdVariables) {
			return visitor.visitProdVariables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorTypeContext extends ParserRuleContext {
	public inputParameterType(): InputParameterTypeContext[];
	public inputParameterType(i: number): InputParameterTypeContext;
	public inputParameterType(i?: number): InputParameterTypeContext | InputParameterTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputParameterTypeContext);
		} else {
			return this.getRuleContext(i, InputParameterTypeContext);
		}
	}
	public outputParameterType(): OutputParameterTypeContext {
		return this.getRuleContext(0, OutputParameterTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_operatorType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOperatorType) {
			listener.enterOperatorType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOperatorType) {
			listener.exitOperatorType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOperatorType) {
			return visitor.visitOperatorType(this);
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
	public componentType(): ComponentTypeContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_inputParameterType; }
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


export class OutputParameterTypeContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return VtlParser.RULE_outputParameterType; }
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


export class ScalarSetTypeContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(VtlParser.SET, 0); }
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_scalarSetType; }
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


export class RetainTypeContext extends ParserRuleContext {
	public BOOLEAN_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.BOOLEAN_CONSTANT, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_retainType; }
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


export class DefineDatapointRulesetContext extends ParserRuleContext {
	public DEFINE(): TerminalNode { return this.getToken(VtlParser.DEFINE, 0); }
	public DATAPOINT(): TerminalNode { return this.getToken(VtlParser.DATAPOINT, 0); }
	public RULESET(): TerminalNode { return this.getToken(VtlParser.RULESET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_defineDatapointRuleset; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefineDatapointRuleset) {
			listener.enterDefineDatapointRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefineDatapointRuleset) {
			listener.exitDefineDatapointRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefineDatapointRuleset) {
			return visitor.visitDefineDatapointRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefineHierarchicalRulesetContext extends ParserRuleContext {
	public DEFINE(): TerminalNode { return this.getToken(VtlParser.DEFINE, 0); }
	public HIERARCHICAL(): TerminalNode { return this.getToken(VtlParser.HIERARCHICAL, 0); }
	public RULESET(): TerminalNode { return this.getToken(VtlParser.RULESET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_defineHierarchicalRuleset; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefineHierarchicalRuleset) {
			listener.enterDefineHierarchicalRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefineHierarchicalRuleset) {
			listener.exitDefineHierarchicalRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefineHierarchicalRuleset) {
			return visitor.visitDefineHierarchicalRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndDatapointRulesetContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(VtlParser.END, 0); }
	public DATAPOINT(): TerminalNode { return this.getToken(VtlParser.DATAPOINT, 0); }
	public RULESET(): TerminalNode { return this.getToken(VtlParser.RULESET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_endDatapointRuleset; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterEndDatapointRuleset) {
			listener.enterEndDatapointRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitEndDatapointRuleset) {
			listener.exitEndDatapointRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitEndDatapointRuleset) {
			return visitor.visitEndDatapointRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndHierarchicalRulesetContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(VtlParser.END, 0); }
	public HIERARCHICAL(): TerminalNode { return this.getToken(VtlParser.HIERARCHICAL, 0); }
	public RULESET(): TerminalNode { return this.getToken(VtlParser.RULESET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_endHierarchicalRuleset; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterEndHierarchicalRuleset) {
			listener.enterEndHierarchicalRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitEndHierarchicalRuleset) {
			listener.exitEndHierarchicalRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitEndHierarchicalRuleset) {
			return visitor.visitEndHierarchicalRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefineDataStructureContext extends ParserRuleContext {
	public DEFINE(): TerminalNode { return this.getToken(VtlParser.DEFINE, 0); }
	public DATA(): TerminalNode { return this.getToken(VtlParser.DATA, 0); }
	public STRUCTURE(): TerminalNode { return this.getToken(VtlParser.STRUCTURE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_defineDataStructure; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefineDataStructure) {
			listener.enterDefineDataStructure(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefineDataStructure) {
			listener.exitDefineDataStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefineDataStructure) {
			return visitor.visitDefineDataStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


