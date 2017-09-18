import {HttpRequest} from './http';

export interface RequestSigningArguments<StreamType> {
    /**
     * The request to be signed. This parameter will not be modified during the
     * signing process but will instead be cloned.
     */
    request: HttpRequest<StreamType>;

    /**
     * The date and time to be used as signature metadata. This value should be
     * a Date object, a unix (epoch) timestamp, or a string that can be
     * understood by the JavaScript `Date` constructor.If not supplied, the
     * value returned by `new Date()` will be used.
     */
    signingDate?: number|string|Date;

    /**
     * An object whose keys represents headers that cannot be signed. All
     * headers in the provided request will have their names converted to lower
     * case and then checked for existence in the unsignableHeaders object using
     * the `in` operator.
     *
     * @default [Object] An object whose keys are lower-cased transfer-specific
     * headers (such as `user-agent`, `referer`, `expect`, etc).
     */
    unsignableHeaders?: {[key: string]: any};
}

export interface RequestPresigningArguments<StreamType> extends
    RequestSigningArguments<StreamType>
{
    /**
     * The time at which the signed URL should no longer be honored. This value
     * should be a Date object, a unix (epoch) timestamp, or a string that can
     * be understood by the JavaScript `Date` constructor.
     */
    expiration: number|string|Date;

    /**
     * Whether to move all values that would normally be sent as headers to the
     * query string of the URL. This allows the returned value can be used in
     * contexts that do not permit specifying additional headers, such as <img>
     * tags or <a> links.
     *
     * If set to false, then the request must be sent along with the headers
     * with which it was signed.
     *
     * @default [true]
     */
    hoistHeaders?: boolean;
}

/**
 * An object that signs request objects with AWS credentials using one of the
 * AWS authentication protocols.
 */
export interface RequestSigner {
    /**
     * Sign the provided `request` with the provided `credentials` for future
     * use.
     *
     * The request will be valid until either the provided `expires` time has
     * passed or the underlying credentials have expired.
     */
    presignRequest<StreamType>(
        args: RequestPresigningArguments<StreamType>
    ): Promise<HttpRequest<StreamType>>;

    /**
     * Sign the provided `request` with the provided `credentials` for immediate
     * dispatch.
     */
    signRequest<StreamType>(
        args: RequestSigningArguments<StreamType>
    ): Promise<HttpRequest<StreamType>>;
}
