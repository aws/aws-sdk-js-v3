import process from "process";

export const defaultUserAgent = (packageName: string, packageVersion: string): string =>
  [
    // sdk-metadata
    // TODO: remove this post GA and version changed to 3.x.x
    `aws-sdk-nodejs/${packageVersion.replace(/^1\./, "3.")}`,
    // os-metadata
    process.platform,
    `nodejs/${process.versions.node}`,
    // language-metadata
    `sdk-client/${packageName}`,
    // env-metadata
    process.env.AWS_EXECUTION_ENV ? `exec-env/${process.env.AWS_EXECUTION_ENV}` : undefined,
  ]
    .filter((section) => section && section.length > 0)
    .join(" ");
