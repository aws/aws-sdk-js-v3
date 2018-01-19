import {initServiceException} from './';
import { ServiceException, ResponseMetadata } from '../../types/build/index';

describe('initServiceException', () => {
    const metadata: ResponseMetadata = {
        httpResponse: {
            statusCode: 400,
            headers: {}
        }
    }
    it('should return unknown exception when exception cannot be parsed', () => {
        const serviceException = initServiceException(new Error(), {
            $metadata: metadata
        })
        expect(serviceException).toBeInstanceOf(Error);
        expect(serviceException.name).toEqual('Error');
        expect(serviceException.message).toEqual('');
        expect(serviceException.details).toEqual({});
        expect(serviceException.$metadata).toEqual(metadata);
    })

    it('should extract proper error message from exception options', () => {
        expect(initServiceException(new Error('foo'), {
            $metadata: metadata,
        }).message).toEqual('foo');
        expect(initServiceException(new Error('foo'), {
            $metadata: metadata,
            rawException: {message: 'bar'}
        }).message).toEqual('bar');
        expect(initServiceException(new Error('foo'), {
            $metadata: metadata,
            rawException: {message: 'bar'},
            message: 'qux'
        }).message).toEqual('qux');
    })
})
