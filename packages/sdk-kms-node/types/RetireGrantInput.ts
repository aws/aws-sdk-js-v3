/**
 * RetireGrantInput shape
 */
export interface RetireGrantInput {
    /**
     * <p>Token that identifies the grant to be retired.</p>
     */
    GrantToken?: string;

    /**
     * <p>The Amazon Resource Name (ARN) of the CMK associated with the grant. </p> <p>For example: <code>arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p>
     */
    KeyId?: string;

    /**
     * <p>Unique identifier of the grant to retire. The grant ID is returned in the response to a <code>CreateGrant</code> operation.</p> <ul> <li> <p>Grant ID Example - 0123456789012345678901234567890123456789012345678901234567890123</p> </li> </ul>
     */
    GrantId?: string;
}