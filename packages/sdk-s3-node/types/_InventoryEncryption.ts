import {_SSES3, _UnmarshalledSSES3} from './_SSES3';
import {_SSEKMS, _UnmarshalledSSEKMS} from './_SSEKMS';

/**
 * Contains the type of server-side encryption used to encrypt the inventory results.
 */
export interface _InventoryEncryption {
    /**
     * Specifies the use of SSE-S3 to encrypt delievered Inventory reports.
     */
    SSES3?: _SSES3;

    /**
     * Specifies the use of SSE-KMS to encrypt delievered Inventory reports.
     */
    SSEKMS?: _SSEKMS;
}

export interface _UnmarshalledInventoryEncryption extends _InventoryEncryption {
    /**
     * Specifies the use of SSE-S3 to encrypt delievered Inventory reports.
     */
    SSES3?: _UnmarshalledSSES3;

    /**
     * Specifies the use of SSE-KMS to encrypt delievered Inventory reports.
     */
    SSEKMS?: _UnmarshalledSSEKMS;
}