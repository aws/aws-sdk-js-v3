import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import semver from "semver";

import { spawnProcessReturnValue } from "../../utils/spawn-process.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..", "..");

export const manifestPath = path.join(__dirname, "..", "tmp", "custom-manifest.json");
if (!fs.existsSync(manifestPath)) {
  fs.writeFileSync(manifestPath, "{}\n");
}

/**
 * Structural example of the entries
 * used by functions in this file.
 */
const sampleChangelog = [
  {
    type: "feat" || "fix" || "chore" || "docs" || "test",
    module: "clients" || "scripts" || "core/protocols" || "etc.",
    message: "commit msg other than type and module",
    commit: "git-commit-hash",
    date: "YYYY-MM-DD",
  },
];

void sampleChangelog;

/**
 * Format git log:
 * git log --pretty=format:'{"commit":"%H","date":"%ad","message":"%s"}' --max-count=10 --date=format:'%Y-%m-%d'
 *
 * Commit log for folder:
 * git log --pretty=format:'{"commit":"%H","date":"%ad","message":"%s"},' --date=format:'%Y-%m-%d' v3.965.0..HEAD -- ./packages/core
 *
 * Last tag:
 * git describe --tags --abbrev=0
 *
 * @param since - tag or hash of commit used as start of the change. Defaults to last tag.
 * @param packagePath - path to package to generate changelog for.
 * @returns changelog entries.
 */
export async function generateChangelog(packagePath, since) {
  const pkg_json = path.join(packagePath, "package.json");
  const changelog_md = path.join(packagePath, "CHANGELOG.md");

  if (since === undefined) {
    const [cmd, args] = ["git", ["describe", "--tags", "--abbrev=0"]];
    since = (
      await spawnProcessReturnValue(cmd, args, {
        cwd: root,
      })
    ).trim();
  }

  const [cmd, args] = [
    "git",
    [
      "log",
      `--pretty=format:'{"commit":"%H","date":"%ad","message":"%s"},'`,
      "--date=format:%Y-%m-%d",
      `${since}..HEAD`,
      "--",
      packagePath,
    ],
  ];
  const rows = await spawnProcessReturnValue(cmd, args, { cwd: root });
  const processedRows = rows
    .split("\n")
    .map((r) => r.trim())
    .map((r) => r.replaceAll(/(^'|'$)/g, ""))
    .join("\n");

  const changelog = JSON.parse(`[${processedRows.slice(0, -1)}]`);
  changelog.forEach(parseMessage);

  let newVersion;
  const minorBump = changelog.some((e) => e.type === "feat");
  if (minorBump) {
    newVersion = writeNewVersion("minor", pkg_json);
  }
  const patchBump = !minorBump && changelog.length > 0;
  if (patchBump) {
    newVersion = writeNewVersion("patch", pkg_json);
  }
  if (minorBump || patchBump) {
    const md = createChangelogEntryMarkdown(changelog, newVersion);
    if (!fs.existsSync(changelog_md)) {
      fs.writeFileSync(changelog_md, `# Change Log\n\n`, "utf-8");
    }
    const changelogContents = fs.readFileSync(changelog_md, "utf-8").split("\n");

    const sliceIndex = changelogContents
      .slice(1)
      .indexOf(changelogContents.slice(1).find((line) => line.startsWith("#")));

    const newContents = [
      ...changelogContents.slice(0, sliceIndex),
      "\n",
      md,
      "\n",
      ...changelogContents.slice(sliceIndex),
    ].join("\n");
    fs.writeFileSync(changelog_md, newContents, "utf-8");

    writeToManifest(JSON.parse(fs.readFileSync(pkg_json, "utf-8")));
  }
}

/**
 * @param pkg - object version of the package.json file.
 */
function writeToManifest(pkg) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  manifest[pkg.name] = {
    name: pkg.name,
    version: pkg.version,
    private: !!pkg.private,
    location: path.join("packages-internal", pkg.name.replace("@aws-sdk/", "")),
  };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
}

/**
 * Format reference:
 * ```
 * # {version} (YYYY-MM-DD)
 * ### {type=Bug Fixes,Features,}
 * * **modulename:** {commit msg} ([#NNNN](https://github.com/aws/aws-sdk-js-v3/issues/NNNN)) ([SHORT_HASH](https://github.com/aws/aws-sdk-js-v3/commit/HASH))
 * ```
 *
 * @param entries - changelog entries.
 * @param newVersion - new version header.
 * @returns changelog markdown;
 */
function createChangelogEntryMarkdown(entries, newVersion) {
  const features = [];
  const fixes = [];
  const tests = [];
  const docs = [];
  const chores = [];
  const misc = [];

  for (const entry of entries) {
    if (entry.type === "feat") {
      features.push(entry);
    } else if (entry.type === "fix") {
      fixes.push(entry);
    } else if (entry.type === "test") {
      tests.push(entry);
    } else if (entry.type === "docs") {
      docs.push(entry);
    } else if (entry.type === "chore") {
      chores.push(entry);
    } else if (entry.type !== undefined) {
      misc.push(entry);
    }
  }

  const line = (entry) => {
    return `*${entry.module ? ` **${entry.module}:**` : ``} ${entry.message.replace(
      /\(#(\d+)\)/,
      `([#$1](https://github.com/aws/aws-sdk-js-v3/issues/$1))`
    )} ([${entry.commit.slice(0, 7)}](https://github.com/aws/aws-sdk-js-v3/commit/${entry.commit}))`;
  };

  return [
    `# ${newVersion} (${entries[0].date})`,
    ...(features.length ? ["### Features", ...features.map(line)] : []),
    ...(fixes.length ? ["### Bug Fixes", ...fixes.map(line)] : []),
    ...(docs.length ? ["### Docs", ...docs.map(line)] : []),
    ...(chores.length ? ["### Chores", ...chores.map(line)] : []),
    ...(tests.length ? ["### Tests", ...tests.map(line)] : []),
    ...(misc.length ? ["### Misc", ...misc.map(line)] : []),
  ].join("\n");
}

/**
 * Increments and writes new version to package.json.
 */
function writeNewVersion(increment, pkgJsonPath) {
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
  pkgJson.version = semver.inc(pkgJson.version, increment);
  if (increment === "minor") {
    pkgJson.version = [semver.major(pkgJson.version), semver.minor(pkgJson.version), 0].join(".");
  }
  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + "\n", "utf-8");
  return pkgJson.version;
}

/**
 * Parses out the `type(module): message` prefixes of commit messages.
 */
function parseMessage(entry) {
  const commitMsg = entry.message;
  const [, type, module, comment] = commitMsg.match(/([\w-]+)(\([\w-]+\))?:\s?(.*?)$/) || [];
  if (type) {
    entry.type = type;
    if (module) {
      entry.module = module.replaceAll(/(^\(|\)$)/g, "");
    }
    entry.message = comment;
  }
}
