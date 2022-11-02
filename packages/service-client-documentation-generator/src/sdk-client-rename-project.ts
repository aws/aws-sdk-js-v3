import { readFileSync } from "fs";
import path from "path";
import { BindOption, Context, Converter, Logger, Options, Reflection, Renderer, RendererEvent } from "typedoc";

import { isClientModel } from "./utils";

/**
 * Correct the package name in the navigator.
 */
export class SdkClientRenameProjectPlugin {
  private projectName: string | undefined = undefined;

  @BindOption("defaultServiceSuffix")
  readonly defaultServiceSuffix: string;

  constructor(public readonly options: Options, public readonly logger: Logger, private readonly renderer: Renderer) {
    this.renderer.application.converter.on(Converter.EVENT_CREATE_DECLARATION, this.onCreateDeclaration);
    this.renderer.on(Renderer.EVENT_BEGIN, this.onRendererBegin);
  }

  /**
   * Triggered when the converter creates the declaration of a project.
   *
   * @param context  The context object describing the current state the converter is in.
   */
  private onCreateDeclaration = (_context: Context, reflection: Reflection) => {
    const defaultCommentTag = reflection.comment?.getTag("@default") || reflection.comment?.getTag("@defaultValue");
    if (isClientModel(reflection) && reflection.name === "serviceId" && defaultCommentTag) {
      const defaultValue = defaultCommentTag.content[0]?.text?.replace(/"/g, "");
      if (defaultValue && !this.projectName) {
        this.projectName = `${defaultValue} Client - ${this.defaultServiceSuffix}`;
      }
    }
  };

  /**
   * Triggered when the renderer is starting.
   *
   * @param event  The project the renderer is currently processing.
   */
  private onRendererBegin = (event: RendererEvent) => {
    if (!this.projectName) {
      const children = Object.values(event.project.reflections).filter(isClientModel);
      const clientDirectory = path.dirname(path.dirname(children[0].sources[0].fullFileName));
      const metadataPath = path.join(clientDirectory, "package.json");
      const { name } = JSON.parse(readFileSync(metadataPath).toString());
      this.projectName = name;
    }
    event.project.name = this.projectName;
  };
}
