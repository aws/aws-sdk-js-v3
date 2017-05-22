import {requiresImport} from "../../../lib/Components/Model/helpers";
import {
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
