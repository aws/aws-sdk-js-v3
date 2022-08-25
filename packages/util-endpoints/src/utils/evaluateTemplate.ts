import { getAttr } from "../lib";
import { EvaluateOptions } from "../types";

export const evaluateTemplate = (template: string, options: EvaluateOptions) => {
  // Call getAttr so that it's not tree shaken away while bundling.
  getAttr({ name: "foobar" }, "name");

  const templateToEvaluate = template
    // Replace `{value}` with `${value}`
    .replace(new RegExp(`\{([^{}]+)\}`, "g"), "${$1}")
    // Replace `{${value}}` with `{value}`
    .replace(new RegExp(`\{\\$\{([^{}]+)\}\}`, "g"), "{$1}")
    // Replace `${value#key}` with `${getAttr(value, "key")}`
    .replace(new RegExp(`\\$\{(\\w+)#(\\w+)\}`, "g"), "${getAttr($1, '$2')}");

  const templateContext = {
    ...options.endpointParams,
    ...options.referenceRecord,
  };
  const templateContextNames = Object.keys(templateContext);
  const templateContextValues = Object.values(templateContext);

  return new Function(...templateContextNames, `return \`${templateToEvaluate}\``)(...templateContextValues);
};
