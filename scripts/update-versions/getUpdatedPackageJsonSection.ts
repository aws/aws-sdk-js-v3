export const getUpdatedPackageJsonSection = (
  section: { [key: string]: string },
  depToVersionHash: { [key: string]: string }
) =>
  Object.entries(section)
    .filter(([key, value]) => key.startsWith("@aws-sdk/") && !value.startsWith("file:"))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: depToVersionHash[key] || value }), section);
