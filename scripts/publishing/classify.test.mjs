// @ts-check
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { isTransientPublishFailure, parseNpmErrorCode, PermanentPublishError } from "./classify.mjs";
import { NonRetryableError } from "./registry.mjs";

/**
 * @param {string} code
 * @returns {string}
 */
const npmOutput = (code) => `npm error code ${code}\nnpm error something went wrong\n`;

describe("parseNpmErrorCode", () => {
  it("reads the code from the npm 10 and later format", () => {
    assert.equal(parseNpmErrorCode(npmOutput("E429")), "E429");
  });

  it("reads the code from the older format", () => {
    assert.equal(parseNpmErrorCode("npm ERR! code ENEEDAUTH\nnpm ERR! need auth"), "ENEEDAUTH");
  });

  it("finds the code after other output", () => {
    assert.equal(parseNpmErrorCode(`npm notice publishing\n${npmOutput("E503")}`), "E503");
  });

  it("returns nothing when there is no code", () => {
    assert.equal(parseNpmErrorCode("Error: spawn npm ENOENT"), undefined);
  });
});

describe("isTransientPublishFailure", () => {
  it("retries network failures, rate limits and server errors", () => {
    for (const code of ["E429", "E500", "E502", "E503", "E504", "ECONNRESET", "ETIMEDOUT", "ENOTFOUND", "EAI_AGAIN"]) {
      assert.equal(isTransientPublishFailure({ output: npmOutput(code), timedOut: false }), true, code);
    }
  });

  it("does not retry configuration, authentication or permission failures", () => {
    for (const code of ["ENEEDAUTH", "E401", "E403", "E404", "E422", "EOTP", "EPUBLISHCONFLICT"]) {
      assert.equal(isTransientPublishFailure({ output: npmOutput(code), timedOut: false }), false, code);
    }
  });

  it("retries a process that was killed at its time limit", () => {
    assert.equal(isTransientPublishFailure({ output: "", timedOut: true }), true);
  });

  it("retries a dropped connection reported without a code", () => {
    assert.equal(isTransientPublishFailure({ output: "request failed: socket hang up", timedOut: false }), true);
  });

  it("does not retry output it does not recognize", () => {
    assert.equal(isTransientPublishFailure({ output: "Error: spawn npm ENOENT", timedOut: false }), false);
    assert.equal(isTransientPublishFailure({ output: "", timedOut: false }), false);
  });
});

describe("PermanentPublishError", () => {
  it("stops the retries and carries the npm output", () => {
    const error = new PermanentPublishError("@aws-sdk/core@1.0.0", npmOutput("ENEEDAUTH"));

    assert.ok(error instanceof NonRetryableError);
    assert.equal(error.id, "@aws-sdk/core@1.0.0");
    assert.match(error.message, /ENEEDAUTH/);
  });
});
