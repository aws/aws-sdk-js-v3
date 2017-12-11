import {Hash} from '@aws/hash-node';
import {
    SignatureV4 as BaseSignatureV4,
    SignatureV4Init,
} from '@aws/signature-v4';

export class SignatureV4 extends BaseSignatureV4 {
    constructor(
        {sha256 = Hash.bind(null, 'sha256'), ...rest}: SignatureV4Init
    ) {
        super({sha256, ...rest});
    }
}
