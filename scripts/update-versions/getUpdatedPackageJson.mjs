// @ts-check
import { getUpdatedPackageJsonSection } from "./getUpdatedPackageJsonSection.mjs";

export const getUpdatedPackageJson = (packageJson, depToVersionHash) =>
  ["dependencies", "devDependencies"]
    .filter((sectionName) => sectionName in packageJson)
    .reduce(
      (acc, sectionName) => ({
        ...acc,
        [sectionName]: getUpdatedPackageJsonSection(packageJson[sectionName], depToVersionHash),
      }),
      packageJson
    );
