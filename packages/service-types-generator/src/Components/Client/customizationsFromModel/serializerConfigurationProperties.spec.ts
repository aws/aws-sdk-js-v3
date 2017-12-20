import {IMPORTS} from '../internalImports';
import {serializerConfigurationProperties} from "./serializerConfigurationProperties";
import {ServiceMetadata, SupportedProtocol} from '@aws/types';

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
                const {serializer: {imports}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'json'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['middleware-serializer'],
                    IMPORTS['protocol-json-rpc'],
                    IMPORTS['json-builder'],
                    IMPORTS.types,
                ]);
            }
        );

        it(
            'should import protocol-rest and json-builder if the protocol is rest-json',
            () => {
                const {serializer: {imports}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'rest-json'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['middleware-serializer'],
                    IMPORTS['protocol-rest'],
                    IMPORTS['json-builder'],
                    IMPORTS.types,
                ]);
            }
        );

        it(
            'should import protocol-rest and xml-body-builder if the protocol is rest-xml',
            () => {
                const {serializer: {imports}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'rest-xml'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['middleware-serializer'],
                    IMPORTS['protocol-rest'],
                    IMPORTS['xml-body-builder'],
                    IMPORTS.types,
                ]);
            }
        );

        for (const protocol of <SupportedProtocol[]>['ec2', 'query']) {
            it(
                `should import protocol-query and query-builder if the protocol is ${protocol}`,
                () => {
                    const {serializer: {imports}} = serializerConfigurationProperties(
                        {
                            ...metadata,
                            protocol,
                        },
                        'foo'
                    ) as any;

                    expect(imports).toEqual([
                        IMPORTS['middleware-serializer'],
                        IMPORTS['protocol-query'],
                        IMPORTS['query-builder'],
                        IMPORTS.types,
                    ]);
                }
            );
        }
    });

    describe('parser property', () => {
        it(
            'should import protocol-json-rpc and json-parser if the protocol is json',
            () => {
                const {parser: {imports}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'json'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-json-rpc'],
                    IMPORTS['json-parser'],
                    IMPORTS['json-error-unmarshaller'],
                    IMPORTS.types,
                ]);
            }
        );

        it(
            'should import protocol-rest and json-parser if the protocol is rest-json',
            () => {
                const {parser: {imports}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'rest-json'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-rest'],
                    IMPORTS['json-parser'],
                    IMPORTS['json-error-unmarshaller'],
                    IMPORTS.types,
                ]);
            }
        );

        it(
            'should import protocol-rest and xml-parser if the protocol is rest-xml',
            () => {
                const {parser: {imports}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'rest-xml'
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-rest'],
                    IMPORTS['xml-parser'],
                    IMPORTS['query-error-unmarshaller'],
                    IMPORTS.types,
                ]);
            }
        );

        it(
            `should import protocol-query and xml-parser if the protocol is ec2`,
            () => {
                const {parser: {imports}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'ec2',
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-query'],
                    IMPORTS['xml-parser'],
                    IMPORTS['ec2-error-unmarshaller'],
                    IMPORTS.types,
                ]);
            }
        );

        it(
            `should import protocol-query and xml-parser if the protocol is query`,
            () => {
                const {parser: {imports}} = serializerConfigurationProperties(
                    {
                        ...metadata,
                        protocol: 'query',
                    },
                    'foo'
                ) as any;

                expect(imports).toEqual([
                    IMPORTS['protocol-query'],
                    IMPORTS['xml-parser'],
                    IMPORTS['query-error-unmarshaller'],
                    IMPORTS.types,
                ]);
            }
        );
    });
});
