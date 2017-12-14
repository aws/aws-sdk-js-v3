/**
 * GetParametersForImportInput shape
 */
export interface GetParametersForImportInput {
    /**
     * <p>The identifier of the CMK into which you will import key material. The CMK's <code>Origin</code> must be <code>EXTERNAL</code>.</p> <p>Specify the key ID or the Amazon Resource Name (ARN) of the CMK.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> </ul> <p>To get the key ID and key ARN for a CMK, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
     */
    KeyId: string;

    /**
     * <p>The algorithm you will use to encrypt the key material before importing it with <a>ImportKeyMaterial</a>. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-encrypt-key-material.html">Encrypt the Key Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
     */
    WrappingAlgorithm: 'RSAES_PKCS1_V1_5'|'RSAES_OAEP_SHA_1'|'RSAES_OAEP_SHA_256'|string;

    /**
     * <p>The type of wrapping key (public key) to return in the response. Only 2048-bit RSA public keys are supported.</p>
     */
    WrappingKeySpec: 'RSA_2048'|string;
}