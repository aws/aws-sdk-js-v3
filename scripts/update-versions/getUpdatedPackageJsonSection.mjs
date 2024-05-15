// @ts-check
export const getUpdatedPackageJsonSection = (section, depToVersionHash, isPeer = false) =>
  Object.entries(section)
    .filter(([key, value]) => key.startsWith("@aws-sdk/") && !value.startsWith("file:"))
    .reduce((acc, [key]) => {
      const newVersion = depToVersionHash[key];
      if (newVersion) {
        acc[key] = isPeer && newVersion !== "*" ? `^${newVersion}` : newVersion;
      }
      return acc;
    }, section);
