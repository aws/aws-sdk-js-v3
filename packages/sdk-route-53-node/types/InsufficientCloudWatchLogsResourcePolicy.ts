import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>Amazon Route 53 doesn't have the permissions required to create log streams and send query logs to log streams. Possible causes include the following:</p> <ul> <li> <p>There is no resource policy that specifies the log group ARN in the value for <code>Resource</code>.</p> </li> <li> <p>The resource policy that includes the log group ARN in the value for <code>Resource</code> doesn't have the necessary permissions.</p> </li> <li> <p>The resource policy hasn't finished propagating yet.</p> </li> </ul>
 */
export interface InsufficientCloudWatchLogsResourcePolicy extends __ServiceException__<_InsufficientCloudWatchLogsResourcePolicyDetails> {
    name: 'InsufficientCloudWatchLogsResourcePolicy';
}

export interface _InsufficientCloudWatchLogsResourcePolicyDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}