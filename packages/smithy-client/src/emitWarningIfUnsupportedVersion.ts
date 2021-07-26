// Stores whether the warning was already emitted.
let warningEmitted = false;

/**
 * Emits warning if the provided Node.js version string is pending deprecation.
 *
 * @param {string} version - The Node.js version string.
 */
export const emitWarningIfUnsupportedVersion = (version: string) => {
  if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 12) {
    warningEmitted = true;
    process.emitWarning(
      `The AWS SDK for JavaScript (v3) will\n` +
        `no longer support Node.js ${version} as of January 1, 2022.\n` +
        `To continue receiving updates to AWS services, bug fixes, and security\n` +
        `updates please upgrade to Node.js 12.x or later.\n\n` +
        `More information can be found at: https://a.co/1l6FLnu`,
      `NodeDeprecationWarning`
    );
  }
};
