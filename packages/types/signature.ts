import {Credentials} from './credentials';
import {HttpRequest} from './http';

/**
 * An object that signs request objects with AWS credentials using one of the
 * AWS authentication protocols.
 */
export interface RequestSigner<StreamType> {
    /**
     * Use the provided `request` and `credentials` to create a pre-signed URL
     * that will be valid until the provided `expires` time. This method will
     * move all values that would normally be sent as headers to the query
     * string of the URL so that the returned value can be used in contexts that
     * do not allow specifying additional headers, such as <img> tags or <a>
     * links.
     *
     * The URL will be valid until either the provided `expires` time has passed
     * or the underlying credentials have expired.
     *
     * @param request       The request from which the URL should be derived.
     * @param credentials   The credentials with which the URL should be signed.
     * @param expires       The time at which the signed URL should no longer be
     *                      honored. This value should be a Date object, a unix
     *                      (epoch) timestamp, or a string that can be
     *                      understood by the JavaScript `Date` constructor.
     *
     * @see RequestSigner::presign
     */
    createPresignedUrl(
        request: HttpRequest<StreamType>,
        credentials: Credentials,
        expires: number|string|Date
    ): Promise<string>;

    /**
     * Sign the provided `request` with the provided `credentials` for future
     * use. The request must be sent along with the headers with which it was
     * signed.
     *
     * The URL will be valid until either the provided `expires` time has passed
     * or the underlying credentials have expired.
     *
     * @param request       The request from which the URL should be derived.
     * @param credentials   The credentials with which the URL should be signed.
     * @param expires       The time at which the signed URL should no longer be
     *                      honored. This value should be a Date object, a unix
     *                      (epoch) timestamp, or a string that can be
     *                      understood by the JavaScript `Date` constructor.
     *
     * @see RequestSigner::createPresignedUrl
     */
    presignRequest(
        request: HttpRequest<StreamType>,
        credentials: Credentials,
        expires: number|string|Date
    ): Promise<HttpRequest<StreamType>>;

    /**
     * Sign the provided `request` with the provided `credentials` for immediate
     * dispatch.
     *
     * @param request       The request from which the URL should be derived.
     * @param credentials   The credentials with which the URL should be signed.
     */
    signRequest(
        request: HttpRequest<StreamType>,
        credentials: Credentials
    ): Promise<HttpRequest<StreamType>>;
}
