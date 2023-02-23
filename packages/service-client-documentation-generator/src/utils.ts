import { sep } from "path";
import { Reflection } from "typedoc";

export const isClientModel = (model: Reflection | undefined) =>
  model?.sources?.[0]?.fullFileName.includes(`${sep}clients${sep}`);
