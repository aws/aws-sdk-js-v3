import {Operation} from "../../../lib/Components/Model/Operation";
import {HttpTrait as HttpTraitDefinition} from "@aws/types";

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
            documentation: 'documentation',
            input: {
                type: 'structure',
                name: `${name}Input`,
                documentation: `${name}Input shape`,
                required: [],
                members: {}
            },
            output: {
                type: 'structure',
                name: `${name}Output`,
                documentation: `${name}Output shape`,
                required: [],
                members: {}
            },
            errors: [],
        });

        expect(operation.toString()).toEqual(
`import {${name}Input} from './${name}Input';
import {${name}Output} from './${name}Output';
import {OperationModel as _Operation_} from '@aws/types';

export const ${name}: _Operation_ = {
    http: {
        method: '${http.method}',
        requestUri: '${http.requestUri}',
    },
    input: ${name}Input,
    output: ${name}Output,
    errors: [],
};`
        );
    });

    it('should import error shapes', () => {
        const name = 'Operation';
        const operation = new Operation({
            http,
            name,
            documentation: 'documentation',
            input: {
                type: 'structure',
                name: `${name}Input`,
                documentation: `${name}Input shape`,
                required: [],
                members: {},
            },
            output: {
                type: 'structure',
                name: `${name}Output`,
                documentation: `${name}Output shape`,
                required: [],
                members: {},
            },
            errors: [
                {
                    type: 'structure',
                    name: 'ResourceNotFoundException',
                    exception: true,
                    documentation: 'PANIC',
                    required: [],
                    members: {},
                },
                {
                    type: 'structure',
                    name: 'ThroughputExceededException',
                    exception: true,
                    documentation: 'PANIC',
                    required: [],
                    members: {},
                },
                {
                    type: 'structure',
                    name: 'ValidationException',
                    exception: true,
                    documentation: 'PANIC',
                    required: [],
                    members: {},
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

export const ${name}: _Operation_ = {
    http: {
        method: '${http.method}',
        requestUri: '${http.requestUri}',
    },
    input: ${name}Input,
    output: ${name}Output,
    errors: [
        ResourceNotFoundException,
        ThroughputExceededException,
        ValidationException,
    ],
};`
        );
    });
});
