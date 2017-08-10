import {Test} from "../index";

describe('aa', () => {
    it('should be true', () => {
        const test = new Test();
        expect(test.atest()).toEqual({
            "Simple": "Hello",
            "Node": {
                "Key": "Value",
                "_Data": "Complex"
            }
        });
    });
});