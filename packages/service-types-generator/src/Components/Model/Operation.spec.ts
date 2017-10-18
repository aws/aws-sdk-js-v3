import {Operation} from "./Operation";
import {HttpTrait as HttpTraitDefinition} from "@aws/types";
import {metadata} from '../../shapes.fixture';

describe('Operation', () => {
    const http: HttpTraitDefinition = {
        method: 'HEAD',
        requestUri: '/',
    };

    it('should import input and output shapes', () => {
        const name = 'Operation';
        const operation = new Operation({
            http,
            name,
            metadata,
            documentation: 'documentation',
            input: {
                shape: {
                    type: 'structure',
                    name: `${name}Input`,
                    documentation: `${name}Input shape`,
                    required: [],
                    members: {},
                },
                xmlNamespace: {
                    prefix: 'foo',
                    uri: 'https://amazonaws.foo',
                },
                name: 'input'
            },
            output: {
                shape: {
                    type: 'structure',
                    name: `${name}Output`,
                    documentation: `${name}Output shape`,
                    required: [],
                    members: {},
                },
                name: 'output'
            },
            errors: [],
        });

        expect(operation.toString()).toEqual(
`import {${name}Input} from './${name}Input';
import {${name}Output} from './${name}Output';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ${name}: _Operation_ = {
    metadata: ServiceMetadata,
    name: '${name}',
    http: {
        method: '${http.method}',
        requestUri: '${http.requestUri}',
    },
    input: {
        shape: ${name}Input,
        name: 'input',
        xmlNamespace: {
            prefix: 'foo',
            uri: 'https://amazonaws.foo',
        },
    },
    output: {
        shape: ${name}Output,
        name: 'output',
    },
    errors: [],
};`
        );
    });

    it('should import error shapes', () => {
        const name = 'Operation';
        const operation = new Operation({
            http,
            name,
            metadata,
            documentation: 'documentation',
            input: {
                shape: {
                    type: 'structure',
                    name: `${name}Input`,
                    documentation: `${name}Input shape`,
                    required: [],
                    members: {},
                },
                name: 'input'
            },
            output: {
                shape: {
                    type: 'structure',
                    name: `${name}Output`,
                    documentation: `${name}Output shape`,
                    required: [],
                    members: {},
                },
                name: 'output'
            },
            errors: [
                {
                    shape: {
                        type: 'structure',
                        name: 'ResourceNotFoundException',
                        exception: true,
                        documentation: 'PANIC',
                        required: [],
                        members: {},
                    },
                    name: 'ResourceNotFoundException'
                },
                {
                    shape: {
                        type: 'structure',
                        name: 'ThroughputExceededException',
                        exception: true,
                        documentation: 'PANIC',
                        required: [],
                        members: {},
                    },
                    name: 'ThroughputExceededException'
                },
                {
                    shape: {
                        type: 'structure',
                        name: 'ValidationException',
                        exception: true,
                        documentation: 'PANIC',
                        required: [],
                        members: {},
                    },
                    name: 'ValidationException'
                },
            ],
        });

        expect(operation.toString()).toEqual(
`import {${name}Input} from './${name}Input';
import {${name}Output} from './${name}Output';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ThroughputExceededException} from './ThroughputExceededException';
import {ValidationException} from './ValidationException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ${name}: _Operation_ = {
    metadata: ServiceMetadata,
    name: '${name}',
    http: {
        method: '${http.method}',
        requestUri: '${http.requestUri}',
    },
    input: {
        shape: ${name}Input,
        name: 'input',
    },
    output: {
        shape: ${name}Output,
        name: 'output',
    },
    errors: [
        {
            shape: ResourceNotFoundException,
            name: 'ResourceNotFoundException',
        },
        {
            shape: ThroughputExceededException,
            name: 'ThroughputExceededException',
        },
        {
            shape: ValidationException,
            name: 'ValidationException',
        },
    ],
};`
        );
    });
});
