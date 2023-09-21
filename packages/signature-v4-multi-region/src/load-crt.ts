import { signatureV4CrtContainer } from "./signature-v4-crt-container";

/**
 * @internal
 */
export function loadCrt(): void {
  if (signatureV4CrtContainer.CrtSignerV4) {
    return;
  }
  try {
    if (typeof require === "function") {
      // add some indirection to avoid static analysis.
      const __require = require;
      const moduleName = "@aws-sdk/signature-v4-crt";
      __require.call(null, moduleName);

      process.emitWarning(
        `The package @aws-sdk/signature-v4-crt has been loaded dynamically.
To avoid this warning, please explicitly import the package in your application with:

import "@aws-sdk/signature-v4-crt"; // ESM
require("@aws-sdk/signature-v4-crt"); // CJS

In a future version of the AWS SDK for JavaScript (v3), this warning
will become an error and dynamic loading will not be available.

See https://github.com/aws/aws-sdk-js-v3/issues/5229.
`
      );
    }
  } catch (e) {
    // ignored.
  }
}
