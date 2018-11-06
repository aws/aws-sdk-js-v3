import {RestSerializer} from '@aws-sdk/protocol-rest';
import {XmlBodyBuilder} from '@aws-sdk/xml-body-builder';
import { OperationModel, Structure, Member } from '../../types/build/index';

let operation: OperationModel;

describe('Rest-XML serialization', () => {
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
                protocol: 'rest-xml',
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
    const xmlBodyBuilder = new XmlBodyBuilder(base64Encoder, utf8Decoder);
    const restSerializer = new RestSerializer({
        hostname: 'foo.region.amazonaws.com',
        path: '/',
        protocol: 'https:'
    }, xmlBodyBuilder, base64Encoder, utf8Decoder);

    describe('basic serialization', () => {
        it('case 1', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Name: {
                            shape: {
                                type: 'string'
                            }
                        },
                        Description: {
                            shape: {
                                type: 'string'
                            }
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
    
            const result = restSerializer.serialize(operation, {
                Name: 'foo',
                Description: 'bar'
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><Name>foo</Name><Description>bar</Description></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });

        it('case 2', () => {
            operation.http = {
                method: 'PUT',
                requestUri: '/2014-01-01/hostedzone'
            };
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Name: {
                            shape: {
                                type: 'string'
                            }
                        },
                        Description: {
                            shape: {
                                type: 'string'
                            }
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
    
            const result = restSerializer.serialize(operation, {
                Name: 'foo',
                Description: 'bar'
            });
    
            expect(result.method).toBe('PUT');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><Name>foo</Name><Description>bar</Description></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });

        it('case 3', () => {
            operation.http = {
                method: 'GET',
                requestUri: '/2014-01-01/hostedzone'
            };
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Name: {
                            shape: {
                                type: 'string'
                            }
                        },
                        Description: {
                            shape: {
                                type: 'string'
                            }
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
    
            const result = restSerializer.serialize(operation, {});
    
            expect(result.method).toBe('GET');
            expect(result.body).toBe(null);
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });
    });

    describe('serialize other scalar types', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        First: {
                            shape: {
                                type: 'boolean'
                            }
                        },
                        Second: {
                            shape: {
                                type: 'boolean'
                            }
                        },
                        Third: {
                            shape: {
                                type: 'float'
                            }
                        },
                        Fourth: {
                            shape: {
                                type: 'integer'
                            }
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
        });

        it('case 4', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                First: true,
                Second: false,
                Third: 1.2,
                Fourth: 3
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><First>true</First><Second>false</Second><Third>1.2</Third><Fourth>3</Fourth></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });
    });

    describe('nested structures', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        SubStructure: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Foo: {
                                        shape: {type: 'string'}
                                    },
                                    Bar: {
                                        shape: {type: 'string'}
                                    }
                                }
                            }
                        },
                        Description: {
                            shape: {type: 'string'}
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
        });

        it('case 5', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                SubStructure: {
                    Foo: 'a',
                    Bar: 'b'
                },
                Description: 'baz'
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><SubStructure><Foo>a</Foo><Bar>b</Bar></SubStructure><Description>baz</Description></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });

        it('case 6', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                SubStructure: {
                    Foo: 'a',
                    Bar: null
                },
                Description: 'baz'
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><SubStructure><Foo>a</Foo></SubStructure><Description>baz</Description></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });

        it('case 7', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                SubStructure: {},
                Description: 'baz'
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><SubStructure/><Description>baz</Description></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });
    });

    describe('non-flattened lists', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListParam: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'}
                                }
                            }
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
        });

        it('case 8', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                ListParam: [
                    'one',
                    'two',
                    'three'
                ]
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><ListParam><member>one</member><member>two</member><member>three</member></ListParam></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });
    });

    describe('non-flattened lists with locationName', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListParam: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                    locationName: 'NotMember'
                                }
                            },
                            locationName: 'AlternateName'
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
        });

        it('case 9', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                ListParam: [
                    'one',
                    'two',
                    'three'
                ]
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><AlternateName><NotMember>one</NotMember><NotMember>two</NotMember><NotMember>three</NotMember></AlternateName></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });
    });

    describe('flattened lists', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListParam: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                },
                                flattened: true
                            }
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
        });

        it('case 10', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                ListParam: [
                    'one',
                    'two',
                    'three'
                ]
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><ListParam>one</ListParam><ListParam>two</ListParam><ListParam>three</ListParam></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });
    });

    describe('flattened lists with locationName', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListParam: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                },
                                flattened: true
                            },
                            locationName: 'item'
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
        });

        it('case 11', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                ListParam: [
                    'one',
                    'two',
                    'three'
                ]
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><item>one</item><item>two</item><item>three</item></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });
    });

    describe('list of structures', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        ListParam: {
                            locationName: 'item',
                            shape: {
                                type: 'list',
                                flattened: true,
                                member: {
                                    shape: {
                                        type: 'structure',
                                        required: [],
                                        members: {
                                            'Element': {
                                                shape: {type: 'string'},
                                                locationName: 'value'
                                            }
                                        }
                                    },
                                }
                            }
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
        });

        it('case 12', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                ListParam: [
                    {Element: 'one'},
                    {Element: 'two'},
                    {Element: 'three'}
                ]
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><item><value>one</value></item><item><value>two</value></item><item><value>three</value></item></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });
    });

    describe('blob and timestamp shapes', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        StructureParam: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    t: {
                                        shape: {type: 'timestamp'}
                                    },
                                    b: {
                                        shape: {type: 'blob'}
                                    }
                                }
                            }
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
        });

        it('case 13', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/2014-01-01/hostedzone'
            };
    
            const result = restSerializer.serialize(operation, {
                StructureParam: {
                    t: 1422172800,
                    b: 'foo'
                }
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><StructureParam><t>2015-01-25T08:00:00Z</t><b>base64</b></StructureParam></OperationRequest>');
            expect(result.path).toBe('/2014-01-01/hostedzone');
        });
    });

    describe('header maps', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        foo: {
                            location: 'headers',
                            locationName: 'x-foo-',
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'}
                                }
                            }
                        }
                    }
                },
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                }
            };
        });

        it('case 14', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/'
            };
    
            const result = restSerializer.serialize(operation, {
                foo: {
                    a: 'b',
                    c: 'd'
                }
            });
    
            expect(result.method).toBe('POST');
            expect(result.body).toBe('');
            expect(result.path).toBe('/');
            expect(result.headers).toMatchObject({
                'x-foo-a': 'b',
                'x-foo-c': 'd'
            });
        });
    });

    describe('querystring list of strings', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            location: 'querystring',
                            locationName: 'item',
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'}
                                }
                            }
                        }
                    }
                },
            };
        });

        it('case 15', () => {
            operation.http = {
                method: 'GET',
                requestUri: '/path'
            };
    
            const result = restSerializer.serialize(operation, {
                Items: [
                    'value1',
                    'value2'
                ]
            });
    
            expect(result.method).toBe('GET');
            expect(result.body).toBe(null);
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({
                'item': ['value1', 'value2']
            });
        });
    });

    describe('string to string maps in querystring', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        PipelineId: {
                            location: 'uri',
                            shape: {type: 'string'}
                        },
                        QueryDoc: {
                            location: 'querystring',
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'}
                                }
                            }
                        }
                    }
                }
            };
        });

        it('case 16', () => {
            operation.http = {
                method: 'GET',
                requestUri: '/2014-01-01/jobsByPipeline/{PipelineId}'
            };
    
            const result = restSerializer.serialize(operation, {
                PipelineId: 'foo',
                QueryDoc: {
                    bar: 'baz',
                    fizz: 'buzz'
                }
            });
    
            expect(result.method).toBe('GET');
            expect(result.body).toBe(null);
            expect(result.path).toBe('/2014-01-01/jobsByPipeline/foo');
            expect(result.query).toEqual({
                'bar': 'baz',
                'fizz': 'buzz'
            });
        });
    });

    describe('string to string list maps in querystring', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        PipelineId: {
                            location: 'uri',
                            shape: {type: 'string'}
                        },
                        QueryDoc: {
                            location: 'querystring',
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {
                                        type: 'list',
                                        member: {
                                            shape: {type: 'string'}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
        });

        it('case 17', () => {
            operation.http = {
                method: 'GET',
                requestUri: '/2014-01-01/jobsByPipeline/{PipelineId}'
            };
    
            const result = restSerializer.serialize(operation, {
                PipelineId: 'id',
                QueryDoc: {
                    foo: ['bar', 'baz'],
                    fizz: ['buzz', 'pop']
                }
            });
    
            expect(result.method).toBe('GET');
            expect(result.body).toBe(null);
            expect(result.path).toBe('/2014-01-01/jobsByPipeline/id');
            expect(result.query).toEqual({
                'foo': ['bar', 'baz'],
                'fizz': ['buzz', 'pop']
            });
        });
    });

    describe('boolean in querystring', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        BoolQuery: {
                            location: 'querystring',
                            locationName: 'bool-query',
                            shape: {type: 'boolean'}
                        }
                    }
                }
            };
        });

        it('case 18', () => {
            operation.http = {
                method: 'GET',
                requestUri: '/path'
            };
    
            const result = restSerializer.serialize(operation, {
                BoolQuery: true
            });
    
            expect(result.method).toBe('GET');
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({
                'bool-query': 'true'
            });
            expect(result.body).toBe(null);
        });

        it('case 19', () => {
            operation.http = {
                method: 'GET',
                requestUri: '/path'
            };
    
            const result = restSerializer.serialize(operation, {
                BoolQuery: false
            });
    
            expect(result.method).toBe('GET');
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({
                'bool-query': 'false'
            });
            expect(result.body).toBe(null);
        });
    });

    describe('string payload', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    payload: 'foo',
                    members: {
                        foo: {
                            shape: {type: 'string'}
                        }
                    }
                }
            };
        });

        it('case 20', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/'
            };
    
            const result = restSerializer.serialize(operation, {
                foo: 'bar'
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/');
            expect(result.query).toEqual({});
            expect(result.body).toBe('bar');
        });
    });

    describe('blob payload', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    payload: 'foo',
                    members: {
                        foo: {
                            shape: {type: 'blob'}
                        }
                    }
                }
            };
        });

        it('case 21', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/'
            };
    
            const result = restSerializer.serialize(operation, {
                foo: 'bar'
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/');
            expect(result.query).toEqual({});
            expect(result.body).toBe('bar');
        });

        it('case 22', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/'
            };
    
            const result = restSerializer.serialize(operation, {});
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/');
            expect(result.query).toEqual({});
            expect(result.body).toBe('');
        });
    });

    describe('structure payload', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    payload: 'foo',
                    members: {
                        foo: {
                            locationName: 'foo',
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    baz: {
                                        shape: {type: 'string'}
                                    }
                                }
                            }
                        }
                    }
                }
            };
        });

        it('case 23', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/'
            };
    
            const result = restSerializer.serialize(operation, {
                foo: {
                    baz: 'bar'
                }
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/');
            expect(result.query).toEqual({});
            expect(result.body).toBe('<foo><baz>bar</baz></foo>');
        });

        it('case 24', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/'
            };
    
            const result = restSerializer.serialize(operation, {});
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/');
            expect(result.query).toEqual({});
            expect(result.body).toBe('');
        });

        it('case 25', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/'
            };
    
            const result = restSerializer.serialize(operation, {
                foo: {}
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/');
            expect(result.query).toEqual({});
            expect(result.body).toBe('<foo/>');
        });

        it('case 26', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/'
            };
    
            const result = restSerializer.serialize(operation, {
                foo: null
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/');
            expect(result.query).toEqual({});
            expect(result.body).toBe('');
        });
    });

    describe('XML Attribute', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    payload: 'Grant',
                    members: {
                        Grant: {
                            locationName: 'Grant',
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Grantee: {
                                        xmlNamespace: {
                                            prefix: 'xsi',
                                            uri: 'http://www.w3.org/2001/XMLSchema-instance'
                                        },
                                        shape: {
                                            type: 'structure',
                                            required: [],
                                            members: {
                                                Type: {
                                                    locationName: 'xsi:type',
                                                    xmlAttribute: true,
                                                    shape: {type: 'string'}
                                                },
                                                EmailAddress: {
                                                    shape: {type: 'string'}
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

        it('case 27', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/'
            };
    
            const result = restSerializer.serialize(operation, {
                Grant: {
                    Grantee: {
                        EmailAddress: 'foo@example.com',
                        Type: 'CanonicalUser'
                    }
                }
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/');
            expect(result.query).toEqual({});
            expect(result.body).toBe('<Grant><Grantee xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:type=\"CanonicalUser\"><EmailAddress>foo@example.com</EmailAddress></Grantee></Grant>');
        });
    });

    describe('greedy keys', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Bucket: {
                            location: 'uri',
                            shape: {type: 'string'}
                        },
                        Key: {
                            location: 'uri',
                            shape: {type: 'string'}
                        }
                    }
                }
            };
        });

        it('case 28', () => {
            operation.http = {
                method: 'GET',
                requestUri: '/{Bucket}/{Key+}'
            };
    
            const result = restSerializer.serialize(operation, {
                Key: 'testing /123',
                Bucket: 'my/bucket'
            });
    
            expect(result.method).toBe('GET');
            expect(result.path).toBe('/my%2Fbucket/testing%20/123');
            expect(result.query).toEqual({});
            expect(result.body).toBe(null);
        });
    });

    describe('omits null query params, but serializes empty strings', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        foo: {
                            location: 'querystring',
                            locationName: 'param-name',
                            shape: {type: 'string'}
                        }
                    }
                }
            };
        });

        it('case 29', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/path'
            };
    
            const result = restSerializer.serialize(operation, {
                foo: null
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({});
            expect(result.body).toBe('');
        });

        it('case 30', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/path?abc=mno'
            };
    
            const result = restSerializer.serialize(operation, {
                foo: ''
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({
                abc: 'mno',
                'param-name': ''
            });
            expect(result.body).toBe('');
        });
    });

    describe('recursive shapes', () => {
        beforeEach(() => {
            operation.input = {
                locationName: 'OperationRequest',
                xmlNamespace: {
                    uri: 'https://foo/'
                },
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        RecursiveStruct: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    NoRecurse: {
                                        shape: {type: 'string'}
                                    },
                                    RecursiveStruct: {
                                        shape: null as any
                                    },
                                    RecursiveList: {
                                        shape: {
                                            type: 'list',
                                            member: {
                                                shape: null as any
                                            }
                                        }
                                    },
                                    RecursiveMap: {
                                        shape: {
                                            type: 'map',
                                            key: {
                                                shape: {type: 'string'}
                                            },
                                            value: {
                                                shape: null as any
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };

            const recursiveShape = (operation as any).input.shape.members.RecursiveStruct.shape;
            (operation as any).input.shape.members.RecursiveStruct.shape.members.RecursiveStruct.shape = recursiveShape;
            (operation as any).input.shape.members.RecursiveStruct.shape.members.RecursiveList.shape.member.shape = recursiveShape;
            (operation as any).input.shape.members.RecursiveStruct.shape.members.RecursiveMap.shape.value.shape = recursiveShape;

        });

        it('case 31', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/path'
            };

    
            const result = restSerializer.serialize(operation, {
                RecursiveStruct: {
                    NoRecurse: 'foo'
                }
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({});
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><RecursiveStruct><NoRecurse>foo</NoRecurse></RecursiveStruct></OperationRequest>');
        });

        it('case 32', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/path'
            };

    
            const result = restSerializer.serialize(operation, {
                RecursiveStruct: {
                    RecursiveStruct: {
                        NoRecurse: 'foo'
                    }
                }
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({});
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><RecursiveStruct><RecursiveStruct><NoRecurse>foo</NoRecurse></RecursiveStruct></RecursiveStruct></OperationRequest>');
        });

        it('case 33', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/path'
            };

    
            const result = restSerializer.serialize(operation, {
                RecursiveStruct: {
                    RecursiveStruct: {
                        RecursiveStruct: {
                            RecursiveStruct: {
                                NoRecurse: 'foo'
                            }
                        }
                    }
                }
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({});
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><RecursiveStruct><RecursiveStruct><RecursiveStruct><RecursiveStruct><NoRecurse>foo</NoRecurse></RecursiveStruct></RecursiveStruct></RecursiveStruct></RecursiveStruct></OperationRequest>');
        });

        it('case 34', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/path'
            };

    
            const result = restSerializer.serialize(operation, {
                RecursiveStruct: {
                    RecursiveList: [
                        {
                            NoRecurse: 'foo'
                        },
                        {
                            NoRecurse: 'bar'
                        }
                    ]
                }
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({});
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><RecursiveStruct><RecursiveList><member><NoRecurse>foo</NoRecurse></member><member><NoRecurse>bar</NoRecurse></member></RecursiveList></RecursiveStruct></OperationRequest>');
        });

        it('case 35', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/path'
            };

    
            const result = restSerializer.serialize(operation, {
                RecursiveStruct: {
                    RecursiveList: [
                        {
                            NoRecurse: 'foo'
                        },
                        {
                            RecursiveStruct: {
                                NoRecurse: 'bar'
                            }
                        }
                    ]
                }
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({});
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><RecursiveStruct><RecursiveList><member><NoRecurse>foo</NoRecurse></member><member><RecursiveStruct><NoRecurse>bar</NoRecurse></RecursiveStruct></member></RecursiveList></RecursiveStruct></OperationRequest>');
        });

        it('case 36', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/path'
            };

    
            const result = restSerializer.serialize(operation, {
                RecursiveStruct: {
                    RecursiveMap: {
                        foo: {
                            NoRecurse: 'foo'
                        },
                        bar: {
                            NoRecurse: 'bar'
                        }
                    }
                }
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/path');
            expect(result.query).toEqual({});
            expect(result.body).toBe('<OperationRequest xmlns=\"https://foo/\"><RecursiveStruct><RecursiveMap><entry><key>foo</key><value><NoRecurse>foo</NoRecurse></value></entry><entry><key>bar</key><value><NoRecurse>bar</NoRecurse></value></entry></RecursiveMap></RecursiveStruct></OperationRequest>');
        });

    });

    describe('timestamp in header', () => {
        beforeEach(() => {
            operation.input = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        TimeArgInHeader: {
                            location: 'header',
                            locationName: 'x-amz-timearg',
                            shape: {type: 'timestamp'}
                        }
                    }
                }
            };
        });

        it('case 37', () => {
            operation.http = {
                method: 'POST',
                requestUri: '/path'
            };
    
            const result = restSerializer.serialize(operation, {
                TimeArgInHeader: 1422172800
            });
    
            expect(result.method).toBe('POST');
            expect(result.path).toBe('/path');
            expect(result.headers).toMatchObject({
                'x-amz-timearg': 'Sun, 25 Jan 2015 08:00:00 GMT'
            });
            expect(result.body).toBe('');
        });
    });
});