// @ts-check
// Checks that can run without publishing, since npm does not validate a trusted publisher until a publish.

import { execFileSync } from "node:child_process";

export const EXPECTED_REPOSITORY = "aws/aws-sdk-js-v3";
export const EXPECTED_WORKFLOW_FILE = "publish.yml";
export const MIN_NODE_VERSION = "22.14.0";
export const MIN_NPM_VERSION = "11.5.1";

/**
 * @typedef {{ name: string, dir: string, repositoryUrl: string | undefined }} PackageRepository
 */

/**
 * @typedef {{ errors: string[], warnings: string[] }} PreflightResult
 */

/**
 * @param {string} version
 * @param {string} minimum
 * @returns {boolean}
 */
export const isAtLeast = (version, minimum) => {
  const parse = (/** @type {string} */ v) => v.replace(/^v/, "").split(".").map(Number);
  const actual = parse(version);
  const required = parse(minimum);
  for (let i = 0; i < required.length; ++i) {
    const difference = (actual[i] ?? 0) - required[i];
    if (difference !== 0) {
      return difference > 0;
    }
  }
  return true;
};

/**
 * npm requires the repository field to match the GitHub repository, in whichever form it is written.
 *
 * @param {string | undefined} url
 * @returns {string | undefined}
 */
export const normalizeRepositoryUrl = (url) =>
  url
    ?.replace(/^git\+/, "")
    .replace(/^(https?|git|ssh):\/\//, "")
    .replace(/^git@github\.com:/, "github.com/")
    .replace(/^[^@/]+@/, "")
    .replace(/\.git$/, "");

/**
 * @returns {string}
 */
export const getNpmVersion = () => execFileSync("npm", ["--version"], { encoding: "utf8" }).trim();

/**
 * @returns {{ head: string, mainHead: string }} the checked-out commit and the head of main, which is fetched fresh.
 */
export const readGitCommits = () => {
  execFileSync("git", ["fetch", "origin", "main"], { stdio: "ignore" });
  return {
    head: execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
    mainHead: execFileSync("git", ["rev-parse", "FETCH_HEAD"], { encoding: "utf8" }).trim(),
  };
};

/**
 * A rebuild of a newer commit could differ from what the release pipeline built and tested, so the run fails
 * unless main still points at the release commit.
 *
 * @param {{
 *   env: Record<string, string | undefined>,
 *   confirm: boolean,
 *   readCommits: () => { head: string, mainHead: string },
 * }} input
 * @returns {string[]} errors.
 */
export const checkReleaseCommit = ({ env, confirm, readCommits }) => {
  if (env.GITHUB_ACTIONS !== "true") {
    return [];
  }
  const requested = env.AWS_SDK_RELEASE_COMMIT ?? "";
  if (requested === "") {
    return confirm ? ["A real publish needs the full hash of the release commit"] : [];
  }
  if (!/^[0-9a-f]{40}$/.test(requested)) {
    return [`The release commit "${requested}" is not a full 40-character hash`];
  }
  const { head, mainHead } = readCommits();
  const errors = [];
  if (mainHead !== requested) {
    errors.push(`The head of main is ${mainHead}, not the release commit ${requested}`);
  }
  if (head !== requested) {
    errors.push(`The checked-out commit is ${head}, not the release commit ${requested}`);
  }
  return errors;
};

/**
 * Environment checks apply only inside GitHub Actions, so a local dry run is not blocked by a developer's Node version.
 *
 * @param {{
 *   packages: PackageRepository[],
 *   env: Record<string, string | undefined>,
 *   nodeVersion: string,
 *   getNpmVersion: () => string,
 * }} input
 * @returns {PreflightResult}
 */
export const checkTrustedPublishing = ({ packages, env, nodeVersion, getNpmVersion: readNpmVersion }) => {
  const errors = [];
  const warnings = [];

  for (const { name, repositoryUrl } of packages) {
    if (normalizeRepositoryUrl(repositoryUrl) !== `github.com/${EXPECTED_REPOSITORY}`) {
      errors.push(`${name}: repository.url "${repositoryUrl}" does not match github.com/${EXPECTED_REPOSITORY}`);
    }
  }

  if (env.GITHUB_ACTIONS !== "true") {
    return { errors, warnings };
  }

  if (!isAtLeast(nodeVersion, MIN_NODE_VERSION)) {
    errors.push(`Node ${nodeVersion} is older than ${MIN_NODE_VERSION}, which trusted publishing requires`);
  }
  const npmVersion = readNpmVersion();
  if (!isAtLeast(npmVersion, MIN_NPM_VERSION)) {
    errors.push(`npm ${npmVersion} is older than ${MIN_NPM_VERSION}, which trusted publishing requires`);
  }
  if (!env.ACTIONS_ID_TOKEN_REQUEST_URL) {
    errors.push("No OIDC token is available. The workflow needs the id-token: write permission");
  }
  if (env.RUNNER_ENVIRONMENT !== "github-hosted") {
    errors.push(`Runner environment is "${env.RUNNER_ENVIRONMENT}". Trusted publishing needs a GitHub-hosted runner`);
  }
  if (env.GITHUB_REPOSITORY !== EXPECTED_REPOSITORY) {
    errors.push(`Repository is "${env.GITHUB_REPOSITORY}", not ${EXPECTED_REPOSITORY}`);
  }
  const workflowFile = env.GITHUB_WORKFLOW_REF?.split("@")[0].split("/").pop();
  if (workflowFile !== EXPECTED_WORKFLOW_FILE) {
    errors.push(
      `Workflow file is "${workflowFile}", but the trusted publisher is registered for ${EXPECTED_WORKFLOW_FILE}`
    );
  }
  if (env.GITHUB_EVENT_NAME === "workflow_dispatch") {
    warnings.push(
      "npm documents validation mismatches for workflow_dispatch runs. Only a real publish confirms this path"
    );
  }

  return { errors, warnings };
};
