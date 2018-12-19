import {List} from "./List";

describe('List', () => {
    it('should emit a basic list', () => {
        const list = new List({
            type: 'list',
            name: 'MyList',
            documentation: 'MyList',
            member: {
                shape: {
                    type: 'boolean',
                    name: 'boolean',
                    documentation: 'boolean',
                },
            },
        });

        expect(list.toString()).toEqual(`
import {List as _List_} from '@aws-sdk/types';

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

    it('should include flattened trait in emitted value', () => {
        const list = new List({
            type: 'list',
            name: 'MyList',
            documentation: 'MyList',
            flattened: true,
            member: {
                shape: {
                    type: 'boolean',
                    name: 'boolean',
                    documentation: 'boolean',
                },
            },
        });

        expect(list.toString()).toEqual(`
import {List as _List_} from '@aws-sdk/types';

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
        const list = new List({
            type: 'list',
            name: 'MyList',
            documentation: 'MyList',
            min: 1,
            member: {
                shape: {
                    type: 'boolean',
                    name: 'boolean',
                    documentation: 'boolean',
                },
            },
        });

        expect(list.toString()).toEqual(`
import {List as _List_} from '@aws-sdk/types';

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
        const list = new List({
            type: 'list',
            name: 'MyList',
            documentation: 'MyList',
            sensitive: true,
            member: {
                shape: {
                    type: 'boolean',
                    name: 'boolean',
                    documentation: 'boolean',
                },
            },
        });

        expect(list.toString()).toEqual(`
import {List as _List_} from '@aws-sdk/types';

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
        const list = new List({
            type: 'list',
            name: 'MyList',
            documentation: 'MyList',
            member: {
                shape: {
                    type: 'structure',
                    name: 'structure',
                    documentation: 'structure',
                    required: [],
                    members: {},
                },
            },
        });

        expect(list.toString()).toEqual(`
import {List as _List_} from '@aws-sdk/types';
import {structure} from './structure';

export const MyList: _List_ = {
    type: 'list',
    member: {
        shape: structure,
    },
};
        `.trim());
    });

    it('should use getter for circular dependencies', () => {
        const circularDependencies = {'MyList': new Set(['Sub'])};
        const list = new List({
            type: 'list',
            name: 'MyList',
            documentation: 'MyList',
            member: {
                shape: {
                    name: 'Sub',
                    type: 'structure',
                    documentation: 'structure',
                    required: [],
                    members: {},
                }
            }
        }, circularDependencies);
        expect(list.toString()).toEqual(`
import {List as _List_, Member as _Member_} from '@aws-sdk/types';
import {Sub} from './Sub';

export const MyList: _List_ = {
    type: 'list',
    get member(): _Member_ {
        Object.defineProperty(MyList, 'member', {value: {
            shape: Sub,
        }});
        return {
            shape: Sub,
        }

    },
};       
        `.trim());
    });
});
