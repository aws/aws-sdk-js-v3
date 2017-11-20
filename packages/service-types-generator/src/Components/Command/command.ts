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
import {packageNameToVariable} from '../Client/packageNameToVariable';
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
        clientStack: ${middlewareStackPackage}.MiddlewareStack<${this.getInputType()}, ${this.getOutputType()}, ${this.streamType()}>,
        configuration: ${resolvedConfiguration}
    ): ${typesPackage}.Handler<${this.getInputType()}, ${this.getOutputType()}, ${this.streamType()}> {
        const {
            handler: Handler,
            httpHandler
        } = configuration;
        const stack = clientStack.clone();

        const handlerExecutionContext: ${typesPackage}.HandlerExecutionContext = {
            logger: {} as any,
            model: ${this.operation.name}
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            class extends ${packageNameToVariable('@aws/middleware-content-length')}.ContentLengthMiddleware {
                constructor(
                    next: ${typesPackage}.Handler<any, any, any>
                ) {
                    super(
                        ${packageNameToVariable(this.getUtilBodyLengthPackage())}.calculateBodyLength,
                        next
                    );
                }
            },
            {
                step: 'build',
                tags: contentLengthTag,
                priority: 80
            }
        );

        const coreHandler = new Handler(handlerExecutionContext);
        return stack.resolve(coreHandler, handlerExecutionContext);
    }
}
`.trim();
    }

    private imports(): string {
        const packages = new Set<string>([
            '@aws/middleware-stack',
            '@aws/middleware-content-length',
            '@aws/types',
            this.getUtilBodyLengthPackage()
        ]);
        if (this.target === 'node') {
            packages.add('stream');
        }

        return [...packages]
            .sort()
            .map(packageName => new FullPackageImport(packageName))
            .join('\n');
    }
    
    private getUtilBodyLengthPackage() {
        if (this.target === 'node') {
            return '@aws/util-body-length-node';
        } else {
            return '@aws/util-body-length-browser';
        }
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