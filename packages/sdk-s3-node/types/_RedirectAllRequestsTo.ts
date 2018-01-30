/**
 * _RedirectAllRequestsTo shape
 */
export interface _RedirectAllRequestsTo {
    /**
     * Name of the host where requests will be redirected.
     */
    HostName: string;

    /**
     * Protocol to use (http, https) when redirecting requests. The default is the protocol that is used in the original request.
     */
    Protocol?: 'http'|'https'|string;
}

export type _UnmarshalledRedirectAllRequestsTo = _RedirectAllRequestsTo;