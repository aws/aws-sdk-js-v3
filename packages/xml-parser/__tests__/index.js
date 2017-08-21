var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('XMLParser', function () {
    describe('structure', function () {
        var rules = {
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
                                    shape: { type: 'string' }
                                }
                            }
                        }
                    }
                }
            }
        };
        var parser = new index_1.XMLParser(jest.fn());
        it('should parse structure', function () {
            var xml = '<xml><Item><Name>bar</Name></Item></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Item: {
                    Name: 'bar'
                }
            });
        });
        it('should parse empty objects as {}', function () {
            var emptyObj = '<xml><Item/></xml>';
            expect(parser.parse(rules, emptyObj)).toEqual({
                Item: {}
            });
        });
        var rulesWithTag = {
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
                                    shape: { type: 'string' },
                                    xmlAttribute: true,
                                    locationName: 'xsi:name'
                                },
                                Age: {
                                    shape: { type: 'number' }
                                }
                            }
                        }
                    }
                }
            }
        };
        it('should parse attributes from tags', function () {
            var xml = '<xml xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><Item xsi:name="name"><Age>18</Age></Item></xml>';
            expect(parser.parse(rulesWithTag, xml)).toEqual({
                Item: {
                    Name: 'name',
                    Age: 18
                }
            });
        });
    });
    describe('list', function () {
        var parser = new index_1.XMLParser(jest.fn());
        var rules = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    items: {
                        shape: {
                            type: 'list',
                            member: {
                                shape: { type: 'string' }
                            }
                        }
                    }
                }
            }
        };
        it('should parse empty lists as [] and remove the tab around contend', function () {
            var xml = '<xml>\t <items/></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                items: []
            });
        });
        it('should parse missing list as []', function () {
            var xml = '<xml></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                items: []
            });
        });
        it('should parse list with only one entry', function () {
            var xml = '<xml><items><member>bar</member></items></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                items: ['bar']
            });
        });
        it('should parse list with undefined entry', function () {
            var xml = '<xml><items><member></member></items></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                items: []
            });
        });
        it('should use locationName when finding members', function () {
            var xml = '<xml><items><item>abc</item><item>xyz</item></items>\n</xml>';
            var rules = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        items: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: { type: 'string' },
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
        it('can parse a list of structure', function () {
            var xml = "<xml>\n  <People>\n    <member><Name>abc</Name></member>>\n    <member><Name>xyz</Name></member>>\n  </People>\n</xml>";
            // {People: {member: [{Name: 'abc'}, {Name: 'xyz'}]}}
            var rules = {
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
                                                shape: { type: 'string' }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            var parser = new index_1.XMLParser(jest.fn());
            expect(parser.parse(rules, xml)).toEqual({
                People: [
                    { Name: 'abc' },
                    { Name: 'xyz' }
                ]
            });
        });
        it('can parse flattened lists composed of complex obects', function () {
            var xml = '<xml>\n  <name>Name</name>\n  <complexValue>\n    <a>1</a>\n    <b>2</b>\n  </complexValue>\n  <complexValue>\n    <a>3</a>\n    <b>4</b>\n  </complexValue>\n</xml>';
            var rules = {
                shape: {
                    type: "structure",
                    required: [],
                    members: {
                        name: {
                            shape: { type: "string" }
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
                                                shape: { type: "number" }
                                            },
                                            b: {
                                                shape: { type: "number" }
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
            };
            expect(parser.parse(rules, xml)).toEqual({
                name: 'Name',
                values: [
                    { a: 1, b: 2 },
                    { a: 3, b: 4 }
                ]
            });
        });
        it('should parse list with attributes in tags', function () {
            var xml = '<xml><Item xsi:name="Jon"><Age>20</Age></Item><Item xsi:name="Lee"><Age>18</Age></Item></xml>';
            var rules = {
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
                                                shape: { type: "string" },
                                                xmlAttribute: true,
                                                locationName: 'xsi:name'
                                            },
                                            Age: {
                                                shape: { type: "number" }
                                            }
                                        }
                                    },
                                    locationName: "Item"
                                },
                                flattened: true
                            }
                        }
                    }
                }
            };
            expect(parser.parse(rules, xml)).toEqual({
                Items: [
                    { Name: 'Jon', Age: 20 },
                    { Name: 'Lee', Age: 18 }
                ]
            });
        });
    });
    describe('maps', function () {
        var parser = new index_1.XMLParser(jest.fn());
        var rules = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    SummaryMap: {
                        shape: {
                            type: 'map',
                            key: { shape: { type: 'string' } },
                            value: { shape: { type: 'string' } }
                        }
                    }
                }
            }
        };
        it('should parse empty maps as {}', function () {
            var xml = '<xml><SummaryMap/></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                SummaryMap: {}
            });
        });
        it('should parse map with default entry, key, value name', function () {
            var xml = '<xml><SummaryMap><entry><key>firstName</key><value>Daniel</value></entry><entry><key>lastName</key><value>Wood</value></entry></SummaryMap></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                SummaryMap: {
                    firstName: 'Daniel',
                    lastName: 'Wood'
                }
            });
        });
        it('should parse map with only one key-value entry', function () {
            var xml = '<xml><SummaryMap><entry><key>firstName</key><value>Daniel</value></entry></SummaryMap></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                SummaryMap: {
                    firstName: 'Daniel'
                }
            });
        });
        it('should use designated name to target key and value members', function () {
            var rules = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Summary: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: { type: 'number' },
                                    locationName: 'Property'
                                },
                                value: {
                                    shape: { type: 'number' },
                                    locationName: 'Count'
                                }
                            },
                            locationName: 'SummaryMap'
                        }
                    }
                }
            };
            var xml = "<xml><SummaryMap><entry><Property>Groups</Property><Count>31</Count></entry><entry><Property>GroupsQuota</Property><Count>50</Count></entry></SummaryMap></xml>";
            expect(parser.parse(rules, xml)).toEqual({
                Summary: {
                    Groups: 31,
                    GroupsQuota: 50
                }
            });
        });
        it('should parse flattened list with default key value name', function () {
            var rules = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Attributes: {
                            shape: {
                                type: 'map',
                                key: { shape: { type: 'string' } },
                                value: { shape: { type: 'string' } },
                                flattened: true
                            }
                        }
                    }
                }
            };
            var xml = '<xml><Attributes><key>color</key><value>red</value></Attributes><Attributes><key>size</key><value>large</value></Attributes></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Attributes: {
                    color: 'red',
                    size: 'large'
                }
            });
        });
        it('should parse flattened list with designated key value name', function () {
            var rules = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        Attributes: {
                            shape: {
                                type: 'map',
                                key: {
                                    shape: { type: 'number' },
                                    locationName: 'AttrName'
                                },
                                value: {
                                    shape: { type: 'number' },
                                    locationName: 'AttrValue'
                                },
                                flattened: true
                            },
                            locationName: 'Attribute'
                        }
                    }
                }
            };
            var xml = "<xml><Attribute><AttrName>age</AttrName><AttrValue>35</AttrValue></Attribute><Attribute><AttrName>height</AttrName><AttrValue>72</AttrValue></Attribute></xml>";
            expect(parser.parse(rules, xml)).toEqual({
                Attributes: {
                    age: 35,
                    height: 72
                }
            });
        });
    });
    describe('timestamp', function () {
        var parser = new index_1.XMLParser(jest.fn());
        var rules = {
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
        it('should return undefined when provided empty tag', function () {
            var xml = '<xml><CreatedAt/></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: undefined
            });
        });
        it('should return undefined with missing timestamp', function () {
            var xml = '<xml></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: undefined
            });
        });
        it('should return undefined given content as \'null\'', function () {
            var xml = '<xml><CreatedAt>null</CreatedAt></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: undefined
            });
        });
        it('should return undefined when date format is unable to determined', function () {
            var xml = '<xml><CreatedAt>bar</CreatedAt></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: undefined
            });
        });
        it('should parse iso8601 string', function () {
            var isoString = '2017-08-14T23:59:09.811Z';
            var xml = '<xml><CreatedAt>' + isoString + '</CreatedAt></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                CreatedAt: new Date(isoString)
            });
        });
    });
    describe('string', function () {
        var parser = new index_1.XMLParser(jest.fn());
        var rules = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Name: {
                        shape: {
                            type: 'string'
                        }
                    }
                }
            }
        };
        it('should return undefined given an empty string', function () {
            var xml = '<xml><Name></Name></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Name: undefined
            });
        });
        it('should parse a string', function () {
            var xml = '<xml><Name>abcd^&*😀</Name></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Name: 'abcd^&*😀'
            });
        });
        it('should return undefined with missing tag', function () {
            var xml = '<xml></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Name: undefined
            });
        });
        it('should return string literally given content as \'null\'', function () {
            var xml = '<xml><Name>null</Name></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Name: 'null'
            });
        });
    });
    describe('number', function () {
        var parser = new index_1.XMLParser(jest.fn());
        var rules = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Quantities: {
                        shape: {
                            type: 'number'
                        }
                    }
                }
            }
        };
        it('should return undefined given null', function () {
            var xml = '<xml><Quantities></Quantities></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Quantities: undefined
            });
        });
        it('should return undefined given content as \'undefined\'', function () {
            var xml = '<xml><Quantities>undefined</Quantities></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Quantities: undefined
            });
        });
        it('should parse valid number', function () {
            var xml = '<xml><Quantities>12.34</Quantities></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Quantities: 12.34
            });
        });
    });
    describe('boolean', function () {
        var parser = new index_1.XMLParser(jest.fn());
        var rules = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Correct: {
                        shape: {
                            type: 'boolean'
                        }
                    }
                }
            }
        };
        it('should return undefined given null', function () {
            var xml = '<xml><Correct></Correct></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Correct: undefined
            });
        });
        it('should return undefined given content as \'undefined\'', function () {
            var xml = '<xml><Correct>undefined</Correct></xml>';
            expect(parser.parse(rules, xml)).toEqual({
                Correct: undefined
            });
        });
        it('should parse valid boolean true', function () {
            var xml = "<xml><Correct>true</Correct></xml>";
            expect(parser.parse(rules, xml)).toEqual({
                Correct: true
            });
        });
        it('should parse valid boolean false', function () {
            var xml = "<xml><Correct>false</Correct></xml>";
            expect(parser.parse(rules, xml)).toEqual({
                Correct: false
            });
        });
        it('should parse truly statement as true', function () {
            try {
                for (var _a = __values(['a', 123, {}, function () { }]), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var scalar = _b.value;
                    var xml = "<xml><Correct>" + scalar + "</Correct></xml>";
                    expect(parser.parse(rules, xml)).toEqual({
                        Correct: true
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var e_1, _c;
        });
    });
    describe('blob', function () {
        var rules = {
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
        var base64Decode = jest.fn(function (arg) { return arg; });
        var parser = new index_1.XMLParser(base64Decode);
        beforeEach(function () {
            base64Decode.mockClear();
        });
        it('should base64 decode values', function () {
            parser.parse(rules, '<xml><Blob>deadbeef</Blob></xml>');
            expect(base64Decode.mock.calls.length).toBe(1);
        });
        it('should return undefined given ', function () {
            expect(parser.parse(rules, '<xml><Blob></Blob></xml>')).toEqual({
                Blob: undefined
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtDQUFtQztBQUtuQyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLFFBQVEsQ0FBQyxXQUFXLEVBQUU7UUFDbEIsSUFBSSxLQUFLLEdBQVc7WUFDaEIsS0FBSyxFQUFFO2dCQUNILElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsRUFBRTtnQkFDWixPQUFPLEVBQUU7b0JBQ0wsSUFBSSxFQUFFO3dCQUNGLEtBQUssRUFBRTs0QkFDSCxJQUFJLEVBQUUsV0FBVzs0QkFDakIsUUFBUSxFQUFFLEVBQUU7NEJBQ1osT0FBTyxFQUFFO2dDQUNMLElBQUksRUFBRTtvQ0FDRixLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO2lDQUMxQjs2QkFDSjt5QkFDSjtxQkFDSjtpQkFDSjthQUNKO1NBQ0osQ0FBQztRQUNGLElBQU0sTUFBTSxHQUFHLElBQUksaUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV4QyxFQUFFLENBQUMsd0JBQXdCLEVBQUU7WUFDekIsSUFBSSxHQUFHLEdBQUcsMENBQTBDLENBQUM7WUFDckQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0YsSUFBSSxFQUFFLEtBQUs7aUJBQ2Q7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtZQUNuQyxJQUFJLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztZQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQzFDLElBQUksRUFBRSxFQUFFO2FB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LFNBQVMsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1lBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7WUFFeEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRTtZQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFDNUQsSUFBSSxFQUFFLFNBQVM7YUFDbEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtYTUxQYXJzZXJ9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHtcbiAgICBNZW1iZXIsXG59IGZyb20gXCJAYXdzL3R5cGVzXCI7XG5cbmRlc2NyaWJlKCdYTUxQYXJzZXInLCAoKSA9PiB7XG4gICAgZGVzY3JpYmUoJ3N0cnVjdHVyZScsICgpID0+IHtcbiAgICAgICAgbGV0IHJ1bGVzOiBNZW1iZXIgPSB7XG4gICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJ1Y3R1cmUnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXSxcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEl0ZW06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cnVjdHVyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHt0eXBlOiAnc3RyaW5nJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgWE1MUGFyc2VyKGplc3QuZm4oKSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBwYXJzZSBzdHJ1Y3R1cmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeG1sID0gJzx4bWw+PEl0ZW0+PE5hbWU+YmFyPC9OYW1lPjwvSXRlbT48L3htbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgSXRlbToge1xuICAgICAgICAgICAgICAgICAgICBOYW1lOiAnYmFyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgXG4gICAgICAgIFxuICAgICAgICBpdCgnc2hvdWxkIHBhcnNlIGVtcHR5IG9iamVjdHMgYXMge30nLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZW1wdHlPYmogPSAnPHhtbD48SXRlbS8+PC94bWw+JztcbiAgICAgICAgICAgIGV4cGVjdChwYXJzZXIucGFyc2UocnVsZXMsIGVtcHR5T2JqKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgSXRlbToge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcnVsZXNXaXRoVGFnOiBNZW1iZXIgPSB7XG4gICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJ1Y3R1cmUnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXSxcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEl0ZW06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cnVjdHVyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHt0eXBlOiAnc3RyaW5nJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxBdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbk5hbWU6ICd4c2k6bmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZToge3R5cGU6ICdudW1iZXInfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgIH07XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBwYXJzZSBhdHRyaWJ1dGVzIGZyb20gdGFncycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbCB4bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiPjxJdGVtIHhzaTpuYW1lPVwibmFtZVwiPjxBZ2U+MTg8L0FnZT48L0l0ZW0+PC94bWw+JztcbiAgICAgICAgICAgIGV4cGVjdChwYXJzZXIucGFyc2UocnVsZXNXaXRoVGFnLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBJdGVtOiB7XG4gICAgICAgICAgICAgICAgICAgIE5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgQWdlOiAxOFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnbGlzdCcsICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBYTUxQYXJzZXIoamVzdC5mbigpKTtcbiAgICAgICAgbGV0IHJ1bGVzOiBNZW1iZXIgPSB7XG4gICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJ1Y3R1cmUnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXSxcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHt0eXBlOiAnc3RyaW5nJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9O1xuICAgICAgICBpdCgnc2hvdWxkIHBhcnNlIGVtcHR5IGxpc3RzIGFzIFtdIGFuZCByZW1vdmUgdGhlIHRhYiBhcm91bmQgY29udGVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbD5cXHQgPGl0ZW1zLz48L3htbD4nXG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHBhcnNlIG1pc3NpbmcgbGlzdCBhcyBbXScsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbD48L3htbD4nXG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHBhcnNlIGxpc3Qgd2l0aCBvbmx5IG9uZSBlbnRyeScsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbD48aXRlbXM+PG1lbWJlcj5iYXI8L21lbWJlcj48L2l0ZW1zPjwveG1sPidcbiAgICAgICAgICAgIGV4cGVjdChwYXJzZXIucGFyc2UocnVsZXMsIHhtbCkpLnRvRXF1YWwoe1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBbJ2JhciddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBwYXJzZSBsaXN0IHdpdGggdW5kZWZpbmVkIGVudHJ5JywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhtbCA9ICc8eG1sPjxpdGVtcz48bWVtYmVyPjwvbWVtYmVyPjwvaXRlbXM+PC94bWw+J1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCB1c2UgbG9jYXRpb25OYW1lIHdoZW4gZmluZGluZyBtZW1iZXJzJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhtbCA9ICc8eG1sPjxpdGVtcz48aXRlbT5hYmM8L2l0ZW0+PGl0ZW0+eHl6PC9pdGVtPjwvaXRlbXM+XFxuPC94bWw+JztcbiAgICAgICAgICAgIGxldCBydWxlczogTWVtYmVyID0ge1xuICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJ1Y3R1cmUnLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogW10sXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7dHlwZTogJ3N0cmluZyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAnaXRlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgaXRlbXM6IFsnYWJjJywgJ3h5eiddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ2NhbiBwYXJzZSBhIGxpc3Qgb2Ygc3RydWN0dXJlJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhtbCA9IFwiPHhtbD5cXG4gIDxQZW9wbGU+XFxuICAgIDxtZW1iZXI+PE5hbWU+YWJjPC9OYW1lPjwvbWVtYmVyPj5cXG4gICAgPG1lbWJlcj48TmFtZT54eXo8L05hbWU+PC9tZW1iZXI+PlxcbiAgPC9QZW9wbGU+XFxuPC94bWw+XCI7XG4gICAgICAgICAgICAvLyB7UGVvcGxlOiB7bWVtYmVyOiBbe05hbWU6ICdhYmMnfSwge05hbWU6ICd4eXonfV19fVxuICAgICAgICAgICAgbGV0IHJ1bGVzOiBNZW1iZXIgPSB7XG4gICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cnVjdHVyZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgUGVvcGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cnVjdHVyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHt0eXBlOiAnc3RyaW5nJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBYTUxQYXJzZXIoamVzdC5mbigpKTtcbiAgICAgICAgICAgIGV4cGVjdChwYXJzZXIucGFyc2UocnVsZXMsIHhtbCkpLnRvRXF1YWwoe1xuICAgICAgICAgICAgICAgIFBlb3BsZTogW1xuICAgICAgICAgICAgICAgICAgICB7TmFtZTogJ2FiYyd9LCBcbiAgICAgICAgICAgICAgICAgICAge05hbWU6ICd4eXonfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnY2FuIHBhcnNlIGZsYXR0ZW5lZCBsaXN0cyBjb21wb3NlZCBvZiBjb21wbGV4IG9iZWN0cycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbD5cXG4gIDxuYW1lPk5hbWU8L25hbWU+XFxuICA8Y29tcGxleFZhbHVlPlxcbiAgICA8YT4xPC9hPlxcbiAgICA8Yj4yPC9iPlxcbiAgPC9jb21wbGV4VmFsdWU+XFxuICA8Y29tcGxleFZhbHVlPlxcbiAgICA8YT4zPC9hPlxcbiAgICA8Yj40PC9iPlxcbiAgPC9jb21wbGV4VmFsdWU+XFxuPC94bWw+JztcbiAgICAgICAgICAgIGxldCBydWxlczogTWVtYmVyID0ge1xuICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RydWN0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7dHlwZTogXCJzdHJpbmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RydWN0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHt0eXBlOiBcIm51bWJlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZToge3R5cGU6IFwibnVtYmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lOiBcImNvbXBsZXhWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW5lZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cGVjdChwYXJzZXIucGFyc2UocnVsZXMsIHhtbCkpLnRvRXF1YWwoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge2E6IDEsIGI6IDJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2E6IDMsIGI6IDR9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHBhcnNlIGxpc3Qgd2l0aCBhdHRyaWJ1dGVzIGluIHRhZ3MnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeG1sID0gJzx4bWw+PEl0ZW0geHNpOm5hbWU9XCJKb25cIj48QWdlPjIwPC9BZ2U+PC9JdGVtPjxJdGVtIHhzaTpuYW1lPVwiTGVlXCI+PEFnZT4xODwvQWdlPjwvSXRlbT48L3htbD4nO1xuICAgICAgICAgICAgbGV0IHJ1bGVzOiBNZW1iZXIgPSB7XG4gICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJ1Y3R1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFtdLFxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBJdGVtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJ1Y3R1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZToge3R5cGU6IFwic3RyaW5nXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAneHNpOm5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHt0eXBlOiBcIm51bWJlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogXCJJdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBJdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7TmFtZTogJ0pvbicsIEFnZTogMjB9LCBcbiAgICAgICAgICAgICAgICAgICAge05hbWU6ICdMZWUnLCBBZ2U6IDE4fVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdtYXBzJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgWE1MUGFyc2VyKGplc3QuZm4oKSk7XG4gICAgICAgIGxldCBydWxlczogTWVtYmVyID0ge1xuICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RydWN0dXJlJyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogW10sXG4gICAgICAgICAgICAgICAgbWVtYmVyczoge1xuICAgICAgICAgICAgICAgICAgICBTdW1tYXJ5TWFwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleToge3NoYXBlOiB7dHlwZTogJ3N0cmluZyd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge3NoYXBlOiB7dHlwZTogJ3N0cmluZyd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBwYXJzZSBlbXB0eSBtYXBzIGFzIHt9JywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhtbCA9ICc8eG1sPjxTdW1tYXJ5TWFwLz48L3htbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgU3VtbWFyeU1hcDoge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHBhcnNlIG1hcCB3aXRoIGRlZmF1bHQgZW50cnksIGtleSwgdmFsdWUgbmFtZScsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbD48U3VtbWFyeU1hcD48ZW50cnk+PGtleT5maXJzdE5hbWU8L2tleT48dmFsdWU+RGFuaWVsPC92YWx1ZT48L2VudHJ5PjxlbnRyeT48a2V5Pmxhc3ROYW1lPC9rZXk+PHZhbHVlPldvb2Q8L3ZhbHVlPjwvZW50cnk+PC9TdW1tYXJ5TWFwPjwveG1sPic7XG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBTdW1tYXJ5TWFwOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJ0RhbmllbCcsXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnV29vZCcgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgcGFyc2UgbWFwIHdpdGggb25seSBvbmUga2V5LXZhbHVlIGVudHJ5JywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhtbCA9ICc8eG1sPjxTdW1tYXJ5TWFwPjxlbnRyeT48a2V5PmZpcnN0TmFtZTwva2V5Pjx2YWx1ZT5EYW5pZWw8L3ZhbHVlPjwvZW50cnk+PC9TdW1tYXJ5TWFwPjwveG1sPic7XG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBTdW1tYXJ5TWFwOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJ0RhbmllbCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCB1c2UgZGVzaWduYXRlZCBuYW1lIHRvIHRhcmdldCBrZXkgYW5kIHZhbHVlIG1lbWJlcnMnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcnVsZXM6IE1lbWJlciA9IHtcbiAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RydWN0dXJlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFtdLFxuICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdW1tYXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21hcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHt0eXBlOiAnbnVtYmVyJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbk5hbWU6ICdQcm9wZXJ0eSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7dHlwZTogJ251bWJlcid9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAnQ291bnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogJ1N1bW1hcnlNYXAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgeG1sID0gXCI8eG1sPjxTdW1tYXJ5TWFwPjxlbnRyeT48UHJvcGVydHk+R3JvdXBzPC9Qcm9wZXJ0eT48Q291bnQ+MzE8L0NvdW50PjwvZW50cnk+PGVudHJ5PjxQcm9wZXJ0eT5Hcm91cHNRdW90YTwvUHJvcGVydHk+PENvdW50PjUwPC9Db3VudD48L2VudHJ5PjwvU3VtbWFyeU1hcD48L3htbD5cIjtcbiAgICAgICAgICAgIGV4cGVjdChwYXJzZXIucGFyc2UocnVsZXMsIHhtbCkpLnRvRXF1YWwoe1xuICAgICAgICAgICAgICAgIFN1bW1hcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgR3JvdXBzOiAzMSxcbiAgICAgICAgICAgICAgICAgICAgR3JvdXBzUXVvdGE6IDUwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgcGFyc2UgZmxhdHRlbmVkIGxpc3Qgd2l0aCBkZWZhdWx0IGtleSB2YWx1ZSBuYW1lJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJ1bGVzOiBNZW1iZXIgPSB7XG4gICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cnVjdHVyZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHtzaGFwZToge3R5cGU6ICdzdHJpbmcnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7c2hhcGU6IHt0eXBlOiAnc3RyaW5nJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHhtbCA9ICc8eG1sPjxBdHRyaWJ1dGVzPjxrZXk+Y29sb3I8L2tleT48dmFsdWU+cmVkPC92YWx1ZT48L0F0dHJpYnV0ZXM+PEF0dHJpYnV0ZXM+PGtleT5zaXplPC9rZXk+PHZhbHVlPmxhcmdlPC92YWx1ZT48L0F0dHJpYnV0ZXM+PC94bWw+JztcbiAgICAgICAgICAgIGV4cGVjdChwYXJzZXIucGFyc2UocnVsZXMsIHhtbCkpLnRvRXF1YWwoe1xuICAgICAgICAgICAgICAgIEF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiAnbGFyZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgcGFyc2UgZmxhdHRlbmVkIGxpc3Qgd2l0aCBkZXNpZ25hdGVkIGtleSB2YWx1ZSBuYW1lJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJ1bGVzOiBNZW1iZXIgPSB7XG4gICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cnVjdHVyZScsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7dHlwZTogJ251bWJlcid9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lOiAnQXR0ck5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZToge3R5cGU6ICdudW1iZXInfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uTmFtZTogJ0F0dHJWYWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbk5hbWU6ICdBdHRyaWJ1dGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHhtbCA9IFwiPHhtbD48QXR0cmlidXRlPjxBdHRyTmFtZT5hZ2U8L0F0dHJOYW1lPjxBdHRyVmFsdWU+MzU8L0F0dHJWYWx1ZT48L0F0dHJpYnV0ZT48QXR0cmlidXRlPjxBdHRyTmFtZT5oZWlnaHQ8L0F0dHJOYW1lPjxBdHRyVmFsdWU+NzI8L0F0dHJWYWx1ZT48L0F0dHJpYnV0ZT48L3htbD5cIjtcbiAgICAgICAgICAgIGV4cGVjdChwYXJzZXIucGFyc2UocnVsZXMsIHhtbCkpLnRvRXF1YWwoe1xuICAgICAgICAgICAgICAgIEF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWdlOiAzNSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCd0aW1lc3RhbXAnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBYTUxQYXJzZXIoamVzdC5mbigpKTtcbiAgICAgICAgbGV0IHJ1bGVzOiBNZW1iZXIgPSB7XG4gICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJ1Y3R1cmUnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXSxcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZWRBdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGltZXN0YW1wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCB3aGVuIHByb3ZpZGVkIGVtcHR5IHRhZycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbD48Q3JlYXRlZEF0Lz48L3htbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgQ3JlYXRlZEF0OiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiB1bmRlZmluZWQgd2l0aCBtaXNzaW5nIHRpbWVzdGFtcCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbD48L3htbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgQ3JlYXRlZEF0OiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiB1bmRlZmluZWQgZ2l2ZW4gY29udGVudCBhcyBcXCdudWxsXFwnJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhtbCA9ICc8eG1sPjxDcmVhdGVkQXQ+bnVsbDwvQ3JlYXRlZEF0PjwveG1sPic7XG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBDcmVhdGVkQXQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCB3aGVuIGRhdGUgZm9ybWF0IGlzIHVuYWJsZSB0byBkZXRlcm1pbmVkJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhtbCA9ICc8eG1sPjxDcmVhdGVkQXQ+YmFyPC9DcmVhdGVkQXQ+PC94bWw+J1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgQ3JlYXRlZEF0OiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIGl0KCdzaG91bGQgcGFyc2UgaXNvODYwMSBzdHJpbmcnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXNvU3RyaW5nID0gJzIwMTctMDgtMTRUMjM6NTk6MDkuODExWic7XG4gICAgICAgICAgICBsZXQgeG1sID0gJzx4bWw+PENyZWF0ZWRBdD4nICsgaXNvU3RyaW5nICsgJzwvQ3JlYXRlZEF0PjwveG1sPic7XG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBDcmVhdGVkQXQ6IG5ldyBEYXRlKGlzb1N0cmluZylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdzdHJpbmcnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBYTUxQYXJzZXIoamVzdC5mbigpKTtcbiAgICAgICAgbGV0IHJ1bGVzOiBNZW1iZXIgPSB7XG4gICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJ1Y3R1cmUnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXSxcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIE5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiB1bmRlZmluZWQgZ2l2ZW4gYW4gZW1wdHkgc3RyaW5nJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhtbCA9ICc8eG1sPjxOYW1lPjwvTmFtZT48L3htbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgTmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBwYXJzZSBhIHN0cmluZycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbD48TmFtZT5hYmNkXiYq7aC97biAPC9OYW1lPjwveG1sPic7XG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBOYW1lOiAnYWJjZF4mKu2gve24gCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiB1bmRlZmluZWQgd2l0aCBtaXNzaW5nIHRhZycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbD48L3htbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgTmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gc3RyaW5nIGxpdGVyYWxseSBnaXZlbiBjb250ZW50IGFzIFxcJ251bGxcXCcnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeG1sID0gJzx4bWw+PE5hbWU+bnVsbDwvTmFtZT48L3htbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgTmFtZTogJ251bGwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnbnVtYmVyJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgWE1MUGFyc2VyKGplc3QuZm4oKSk7XG4gICAgICAgIGxldCBydWxlczogTWVtYmVyID0ge1xuICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RydWN0dXJlJyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogW10sXG4gICAgICAgICAgICAgICAgbWVtYmVyczoge1xuICAgICAgICAgICAgICAgICAgICBRdWFudGl0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gdW5kZWZpbmVkIGdpdmVuIG51bGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeG1sID0gJzx4bWw+PFF1YW50aXRpZXM+PC9RdWFudGl0aWVzPjwveG1sPic7XG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBRdWFudGl0aWVzOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiB1bmRlZmluZWQgZ2l2ZW4gY29udGVudCBhcyBcXCd1bmRlZmluZWRcXCcnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeG1sID0gJzx4bWw+PFF1YW50aXRpZXM+dW5kZWZpbmVkPC9RdWFudGl0aWVzPjwveG1sPic7XG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCB4bWwpKS50b0VxdWFsKHtcbiAgICAgICAgICAgICAgICBRdWFudGl0aWVzOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHBhcnNlIHZhbGlkIG51bWJlcicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSAnPHhtbD48UXVhbnRpdGllcz4xMi4zNDwvUXVhbnRpdGllcz48L3htbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgUXVhbnRpdGllczogMTIuMzRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdib29sZWFuJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgWE1MUGFyc2VyKGplc3QuZm4oKSk7XG4gICAgICAgIGxldCBydWxlczogTWVtYmVyID0ge1xuICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RydWN0dXJlJyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogW10sXG4gICAgICAgICAgICAgICAgbWVtYmVyczoge1xuICAgICAgICAgICAgICAgICAgICBDb3JyZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCBnaXZlbiBudWxsJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhtbCA9ICc8eG1sPjxDb3JyZWN0PjwvQ29ycmVjdD48L3htbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgQ29ycmVjdDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gdW5kZWZpbmVkIGdpdmVuIGNvbnRlbnQgYXMgXFwndW5kZWZpbmVkXFwnJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhtbCA9ICc8eG1sPjxDb3JyZWN0PnVuZGVmaW5lZDwvQ29ycmVjdD48L3htbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgQ29ycmVjdDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBwYXJzZSB2YWxpZCBib29sZWFuIHRydWUnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeG1sID0gYDx4bWw+PENvcnJlY3Q+dHJ1ZTwvQ29ycmVjdD48L3htbD5gO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgQ29ycmVjdDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgcGFyc2UgdmFsaWQgYm9vbGVhbiBmYWxzZScsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB4bWwgPSBgPHhtbD48Q29ycmVjdD5mYWxzZTwvQ29ycmVjdD48L3htbD5gO1xuICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgQ29ycmVjdDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHBhcnNlIHRydWx5IHN0YXRlbWVudCBhcyB0cnVlJywgKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgc2NhbGFyIG9mIFsnYScsIDEyMywge30sICgpPT57fV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgeG1sID0gYDx4bWw+PENvcnJlY3Q+JHtzY2FsYXJ9PC9Db3JyZWN0PjwveG1sPmA7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHBhcnNlci5wYXJzZShydWxlcywgeG1sKSkudG9FcXVhbCh7XG4gICAgICAgICAgICAgICAgICAgIENvcnJlY3Q6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnYmxvYicsICgpID0+IHtcbiAgICAgICAgbGV0IHJ1bGVzOiBNZW1iZXIgPSB7XG4gICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJ1Y3R1cmUnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXSxcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEJsb2I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jsb2InXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJhc2U2NERlY29kZSA9IGplc3QuZm4oYXJnID0+IGFyZyk7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBYTUxQYXJzZXIoYmFzZTY0RGVjb2RlKTtcblxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgICAgIGJhc2U2NERlY29kZS5tb2NrQ2xlYXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCBiYXNlNjQgZGVjb2RlIHZhbHVlcycsICgpID0+IHtcbiAgICAgICAgICAgIHBhcnNlci5wYXJzZShydWxlcywgJzx4bWw+PEJsb2I+ZGVhZGJlZWY8L0Jsb2I+PC94bWw+Jyk7XG5cbiAgICAgICAgICAgIGV4cGVjdChiYXNlNjREZWNvZGUubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCBnaXZlbiAnLCAoKSA9PiB7XG4gICAgICAgICAgICBleHBlY3QocGFyc2VyLnBhcnNlKHJ1bGVzLCAnPHhtbD48QmxvYj48L0Jsb2I+PC94bWw+JykpLnRvRXF1YWwoe1xuICAgICAgICAgICAgICAgIEJsb2I6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7Il19