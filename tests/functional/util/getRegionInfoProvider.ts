import { join } from "path";

export const getRegionInfoProvider = (fromService: string) => {
  const path = join("..", "..", "..", "clients", `client-${fromService}`, "dist-cjs", "endpoints");
  return require(path).defaultRegionInfoProvider;
};
