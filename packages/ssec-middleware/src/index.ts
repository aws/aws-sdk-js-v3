import {
    Decoder,
    Encoder,
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    Hash,
    Middleware,
    SourceData,
} from '@aws/types';

export type SsecPropertiesConfiguration<Input extends object> = {
    [sourceProperty in keyof Input]?: {
        targetProperty: string;
        hashTargetProperty: string;
    }
}

export interface SsecMiddlewareConfiguration<Input extends object> {
    utf8Decoder: Decoder;
    base64Encoder: Encoder;
    hashConstructor: { new (): Hash };
    ssecProperties: SsecPropertiesConfiguration<Input>;
}

export function ssecMiddleware<Input extends object>({
    utf8Decoder,
    base64Encoder,
    hashConstructor,
    ssecProperties,
}: SsecMiddlewareConfiguration<Input>): Middleware<Input, any> {
    return <Output extends object>(
        next: Handler<Input, Output>,
        context: HandlerExecutionContext
    ): Handler<Input, Output> => async (
        {input, ...rest}: HandlerArguments<Input>
    ): Promise<Output> => {
        for (const sourceProperty of Object.keys(ssecProperties)) {
            let value: SourceData|undefined = (input as any)[sourceProperty];
            if (value) {
                const {
                    targetProperty,
                    hashTargetProperty,
                } = (ssecProperties as any)[sourceProperty];
                const valueView = ArrayBuffer.isView(value)
                    ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength)
                    : typeof value === 'string'
                        ? utf8Decoder(value)
                        : new Uint8Array(value);
                const encoded = base64Encoder(valueView);
                const hash = new hashConstructor;
                hash.update(valueView);
                input = {
                    ...input as any,
                    [targetProperty]: base64Encoder(valueView),
                    [hashTargetProperty]: base64Encoder(await hash.digest()),
                }
            }
        }

        return next({
            ...rest,
            input
        });
    }
}
