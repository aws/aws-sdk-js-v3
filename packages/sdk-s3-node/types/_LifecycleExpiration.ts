/**
 * _LifecycleExpiration shape
 */
export interface _LifecycleExpiration {
    /**
     * _Date shape
     */
    Date?: Date|string|number;

    /**
     * _Days shape
     */
    Days?: number;

    /**
     * _ExpiredObjectDeleteMarker shape
     */
    ExpiredObjectDeleteMarker?: boolean;
}

export interface _UnmarshalledLifecycleExpiration extends _LifecycleExpiration {
    /**
     * _Date shape
     */
    Date?: Date;
}