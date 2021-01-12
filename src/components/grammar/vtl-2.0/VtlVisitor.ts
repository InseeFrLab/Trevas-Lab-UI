// Generated from src/grammar/Vtl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `VtlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface VtlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `exprValidationExpr`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprValidationExpr?: (ctx: ExprValidationExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `definitionExpressions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionExpressions?: (ctx: DefinitionExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `standaloneAggregateFunction`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneAggregateFunction?: (ctx: StandaloneAggregateFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `componentExpressionwithAggrClause`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentExpressionwithAggrClause?: (ctx: ComponentExpressionwithAggrClauseContext) => Result;

	/**
	 * Visit a parse tree produced by the `standaloneAnalyticFunction`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandaloneAnalyticFunction?: (ctx: StandaloneAnalyticFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleaggregateFunctions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleaggregateFunctions?: (ctx: SimpleaggregateFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeexpressions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeexpressions?: (ctx: TimeexpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `setExpressions`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetExpressions?: (ctx: SetExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `callFunctionExpression`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallFunctionExpression?: (ctx: CallFunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `joinExpression`
	 * labeled alternative in `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinExpression?: (ctx: JoinExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesisExprRef`
	 * labeled alternative in `VtlParser.ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisExprRef?: (ctx: ParenthesisExprRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `varIdRef`
	 * labeled alternative in `VtlParser.ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarIdRef?: (ctx: VarIdRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantRef`
	 * labeled alternative in `VtlParser.ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantRef?: (ctx: ConstantRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `roundAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoundAtom?: (ctx: RoundAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `ceilAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCeilAtom?: (ctx: CeilAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `floorAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloorAtom?: (ctx: FloorAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `minAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinAtom?: (ctx: MinAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `expAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpAtom?: (ctx: ExpAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `lnAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLnAtom?: (ctx: LnAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `logAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogAtom?: (ctx: LogAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerAtom?: (ctx: PowerAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `sqrtAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqrtAtom?: (ctx: SqrtAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `lenAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLenAtom?: (ctx: LenAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `betweenAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetweenAtom?: (ctx: BetweenAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `trimAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrimAtom?: (ctx: TrimAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `ltrimAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLtrimAtom?: (ctx: LtrimAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `rtrimAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRtrimAtom?: (ctx: RtrimAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `ucaseAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUcaseAtom?: (ctx: UcaseAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `lcaseAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLcaseAtom?: (ctx: LcaseAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `substrAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstrAtom?: (ctx: SubstrAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `instrAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstrAtom?: (ctx: InstrAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `replaceAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceAtom?: (ctx: ReplaceAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `charsetMatchAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharsetMatchAtom?: (ctx: CharsetMatchAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `isNullAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsNullAtom?: (ctx: IsNullAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `nvlAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNvlAtom?: (ctx: NvlAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `modAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModAtom?: (ctx: ModAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `refAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefAtom?: (ctx: RefAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `evalExprAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvalExprAtom?: (ctx: EvalExprAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `castExprAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExprAtom?: (ctx: CastExprAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `hierarchyExprAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchyExprAtom?: (ctx: HierarchyExprAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `flowToStockAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowToStockAtom?: (ctx: FlowToStockAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `stockToFlowAtom`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStockToFlowAtom?: (ctx: StockToFlowAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `validateDPruleset`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidateDPruleset?: (ctx: ValidateDPrulesetContext) => Result;

	/**
	 * Visit a parse tree produced by the `validateHRruleset`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidateHRruleset?: (ctx: ValidateHRrulesetContext) => Result;

	/**
	 * Visit a parse tree produced by the `validationSimple`
	 * labeled alternative in `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidationSimple?: (ctx: ValidationSimpleContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.persistentAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPersistentAssignment?: (ctx: PersistentAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.optionalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalExpr?: (ctx: OptionalExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.exprComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprComplex?: (ctx: ExprComplexContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.timeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeExpr?: (ctx: TimeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.defHierarchical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefHierarchical?: (ctx: DefHierarchicalContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.ruleClauseHierarchical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleClauseHierarchical?: (ctx: RuleClauseHierarchicalContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.ruleItemHierarchical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleItemHierarchical?: (ctx: RuleItemHierarchicalContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.hierRuleSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierRuleSignature?: (ctx: HierRuleSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.valueDomainSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueDomainSignature?: (ctx: ValueDomainSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.codeItemRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeItemRelation?: (ctx: CodeItemRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.codeItemRelationClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeItemRelationClause?: (ctx: CodeItemRelationClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.codeItemRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeItemRef?: (ctx: CodeItemRefContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.defDatapoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefDatapoint?: (ctx: DefDatapointContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.ruleClauseDatapoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleClauseDatapoint?: (ctx: RuleClauseDatapointContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.ruleItemDatapoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleItemDatapoint?: (ctx: RuleItemDatapointContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.rulesetSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulesetSignature?: (ctx: RulesetSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.varSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarSignature?: (ctx: VarSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.defExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefExpr?: (ctx: DefExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.defOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefOperator?: (ctx: DefOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.parameterItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterItem?: (ctx: ParameterItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.callFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallFunction?: (ctx: CallFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.exprAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprAtom?: (ctx: ExprAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRef?: (ctx: RefContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.lists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLists?: (ctx: ListsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.evalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvalExpr?: (ctx: EvalExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.castExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpr?: (ctx: CastExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.periodExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPeriodExpr?: (ctx: PeriodExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.timeShiftExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeShiftExpr?: (ctx: TimeShiftExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.timeSeriesExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeSeriesExpr?: (ctx: TimeSeriesExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.timeAggExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeAggExpr?: (ctx: TimeAggExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.validationExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidationExpr?: (ctx: ValidationExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.validationDatapoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidationDatapoint?: (ctx: ValidationDatapointContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.validationHierarchical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidationHierarchical?: (ctx: ValidationHierarchicalContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.erCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErCode?: (ctx: ErCodeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.erLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErLevel?: (ctx: ErLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.hierarchyExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchyExpr?: (ctx: HierarchyExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.datasetClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatasetClause?: (ctx: DatasetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.anFunctionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnFunctionClause?: (ctx: AnFunctionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.partitionByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionByClause?: (ctx: PartitionByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.orderByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByClause?: (ctx: OrderByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.windowingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowingClause?: (ctx: WindowingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.limitClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClauseItem?: (ctx: LimitClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinExpr?: (ctx: JoinExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinClause?: (ctx: JoinClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinBody?: (ctx: JoinBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinCalcClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCalcClause?: (ctx: JoinCalcClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinCalcClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCalcClauseItem?: (ctx: JoinCalcClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinCalcExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCalcExpr?: (ctx: JoinCalcExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinAggClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinAggClause?: (ctx: JoinAggClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinAggClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinAggClauseItem?: (ctx: JoinAggClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinAggExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinAggExpr?: (ctx: JoinAggExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinKeepClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinKeepClause?: (ctx: JoinKeepClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinDropClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinDropClause?: (ctx: JoinDropClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinFilterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinFilterClause?: (ctx: JoinFilterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinRenameClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRenameClause?: (ctx: JoinRenameClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinApplyClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinApplyClause?: (ctx: JoinApplyClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnFunction?: (ctx: AnFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggregateClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregateClause?: (ctx: AggregateClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggrFunctionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggrFunctionClause?: (ctx: AggrFunctionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.getFiltersClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetFiltersClause?: (ctx: GetFiltersClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.getFilterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetFilterClause?: (ctx: GetFilterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggrClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggrClause?: (ctx: AggrClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.filterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterClause?: (ctx: FilterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.renameClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameClause?: (ctx: RenameClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggrFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggrFunction?: (ctx: AggrFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.calcClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcClause?: (ctx: CalcClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.calcClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcClauseItem?: (ctx: CalcClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.calcExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcExpr?: (ctx: CalcExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.dropClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropClause?: (ctx: DropClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.dropClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropClauseItem?: (ctx: DropClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.keepClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeepClause?: (ctx: KeepClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.keepClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeepClauseItem?: (ctx: KeepClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.unpivotExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnpivotExpr?: (ctx: UnpivotExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.pivotExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPivotExpr?: (ctx: PivotExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.subspaceExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubspaceExpr?: (ctx: SubspaceExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.inBetweenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInBetweenClause?: (ctx: InBetweenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.setExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetExpr?: (ctx: SetExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.subscriptExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriptExpr?: (ctx: SubscriptExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggrInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggrInvocation?: (ctx: AggrInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggrInvocationCompExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggrInvocationCompExpr?: (ctx: AggrInvocationCompExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggrFunctionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggrFunctionName?: (ctx: AggrFunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingClause?: (ctx: GroupingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.havingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingClause?: (ctx: HavingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.returnAll`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnAll?: (ctx: ReturnAllContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.componentRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentRole?: (ctx: ComponentRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.viralAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViralAttribute?: (ctx: ViralAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.logBase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogBase?: (ctx: LogBaseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.exponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponent?: (ctx: ExponentContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.persistentDatasetID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPersistentDatasetID?: (ctx: PersistentDatasetIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.datasetID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatasetID?: (ctx: DatasetIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.rulesetID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulesetID?: (ctx: RulesetIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.varID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarID?: (ctx: VarIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.componentID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentID?: (ctx: ComponentIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.operatorID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorID?: (ctx: OperatorIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.routineName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineName?: (ctx: RoutineNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinKeyword?: (ctx: JoinKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.groupKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupKeyword?: (ctx: GroupKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.componentType2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentType2?: (ctx: ComponentType2Context) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.scalarType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarType?: (ctx: ScalarTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.basicScalarType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicScalarType?: (ctx: BasicScalarTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.valueDomainName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueDomainName?: (ctx: ValueDomainNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.setName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetName?: (ctx: SetNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarTypeConstraint?: (ctx: ScalarTypeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.componentType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentType?: (ctx: ComponentTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.datasetType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatasetType?: (ctx: DatasetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.compConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompConstraint?: (ctx: CompConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.multModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultModifier?: (ctx: MultModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.rulesetType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulesetType?: (ctx: RulesetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDpRuleset?: (ctx: DpRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHrRuleset?: (ctx: HrRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.prodValueDomains`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProdValueDomains?: (ctx: ProdValueDomainsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.prodVariables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProdVariables?: (ctx: ProdVariablesContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.operatorType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorType?: (ctx: OperatorTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.inputParameterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputParameterType?: (ctx: InputParameterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.outputParameterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputParameterType?: (ctx: OutputParameterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.scalarSetType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarSetType?: (ctx: ScalarSetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.retainType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetainType?: (ctx: RetainTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.defineDatapointRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineDatapointRuleset?: (ctx: DefineDatapointRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.defineHierarchicalRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineHierarchicalRuleset?: (ctx: DefineHierarchicalRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.endDatapointRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndDatapointRuleset?: (ctx: EndDatapointRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.endHierarchicalRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndHierarchicalRuleset?: (ctx: EndHierarchicalRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.defineDataStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineDataStructure?: (ctx: DefineDataStructureContext) => Result;
}

