/**
 * _Initiator shape
 */
export interface _Initiator {
    /**
     * If the principal is an AWS account, it provides the Canonical User ID. If the principal is an IAM User, it provides a user ARN value.
     */
    ID?: string;

    /**
     * Name of the Principal.
     */
    DisplayName?: string;
}

export type _UnmarshalledInitiator = _Initiator;