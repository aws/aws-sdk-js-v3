import {_AnalyticsExportDestination, _UnmarshalledAnalyticsExportDestination} from './_AnalyticsExportDestination';

/**
 * _StorageClassAnalysisDataExport shape
 */
export interface _StorageClassAnalysisDataExport {
    /**
     * _StorageClassAnalysisSchemaVersion shape
     */
    OutputSchemaVersion: 'V_1'|string;

    /**
     * _AnalyticsExportDestination shape
     */
    Destination: _AnalyticsExportDestination;
}

export interface _UnmarshalledStorageClassAnalysisDataExport extends _StorageClassAnalysisDataExport {
    /**
     * _AnalyticsExportDestination shape
     */
    Destination: _UnmarshalledAnalyticsExportDestination;
}