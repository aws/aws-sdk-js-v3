import {Map} from "../../../lib/Components/Model/Map";
import {minimalShapeMap} from "../../../__fixtures__";

describe('Map', () => {
    it('should emit a basic Map', () => {
        const map = new Map(
            'MyMap',
            {...minimalShapeMap, MyMap: {
                type: 'map',
                key: {shape: 'string'},
                value: {shape: 'boolean'}
            }}
        );

        expect(map.toString()).toEqual(`
import {Map as _Map_} from '@aws/types';

export const MyMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: {
            type: 'boolean',
        },
    },
};
        `.trim());
    });

    it('should throw if the named shape is not a map', () => {
        expect(() => {
            const map = new Map(
                'MyMap',
                {...minimalShapeMap, MyMap: {type: 'boolean'}}
            );
        }).toThrow();
    });

    it('should include flattened trait in emitted value', () => {
        const map = new Map(
            'MyMap',
            {...minimalShapeMap, MyMap: {
                type: 'map',
                key: {shape: 'string'},
                value: {shape: 'boolean'},
                flattened: true,
            }}
        );

        expect(map.toString()).toEqual(`
import {Map as _Map_} from '@aws/types';

export const MyMap: _Map_ = {
    type: 'map',
    flattened: true,
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: {
            type: 'boolean',
        },
    },
};
        `.trim());
    });

    it('should include sensitive trait in emitted value', () => {
        const map = new Map(
            'MyMap',
            {...minimalShapeMap, MyMap: {
                type: 'map',
                key: {shape: 'string'},
                value: {shape: 'boolean'},
                sensitive: true,
            }}
        );

        expect(map.toString()).toEqual(`
import {Map as _Map_} from '@aws/types';

export const MyMap: _Map_ = {
    type: 'map',
    sensitive: true,
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: {
            type: 'boolean',
        },
    },
};
        `.trim());
    });

    it('should import complex shapes used as values', () => {
        const map = new Map(
            'MyMap',
            {...minimalShapeMap, MyMap: {
                type: 'map',
                key: {shape: 'string'},
                value: {shape: 'structure'},
            }}
        );

        expect(map.toString()).toEqual(`
import {Map as _Map_} from '@aws/types';
import {structure} from './structure';

export const MyMap: _Map_ = {
    type: 'map',
    key: {
        shape: {
            type: 'string',
        },
    },
    value: {
        shape: structure,
    },
};
        `.trim());
    });

    it('should import complex shapes used as keys', () => {
        const map = new Map(
            'MyMap',
            {...minimalShapeMap, MyMap: {
                type: 'map',
                key: {shape: 'structure'},
                value: {shape: 'boolean'},
            }}
        );

        expect(map.toString()).toEqual(`
import {Map as _Map_} from '@aws/types';
import {structure} from './structure';

export const MyMap: _Map_ = {
    type: 'map',
    key: {
        shape: structure,
    },
    value: {
        shape: {
            type: 'boolean',
        },
    },
};
        `.trim());
    });
});