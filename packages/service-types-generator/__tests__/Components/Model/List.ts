import {List} from "../../../lib/Components/Model/List";
import {minimalShapeMap} from "../../../__fixtures__";

describe('List', () => {
    it('should emit a basic list', () => {
        const list = new List(
            'MyList',
            {...minimalShapeMap, MyList: {
                type: 'list',
                member: {shape: 'boolean'},
            }}
        );

        expect(list.toString()).toEqual(`
import {List as _List_} from '@aws/types';

export const MyList: _List_ = {
    type: 'list',
    member: {
        shape: {
            type: 'boolean',
        },
    },
};
        `.trim());
    });

    it('should throw if the named shape is not a list', () => {
        expect(() => {
            const list = new List(
                'MyList',
                {...minimalShapeMap, MyList: {type: 'boolean'}}
            );
        }).toThrow();
    });

    it('should include flattened trait in emitted value', () => {
        const list = new List(
            'MyList',
            {...minimalShapeMap, MyList: {
                type: 'list',
                member: {shape: 'boolean'},
                flattened: true
            }}
        );

        expect(list.toString()).toEqual(`
import {List as _List_} from '@aws/types';

export const MyList: _List_ = {
    type: 'list',
    flattened: true,
    member: {
        shape: {
            type: 'boolean',
        },
    },
};
        `.trim());
    });

    it('should include min trait in emitted value', () => {
        const list = new List(
            'MyList',
            {...minimalShapeMap, MyList: {
                type: 'list',
                member: {shape: 'boolean'},
                min: 1
            }}
        );

        expect(list.toString()).toEqual(`
import {List as _List_} from '@aws/types';

export const MyList: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: {
            type: 'boolean',
        },
    },
};
        `.trim());
    });

    it('should include sensitive trait in emitted value', () => {
        const list = new List(
            'MyList',
            {...minimalShapeMap, MyList: {
                type: 'list',
                member: {shape: 'boolean'},
                sensitive: true
            }}
        );

        expect(list.toString()).toEqual(`
import {List as _List_} from '@aws/types';

export const MyList: _List_ = {
    type: 'list',
    sensitive: true,
    member: {
        shape: {
            type: 'boolean',
        },
    },
};
        `.trim());
    });

    it('should import complex shapes used a members', () => {
        const list = new List(
            'MyList',
            {...minimalShapeMap, MyList: {
                type: 'list',
                member: {shape: 'structure'},
            }}
        );

        expect(list.toString()).toEqual(`
import {List as _List_} from '@aws/types';
import {structure} from './structure';

export const MyList: _List_ = {
    type: 'list',
    member: {
        shape: structure,
    },
};
        `.trim());
    });
});