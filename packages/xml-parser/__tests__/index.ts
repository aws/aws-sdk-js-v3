import {XMLParser} from "../index";
import {
    Member,
} from "@aws/types";

describe('XMLParser', () => {
    const rules = null;
    describe('structure', () => {
        
    });
    describe('list', () => {
        it('flattened lists can be composed of complex obects', () => {
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
            let parser = new XMLParser(jest.fn());
            expect(parser.parse(rules, xml)).toEqual(
                {
                    name: 'Name',
                    values: [
                        {a: '1', b: '2'},
                        {a: '3', b: '4'}
                    ]
                }
            );
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
            expect(parser.parse(rules, xml)).toEqual(
            {
                People: [
                    {
                        Name: 'abc'
                    }, {
                        Name: 'xyz'
                    }
                ]
            }
            );
        });
    });
});