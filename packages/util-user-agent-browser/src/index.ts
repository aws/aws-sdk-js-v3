export function defaultUserAgent(packageName: string, packageVersion: string): string {
  const originUserAgent =
    typeof navigator !== "undefined" && typeof navigator.userAgent === "string" ? navigator.userAgent : "";
  return `aws-sdk-js-v3-${packageName}/${packageVersion} ${originUserAgent}`;
}
