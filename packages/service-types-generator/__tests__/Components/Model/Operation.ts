import {Operation} from "../../../lib/Components/Model/Operation";
import {HttpTraitDefinition, ShapeMap} from "@aws/service-model";

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
            input: {shape: `${name}Input`},
            output: {shape: `${name}Output`}
        }, '../Model');

        expect(operation.toString()).toEqual(
`import {${name}Input} from '../Model/${name}Input';
import {${name}Output} from '../Model/${name}Output';
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
            input: {shape: `${name}Input`},
            output: {shape: `${name}Output`},
            errors: [
                {shape: 'ResourceNotFoundException'},
                {shape: 'ThroughputExceededException'},
                {shape: 'ValidationException'},
            ],
        }, '../Model');

        expect(operation.toString()).toEqual(
            `import {${name}Input} from '../Model/${name}Input';
import {${name}Output} from '../Model/${name}Output';
import {ResourceNotFoundException} from '../Model/ResourceNotFoundException';
import {ThroughputExceededException} from '../Model/ThroughputExceededException';
import {ValidationException} from '../Model/ValidationException';
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