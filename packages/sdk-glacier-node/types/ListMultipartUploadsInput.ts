/**
 * <p>Provides options for retrieving list of in-progress multipart uploads for an Amazon Glacier vault.</p>
 */
export interface ListMultipartUploadsInput {
    /**
     * <p>The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. </p>
     */
    accountId: string;

    /**
     * <p>The name of the vault.</p>
     */
    vaultName: string;

    /**
     * <p>An opaque string used for pagination. This value specifies the upload at which the listing of uploads should begin. Get the marker value from a previous List Uploads response. You need only include the marker if you are continuing the pagination of results started in a previous List Uploads request.</p>
     */
    marker?: string;

    /**
     * <p>Specifies the maximum number of uploads returned in the response body. If this value is not specified, the List Uploads operation returns up to 1,000 uploads.</p>
     */
    limit?: string;
}