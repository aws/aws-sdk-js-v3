import {_Change, _UnmarshalledChange} from './_Change';

/**
 * <p>The information for a change request.</p>
 */
export interface _ChangeBatch {
    /**
     * <p> <i>Optional:</i> Any comments you want to include about a change batch request.</p>
     */
    Comment?: string;

    /**
     * <p>Information about the changes to make to the record sets.</p>
     */
    Changes: Array<_Change>|Iterable<_Change>;
}

export interface _UnmarshalledChangeBatch extends _ChangeBatch {
    /**
     * <p>Information about the changes to make to the record sets.</p>
     */
    Changes: Array<_UnmarshalledChange>;
}