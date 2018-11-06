import {packageNameToVariable} from './packageNameToVariable';

describe('packageNameToVariable', () => {
    it('should resolve variable-safe names for standard packages', () => {
        expect(packageNameToVariable('sax.js')).toBe('_sax_js');
        expect(packageNameToVariable('http2')).toBe('_http2');
    });

    it('should resolve variable-safe names for scoped packages', () => {
        expect(packageNameToVariable('@aws-sdk/types')).toBe('__aws_sdk_types');
        expect(packageNameToVariable('@types/node')).toBe('__types_node');
    });
});
