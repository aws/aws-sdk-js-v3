import {Provider} from './util';

/**
 * An object representing temporary or permanent AWS credentials.
 */
export interface Credentials {
    /**
     * AWS access key ID
     */
    readonly accessKeyId: string;

    /**
     * AWS secret access key
     */
    readonly secretAccessKey: string;

    /**
     * A security or session token to use with these credentials. Usually
     * present for temporary credentials.
     */
    readonly sessionToken?: string;

    /**
     * UNIX epoch timestamp (seconds since 1 January, 1970 00:00:00 GMT) when
     * these credentials will no longer be accepted.
     */
    readonly expiration?: number;
}

export type CredentialProvider = Provider<Credentials>;
