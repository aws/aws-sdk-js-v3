import {XmlBodyBuilder} from './XmlBodyBuilder';
import {
    HttpEndpoint,
    Member,
    OperationModel
} from '@aws-sdk/types';

const operation: OperationModel = {
    http: {
        method: 'PUT',
        requestUri: '/'
    },
    name: 'Test',
    metadata: {
        apiVersion: '2017-09-21',
        endpointPrefix: 'foo',
        protocol: 'rest-xml',
        serviceFullName: 'AWS Foo Service',
        signatureVersion: 'v4',
        uid: 'foo-2017-09-21'
    },
    input: <any>{},
    output: <any>{},
    errors: []
};

describe('XmlBodyBuilder', () => {
    const xmlBodyBuilder = new XmlBodyBuilder(jest.fn(), jest.fn());

    describe('#build', () => {
        afterEach(() => {
            delete operation.metadata.timestampFormat;
            delete operation.input;
        });

        it('ignores null input', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        foo: {
                            shape: {type: 'string'},
                            locationName: 'Foo',
                        },
                        baz: {
                            shape: {type: 'string'},
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                foo: null,
                baz: void 0
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe('');
        });

        it('ignores non-body members', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        header: {
                            shape: {type: 'string'},
                            locationName: 'Foo',
                            location: 'header',
                        },
                        headers: {
                            shape: {type: 'string'},
                            location: 'headers',
                        },
                        body: {
                            shape: {type: 'string'},
                        },
                        queryString: {
                            shape: {type: 'string'},
                            location: 'querystring',
                        },
                        statusCode: {
                            shape: {type: 'string'},
                            location: 'statusCode',
                        },
                        uri: {
                            shape: {type: 'string'},
                            location: 'uri',
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                header: 'header',
                headers: 'headers',
                body: 'body',
                queryString: 'queryString',
                statusCode: 'statusCode',
                uri: 'uri'
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<body>body</body>` +
                `</TestRequest>`
            );
        });

        it('wraps simple structures with location of body', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        foo: {
                            shape: {type: 'string'},
                            locationName: 'Foo',
                        },
                        baz: {
                            shape: {type: 'integer'},
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                foo: 'abc',
                baz: 123
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Foo>abc</Foo>` +
                    `<baz>123</baz>` +
                `</TestRequest>`
            );
        });

        it('serializes structures into XML', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        foo: {
                            shape: {type: 'string'},
                        },
                        details: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Count: {
                                        shape: {type: 'integer'},
                                    },
                                    State: {
                                        shape: {type: 'string'},
                                    }
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                foo: 'abc',
                details: {
                    Count: 42,
                    State: 'Enabled'
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<foo>abc</foo>` +
                    `<details>` +
                        `<Count>42</Count>` +
                        `<State>Enabled</State>` +
                    `</details>` +
                `</TestRequest>`
            );
        });

        it('serializes empty structures as empty elements', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Config: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Foo: {
                                        shape: {type: 'string'},
                                    },
                                    Bar: {
                                        shape: {type: 'string'},
                                    }
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Config: {}
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Config/>` +
                `</TestRequest>`
            );
        });

        it('does not serialize missing members', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Config: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Foo: {
                                        shape: {type: 'string'},
                                    },
                                    Bar: {
                                        shape: {type: 'string'},
                                    }
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Config: {
                    Foo: 'abc'
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Config>` +
                        `<Foo>abc</Foo>` +
                    `</Config>` +
                `</TestRequest>`
            );
        });

        it('serializes lists (default member names)', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Aliases: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Aliases: ['abc', 'mno', 'xyz']
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Aliases>` +
                        `<member>abc</member>` +
                        `<member>mno</member>` +
                        `<member>xyz</member>` +
                    `</Aliases>` +
                `</TestRequest>`
            );
        });

        it('serializes lists (custom member names)', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Aliases: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                    locationName: 'Alias'
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Aliases: ['abc', 'mno', 'xyz']
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Aliases>` +
                        `<Alias>abc</Alias>` +
                        `<Alias>mno</Alias>` +
                        `<Alias>xyz</Alias>` +
                    `</Aliases>` +
                `</TestRequest>`
            );
        });

        it('includes list elements even if they have no members', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Aliases: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                    locationName: 'Alias'
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Aliases: []
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Aliases/>` +
                `</TestRequest>`
            );
        });

        it('serializes lists of structures', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Points: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {
                                        type: 'structure',
                                        required: [],
                                        members: {
                                            X: {
                                                shape: {type: 'float'},
                                            },
                                            Y: {
                                                shape: {type: 'float'},
                                            }
                                        }
                                    },
                                    locationName: 'Point'
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Points: [
                    {
                        X: 1.2,
                        Y: 2.1
                    },
                    {
                        X: 3.4,
                        Y: 4.3
                    }
                ]
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Points>` +
                        `<Point>` +
                            `<X>1.2</X>` +
                            `<Y>2.1</Y>` +
                        `</Point>` +
                        `<Point>` +
                            `<X>3.4</X>` +
                            `<Y>4.3</Y>` +
                        `</Point>` +
                    `</Points>` +
                `</TestRequest>`
            );
        });

        it('serializes flattened lists without a base wrapper', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Aliases: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                },
                                flattened: true
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Aliases: ['abc', 'mno', 'xyz']
            };

            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Aliases>abc</Aliases>` +
                    `<Aliases>mno</Aliases>` +
                    `<Aliases>xyz</Aliases>` +
                `</TestRequest>`
            );
        });

        it('omits flattened list elements when no members are given', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Aliases: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                    locationName: 'Alias'
                                },
                                flattened: true
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Aliases: []
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe('');
        });

        it('serializes flattened lists of structures', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Points: {
                            shape: {
                                type: 'list',
                                flattened: true,
                                member: {
                                    shape: {
                                        type: 'structure',
                                        required: [],
                                        members: {
                                            X: {
                                                shape: {type: 'float'},
                                            },
                                            Y: {
                                                shape: {type: 'float'},
                                            }
                                        }
                                    },
                                    locationName: 'Point'
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Points: [
                    {
                        X: 1.2,
                        Y: 2.1
                    },
                    {
                        X: 3.4,
                        Y: 4.3
                    }
                ]
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Point>` +
                        `<X>1.2</X>` +
                        `<Y>2.1</Y>` +
                    `</Point>` +
                    `<Point>` +
                        `<X>3.4</X>` +
                        `<Y>4.3</Y>` +
                    `</Point>` +
                `</TestRequest>`
            );
        });

        it('serializes iterators as lists', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Aliases: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Aliases: (function* () {
                    yield 'abc',
                    yield 'mno',
                    yield 'xyz'
                })()
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Aliases>` +
                        `<member>abc</member>` +
                        `<member>mno</member>` +
                        `<member>xyz</member>` +
                    `</Aliases>` +
                `</TestRequest>`
            );
        });

        it('throws if a non-iteratorable is provided as a list', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Aliases: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Aliases: 123
            };
            expect(() => xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toThrow();
        });

        it('serializes maps', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Items: {
                    foo: 'bar',
                    baz: 'bum'
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Items>` +
                        `<entry>` +
                            `<key>foo</key>` +
                            `<value>bar</value>` +
                        `</entry>` +
                        `<entry>` +
                            `<key>baz</key>` +
                            `<value>bum</value>` +
                        `</entry>` +
                    `</Items>` +
                `</TestRequest>`
            );
        });

        it('serializes [key, value] iterables as maps', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Items: (function* () {
                    yield ['foo', 'bar'];
                    yield ['baz', 'bum'];
                })()
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Items>` +
                        `<entry>` +
                            `<key>foo</key>` +
                            `<value>bar</value>` +
                        `</entry>` +
                        `<entry>` +
                            `<key>baz</key>` +
                            `<value>bum</value>` +
                        `</entry>` +
                    `</Items>` +
                `</TestRequest>`
            );
        });

        it('serializes maps with custom key and value names', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'},
                                    locationName: 'MKEY'
                                },
                                value: {
                                    shape: {type: 'string'},
                                    locationName: 'MVALUE'
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Items: {
                    foo: 'bar',
                    baz: 'bum'
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Items>` +
                        `<entry>` +
                            `<MKEY>foo</MKEY>` +
                            `<MVALUE>bar</MVALUE>` +
                        `</entry>` +
                        `<entry>` +
                            `<MKEY>baz</MKEY>` +
                            `<MVALUE>bum</MVALUE>` +
                        `</entry>` +
                    `</Items>` +
                `</TestRequest>`
            );
        });

        it('ignores maps that are null', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Items: null
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe('');
        });

        it('ignores maps that are undefined', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Items: undefined
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe('');
        });

        it('serializes flattened maps (member flattened)', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            locationName: 'Item',
                            flattened: true,
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Items: {
                    foo: 'bar',
                    baz: 'bum'
                }
            };

            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Item>` +
                        `<key>foo</key>` +
                        `<value>bar</value>` +
                    `</Item>` +
                    `<Item>` +
                        `<key>baz</key>` +
                        `<value>bum</value>` +
                    `</Item>` +
                `</TestRequest>`
            );
        });

        it('serializes flattened maps (shape flattened)', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            locationName: 'Item',
                            shape: {
                                type: 'map',
                                flattened: true,
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Items: {
                    foo: 'bar',
                    baz: 'bum'
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Item>` +
                        `<key>foo</key>` +
                        `<value>bar</value>` +
                    `</Item>` +
                    `<Item>` +
                        `<key>baz</key>` +
                        `<value>bum</value>` +
                    `</Item>` +
                `</TestRequest>`
            );
        });

        it('serializes flattened maps with custom key and value names', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            locationName: 'Item',
                            flattened: true,
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'},
                                    locationName: 'MKEY'
                                },
                                value: {
                                    shape: {type: 'string'},
                                    locationName: 'MVALUE',
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Items: {
                    foo: 'bar',
                    baz: 'bum'
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Item>` +
                        `<MKEY>foo</MKEY>` +
                        `<MVALUE>bar</MVALUE>` +
                    `</Item>` +
                    `<Item>` +
                        `<MKEY>baz</MKEY>` +
                        `<MVALUE>bum</MVALUE>` +
                    `</Item>` +
                `</TestRequest>`
            );
        });
        
        it('ignores flattened maps that are null', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            locationName: 'Item',
                            flattened: true,
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Items: null
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe('');
        });

        it('ignores flattened maps that are undefined', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            locationName: 'Item',
                            flattened: true,
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Items: undefined
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe('');
        });

        it('should throw if a non-iterable and non-object is provided for map', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Items: {
                            locationName: 'Item',
                            flattened: true,
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'string'}
                                },
                                value: {
                                    shape: {type: 'string'},
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;

            let toSerialize = {
                Items: 123
            };
            expect(() => xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toThrow();
        });

        it('serializes integers', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Count: {
                            shape: {type: 'integer'},
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Count: 123.0
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Count>123</Count>` +
                `</TestRequest>`
            );
        });

        it('ignores null integers', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Count: {
                            shape: {type: 'integer'},
                        },
                        Nested: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Max: {
                                        shape: {type: 'integer'},
                                    }
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Count: 3,
                Nested: {
                    Max: null
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Count>3</Count>` +
                    `<Nested/>` +
                `</TestRequest>`
            );
        });

        it('ignores undefined integers', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Count: {
                            shape: {type: 'integer'},
                        },
                        Nested: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Max: {
                                        shape: {type: 'integer'},
                                    }
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Count: 3,
                Nested: {
                    Max: undefined
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Count>3</Count>` +
                    `<Nested/>` +
                `</TestRequest>`
            );
        });

        it('serializes floats', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Count: {
                            shape: {type: 'float'},
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Count: 123.123
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Count>123.123</Count>` +
                `</TestRequest>`
            );
        });

        it('serializes integers and floats passed as strings', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        CountI: {
                            shape: {type: 'integer'},
                        },
                        CountF: {
                            shape: {type: 'float'},
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                CountI: '123.0',
                CountF: '123.4',
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<CountI>123</CountI>` +
                    `<CountF>123.4</CountF>` +
                `</TestRequest>`
            );
        });

        it('serializes booleans', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Enabled: {
                            shape: {type: 'boolean'},
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Enabled: true
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Enabled>true</Enabled>` +
                `</TestRequest>`
            );
            toSerialize.Enabled = false;
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Enabled>false</Enabled>` +
                `</TestRequest>`
            );
        });

        it('serializes timestamps (iso8601)', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Expires: {
                            shape: {
                                type: 'timestamp',
                                timestampFormat: 'iso8601'
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const time = new Date(0);
            const toSerialize = {
                Expires: time
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Expires>1970-01-01T00:00:00Z</Expires>` +
                `</TestRequest>`
            );
        });

        it('serializes timestamps (rfc822)', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Expires: {
                            shape: {
                                type: 'timestamp',
                                timestampFormat: 'rfc822'
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const time = new Date(0);
            const toSerialize = {
                Expires: time
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Expires>Thu, 01 Jan 1970 00:00:00 GMT</Expires>` +
                `</TestRequest>`
            );
        });

        it('serializes timestamps (unixTimestmap)', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Expires: {
                            shape: {
                                type: 'timestamp',
                                timestampFormat: 'unixTimestamp'
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const time = new Date(0);
            const toSerialize = {
                Expires: time
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Expires>0</Expires>` +
                `</TestRequest>`
            );
        });

        it('serializes timestamps using iso8601 if no format is defined', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Expires: {
                            shape: {
                                type: 'timestamp'
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const time = new Date(0);
            const toSerialize = {
                Expires: time
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Expires>1970-01-01T00:00:00Z</Expires>` +
                `</TestRequest>`
            );
        });

        describe('blobs', () => {
            const base64Encode = jest.fn(arg => arg);
            const utf8Decode = jest.fn(arg => arg);

            const xmlBodyBuilder = new XmlBodyBuilder(base64Encode, utf8Decode);

            beforeEach(() => {
                base64Encode.mockClear();
                utf8Decode.mockClear();
                operation.input = {
                    shape: {
                        type: 'structure',
                        required: [],
                        members: {
                            Data: {
                                shape: {
                                    type: 'blob'
                                },
                            }
                        }
                    },
                }
            });

            it('should base64 encode ArrayBuffers', () => {
                const toSerialize = {
                    Data: new ArrayBuffer(2)
                };
                xmlBodyBuilder.build({
                    operation,
                    input: toSerialize,
                    member: operation.input
                });

                expect(base64Encode.mock.calls.length).toBe(1);
            });

            it('should base64 encode ArrayBufferViews', () => {
                const toSerialize = {
                    Data: Uint8Array.from([0])
                };
                xmlBodyBuilder.build({
                    operation,
                    input: toSerialize,
                    member: operation.input
                });

                expect(base64Encode.mock.calls.length).toBe(1);
            });

            it('should utf8 decode and base64 encode strings', () => {
                const toSerialize = {
                    Data: 'foo'
                };
                xmlBodyBuilder.build({
                    operation,
                    input: toSerialize,
                    member: operation.input
                });

                expect(base64Encode.mock.calls.length).toBe(1);
                expect(utf8Decode.mock.calls.length).toBe(1);
            });

            it('should ignore null blobs', () => {
                const toSerialize = {
                    Data: null
                };
                expect(xmlBodyBuilder.build({
                    operation,
                    input: toSerialize,
                    member: operation.input
                })).toBe('');
                expect(base64Encode.mock.calls.length).toBe(0);
                expect(utf8Decode.mock.calls.length).toBe(0);
            });

            it('should ignore undefined blobs', () => {
                const toSerialize = {
                    Data: undefined
                };
                expect(xmlBodyBuilder.build({
                    operation,
                    input: toSerialize,
                    member: operation.input
                })).toBe('');
                expect(base64Encode.mock.calls.length).toBe(0);
                expect(utf8Decode.mock.calls.length).toBe(0);
            });
        });

        it('serializes xml attributes', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Config: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Foo: {
                                        shape: {type: 'string'},
                                    },
                                    Attr: {
                                        shape: {type: 'string'},
                                        xmlAttribute: true,
                                        locationName: 'attr:name',
                                    }
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Config: {
                    Foo: 'bar',
                    Attr: 'abc'
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Config attr:name="abc">` +
                        `<Foo>bar</Foo>` +
                    `</Config>` +
                `</TestRequest>`
            );
        });

        it('uses input xml namespace over service namespace', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Foo: {
                            shape: {type: 'string'},
                        }
                    }
                },
                xmlNamespace: {
                    uri: 'http://input.amazonaws.com/doc/2017-09-21'
                },
            };
            operation.input = input;
            const toSerialize = {
                Foo: 'bar'
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest xmlns="http://input.amazonaws.com/doc/2017-09-21">` +
                    `<Foo>bar</Foo>` +
                `</TestRequest>`
            );
        });

        it('will use xml namespace prefix if provided', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Foo: {
                            shape: {type: 'string'},
                        }
                    }
                },
                xmlNamespace: {
                    uri: 'http://input.amazonaws.com/doc/2017-09-21',
                    prefix: 'pre'
                }
            };
            operation.input = input;
            const toSerialize = {
                Foo: 'bar'
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest xmlns:pre="http://input.amazonaws.com/doc/2017-09-21">` +
                    `<Foo>bar</Foo>` +
                `</TestRequest>`
            );
        });

        it('does not need an xml namespace at the root element', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Foo: {
                            shape: {type: 'string'},
                        }
                    }
                },
            };
            delete operation.metadata.xmlNamespace;
            operation.input = input;
            const toSerialize = {
                Foo: 'bar'
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Foo>bar</Foo>` +
                `</TestRequest>`
            );
        });

        it('can add xml namespaces on structures', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Config: {
                            xmlNamespace: {
                                uri: 'URI'
                            },
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Foo: {
                                        shape: {type: 'string'},
                                    },
                                    Attr: {
                                        shape: {type: 'string'},
                                        xmlAttribute: true,
                                        locationName: 'attr:name',
                                    }
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Config: {
                    Foo: 'bar'
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Config xmlns="URI">` +
                        `<Foo>bar</Foo>` +
                    `</Config>` +
                `</TestRequest>`
            );
        });

        it('can add xml namespaces with prefix on structures', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Config: {
                            xmlNamespace: {
                                uri: 'URI',
                                prefix: 'xsi'
                            },
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Foo: {
                                        shape: {type: 'string'},
                                    },
                                    Attr: {
                                        shape: {type: 'string'},
                                        xmlAttribute: true,
                                        locationName: 'attr:name',
                                    }
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Config: {
                    Foo: 'bar'
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Config xmlns:xsi="URI">` +
                        `<Foo>bar</Foo>` +
                    `</Config>` +
                `</TestRequest>`
            );
        });

        it('can add xml namespaces with prefix on structures that have other attributes', () => {
            const input: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Config: {
                            xmlNamespace: {
                                uri: 'URI',
                                prefix: 'xsi'
                            },
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    Foo: {
                                        shape: {type: 'string'},
                                    },
                                    Bar: {
                                        shape: {type: 'string'},
                                        xmlAttribute: true,
                                        locationName: 'xsi:label',
                                    }
                                }
                            },
                        }
                    }
                },
            };
            operation.input = input;
            const toSerialize = {
                Config: {
                    Foo: 'bar',
                    Bar: 'xyz'
                }
            };
            expect(xmlBodyBuilder.build({
                operation,
                input: toSerialize,
                member: input
            })).toBe(
                `<TestRequest>` +
                    `<Config xmlns:xsi="URI" xsi:label="xyz">` +
                        `<Foo>bar</Foo>` +
                    `</Config>` +
                `</TestRequest>`
            );
        });

        describe('payloads', () => {
            it('are ignored if input is undefined', () => {
                const input: Member = {
                    shape: {
                        type: 'structure',
                        required: [],
                        members: {
                            Data: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        Foo: {
                                            shape: {type: 'string'},
                                        }
                                    }
                                },
                            }
                        },
                        payload: 'Data'
                    },
                };
                operation.input = input;
                const toSerialize = {
                    Data: undefined
                };
                expect(xmlBodyBuilder.build({
                    operation,
                    input: toSerialize.Data,
                    member: (input as any).shape.members.Data,
                    hasPayload: true
                })).toBe('');
            });

            it('can emit empty root elements', () => {
                const input: Member = {
                    shape: {
                        type: 'structure',
                        required: [],
                        members: {
                            Data: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        Foo: {
                                            shape: {type: 'string'},
                                        }
                                    }
                                },
                            }
                        },
                        payload: 'Data'
                    },
                };
                operation.input = input;
                const toSerialize = {
                    Data: ''
                };
                expect(xmlBodyBuilder.build({
                    operation,
                    input: toSerialize.Data,
                    member: (input as any).shape.members.Data,
                    hasPayload: true,
                    memberName: 'Data'
                })).toBe('<Data/>');
            });
        });

    });
});