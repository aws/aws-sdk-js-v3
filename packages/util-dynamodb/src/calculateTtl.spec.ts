import { calculateTtl } from "./calculateTtl";
const typeErrorMessage = "The provided value is not a number greater than zero.";
describe("calculateTtl", () => {
  describe("input type checking", () => {
    it("throws TypeError if 'null' is provided", () => {
      expect(() => calculateTtl(null as any)).toThrow(new TypeError(typeErrorMessage));
    });

    it("throws TypeError if 'undefined' is provided", () => {
      expect(() => calculateTtl(undefined as any)).toThrow(new TypeError(typeErrorMessage));
    });

    it("throws TypeError if 'string' is provided", () => {
      const ttl = "5 hours" as any;
      expect(() => calculateTtl(ttl)).toThrow(new TypeError(typeErrorMessage));
    });

    it("throws TypeError if 'array' is provided", () => {
      const ttl = [] as any;
      expect(() => calculateTtl(ttl)).toThrow(new TypeError(typeErrorMessage));
    });
  });

  describe("time ranges", () => {
    it("1 hour", () => {
      const date = new Date();
      const hours = 1;
      const ttl = calculateTtl(hours);
      const ttlDate = new Date(ttl * 1000);
      const timespan = ttlDate.getTime() - date.getTime();

      const difference = Math.abs(timespan - hours * 60 * 60 * 1000);
      expect(difference).toBeLessThan(1000);
    });

    it("24 hours", () => {
      const date = new Date();
      const hours = 24;
      const ttl = calculateTtl(hours);
      const ttlDate = new Date(ttl * 1000);
      const timespan = ttlDate.getTime() - date.getTime();

      const difference = Math.abs(timespan - hours * 60 * 60 * 1000);
      expect(difference).toBeLessThan(1000);
    });

    it("2 weeks", () => {
      const date = new Date();
      const hours = 24 * 14;
      const ttl = calculateTtl(hours);
      const ttlDate = new Date(ttl * 1000);
      const timespan = ttlDate.getTime() - date.getTime();

      const difference = Math.abs(timespan - hours * 60 * 60 * 1000);
      expect(difference).toBeLessThan(1000);
    });
  });
});
