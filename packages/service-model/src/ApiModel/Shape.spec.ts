import {
    isComplexShape,
    isStructureMember,
    isShape,
} from "./Shape";
import {minimalShapeMap} from "./shapeMap.fixture";
import {
    Boolean,
    List,
    Map,
    Shape,
    Structure,
    StructureMember,
} from '@aws/build-types';

describe('isStructureMember', () => {
    const minimalValidStructureMember: StructureMember = {
        shape: 'string'
    };

    it('should accept a valid StructureMember', () => {
        expect(isStructureMember(minimalValidStructureMember)).toBe(true);
    });

    it(
        'should reject objects where a "documentation" property is present and not a string',
        () => {
            expect(isStructureMember({
                ...minimalValidStructureMember,
                documentation: {}
            })).toBe(false);
        }
    );

    it(
        'should accept objects where a "documentation" property is present and a string',
        () => {
            expect(isStructureMember({
                ...minimalValidStructureMember,
                documentation: 'docs'
            })).toBe(true);
        }
    );

    it(
        'should reject objects where a "flattened" property is present and not a boolean',
        () => {
            expect(isStructureMember({
                ...minimalValidStructureMember,
                flattened: {}
            })).toBe(false);
        }
    );

    it(
        'should accept objects where a "flattened" property is present and a boolean',
        () => {
            expect(isStructureMember({
                ...minimalValidStructureMember,
                flattened: true
            })).toBe(true);
        }
    );

    it(
        'should reject objects where a "locationName" property is present and not a string',
        () => {
            expect(isStructureMember({
                ...minimalValidStructureMember,
                locationName: {}
            })).toBe(false);
        }
    );

    it(
        'should accept objects where a "locationName" property is present and a string',
        () => {
            expect(isStructureMember({
                ...minimalValidStructureMember,
                locationName: 'location'
            })).toBe(true);
        }
    );

    it(
        'should reject objects where a "xmlAttribute" property is present and not a boolean',
        () => {
            expect(isStructureMember({
                ...minimalValidStructureMember,
                xmlAttribute: {}
            })).toBe(false);
        }
    );

    it(
        'should accept objects where a "xmlAttribute" property is present and a boolean',
        () => {
            expect(isStructureMember({
                ...minimalValidStructureMember,
                xmlAttribute: true
            })).toBe(true);
        }
    );

    it('should reject scalar values', () => {
        for (let scalar of [null, void 0, 1, 'string', true]) {
            expect(isStructureMember(scalar)).toBe(false);
        }
    });
});

describe('isComplexShape', () => {
    it('should return true for lists, maps, and structures', () => {
        const {list, map, structure} = minimalShapeMap;

        for (let complexType of [list, map, structure]) {
            expect(isComplexShape(complexType)).toBe(true);
        }
    });

    it('should return false for all other shapes', () => {
        const skipTypes = ['list', 'map', 'structure'];
        for (let typeName of Object.keys(minimalShapeMap)) {
            if (skipTypes.indexOf(typeName) > -1) continue;

            expect(isComplexShape(minimalShapeMap[typeName])).toBe(false);
        }
    });
});

