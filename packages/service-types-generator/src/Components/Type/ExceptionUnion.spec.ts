import {ExceptionUnion} from './';
import {UNKNOWN_EXCEPTION} from '../../constants';

describe('ExceptionUnion', () => {
    it('should import SdkException from types', () => {
        const exceptionUion = new ExceptionUnion(['Foo', 'Bar', 'Baz'], 'MyUnion');
        expect(exceptionUion.toString()).toMatch(
`import {Foo} from './Foo';
import {Bar} from './Bar';
import {Baz} from './Baz';
import {${UNKNOWN_EXCEPTION}} from '@aws/types';`
        )
    })
})
