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

const standardConfigurationProperties = [
    'endpoint',
    'endpointProvider',
    'maxRedirects',
    'maxRetries',
    'region',
    'sslEnabled',
    'base64Encoder',
    'base64Decoder',
    'utf8Encoder',
    'utf8Decoder',
    'serializer',
    'parser',
    'streamCollector',
];

const signatureConfigurationProperties = [
    'credentials',
    'sha256',
    'signingName',
    'signer',
];

describe('customizationsFromModel', () => {
    for (const property of standardConfigurationProperties) {
        it(`should return a property definition for ${property}`, () => {
            const [{configuration}] = customizationsFromModel(model, 'foo');
            expect(configuration).toHaveProperty(property);
        });
    }

    for (const property of signatureConfigurationProperties) {
        it(
            `should return a property definition for ${property} if the model uses request signatures`,
            () => {
                const v4Model = {
                    ...model,
                    metadata,
                };
                const [{configuration}] = customizationsFromModel(v4Model, 'foo');
                expect(configuration).toHaveProperty(property);
            }
        );
    }
});
