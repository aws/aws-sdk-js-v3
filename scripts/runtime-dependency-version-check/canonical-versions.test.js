const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const { findWorkspaceReferences, isCanonicalInternalVersion, isPreviewVersion } = require("./canonical-versions");

describe("isCanonicalInternalVersion", () => {
  it("requires the workspace protocol before publishing", () => {
    assert.equal(isCanonicalInternalVersion("workspace:3.1.0", "3.1.0", false), true);
    assert.equal(isCanonicalInternalVersion("workspace:^3.1.0", "3.1.0", false), true);
    assert.equal(isCanonicalInternalVersion("3.1.0", "3.1.0", false), false);
    assert.equal(isCanonicalInternalVersion("^3.1.0", "3.1.0", false), false);
  });

  it("forbids the workspace protocol when publishing", () => {
    assert.equal(isCanonicalInternalVersion("3.1.0", "3.1.0", true), true);
    assert.equal(isCanonicalInternalVersion("^3.1.0", "3.1.0", true), true);
    assert.equal(isCanonicalInternalVersion("workspace:3.1.0", "3.1.0", true), false);
    assert.equal(isCanonicalInternalVersion("workspace:^3.1.0", "3.1.0", true), false);
  });

  it("rejects a version that differs from the monorepo version in both modes", () => {
    assert.equal(isCanonicalInternalVersion("^3.0.9", "3.1.0", true), false);
    assert.equal(isCanonicalInternalVersion("workspace:^3.0.9", "3.1.0", false), false);
  });
});

describe("findWorkspaceReferences", () => {
  it("reports the workspace protocol in every dependency section", () => {
    const references = findWorkspaceReferences({
      name: "@aws-sdk/example",
      dependencies: { "@aws-sdk/a": "workspace:^1.0.0", "@smithy/b": "^2.0.0" },
      devDependencies: { "@aws-sdk/c": "workspace:*" },
      peerDependencies: { "@aws-sdk/d": "workspace:^1.0.0" },
      optionalDependencies: { "@aws-sdk/e": "workspace:^1.0.0" },
    });

    assert.deepEqual(references, [
      "@aws-sdk/example dependencies @aws-sdk/a: workspace:^1.0.0",
      "@aws-sdk/example devDependencies @aws-sdk/c: workspace:*",
      "@aws-sdk/example peerDependencies @aws-sdk/d: workspace:^1.0.0",
      "@aws-sdk/example optionalDependencies @aws-sdk/e: workspace:^1.0.0",
    ]);
  });

  it("reports nothing for a rewritten package", () => {
    assert.deepEqual(
      findWorkspaceReferences({ name: "@aws-sdk/example", dependencies: { "@aws-sdk/a": "^1.0.0" } }),
      []
    );
  });

  it("tolerates missing sections", () => {
    assert.deepEqual(findWorkspaceReferences({ name: "@aws-sdk/example" }), []);
  });
});

describe("isPreviewVersion", () => {
  it("accepts versions in the 0.x.y range", () => {
    for (const version of ["0.0.1", "0.2.9", "0.10.0", "0.1.0-alpha.1", "0.1.0+build.5"]) {
      assert.equal(isPreviewVersion(version), true, version);
    }
  });

  it("rejects versions outside the 0.x.y range", () => {
    for (const version of ["1.0.0", "3.1177.0", "10.0.0", "00.1.0", "0.1", "v0.1.0", "0.x.1", ""]) {
      assert.equal(isPreviewVersion(version), false, version);
    }
  });
});
