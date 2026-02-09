// @ts-check
export const getUpdatedPackageJsonSection = (section, depToVersionHash, sectionName) =>
  Object.entries(section)
    .filter(([key, value]) => key.startsWith("@aws-sdk/") && !value.startsWith("file:"))
    .reduce((acc, [key]) => {
      const newVersion = depToVersionHash[key];
      if (newVersion) {
        if (sectionName === "peerDependencies") {
          if (key.startsWith("@aws-sdk/")) {
            acc[key] = newVersion.replace(/^(workspace:)?\^?(\d+\.\d+\.\d+)$/, "$1^$2");
          }
        } else {
          acc[key] = newVersion;
        }
      }
      return acc;
    }, section);
