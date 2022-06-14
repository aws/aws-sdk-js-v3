import { ParsedIniData } from "@aws-sdk/types";

const profileNameBlockList = ["__proto__", "profile __proto__"];

export const parseIni = (iniData: string): ParsedIniData => {
  const map: ParsedIniData = {};
  let currentSection: string | undefined;

  for (let line of iniData.split(/\r?\n/)) {
    line = line.split(/(^|\s)[;#]/)[0].trim(); // remove comments and trim
    const isSection: boolean = line[0] === "[" && line[line.length - 1] === "]";
    if (isSection) {
      currentSection = line.substring(1, line.length - 1);
      if (profileNameBlockList.includes(currentSection)) {
        throw new Error(`Found invalid profile name "${currentSection}"`);
      }
    } else if (currentSection) {
      const indexOfEqualsSign = line.indexOf("=");
      const start = 0;
      const end: number = line.length - 1;
      const isAssignment: boolean =
        indexOfEqualsSign !== -1 && indexOfEqualsSign !== start && indexOfEqualsSign !== end;
      if (isAssignment) {
        const [name, value]: [string, string] = [
          line.substring(0, indexOfEqualsSign).trim(),
          line.substring(indexOfEqualsSign + 1).trim(),
        ];
        map[currentSection] = map[currentSection] || {};
        map[currentSection][name] = value;
      }
    }
  }

  return map;
};
