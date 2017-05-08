import {
    isServiceMetadata,
    isSupportedProtocol,
    isSupportedSignatureVersion,
} from "../lib/ServiceMetadata";
import {minimalValidServiceMetadata} from "../__fixtures__";

describe('isSupportedProtocol', () => {
    it('should reject non-string values', () => {
        for (let notAString of [null, void 0, 1, true, [], {}]) {
            expect(isSupportedProtocol(notAString)).toBe(false);
        }
    });

    it('should reject arbitrary strings', () => {
        for (let notAProtocol of ['foo', 'bar', 'baz', 'quux']) {
            expect(isSupportedProtocol(notAProtocol)).toBe(false);
        }
    });
});

describe('isSupportedSignatureVersion', () => {
    it('should reject non-string values', () => {
        for (let notAString of [null, void 0, 1, true, [], {}]) {
            expect(isSupportedSignatureVersion(notAString)).toBe(false);
        }
    });

    it('should reject arbitrary strings', () => {
        for (let notASignatureVersion of ['foo', 'bar', 'baz', 'quux']) {
            expect(isSupportedSignatureVersion(notASignatureVersion))
                .toBe(false);
        }
    });
});

describe('isServiceMetadata', () => {
    it('should accept a valid ServiceMetadata object', () => {
        expect(isServiceMetadata(minimalValidServiceMetadata)).toBe(true);
    });

    it('should reject objects where "apiVersion" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {apiVersion: 1}
        ))).toBe(false);
    });

    it('should reject objects where "endpointPrefix" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {apiVersion: 1}
        ))).toBe(false);
    });

    it('should reject objects where "protocol" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {endpointPrefix: 1}
        ))).toBe(false);
    });

    it('should reject objects where "serviceFullName" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {serviceFullName: 1}
        ))).toBe(false);
    });

    it('should reject objects where "signatureVersion" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {signatureVersion: 1}
        ))).toBe(false);
    });

    it('should reject objects where "uid" is not a string', () => {
        expect(isServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {uid: 1}
        ))).toBe(false);
    });

    it(
        'should reject objects where a "serviceAbbreviation" is present but is not a string',
        () => {
            expect(isServiceMetadata(Object.assign(
                {},
                minimalValidServiceMetadata,
                {serviceAbbreviation: 1}
            ))).toBe(false);
        }
    );

    it('should reject scalar values', () => {
        for (let scalar of [null, void 0, 1, 'string', true]) {
            expect(isServiceMetadata(scalar)).toBe(false);
        }
    });
});
