const fs = require("fs");
const path = require("path");
const walk = require("../utils/walk");

const paths = [path.join(__dirname, "..", "..", "packages", "core")];

(async () => {
  for (const folder of paths) {
    const pkgJson = require(path.join(folder, "package.json"));

    if (pkgJson.scripts.test) {
      if (pkgJson.scripts.test.includes("jest")) {
        console.log("setting unit test to vitest");

        pkgJson.scripts.test = "vitest run";
        fs.rmSync(path.join(folder, "jest.config.js"));
        fs.writeFileSync(
          path.join(folder, "vitest.config.ts"),
          `import { defineConfig } from "vitest/config";

  export default defineConfig({
    test: {
      exclude: ["**/*.{integ,e2e,browser}.spec.{ts,js}"],
      include: ["**/*.spec.{ts,js}"],
      environment: "node",
    },
  });
  `
        );
      }
    }

    for (const testType of ["integ", "e2e"]) {
      const script = testType === "integ" ? "integration" : testType;
      if (pkgJson.scripts[`test:${script}`]) {
        if (pkgJson.scripts[`test:${script}`].includes("jest")) {
          console.log(`setting ${testType} test to vitest`);

          pkgJson.scripts[`test:${script}`] = `vitest run -c vitest.config.${testType}.ts`;
          fs.rmSync(path.join(folder, `jest.config.${testType}.js`));
          fs.writeFileSync(
            path.join(folder, `vitest.config.${testType}.ts`),
            `import { defineConfig } from "vitest/config";

    export default defineConfig({
      test: {
        include: ["**/*.${testType}.spec.{ts,js}"],
        environment: "node",
      },
    });
    `
          );
        }
      }
    }

    fs.writeFileSync(path.join(folder, "package.json"), JSON.stringify(pkgJson, null, 2) + "\n");

    for await (const file of walk(path.join(folder))) {
      if (file.endsWith(".spec.ts")) {
        let contents = fs.readFileSync(file, "utf-8");

        const namespaces = {
          jest: "vi",
        };

        const functionCalls = {
          beforeEach: "beforeEach",
          beforeAll: "beforeAll",
          afterEach: "afterEach",
          afterAll: "afterAll",
          describe: "describe",
          expect: "expect",
        };

        const imports = ["test as it"];

        contents = contents.replace(/\((\w+) as (jest|vi).Mock\)/g, "vi.mocked($1)");

        for (const [old, _new] of Object.entries(namespaces)) {
          if (contents.includes(old + ".") || contents.includes(_new + ".")) {
            imports.push(_new);
            contents = contents.replace(new RegExp(old + "\\.", "g"), _new + ".");
          }
        }

        for (const [old, _new] of Object.entries(functionCalls)) {
          if (contents.includes(old + "(") || contents.includes(_new + "(")) {
            if (!_new.includes(".")) {
              imports.push(_new);
            }
          }
        }

        contents = contents.replace(/import {(.*?)} from "(vitest|vtestest)";/g, "");
        contents = `import { ${imports.join(", ")} } from "vitest";\n\n` + contents;

        fs.writeFileSync(file, contents);
      }
    }
  }
})();
