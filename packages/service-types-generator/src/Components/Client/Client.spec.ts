import { Client } from "./Client";
import { model } from "../../shapes.fixture";
import { MiddlewareCustomizationDefinition } from "@aws-sdk/build-types";

describe("Client", () => {
  it("should include a client class", () => {
    const sender = new Client(model, "node");

    expect(sender.toString()).toMatch(
      "export class FakeServiceClient implements __aws_sdk_types.AWSClient"
    );
  });

  describe("middleware resolution", () => {
    const mockFooMiddlewareDefinition: MiddlewareCustomizationDefinition = {
      imports: [
        {
          package: "@aws-sdk/foo",
          version: "^1.0.0"
        }
      ],
      step: "build",
      type: "Middleware",
      priority: 10,
      expression: "__aws_sdk_foo.fooMiddleware"
    };
    const mockBarMiddlewareDefinition: MiddlewareCustomizationDefinition = {
      imports: [
        {
          package: "@aws-sdk/bar",
          version: "^1.0.0"
        },
        {
          package: "@aws-sdk/bar-middleware",
          version: "^1.0.0"
        }
      ],
      step: "finalize",
      type: "Middleware",
      priority: 20,
      expression: "__aws_sdk_bar.barMiddleware"
    };

    it("should include defined middleware", () => {
      const sender = new Client(model, "node", [mockFooMiddlewareDefinition]);
      const clientCode = sender.toString();
      expect(clientCode).toMatch(
        `import * as __aws_sdk_foo from '@aws-sdk/foo';`
      );
      [
        "this.middlewareStack.add(",
        `${mockFooMiddlewareDefinition.expression}`,
        `step: '${mockFooMiddlewareDefinition.step}`,
        `priority: ${mockFooMiddlewareDefinition.priority}`
      ].forEach(line => {
        expect(clientCode).toMatch(line);
      });
    });

    it("should include tags", () => {
      const sender = new Client(model, "node", [
        { ...mockFooMiddlewareDefinition, tags: "{FOO: true}" }
      ]);
      const clientCode = sender.toString();
      expect(clientCode).toMatch(
        `import * as __aws_sdk_foo from '@aws-sdk/foo';`
      );
      [
        "this.middlewareStack.add(",
        `${mockFooMiddlewareDefinition.expression}`,
        `step: '${mockFooMiddlewareDefinition.step}`,
        `priority: ${mockFooMiddlewareDefinition.priority}`,
        "tags: {FOO: true}"
      ].forEach(line => {
        expect(clientCode).toMatch(line);
      });
    });

    it("should handle multiple middleware", () => {
      const sender = new Client(model, "node", [
        mockFooMiddlewareDefinition,
        mockBarMiddlewareDefinition
      ]);
      const clientCode = sender.toString();
      expect(clientCode).toMatch(
        `import * as __aws_sdk_foo from '@aws-sdk/foo';`
      );
      expect(clientCode).toMatch(
        `import * as __aws_sdk_bar from '@aws-sdk/bar';`
      );
      expect(clientCode).toMatch(
        `import * as __aws_sdk_bar_middleware from '@aws-sdk/bar-middleware';`
      );
      [
        "this.middlewareStack.add(",
        `${mockFooMiddlewareDefinition.expression}`,
        `step: '${mockFooMiddlewareDefinition.step}`,
        `priority: ${mockFooMiddlewareDefinition.priority}`,
        `${mockBarMiddlewareDefinition.expression}`,
        `step: '${mockBarMiddlewareDefinition.step}`,
        `priority: ${mockBarMiddlewareDefinition.priority}`
      ].forEach(line => {
        expect(clientCode).toMatch(line);
      });
    });
  });
});
