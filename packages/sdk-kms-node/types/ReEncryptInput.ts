/**
 * ReEncryptInput shape
 */
export interface ReEncryptInput {
    /**
     * <p>Ciphertext of the data to reencrypt.</p>
     */
    CiphertextBlob: ArrayBuffer|ArrayBufferView|string;

    /**
     * <p>Encryption context used to encrypt and decrypt the data specified in the <code>CiphertextBlob</code> parameter.</p>
     */
    SourceEncryptionContext?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>A unique identifier for the CMK that is used to reencrypt the data.</p> <p>To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>To get the key ID and key ARN for a CMK, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
     */
    DestinationKeyId: string;

    /**
     * <p>Encryption context to use when the data is reencrypted.</p>
     */
    DestinationEncryptionContext?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>A list of grant tokens.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant_token">Grant Tokens</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     */
    GrantTokens?: Array<string>|Iterable<string>;
}