import {RestParser} from '@aws/protocol-rest';
import {XmlBodyParser} from '@aws/xml-body-parser';
import {OperationModel} from '@aws/types';
import {fromBase64} from '@aws/util-base64-universal';
import {toUtf8, fromUtf8} from '@aws/util-utf8-universal';
import {queryErrorUnmarshaller} from '@aws/query-error-unmarshaller';
import {ResponseMetadata} from '@aws/types';

let mockOperation: OperationModel;
const mockStreamCollector = jasmine.createSpy('streamCollector');
const restParser = new RestParser(
    new XmlBodyParser(fromBase64),
    mockStreamCollector,
    queryErrorUnmarshaller,
    toUtf8,
    fromBase64
);

interface GenerateMetadataOptions {
    statusCode: number;
    headers: {[header: string]: string}
}

function generateMetadata(options: GenerateMetadataOptions): ResponseMetadata {
    const headers: {[header: string]: string} = {};
    for (const header of Object.keys(options.headers)) {
        headers[header.toLowerCase()] = options.headers[header];
    }

    return {
        cfId: void 0,
        extendedRequestId: void 0,
        httpHeaders: headers,
        httpStatusCode: options.statusCode,
        requestId: void 0
    };
}

describe('Rest-XML parsing', () => {
    beforeEach(() => {
        mockOperation = {
            metadata: {
                apiVersion: '2017-12-05',
                endpointPrefix: 'foo',
                protocol: 'rest-xml',
                serviceFullName: 'AWS Foo Service',
                signatureVersion: 'v4',
                uid: 'foo-2017-12-05'
            },
            name: 'OperationName',
            http: {
                method: 'GET',
                requestUri: '/'
            },
            input: {} as any,
            output: {} as any,
            errors: [],
        };
    });

    let caseCount = 0;

    describe('scalar members', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ImaHeader: {
                            shape: {
                                type: 'string' 
                            },
                            location: 'header'
                        },
                        ImaHeaderLocation: {
                            shape: {
                                type: 'string'
                            },
                            location: 'header',
                            locationName: 'X-Foo'
                        },
                        Str: {
                            shape: {
                                type: 'string'
                            }
                        },
                        Num: {
                            shape: {
                                type: 'integer'
                            },
                            locationName: 'FooNum'
                        },
                        FalseBool: {
                            shape: {
                                type: 'boolean'
                            }
                        },
                        TrueBool: {
                            shape: {
                                type: 'boolean'
                            }
                        },
                        Float: {
                            shape: {
                                type: 'float'
                            }
                        },
                        Double: {
                            shape: {
                                type: 'float'
                            }
                        },
                        Long: {
                            shape: {
                                type: 'integer'
                            }
                        },
                        Char: {
                            shape: {
                                type: 'string'
                            }
                        },
                        Timestamp: {
                            shape: {
                                type: 'timestamp'
                            }
                        }
                    }
                }
            }
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {
                    ImaHeader: 'test',
                    'X-Foo': 'abc'
                }
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResponse>
                    <Str>myname</Str>
                    <FooNum>123</FooNum>
                    <FalseBool>false</FalseBool>
                    <TrueBool>true</TrueBool>
                    <Float>1.2</Float>
                    <Double>1.3</Double>
                    <Long>200</Long>
                    <Char>a</Char>
                    <Timestamp>2015-01-25T08:00:00Z</Timestamp>
                </OperationNameResponse>`)
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                "ImaHeader": "test",
                "ImaHeaderLocation": "abc",
                "Str": "myname",
                "Num": 123,
                "FalseBool": false,
                "TrueBool": true,
                "Float": 1.2,
                "Double": 1.3,
                "Long": 200,
                "Char": "a",
                "Timestamp": new Date(1422172800000)
            } as any);
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {
                    ImaHeader: 'test',
                    'X-Foo': 'abc'
                }
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResponse>
                    <Str></Str>
                    <FooNum>123</FooNum>
                    <FalseBool>false</FalseBool>
                    <TrueBool>true</TrueBool>
                    <Float>1.2</Float>
                    <Double>1.3</Double>
                    <Long>200</Long>
                    <Char>a</Char>
                    <Timestamp>2015-01-25T08:00:00Z</Timestamp>
                </OperationNameResponse>`)
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                "ImaHeader": "test",
                "ImaHeaderLocation": "abc",
                "Str": "",
                "Num": 123,
                "FalseBool": false,
                "TrueBool": true,
                "Float": 1.2,
                "Double": 1.3,
                "Long": 200,
                "Char": "a",
                "Timestamp": new Date(1422172800000)
            } as any);
        });
    });

    describe('blob members', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Blob: {
                            shape: {
                                type: 'blob'
                            }
                        }
                    }
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {}
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResult>
                    <Blob>dmFsdWU=</Blob>
                </OperationNameResult>`)
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                Blob: fromUtf8('value')
            } as any);
        });
    });

    describe('lists', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListMember: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {}
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResult>
                    <ListMember>
                        <member>abc</member>
                        <member>123</member>
                    </ListMember>
                </OperationNameResult>`)
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                ListMember: ["abc", "123"]
            } as any);
        });
    });

    describe('lists with custom member name', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListMember: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {
                                        type: 'string'
                                    },
                                    locationName: 'item'
                                }
                            }
                        }
                    }
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {}
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResult>
                    <ListMember>
                        <item>abc</item>
                        <item>123</item>
                    </ListMember>
                </OperationNameResult>`)
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                ListMember: ["abc", "123"]
            } as any);
        });
    });

    describe('flattened list members', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListMember: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {
                                        type: 'string'
                                    }
                                }
                            },
                            flattened: true
                        }
                    }
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {}
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResult>
                    <ListMember>abc</ListMember>
                    <ListMember>123</ListMember>
                </OperationNameResult>`)
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                ListMember: ["abc", "123"]
            } as any);
        });
    });

    describe('normal map members', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Map: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {
                                        type: 'string'
                                    }
                                },
                                value: {
                                    shape: {
                                        type: 'structure',
                                        required: [],
                                        members: {
                                            foo: {
                                                shape: {
                                                    type: 'string'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {}
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResult>
                    <Map>
                        <entry>
                            <key>qux</key>
                            <value>
                                <foo>bar</foo>
                            </value>
                        </entry>
                        <entry>
                            <key>baz</key>
                            <value>
                                <foo>bam</foo>
                            </value>
                        </entry>
                    </Map>
                </OperationNameResult>`)
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                "Map": {
                    "qux": {
                        "foo": "bar"
                    },
                    "baz": {
                        "foo": "bam"
                    }
                }
            } as any);
        });
    });

    describe('flattened map members', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Map: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {
                                        type: 'string'
                                    }
                                },
                                value: {
                                    shape: {
                                        type: 'string'
                                    }
                                }
                            },
                            flattened: true
                        }
                    }
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {}
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResult>
                    <Map>
                        <key>qux</key>
                        <value>bar</value>
                    </Map>
                    <Map>
                        <key>baz</key>
                        <value>bam</value>
                    </Map>
                </OperationNameResult>`)
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                "Map": {
                    "qux": "bar",
                    "baz": "bam"
                }
            } as any);
        });
    });

    describe('named map members', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Map: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {
                                        type: 'string'
                                    },
                                    locationName: 'foo'
                                },
                                value: {
                                    shape: {
                                        type: 'string'
                                    },
                                    locationName: 'bar'
                                }
                            }
                        }
                    }
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {}
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResult>
                    <Map>
                        <entry>
                            <foo>qux</foo>
                            <bar>bar</bar>
                        </entry>
                        <entry>
                            <foo>baz</foo>
                            <bar>bam</bar>
                        </entry>
                    </Map>
                </OperationNameResult>`)
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                "Map": {
                    "qux": "bar",
                    "baz": "bam"
                }
            } as any);
        });
    });

    describe('XML payload', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Header: {
                            shape: {
                                type: 'string'
                            },
                            location: 'header',
                            locationName: 'X-Foo'
                        },
                        Data: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Foo: {
                                        shape: {
                                            type: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    payload: 'Data'
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {
                    'X-Foo': 'baz'
                }
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResponse>
                    <Foo>abc</Foo>
                </OperationNameResponse>`)
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                "Header": "baz",
                "Data": {
                    "Foo": "abc"
                }
            } as any);
        });
    });

    describe('streaming payload', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Stream: {
                            shape: {
                                type: 'blob'
                            }
                        }
                    },
                    payload: 'Stream'
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {}
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: 'abc'
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                Stream: 'abc'
            } as any);
        });
    });

    describe('scalar members in headers', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Str: {
                            shape: {
                                type: 'string'
                            },
                            location: 'header',
                            locationName: 'x-str'
                        },
                        Integer: {
                            shape: {
                                type: 'integer'
                            },
                            location: 'header',
                            locationName: 'x-int'
                        },
                        TrueBool: {
                            shape: {
                                type: 'boolean'
                            },
                            location: 'header',
                            locationName: 'x-true-bool'
                        },
                        FalseBool: {
                            shape: {
                                type: 'boolean'
                            },
                            location: 'header',
                            locationName: 'x-false-bool'
                        },
                        Float: {
                            shape: {
                                type: 'float'
                            },
                            location: 'header',
                            locationName: 'x-float'
                        },
                        Double: {
                            shape: {
                                type: 'float'
                            },
                            location: 'header',
                            locationName: 'x-double'
                        },
                        Long: {
                            shape: {
                                type: 'integer'
                            },
                            location: 'header',
                            locationName: 'x-long'
                        },
                        Char: {
                            shape: {
                                type: 'string'
                            },
                            location: 'header',
                            locationName: 'x-char'
                        },
                        Timestamp: {
                            shape: {
                                type: 'timestamp'
                            },
                            location: 'header',
                            locationName: 'x-timestamp'
                        }
                    }
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {
                    "x-str": "string",
                    "x-int": "1",
                    "x-true-bool": "true",
                    "x-false-bool": "false",
                    "x-float": "1.5",
                    "x-double": "1.5",
                    "x-long": "100",
                    "x-char": "a",
                    "x-timestamp": "Sun, 25 Jan 2015 08:00:00 GMT"
                }
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: ''
            });

            expect(result).toEqual({
                "$metadata": generateMetadata(mockResponseMetadata),
                "Str": "string",
                "Integer": 1,
                "TrueBool": true,
                "FalseBool": false,
                "Float": 1.5,
                "Double": 1.5,
                "Long": 100,
                "Char": "a",
                "Timestamp": new Date(1422172800000)
            } as any);
        });
    });

    describe('empty strings', () => {
        beforeEach(() => {
            mockOperation.output = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Foo: {
                            shape: {
                                type: 'string'
                            }
                        }
                    }
                }
            };
        });

        it(`case ${++caseCount}`, async () => {
            const mockResponseMetadata = {
                statusCode: 200,
                headers: {}
            };
            const result = await restParser.parse(mockOperation, {
                ...mockResponseMetadata,
                body: fromUtf8(`
                <OperationNameResponse>
                    <Foo/>
                    <RequestId>requestid</RequestId>
                </OperationNameResponse>`)
            });

            expect(result).toEqual({
                "$metadata": {
                    ...generateMetadata(mockResponseMetadata),
                    requestId: 'requestid'
                },
                Foo: ''
            } as any);
        });
    });
});