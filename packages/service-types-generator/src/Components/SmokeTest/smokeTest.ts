import { SmokeTestCase, RuntimeTarget } from "@aws-sdk/build-types";
import { IndentedSection } from "../IndentedSection";

export interface SmokeTestOptions {
  clientName: string;
  runtime: RuntimeTarget;
  serviceId: string;
  testCase: SmokeTestCase;
}

export class SmokeTest {
  private readonly clientName: string;
  private readonly runtime: RuntimeTarget;
  private readonly serviceId: string;
  private readonly testCase: SmokeTestCase;
  constructor({ clientName, runtime, serviceId, testCase }: SmokeTestOptions) {
    this.clientName = clientName;
    this.runtime = runtime;
    this.serviceId = serviceId;
    this.testCase = testCase;
  }

  get commandName(): string {
    return `${this.testCase.operationName}Command`;
  }

  toString() {
    if (this.runtime === "browser") {
      return this.generateBrowserTestCase();
    } else {
      return this.generateNodeTestCase();
    }
  }

  private generateNodeTestCase() {
    const {
      errorExpectedFromService: shouldError,
      operationName,
      input
    } = this.testCase;

    const tryMessage = shouldError
      ? `not ok ${
          this.serviceId
        } ${operationName} - error expected from service`
      : `ok ${
          this.serviceId
        } ${operationName} - no error expected from service`;
    const catchMessage = shouldError
      ? `ok ${this.serviceId} ${operationName} - error expected from service`
      : `not ok ${
          this.serviceId
        } ${operationName} - no error expected from service`;

    return `
await (async () => {
    const client = new ${this.clientName}({
        region: defaultRegion
    });

    const command = new ${this.commandName}(
${new IndentedSection(JSON.stringify(this.testCase.input, null, 4), 2)} as any
    );

    try {
        const result = await client.send(command);
        console.log('${tryMessage}');
        ${shouldError ? "testFailed = true;" : ""}
    } catch (err) {
        console.log('${catchMessage}');
        ${
          !shouldError
            ? `// output unexpected error information
        console.log('# ' + err.message);
        err.stack.split('\\n').forEach((line: string) => {
            console.log('# ' + line);
        });
        testFailed = true;
        `
            : ""
        }
    }
})();
        `.trim();
  }

  private generateBrowserTestCase() {
    const { errorExpectedFromService, operationName, input } = this.testCase;
    const commandInstance =
      operationName.charAt(0).toLowerCase() + operationName.substr(1);
    const testName = errorExpectedFromService
      ? `${operationName} should fail when given bad input`
      : `${operationName} should succeed when given correct input`;
    const thenExpects = errorExpectedFromService
      ? `expect(result).toBeUndefined();
            done();`
      : `expect(typeof result).toBe('object');
            done();`;

    const catchExpects = errorExpectedFromService
      ? `expect(err).toBeDefined();
            done();`
      : `expect(err).toBeUndefined();
            done();`;

    return `
it('${testName}', (done) => {
    const client = new ${this.clientName}({
        region: defaultRegion,
        credentials
    });

    const ${commandInstance} = new ${this.commandName}(
${new IndentedSection(JSON.stringify(this.testCase.input, null, 4), 2)}
    );

    client.send(${commandInstance})
        .then((result) => {
            ${thenExpects}
        }).catch((err) => {
            ${catchExpects}
        });
});
        `.trim();
  }
}
