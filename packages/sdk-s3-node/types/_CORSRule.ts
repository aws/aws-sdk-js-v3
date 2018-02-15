/**
 * _CORSRule shape
 */
export interface _CORSRule {
    /**
     * _AllowedHeaders shape
     */
    AllowedHeaders?: Array<string>|Iterable<string>;

    /**
     * _AllowedMethods shape
     */
    AllowedMethods: Array<string>|Iterable<string>;

    /**
     * _AllowedOrigins shape
     */
    AllowedOrigins: Array<string>|Iterable<string>;

    /**
     * _ExposeHeaders shape
     */
    ExposeHeaders?: Array<string>|Iterable<string>;

    /**
     * _MaxAgeSeconds shape
     */
    MaxAgeSeconds?: number;
}

export interface _UnmarshalledCORSRule extends _CORSRule {
    /**
     * _AllowedHeaders shape
     */
    AllowedHeaders?: Array<string>;

    /**
     * _AllowedMethods shape
     */
    AllowedMethods: Array<string>;

    /**
     * _AllowedOrigins shape
     */
    AllowedOrigins: Array<string>;

    /**
     * _ExposeHeaders shape
     */
    ExposeHeaders?: Array<string>;
}