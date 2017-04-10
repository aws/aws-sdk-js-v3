import {
    Boolean,
    isStructureMember,
    isShape,
    List,
    Map,
    Shape,
    Structure,
    StructureMember,
} from "../lib/Shape";

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
            expect(isStructureMember(
                Object.assign({}, minimalValidStructureMember, {documentation: {}})
            )).toBe(false);
        }
    );

    it(
        'should reject objects where a "flattened" property is present and not a boolean',
        () => {
            expect(isStructureMember(
                Object.assign({}, minimalValidStructureMember, {flattened: {}})
            )).toBe(false);
        }
    );

    it(
        'should reject objects where a "locationName" property is present and not a string',
        () => {
            expect(isStructureMember(
                Object.assign({}, minimalValidStructureMember, {locationName: {}})
            )).toBe(false);
        }
    );

    it(
        'should reject objects where a "xmlAttribute" property is present and not a boolean',
        () => {
            expect(isStructureMember(
                Object.assign({}, minimalValidStructureMember, {xmlAttribute: {}})
            )).toBe(false);
        }
    );

    it('should reject scalar values', () => {
        for (let scalar of [null, void 0, 1, 'string', true]) {
            expect(isStructureMember(scalar)).toBe(false);
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
            expect(isShape(
                Object.assign({}, minimalValidShape, {documentation: {}})
            )).toBe(false);
        }
    );

    it(
        'should reject objects where a "sensitive" property is present and not a boolean',
        () => {
            expect(isShape(
                Object.assign({}, minimalValidShape, {sensitive: {}})
            )).toBe(false);
        }
    );

    it(
        'should reject objects where a "deprecated" property is present and not a boolean',
        () => {
            expect(isShape(
                Object.assign({}, minimalValidShape, {deprecated: {}})
            )).toBe(false);
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
            expect(isShape({type: 'blob'})).toBe(true);
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
            expect(isShape({type: 'short'})).toBe(true);
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
            expect(isShape({type: 'string'})).toBe(true);
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
    });

    describe('timestamps', () => {
        it('should accept valid timestamps', () => {
            expect(isShape({type: 'timestamp'})).toBe(true);
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
                expect(isShape(Object.assign(
                    {},
                    minimalValidList,
                    {min: '1'}
                ))).toBe(false);
            }
        );

        it(
            'should reject objects where a "max" property is present and not a number',
            () => {
                expect(isShape(Object.assign(
                    {},
                    minimalValidList,
                    {max: '1'}
                ))).toBe(false);
            }
        );

        it(
            'should reject objects where a "flattened" property is present and not a boolean',
            () => {
                expect(isShape(Object.assign(
                    {},
                    minimalValidList,
                    {flattened: '1'}
                ))).toBe(false);
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
                expect(isShape(Object.assign(
                    {},
                    minimalValidMap,
                    {flattened: '1'}
                ))).toBe(false);
            }
        );
    });

    describe('structures', () => {
        const minimalValidStructure: Structure = {
            type: "structure",
            members: {}
        };

        it('should accept valid structures', () => {
            expect(isShape(minimalValidStructure)).toBe(true);
        });

        it(
            'should reject objects where "members" is not an object map of StructureMembers',
            () => {
                expect(isShape(Object.assign(
                    {},
                    minimalValidStructure,
                    {members: {foo: {bar: 'baz'}}}
                ))).toBe(false);
            }
        );

        it(
            'should reject objects where a "exception" property is present and not a boolean',
            () => {
                expect(isShape(Object.assign(
                    {},
                    minimalValidStructure,
                    {exception: '1'}
                ))).toBe(false);
            }
        );

        it(
            'should reject objects where a "fault" property is present and not a boolean',
            () => {
                expect(isShape(Object.assign(
                    {},
                    minimalValidStructure,
                    {fault: '1'}
                ))).toBe(false);
            }
        );

        it(
            'should reject objects where a "payload" property is present and not a string',
            () => {
                expect(isShape(Object.assign(
                    {},
                    minimalValidStructure,
                    {payload: 1}
                ))).toBe(false);
            }
        );

        it(
            'should reject objects where a "error" property is present and not an object',
            () => {
                expect(isShape(Object.assign(
                    {},
                    minimalValidStructure,
                    {error: false}
                ))).toBe(false);
            }
        );
    });
});
