export const defaultUserAgent = (packageName: string, packageVersion: string): string =>
  [
    // sdk-metadata
    // TODO: remove this post GA and version changed to 3.x.x
    `aws-sdk-js/${packageVersion.replace(/^1\./, "3.")}`,
    // os-metadata
    window?.navigator?.product,
    window?.navigator?.userAgent,
    // language-metadata
    `sdk-client/${packageName}`,
  ]
    .filter((section) => section && section.length > 0)
    .join(" ");
