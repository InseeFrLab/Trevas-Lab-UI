// Generated from src/grammar/Vtl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExprValidationExprContext } from "./VtlParser";
import { DefinitionExpressionsContext } from "./VtlParser";
import { StandaloneAggregateFunctionContext } from "./VtlParser";
import { ComponentExpressionwithAggrClauseContext } from "./VtlParser";
import { StandaloneAnalyticFunctionContext } from "./VtlParser";
import { SimpleaggregateFunctionsContext } from "./VtlParser";
import { TimeexpressionsContext } from "./VtlParser";
import { SetExpressionsContext } from "./VtlParser";
import { CallFunctionExpressionContext } from "./VtlParser";
import { JoinExpressionContext } from "./VtlParser";
import { ParenthesisExprRefContext } from "./VtlParser";
import { VarIdRefContext } from "./VtlParser";
import { ConstantRefContext } from "./VtlParser";
import { RoundAtomContext } from "./VtlParser";
import { CeilAtomContext } from "./VtlParser";
import { FloorAtomContext } from "./VtlParser";
import { MinAtomContext } from "./VtlParser";
import { ExpAtomContext } from "./VtlParser";
import { LnAtomContext } from "./VtlParser";
import { LogAtomContext } from "./VtlParser";
import { PowerAtomContext } from "./VtlParser";
import { SqrtAtomContext } from "./VtlParser";
import { LenAtomContext } from "./VtlParser";
import { BetweenAtomContext } from "./VtlParser";
import { TrimAtomContext } from "./VtlParser";
import { LtrimAtomContext } from "./VtlParser";
import { RtrimAtomContext } from "./VtlParser";
import { UcaseAtomContext } from "./VtlParser";
import { LcaseAtomContext } from "./VtlParser";
import { SubstrAtomContext } from "./VtlParser";
import { InstrAtomContext } from "./VtlParser";
import { ReplaceAtomContext } from "./VtlParser";
import { CharsetMatchAtomContext } from "./VtlParser";
import { IsNullAtomContext } from "./VtlParser";
import { NvlAtomContext } from "./VtlParser";
import { ModAtomContext } from "./VtlParser";
import { RefAtomContext } from "./VtlParser";
import { EvalExprAtomContext } from "./VtlParser";
import { CastExprAtomContext } from "./VtlParser";
import { HierarchyExprAtomContext } from "./VtlParser";
import { FlowToStockAtomContext } from "./VtlParser";
import { StockToFlowAtomContext } from "./VtlParser";
import { ValidateDPrulesetContext } from "./VtlParser";
import { ValidateHRrulesetContext } from "./VtlParser";
import { ValidationSimpleContext } from "./VtlParser";
import { StartContext } from "./VtlParser";
import { StatementContext } from "./VtlParser";
import { PersistentAssignmentContext } from "./VtlParser";
import { OptionalExprContext } from "./VtlParser";
import { ExprContext } from "./VtlParser";
import { ExprComplexContext } from "./VtlParser";
import { TimeExprContext } from "./VtlParser";
import { DefHierarchicalContext } from "./VtlParser";
import { RuleClauseHierarchicalContext } from "./VtlParser";
import { RuleItemHierarchicalContext } from "./VtlParser";
import { HierRuleSignatureContext } from "./VtlParser";
import { ValueDomainSignatureContext } from "./VtlParser";
import { CodeItemRelationContext } from "./VtlParser";
import { CodeItemRelationClauseContext } from "./VtlParser";
import { CodeItemRefContext } from "./VtlParser";
import { DefDatapointContext } from "./VtlParser";
import { RuleClauseDatapointContext } from "./VtlParser";
import { RuleItemDatapointContext } from "./VtlParser";
import { RulesetSignatureContext } from "./VtlParser";
import { VarSignatureContext } from "./VtlParser";
import { DefExprContext } from "./VtlParser";
import { DefOperatorContext } from "./VtlParser";
import { ParameterItemContext } from "./VtlParser";
import { CallFunctionContext } from "./VtlParser";
import { ExprAtomContext } from "./VtlParser";
import { RefContext } from "./VtlParser";
import { IdentifierListContext } from "./VtlParser";
import { ListsContext } from "./VtlParser";
import { EvalExprContext } from "./VtlParser";
import { CastExprContext } from "./VtlParser";
import { PeriodExprContext } from "./VtlParser";
import { TimeShiftExprContext } from "./VtlParser";
import { TimeSeriesExprContext } from "./VtlParser";
import { TimeAggExprContext } from "./VtlParser";
import { ValidationExprContext } from "./VtlParser";
import { ValidationDatapointContext } from "./VtlParser";
import { ValidationHierarchicalContext } from "./VtlParser";
import { ErCodeContext } from "./VtlParser";
import { ErLevelContext } from "./VtlParser";
import { HierarchyExprContext } from "./VtlParser";
import { DatasetClauseContext } from "./VtlParser";
import { AnFunctionClauseContext } from "./VtlParser";
import { PartitionByClauseContext } from "./VtlParser";
import { OrderByClauseContext } from "./VtlParser";
import { WindowingClauseContext } from "./VtlParser";
import { LimitClauseItemContext } from "./VtlParser";
import { JoinExprContext } from "./VtlParser";
import { JoinClauseContext } from "./VtlParser";
import { JoinBodyContext } from "./VtlParser";
import { JoinCalcClauseContext } from "./VtlParser";
import { JoinCalcClauseItemContext } from "./VtlParser";
import { JoinCalcExprContext } from "./VtlParser";
import { JoinAggClauseContext } from "./VtlParser";
import { JoinAggClauseItemContext } from "./VtlParser";
import { JoinAggExprContext } from "./VtlParser";
import { JoinKeepClauseContext } from "./VtlParser";
import { JoinDropClauseContext } from "./VtlParser";
import { JoinFilterClauseContext } from "./VtlParser";
import { JoinRenameClauseContext } from "./VtlParser";
import { JoinApplyClauseContext } from "./VtlParser";
import { AnFunctionContext } from "./VtlParser";
import { AggregateClauseContext } from "./VtlParser";
import { AggrFunctionClauseContext } from "./VtlParser";
import { GetFiltersClauseContext } from "./VtlParser";
import { GetFilterClauseContext } from "./VtlParser";
import { AggrClauseContext } from "./VtlParser";
import { FilterClauseContext } from "./VtlParser";
import { RenameClauseContext } from "./VtlParser";
import { AggrFunctionContext } from "./VtlParser";
import { CalcClauseContext } from "./VtlParser";
import { CalcClauseItemContext } from "./VtlParser";
import { CalcExprContext } from "./VtlParser";
import { DropClauseContext } from "./VtlParser";
import { DropClauseItemContext } from "./VtlParser";
import { KeepClauseContext } from "./VtlParser";
import { KeepClauseItemContext } from "./VtlParser";
import { UnpivotExprContext } from "./VtlParser";
import { PivotExprContext } from "./VtlParser";
import { SubspaceExprContext } from "./VtlParser";
import { InBetweenClauseContext } from "./VtlParser";
import { SetExprContext } from "./VtlParser";
import { SubscriptExprContext } from "./VtlParser";
import { AggrInvocationContext } from "./VtlParser";
import { AggrInvocationCompExprContext } from "./VtlParser";
import { AggrFunctionNameContext } from "./VtlParser";
import { GroupingClauseContext } from "./VtlParser";
import { HavingClauseContext } from "./VtlParser";
import { ReturnAllContext } from "./VtlParser";
import { ComponentRoleContext } from "./VtlParser";
import { ViralAttributeContext } from "./VtlParser";
import { LogBaseContext } from "./VtlParser";
import { ExponentContext } from "./VtlParser";
import { PersistentDatasetIDContext } from "./VtlParser";
import { DatasetIDContext } from "./VtlParser";
import { RulesetIDContext } from "./VtlParser";
import { VarIDContext } from "./VtlParser";
import { ComponentIDContext } from "./VtlParser";
import { OperatorIDContext } from "./VtlParser";
import { RoutineNameContext } from "./VtlParser";
import { JoinKeywordContext } from "./VtlParser";
import { GroupKeywordContext } from "./VtlParser";
import { ConstantContext } from "./VtlParser";
import { ComponentType2Context } from "./VtlParser";
import { ScalarTypeContext } from "./VtlParser";
import { BasicScalarTypeContext } from "./VtlParser";
import { ValueDomainNameContext } from "./VtlParser";
import { SetNameContext } from "./VtlParser";
import { ScalarTypeConstraintContext } from "./VtlParser";
import { DataTypeContext } from "./VtlParser";
import { ComponentTypeContext } from "./VtlParser";
import { DatasetTypeContext } from "./VtlParser";
import { CompConstraintContext } from "./VtlParser";
import { MultModifierContext } from "./VtlParser";
import { RulesetTypeContext } from "./VtlParser";
import { DpRulesetContext } from "./VtlParser";
import { HrRulesetContext } from "./VtlParser";
import { ProdValueDomainsContext } from "./VtlParser";
import { ProdVariablesContext } from "./VtlParser";
import { OperatorTypeContext } from "./VtlParser";
import { InputParameterTypeContext } from "./VtlParser";
import { OutputParameterTypeContext } from "./VtlParser";
import { ScalarSetTypeContext } from "./VtlParser";
import { RetainTypeContext } from "./VtlParser";
import { DefineDatapointRulesetContext } from "./VtlParser";
import { DefineHierarchicalRulesetContext } from "./VtlParser";
import { EndDatapointRulesetContext } from "./VtlParser";
import { EndHierarchicalRulesetContext } from "./VtlParser";
import { DefineDataStructureContext } from "./VtlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `VtlParser`.
 */
