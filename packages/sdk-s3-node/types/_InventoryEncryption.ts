import {_SSES3, _UnmarshalledSSES3} from './_SSES3';
import {_SSEKMS, _UnmarshalledSSEKMS} from './_SSEKMS';

/**
 * _InventoryEncryption shape
 */
export interface _InventoryEncryption {
    /**
     * _SSES3 shape
     */
    SSES3?: _SSES3;

    /**
     * _SSEKMS shape
     */
    SSEKMS?: _SSEKMS;
}

export interface _UnmarshalledInventoryEncryption extends _InventoryEncryption {
    /**
     * _SSES3 shape
     */
    SSES3?: _UnmarshalledSSES3;

    /**
     * _SSEKMS shape
     */
    SSEKMS?: _UnmarshalledSSEKMS;
}