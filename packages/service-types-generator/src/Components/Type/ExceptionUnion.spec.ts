import {ExceptionUnion} from './';
import {SDK_EXCEPTIONS} from '../../constants';

describe('ExceptionUnion', () => {
    it('should import SdkException from types', () => {
        const exceptionUion = new ExceptionUnion(['Foo', 'Bar', 'Baz', SDK_EXCEPTIONS], 'MyUnion');
        expect(exceptionUion.toString()).toMatch(
`import {Foo} from './Foo';
import {Bar} from './Bar';
import {Baz} from './Baz';
import {${SDK_EXCEPTIONS}} from '@aws/types';`
        )
    })
})
