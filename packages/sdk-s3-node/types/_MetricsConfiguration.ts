import {_MetricsFilter, _UnmarshalledMetricsFilter} from './_MetricsFilter';

/**
 * _MetricsConfiguration shape
 */
export interface _MetricsConfiguration {
    /**
     * _MetricsId shape
     */
    Id: string;

    /**
     * _MetricsFilter shape
     */
    Filter?: _MetricsFilter;
}

export interface _UnmarshalledMetricsConfiguration extends _MetricsConfiguration {
    /**
     * _MetricsFilter shape
     */
    Filter?: _UnmarshalledMetricsFilter;
}