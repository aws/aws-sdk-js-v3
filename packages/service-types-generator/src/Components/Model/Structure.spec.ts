import {Structure} from "./Structure";
import {TreeModelShape} from "@aws/service-model";

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
                            name: 'string'
                        },
                        documentation: 'list',
                        name: 'list',
                    },
                    name: 'List'
                },
                Map: {
                    shape: {
                        type: 'map',
                        key: {shape: string},
                        value: {
                            shape: string,
                            name: 'string'
                        },
                        documentation: 'map',
                        name: 'map',
                    },
                    name: 'Map'
                },
            },
            name: 'foo',
            documentation: 'documentation',
            required: [],
        });

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
            name: 'List',
        },
        Map: {
            shape: map,
            name: 'Map',
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
                            name: 'string'
                        },
                        documentation: 'list',
                        name: 'list',
                    },
                    name: 'List'
                },
            },
            name: 'foo',
            documentation: 'documentation',
            required: ['List'],
        });

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
            name: 'List',
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
                    name: 'data'
                },
            },
            name: 'foo',
            documentation: 'documentation',
            required: [],
            payload: 'data',
        });

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
            name: 'data',
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
                    name: 'data'
                },
            },
            name: 'foo',
            documentation: 'documentation',
            required: [],
            sensitive: true,
        });

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
            name: 'data',
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
