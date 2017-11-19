import {
    Operation,
    RuntimeTarget,
    TreeModel,
    TreeModelOperation
} from '@aws/build-types';

import {
    ServiceMetadata
} from '@aws/types';

import {Import as DestructuringImport} from '../Import';
import {FullPackageImport} from '../Client/FullPackageImport';
import {packageNameToVariable} from '../CLient/packageNameToVariable';
import {serviceIdFromMetadata} from '../Client/serviceIdFromMetadata';

export class Command {
    constructor(
        private readonly operation: TreeModelOperation,
        private readonly target: RuntimeTarget,
    ) {}

    get className(): string {
        return `${this.operation.name}Command`;
    }

    get prefix() {
        return serviceIdFromMetadata(this.operation.metadata)
            .replace(/\s/g, '');
    }

    toString(): string {
        const resolvedConfiguration = `${this.prefix}ResolvedConfiguration`;
        const typesPackage = packageNameToVariable('@aws/types');
        const middlewareStackPackage = packageNameToVariable('@aws/middleware-stack');
        const configurationImport = new DestructuringImport(
            `../${this.prefix}Configuration`,
            resolvedConfiguration
        );

        return `${this.imports()}
import {${this.operation.name}} from '../model/${this.operation.name}';
import {${this.getInputType()}} from '../types/${this.getInputType()}';
import {${this.getOutputType()}} from '../types/${this.getOutputType()}';
${configurationImport.toString()}

export class ${this.className} implements ${typesPackage}.Command<
    ${this.getInputType()},
    ${this.getOutputType()},
    ${resolvedConfiguration},
    ${this.streamType()}
> {

    constructor(readonly input: ${this.getInputType()}) {}

    resolveMiddleware(
        stack: ${middlewareStackPackage}.MiddlewareStack<${typesPackage}.Handler<${this.getInputType()}, ${this.getOutputType()}, ${this.streamType()}>>,
        configuration: ${resolvedConfiguration}
    ): ${typesPackage}.Handler<${this.getInputType()}, ${this.getOutputType()}, ${this.streamType()}> {
        const {
            handler: Handler,
            httpHandler
        } = configuration;

        const handlerExecutionContext: ${typesPackage}.HandlerExecutionContext = {
            logger: {} as any,
            model: ${this.operation.name}
        };

        const coreHandler = new Handler(handlerExecutionContext);
        return stack.resolve(coreHandler, handlerExecutionContext);
    }
}
`.trim();
    }

    private imports(): string {
        const packages = new Set<string>([
            '@aws/middleware-stack',
            '@aws/types'
        ]);
        if (this.target === 'node') {
            packages.add('stream');
        }

        return [...packages]
            .sort()
            .map(packageName => new FullPackageImport(packageName))
            .join('\n');
    }

    private getInputType() {
        return `${this.operation.name}Input`;
    }

    private getOutputType() {
        return `${this.operation.name}Output`;
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