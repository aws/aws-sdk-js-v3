import { test as it, describe, expect } from "vitest";

import { ClientS3InterfaceTest } from "./ClientS3InterfaceTest";
import { RESOLVED_FIELDS } from "./RESOLVED_FIELDS";

const Subject = ClientS3InterfaceTest;

describe("Client config interface should be stable", () => {
  describe(ClientS3InterfaceTest.name, () => {
    describe("initialization with minimal configuration", () => {
      const client = new Subject().initializeWithMinimalConfiguration();
      for (const [configType, fields] of Object.entries(RESOLVED_FIELDS)) {
        for (const field of fields) {
          if (configType === "resolvedByConfigResolver") {
            it(`should resolve the field [${field}] after minimal client init`, () => {
              expect(client.config[field as keyof typeof client.config]).toBeDefined();
            });
          } else {
            it(`should not resolve the field [${field}] after minimal client init`, () => {
              expect(client.config[field as keyof typeof client.config]).not.toBeDefined();
            });
          }
        }
      }
    });
    describe("initialization with maximal configuration", () => {
      const client = new Subject().initializeWithMaximalConfiguration();
      for (const [configType, fields] of Object.entries(RESOLVED_FIELDS)) {
        for (const field of fields) {
          if (configType === "resolvedByConfigResolver" || configType === "resolvedOnlyIfProvided") {
            it(`should resolve the field [${field}] after maximally configured client init`, () => {
              expect(client.config[field as keyof typeof client.config]).toBeDefined();
            });
          } else {
            it(`should not resolve the field [${field}] after maximally configured client init`, () => {
              expect(client.config[field as keyof typeof client.config]).not.toBeDefined();
            });
          }
        }
      }
    });
  });
});
