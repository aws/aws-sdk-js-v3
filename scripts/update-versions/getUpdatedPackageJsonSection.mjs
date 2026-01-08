// @ts-check
export const getUpdatedPackageJsonSection = (section, depToVersionHash) =>
  Object.entries(section)
    .filter(([key, value]) => key.startsWith("@aws-sdk/") && !value.startsWith("file:"))
    .reduce((acc, [key]) => {
      const newVersion = depToVersionHash[key];
      if (newVersion) {
        acc[key] = newVersion;
      }
      return acc;
    }, section);
