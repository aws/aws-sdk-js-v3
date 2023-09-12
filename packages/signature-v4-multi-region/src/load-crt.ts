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
    }
  } catch (e) {
    // ignored.
  }
}
