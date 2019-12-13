const { join, normalize } = require("path");
const { copySync, ensureDirSync } = require("fs-extra");
const handlebars = require("handlebars");
const {
  readdirSync,
  lstatSync,
  readFileSync,
  existsSync,
  writeFileSync
} = require("fs");

const CODE_GEN_OUTPUT_DIR = normalize(
  join(
    __dirname,
    "..",
    "..",
    "codegen",
    "sdk-codegen",
    "build",
    "smithyprojections",
    "sdk-codegen"
  )
);

/**
 * templates are a black list of files we don't want codegen artifact
 * to override in the clients folder
 */
const templates = readdirSync(join(__dirname, "templates"))
  .filter(name => /.sample$/.test(name))
  .reduce((accumulator, curr) => {
    const templatePath = join(__dirname, "templates", curr);
    const template = readFileSync(templatePath).toString();
    accumulator[curr.replace(/.sample$/, "")] = template;
    return accumulator;
  }, {});

async function copyToClients(clientsDir) {
  for (const modelName of readdirSync(CODE_GEN_OUTPUT_DIR)) {
    if (modelName === "source") continue;
    const artifactPath = join(
      CODE_GEN_OUTPUT_DIR,
      modelName,
      "typescript-codegen"
    );
    const packageManifestPath = join(artifactPath, "package.json");
    if (!existsSync(packageManifestPath)) {
      console.error(`${modelName} generates empty client, skip.`);
      continue;
    }

    const packageManifest = JSON.parse(
      readFileSync(packageManifestPath).toString()
    );
    const packageName = packageManifest.name;
    console.log(`copying ${packageName} from ${artifactPath} to ${clientsDir}`);
    const destPath = join(clientsDir, packageName.replace("@aws-sdk/", ""));

    //Data used to generate files from template
    const templateData = {
      year: new Date().getFullYear(),
      packageName
    };

    for (const packageSub of [
      ...readdirSync(artifactPath),
      ...Object.keys(templates)
    ]) {
      const packageSubPath = join(artifactPath, packageSub);
      const destSubPath = join(destPath, packageSub);

      if (Object.keys(templates).indexOf(packageSub) >= 0) {
        if (packageSub === "package.json") {
          /**
           * Copy package.json content in detail.
           * Basically merge the generated package.json and dest package.json
           * but prefer the values from dest when they contain the same key
           * */
          const destManifest = JSON.parse(
            existsSync(destSubPath)
              ? readFileSync(destSubPath).toString()
              : handlebars.compile(templates[packageSub])(templateData)
          );
          const updatedManifest = mergeManifest(packageManifest, destManifest);
          writeFileSync(destSubPath, JSON.stringify(updatedManifest, null, 2));
        } else if (!existsSync(destSubPath)) {
          //for files not yet exists and we have a template for it; generate from template
          const file = handlebars.compile(templates[packageSub])(templateData);
          writeFileSync(destSubPath, file);
        } else {
          //for files we have template but we already have a new version in clients folder, always prefer current one
          //PASS
        }
      } else {
        //For things not in codegen artifact black list, overwrite the existing ones.
        if (lstatSync(packageSubPath).isDirectory()) ensureDirSync(destSubPath);
        copySync(packageSubPath, destSubPath, { overwrite: true });
      }
    }
  }
}

const mergeManifest = (source, dest) => {
  return {
    ...source,
    ...dest,
    scripts: {
      ...source.scripts,
      ...dest.scripts
    },
    dependencies: {
      ...source.dependencies,
      ...dest.dependencies
    },
    devDependencies: {
      ...source.devDependencies,
      ...dest.devDependencies
    }
  };
};

module.exports = { copyToClients, CODE_GEN_OUTPUT_DIR };
