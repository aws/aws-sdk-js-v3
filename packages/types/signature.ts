import {Credentials} from './credentials';
import {HttpRequest} from './http';

export interface RequestSigningArguments<StreamType> {
    /**
     * The request to be signed. This parameter will not be modified during the
     * signing process but will instead be cloned.
     */
    request: HttpRequest<StreamType>;

    /**
     * The credentials with which the URL should be signed.
     */
    credentials: Credentials;

    /**
     * A zero-argument constructor used to create a JavaScript `Date` object for
     * the current date and time according to system settings.
     *
     * @default [Date]
     */
    currentDateConstructor?: {new (): Date};
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
