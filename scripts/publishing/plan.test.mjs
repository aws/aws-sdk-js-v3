// @ts-check
import assert from "node:assert/strict";
import { afterEach, describe, it, mock } from "node:test";

import { findDependents, findMissingPackages } from "./plan.mjs";

/**
 * @param {string} name
 * @returns {import("./plan.mjs").WorkspacePackage}
 */
const pkg = (name) => ({ name, version: "1.0.0", dir: `/repo/${name}`, deps: [], repositoryUrl: undefined });

/**
 * @param {Record<string, number>} statuses status by requested URL.
 * @returns {string[]} the requested URLs, filled in as requests are made.
 */
const mockRegistry = (statuses) => {
  /** @type {string[]} */
  const requested = [];
  mock.method(globalThis, "fetch", async (/** @type {string} */ url) => {
    requested.push(url);
    return new Response(null, { status: statuses[url] ?? 500 });
  });
  return requested;
};

describe("findMissingPackages", () => {
  afterEach(() => mock.restoreAll());

  it("returns the packages that answer 404 for the latest tag, sorted by name", async () => {
    mockRegistry({
      "https://registry.npmjs.org/%40aws-sdk%2Fexisting/latest": 200,
      "https://registry.npmjs.org/%40aws-sdk%2Fnew-b/latest": 404,
      "https://registry.npmjs.org/%40aws-sdk%2Fnew-a/latest": 404,
    });

    const missing = await findMissingPackages([pkg("@aws-sdk/new-b"), pkg("@aws-sdk/existing"), pkg("@aws-sdk/new-a")]);

    assert.deepEqual(
      missing.map(({ name }) => name),
      ["@aws-sdk/new-a", "@aws-sdk/new-b"]
    );
  });

  it("returns nothing when the packages exist", async () => {
    mockRegistry({ "https://registry.npmjs.org/%40aws-sdk%2Fexisting/latest": 200 });

    assert.deepEqual(await findMissingPackages([pkg("@aws-sdk/existing")]), []);
  });

  it("makes no requests for an empty plan", async () => {
    const requested = mockRegistry({});

    assert.deepEqual(await findMissingPackages([]), []);
    assert.deepEqual(requested, []);
  });
});

describe("findDependents", () => {
  /**
   * @param {string} name
   * @param {string[]} deps
   * @returns {import("./plan.mjs").WorkspacePackage}
   */
  const withDeps = (name, deps) => ({ ...pkg(name), deps });

  it("returns direct and transitive dependents of the roots, sorted by name", () => {
    const root = withDeps("root", []);
    const dependents = findDependents(
      [root, withDeps("z-direct", ["root"]), withDeps("a-transitive", ["z-direct"]), withDeps("unrelated", ["other"])],
      [root]
    );

    assert.deepEqual(
      dependents.map(({ name }) => name),
      ["a-transitive", "z-direct"]
    );
  });

  it("does not return the roots themselves", () => {
    const a = withDeps("a", ["b"]);
    const b = withDeps("b", ["a"]);

    assert.deepEqual(findDependents([a, b], [a, b]), []);
  });

  it("returns nothing without roots", () => {
    assert.deepEqual(findDependents([withDeps("a", ["b"])], []), []);
  });
});