export interface VtlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `exprValidationExpr`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterExprValidationExpr?: (ctx: ExprValidationExprContext) => void;
	/**
	 * Exit a parse tree produced by the `exprValidationExpr`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitExprValidationExpr?: (ctx: ExprValidationExprContext) => void;

	/**
	 * Enter a parse tree produced by the `definitionExpressions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterDefinitionExpressions?: (ctx: DefinitionExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by the `definitionExpressions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitDefinitionExpressions?: (ctx: DefinitionExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by the `standaloneAggregateFunction`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterStandaloneAggregateFunction?: (ctx: StandaloneAggregateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `standaloneAggregateFunction`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitStandaloneAggregateFunction?: (ctx: StandaloneAggregateFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `componentExpressionwithAggrClause`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterComponentExpressionwithAggrClause?: (ctx: ComponentExpressionwithAggrClauseContext) => void;
	/**
	 * Exit a parse tree produced by the `componentExpressionwithAggrClause`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitComponentExpressionwithAggrClause?: (ctx: ComponentExpressionwithAggrClauseContext) => void;

	/**
	 * Enter a parse tree produced by the `standaloneAnalyticFunction`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterStandaloneAnalyticFunction?: (ctx: StandaloneAnalyticFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `standaloneAnalyticFunction`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitStandaloneAnalyticFunction?: (ctx: StandaloneAnalyticFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleaggregateFunctions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterSimpleaggregateFunctions?: (ctx: SimpleaggregateFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleaggregateFunctions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitSimpleaggregateFunctions?: (ctx: SimpleaggregateFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `timeexpressions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterTimeexpressions?: (ctx: TimeexpressionsContext) => void;
	/**
	 * Exit a parse tree produced by the `timeexpressions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitTimeexpressions?: (ctx: TimeexpressionsContext) => void;

	/**
	 * Enter a parse tree produced by the `setExpressions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterSetExpressions?: (ctx: SetExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by the `setExpressions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitSetExpressions?: (ctx: SetExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by the `callFunctionExpression`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterCallFunctionExpression?: (ctx: CallFunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `callFunctionExpression`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitCallFunctionExpression?: (ctx: CallFunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `joinExpression`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterJoinExpression?: (ctx: JoinExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `joinExpression`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitJoinExpression?: (ctx: JoinExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesisExprRef`
	 * labeled alternative in `VtlParser.ref`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExprRef?: (ctx: ParenthesisExprRefContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesisExprRef`
	 * labeled alternative in `VtlParser.ref`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExprRef?: (ctx: ParenthesisExprRefContext) => void;

	/**
	 * Enter a parse tree produced by the `varIdRef`
	 * labeled alternative in `VtlParser.ref`.
	 * @param ctx the parse tree
	 */
	enterVarIdRef?: (ctx: VarIdRefContext) => void;
	/**
	 * Exit a parse tree produced by the `varIdRef`
	 * labeled alternative in `VtlParser.ref`.
	 * @param ctx the parse tree
	 */
	exitVarIdRef?: (ctx: VarIdRefContext) => void;

	/**
	 * Enter a parse tree produced by the `constantRef`
	 * labeled alternative in `VtlParser.ref`.
	 * @param ctx the parse tree
	 */
	enterConstantRef?: (ctx: ConstantRefContext) => void;
	/**
	 * Exit a parse tree produced by the `constantRef`
	 * labeled alternative in `VtlParser.ref`.
	 * @param ctx the parse tree
	 */
	exitConstantRef?: (ctx: ConstantRefContext) => void;

	/**
	 * Enter a parse tree produced by the `roundAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterRoundAtom?: (ctx: RoundAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `roundAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitRoundAtom?: (ctx: RoundAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `ceilAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterCeilAtom?: (ctx: CeilAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `ceilAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitCeilAtom?: (ctx: CeilAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `floorAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterFloorAtom?: (ctx: FloorAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `floorAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitFloorAtom?: (ctx: FloorAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `minAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterMinAtom?: (ctx: MinAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `minAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitMinAtom?: (ctx: MinAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `expAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterExpAtom?: (ctx: ExpAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `expAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitExpAtom?: (ctx: ExpAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `lnAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterLnAtom?: (ctx: LnAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `lnAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitLnAtom?: (ctx: LnAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `logAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterLogAtom?: (ctx: LogAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `logAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitLogAtom?: (ctx: LogAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `powerAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterPowerAtom?: (ctx: PowerAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `powerAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitPowerAtom?: (ctx: PowerAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `sqrtAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterSqrtAtom?: (ctx: SqrtAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `sqrtAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitSqrtAtom?: (ctx: SqrtAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `lenAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterLenAtom?: (ctx: LenAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `lenAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitLenAtom?: (ctx: LenAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `betweenAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterBetweenAtom?: (ctx: BetweenAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `betweenAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitBetweenAtom?: (ctx: BetweenAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `trimAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterTrimAtom?: (ctx: TrimAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `trimAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitTrimAtom?: (ctx: TrimAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `ltrimAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterLtrimAtom?: (ctx: LtrimAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `ltrimAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitLtrimAtom?: (ctx: LtrimAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `rtrimAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterRtrimAtom?: (ctx: RtrimAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `rtrimAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitRtrimAtom?: (ctx: RtrimAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `ucaseAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterUcaseAtom?: (ctx: UcaseAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `ucaseAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitUcaseAtom?: (ctx: UcaseAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `lcaseAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterLcaseAtom?: (ctx: LcaseAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `lcaseAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitLcaseAtom?: (ctx: LcaseAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `substrAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterSubstrAtom?: (ctx: SubstrAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `substrAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitSubstrAtom?: (ctx: SubstrAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `instrAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterInstrAtom?: (ctx: InstrAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `instrAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitInstrAtom?: (ctx: InstrAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `replaceAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterReplaceAtom?: (ctx: ReplaceAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `replaceAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitReplaceAtom?: (ctx: ReplaceAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `charsetMatchAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterCharsetMatchAtom?: (ctx: CharsetMatchAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `charsetMatchAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitCharsetMatchAtom?: (ctx: CharsetMatchAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `isNullAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterIsNullAtom?: (ctx: IsNullAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `isNullAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitIsNullAtom?: (ctx: IsNullAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `nvlAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterNvlAtom?: (ctx: NvlAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `nvlAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitNvlAtom?: (ctx: NvlAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `modAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterModAtom?: (ctx: ModAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `modAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitModAtom?: (ctx: ModAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `refAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterRefAtom?: (ctx: RefAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `refAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitRefAtom?: (ctx: RefAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `evalExprAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterEvalExprAtom?: (ctx: EvalExprAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `evalExprAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitEvalExprAtom?: (ctx: EvalExprAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `castExprAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterCastExprAtom?: (ctx: CastExprAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `castExprAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitCastExprAtom?: (ctx: CastExprAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `hierarchyExprAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterHierarchyExprAtom?: (ctx: HierarchyExprAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `hierarchyExprAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitHierarchyExprAtom?: (ctx: HierarchyExprAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `flowToStockAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterFlowToStockAtom?: (ctx: FlowToStockAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `flowToStockAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitFlowToStockAtom?: (ctx: FlowToStockAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `stockToFlowAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterStockToFlowAtom?: (ctx: StockToFlowAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `stockToFlowAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitStockToFlowAtom?: (ctx: StockToFlowAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `validateDPruleset`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterValidateDPruleset?: (ctx: ValidateDPrulesetContext) => void;
	/**
	 * Exit a parse tree produced by the `validateDPruleset`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitValidateDPruleset?: (ctx: ValidateDPrulesetContext) => void;

	/**
	 * Enter a parse tree produced by the `validateHRruleset`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterValidateHRruleset?: (ctx: ValidateHRrulesetContext) => void;
	/**
	 * Exit a parse tree produced by the `validateHRruleset`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitValidateHRruleset?: (ctx: ValidateHRrulesetContext) => void;

	/**
	 * Enter a parse tree produced by the `validationSimple`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterValidationSimple?: (ctx: ValidationSimpleContext) => void;
	/**
	 * Exit a parse tree produced by the `validationSimple`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitValidationSimple?: (ctx: ValidationSimpleContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.persistentAssignment`.
	 * @param ctx the parse tree
	 */
	enterPersistentAssignment?: (ctx: PersistentAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.persistentAssignment`.
	 * @param ctx the parse tree
	 */
	exitPersistentAssignment?: (ctx: PersistentAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.optionalExpr`.
	 * @param ctx the parse tree
	 */
	enterOptionalExpr?: (ctx: OptionalExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.optionalExpr`.
	 * @param ctx the parse tree
	 */
	exitOptionalExpr?: (ctx: OptionalExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	enterExprComplex?: (ctx: ExprComplexContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 */
	exitExprComplex?: (ctx: ExprComplexContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.timeExpr`.
	 * @param ctx the parse tree
	 */
	enterTimeExpr?: (ctx: TimeExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.timeExpr`.
	 * @param ctx the parse tree
	 */
	exitTimeExpr?: (ctx: TimeExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.defHierarchical`.
	 * @param ctx the parse tree
	 */
	enterDefHierarchical?: (ctx: DefHierarchicalContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.defHierarchical`.
	 * @param ctx the parse tree
	 */
	exitDefHierarchical?: (ctx: DefHierarchicalContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.ruleClauseHierarchical`.
	 * @param ctx the parse tree
	 */
	enterRuleClauseHierarchical?: (ctx: RuleClauseHierarchicalContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.ruleClauseHierarchical`.
	 * @param ctx the parse tree
	 */
	exitRuleClauseHierarchical?: (ctx: RuleClauseHierarchicalContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.ruleItemHierarchical`.
	 * @param ctx the parse tree
	 */
	enterRuleItemHierarchical?: (ctx: RuleItemHierarchicalContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.ruleItemHierarchical`.
	 * @param ctx the parse tree
	 */
	exitRuleItemHierarchical?: (ctx: RuleItemHierarchicalContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.hierRuleSignature`.
	 * @param ctx the parse tree
	 */
	enterHierRuleSignature?: (ctx: HierRuleSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.hierRuleSignature`.
	 * @param ctx the parse tree
	 */
	exitHierRuleSignature?: (ctx: HierRuleSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.valueDomainSignature`.
	 * @param ctx the parse tree
	 */
	enterValueDomainSignature?: (ctx: ValueDomainSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.valueDomainSignature`.
	 * @param ctx the parse tree
	 */
	exitValueDomainSignature?: (ctx: ValueDomainSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.codeItemRelation`.
	 * @param ctx the parse tree
	 */
	enterCodeItemRelation?: (ctx: CodeItemRelationContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.codeItemRelation`.
	 * @param ctx the parse tree
	 */
	exitCodeItemRelation?: (ctx: CodeItemRelationContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.codeItemRelationClause`.
	 * @param ctx the parse tree
	 */
	enterCodeItemRelationClause?: (ctx: CodeItemRelationClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.codeItemRelationClause`.
	 * @param ctx the parse tree
	 */
	exitCodeItemRelationClause?: (ctx: CodeItemRelationClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.codeItemRef`.
	 * @param ctx the parse tree
	 */
	enterCodeItemRef?: (ctx: CodeItemRefContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.codeItemRef`.
	 * @param ctx the parse tree
	 */
	exitCodeItemRef?: (ctx: CodeItemRefContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.defDatapoint`.
	 * @param ctx the parse tree
	 */
	enterDefDatapoint?: (ctx: DefDatapointContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.defDatapoint`.
	 * @param ctx the parse tree
	 */
	exitDefDatapoint?: (ctx: DefDatapointContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.ruleClauseDatapoint`.
	 * @param ctx the parse tree
	 */
	enterRuleClauseDatapoint?: (ctx: RuleClauseDatapointContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.ruleClauseDatapoint`.
	 * @param ctx the parse tree
	 */
	exitRuleClauseDatapoint?: (ctx: RuleClauseDatapointContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.ruleItemDatapoint`.
	 * @param ctx the parse tree
	 */
	enterRuleItemDatapoint?: (ctx: RuleItemDatapointContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.ruleItemDatapoint`.
	 * @param ctx the parse tree
	 */
	exitRuleItemDatapoint?: (ctx: RuleItemDatapointContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.rulesetSignature`.
	 * @param ctx the parse tree
	 */
	enterRulesetSignature?: (ctx: RulesetSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.rulesetSignature`.
	 * @param ctx the parse tree
	 */
	exitRulesetSignature?: (ctx: RulesetSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.varSignature`.
	 * @param ctx the parse tree
	 */
	enterVarSignature?: (ctx: VarSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.varSignature`.
	 * @param ctx the parse tree
	 */
	exitVarSignature?: (ctx: VarSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.defExpr`.
	 * @param ctx the parse tree
	 */
	enterDefExpr?: (ctx: DefExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.defExpr`.
	 * @param ctx the parse tree
	 */
	exitDefExpr?: (ctx: DefExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.defOperator`.
	 * @param ctx the parse tree
	 */
	enterDefOperator?: (ctx: DefOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.defOperator`.
	 * @param ctx the parse tree
	 */
	exitDefOperator?: (ctx: DefOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.parameterItem`.
	 * @param ctx the parse tree
	 */
	enterParameterItem?: (ctx: ParameterItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.parameterItem`.
	 * @param ctx the parse tree
	 */
	exitParameterItem?: (ctx: ParameterItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.callFunction`.
	 * @param ctx the parse tree
	 */
	enterCallFunction?: (ctx: CallFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.callFunction`.
	 * @param ctx the parse tree
	 */
	exitCallFunction?: (ctx: CallFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	enterExprAtom?: (ctx: ExprAtomContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 */
	exitExprAtom?: (ctx: ExprAtomContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.ref`.
	 * @param ctx the parse tree
	 */
	enterRef?: (ctx: RefContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.ref`.
	 * @param ctx the parse tree
	 */
	exitRef?: (ctx: RefContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.lists`.
	 * @param ctx the parse tree
	 */
	enterLists?: (ctx: ListsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.lists`.
	 * @param ctx the parse tree
	 */
	exitLists?: (ctx: ListsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.evalExpr`.
	 * @param ctx the parse tree
	 */
	enterEvalExpr?: (ctx: EvalExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.evalExpr`.
	 * @param ctx the parse tree
	 */
	exitEvalExpr?: (ctx: EvalExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.castExpr`.
	 * @param ctx the parse tree
	 */
	enterCastExpr?: (ctx: CastExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.castExpr`.
	 * @param ctx the parse tree
	 */
	exitCastExpr?: (ctx: CastExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.periodExpr`.
	 * @param ctx the parse tree
	 */
	enterPeriodExpr?: (ctx: PeriodExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.periodExpr`.
	 * @param ctx the parse tree
	 */
	exitPeriodExpr?: (ctx: PeriodExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.timeShiftExpr`.
	 * @param ctx the parse tree
	 */
	enterTimeShiftExpr?: (ctx: TimeShiftExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.timeShiftExpr`.
	 * @param ctx the parse tree
	 */
	exitTimeShiftExpr?: (ctx: TimeShiftExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.timeSeriesExpr`.
	 * @param ctx the parse tree
	 */
	enterTimeSeriesExpr?: (ctx: TimeSeriesExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.timeSeriesExpr`.
	 * @param ctx the parse tree
	 */
	exitTimeSeriesExpr?: (ctx: TimeSeriesExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.timeAggExpr`.
	 * @param ctx the parse tree
	 */
	enterTimeAggExpr?: (ctx: TimeAggExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.timeAggExpr`.
	 * @param ctx the parse tree
	 */
	exitTimeAggExpr?: (ctx: TimeAggExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.validationExpr`.
	 * @param ctx the parse tree
	 */
	enterValidationExpr?: (ctx: ValidationExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.validationExpr`.
	 * @param ctx the parse tree
	 */
	exitValidationExpr?: (ctx: ValidationExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.validationDatapoint`.
	 * @param ctx the parse tree
	 */
	enterValidationDatapoint?: (ctx: ValidationDatapointContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.validationDatapoint`.
	 * @param ctx the parse tree
	 */
	exitValidationDatapoint?: (ctx: ValidationDatapointContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.validationHierarchical`.
	 * @param ctx the parse tree
	 */
	enterValidationHierarchical?: (ctx: ValidationHierarchicalContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.validationHierarchical`.
	 * @param ctx the parse tree
	 */
	exitValidationHierarchical?: (ctx: ValidationHierarchicalContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.erCode`.
	 * @param ctx the parse tree
	 */
	enterErCode?: (ctx: ErCodeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.erCode`.
	 * @param ctx the parse tree
	 */
	exitErCode?: (ctx: ErCodeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.erLevel`.
	 * @param ctx the parse tree
	 */
	enterErLevel?: (ctx: ErLevelContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.erLevel`.
	 * @param ctx the parse tree
	 */
	exitErLevel?: (ctx: ErLevelContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.hierarchyExpr`.
	 * @param ctx the parse tree
	 */
	enterHierarchyExpr?: (ctx: HierarchyExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.hierarchyExpr`.
	 * @param ctx the parse tree
	 */
	exitHierarchyExpr?: (ctx: HierarchyExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.datasetClause`.
	 * @param ctx the parse tree
	 */
	enterDatasetClause?: (ctx: DatasetClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.datasetClause`.
	 * @param ctx the parse tree
	 */
	exitDatasetClause?: (ctx: DatasetClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.anFunctionClause`.
	 * @param ctx the parse tree
	 */
	enterAnFunctionClause?: (ctx: AnFunctionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.anFunctionClause`.
	 * @param ctx the parse tree
	 */
	exitAnFunctionClause?: (ctx: AnFunctionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.partitionByClause`.
	 * @param ctx the parse tree
	 */
	enterPartitionByClause?: (ctx: PartitionByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.partitionByClause`.
	 * @param ctx the parse tree
	 */
	exitPartitionByClause?: (ctx: PartitionByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	enterOrderByClause?: (ctx: OrderByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	exitOrderByClause?: (ctx: OrderByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.windowingClause`.
	 * @param ctx the parse tree
	 */
	enterWindowingClause?: (ctx: WindowingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.windowingClause`.
	 * @param ctx the parse tree
	 */
	exitWindowingClause?: (ctx: WindowingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.limitClauseItem`.
	 * @param ctx the parse tree
	 */
	enterLimitClauseItem?: (ctx: LimitClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.limitClauseItem`.
	 * @param ctx the parse tree
	 */
	exitLimitClauseItem?: (ctx: LimitClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinExpr`.
	 * @param ctx the parse tree
	 */
	enterJoinExpr?: (ctx: JoinExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinExpr`.
	 * @param ctx the parse tree
	 */
	exitJoinExpr?: (ctx: JoinExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinClause`.
	 * @param ctx the parse tree
	 */
	enterJoinClause?: (ctx: JoinClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinClause`.
	 * @param ctx the parse tree
	 */
	exitJoinClause?: (ctx: JoinClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinBody`.
	 * @param ctx the parse tree
	 */
	enterJoinBody?: (ctx: JoinBodyContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinBody`.
	 * @param ctx the parse tree
	 */
	exitJoinBody?: (ctx: JoinBodyContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinCalcClause`.
	 * @param ctx the parse tree
	 */
	enterJoinCalcClause?: (ctx: JoinCalcClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinCalcClause`.
	 * @param ctx the parse tree
	 */
	exitJoinCalcClause?: (ctx: JoinCalcClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinCalcClauseItem`.
	 * @param ctx the parse tree
	 */
	enterJoinCalcClauseItem?: (ctx: JoinCalcClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinCalcClauseItem`.
	 * @param ctx the parse tree
	 */
	exitJoinCalcClauseItem?: (ctx: JoinCalcClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinCalcExpr`.
	 * @param ctx the parse tree
	 */
	enterJoinCalcExpr?: (ctx: JoinCalcExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinCalcExpr`.
	 * @param ctx the parse tree
	 */
	exitJoinCalcExpr?: (ctx: JoinCalcExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinAggClause`.
	 * @param ctx the parse tree
	 */
	enterJoinAggClause?: (ctx: JoinAggClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinAggClause`.
	 * @param ctx the parse tree
	 */
	exitJoinAggClause?: (ctx: JoinAggClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinAggClauseItem`.
	 * @param ctx the parse tree
	 */
	enterJoinAggClauseItem?: (ctx: JoinAggClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinAggClauseItem`.
	 * @param ctx the parse tree
	 */
	exitJoinAggClauseItem?: (ctx: JoinAggClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinAggExpr`.
	 * @param ctx the parse tree
	 */
	enterJoinAggExpr?: (ctx: JoinAggExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinAggExpr`.
	 * @param ctx the parse tree
	 */
	exitJoinAggExpr?: (ctx: JoinAggExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinKeepClause`.
	 * @param ctx the parse tree
	 */
	enterJoinKeepClause?: (ctx: JoinKeepClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinKeepClause`.
	 * @param ctx the parse tree
	 */
	exitJoinKeepClause?: (ctx: JoinKeepClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinDropClause`.
	 * @param ctx the parse tree
	 */
	enterJoinDropClause?: (ctx: JoinDropClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinDropClause`.
	 * @param ctx the parse tree
	 */
	exitJoinDropClause?: (ctx: JoinDropClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinFilterClause`.
	 * @param ctx the parse tree
	 */
	enterJoinFilterClause?: (ctx: JoinFilterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinFilterClause`.
	 * @param ctx the parse tree
	 */
	exitJoinFilterClause?: (ctx: JoinFilterClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinRenameClause`.
	 * @param ctx the parse tree
	 */
	enterJoinRenameClause?: (ctx: JoinRenameClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinRenameClause`.
	 * @param ctx the parse tree
	 */
	exitJoinRenameClause?: (ctx: JoinRenameClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinApplyClause`.
	 * @param ctx the parse tree
	 */
	enterJoinApplyClause?: (ctx: JoinApplyClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinApplyClause`.
	 * @param ctx the parse tree
	 */
	exitJoinApplyClause?: (ctx: JoinApplyClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 */
	enterAnFunction?: (ctx: AnFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 */
	exitAnFunction?: (ctx: AnFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggregateClause`.
	 * @param ctx the parse tree
	 */
	enterAggregateClause?: (ctx: AggregateClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggregateClause`.
	 * @param ctx the parse tree
	 */
	exitAggregateClause?: (ctx: AggregateClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggrFunctionClause`.
	 * @param ctx the parse tree
	 */
	enterAggrFunctionClause?: (ctx: AggrFunctionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggrFunctionClause`.
	 * @param ctx the parse tree
	 */
	exitAggrFunctionClause?: (ctx: AggrFunctionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.getFiltersClause`.
	 * @param ctx the parse tree
	 */
	enterGetFiltersClause?: (ctx: GetFiltersClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.getFiltersClause`.
	 * @param ctx the parse tree
	 */
	exitGetFiltersClause?: (ctx: GetFiltersClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.getFilterClause`.
	 * @param ctx the parse tree
	 */
	enterGetFilterClause?: (ctx: GetFilterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.getFilterClause`.
	 * @param ctx the parse tree
	 */
	exitGetFilterClause?: (ctx: GetFilterClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggrClause`.
	 * @param ctx the parse tree
	 */
	enterAggrClause?: (ctx: AggrClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggrClause`.
	 * @param ctx the parse tree
	 */
	exitAggrClause?: (ctx: AggrClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.filterClause`.
	 * @param ctx the parse tree
	 */
	enterFilterClause?: (ctx: FilterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.filterClause`.
	 * @param ctx the parse tree
	 */
	exitFilterClause?: (ctx: FilterClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.renameClause`.
	 * @param ctx the parse tree
	 */
	enterRenameClause?: (ctx: RenameClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.renameClause`.
	 * @param ctx the parse tree
	 */
	exitRenameClause?: (ctx: RenameClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggrFunction`.
	 * @param ctx the parse tree
	 */
	enterAggrFunction?: (ctx: AggrFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggrFunction`.
	 * @param ctx the parse tree
	 */
	exitAggrFunction?: (ctx: AggrFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.calcClause`.
	 * @param ctx the parse tree
	 */
	enterCalcClause?: (ctx: CalcClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.calcClause`.
	 * @param ctx the parse tree
	 */
	exitCalcClause?: (ctx: CalcClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.calcClauseItem`.
	 * @param ctx the parse tree
	 */
	enterCalcClauseItem?: (ctx: CalcClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.calcClauseItem`.
	 * @param ctx the parse tree
	 */
	exitCalcClauseItem?: (ctx: CalcClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.calcExpr`.
	 * @param ctx the parse tree
	 */
	enterCalcExpr?: (ctx: CalcExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.calcExpr`.
	 * @param ctx the parse tree
	 */
	exitCalcExpr?: (ctx: CalcExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.dropClause`.
	 * @param ctx the parse tree
	 */
	enterDropClause?: (ctx: DropClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.dropClause`.
	 * @param ctx the parse tree
	 */
	exitDropClause?: (ctx: DropClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.dropClauseItem`.
	 * @param ctx the parse tree
	 */
	enterDropClauseItem?: (ctx: DropClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.dropClauseItem`.
	 * @param ctx the parse tree
	 */
	exitDropClauseItem?: (ctx: DropClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.keepClause`.
	 * @param ctx the parse tree
	 */
	enterKeepClause?: (ctx: KeepClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.keepClause`.
	 * @param ctx the parse tree
	 */
	exitKeepClause?: (ctx: KeepClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.keepClauseItem`.
	 * @param ctx the parse tree
	 */
	enterKeepClauseItem?: (ctx: KeepClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.keepClauseItem`.
	 * @param ctx the parse tree
	 */
	exitKeepClauseItem?: (ctx: KeepClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.unpivotExpr`.
	 * @param ctx the parse tree
	 */
	enterUnpivotExpr?: (ctx: UnpivotExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.unpivotExpr`.
	 * @param ctx the parse tree
	 */
	exitUnpivotExpr?: (ctx: UnpivotExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.pivotExpr`.
	 * @param ctx the parse tree
	 */
	enterPivotExpr?: (ctx: PivotExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.pivotExpr`.
	 * @param ctx the parse tree
	 */
	exitPivotExpr?: (ctx: PivotExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.subspaceExpr`.
	 * @param ctx the parse tree
	 */
	enterSubspaceExpr?: (ctx: SubspaceExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.subspaceExpr`.
	 * @param ctx the parse tree
	 */
	exitSubspaceExpr?: (ctx: SubspaceExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.inBetweenClause`.
	 * @param ctx the parse tree
	 */
	enterInBetweenClause?: (ctx: InBetweenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.inBetweenClause`.
	 * @param ctx the parse tree
	 */
	exitInBetweenClause?: (ctx: InBetweenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.setExpr`.
	 * @param ctx the parse tree
	 */
	enterSetExpr?: (ctx: SetExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.setExpr`.
	 * @param ctx the parse tree
	 */
	exitSetExpr?: (ctx: SetExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.subscriptExpr`.
	 * @param ctx the parse tree
	 */
	enterSubscriptExpr?: (ctx: SubscriptExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.subscriptExpr`.
	 * @param ctx the parse tree
	 */
	exitSubscriptExpr?: (ctx: SubscriptExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggrInvocation`.
	 * @param ctx the parse tree
	 */
	enterAggrInvocation?: (ctx: AggrInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggrInvocation`.
	 * @param ctx the parse tree
	 */
	exitAggrInvocation?: (ctx: AggrInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggrInvocationCompExpr`.
	 * @param ctx the parse tree
	 */
	enterAggrInvocationCompExpr?: (ctx: AggrInvocationCompExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggrInvocationCompExpr`.
	 * @param ctx the parse tree
	 */
	exitAggrInvocationCompExpr?: (ctx: AggrInvocationCompExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggrFunctionName`.
	 * @param ctx the parse tree
	 */
	enterAggrFunctionName?: (ctx: AggrFunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggrFunctionName`.
	 * @param ctx the parse tree
	 */
	exitAggrFunctionName?: (ctx: AggrFunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 */
	enterGroupingClause?: (ctx: GroupingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 */
	exitGroupingClause?: (ctx: GroupingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.havingClause`.
	 * @param ctx the parse tree
	 */
	enterHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.havingClause`.
	 * @param ctx the parse tree
	 */
	exitHavingClause?: (ctx: HavingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.returnAll`.
	 * @param ctx the parse tree
	 */
	enterReturnAll?: (ctx: ReturnAllContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.returnAll`.
	 * @param ctx the parse tree
	 */
	exitReturnAll?: (ctx: ReturnAllContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.componentRole`.
	 * @param ctx the parse tree
	 */
	enterComponentRole?: (ctx: ComponentRoleContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.componentRole`.
	 * @param ctx the parse tree
	 */
	exitComponentRole?: (ctx: ComponentRoleContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.viralAttribute`.
	 * @param ctx the parse tree
	 */
	enterViralAttribute?: (ctx: ViralAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.viralAttribute`.
	 * @param ctx the parse tree
	 */
	exitViralAttribute?: (ctx: ViralAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.logBase`.
	 * @param ctx the parse tree
	 */
	enterLogBase?: (ctx: LogBaseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.logBase`.
	 * @param ctx the parse tree
	 */
	exitLogBase?: (ctx: LogBaseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.exponent`.
	 * @param ctx the parse tree
	 */
	enterExponent?: (ctx: ExponentContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.exponent`.
	 * @param ctx the parse tree
	 */
	exitExponent?: (ctx: ExponentContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.persistentDatasetID`.
	 * @param ctx the parse tree
	 */
	enterPersistentDatasetID?: (ctx: PersistentDatasetIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.persistentDatasetID`.
	 * @param ctx the parse tree
	 */
	exitPersistentDatasetID?: (ctx: PersistentDatasetIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.datasetID`.
	 * @param ctx the parse tree
	 */
	enterDatasetID?: (ctx: DatasetIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.datasetID`.
	 * @param ctx the parse tree
	 */
	exitDatasetID?: (ctx: DatasetIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.rulesetID`.
	 * @param ctx the parse tree
	 */
	enterRulesetID?: (ctx: RulesetIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.rulesetID`.
	 * @param ctx the parse tree
	 */
	exitRulesetID?: (ctx: RulesetIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.varID`.
	 * @param ctx the parse tree
	 */
	enterVarID?: (ctx: VarIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.varID`.
	 * @param ctx the parse tree
	 */
	exitVarID?: (ctx: VarIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.componentID`.
	 * @param ctx the parse tree
	 */
	enterComponentID?: (ctx: ComponentIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.componentID`.
	 * @param ctx the parse tree
	 */
	exitComponentID?: (ctx: ComponentIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.operatorID`.
	 * @param ctx the parse tree
	 */
	enterOperatorID?: (ctx: OperatorIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.operatorID`.
	 * @param ctx the parse tree
	 */
	exitOperatorID?: (ctx: OperatorIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.routineName`.
	 * @param ctx the parse tree
	 */
	enterRoutineName?: (ctx: RoutineNameContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.routineName`.
	 * @param ctx the parse tree
	 */
	exitRoutineName?: (ctx: RoutineNameContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinKeyword`.
	 * @param ctx the parse tree
	 */
	enterJoinKeyword?: (ctx: JoinKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinKeyword`.
	 * @param ctx the parse tree
	 */
	exitJoinKeyword?: (ctx: JoinKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.groupKeyword`.
	 * @param ctx the parse tree
	 */
	enterGroupKeyword?: (ctx: GroupKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.groupKeyword`.
	 * @param ctx the parse tree
	 */
	exitGroupKeyword?: (ctx: GroupKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.componentType2`.
	 * @param ctx the parse tree
	 */
	enterComponentType2?: (ctx: ComponentType2Context) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.componentType2`.
	 * @param ctx the parse tree
	 */
	exitComponentType2?: (ctx: ComponentType2Context) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.scalarType`.
	 * @param ctx the parse tree
	 */
	enterScalarType?: (ctx: ScalarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.scalarType`.
	 * @param ctx the parse tree
	 */
	exitScalarType?: (ctx: ScalarTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.basicScalarType`.
	 * @param ctx the parse tree
	 */
	enterBasicScalarType?: (ctx: BasicScalarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.basicScalarType`.
	 * @param ctx the parse tree
	 */
	exitBasicScalarType?: (ctx: BasicScalarTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.valueDomainName`.
	 * @param ctx the parse tree
	 */
	enterValueDomainName?: (ctx: ValueDomainNameContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.valueDomainName`.
	 * @param ctx the parse tree
	 */
	exitValueDomainName?: (ctx: ValueDomainNameContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.setName`.
	 * @param ctx the parse tree
	 */
	enterSetName?: (ctx: SetNameContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.setName`.
	 * @param ctx the parse tree
	 */
	exitSetName?: (ctx: SetNameContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 */
	enterScalarTypeConstraint?: (ctx: ScalarTypeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 */
	exitScalarTypeConstraint?: (ctx: ScalarTypeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.componentType`.
	 * @param ctx the parse tree
	 */
	enterComponentType?: (ctx: ComponentTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.componentType`.
	 * @param ctx the parse tree
	 */
	exitComponentType?: (ctx: ComponentTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.datasetType`.
	 * @param ctx the parse tree
	 */
	enterDatasetType?: (ctx: DatasetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.datasetType`.
	 * @param ctx the parse tree
	 */
	exitDatasetType?: (ctx: DatasetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.compConstraint`.
	 * @param ctx the parse tree
	 */
	enterCompConstraint?: (ctx: CompConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.compConstraint`.
	 * @param ctx the parse tree
	 */
	exitCompConstraint?: (ctx: CompConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.multModifier`.
	 * @param ctx the parse tree
	 */
	enterMultModifier?: (ctx: MultModifierContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.multModifier`.
	 * @param ctx the parse tree
	 */
	exitMultModifier?: (ctx: MultModifierContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.rulesetType`.
	 * @param ctx the parse tree
	 */
	enterRulesetType?: (ctx: RulesetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.rulesetType`.
	 * @param ctx the parse tree
	 */
	exitRulesetType?: (ctx: RulesetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 */
	enterDpRuleset?: (ctx: DpRulesetContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 */
	exitDpRuleset?: (ctx: DpRulesetContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 */
	enterHrRuleset?: (ctx: HrRulesetContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 */
	exitHrRuleset?: (ctx: HrRulesetContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.prodValueDomains`.
	 * @param ctx the parse tree
	 */
	enterProdValueDomains?: (ctx: ProdValueDomainsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.prodValueDomains`.
	 * @param ctx the parse tree
	 */
	exitProdValueDomains?: (ctx: ProdValueDomainsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.prodVariables`.
	 * @param ctx the parse tree
	 */
	enterProdVariables?: (ctx: ProdVariablesContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.prodVariables`.
	 * @param ctx the parse tree
	 */
	exitProdVariables?: (ctx: ProdVariablesContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.operatorType`.
	 * @param ctx the parse tree
	 */
	enterOperatorType?: (ctx: OperatorTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.operatorType`.
	 * @param ctx the parse tree
	 */
	exitOperatorType?: (ctx: OperatorTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.inputParameterType`.
	 * @param ctx the parse tree
	 */
	enterInputParameterType?: (ctx: InputParameterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.inputParameterType`.
	 * @param ctx the parse tree
	 */
	exitInputParameterType?: (ctx: InputParameterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.outputParameterType`.
	 * @param ctx the parse tree
	 */
	enterOutputParameterType?: (ctx: OutputParameterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.outputParameterType`.
	 * @param ctx the parse tree
	 */
	exitOutputParameterType?: (ctx: OutputParameterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.scalarSetType`.
	 * @param ctx the parse tree
	 */
	enterScalarSetType?: (ctx: ScalarSetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.scalarSetType`.
	 * @param ctx the parse tree
	 */
	exitScalarSetType?: (ctx: ScalarSetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.retainType`.
	 * @param ctx the parse tree
	 */
	enterRetainType?: (ctx: RetainTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.retainType`.
	 * @param ctx the parse tree
	 */
	exitRetainType?: (ctx: RetainTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.defineDatapointRuleset`.
	 * @param ctx the parse tree
	 */
	enterDefineDatapointRuleset?: (ctx: DefineDatapointRulesetContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.defineDatapointRuleset`.
	 * @param ctx the parse tree
	 */
	exitDefineDatapointRuleset?: (ctx: DefineDatapointRulesetContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.defineHierarchicalRuleset`.
	 * @param ctx the parse tree
	 */
	enterDefineHierarchicalRuleset?: (ctx: DefineHierarchicalRulesetContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.defineHierarchicalRuleset`.
	 * @param ctx the parse tree
	 */
	exitDefineHierarchicalRuleset?: (ctx: DefineHierarchicalRulesetContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.endDatapointRuleset`.
	 * @param ctx the parse tree
	 */
	enterEndDatapointRuleset?: (ctx: EndDatapointRulesetContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.endDatapointRuleset`.
	 * @param ctx the parse tree
	 */
	exitEndDatapointRuleset?: (ctx: EndDatapointRulesetContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.endHierarchicalRuleset`.
	 * @param ctx the parse tree
	 */
	enterEndHierarchicalRuleset?: (ctx: EndHierarchicalRulesetContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.endHierarchicalRuleset`.
	 * @param ctx the parse tree
	 */
	exitEndHierarchicalRuleset?: (ctx: EndHierarchicalRulesetContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.defineDataStructure`.
	 * @param ctx the parse tree
	 */
	enterDefineDataStructure?: (ctx: DefineDataStructureContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.defineDataStructure`.
	 * @param ctx the parse tree
	 */
	exitDefineDataStructure?: (ctx: DefineDataStructureContext) => void;
}

