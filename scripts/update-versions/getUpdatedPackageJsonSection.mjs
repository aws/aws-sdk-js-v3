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
        const moduleName = packageName.substring(packageName.indexOf("/") + 1);
        const authProviderPrefixArray = ["credential-provider", "token-provider"];
        if (
          authProviderPrefixArray.some((authProviderPrefix) => moduleName.startsWith(authProviderPrefix)) &&
          key.startsWith("@aws-sdk/client-")
        ) {
          acc[key] = newVersion;
          return acc;
        }

        // Use caret version for other peerDependencies.
        acc[key] = `^${newVersion}`;
      }
      return acc;
    }, section);
