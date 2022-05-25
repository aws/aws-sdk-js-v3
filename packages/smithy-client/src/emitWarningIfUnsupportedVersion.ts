// Stores whether the warning was already emitted.
let warningEmitted = false;

/**
 * Emits warning if the provided Node.js version string is pending deprecation.
 *
 * @param {string} version - The Node.js version string.
 */
export const emitWarningIfUnsupportedVersion = (version: string) => {
  if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
    warningEmitted = true;
    process.emitWarning(
      `The AWS SDK for JavaScript (v3) will\n` +
        `no longer support Node.js ${version} on November 1, 2022.\n\n` +
        `To continue receiving updates to AWS services, bug fixes, and security\n` +
        `updates please upgrade to Node.js 14.x or later.\n\n` +
        `For details, please refer our blog post: https://a.co/48dbdYz`,
      `NodeDeprecationWarning`
    );
  }
};
