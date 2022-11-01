import { getAttr } from "../lib";
import { EvaluateOptions } from "../types";

const ATTR_SHORTHAND_REGEX = new RegExp("\\${([\\w]+)#([\\w]+)}", "g");
const TEMPLATE_VARIABLE_REGEX = /\$\{(.*?)\}/;

export const evaluateTemplate = (template: string, options: EvaluateOptions) => {
  const templateToEvaluate = template
    // Replace `{value}` with `${value}`
    .replace(new RegExp(`\{([^{}]+)\}`, "g"), "${$1}")
    // Replace `{${value}}` with `{value}`
    .replace(new RegExp(`\{\\$\{([^{}]+)\}\}`, "g"), "{$1}");

  const templateContext: Record<string, string> = {
    ...(options.endpointParams as Record<string, string>),
    ...(options.referenceRecord as Record<string, string>),
  };

  const attrShortHandList = templateToEvaluate.match(ATTR_SHORTHAND_REGEX) || [];

  const attrShortHandMap = attrShortHandList.reduce((acc, attrShortHand) => {
    const indexOfHash = attrShortHand.indexOf("#");
    const refName = attrShortHand.substring(2, indexOfHash);
    const attrName = attrShortHand.substring(indexOfHash + 1, attrShortHand.length - 1);
    acc[attrShortHand] = getAttr(templateContext[refName], attrName) as string;
    return acc;
  }, {} as Record<string, string>);

  const templateWithAttr = Object.entries(attrShortHandMap).reduce(
    (acc, [shortHand, value]) => acc.replace(shortHand, value),
    templateToEvaluate
  );

  let constructedString = templateWithAttr;
  let match: RegExpMatchArray | null = null;

  while ((match = constructedString.match(TEMPLATE_VARIABLE_REGEX))) {
    const [matched, capture] = match;
    const replacement = templateContext[capture];
    if (!replacement) {
      throw new Error(
        `key [${capture}] from "${templateWithAttr}" was not found in attribute map ${JSON.stringify(
          templateContext,
          null,
          2
        )}`
      );
    }
    constructedString = constructedString.replace(matched, templateContext[capture]);
  }

  return constructedString;
};
