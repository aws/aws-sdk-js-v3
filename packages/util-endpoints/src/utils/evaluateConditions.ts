import { ConditionObject, EvaluateOptions, FunctionReturn } from "../types";
import { evaluateCondition } from "./evaluateCondition";

export const evaluateConditions = (conditions: ConditionObject[] = [], options: EvaluateOptions) => {
  const conditionsReferenceRecord: Record<string, FunctionReturn> = {};

  for (const condition of conditions) {
    const { result, assigned } = evaluateCondition(condition, {
      ...options,
      referenceRecord: {
        ...options.referenceRecord,
        ...conditionsReferenceRecord,
      },
    });

    if (!result) {
      return { result };
    }

    if (assigned) {
      conditionsReferenceRecord[assigned.name] = assigned.value;
    }
  }

  return { result: true, referenceRecord: conditionsReferenceRecord };
};
