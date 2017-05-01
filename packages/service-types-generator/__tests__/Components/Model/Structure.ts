import {Structure} from "../../../lib/Components/Model/Structure";
import {minimalShapeMap} from "../../../__fixtures__/index";

describe('Structure', () => {
    it('should throw if the named shape is not a map', () => {
        expect(() => {
            const structure = new Structure(
                'MyStructure',
                {...minimalShapeMap, MyStructure: {type: 'boolean'}}
            );
        }).toThrow();
    });

    it(
        'should emit a minimal object with no extra imports when no members specified',
        () => {
            const structure = new Structure(
                'foo',
                {...minimalShapeMap, foo: {type: 'structure', members: {}}}
            );

            expect(structure.toString()).toEqual(
`import {Structure as _Structure_} from '@aws/types';

export const foo: _Structure_ = {
    type: 'structure',
    required: [],
    members: {},
};`
            );
        }
    );

    it('should include imports for complex members', () => {
        const structure = new Structure(
            'foo',
            {...minimalShapeMap, foo: {
                type: 'structure',
                members: {List: {shape: 'list'}, Map: {shape: 'map'}}
            }}
        );

        expect(structure.toString()).toEqual(
`import {list} from './list';
import {map} from './map';
import {Structure as _Structure_} from '@aws/types';

export const foo: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        List: {
            shape: list,
        },
        Map: {
            shape: map,
        },
    },
};`
        );
    });

    it('should include required traits in emitted object', () => {
        const structure = new Structure(
            'foo',
            {...minimalShapeMap, foo: {
                type: 'structure',
                members: {List: {shape: 'list'}},
                required: ['List'],
            }}
        );

        expect(structure.toString()).toEqual(
`import {list} from './list';
import {Structure as _Structure_} from '@aws/types';

export const foo: _Structure_ = {
    type: 'structure',
    required: [
        'List',
    ],
    members: {
        List: {
            shape: list,
        },
    },
};`
        );
    });

    it('should include payload traits in emitted object', () => {
        const structure = new Structure(
            'foo',
            {...minimalShapeMap, foo: {
                type: 'structure',
                members: {data: {shape: 'blob'}},
                payload: 'data',
            }}
        );

        expect(structure.toString()).toEqual(
`import {Structure as _Structure_} from '@aws/types';

export const foo: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        data: {
            shape: {
                type: 'blob',
            },
        },
    },
    payload: 'data',
};`
        );
    });

    it('should include sensitive traits in emitted object', () => {
        const structure = new Structure(
            'foo',
            {...minimalShapeMap, foo: {
                type: 'structure',
                members: {data: {shape: 'blob'}},
                sensitive: true,
            }}
        );

        expect(structure.toString()).toEqual(
            `import {Structure as _Structure_} from '@aws/types';

export const foo: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        data: {
            shape: {
                type: 'blob',
            },
        },
    },
    sensitive: true,
};`
        );
    });

    it('should include exception traits in the emitted object', () => {
        const structure = new Structure(
            'foo',
            {...minimalShapeMap, foo: {
                type: 'structure',
                members: {},
                exception: true,
            }}
        );

        expect(structure.toString()).toEqual(
`import {Structure as _Structure_} from '@aws/types';

export const foo: _Structure_ = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'foo',
};`
        );
    });

    it(
        'should include error traits in the emitted object for exception structures',
        () => {
            const structure = new Structure(
                'foo',
                {...minimalShapeMap, foo: {
                    type: 'structure',
                    members: {},
                    exception: true,
                    error: {
                        code: 'ErrorCode',
                    }
                }}
            );

            expect(structure.toString()).toEqual(
`import {Structure as _Structure_} from '@aws/types';

export const foo: _Structure_ = {
    type: 'structure',
    required: [],
    members: {},
    exceptionType: 'foo',
    exceptionCode: 'ErrorCode',
};`
            );
        }
    );
});