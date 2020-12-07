import { UserAgent } from "@aws-sdk/types";
import { platform, release } from "os";
import { env, versions } from "process";

export const defaultUserAgent = (packageName: string, packageVersion: string): UserAgent => {
  // TODO: remove this post GA and version changed to 3.x.x
  const version = packageVersion.replace(/^1\./, "3.");
  const sections: UserAgent = [
    // sdk-metadata
    ["aws-sdk-js", version],
    // api-metadata
    // TODO: use api name instead of package name
    [`api/${packageName}`, version],
    // os-metadata
    [`os/${platform()}`, release()],
    // language-metadata
    ["lang/nodejs", `${versions.node}`],
  ];
  if (env.AWS_EXECUTION_ENV) {
    // env-metadata
    sections.push([`exec-env/${process.env.AWS_EXECUTION_ENV}`]);
  }
  return sections;
};
