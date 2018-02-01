import {_InputSerialization, _UnmarshalledInputSerialization} from './_InputSerialization';
import {_OutputSerialization, _UnmarshalledOutputSerialization} from './_OutputSerialization';

/**
 * Describes the parameters for Select job types.
 */
export interface _SelectParameters {
    /**
     * Describes the serialization format of the object.
     */
    InputSerialization: _InputSerialization;

    /**
     * The type of the provided expression (e.g., SQL).
     */
    ExpressionType: 'SQL'|string;

    /**
     * The expression that is used to query the object.
     */
    Expression: string;

    /**
     * Describes how the results of the Select job are serialized.
     */
    OutputSerialization: _OutputSerialization;
}

export interface _UnmarshalledSelectParameters extends _SelectParameters {
    /**
     * Describes the serialization format of the object.
     */
    InputSerialization: _UnmarshalledInputSerialization;

    /**
     * Describes how the results of the Select job are serialized.
     */
    OutputSerialization: _UnmarshalledOutputSerialization;
}