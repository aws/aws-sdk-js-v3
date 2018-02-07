import {_Tag} from './_Tag';
import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * AddTagsInput shape
 */
export interface AddTagsInput {
    /**
     * <p>The key-value pairs to use to create tags. If you specify a key without specifying a value, Amazon ML creates a tag with the specified key and a value of null.</p>
     */
    Tags: Array<_Tag>|Iterable<_Tag>;

    /**
     * <p>The ID of the ML object to tag. For example, <code>exampleModelId</code>.</p>
     */
    ResourceId: string;

    /**
     * <p>The type of the ML object to tag. </p>
     */
    ResourceType: 'BatchPrediction'|'DataSource'|'Evaluation'|'MLModel'|string;

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