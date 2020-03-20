import { LazyJsonString } from "./lazy-json";
describe("LazyJsonString", () => {
  it("should has string methods", () => {
    const jsonValue = new LazyJsonString('"foo"');
    expect(jsonValue.length).toBe(5);
    expect(jsonValue.toString()).toBe('"foo"');
  });

  it("should deserialize json properly", () => {
    const jsonValue = new LazyJsonString('"foo"');
    expect(jsonValue.deserializeJSON()).toBe("foo");
    const wrongJsonValue = new LazyJsonString("foo");
    expect(() => wrongJsonValue.deserializeJSON()).toThrow();
  });

  it("should get JSON string properly", () => {
    const jsonValue = new LazyJsonString('{"foo", "bar"}');
    expect(jsonValue.toJSON()).toBe('{"foo", "bar"}');
  });

  it("can instantiate from LazyJsonString class", () => {
    const original = new LazyJsonString('"foo"');
    const newOne = LazyJsonString.fromObject(original);
    expect(newOne.toString()).toBe('"foo"');
  });

  it("can instantiate from String class", () => {
    const jsonValue = LazyJsonString.fromObject(new String('"foo"'));
    expect(jsonValue.toString()).toBe('"foo"');
  });

  it("can instantiate from object", () => {
    const jsonValue = LazyJsonString.fromObject({ foo: "bar" });
    expect(jsonValue.toString()).toBe('{"foo":"bar"}');
  });
});
