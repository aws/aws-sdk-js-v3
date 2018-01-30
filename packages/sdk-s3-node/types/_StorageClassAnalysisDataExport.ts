import {_AnalyticsExportDestination, _UnmarshalledAnalyticsExportDestination} from './_AnalyticsExportDestination';

/**
 * _StorageClassAnalysisDataExport shape
 */
export interface _StorageClassAnalysisDataExport {
    /**
     * The version of the output schema to use when exporting data. Must be V_1.
     */
    OutputSchemaVersion: 'V_1'|string;

    /**
     * The place to store the data for an analysis.
     */
    Destination: _AnalyticsExportDestination;
}

export interface _UnmarshalledStorageClassAnalysisDataExport extends _StorageClassAnalysisDataExport {
    /**
     * The place to store the data for an analysis.
     */
    Destination: _UnmarshalledAnalyticsExportDestination;
}