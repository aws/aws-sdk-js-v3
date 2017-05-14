import {getSerializationType} from "../../lib/TreeModel/getSerializationType";
import {minimalShapeMap, numericTypes, stringTypes} from "../../__fixtures__";
import {Shape, Type} from "../../lib/ApiModel/Shape";

describe('getSerializationType', () => {
    it('should convert all numeric model types to "number"', () => {
        for (let type of numericTypes) {
            expect(getSerializationType(minimalShapeMap[type]))
                .toEqual('number');
        }
    });

    it('should convert all stringy model types to "string"', () => {
        for (let type of stringTypes) {
            expect(getSerializationType(minimalShapeMap[type]))
                .toEqual('string');
        }
    });

    it('should convert other shapes to their model type', () => {
        for (let type of <Array<Type>>Object.keys(minimalShapeMap)) {
            if (numericTypes.has(type) || stringTypes.has(type)) {
                continue;
            }

            expect(getSerializationType(minimalShapeMap[type]))
                .toEqual(type);
        }
    });

    it('should throw when an unknown model type is encountered', () => {
        expect(() => {
            getSerializationType(<Shape><any>{type: 'bar'})
        }).toThrow();
    });
});
