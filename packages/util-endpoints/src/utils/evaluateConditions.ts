import { ConditionObject, EvaluateOptions, FunctionReturn } from "../types";
import { evaluateCondition } from "./evaluateCondition";
import { toDebugString } from "./toDebugString";

export const evaluateConditions = (conditions: ConditionObject[] = [], options: EvaluateOptions) => {
  const {decisionLog} = options;
  const conditionsReferenceRecord: Record<string, FunctionReturn> = {};

  for (const condition of conditions) {
    const { result, toAssign } = evaluateCondition(condition, {
      ...options,
      referenceRecord: {
        ...options.referenceRecord,
        ...conditionsReferenceRecord,
      },
    });

    if (!result) {
      return { result };
    }

    if (toAssign) {
      conditionsReferenceRecord[toAssign.name] = toAssign.value;
      decisionLog.push(`assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`)
    }
  }

  return { result: true, referenceRecord: conditionsReferenceRecord };
};
