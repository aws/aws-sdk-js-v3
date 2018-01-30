/**
 * _InventorySchedule shape
 */
export interface _InventorySchedule {
    /**
     * Specifies how frequently inventory results are produced.
     */
    Frequency: 'Daily'|'Weekly'|string;
}

export type _UnmarshalledInventorySchedule = _InventorySchedule;