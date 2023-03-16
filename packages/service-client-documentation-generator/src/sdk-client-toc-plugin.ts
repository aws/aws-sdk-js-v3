import { dirname } from "path";
import {
  BindOption,
  ContainerReflection,
  Context,
  Converter,
  DeclarationReflection,
  Logger,
  Options,
  ProjectReflection,
  ReferenceType,
  ReflectionCategory,
  ReflectionFlag,
  ReflectionGroup,
  ReflectionKind,
  Renderer,
} from "typedoc";

import { isClientModel } from "./utils";

/**
 * Group the ToC for easier observability.
 */
export class SdkClientTocPlugin {
  private clientDir?: string;

  @BindOption("defaultGroup")
  readonly defaultGroup: string;

  @BindOption("defaultCategory")
  readonly defaultCategory: string;

  constructor(public readonly options: Options, public readonly logger: Logger, private readonly renderer: Renderer) {
    this.renderer.application.converter.on(Converter.EVENT_END, this.changeLinksToLowerCase);
    this.renderer.application.converter.on(Converter.EVENT_RESOLVE_END, this.onEndResolve);
  }

  private changeLinksToLowerCase = (context: Context) => {
    Object.keys(context.project.reflections).forEach((reflectionName) => {
      context.project.reflections[reflectionName]._alias = context.project.reflections[reflectionName]
        .getAlias()
        .toLowerCase();
    });
  };

  private onEndResolve = (context: Context) => {
    if (!this.clientDir) this.clientDir = this.loadClientDir(context.project);
    for (const model of Object.values(context.project.reflections)) {
      const isEffectiveParent = (model instanceof ContainerReflection && model.children?.length) || model.isProject();
      if (!isEffectiveParent || model.kindOf(ReflectionKind.SomeModule)) {
        return;
      }

      if (!model.groups) {
        model.groups = [];
      }

      let group = model.groups.find((value) => value.title === this.defaultGroup);

      if (!group) {
        group = new ReflectionGroup(this.defaultGroup);
        model.groups.push(group);
      }

      group.categories = this.defineCategories(group, model.children);

      const modulesIndex = model.groups.findIndex((value) => value.title === "Modules");
      // Removing `Modules` group from array
      if (modulesIndex >= 0) {
        model.groups.splice(modulesIndex, 1);
      }
    }
  };

  // Confirm declaration comes from the same folder as the client class
  private belongsToClientPackage(model: DeclarationReflection): boolean {
    return this.clientDir && model.sources?.[0].fullFileName.indexOf(this.clientDir) === 0;
  }

  private isClient(model: DeclarationReflection): boolean {
    const { extendedTypes = [] } = model;
    return (
      model.kindOf(ReflectionKind.Class) &&
      model.getFullName() !== "Client" && // Exclude the Smithy Client class.
      (model.name.endsWith("Client") /* Modular client like S3Client */ ||
        extendedTypes.filter((reference) => (reference as ReferenceType).name === `${model.name}Client`).length > 0) &&
      /* Filter out other client classes that not sourced from the same directory as current client. e.g. STS, SSO */
      this.belongsToClientPackage(model)
    );
  }

  private isCommand(model: DeclarationReflection): boolean {
    return (
      model.kindOf(ReflectionKind.Class) &&
      model.name.endsWith("Command") &&
      // model.children?.some((child) => child.name === "resolveMiddleware") &&
      this.belongsToClientPackage(model)
    );
  }

  private isPaginator(model: DeclarationReflection): boolean {
    return (
      model.name.startsWith("paginate") && model.kindOf(ReflectionKind.Function) && this.belongsToClientPackage(model)
    );
  }

  private isInputOrOutput(model: DeclarationReflection): boolean {
    return (
      model.kindOf(ReflectionKind.Interface) &&
      (model.name.endsWith("CommandInput") || model.name.endsWith("CommandOutput")) &&
      this.belongsToClientPackage(model)
    );
  }

  private isWaiter(model: DeclarationReflection): boolean {
    return (
      model.name.startsWith("waitFor") && model.kindOf(ReflectionKind.Function) && this.belongsToClientPackage(model)
    );
  }
  /**
   * Define navigation categories in Client, Commands, Paginators and Waiters sections. It will update the
   * supplied categories array.
   *
   * @param group   The parent group where the categories will be placed under.
   * @param reflections   The reflections that should be categorized.
   */
  private defineCategories(group: ReflectionGroup, reflections: DeclarationReflection[]): ReflectionCategory[] {
    const categories = group.categories || [];
    if (this.isCategorized(categories)) return group.categories;

    const clients = new ReflectionCategory("Clients");
    const commands = new ReflectionCategory("Commands");
    const paginators = new ReflectionCategory("Paginators");
    const waiters = new ReflectionCategory("Waiters");
    reflections.forEach((reflection: DeclarationReflection) => {
      if (reflection.kindOf(ReflectionKind.SomeModule)) {
        return;
      }

      if (this.isClient(reflection)) {
        clients.children.push(reflection);
        reflection.flags.setFlag(ReflectionFlag.Public, false);
      } else if (this.isCommand(reflection)) {
        commands.children.push(reflection);
        reflection.flags.setFlag(ReflectionFlag.Protected, true);
      } else if (this.isPaginator(reflection)) {
        paginators.children.push(reflection);
        reflection.flags.setFlag(ReflectionFlag.Protected, true);
      } else if (this.isInputOrOutput(reflection)) {
        commands.children.push(reflection);
        reflection.flags.setFlag(ReflectionFlag.Protected, true);
      } else if (this.isWaiter(reflection)) {
        waiters.children.push(reflection);
        reflection.flags.setFlag(ReflectionFlag.Protected, true);
      }
    });
    // Group commands and input/output interface of each command.
    commands.children.sort((childA, childB) => childA.name.localeCompare(childB.name));

    categories.push(...[clients, commands, paginators, waiters]);
    return categories;
  }

  private isCategorized(categories: ReflectionCategory[]): boolean {
    const childrenNames = categories.map((child) => child.title);
    return (
      childrenNames.includes("Clients") &&
      childrenNames.includes("Commands") &&
      childrenNames.includes("Paginators") &&
      childrenNames.includes("Waiters")
    );
  }

  private loadClientDir(project: ProjectReflection) {
    const children = Object.values(project.reflections).filter(isClientModel);
    const fullFileName = children.find((child) => child.sources[0].fileName.endsWith("Client.ts")).sources[0]
      .fullFileName;
    return dirname(dirname(fullFileName));
  }
}
