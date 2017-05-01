import {getSerializationType} from "../../../lib/Components/Model";
import {ShapeMap, Type} from "@aws/service-model";
import {minimalShapeMap, numericTypes, stringTypes} from "../../../__fixtures__";

describe('getSerializationType', () => {
    it('should convert all numeric model types to "number"', () => {
        for (let type of numericTypes) {
            expect(getSerializationType(type, minimalShapeMap))
                .toEqual('number');
        }
    });

    it('should convert all stringy model types to "string"', () => {
        for (let type of stringTypes) {
            expect(getSerializationType(type, minimalShapeMap))
                .toEqual('string');
        }
    });

    it('should convert other shapes to their model type', () => {
        for (let type of <Array<Type>>Object.keys(minimalShapeMap)) {
            if (numericTypes.has(type) || stringTypes.has(type)) {
                continue;
            }

            expect(getSerializationType(type, minimalShapeMap))
                .toEqual(type);
        }
    });

    it('should throw when an unknown model type is encountered', () => {
        expect(() => {
            getSerializationType('foo', <ShapeMap><any>{foo: {type: 'bar'}})
        }).toThrow();
    });
});