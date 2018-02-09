import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * CreateQueryLoggingConfigInput shape
 */
export interface CreateQueryLoggingConfigInput {
    /**
     * <p>The ID of the hosted zone that you want to log queries for. You can log queries only for public hosted zones.</p>
     */
    HostedZoneId: string;

    /**
     * <p>The Amazon Resource Name (ARN) for the log group that you want to Amazon Route 53 to send query logs to. This is the format of the ARN:</p> <p>arn:aws:logs:<i>region</i>:<i>account-id</i>:log-group:<i>log_group_name</i> </p> <p>To get the ARN for a log group, you can use the CloudWatch console, the <a href="http://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html">DescribeLogGroups</a> API action, the <a href="http://docs.aws.amazon.com/cli/latest/reference/logs/describe-log-groups.html">describe-log-groups</a> command, or the applicable command in one of the AWS SDKs.</p>
     */
    CloudWatchLogsLogGroupArn: string;

    /**
     * The maximum number of times this operation should be retried. If set, this
     * value will override the `maxRetries` configuration set on the client for
     * this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __AbortSignal__

    /**
     * Per-request HTTP configuration options. If set, any options specified will
     * override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__
}