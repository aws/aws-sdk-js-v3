import {Sha256} from '@aws-crypto/sha256-universal';
import {
    SignatureV4 as BaseSignatureV4,
    SignatureV4Init,
} from '@aws-sdk/signature-v4';

export class SignatureV4 extends BaseSignatureV4 {
    constructor({sha256 = Sha256, ...rest}: SignatureV4Init) {
        super({sha256, ...rest});
    }
}
