import { ParsedIniData } from "@aws-sdk/types";

const profileNameBlockList = ["__proto__", "profile __proto__"];

export const parseIni = (iniData: string): ParsedIniData => {
  const map: ParsedIniData = {};
  let currentSection: string | undefined;

  for (let line of iniData.split(/\r?\n/)) {
    line = line.split(/(^|\s)[;#]/)[0]; // remove comments
    const section = line.match(/^\s*\[([^\[\]]+)]\s*$/);
    if (section) {
      currentSection = section[1];
      if (profileNameBlockList.includes(currentSection)) {
        throw new Error(`Found invalid profile name "${currentSection}"`);
      }
    } else if (currentSection) {
      const expressionComponents: string[] = line.split("=");
      const isAssignment: boolean = expressionComponents.length >= 2 && !!expressionComponents[0];
      if (isAssignment) {
        const [name, value]: [string, string] = [
          expressionComponents[0].trim(),
          expressionComponents.slice(1).join("=").trim(),
        ];
        map[currentSection] = map[currentSection] || {};
        map[currentSection][name] = value;
      }
    }
  }

  return map;
};
