import {XmlBodyParser} from "./";
import {Member} from "@aws-sdk/types";

describe('XmlBodyParser', () => {
    describe('result wrapper', () => {
        const rules: Member = {
            resultWrapper: 'OperationResult',
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Str: {shape: {type: 'string'}}
                }
            }
        }
        const parser = new XmlBodyParser(jest.fn());
        it('should wrap the shap with a structure with wrapper name as member name', () => {
            let xml = '<xml><OperationResult><Str>foo</Str></OperationResult></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Str: 'foo'
            });
        })
    });

    describe('structure', () => {
        const parser = new XmlBodyParser(jest.fn());
        it('should parse empty structure as {}', () => {
            let empty: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {}
                }
            };
            let xml = '<xml><Name>bar</Name></xml>';
            expect(parser.parse(empty, xml)).toEqual({});
        })

        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Item: {
                        shape: {
                            type: 'structure',
                            required: [],
                            members: {
                                Name: {
                                    shape: {type: 'string'},
                                }
                            }
                        }
                    }
                }
            }
        };

        it('should parse structure', () => {
            let xml = '<xml><Item><Name>bar</Name></Item></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Item: {
                    Name: 'bar'
                }
            });
        });

        it('should parse empty objects as {}', () => {
            let emptyObj = '<xml><Item/></xml>';
            expect(parser.parse(rules, emptyObj)).toEqual({
                Item: {}
            });
        });

        let rulesWithTag: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Item: {
                        shape: {
                            type: 'structure',
                            required: [],
                            members: {
                                Name: {
                                    shape: {type: 'string'},
                                    xmlAttribute: true,
                                    locationName: 'xsi:name'
                                },
                                Age: {
                                    shape: {type: 'integer'},
                                }
                            }
                        },
                    }
                }
            }
        };

        it('should parse attributes from tags', () => {
            let xml = `
            <xml xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <Item xsi:name="name"><Age>18</Age></Item>
            </xml>`;
            expect(parser.parse(rulesWithTag, xml)).toEqual({
                Item: {
                    Name: 'name',
                    Age: 18
                }
            });
        });
    });

    describe('list', () => {
        let parser = new XmlBodyParser(jest.fn());
        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    items: {
                        shape: {
                            type: 'list',
                            member: {
                                shape: {type: 'string'},
                            }
                        },
                    }
                }
            }
        };
        it('should parse missing list as []', () => {
            let xml = '<xml></xml>'
            expect(parser.parse(rules, xml)).toEqual({
                items: []
            });
        });

        it('should parse list with only one entry', () => {
            let xml = '<xml><items><member>bar</member></items></xml>'
            expect(parser.parse(rules, xml)).toEqual({
                items: ['bar']
            });
        });

        it('should parse list with undefined entry', () => {
            let xml = '<xml><items><member></member></items></xml>'
            expect(parser.parse(rules, xml)).toEqual({
                items: []
            });
        });

        it('should use locationName when finding members', () => {
            let xml = `
            <xml>
                <items><item>abc</item>
                <item>xyz</item></items>
            </xml>`;
            let rules: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        items: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type: 'string'},
                                    locationName: 'item'
                                }
                            },
                        }
                    }
                }
            };
            expect(parser.parse(rules, xml)).toEqual({
                items: ['abc', 'xyz']
            });
        });

        it('can parse a list of structure', () => {
            let xml = `
            <xml>
                <People>
                    <member><Name>abc</Name></member>
                    <member><Name>xyz</Name></member>
                </People>
            </xml>`;
            let rules: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        People: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {
                                        type: 'structure',
                                        required: [],
                                        members: {
                                            Name: {
                                                shape: {type: 'string'},
                                            }
                                        }
                                    },
                                }
                            },
                        }
                    }
                }
            };
            let parser = new XmlBodyParser(jest.fn());
            expect(parser.parse(rules, xml)).toEqual({
                People: [
                    {Name: 'abc'},
                    {Name: 'xyz'}
                ]
            });
        });

        it('can parse flattened lists composed of complex obects', () => {
            let xml = `
            <xml>
                <name>Name</name>
                <complexValue>
                    <a>1</a>
                    <b>2</b>
                </complexValue>
                <complexValue>
                    <a>3</a>
                    <b>4</b>
                </complexValue>
            </xml>`;
            let rules: Member = {
                shape: {
                    type: "structure",
                    required: [],
                    members: {
                        name: {
                            shape: {type: "string"},
                        },
                        values: {
                            shape: {
                                type: "list",
                                member: {
                                    shape: {
                                        type: "structure",
                                        required: [],
                                        members: {
                                            a: {
                                                shape: {type: "integer"},
                                            },
                                            b: {
                                                shape: {type: "integer"},
                                            }
                                        }
                                    },
                                    locationName: "complexValue"
                                },
                                flattened: true
                            },
                        }
                    }
                }
            }
            expect(parser.parse(rules, xml)).toEqual(
                {
                    name: 'Name',
                    values: [
                        {a: 1, b: 2},
                        {a: 3, b: 4}
                    ]
                }
            );
        });

        it('should parse flattened list', () => {
            let xml = '<xml><Items>Jack</Items><Items>Rose</Items></xml>';
            let rules: Member = {
                shape: {
                    type: "structure",
                    required: [],
                    members: {
                        Items: {
                            shape: {
                                type: "list",
                                member: {
                                    shape: {type: "string"},
                                },
                                flattened: true
                            },
                        }
                    }
                }
            }
            expect(parser.parse(rules, xml)).toEqual({
                Items: ['Jack', 'Rose']
            });
        });

        it('should parse flattened list with only 1 item', () => {
            let xml = '<xml><Items>Jack</Items></xml>';
            let rules: Member = {
                shape: {
                    type: "structure",
                    required: [],
                    members: {
                        Items: {
                            shape: {
                                type: "list",
                                member: {
                                    shape: {type: "string"},
                                },
                                flattened: true
                            },
                        }
                    }
                }
            }
            expect(parser.parse(rules, xml)).toEqual({
                Items: ['Jack']
            });
        });

        it('should parse list with attributes in tags', () => {
            let xml = '<xml><Item xsi:name="Jon"><Age>20</Age></Item><Item xsi:name="Lee"><Age>18</Age></Item></xml>';
            let rules: Member = {
                shape: {
                    type: "structure",
                    required: [],
                    members: {
                        Items: {
                            shape: {
                                type: "list",
                                member: {
                                    shape: {
                                        type: "structure",
                                        required: [],
                                        members: {
                                            Name: {
                                                shape: {type: "string"},
                                                xmlAttribute: true,
                                                locationName: 'xsi:name'
                                            },
                                            Age: {
                                                shape: {type: "integer"},
                                            }
                                        }
                                    },
                                    locationName: "Item"
                                },
                                flattened: true
                            },
                        }
                    }
                }
            }

            expect(parser.parse(rules, xml)).toEqual({
                Items: [
                    {Name: 'Jon', Age: 20},
                    {Name: 'Lee', Age: 18}
                ]
            });
        });
    });

    describe('maps', () => {
        const parser = new XmlBodyParser(jest.fn());
        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    SummaryMap: {
                        shape: {
                            type: 'map',
                            key: {shape: {type: 'string'}},
                            value: {
                                shape: {type: 'string'},
                            }
                        },
                    }
                }
            }
        }

        it('should parse empty maps as {}', () => {
            let xml = '<xml><SummaryMap/></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                SummaryMap: {}
            });
        });

        it('should parse map with default entry, key, value name', () => {
            let xml = `
            <xml>
                <SummaryMap>
                    <entry>
                        <key>firstName</key>
                        <value>Daniel</value>
                    </entry>
                    <entry>
                        <key>lastName</key>
                        <value>Wood</value>
                    </entry>
                </SummaryMap>
            </xml>`;
            expect(parser.parse(rules, xml)).toEqual({
                SummaryMap: {
                    firstName: 'Daniel',
                    lastName: 'Wood'
                }
            });
        });

        it('should parse map with only one key-value entry', () => {
            let xml = '<xml><SummaryMap><entry><key>firstName</key><value>Daniel</value></entry></SummaryMap></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                SummaryMap: {
                    firstName: 'Daniel'
                }
            });
        });

        it('should use designated name to target key and value members', () => {
            let rules: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Summary: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'integer'},
                                    locationName: 'Property'
                                },
                                value: {
                                    shape: {type: 'float'},
                                    locationName: 'Count'
                                }
                            },
                            locationName: 'SummaryMap'
                        }
                    }
                }
            }
            let xml = `
            <xml>
                <SummaryMap>
                    <entry>
                        <Property>Groups</Property>
                        <Count>31</Count>
                    </entry>
                    <entry>
                        <Property>GroupsQuota</Property>
                        <Count>50</Count>
                    </entry>
                </SummaryMap>
            </xml>`;
            expect(parser.parse(rules, xml)).toEqual({
                Summary: {
                    Groups: 31,
                    GroupsQuota: 50
                }
            });
        });

        it('should parse flattened map with default key value name', () => {
            let rules: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Attributes: {
                            shape: {
                                type: 'map',
                                key: {shape: {type: 'string'}},
                                value: {
                                    shape: {type: 'string'},
                                },
                                flattened: true
                            },
                        }
                    }
                }
            };
            let xml = `
            <xml>
                <Attributes>
                    <key>color</key>
                    <value>red</value>
                </Attributes>
                <Attributes>
                    <key>size</key>
                    <value>large</value>
                </Attributes>
            </xml>`;
            expect(parser.parse(rules, xml)).toEqual({
                Attributes: {
                    color: 'red',
                    size: 'large'
                }
            });
        });

        it('should parse flattened map with designated key value name', () => {
            let rules: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Attributes: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'integer'},
                                    locationName: 'AttrName'
                                },
                                value: {
                                    shape: {type: 'float'},
                                    locationName: 'AttrValue'
                                },
                                flattened: true
                            },
                            locationName: 'Attribute'
                        }
                    }
                }
            };
            let xml = `
            <xml>
                <Attribute>
                    <AttrName>age</AttrName>
                    <AttrValue>35</AttrValue>
                </Attribute>
                <Attribute>
                    <AttrName>height</AttrName>
                    <AttrValue>72</AttrValue>
                </Attribute>
            </xml>`;
            expect(parser.parse(rules, xml)).toEqual({
                Attributes: {
                    age: 35,
                    height: 72
                }
            });
        });
    });

    describe('timestamp', () => {
        const parser = new XmlBodyParser(jest.fn());
        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    CreatedAt: {
                        shape: {
                            type: 'timestamp'
                        },
                    }
                }
            }
        };

        it('should return undefined when provided empty tag', () => {
            let xml = '<xml><CreatedAt/></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: undefined
            });
        });

        it('should return undefined with missing timestamp', () => {
            let xml = '<xml></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: undefined
            });
        });

        it('should return undefined given content as \'null\'', () => {
            let xml = '<xml><CreatedAt>null</CreatedAt></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: undefined
            });
        });

        it('should return undefined when date format is unable to determined', () => {
            let xml = '<xml><CreatedAt>bar</CreatedAt></xml>'
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: undefined
            });
        })

        it('should parse iso8601 string', () => {
            let isoString = '2017-08-14T23:59:09.811Z';
            let xml = `<xml><CreatedAt>${isoString}</CreatedAt></xml>`;
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: new Date(isoString)
            });
        });

        it('should parse rfc822 string', () => {
            let rfcString = 'Tue, 29 Apr 2014 18:30:38 GMT';
            let xml = `<xml><CreatedAt>${rfcString}</CreatedAt></xml>`;
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: new Date(rfcString)
            });
        });

        it('should parse unixTimestamp', () => {
            let unixTime = 1398796238;
            let xml = `<xml><CreatedAt>${unixTime}</CreatedAt></xml>`;
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: new Date(unixTime * 1000)
            });
        });
    });

    describe('string', () => {
        const parser = new XmlBodyParser(jest.fn());
        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Name: {
                        shape: {
                            type: 'string'
                        },
                    }
                }
            }
        };

        it('should return undefined given an empty string', () => {
            let xml = '<xml><Name></Name></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Name: ''
            });
        });

        it('should parse a string', () => {
            let xml = '<xml><Name>abcd^&*😀💩</Name></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Name: 'abcd^&*😀💩'
            });
        });

        it('should return undefined with missing tag', () => {
            let xml = '<xml></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Name: undefined
            });
        });

        it('should return string literally given content as \'null\'', () => {
            let xml = '<xml><Name>null</Name></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Name: 'null'
            });
        });
    });

    describe('number', () => {
        const parser = new XmlBodyParser(jest.fn());
        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Quantities: {
                        shape: {
                            type: 'integer'
                        },
                    }
                }
            }
        };

        it('should return undefined given null', () => {
            let xml = '<xml><Quantities></Quantities></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Quantities: undefined
            });
        });

        it('should return undefined given non-number content', () => {
            let xml = '<xml><Quantities>foo</Quantities></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Quantities: undefined
            });
        });

        it('should parse valid number', () => {
            let xml = '<xml><Quantities>12.34</Quantities></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Quantities: 12.34
            });
        });
    });

    describe('boolean', () => {
        const parser = new XmlBodyParser(jest.fn());
        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Correct: {
                        shape: {
                            type: 'boolean'
                        },
                    }
                }
            }
        };

        it('should return undefined given empty', () => {
            let xml = '<xml><Correct/></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Correct: undefined
            });
        });

        it('should return false given not \'true\' content such as \'undefined\'', () => {
            let xml = '<xml><Correct>undefined</Correct></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Correct: false
            });
        });

        it('should parse valid boolean true', () => {
            let xml = `<xml><Correct>true</Correct></xml>`;
            expect(parser.parse(rules, xml)).toEqual({
                Correct: true
            });
        });

        it('should parse valid boolean false', () => {
            let xml = `<xml><Correct>false</Correct></xml>`;
            expect(parser.parse(rules, xml)).toEqual({
                Correct: false
            });
        });

        it('should parse all not \'true\' statement as false', () => {
            for (let scalar of ['a', 123, {}, ()=>{}]) {
                let xml = `<xml><Correct>${scalar}</Correct></xml>`;
                expect(parser.parse(rules, xml)).toEqual({
                    Correct: false
                });
            }
        });
    });

    describe('blob', () => {
        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Blob: {
                        shape: {
                            type: 'blob'
                        },
                    }
                }
            }
        };
        const base64Decode = jest.fn(arg => arg);
        const parser = new XmlBodyParser(base64Decode);

        beforeEach(() => {
            base64Decode.mockClear();
        });

        it('should base64 decode values', () => {
            parser.parse(rules, '<xml><Blob>deadbeef</Blob></xml>');

            expect(base64Decode.mock.calls.length).toBe(1);
        });

        it('should parse emty string as empty buffer', () => {
            parser.parse(rules, '<xml><Blob></Blob></xml>');

            expect(base64Decode.mock.calls.length).toBe(1);
        });

        it('should return undefined given null', () => {
            expect(parser.parse(rules, '<xml></xml>')).toEqual({
                Blob: undefined
            });
        });
    });

    describe('extract requestId from response body', () => {
        const parser = new XmlBodyParser(jest.fn());
        it('should extract requestId from EC2 response body', () => {
            let rules: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Struct: {shape: {type: 'string'}}
                    }
                }
            }
            const xml = `
                <OperationNameResponse>
                    <Struct>foo</Struct>
                    <RequestId>request-id</RequestId>
                </OperationNameResponse>
            `
            expect(parser.parse(rules, xml)).toEqual({
                Struct: 'foo',
                $metadata: {
                    requestId: 'request-id'
                }
            });
        });

        it('should extract requestId from non-EC2 response body', () => {
            let rules: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Str: {shape: {type: 'string'}}
                    }
                },
                resultWrapper: 'QueryResult'
            }
            const xml = `
                <OperationNameResponse>
                    <QueryResult><Str>foo</Str></QueryResult>
                    <ResponseMetadata>
                    <RequestId>request-id</RequestId>
                    </ResponseMetadata>
                </OperationNameResponse>
            `
            expect(parser.parse(rules, xml)).toEqual({
                Str: 'foo',
                $metadata: {
                    requestId: 'request-id'
                }
            });
        });

        it('it should extract requestId from SDB response body', () => {
            let rules: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Struct: {shape: {type: 'string'}}
                    }
                }
            }
            const xml = `
            <Response>
                <Struct>foo</Struct>
                <RequestID>request-id</RequestID>
            </Response>
    
            `
            expect(parser.parse(rules, xml)).toEqual({
                Struct: 'foo',
                $metadata: {
                    requestId: 'request-id'
                }
            });
        })
    });
});
