import {_Tag, _UnmarshalledTag} from './_Tag';

/**
 * <p>A complex type containing a resource and its associated tags.</p>
 */
export interface _ResourceTagSet {
    /**
     * <p>The type of the resource.</p> <ul> <li> <p>The resource type for health checks is <code>healthcheck</code>.</p> </li> <li> <p>The resource type for hosted zones is <code>hostedzone</code>.</p> </li> </ul>
     */
    ResourceType?: 'healthcheck'|'hostedzone'|string;

    /**
     * <p>The ID for the specified resource.</p>
     */
    ResourceId?: string;

    /**
     * <p>The tags associated with the specified resource.</p>
     */
    Tags?: Array<_Tag>|Iterable<_Tag>;
}

export interface _UnmarshalledResourceTagSet extends _ResourceTagSet {
    /**
     * <p>The tags associated with the specified resource.</p>
     */
    Tags?: Array<_UnmarshalledTag>;
}