const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT = path.join(__dirname, "..", "..");
// small: sagemaker-runtime
// goal: s3
const EXAMPLE_FILE = path.join(ROOT, "clients/client-s3/src/protocols/Aws_restXml.ts");

async function disperseProtocolFile(protocolFile = EXAMPLE_FILE) {
  const protocolFolder = protocolFile.replace(".ts", "");
  if (!fs.existsSync(protocolFolder)) {
    fs.mkdirSync(protocolFolder);
  }
  const indexFile = path.join(protocolFolder, "index.ts");

  const program = ts.createProgram([protocolFile], {});

  program.getTypeChecker();
  const source = program.getSourceFile(protocolFile);

  const syntaxToKind = (kind) => {
    return ts.SyntaxKind[kind];
  };

  if (!source.statements) {
    return;
  }

  const indexContents = [];
  const importExportSymbols = {};
  const dispersals = [];

  // categorize statements
  for (const statement of source.statements) {
    syntaxToKind(statement.kind);

    if (
      syntaxToKind(statement.kind) === "FirstStatement" &&
      /(export\s?)?const (de)?serialize/.test(statement.getFullText())
    ) {
      // is serde function.
      const functionName = statement.declarationList.declarations[0].symbol.escapedName;
      dispersals.push({
        functionName,
        statement,
      });
      importExportSymbols[functionName] = 1;
      console.log("dispersing", functionName);
    } else if (syntaxToKind(statement.kind) === "ImportDeclaration") {
      // is import statement.
      const exportNames = statement.importClause.namedBindings.elements.map((el) =>
        el.symbol.escapedName.replace("___", "__")
      );
      indexContents.push(statement);
      indexContents.push({
        getFullText() {
          return `export { ${exportNames.join(", ")} }`;
        },
      });
      console.log("re-exporting", exportNames);
      for (const name of exportNames) {
        importExportSymbols[name] = 1;
      }
    } else {
      // is some other statement.
      const symbolName = statement.declarationList?.declarations?.[0]?.symbol?.escapedName;
      console.log("other statement", syntaxToKind(statement.kind), symbolName);

      if (
        symbolName &&
        syntaxToKind(statement.kind) === "FirstStatement" &&
        new RegExp("const " + symbolName).test(statement.getFullText())
      ) {
        // is top level declaration that needs to be exported
        // for use in dispersals.
        indexContents.push({
          getFullText() {
            return statement.getFullText().replace(/(export )?(const)/, `export const`);
          },
        });
        importExportSymbols[symbolName] = 1;
      } else {
        indexContents.push(statement);
      }
    }
  }

  // write index file.
  fs.writeFileSync(
    indexFile,
    indexContents.map((c) => c.getFullText().replace(`from "../`, `from "../../`)).join("\n")
  );

  // write dispersed file with imports.
  for (const { functionName, statement } of dispersals) {
    const dispersalFile = path.join(protocolFolder, functionName + ".ts");
    const requiredImports = {};

    function traverseSymbols(node, depth = 0) {
      const name = node.getText?.();
      if (importExportSymbols.hasOwnProperty(name) && name !== functionName) {
        requiredImports[name] = 1;
      }
      ts.forEachChild(node, (child) => traverseSymbols(child, depth + 1));
    }
    traverseSymbols(statement);

    const indexedImports = Object.keys(requiredImports).filter((name) => !name.match(/(de)?serialize/));
    const adjacentImports = Object.keys(requiredImports).filter((name) => !!name.match(/(de)?serialize/));

    fs.writeFileSync(
      dispersalFile,
      `import { ${indexedImports.join(", ")} } from "./index"\n` +
        adjacentImports.map((n) => `import { ${n} } from "./${n}"`).join("\n") +
        "\n\n" +
        statement.getFullText().replace(new RegExp(`(export )?const ${functionName}`), `export const ${functionName}`)
    );
  }
}

// testing
disperseProtocolFile();
