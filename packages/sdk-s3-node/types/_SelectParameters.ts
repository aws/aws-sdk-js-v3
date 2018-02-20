import {_InputSerialization, _UnmarshalledInputSerialization} from './_InputSerialization';
import {_OutputSerialization, _UnmarshalledOutputSerialization} from './_OutputSerialization';

/**
 * _SelectParameters shape
 */
export interface _SelectParameters {
    /**
     * _InputSerialization shape
     */
    InputSerialization: _InputSerialization;

    /**
     * _ExpressionType shape
     */
    ExpressionType: 'SQL'|string;

    /**
     * _Expression shape
     */
    Expression: string;

    /**
     * _OutputSerialization shape
     */
    OutputSerialization: _OutputSerialization;
}

export interface _UnmarshalledSelectParameters extends _SelectParameters {
    /**
     * _InputSerialization shape
     */
    InputSerialization: _UnmarshalledInputSerialization;

    /**
     * _OutputSerialization shape
     */
    OutputSerialization: _UnmarshalledOutputSerialization;
}