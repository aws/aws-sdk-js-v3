import {serviceIdFromMetadata} from './serviceIdFromMetadata';
import {Configuration} from './Configuration';
import {customizationsFromModel} from './customizationsFromModel';
import {FullPackageImport} from './FullPackageImport';
import {packageNameToVariable} from './packageNameToVariable';
import {
    ConfigurationDefinition,
    CustomizationDefinition,
    RuntimeTarget,
    TreeModel,
} from "@aws/build-types";

export class Client {
    constructor(
        private readonly model: TreeModel,
        private readonly target: RuntimeTarget,
        private readonly customizations: Array<CustomizationDefinition> = []
    ) {
        this.customizations =
            customizationsFromModel(this.model, this.streamType())
                .concat(customizations);
    }

    toString(): string {
        const className = serviceIdFromMetadata(this.model.metadata)
            .replace(/\s/g, '');
        const typesPackage = packageNameToVariable('@aws/types');
        return `${this.imports()}

export class ${className}Client {
    private readonly config: ${className}ResolvedConfiguration;

    // The input type and output type parameters below should be a union of all
    // supported inputs and outputs for a service.
    // FIXME when https://github.com/aws/aws-sdk-js-staging/pull/69 lands
    readonly middlewareStack = new ${packageNameToVariable('@aws/middleware-stack')}.MiddlewareStack<
        ${typesPackage}.Handler<any, any, ${this.streamType()}>
    >();

    constructor(configuration: ${className}Configuration) {
        this.config = ${packageNameToVariable('@aws/config-resolver')}.resolveConfiguration(
            configuration
        );
    }

    destroy(): void {
        // pass for now, but we should get people in the habit of calling this
        // to support keepAlive and HTTP/2
    }

    /**
     * This will need to be revised when the command interface lands.
     *
     * FIXME ensure InputType and OutputType extend the respective unions
     * defined when https://github.com/aws/aws-sdk-js-staging/pull/69 lands
     */
    send<InputType, OutputType>(command: any): Promise<OutputType>;
    send<InputType, OutputType>(
        command: any,
        cb: (err: any, data?: OutputType) => void
    ): void;
    send<InputType, OutputType>(
        command: any,
        cb?: (err: any, data?: OutputType) => void
    ): Promise<OutputType>|void {
        const handler: any = {
            handle: () => { throw new Error('Not implemented'); }
        };
        if (cb) {
            handler.handle(command).then(
                result => cb(null, result),
                err => cb(err)
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

${new Configuration(className, this.target, this.concattedConfig())}
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
        const packages = new Set<string>([
            '@aws/config-resolver',
            '@aws/middleware-stack',
            '@aws/types',
        ]);
        if (this.target === 'node') {
            packages.add('stream');
        }
        for (const customization of this.customizations) {
            switch (customization.type) {
                case 'Middleware':
                case 'ParserDecorator':
                    const {configuration, imports} = customization;
                    if (imports) {
                        for (const imported of imports) {
                            packages.add(imported.package);
                        }
                    }
                    if (configuration) {
                        for (const imported of this.importsFromConfiguration(configuration)) {
                            packages.add(imported);
                        }
                    }
                    break;
                case 'Configuration':
                    for (const imported of this.importsFromConfiguration(customization.configuration)) {
                        packages.add(imported);
                    }
                    break;
                default:
                    throw new Error(
                        `Unrecognized customization type encountered: ${(customization as any).type}`
                    );
            }
        }

        return [...packages]
            .sort()
            .map(packageName => new FullPackageImport(packageName))
            .join('\n');
    }

    private importsFromConfiguration(
        configuration: ConfigurationDefinition
    ): Set<string> {
        const packages = new Set<string>();
        for (const key of Object.keys(configuration)) {
            const {imports = [], ...property} = configuration[key];
            if (property.type === 'forked') {
                imports.push(...(property[this.target].imports || []));
            }
            for (const {package: packageName} of imports) {
                packages.add(packageName);
            }
        }

        return packages;
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
