import {Configuration} from './Configuration';
import {customizationsFromModel} from './customizationsFromModel';
import {FullPackageImport} from './FullPackageImport';
import {IndentedSection} from '../IndentedSection';
import {packageNameToVariable} from './packageNameToVariable';
import {
    ConfigurationGenerationConfiguration,
    CustomizationDefinition,
    RuntimeTarget,
    TreeModel,
} from "@aws/build-types";

export class Context {
    constructor(
        private readonly target: RuntimeTarget,
        private readonly model: TreeModel,
        private readonly customizations: Array<CustomizationDefinition> = []
    ) {
        this.customizations = customizationsFromModel(this.model)
            .concat(customizations);
    }

    toString(): string {
        const className = this.className();
        const typesPackage = packageNameToVariable('@aws/types');
        return `${this.imports()}

${new Configuration(className, this.target, this.concattedConfig())}

export class ${className}Context implements 
    ${typesPackage}.Context<${className}ResolvedConfiguration>
{
    private readonly config: ${className}ResolvedConfiguration;
    
    // The input type and output type parameters below should be a union of all
    // supported inputs and outputs for a service.
    readonly middlewareStack = new ${packageNameToVariable('@aws/middleware-stack')}.MiddlewareStack<
        ${typesPackage}.Handler<any, any, ${this.streamType()}>
    >();

    constructor(configuration: ${className}Configuration) {
        // call a config resolver here
    }

    destroy(): void {
        // pass for now, but we should get people in the habit of calling this
        // to support keepAlive and HTTP/2
    }

    /**
     * This will need to be revised when the command interface lands.
     */
    execute<InputType, OutputType>(command: any): Promise<OutputType>;
    execute<InputType, OutputType>(
        command: any, 
        cb: (err: any, data?: OutputType) => void
    ): void;
    execute<InputType, OutputType>(
        command: any,
        cb: (err: any, data?: OutputType) => void
    ): Promise<OutputType>|void {
        const handler = {handle: () => throw new Error('Not implemented')} as any;
        if (cb) {
            handler.handle(command).then(
                result => cb(null, result),
                err => cb(err)
            );
        } else {
            return handler.handle(command);
        }
    }
}`;
    }

    private className(): string {
        const {metadata} = this.model;
        return (metadata.serviceAbbreviation || metadata.serviceFullName)
            .replace(/^(aws|amazon)/i, '')
            .replace(/(service|api|client)$/i, '')
            .trim()
            .replace(/\s/g, '');
    }

    private concattedConfig(): ConfigurationGenerationConfiguration {
        const config: ConfigurationGenerationConfiguration = {};
        for (const customization of this.customizations) {
            if (customization.configuration) {
                Object.assign(config, customization.configuration);
            }
        }

        return config;
    }

    private imports(): string {
        const packages = new Set<string>([
            '@aws/types',
            '@aws/middleware-stack',
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
            .map(packageName => new FullPackageImport(packageName))
            .join('\n');
    }

    private importsFromConfiguration(
        configuration: ConfigurationGenerationConfiguration
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
                return `${packageNameToVariable('stream')}.ReadableStream`;
            case 'browser':
                return 'ReadableStream';
            case 'universal':
                return 'Uint8Array';
        }
    }
}
