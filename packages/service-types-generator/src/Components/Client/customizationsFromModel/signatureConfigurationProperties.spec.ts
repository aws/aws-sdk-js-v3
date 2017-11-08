import {signatureConfigurationProperties} from "./signatureConfigurationProperties";
import {ServiceMetadata} from '@aws/types';

const metadata: ServiceMetadata = {
    apiVersion: 'string',
    endpointPrefix: 'string',
    protocol: 'json',
    serviceFullName: 'string',
    signatureVersion: 'v4',
    uid: 'string',
};

describe('signatureConfigurationProperties', () => {
    for (const property of ['credentials', 'sha256', 'signingName', 'signer']) {
        it(`should return a property definition for ${property}`, () => {
            expect(signatureConfigurationProperties(metadata))
                .toHaveProperty(property);
        });
    }
});
