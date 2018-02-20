import {_AnalyticsFilter, _UnmarshalledAnalyticsFilter} from './_AnalyticsFilter';
import {_StorageClassAnalysis, _UnmarshalledStorageClassAnalysis} from './_StorageClassAnalysis';

/**
 * _AnalyticsConfiguration shape
 */
export interface _AnalyticsConfiguration {
    /**
     * _AnalyticsId shape
     */
    Id: string;

    /**
     * _AnalyticsFilter shape
     */
    Filter?: _AnalyticsFilter;

    /**
     * _StorageClassAnalysis shape
     */
    StorageClassAnalysis: _StorageClassAnalysis;
}

export interface _UnmarshalledAnalyticsConfiguration extends _AnalyticsConfiguration {
    /**
     * _AnalyticsFilter shape
     */
    Filter?: _UnmarshalledAnalyticsFilter;

    /**
     * _StorageClassAnalysis shape
     */
    StorageClassAnalysis: _UnmarshalledStorageClassAnalysis;
}