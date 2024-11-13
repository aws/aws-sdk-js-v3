import init from "@wasm-fmt/biome_fmt";
import fs from "node:fs";
import path from "node:path";

import { runWasmFmtBiome } from "./run-wasm-fmt-biome.mjs";

export const prettifyCode = async (dir) => {
  await init();

  for (const subdirectory of fs.readdirSync(dir)) {
    const targets = [path.join(subdirectory, "typescript-codegen"), path.join(subdirectory, "typescript-ssdk-codegen")];

    for (const target of targets) {
      if (fs.existsSync(target) && fs.lstatSync(target).isDirectory()) {
        runWasmFmtBiome(target);
      }
    }
  }
};
