/**
 * _CORSRule shape
 */
export interface _CORSRule {
    /**
     * Specifies which headers are allowed in a pre-flight OPTIONS request.
     */
    AllowedHeaders?: Array<string>|Iterable<string>;

    /**
     * Identifies HTTP methods that the domain/origin specified in the rule is allowed to execute.
     */
    AllowedMethods: Array<string>|Iterable<string>;

    /**
     * One or more origins you want customers to be able to access the bucket from.
     */
    AllowedOrigins: Array<string>|Iterable<string>;

    /**
     * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript XMLHttpRequest object).
     */
    ExposeHeaders?: Array<string>|Iterable<string>;

    /**
     * The time in seconds that your browser is to cache the preflight response for the specified resource.
     */
    MaxAgeSeconds?: number;
}

export interface _UnmarshalledCORSRule extends _CORSRule {
    /**
     * Specifies which headers are allowed in a pre-flight OPTIONS request.
     */
    AllowedHeaders?: Array<string>;

    /**
     * Identifies HTTP methods that the domain/origin specified in the rule is allowed to execute.
     */
    AllowedMethods: Array<string>;

    /**
     * One or more origins you want customers to be able to access the bucket from.
     */
    AllowedOrigins: Array<string>;

    /**
     * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript XMLHttpRequest object).
     */
    ExposeHeaders?: Array<string>;
}