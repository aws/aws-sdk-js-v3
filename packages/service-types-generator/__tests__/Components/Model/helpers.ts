import {
    requiresImport,
    pruneServiceMetadata,
} from "../../../lib/Components/Model/helpers";
import {
    minimalValidServiceMetadata,
    NodeList,
    PrimaryLocationMap,
    scalarTypes,
    ValidationException,
} from "../../../__fixtures__";
import {SerializationModel} from "../../../../types/protocol";

describe('requiresImport', () => {
    it('should return true for lists', () => {
        expect(requiresImport(NodeList)).toBe(true);
    });

    it('should return true for maps', () => {
        expect(requiresImport(PrimaryLocationMap)).toBe(true);
    });

    it('should return true for structures', () => {
        expect(requiresImport(ValidationException)).toBe(true);
    });

    it('should return false for scalar types', () => {
        for (let type of scalarTypes) {
            expect(requiresImport({type} as SerializationModel))
                .toBe(false);
        }
    });
});

describe('pruneServiceMetadata', () => {
    it('should return a new object', () => {
        const metadata = minimalValidServiceMetadata;
        const prunedMetadata = pruneServiceMetadata(metadata);
        expect(metadata).not.toBe(prunedMetadata);
    });

    it('should remove undefined fields', () => {
        expect(pruneServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {targetPrefix: undefined}
        ))).toEqual(minimalValidServiceMetadata)
    });

    it('should remove unrecognized fields', () => {
        expect(pruneServiceMetadata(Object.assign(
            {},
            minimalValidServiceMetadata,
            {foo: 'bar'}
        ))).toEqual(minimalValidServiceMetadata);
    });
});
