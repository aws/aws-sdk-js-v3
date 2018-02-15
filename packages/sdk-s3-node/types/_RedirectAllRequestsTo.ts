/**
 * _RedirectAllRequestsTo shape
 */
export interface _RedirectAllRequestsTo {
    /**
     * _HostName shape
     */
    HostName: string;

    /**
     * _Protocol shape
     */
    Protocol?: 'http'|'https'|string;
}

export type _UnmarshalledRedirectAllRequestsTo = _RedirectAllRequestsTo;