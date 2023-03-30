import { Application, ParameterType } from "typedoc";

import { SdkClientTocPlugin } from "./sdk-client-toc-plugin";

/**
 * @internal
 */
export function load(app: Application) {
  app.options.addDeclaration({
    name: "defaultGroup",
    help: "Default group to place categories as children",
    defaultValue: "SDK",
    type: ParameterType.String,
  });

  new SdkClientTocPlugin(app.options, app.logger, app.renderer);
}
