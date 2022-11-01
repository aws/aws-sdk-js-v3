import { getAttr } from "../lib";
import { EvaluateOptions } from "../types";

export const evaluateTemplate = (template: string, options: EvaluateOptions) => {
  const evaluatedTemplateArr: Array<String> = [];

  const templateContext = {
    ...options.endpointParams,
    ...options.referenceRecord,
  } as Record<string, string>;

  for (let i = 0; i < template.length; i++) {
    const char = template[i];
    const nextChar = template[i + 1];

    if (char === "{") {
      if (nextChar === "{") {
        // Escaped expression, skip next char
        i++;
        evaluatedTemplateArr.push(char);
      } else {
        const closingBraceIndex = template.indexOf("}", i);
        const parameterName = template.substring(i + 1, closingBraceIndex);

        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName) as string);
        } else {
          evaluatedTemplateArr.push(templateContext[parameterName]);
        }

        i = closingBraceIndex;
      }
    } else if (char === "}") {
      if (nextChar === "}") {
        // Escaped expression, skip next char
        i++;
      }
      evaluatedTemplateArr.push(char);
    } else {
      evaluatedTemplateArr.push(char);
    }
  }

  return evaluatedTemplateArr.join("");
};
