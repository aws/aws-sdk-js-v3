import {_StorageClassAnalysisDataExport, _UnmarshalledStorageClassAnalysisDataExport} from './_StorageClassAnalysisDataExport';

/**
 * _StorageClassAnalysis shape
 */
export interface _StorageClassAnalysis {
    /**
     * A container used to describe how data related to the storage class analysis should be exported.
     */
    DataExport?: _StorageClassAnalysisDataExport;
}

export interface _UnmarshalledStorageClassAnalysis extends _StorageClassAnalysis {
    /**
     * A container used to describe how data related to the storage class analysis should be exported.
     */
    DataExport?: _UnmarshalledStorageClassAnalysisDataExport;
}