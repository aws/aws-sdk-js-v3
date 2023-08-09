// @ts-check
export const getUpdatedPackageJsonSection = (section, depToVersionHash) =>
  Object.entries(section)
    .filter(([key, value]) => key.startsWith("@aws-sdk/") && !value.startsWith("file:"))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: depToVersionHash[key] || value }), section);
