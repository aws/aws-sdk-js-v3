import { promises, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Biome, Distribution } from "@biomejs/js-api";
import walk from "../utils/walk.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function loadBiomeWithConfig(biomeConfigPath) {
  const biome = await Biome.create({
    distribution: Distribution.NODE,
  });
  const config = JSON.parse(readFileSync(biomeConfigPath, "utf-8"));
  const { projectKey } = biome.openProject(biomeConfigPath);
  biome.applyConfiguration(projectKey, config);
  return {
    biome,
    projectKey,
  };
}

const coreInstance = await loadBiomeWithConfig(join(__dirname, "..", "..", "biome.json"));
const codegenInstance = await loadBiomeWithConfig(join(__dirname, "..", "..", "biome.codegen.json"));

const skip = /browser-build|node_modules|dist-(es|cjs|types)|ruleset\.ts$|endpoints-ruleset\/temp/;
const match = /\.(m?js|ts|json)$/;

export async function checkDir(dir, { lint = false, codegen = false } = {}) {
  const concurrency = [];

  for await (const file of walk(dir, ["node_modules"])) {
    if (file.match(skip)) {
      continue;
    }
    if (file.match(match)) {
      concurrency.push(
        promises
          .readFile(file, "utf-8")
          .then((contents) => {
            const formatted = formatCode(contents, file, { codegen });
            if (formatted) {
              if (lint) {
                const linted = lintCode(formatted, file, { codegen });
                return promises.writeFile(file, linted, "utf-8");
              }
              return promises.writeFile(file, formatted, "utf-8");
            }
            return Promise.resolve();
          })
          .catch(console.error)
      );
    }
  }

  await Promise.all(concurrency);
}

export function formatCode(code, filePath, { codegen } = {}) {
  const { biome, projectKey } = codegen ? codegenInstance : coreInstance;
  const format = biome.formatContent(projectKey, code, {
    filePath,
  });
  return format.content;
}

export function lintCode(code, filePath, { codegen } = {}) {
  const { biome, projectKey } = codegen ? codegenInstance : coreInstance;
  const lint = biome.lintContent(projectKey, code, {
    filePath,
  });
  for (const diagnostic of lint.diagnostics) {
    if (diagnostic.severity === "error" || diagnostic.severity === "fatal") {
      const { category, severity, description, location } = diagnostic;
      console.log(`${category} - ${severity}\n\t${description}`);
      console.log(`\t\t${location.path.file.split("aws-sdk-js-v3")[1]}:${location.span.join(":")}`);
    }
  }
  return lint.content;
}
