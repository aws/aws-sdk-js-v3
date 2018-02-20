/**
 * _Redirect shape
 */
export interface _Redirect {
    /**
     * _HostName shape
     */
    HostName?: string;

    /**
     * _HttpRedirectCode shape
     */
    HttpRedirectCode?: string;

    /**
     * _Protocol shape
     */
    Protocol?: 'http'|'https'|string;

    /**
     * _ReplaceKeyPrefixWith shape
     */
    ReplaceKeyPrefixWith?: string;

    /**
     * _ReplaceKeyWith shape
     */
    ReplaceKeyWith?: string;
}

export type _UnmarshalledRedirect = _Redirect;