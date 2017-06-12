import {locateWindow} from "../";

describe('locateWindow', () => {
    beforeEach(() => {
        delete (global as any).window;
        delete (global as any).self;
    });

    it('should use `window` if defined', () => {
        (global as any).window = {};

        expect(locateWindow()).toBe(window);
    });

    it('should use `self` if defined', () => {
        (global as any).self = {};

        expect(locateWindow()).toBe(self);
    });

    it('should prefer `window` to `self`', () => {
        (global as any).window = {};
        (global as any).self = {};

        expect(locateWindow()).toBe(window);
        expect(locateWindow()).not.toBe(self);
    });

    it('should return a bare object if no global scope is defined', () => {
        expect(locateWindow()).toEqual({});
    });

    it('should return the same object on each invocation', () => {
        expect(locateWindow()).toBe(locateWindow());

        expect(locateWindow().alert).not.toBeDefined();
        locateWindow().alert = message => console.log(message);
        expect(locateWindow().alert).toBeDefined();
    });
});
