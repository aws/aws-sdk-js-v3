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
const rootDir = join(__dirname, "..");
const commitHash = process.argv[2];

if (!commitHash) {
  console.error("Usage: yarn generate:client:tarball:since <commit-hash>");
  process.exit(1);
}

function getChangedClients(sinceCommit) {
  const diffOutput = execSync(`git diff --name-only ${sinceCommit}..HEAD`, {
    cwd: rootDir,
    encoding: "utf-8",
  }).trim();

  if (!diffOutput) return [];

  const clientNames = new Set();
  for (const file of diffOutput.split("\n")) {
    const match = file.match(/^clients\/(client-[^/]+)\//);
    if (match) clientNames.add(match[1]);
  }
  return [...clientNames];
}

const changedClients = getChangedClients(commitHash).filter((name) => existsSync(join(rootDir, "clients", name)));

if (changedClients.length === 0) process.exit(0);

const failed = [];

for (const clientName of changedClients) {
  try {
    execSync(`yarn generate:client:tarball ${clientName}`, {
      cwd: rootDir,
      stdio: "inherit",
    });
  } catch {
    failed.push(clientName);
  }
}

if (failed.length > 0) process.exit(1);
