import {SigningHandler} from './';
import {Handler, HttpRequest, RequestSigner} from '@aws/types';

describe('SigningHandler', () => {
    const noOpSigner: RequestSigner = {
        sign: (request: HttpRequest) => Promise.resolve({
            ...request,
            headers: {
                ...request.headers,
                signed: 'true',
            }
        })
    } as any;
    const noOpNext: Handler<object, object> = {
        handle: jest.fn(args => ({})),
    };

    beforeEach(() => {
        (noOpNext.handle as any).mockClear();
    });

    it('should sign the request and pass it to the next handler', async () => {
        const signingHandler = new SigningHandler(noOpSigner, noOpNext);
        await signingHandler.handle({
            input: {},
            request: {
                headers: {},
            } as any
        });

        const {calls} = (noOpNext.handle as any).mock;
        expect(calls.length).toBe(1);
        expect(calls[0][0].request.headers.signed).toBe('true');
    });

    it('should reject the promise if no request has yet been built', async () => {
        const signingHandler = new SigningHandler(noOpSigner, noOpNext);
        await expect(signingHandler.handle({input: {}}))
            .rejects
            .toMatchObject(new Error('A request must have been defined before the SigningHandler can be invoked.'));

        expect((noOpNext.handle as any).mock.calls.length).toBe(0);
    });
});
