import {serviceIdFromMetadata} from './serviceIdFromMetadata';
import {Configuration} from './Configuration';
import { IMPORTS } from './internalImports';
import {customizationsFromModel} from './customizationsFromModel';
import {FullPackageImport} from './FullPackageImport';
import {Import as DestructuringImport} from '../Import';
import {packageNameToVariable} from './packageNameToVariable';
import {
    ConfigurationDefinition,
    CustomizationDefinition,
    Import,
    RuntimeTarget,
    TreeModel,
} from "@aws/build-types";

export class Client {
    public readonly prefix: string;

    constructor(
        private readonly model: TreeModel,
        private readonly target: RuntimeTarget,
        private readonly customizations: Array<CustomizationDefinition> = []
    ) {
        this.prefix = serviceIdFromMetadata(this.model.metadata)
            .replace(/\s/g, '');
        this.customizations =
            customizationsFromModel(this.model, this.streamType())
                .concat(customizations);
    }

    get className(): string {
        return `${this.prefix}Client`;
    }

    get dependencies(): Array<Import> {
        const dependencies = [
            IMPORTS.types,
            IMPORTS['config-resolver'],
            IMPORTS['middleware-stack'],
            IMPORTS['middleware-content-length'],
        ];

        if (this.target === 'node') {
            dependencies.push(
                IMPORTS['util-body-length-node']
            );
        } else {
            dependencies.push(
                IMPORTS['util-body-length-browser']
            );
        }

        for (const customization of this.customizations) {
            dependencies.push(
                ...this.dependenciesFromCustomization(customization)
            );
        }

        return dependencies;
    }

    toString(): string {
        const typesPackage = packageNameToVariable('@aws/types');
        const configurationImports = new DestructuringImport(
            `./${this.prefix}Configuration`,
            `${this.prefix}Configuration`,
            `${this.prefix}ResolvedConfiguration`,
            `configurationProperties`
        );
        const commandGenerics = `InputType, OutputType, ${this.prefix}ResolvedConfiguration, ${this.streamType()}`;

        return `${this.imports()}
${configurationImports.toString()}
import {InputTypesUnion} from './types/InputTypesUnion';
import {OutputTypesUnion} from './types/OutputTypesUnion';

export class ${this.className} {
    protected readonly config: ${this.prefix}ResolvedConfiguration;

    readonly middlewareStack = new ${packageNameToVariable('@aws/middleware-stack')}.MiddlewareStack<
        InputTypesUnion,
        any,
        ${this.streamType()}
    >();

    constructor(configuration: ${this.prefix}Configuration) {
        this.config = ${packageNameToVariable('@aws/config-resolver')}.resolveConfiguration(
            configuration,
            configurationProperties,
            this.middlewareStack
        );
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
            handler.handle(command).then(
                (result: OutputType)  => cb(null, result),
                (err: any) => cb(err)
            ).catch(
                // prevent any errors thrown in the callback from triggering an
                // unhandled promise rejection
                () => {}
            );
        } else {
            return handler.handle(command);
        }
    }
}
`;
    }

    private concattedConfig(): ConfigurationDefinition {
        const config: ConfigurationDefinition = {};
        for (const customization of this.customizations) {
            if (customization.configuration) {
                Object.assign(config, customization.configuration);
            }
        }

        return config;
    }

    private imports(): string {
        const packages = new Set<string>();
        if (this.target === 'node') {
            packages.add('stream');
        }
        for (const dependency of this.dependencies) {
            packages.add(dependency.package);
        }

        return [...packages]
            .sort()
            .map(packageName => new FullPackageImport(packageName))
            .join('\n');
    }

    private dependenciesFromConfiguration(
        configuration: ConfigurationDefinition
    ): Array<Import> {
        const allImports: Array<Import> = [];
        for (const key of Object.keys(configuration)) {
            const {imports = [], ...property} = configuration[key];
            allImports.push(...imports);
            if (property.type === 'forked') {
                allImports.push(...(property[this.target].imports || []));
            }
        }

        return allImports;
    }

    private dependenciesFromCustomization(
        customization: CustomizationDefinition
    ): Array<Import> {
        switch (customization.type) {
            case 'Middleware':
            case 'ParserDecorator':
                const {configuration, imports = []} = customization;
                return configuration
                    ? imports.concat(this.dependenciesFromConfiguration(configuration))
                    : imports;
            case 'Configuration':
                return this.dependenciesFromConfiguration(
                    customization.configuration
                );
            default:
                throw new Error(
                    `Unrecognized customization type encountered: ${(customization as any).type}`
                );
        }
    }

    private streamType(): string {
        switch (this.target) {
            case 'node':
                return `${packageNameToVariable('stream')}.Readable`;
            case 'browser':
                return 'ReadableStream';
            case 'universal':
                return 'Uint8Array';
        }
    }
}
