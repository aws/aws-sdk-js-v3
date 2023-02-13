import { Application, ParameterType } from "typedoc";

// import { SdkClientRenameProjectPlugin } from "./sdk-client-rename-project";
import { SdkClientTocPlugin } from "./sdk-client-toc-plugin";

export function load(app: Application) {
  // app.options.addDeclaration({
  //   name: "defaultServiceSuffix",
  //   help: "Default suffix to be used when renaming service project.",
  //   defaultValue: "AWS SDK for JavaScript v3",
  //   type: ParameterType.String,
  // });
  app.options.addDeclaration({
    name: "defaultGroup",
    help: "Default group to place categories as children",
    defaultValue: "SDK",
    type: ParameterType.String,
  });

  // new SdkClientRenameProjectPlugin(app.options, app.logger, app.renderer);

  new SdkClientTocPlugin(app.options, app.logger, app.renderer);
}
