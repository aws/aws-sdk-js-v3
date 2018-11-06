import {Structure} from "./Structure";
import {TreeModelShape} from "@aws-sdk/build-types";

describe('Structure', () => {
    it(
        'should emit a minimal object with no extra imports when no members specified',
        () => {
            const structure = new Structure({
                type: 'structure',
                members: {},
                name: 'foo',
                documentation: 'documentation',
                required: [],
            });

            expect(structure.toString()).toEqual(
`import {Structure as _Structure_} from '@aws-sdk/types';

export const foo: _Structure_ = {
    type: 'structure',
    required: [],
    members: {},
};`
            );
        }
    );

    it('should include imports for complex members', () => {
        const string: TreeModelShape = {
            type: 'string',
            name: 'string',
            documentation: 'string',
        };
        const structure = new Structure({
            type: 'structure',
            members: {
                List: {
                    shape: {
                        type: 'list',
                        member: {
                            shape: string,
                        },
                        documentation: 'list',
                        name: 'list',
                    },
                },
                Map: {
                    shape: {
                        type: 'map',
                        key: {
                            shape: string,
                        },
                        value: {
                            shape: string,
                        },
                        documentation: 'map',
                        name: 'map',
                    },
                },
            },
            name: 'foo',
            documentation: 'documentation',
            required: [],
        });

        expect(structure.toString()).toEqual(
`import {list} from './list';
import {map} from './map';
import {Structure as _Structure_} from '@aws-sdk/types';

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
        const structure = new Structure({
            type: 'structure',
            members: {
                List: {
                    shape: {
                        type: 'list',
                        member: {
                            shape: {
                                type: 'string',
                                name: 'string',
                                documentation: 'string',
                            },
                        },
                        documentation: 'list',
                        name: 'list',
                    },
                },
            },
            name: 'foo',
            documentation: 'documentation',
            required: ['List'],
        });

        expect(structure.toString()).toEqual(
`import {list} from './list';
import {Structure as _Structure_} from '@aws-sdk/types';

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
        const structure = new Structure({
            type: 'structure',
            members: {
                data: {
                    shape: {
                        type: 'blob',
                        documentation: 'blob',
                        name: 'blob',
                    },
                },
            },
            name: 'foo',
            documentation: 'documentation',
            required: [],
            payload: 'data',
        });

        expect(structure.toString()).toEqual(
`import {Structure as _Structure_} from '@aws-sdk/types';

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
        const structure = new Structure({
            type: 'structure',
            members: {
                data: {
                    shape: {
                        type: 'blob',
                        documentation: 'blob',
                        name: 'blob',
                    },
                },
            },
            name: 'foo',
            documentation: 'documentation',
            required: [],
            sensitive: true,
        });

        expect(structure.toString()).toEqual(
            `import {Structure as _Structure_} from '@aws-sdk/types';

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
        const structure = new Structure({
            type: 'structure',
            members: {},
            name: 'foo',
            documentation: 'documentation',
            required: [],
            exception: true,
            exceptionType: 'foo',
        });

        expect(structure.toString()).toEqual(
`import {Structure as _Structure_} from '@aws-sdk/types';

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
            const structure = new Structure({
                type: 'structure',
                members: {},
                name: 'foo',
                documentation: 'documentation',
                required: [],
                exception: true,
                exceptionType: 'foo',
                exceptionCode: 'ErrorCode',
            });

            expect(structure.toString()).toEqual(
`import {Structure as _Structure_} from '@aws-sdk/types';

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
