import { serviceIdFromMetadata } from "../../serviceIdFromMetadata";
import { Configuration } from "./Configuration";
import { IMPORTS } from "../../internalImports";
import { FullPackageImport } from "./FullPackageImport";
import { Import as DestructuringImport } from "../Import";
import { packageNameToVariable } from "../../packageNameToVariable";
import { customizationFromMiddleware } from "../helpers/customizationFromMiddleware";
import { dependenciesFromCustomization } from "../helpers/dependenciesFromCustomization";
import { IndentedSection } from "../IndentedSection";
import { streamType } from "../../streamType";
import {
  ConfigurationDefinition,
  CustomizationDefinition,
  Import,
  RuntimeTarget,
  TreeModel
} from "@aws-sdk/build-types";

export class Client {
  public readonly prefix: string;

  constructor(
    private readonly model: TreeModel,
    private readonly target: RuntimeTarget,
    private readonly customizations: Array<CustomizationDefinition> = []
  ) {
    this.prefix = serviceIdFromMetadata(this.model.metadata).replace(/\s/g, "");
  }

  get className(): string {
    return `${this.prefix}Client`;
  }

  get dependencies(): Array<Import> {
    const dependencies = [
      IMPORTS.types,
      IMPORTS["config-resolver"],
      IMPORTS["middleware-stack"]
    ];

    for (const customization of this.customizations) {
      dependencies.push(
        ...dependenciesFromCustomization(customization, this.target)
      );
    }

    return dependencies;
  }

  toString(): string {
    const typesPackage = packageNameToVariable("@aws-sdk/types");
    const configurationImports = new DestructuringImport(
      `./${this.prefix}Configuration`,
      `${this.prefix}Configuration`,
      `${this.prefix}ResolvedConfiguration`,
      `configurationProperties`
    );
    const commandGenerics = `InputTypesUnion, InputType, OutputTypesUnion, OutputType, ${
      this.prefix
      }ResolvedConfiguration, ${streamType(this.target)}`;

    return `${this.imports()}
${configurationImports.toString()}
import {InputTypesUnion} from './types/InputTypesUnion';
import {OutputTypesUnion} from './types/OutputTypesUnion';
import {clientVersion, ServiceMetadata} from './model/ServiceMetadata';

export class ${
      this.className
      } implements ${typesPackage}.AWSClient<InputTypesUnion, OutputTypesUnion, ${streamType(
        this.target
      )}> {
    readonly config: ${this.prefix}ResolvedConfiguration;

    readonly middlewareStack = new ${packageNameToVariable(
        "@aws-sdk/middleware-stack"
      )}.MiddlewareStack<
        InputTypesUnion,
        OutputTypesUnion,
        ${streamType(this.target)}
    >();

    constructor(configuration: ${this.prefix}Configuration) {
        this.config = ${packageNameToVariable(
        "@aws-sdk/config-resolver"
      )}.resolveConfiguration(
            configuration,
            configurationProperties,
            this.middlewareStack
        );
${this.customizations
        .filter(definition => definition.type === "Middleware")
        .map((definition: any) => {
          return new IndentedSection(customizationFromMiddleware(definition), 2);
        })
        .join("\n")}
    }

    destroy(): void {
        if (!this.config._user_injected_http_handler) {
            this.config.httpHandler.destroy();
        }
    }

    /**
     * This will need to be revised when the command interface lands.
     */
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(command: ${typesPackage}.Command<${commandGenerics}>): Promise<OutputType>;
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(
        command: ${typesPackage}.Command<${commandGenerics}>,
        cb: (err: any, data?: OutputType) => void
    ): void;
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(
        command: ${typesPackage}.Command<${commandGenerics}>,
        cb?: (err: any, data?: OutputType) => void
    ): Promise<OutputType>|void {
        const handler = command.resolveMiddleware(
            this.middlewareStack,
            this.config
        );
        if (cb) {
            handler(command).then(
                (result: OutputType)  => cb(null, result),
                (err: any) => cb(err)
            ).catch(
                // prevent any errors thrown in the callback from triggering an
                // unhandled promise rejection
                () => {}
            );
        } else {
            return handler(command);
        }
    }
}
`;
  }

  private imports(): string {
    const packages = new Set<string>();
    if (this.target === "node") {
      packages.add("stream");
    }
    for (const dependency of this.dependencies) {
      packages.add(dependency.package);
    }

    return [...packages]
      .sort()
      .map(packageName => new FullPackageImport(packageName))
      .join("\n");
  }
}
