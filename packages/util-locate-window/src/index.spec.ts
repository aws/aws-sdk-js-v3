/**
 * @jest-environment node
 */

import { locateWindow } from "./";

describe("locateWindow", () => {
  const _window = (global as any).window || {};
  const _self = (global as any).self || {};

  beforeEach(() => {
    (global as any).window = undefined;
    (global as any).self = undefined;
  });

  afterEach(() => {
    (global as any).window = _window;
    (global as any).self = _self;
  });

  it("should use `window` if defined", () => {
    (global as any).window = _window;

    expect(locateWindow()).toBe(_window);
  });

  it("should use `self` if defined", () => {
    (global as any).self = _self;

    expect(locateWindow()).toBe(_self);
  });

  it("should prefer `window` to `self`", () => {
    (global as any).window = _window;
    (global as any).self = _self;

    expect(locateWindow()).toBe(_window);
    expect(locateWindow()).not.toBe(_self);
  });

  it("should return a bare object if no global scope is defined", () => {
    expect(locateWindow()).toEqual({});
  });

  it("should return the same object on each invocation", () => {
    expect(locateWindow()).toBe(locateWindow());

    expect(locateWindow().alert).not.toBeDefined();
    locateWindow().alert = (message) => console.log(message);
    expect(locateWindow().alert).toBeDefined();
  });
});
