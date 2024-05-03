// @ts-check
export const getUpdatedPackageJsonSection = (section, depToVersionHash, { isPeer, packageName }) =>
  Object.entries(section)
    .filter(([key, value]) => key.startsWith("@aws-sdk/") && !value.startsWith("file:"))
    .reduce((acc, [key]) => {
      const newVersion = depToVersionHash[key];
      if (newVersion) {
        // Use exact version if it's asterisk or not a peer dependency.
        if (newVersion === "*" || !isPeer) {
          acc[key] = newVersion;
          return acc;
        }

        // Use exact version for client peerDependencies in credential-provider packages.
        if (packageName.startsWith("@aws-sdk/credential-provider") && key.startsWith("@aws-sdk/client-")) {
          acc[key] = newVersion;
          return acc;
        }

        // Use caret version for other peerDependencies.
        acc[key] = `^${newVersion}`;
      }
      return acc;
    }, section);
