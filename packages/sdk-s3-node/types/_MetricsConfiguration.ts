import {_MetricsFilter, _UnmarshalledMetricsFilter} from './_MetricsFilter';

/**
 * _MetricsConfiguration shape
 */
export interface _MetricsConfiguration {
    /**
     * The ID used to identify the metrics configuration.
     */
    Id: string;

    /**
     * Specifies a metrics configuration filter. The metrics configuration will only include objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator).
     */
    Filter?: _MetricsFilter;
}

export interface _UnmarshalledMetricsConfiguration extends _MetricsConfiguration {
    /**
     * Specifies a metrics configuration filter. The metrics configuration will only include objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator).
     */
    Filter?: _UnmarshalledMetricsFilter;
}