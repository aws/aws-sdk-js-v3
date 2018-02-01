/**
 * _Redirect shape
 */
export interface _Redirect {
    /**
     * The host name to use in the redirect request.
     */
    HostName?: string;

    /**
     * The HTTP redirect code to use on the response. Not required if one of the siblings is present.
     */
    HttpRedirectCode?: string;

    /**
     * Protocol to use (http, https) when redirecting requests. The default is the protocol that is used in the original request.
     */
    Protocol?: 'http'|'https'|string;

    /**
     * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix docs/ (objects in the docs/ folder) to documents/, you can set a condition block with KeyPrefixEquals set to docs/ and in the Redirect set ReplaceKeyPrefixWith to /documents. Not required if one of the siblings is present. Can be present only if ReplaceKeyWith is not provided.
     */
    ReplaceKeyPrefixWith?: string;

    /**
     * The specific object key to use in the redirect request. For example, redirect request to error.html. Not required if one of the sibling is present. Can be present only if ReplaceKeyPrefixWith is not provided.
     */
    ReplaceKeyWith?: string;
}

export type _UnmarshalledRedirect = _Redirect;