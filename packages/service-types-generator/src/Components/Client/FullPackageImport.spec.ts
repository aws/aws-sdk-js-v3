import {FullPackageImport} from './FullPackageImport';

describe('FullPackageImport', () => {
    it('should import standard packages with variable-safe names', () => {
        expect((new FullPackageImport('sax.js')).toString())
            .toBe("import * as _sax_js from 'sax.js';");
        expect((new FullPackageImport('http2')).toString())
            .toBe("import * as _http2 from 'http2';");
    });

    it('should resolve variable-safe names for scoped packages', () => {
        expect((new FullPackageImport('@aws/types')).toString())
            .toBe("import * as __aws_types from '@aws/types';");
        expect((new FullPackageImport('@types/node')).toString())
            .toBe("import * as __types_node from '@types/node';");
    });
});
