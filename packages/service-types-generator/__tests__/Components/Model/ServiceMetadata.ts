import {ServiceMetadata} from '../../../lib/Components/Model/ServiceMetadata';
import {ServiceMetadata as ServiceMetadataDefinition} from '@aws/service-model';

describe('ServiceMetadata', () => {
    const metadata: ServiceMetadataDefinition = {
        apiVersion: 'string',
        endpointPrefix: 'string',
        protocol: 'json',
        serviceFullName: 'string',
        signatureVersion: 'v4',
        uid: 'string',
    };

    it('should export metadata', () => {
        const serviceMetadata = new ServiceMetadata(metadata);
        expect(serviceMetadata.toString()).toEqual(
`import {ServiceMetadata as _ServiceMetadata_} from '@aws/service-model';

export const ServiceMetadata: _ServiceMetadata_ = {
    "apiVersion": "string",
    "endpointPrefix": "string",
    "protocol": "json",
    "serviceFullName": "string",
    "signatureVersion": "v4",
    "uid": "string"
};`
        );
    });

    it('should not include undefined fields', () => {
        const serviceMetadata = new ServiceMetadata(Object.assign(
            {},
            metadata,
            {targetPrefix: undefined}
            ));
        expect(serviceMetadata.toString()).toEqual(
`import {ServiceMetadata as _ServiceMetadata_} from '@aws/service-model';

export const ServiceMetadata: _ServiceMetadata_ = {
    "apiVersion": "string",
    "endpointPrefix": "string",
    "protocol": "json",
    "serviceFullName": "string",
    "signatureVersion": "v4",
    "uid": "string"
};`
        );
    });

    it('should not include unrecognizable fields', () => {
        const serviceMetadata = new ServiceMetadata(Object.assign(
            {},
            metadata,
            {foo: 'bar'}
            ));
        expect(serviceMetadata.toString()).toEqual(
`import {ServiceMetadata as _ServiceMetadata_} from '@aws/service-model';

export const ServiceMetadata: _ServiceMetadata_ = {
    "apiVersion": "string",
    "endpointPrefix": "string",
    "protocol": "json",
    "serviceFullName": "string",
    "signatureVersion": "v4",
    "uid": "string"
};`
        );
    });
});
