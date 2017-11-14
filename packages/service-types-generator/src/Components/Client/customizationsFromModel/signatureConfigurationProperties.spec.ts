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
    it(
        'should throw if the metadata requires an unsupported signature version',
        () => {
            expect(() => signatureConfigurationProperties({
                ...metadata,
                signatureVersion: 'v2'
            })).toThrow();
        }
    );
});
