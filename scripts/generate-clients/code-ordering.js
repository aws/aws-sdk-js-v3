const fs = require("fs");
const path = require("path");
const ts = require("typescript");

module.exports = {
  /**
   * Takes the filterSensitiveLog functions that were generated alongside
   * each model and moves them to the bottom of the file to avoid
   * distracting readers with internal components.
   *
   * @param {string} dir - to look for model files.
   * @returns {void}
   */
  codeOrdering: async (dir) => {
    for await (const file of walk(dir)) {
      if (/src\/models\/models_(\d+)\.ts$/.test(file)) {
        const reordered = transformFile(file);
        fs.writeFileSync(file, reordered);
      }
    }
  },
};

/**
 * Traverse folder.
 */
async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

/**
 * @param {string} file - file system location.
 * @returns {string} reordered file contents as string.
 */
function transformFile(file) {
  const program = ts.createProgram([file], {});

  program.getTypeChecker();

  const source = program.getSourceFile(file);

  const syntaxToKind = (kind) => {
    return ts.SyntaxKind[kind];
  };

  const interfaceStatements = [];
  const filteringStatements = [];

  if (!source.statements) {
    return fs.readFileSync(file, "utf-8");
  }

  source.statements.forEach((statement) => {
    syntaxToKind(statement.kind);

    if (
      syntaxToKind(statement.kind) === "FirstStatement" &&
      /export const (\w+)FilterSensitiveLog/.test(statement.getFullText())
    ) {
      filteringStatements.push(statement);
    } else {
      interfaceStatements.push(statement);
    }
  });

  return [...interfaceStatements, ...filteringStatements].map((statement) => statement.getFullText()).join("\n");
}
