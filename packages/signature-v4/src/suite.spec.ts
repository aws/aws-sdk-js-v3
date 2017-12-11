import {SignatureV4} from "./SignatureV4";
import {
    credentials,
    region,
    requests,
    service,
    signingDate,
} from './suite.fixture';
import {Sha256} from "@aws/crypto-sha256-js";

/**
 * Executes the official AWS Signature Version 4 test suite.
 *
 * @link http://docs.aws.amazon.com/general/latest/gr/signature-v4-test-suite.html
 */
describe('AWS Signature Version 4 Test Suite', () => {
    const signer = new SignatureV4({
        credentials,
        region,
        service,
        sha256: Sha256,

        // required for the test suite, but not the default for AWS services
        applyChecksum: false,
    });

    for (const {name, request, authorization} of requests) {
        it(`should calculate the correct signature for ${name}`, async () => {
            const signed = await signer.sign(request, {signingDate});
            expect(signed.headers['authorization']).toEqual(authorization);
        });
    }
});
