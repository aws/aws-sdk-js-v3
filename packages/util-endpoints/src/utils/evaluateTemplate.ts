import { getAttr } from "../lib";
import { EvaluateOptions } from "../types";

export const evaluateTemplate = (template: string, options: EvaluateOptions) => {
  const evaluatedTemplateArr: string[] = [];

  const templateContext = {
    ...options.endpointParams,
    ...options.referenceRecord,
  } as Record<string, string>;

  let currentIndex = 0;
  while (true) {
    const openingBraceIndex = template.indexOf("{", currentIndex);

    if (openingBraceIndex === -1) {
      // No more opening braces, add the rest of the template and break
      evaluatedTemplateArr.push(template.slice(currentIndex));
      break;
    } else {
      evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
      const closingBraceIndex = template.indexOf("}", openingBraceIndex);

      if (closingBraceIndex === -1) {
        // Invalid template, but pass as it is.
        evaluatedTemplateArr.push(template.slice(openingBraceIndex));
        break;
      }

      if (closingBraceIndex === openingBraceIndex + 1) {
        // Empty parameter, pass as it is.
        evaluatedTemplateArr.push(template.slice(openingBraceIndex, closingBraceIndex + 1));
        currentIndex = closingBraceIndex + 1;
        continue;
      }

      if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
        // Escaped expression. Do not evaluate.
        evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
        currentIndex = closingBraceIndex + 2;
      }

      const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);

      if (parameterName.includes("#")) {
        const [refName, attrName] = parameterName.split("#");
        evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName) as string);
      } else {
        evaluatedTemplateArr.push(templateContext[parameterName]);
      }

      currentIndex = closingBraceIndex + 1;
    }
  }

  return evaluatedTemplateArr.join("");
};
