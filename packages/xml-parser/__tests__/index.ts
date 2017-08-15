import {XMLParser} from "../index";
import {
    Member,
} from "@aws/types";

describe('XMLParser', () => {
    const rules = null;
    describe('structure', () => {
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
                                    shape: {type: 'string'}
                                }
                            }
                        }
                    }
                }
            }  
        };
        const parser = new XMLParser(jest.fn());

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
                                }
                            }
                        }
                    }
                }
            }  
        };

        it('should parse parse attributes from tags', () => {
            let xml = '<xml xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><Item xsi:name="name"></Item></xml>';
            expect(parser.parse(rulesWithTag, xml)).toEqual({
                Item: {
                    Name: 'name'
                }
            });
        }); 
    });

    describe('list', () => {
        let parser = new XMLParser(jest.fn());
        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    items: {
                        shape: {
                            type: 'list',
                            member: {
                                shape: {type: 'string'}
                            }
                        }
                    }
                }
            }    
        };
        it('should parse empty lists as [] and remove the tab around contend', () => {
            let xml = '<xml>\t <items/></xml>'
            expect(parser.parse(rules, xml)).toEqual({
                items: []
            });
        });

        it('should missing list as []', () => {
            let xml = '<xml></xml>'
            expect(parser.parse(rules, xml)).toEqual({
                items: []
            });
        });

        it('should use locationName when finding members', () => {
            let xml = '<xml><items><item>abc</item><item>xyz</item></items>\n</xml>';
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
                            }
                        }
                    }
                }    
            };
            expect(parser.parse(rules, xml)).toEqual({
                items: ['abc', 'xyz']
            });
        });

        it('can parse a list of structure', () => {
            let xml = "<xml>\n  <People>\n    <member><Name>abc</Name></member>>\n    <member><Name>xyz</Name></member>>\n  </People>\n</xml>";
            // {People: {member: [{Name: 'abc'}, {Name: 'xyz'}]}}
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
                                                shape: {type: 'string'}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }    
            };
            let parser = new XMLParser(jest.fn());
            expect(parser.parse(rules, xml)).toEqual({
                People: [
                    {Name: 'abc'}, 
                    {Name: 'xyz'}
                ]
            });
        });

        it('can parse flattened lists composed of complex obects', () => {
            let xml = '<xml>\n  <name>Name</name>\n  <complexValue>\n    <a>1</a>\n    <b>2</b>\n  </complexValue>\n  <complexValue>\n    <a>3</a>\n    <b>4</b>\n  </complexValue>\n</xml>';
            let rules: Member = {
                shape: {
                    type: "structure",
                    required: [],
                    members: {
                        name: {
                            shape: {type: "string"}
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
                                                shape: {type: "number"}
                                            },
                                            b: {
                                                shape: {type: "number"}
                                            }
                                        }
                                    },
                                    locationName: "complexValue"
                                },
                                flattened: true
                            }
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
    });

    describe('maps', () => {
        const parser = new XMLParser(jest.fn());
        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    SummaryMap: {
                        shape: {
                            type: 'map',
                            key: {shape: {type: 'string'}},
                            value: {shape: {type: 'string'}}
                        }
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
            let xml = '<xml><SummaryMap><entry><key>firstName</key><value>Daniel</value></entry><entry><key>lastName</key><value>Wood</value></entry></SummaryMap></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                SummaryMap: {
                    firstName: 'Daniel',
                    lastName: 'Wood' 
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
                                    shape: {type: 'number'},
                                    locationName: 'Property'
                                },
                                value: {
                                    shape: {type: 'number'},
                                    locationName: 'Count'
                                }
                            },
                            locationName: 'SummaryMap'
                        }
                    }
                }
            }
            let xml = "<xml><SummaryMap><entry><Property>Groups</Property><Count>31</Count></entry><entry><Property>GroupsQuota</Property><Count>50</Count></entry></SummaryMap></xml>";
            expect(parser.parse(rules, xml)).toEqual({
                Summary: {
                    Groups: 31,
                    GroupsQuota: 50
                }
            });
        });

        it('should parse flattened list with default key value name', () => {
            let rules: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Attributes: {
                            shape: {
                                type: 'map',
                                key: {shape: {type: 'string'}},
                                value: {shape: {type: 'string'}},
                                flattened: true
                            }
                        }
                    }
                }
            };
            let xml = '<xml><Attributes><key>color</key><value>red</value></Attributes><Attributes><key>size</key><value>large</value></Attributes></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Attributes: {
                    color: 'red',
                    size: 'large'
                }
            });
        });

        it('should parse flattened list with designated key value name', () => {
            let rules: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Attributes: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: {type: 'number'},
                                    locationName: 'AttrName'
                                },
                                value: {
                                    shape: {type: 'number'},
                                    locationName: 'AttrValue'
                                },
                                flattened: true
                            },
                            locationName: 'Attribute'
                        }
                    }
                }
            };
            let xml = "<xml><Attribute><AttrName>age</AttrName><AttrValue>35</AttrValue></Attribute><Attribute><AttrName>height</AttrName><AttrValue>72</AttrValue></Attribute></xml>";
            expect(parser.parse(rules, xml)).toEqual({
                Attributes: {
                    age: 35,
                    height: 72
                }
            });
        });
    });

    describe('timestamp', () => {
        const parser = new XMLParser(jest.fn());
        let rules: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    CreatedAt: {
                        shape: {
                            type: 'timestamp'
                        }
                    }
                }
            }
        };

        it('should return null when provided empty tag', () => {
            let xml = '<xml><CreatedAt/></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreateAt: null
            });
        });

        it('should return null with missing timestamp', () => {
            let xml = '<xml></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreateAt: null
            });
        });

        it('should parse iso8601 string', () => {
            let isoString = '2017-08-14T23:59:09.811Z';
            let xml = '<xml><CreatedAt>' + isoString + '</CreatedAt></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreateAt: new Date(isoString)
            });
        });

        it('should throw when date format is unable to determined', () => {
            let xml = '<xml><CreatedAt>bar</CreatedAt></xml>'
            expect(() => parser.parse(rules, xml)).toThrow();
        })
    });

    describe('string', () => {

    });

    describe('number', () => {

    });

    describe('boolean', () => {

    });

    describe('blob', () => {

    });
});