/**
 * _AccelerateConfiguration shape
 */
export interface _AccelerateConfiguration {
    /**
     * The accelerate configuration of the bucket.
     */
    Status?: 'Enabled'|'Suspended'|string;
}

export type _UnmarshalledAccelerateConfiguration = _AccelerateConfiguration;