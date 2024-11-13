import init, { format } from "@wasm-fmt/biome_fmt";
import { promises } from "node:fs";

import walk from "../utils/walk.js";

await init();

export const runWasmFmtBiome = async (dir) => {
  for await (const file of walk(dir)) {
    if (file.endsWith(".ts") || file.endsWith(".js")) {
      if (file.endsWith("ruleset.ts")) {
        continue;
      }
      promises.readFile(file, "utf-8").then((contents) => {
        promises.writeFile(
          file,
          format(contents, file, {
            indent_style: "space",
            indent_width: 2,
            line_width: 120,
            line_ending: "lf",
            quote_properties: "as-needed",
            arrow_parentheses: "always",
            semicolons: "always",
            bracket_spacing: true,
            bracket_same_line: false,
            quote_style: "double",
            trailing_comma: "all",
          }),
          "utf-8"
        );
      });
    }
  }
};
