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
            },
            output: {
                shape: {
                    type: 'structure',
                    name: `${name}Output`,
                    documentation: `${name}Output shape`,
                    required: [],
                    members: {},
                },
            },
            errors: [],
        });

        expect(operation.toString()).toEqual(
`import {${name}Input} from './${name}Input';
import {${name}Output} from './${name}Output';
import {GeneratedOperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ${name}: _Operation_ = {
    metadata: ServiceMetadata,
    http: {
        method: '${http.method}',
        requestUri: '${http.requestUri}',
    },
    input: {
        shape: ${name}Input,
        xmlNamespace: {
            prefix: 'foo',
            uri: 'https://amazonaws.foo',
        },
    },
    output: {
        shape: ${name}Output,
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
            },
            output: {
                shape: {
                    type: 'structure',
                    name: `${name}Output`,
                    documentation: `${name}Output shape`,
                    required: [],
                    members: {},
                },
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
                },
            ],
        });

        expect(operation.toString()).toEqual(
`import {${name}Input} from './${name}Input';
import {${name}Output} from './${name}Output';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {ThroughputExceededException} from './ThroughputExceededException';
import {ValidationException} from './ValidationException';
import {GeneratedOperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ${name}: _Operation_ = {
    metadata: ServiceMetadata,
    http: {
        method: '${http.method}',
        requestUri: '${http.requestUri}',
    },
    input: {
        shape: ${name}Input,
    },
    output: {
        shape: ${name}Output,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: ThroughputExceededException,
        },
        {
            shape: ValidationException,
        },
    ],
};`
        );
    });
});
