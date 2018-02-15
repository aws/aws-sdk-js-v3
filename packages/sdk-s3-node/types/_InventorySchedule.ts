/**
 * _InventorySchedule shape
 */
export interface _InventorySchedule {
    /**
     * _InventoryFrequency shape
     */
    Frequency: 'Daily'|'Weekly'|string;
}

export type _UnmarshalledInventorySchedule = _InventorySchedule;