const Metro = require("metro");
const path = require("node:path");

const root = path.resolve(__dirname);

async function bundle() {
  const config = await Metro.loadConfig({ cwd: root });
  config.projectRoot = root;
  config.watchFolders = [path.resolve(root, "../..")];
  config.resolver = {
    ...config.resolver,
    sourceExts: ["ts", "tsx", "js", "jsx", "json"],
    resolverMainFields: ["react-native", "browser", "module", "main"],
    unstable_enablePackageExports: true,
    unstable_conditionNames: ["react-native", "browser", "import", "require"],
    nodeModulesPaths: [path.join(root, "node_modules"), path.resolve(root, "../../node_modules")],
  };
  await Metro.runBuild(config, {
    entry: "src/sample-app.ts",
    out: path.join(root, "dist/metro/bundle.js"),
    platform: "ios",
    dev: false,
    minify: false,
  });
}

bundle()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
