const DEPENDENCY_SECTIONS = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"];

/**
 * Before publishing, update:versions:current has replaced the workspace protocol with real versions.
 *
 * @param {string} version declared version of an @aws-sdk/* dependency.
 * @param {string} canonicalVersion version of that package in the monorepo.
 * @param {boolean} prepublish
 * @returns {boolean}
 */
const isCanonicalInternalVersion = (version, canonicalVersion, prepublish) =>
  prepublish
    ? version === canonicalVersion || version === `^${canonicalVersion}`
    : version === `workspace:${canonicalVersion}` || version === `workspace:^${canonicalVersion}`;

/**
 * npm publish uploads package.json as is, and consumers cannot install a workspace: range.
 *
 * @param {{ name: string } & Record<string, any>} pkgJson
 * @returns {string[]} one entry per dependency that still uses the workspace protocol.
 */
const findWorkspaceReferences = (pkgJson) =>
  DEPENDENCY_SECTIONS.flatMap((section) =>
    Object.entries(pkgJson[section] ?? {})
      .filter(([, version]) => String(version).startsWith("workspace:"))
      .map(([name, version]) => `${pkgJson.name} ${section} ${name}: ${version}`)
  );

/**
 * Packages in preview/ are not stable, so they stay on a 0.x.y version.
 *
 * @param {string} version
 * @returns {boolean}
 */
const isPreviewVersion = (version) => /^0\.\d+\.\d+(?:[-+][0-9A-Za-z.+-]*)?$/.test(version);

module.exports = { isCanonicalInternalVersion, findWorkspaceReferences, isPreviewVersion };
