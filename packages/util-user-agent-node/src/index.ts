import process from "process";

export function defaultUserAgent(packageName: string, packageVersion: string): string {
  let engine = `${process.platform}/${process.version}`;
  if (process.env.AWS_EXECUTION_ENV) {
    engine += ` exec-env/${process.env.AWS_EXECUTION_ENV}`;
  }
  return `aws-sdk-nodejs-v3-${packageName}/${packageVersion} ${engine}`;
}
