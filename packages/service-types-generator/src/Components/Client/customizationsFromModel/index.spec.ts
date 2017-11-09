import {customizationsFromModel} from './index';
import {metadata} from '../../../shapes.fixture';

const model = {
    name: 'Foo Service',
    documentation: 'A service which foos',
    metadata: {
        ...metadata,
        signatureVersion: 'none',
    },
    operations: {},
    shapes: {},
};

describe('customizationsFromModel', () => {
    for (const property of ['endpoint', 'maxRedirects', 'maxRetries', 'region', 'sslEnabled']) {
        it(`should return a property definition for ${property}`, () => {
            const [{configuration}] = customizationsFromModel(model);
            expect(configuration).toHaveProperty(property);
        });
    }

    for (const property of ['credentials', 'sha256', 'signingName', 'signer']) {
        it(
            `should return a property definition for ${property} if the model uses request signatures`, 
            () => {
                const v4Model = {
                    ...model,
                    metadata,
                };
                const [{configuration}] = customizationsFromModel(v4Model);
                expect(configuration).toHaveProperty(property);
            }
        );
    }
});