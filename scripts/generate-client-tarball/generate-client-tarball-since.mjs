#!/usr/bin/env node

/**
 * @example
 * ```
 * yarn generate:client:tarball:since <commit-hash>
 * ```
 *
 * Finds all clients that have changed since the given commit
 * and runs `yarn generate:client:tarball` for each one.
 */

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..", "..");
const commitHash = process.argv[2];

if (!commitHash) {
  console.error("Usage: yarn generate:client:tarball:since <commit-hash>");
  process.exit(1);
}

function getChangedClients(sinceCommit) {
  const diffOutput = execSync(`git log ${sinceCommit}..HEAD --format=%s`, {
    cwd: rootDir,
    encoding: "utf-8",
  }).trim();

  if (!diffOutput) {
    console.info(`No output for: git log ${sinceCommit}..HEAD --format=%s`);
    return [];
  }

  const clientNames = new Set();

  // the "client-s3" part of a commit message like
  // feat(client-s3): add some feature.
  const regex = /^\w+\((client-[\w-]+)\):/;

  for (const message of diffOutput.split("\n")) {
    const match = message.match(regex);

    if (match?.[1]) {
      console.info("Matched", match[1], "from commit message:\n\t", message);
      clientNames.add(match[1]);
    } else {
      console.info("No client match in msg:\n\t", message);
    }
  }

  return [...clientNames];
}

const changedClients = getChangedClients(commitHash).filter((name) => existsSync(join(rootDir, "clients", name)));

if (changedClients.length === 0) {
  process.exit(0);
}

const failed = [];

for (const clientName of changedClients) {
  try {
    execSync(`yarn generate:client:tarball ${clientName}`, {
      cwd: rootDir,
      stdio: "inherit",
    });
  } catch (e) {
    console.error(`Failed to generate tarball for ${clientName}`, e);
    failed.push(clientName);
  }
}

if (failed.length > 0) {
  process.exit(1);
}
