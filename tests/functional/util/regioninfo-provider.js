const { join } = require("path");
module.exports.getRegionInfoProvider = (fromService) => {
  const path = join("..", "..", "..", "clients", `client-${fromService}`, "dist", "cjs", "endpoints");
  return require(path).defaultRegionInfoProvider;
};
