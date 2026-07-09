/**
 * Worker thread for the TypeScript compatibility runner.
 *
 * Installs a single TypeScript version into an isolated directory and runs it
 * against the fixture tsconfig, then reports the result back to the main thread.
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { parentPort, workerData } from "node:worker_threads";

const { root, job } = workerData;
const { version, tscArgs = [] } = job;

/**
 * Locate the tsc executable inside an isolated TypeScript install.
 * @param {string} installDir
 * @returns {string | undefined}
 */
function findTsc(installDir) {
  const candidates = [
    path.join(installDir, "node_modules", ".bin", process.platform === "win32" ? "tsc.cmd" : "tsc"),
    path.join(installDir, "node_modules", "typescript", "bin", "tsc"),
  ];
  return candidates.find((c) => existsSync(c));
}

function run() {
  const installDir = path.join(root, ".tmp", `ts-${version}`);
  mkdirSync(installDir, { recursive: true });
  // A minimal manifest keeps npm from walking up to the workspace root.
  writeFileSync(path.join(installDir, "package.json"), JSON.stringify({ private: true, name: `ts-${version}` }));

  const install = spawnSync(
    "npm",
    ["install", `typescript@${version}`, "--no-save", "--no-package-lock", "--no-audit", "--no-fund"],
    { cwd: installDir, encoding: "utf8", maxBuffer: 32 * 1024 * 1024 }
  );
  if (install.status !== 0) {
    return {
      version,
      ok: false,
      output: `Failed to install typescript@${version}:\n${install.stdout || ""}${install.stderr || ""}`,
    };
  }

  const tsc = findTsc(installDir);
  if (!tsc) {
    return { version, ok: false, output: `Could not locate tsc binary for typescript@${version}.` };
  }

  // Run from the fixture root so module resolution finds the installed clients
  // in ./node_modules, while the compiler itself is the isolated version.
  // Per-version tscArgs override tsconfig.json for options that changed.
  const compile = spawnSync(process.execPath, [tsc, "-p", "tsconfig.json", "--pretty", "false", ...tscArgs], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    timeout: 300000,
  });

  const output = `${compile.stdout || ""}${compile.stderr || ""}`;
  return { version, ok: compile.status === 0, output };
}

try {
  parentPort.postMessage(run());
} catch (e) {
  parentPort.postMessage({ version, ok: false, output: String(e && e.stack ? e.stack : e) });
}
