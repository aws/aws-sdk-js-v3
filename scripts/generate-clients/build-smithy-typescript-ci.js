const path = require("path");

const { buildSmithyTypeScript } = require("./build-smithy-typescript");
const { SMITHY_TS_COMMIT } = require("./config");

(async () => {
  try {
    const SMITHY_TS_DIR = path.normalize(path.join("/tmp", `smithy-typescript-${SMITHY_TS_COMMIT}`));
    await buildSmithyTypeScript(SMITHY_TS_DIR, SMITHY_TS_COMMIT);
  } catch (error) {
    console.error(error);
    throw error;
  }
})();
