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
        const inputType = this.getInputType();
        const outputType = this.getOutputType();
        const streamType = this.streamType();
        const resolvedConfiguration = `${this.prefix}ResolvedConfiguration`;
        const typesPackage = packageNameToVariable('@aws/types');
        const middlewareStackPackage = packageNameToVariable('@aws/middleware-stack');
        const configurationImport = new DestructuringImport(
            `../${this.prefix}Configuration`,
            resolvedConfiguration
        );

        return `${this.imports()}
import {${this.operation.name}} from '../model/${this.operation.name}';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {${inputType}} from '../types/${inputType}';
import {${outputType}} from '../types/${outputType}';
${configurationImport.toString()}

export class ${this.className} implements ${typesPackage}.Command<
    InputTypesUnion,
    ${inputType},
    OutputTypesUnion,
    ${outputType},
    ${resolvedConfiguration},
    ${streamType}
> {
    readonly middlewareStack = new ${middlewareStackPackage}.MiddlewareStack<${inputType}, ${outputType}, ${streamType}>();

    constructor(readonly input: ${inputType}) {}

    resolveMiddleware(
        clientStack: ${middlewareStackPackage}.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ${streamType}>,
        configuration: ${resolvedConfiguration}
    ): ${typesPackage}.Handler<${inputType}, ${outputType}> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: ${typesPackage}.HandlerExecutionContext = {
            logger: {} as any,
            model: ${this.operation.name}
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            ${packageNameToVariable('@aws/middleware-content-length')}.contentLengthMiddleware(
                ${packageNameToVariable(this.getUtilBodyLengthPackage())}.calculateBodyLength
            ),
            {
                step: 'build',
                tags: contentLengthTag,
                priority: -80
            }
        );

        return stack.resolve(
            handler<${inputType}, ${outputType}>(handlerExecutionContext), 
            handlerExecutionContext
        );
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
