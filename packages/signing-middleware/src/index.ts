import {
    Handler,
    HandlerArguments,
    RequestSigner,
} from '@aws/types';

export class SigningHandler implements Handler<any, any, any> {
    constructor(
        private readonly signer: RequestSigner,
        private readonly next: Handler<any, any, any>
    ) {}

    async handle({request, ...rest}: HandlerArguments<any, any>) {
        if (!request) {
            throw new Error(
                'A request must have been defined before the SigningHandler can be invoked.'
            );
        }

        return this.next.handle({
            ...rest,
            request: await this.signer.sign(request)
        });
    }
}
