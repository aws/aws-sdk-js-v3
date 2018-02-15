import {_StorageClassAnalysisDataExport, _UnmarshalledStorageClassAnalysisDataExport} from './_StorageClassAnalysisDataExport';

/**
 * _StorageClassAnalysis shape
 */
export interface _StorageClassAnalysis {
    /**
     * _StorageClassAnalysisDataExport shape
     */
    DataExport?: _StorageClassAnalysisDataExport;
}

export interface _UnmarshalledStorageClassAnalysis extends _StorageClassAnalysis {
    /**
     * _StorageClassAnalysisDataExport shape
     */
    DataExport?: _UnmarshalledStorageClassAnalysisDataExport;
}