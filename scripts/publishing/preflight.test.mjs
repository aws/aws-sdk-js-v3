// @ts-check
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { checkTrustedPublishing, isAtLeast, normalizeRepositoryUrl } from "./preflight.mjs";

const goodPackage = {
  name: "@aws-sdk/core",
  dir: "/repo/packages-internal/core",
  repositoryUrl: "https://github.com/aws/aws-sdk-js-v3.git",
};

const actionsEnv = {
  GITHUB_ACTIONS: "true",
  GITHUB_REPOSITORY: "aws/aws-sdk-js-v3",
  GITHUB_WORKFLOW_REF: "aws/aws-sdk-js-v3/.github/workflows/publish.yml@refs/heads/main",
  GITHUB_EVENT_NAME: "push",
  RUNNER_ENVIRONMENT: "github-hosted",
  ACTIONS_ID_TOKEN_REQUEST_URL: "https://token.actions.githubusercontent.com/token",
};

/**
 * @param {Partial<Parameters<typeof checkTrustedPublishing>[0]>} overrides
 */
const check = (overrides = {}) =>
  checkTrustedPublishing({
    packages: [goodPackage],
    env: actionsEnv,
    nodeVersion: "24.1.0",
    getNpmVersion: () => "11.6.0",
    ...overrides,
  });

describe("isAtLeast", () => {
  it("compares versions numerically", () => {
    assert.equal(isAtLeast("22.14.0", "22.14.0"), true);
    assert.equal(isAtLeast("22.13.9", "22.14.0"), false);
    assert.equal(isAtLeast("v24.0.0", "22.14.0"), true);
    assert.equal(isAtLeast("11.10.0", "11.5.1"), true);
    assert.equal(isAtLeast("10.9.7", "11.5.1"), false);
  });
});

describe("normalizeRepositoryUrl", () => {
  it("treats the written forms of the same repository as equal", () => {
    const expected = "github.com/aws/aws-sdk-js-v3";
    for (const url of [
      "https://github.com/aws/aws-sdk-js-v3.git",
      "git+https://github.com/aws/aws-sdk-js-v3.git",
      "git://github.com/aws/aws-sdk-js-v3.git",
      "ssh://git@github.com/aws/aws-sdk-js-v3.git",
      "git@github.com:aws/aws-sdk-js-v3.git",
      "https://github.com/aws/aws-sdk-js-v3",
    ]) {
      assert.equal(normalizeRepositoryUrl(url), expected, url);
    }
  });

  it("keeps different repositories different", () => {
    assert.notEqual(normalizeRepositoryUrl("https://github.com/aws/aws-sdk-js.git"), "github.com/aws/aws-sdk-js-v3");
    assert.equal(normalizeRepositoryUrl(undefined), undefined);
  });
});

describe("checkTrustedPublishing", () => {
  it("passes in a correctly configured workflow run", () => {
    assert.deepEqual(check(), { errors: [], warnings: [] });
  });

  it("reports a package with a different repository url", () => {
    const { errors } = check({
      packages: [goodPackage, { ...goodPackage, name: "@aws-sdk/other", repositoryUrl: "https://github.com/x/y.git" }],
    });
    assert.equal(errors.length, 1);
    assert.match(errors[0], /@aws-sdk\/other/);
  });

  it("reports a package without a repository url", () => {
    const { errors } = check({ packages: [{ ...goodPackage, repositoryUrl: undefined }] });
    assert.equal(errors.length, 1);
  });

  it("checks only the repository urls outside GitHub Actions", () => {
    let npmRead = false;
    const result = check({
      env: {},
      nodeVersion: "18.0.0",
      getNpmVersion: () => {
        npmRead = true;
        return "9.0.0";
      },
    });
    assert.deepEqual(result, { errors: [], warnings: [] });
    assert.equal(npmRead, false);
  });

  it("reports a Node version that is too old", () => {
    const { errors } = check({ nodeVersion: "20.19.0" });
    assert.equal(errors.length, 1);
    assert.match(errors[0], /Node 20\.19\.0/);
  });

  it("reports an npm version that is too old", () => {
    const { errors } = check({ getNpmVersion: () => "10.9.7" });
    assert.equal(errors.length, 1);
    assert.match(errors[0], /npm 10\.9\.7/);
  });

  it("reports a missing id-token permission", () => {
    const { errors } = check({ env: { ...actionsEnv, ACTIONS_ID_TOKEN_REQUEST_URL: undefined } });
    assert.equal(errors.length, 1);
    assert.match(errors[0], /id-token: write/);
  });

  it("reports a self-hosted runner", () => {
    const { errors } = check({ env: { ...actionsEnv, RUNNER_ENVIRONMENT: "self-hosted" } });
    assert.equal(errors.length, 1);
    assert.match(errors[0], /GitHub-hosted/);
  });

  it("reports a different workflow file", () => {
    const { errors } = check({
      env: { ...actionsEnv, GITHUB_WORKFLOW_REF: "aws/aws-sdk-js-v3/.github/workflows/other.yml@refs/heads/main" },
    });
    assert.equal(errors.length, 1);
    assert.match(errors[0], /other\.yml/);
  });

  it("reports a different repository", () => {
    const { errors } = check({ env: { ...actionsEnv, GITHUB_REPOSITORY: "someone/fork" } });
    assert.equal(errors.length, 1);
  });

  it("warns, without failing, on workflow_dispatch", () => {
    const { errors, warnings } = check({ env: { ...actionsEnv, GITHUB_EVENT_NAME: "workflow_dispatch" } });
    assert.deepEqual(errors, []);
    assert.equal(warnings.length, 1);
  });

  it("reports each problem separately", () => {
    const { errors } = check({
      nodeVersion: "20.0.0",
      getNpmVersion: () => "10.0.0",
      env: { ...actionsEnv, ACTIONS_ID_TOKEN_REQUEST_URL: undefined },
    });
    assert.equal(errors.length, 3);
  });
});
