import { packageNameToVariable } from "../../packageNameToVariable";

/**
 * @internal
 */
export function staticOrProvider(staticType: string) {
  return `${staticType}|${packageNameToVariable(
    "@aws-sdk/types"
  )}.Provider<${staticType}>`;
}

/**
 * @internal
 */
export function normalizeStaticOrProvider(
  staticType: string,
  staticEvaluationExpression: string,
  optional: boolean = true
): string {
  return `
(
    value: ${staticOrProvider(staticType)}|undefined
) => {
    if (${staticEvaluationExpression}) {
        const promisified = Promise.resolve(value);
        return () => promisified;
    }${
      optional
        ? ""
        : ` else if (value === undefined ) {
        throw new Error('credentials cannot be undefined')
    }`
    }

    return value${optional ? "!" : ""};
}
            `.trim();
}
