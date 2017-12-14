/**
 * DecryptInput shape
 */
export interface DecryptInput {
    /**
     * <p>Ciphertext to be decrypted. The blob includes metadata.</p>
     */
    CiphertextBlob: ArrayBuffer|ArrayBufferView|string;

    /**
     * <p>The encryption context. If this was specified in the <a>Encrypt</a> function, it must be specified here or the decryption operation will fail. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/encryption-context.html">Encryption Context</a>.</p>
     */
    EncryptionContext?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>A list of grant tokens.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token">Grant Tokens</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     */
    GrantTokens?: Array<string>|Iterable<string>;
}