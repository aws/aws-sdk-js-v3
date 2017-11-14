import {IMPORTS} from './constants';
import {serializerConfigurationProperties} from "./serializerConfigurationProperties";
import {ServiceMetadata, SupportedProtocol} from '@aws/types';
import {UnifiedConfigurationPropertyGenerationConfiguration} from '@aws/build-types';

const metadata: ServiceMetadata = {
    apiVersion: 'string',
    endpointPrefix: 'string',
    protocol: 'json',
    serviceFullName: 'string',
    signatureVersion: 'v4',
    uid: 'string',
};

describe('serializerConfigurationProperties', () => {
    it('should throw an error if an unsupported protocol is requested', () => {
        expect(() => serializerConfigurationProperties(
            {
                ...metadata,
                protocol: 'foo' as any
            },
            'bar'
        )).toThrow();
    });

    describe('streamCollector property', () => {
        it('should use the provided stream type as a type parameter', () => {
            const streamType = 'foo';
            const {
                streamCollector: {inputType}
            } = serializerConfigurationProperties(metadata, streamType);

            expect(inputType).toMatch(`<${streamType}>`);
        });
    });

    describe('serializer property', () => {
        it(
            'should import protocol-json-rpc and json-builder if the protocol is json',
            () => {
                const {serializer:  {default: {imports}}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'json'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-json-rpc'],
                    IMPORTS['json-builder'],
                ]);
            }
        );

        it(
            'should import protocol-rest and json-builder if the protocol is rest-json',
            () => {
                const {serializer:  {default: {imports}}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'rest-json'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-rest'],
                    IMPORTS['json-builder'],
                ]);
            }
        );

        it(
            'should import protocol-rest and xml-body-builder if the protocol is rest-xml',
            () => {
                const {serializer:  {default: {imports}}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'rest-xml'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-rest'],
                    IMPORTS['xml-body-builder'],
                ]);
            }
        );

        for (const protocol of <SupportedProtocol[]>['ec2', 'query']) {
            it(
                `should import protocol-query and query-builder if the protocol is ${protocol}`,
                () => {
                    const {serializer:  {default: {imports}}} = serializerConfigurationProperties(
                        {
                            ...metadata,
                            protocol,
                        },
                        'foo'
                    ) as any;

                    expect(imports).toEqual([
                        IMPORTS['protocol-query'],
                        IMPORTS['query-builder'],
                    ]);
                }
            );
        }
    });

    describe('parser property', () => {
        it(
            'should import protocol-json-rpc and json-parser if the protocol is json',
            () => {
                const {parser: {default: {imports}}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'json'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-json-rpc'],
                    IMPORTS['json-parser'],
                ]);
            }
        );

        it(
            'should import protocol-rest and json-parser if the protocol is rest-json',
            () => {
                const {parser: {default: {imports}}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'rest-json'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-rest'],
                    IMPORTS['json-parser'],
                ]);
            }
        );

        it(
            'should import protocol-rest and xml-parser if the protocol is rest-xml',
            () => {
                const {parser: {default: {imports}}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'rest-xml'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-rest'],
                    IMPORTS['xml-parser'],
                ]);
            }
        );

        for (const protocol of <SupportedProtocol[]>['ec2', 'query']) {
            it(
                `should import protocol-query and xml-parser if the protocol is ${protocol}`,
                () => {
                    const {parser: {default: {imports}}} = serializerConfigurationProperties(
                        {
                            ...metadata,
                            protocol,
                        },
                        'foo'
                    ) as any;

                    expect(imports).toEqual([
                        IMPORTS['protocol-query'],
                        IMPORTS['xml-parser'],
                    ]);
                }
            );
        }
    });
});
