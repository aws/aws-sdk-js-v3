/**
 * Specifies the use of SSE-KMS to encrypt delievered Inventory reports.
 */
export interface _SSEKMS {
    /**
     * Specifies the ID of the AWS Key Management Service (KMS) master encryption key to use for encrypting Inventory reports.
     */
    KeyId: string;
}

export type _UnmarshalledSSEKMS = _SSEKMS;