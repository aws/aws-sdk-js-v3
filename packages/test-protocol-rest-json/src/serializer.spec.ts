import {RestSerializer} from '@aws-sdk/protocol-rest';
import {JsonBuilder} from '@aws-sdk/json-builder';
import { OperationModel, Structure, Member } from '../../types/build/index';

let operation: OperationModel;

describe('Rest-JSON serialization', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // reset operation in case it was mutated
        operation = {
            http: {
                method: 'PUT',
                requestUri: '/'
            },
            name: 'OperationName',
            metadata: {
                apiVersion: '2017-12-05',
                endpointPrefix: 'foo',
                protocol: 'rest-json',
                serviceFullName: 'AWS Foo Service',
                signatureVersion: 'v4',
                uid: 'foo-2017-12-05'
            },
            input: <any>{},
            output: <any>{},
            errors: []
        };
    });
    
    const base64Encoder = jest.fn(() => {
        return 'base64'
    });
    const utf8Decoder = jest.fn();
    const jsonBuilder = new JsonBuilder(base64Encoder, utf8Decoder);
    const restSerializer = new RestSerializer({
        hostname: 'foo.region.amazonaws.com',
        path: '/',
        protocol: 'https:'
    }, jsonBuilder, base64Encoder, utf8Decoder);
    
    describe('timestamp shapes', () => {
        beforeEach(() => {
             operation.input = {
                locationName: 'TimestampStructure',
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        TimeArg: {
                            shape: {type: 'timestamp'}
                        },
                        TimeArgInHeader: {
                            location: 'header',
                            locationName: 'x-amz-timearg',
                            shape: {type: 'timestamp'}
                        },
                        TimeArgInQuery: {
                            location: 'querystring',
                            locationName: 'TimeQuery',
                            shape: {type: 'timestamp'}
                        },
                        TimeCustom: {
                            shape: {
                                type: 'timestamp', 
                                timestampFormat: 'unixTimestamp'},
                            timestampFormat: 'iso8601'
                        },
                        TimeCustomInHeader: {
                            location: 'header',
                            locationName: 'x-amz-timecustom-header',
                            shape: {type: 'timestamp'},
                            timestampFormat: 'unixTimestamp'
                        },
                        TimeCustomInQuery: {
                            location: 'querystring',
                            locationName: 'TimeCustomQuery',
                            shape: {type: 'timestamp'},
                            timestampFormat: 'unixTimestamp'
                        },
                        TimeFormat: {
                            shape: {
                                timestampFormat: 'rfc822',
                                type: 'timestamp'
                            }
                        },
                        TimeFormatInHeader: {
                            location: 'header',
                            locationName: 'x-amz-timeformat-header',
                            shape: {
                                timestampFormat: 'unixTimestamp',
                                type: 'timestamp'
                            }
                        },
                        TimeFormatInQuery: {
                            location: 'querystring',
                            locationName: 'TimeFormatQuery',
                            shape: {
                                timestampFormat: 'unixTimestamp',
                                type: 'timestamp'
                            }
                        }
                    }
                }
            };
        });

        it('case 1', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                TimeArg: 1422172800,
                TimeArgInQuery: 1422172800,
                TimeArgInHeader: 1422172800,
                TimeCustom: 1422172800,
                TimeCustomInQuery: 1422172800,
                TimeCustomInHeader: 1422172800,
                TimeFormat: 1422172800,
                TimeFormatInQuery: 1422172800,
                TimeFormatInHeader: 1422172800
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/2014-01-01/hostedzone');
            expect(result.headers).toMatchObject({
                'x-amz-timearg': 'Sun, 25 Jan 2015 08:00:00 GMT',
                'x-amz-timecustom-header': '1422172800',
                'x-amz-timeformat-header': '1422172800'
            });
            expect(result.query).toMatchObject({
                'TimeQuery': '2015-01-25T08%3A00%3A00Z',
                'TimeCustomQuery': '1422172800',
                'TimeFormatQuery': '1422172800'
            });
            expect(result.body).toBe('{\"TimeArg\":1422172800,\"TimeCustom\":\"2015-01-25T08:00:00Z\",\"TimeFormat\":\"Sun, 25 Jan 2015 08:00:00 GMT\"}');
        });
    });
});