describe('isShape', () => {
    const minimalValidShape: Shape = {
        type: 'boolean'
    };

    it('should accept a valid Shape', () => {
        expect(isShape(minimalValidShape)).toBe(true);
    });

    it(
        'should reject objects where a "documentation" property is present and not a string',
        () => {
            expect(isShape({...minimalValidShape, documentation: {}}))
                .toBe(false);
        }
    );

    it(
        'should accept objects where a "documentation" property is present and a string',
        () => {
            expect(isShape({...minimalValidShape, documentation: 'docs'}))
                .toBe(true);
        }
    );

    it(
        'should reject objects where a "sensitive" property is present and not a boolean',
        () => {
            expect(isShape({...minimalValidShape, sensitive: {}})).toBe(false);
        }
    );

    it(
        'should accept objects where a "sensitive" property is present and a boolean',
        () => {
            expect(isShape({...minimalValidShape, sensitive: true})).toBe(true);
        }
    );

    it(
        'should reject objects where a "deprecated" property is present and not a boolean',
        () => {
            expect(isShape({...minimalValidShape, deprecated: {}})).toBe(false);
        }
    );

    it(
        'should accept objects where a "deprecated" property is present and a boolean',
        () => {
            expect(isShape({...minimalValidShape, deprecated: true}))
                .toBe(true);
        }
    );

    it('should reject scalar values', () => {
        for (let scalar of [null, void 0, 1, 'string', true]) {
            expect(isShape(scalar)).toBe(false);
        }
    });

    describe('booleans', () => {
        it('should accept valid booleans', () => {
            expect(isShape(<Boolean>{type: 'boolean'})).toBe(true);
        });
    });

    describe('blobs', () => {
        it('should accept valid blobs', () => {
            expect(isShape({type: 'blob', streaming: true})).toBe(true);
        });

        it(
            'should reject objects where a "streaming" property is present and not a boolean',
            () => {
                expect(isShape({type: 'blob', streaming: {}})).toBe(false);
            }
        );
    });

    describe('bytes', () => {
        it('should accept valid bytes', () => {
            expect(isShape({type: 'byte', min: 1, max: 2})).toBe(true);
        });

        it(
            'should reject objects where a "min" property is present and not a number',
            () => {
                expect(isShape({type: 'byte', min: '1'})).toBe(false);
            }
        );

        it(
            'should reject objects where a "max" property is present and not a number',
            () => {
                expect(isShape({type: 'byte', max: '1'})).toBe(false);
            }
        );
    });

    describe('characters', () => {
        it('should accept valid characters', () => {
            expect(isShape({type: 'character'})).toBe(true);
        });
    });

    describe('doubles', () => {
        it('should accept valid doubles', () => {
            expect(isShape({type: 'double', min: 1, max: 2})).toBe(true);
        });

        it(
            'should reject objects where a "min" property is present and not a number',
            () => {
                expect(isShape({type: 'double', min: '1'})).toBe(false);
            }
        );

        it(
            'should reject objects where a "max" property is present and not a number',
            () => {
                expect(isShape({type: 'double', max: '1'})).toBe(false);
            }
        );
    });

    describe('floats', () => {
        it('should accept valid floats', () => {
            expect(isShape({type: 'float', min: 1, max: 2})).toBe(true);
        });

        it(
            'should reject objects where a "min" property is present and not a number',
            () => {
                expect(isShape({type: 'float', min: '1'})).toBe(false);
            }
        );

        it(
            'should reject objects where a "max" property is present and not a number',
            () => {
                expect(isShape({type: 'float', max: '1'})).toBe(false);
            }
        );
    });

    describe('integers', () => {
        it('should accept valid integers', () => {
            expect(isShape({type: 'integer', min: 1, max: 2})).toBe(true);
        });

        it(
            'should reject objects where a "min" property is present and not a number',
            () => {
                expect(isShape({type: 'integer', min: '1'})).toBe(false);
            }
        );

        it(
            'should reject objects where a "max" property is present and not a number',
            () => {
                expect(isShape({type: 'integer', max: '1'})).toBe(false);
            }
        );
    });

    describe('longs', () => {
        it('should accept valid longs', () => {
            expect(isShape({type: 'long', min: 1, max: 2})).toBe(true);
        });

        it(
            'should reject objects where a "min" property is present and not a number',
            () => {
                expect(isShape({type: 'long', min: '1'})).toBe(false);
            }
        );

        it(
            'should reject objects where a "max" property is present and not a number',
            () => {
                expect(isShape({type: 'long', max: '1'})).toBe(false);
            }
        );
    });

    describe('shorts', () => {
        it('should accept valid shorts', () => {
            expect(isShape({type: 'short', min: 1, max: 2})).toBe(true);
        });

        it(
            'should reject objects where a "min" property is present and not a number',
            () => {
                expect(isShape({type: 'short', min: '1'})).toBe(false);
            }
        );

        it(
            'should reject objects where a "max" property is present and not a number',
            () => {
                expect(isShape({type: 'short', max: '1'})).toBe(false);
            }
        );
    });

    describe('strings', () => {
        it('should accept valid strings', () => {
            expect(isShape({
                type: 'string',
                min: 1,
                max: 2,
                enum: ['foo', 'bar', 'baz'],
                pattern: '/[a-zA-Z]/',
                jsonValue: false,
                idempotencyToken: false
            })).toBe(true);
        });

        it(
            'should reject objects where a "min" property is present and not a number',
            () => {
                expect(isShape({type: 'string', min: '1'})).toBe(false);
            }
        );

        it(
            'should reject objects where a "max" property is present and not a number',
            () => {
                expect(isShape({type: 'string', max: '1'})).toBe(false);
            }
        );

        it(
            'should reject objects where a "pattern" property is present and not a string',
            () => {
                expect(isShape({type: 'string', pattern: false})).toBe(false);
            }
        );

        it(
            'should reject objects where a "enum" property is present and not an array of strings',
            () => {
                expect(isShape({
                    type: 'string',
                    enum: ['foo', 'bar', true, 'baz']
                })).toBe(false);
            }
        );

        it(
            'should reject objects where a "jsonValue" property is present and not a boolean',
            () => {
                expect(isShape({type: 'string', jsonValue: '1'})).toBe(false);
            }
        );

        it(
            'should reject objects where a "idempotencyToken" property is present and not a boolean',
            () => {
                expect(isShape({type: 'string', idempotencyToken: '1'})).toBe(false);
            }
        );
    });

    describe('timestamps', () => {
        it('should accept valid timestamps', () => {
            expect(isShape({type: 'timestamp', timestampFormat: 'atom'})).toBe(true);
        });

        it(
            'should reject objects where a "timestampFormat" property is present and not a string',
            () => {
                expect(isShape({type: 'timestamp', timestampFormat: true}))
                    .toBe(false);
            }
        );
    });

    describe('lists', () => {
        const minimalValidList: List = {
            type: 'list',
            member: {shape: 'string'}
        };

        it('should accept valid lists', () => {
            expect(isShape(minimalValidList)).toBe(true);
        });

        it(
            'should reject objects where a "min" property is present and not a number',
            () => {
                expect(isShape({
                    ...minimalValidList,
                    min: '1'
                })).toBe(false);
            }
        );

        it(
            'should reject objects where a "max" property is present and not a number',
            () => {
                expect(isShape({
                    ...minimalValidList,
                    max: '1'
                })).toBe(false);
            }
        );

        it(
            'should reject objects where a "flattened" property is present and not a boolean',
            () => {
                expect(isShape({
                    ...minimalValidList,
                    flattened: '1'
                })).toBe(false);
            }
        );
    });

    describe('maps', () => {
        const minimalValidMap: Map = {
            type: 'map',
            key: {shape: 'string'},
            value: {shape: 'string'}
        };

        it('should accept valid maps', () => {
            expect(isShape(minimalValidMap)).toBe(true);
        });

        it(
            'should reject objects where a "flattened" property is present and not a boolean',
            () => {
                expect(isShape({
                    ...minimalValidMap,
                    flattened: '1'
                })).toBe(false);
            }
        );
    });

    describe('structures', () => {
        const minimalValidStructure: Structure = {
            type: "structure",
            members: {
                foo: {shape: 'bar'}
            }
        };

        it('should accept valid structures', () => {
            expect(isShape(minimalValidStructure)).toBe(true);
        });

        it(
            'should reject objects where "members" is not an object map of StructureMembers',
            () => {
                expect(isShape({
                    ...minimalValidStructure,
                    members: {foo: {bar: 'baz'}}
                })).toBe(false);
            }
        );

        it(
            'should reject objects where a "exception" property is present and not a boolean',
            () => {
                expect(isShape({
                    ...minimalValidStructure,
                    exception: '1'
                })).toBe(false);
            }
        );

        it(
            'should reject objects where a "fault" property is present and not a boolean',
            () => {
                expect(isShape({
                    ...minimalValidStructure,
                    fault: '1'
                })).toBe(false);
            }
        );

        it(
            'should reject objects where a "payload" property is present and not a string',
            () => {
                expect(isShape({
                    ...minimalValidStructure,
                    payload: 1
                })).toBe(false);
            }
        );

        it(
            'should reject objects where a "error" property is present and not an object',
            () => {
                expect(isShape({
                    ...minimalValidStructure,
                    error: false
                })).toBe(false);
            }
        );
    });
});
