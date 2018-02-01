import {InvalidInput} from './InvalidInput';
import {NoSuchTrafficPolicy} from './NoSuchTrafficPolicy';
import {NoSuchTrafficPolicyInstance} from './NoSuchTrafficPolicyInstance';
import {PriorRequestNotComplete} from './PriorRequestNotComplete';
import {ConflictingTypes} from './ConflictingTypes';
export type UpdateTrafficPolicyInstanceExceptionsUnion = InvalidInput |
    NoSuchTrafficPolicy |
    NoSuchTrafficPolicyInstance |
    PriorRequestNotComplete |
    ConflictingTypes;
