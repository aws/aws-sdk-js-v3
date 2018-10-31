import {getSerializationType} from "./getSerializationType";
import {minimalShapeMap} from "../ApiModel/shapeMap.fixture";
import {
    floatTypes,
    integerTypes,
    numericTypes,
    stringTypes
} from "../ApiModel/shapeTypes.fixture";
import {Shape, Type} from '@aws-sdk/build-types';

describe('getSerializationType', () => {
    it('should convert all float model types to "float"', () => {
        for (let type of floatTypes) {
            expect(getSerializationType(minimalShapeMap[type]))
                .toEqual('float');
        }
    });

    it('should convert all integer model types to "integer"', () => {
        for (let type of integerTypes) {
            expect(getSerializationType(minimalShapeMap[type]))
                .toEqual('integer');
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
