import {HttpRequest} from './http';

/**
 * A {Date} object, a unix (epoch) timestamp in seconds, or a string that can be
 * understood by the JavaScript {Date} constructor.
 */
export type DateInput = number|string|Date;

export interface SigningArguments {
        /**
         * The date and time to be used as signature metadata. This value should be
         * a Date object, a unix (epoch) timestamp, or a string that can be
         * understood by the JavaScript `Date` constructor.If not supplied, the
         * value returned by `new Date()` will be used.
         */
        signingDate?: DateInput;
}

export interface RequestSigningArguments extends SigningArguments {
    /**
     * A set of strings whose members represents headers that cannot be signed.
     * All headers in the provided request will have their names converted to
     * lower case and then checked for existence in the unsignableHeaders set.
     */
    unsignableHeaders?: Set<string>;

    /**
     * Whether to sign the request in such a way as to allow arbitrary message
     * bodies. Useful for presigning requests for which the body is not known in
     * advance.
     */
    unsignedPayload?: boolean;
}

/**
 * An object that signs request objects with AWS credentials using one of the
 * AWS authentication protocols.
 */
export interface RequestSigner {
    /**
     * Signs a request for future use.
     *
     * The request will be valid until either the provided `expiration` time has
     * passed or the underlying credentials have expired.
     *
     * @param requestToSign The request that should be signed.
     * @param expiration    The time at which the signed request should no
     *                      longer be honored.
     * @param options       Additional signing options.
     */
    presignRequest<StreamType>(
        requestToSign: HttpRequest<StreamType>,
        expiration: DateInput,
        options?: RequestSigningArguments
    ): Promise<HttpRequest<StreamType>>;


    /**
     * Sign the provided request for immediate dispatch.
     */
    sign<StreamType>(
        requestToSign: HttpRequest<StreamType>,
        options?: RequestSigningArguments
    ): Promise<HttpRequest<StreamType>>;


    /**
     * Sign the provided `stringToSign` for use outside of the context of
     * request signing. Typical uses include signed policy generation.
     */
    sign(
        stringToSign: string,
        options?: SigningArguments
    ): Promise<string>;
}
