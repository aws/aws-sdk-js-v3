export const getPackageTags = (packages) =>
  packages
    .map((name) => name.replace("@aws-sdk/client-", ""))
    .map((name) => name.replace("-", ""))
    .map((name) => `@${name}`);
