import { getAttr } from "../lib";
import { EvaluateOptions } from "../types";

const ATTR_SHORTHAND_REGEX = new RegExp("\\${([\\w]+)#([\\w]+)}", "g");

export const evaluateTemplate = (template: string, options: EvaluateOptions) => {
  const templateToEvaluate = template
    // Replace `{value}` with `${value}`
    .replace(new RegExp(`\{([^{}]+)\}`, "g"), "${$1}")
    // Replace `{${value}}` with `{value}`
    .replace(new RegExp(`\{\\$\{([^{}]+)\}\}`, "g"), "{$1}");

  const templateContext = {
    ...options.endpointParams,
    ...options.referenceRecord,
  };

  const attrShortHandList = templateToEvaluate.match(ATTR_SHORTHAND_REGEX) || [];

  const attrShortHandMap = attrShortHandList.reduce((acc, attrShortHand) => {
    const indexOfHash = attrShortHand.indexOf("#");
    const refName = attrShortHand.substring(2, indexOfHash);
    const attrName = attrShortHand.substring(indexOfHash + 1, attrShortHand.length - 1);
    acc[attrShortHand] = getAttr(templateContext[refName] as Record<string, any>, attrName) as string;
    return acc;
  }, {} as Record<string, string>);

  const templateWithAttr = Object.entries(attrShortHandMap).reduce(
    (acc, [shortHand, value]) => acc.replace(shortHand, value),
    templateToEvaluate
  );

  const templateContextNames = Object.keys(templateContext);
  const templateContextValues = Object.values(templateContext);
  const templateWithTildeEscaped = templateWithAttr.replace(/\`/g, "\\`");

  return new Function(...templateContextNames, `return \`${templateWithTildeEscaped}\``)(...templateContextValues);
};
