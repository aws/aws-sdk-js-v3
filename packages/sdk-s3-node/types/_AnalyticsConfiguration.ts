import {_AnalyticsFilter, _UnmarshalledAnalyticsFilter} from './_AnalyticsFilter';
import {_StorageClassAnalysis, _UnmarshalledStorageClassAnalysis} from './_StorageClassAnalysis';

/**
 * _AnalyticsConfiguration shape
 */
export interface _AnalyticsConfiguration {
    /**
     * The identifier used to represent an analytics configuration.
     */
    Id: string;

    /**
     * The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.
     */
    Filter?: _AnalyticsFilter;

    /**
     * If present, it indicates that data related to access patterns will be collected and made available to analyze the tradeoffs between different storage classes.
     */
    StorageClassAnalysis: _StorageClassAnalysis;
}

export interface _UnmarshalledAnalyticsConfiguration extends _AnalyticsConfiguration {
    /**
     * The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.
     */
    Filter?: _UnmarshalledAnalyticsFilter;

    /**
     * If present, it indicates that data related to access patterns will be collected and made available to analyze the tradeoffs between different storage classes.
     */
    StorageClassAnalysis: _UnmarshalledStorageClassAnalysis;
}