import { SmokeTestCase, RuntimeTarget } from '@aws/build-types';
import { IndentedSection } from '../IndentedSection';

export interface SmokeTestOptions {
    clientName: string;
    runtime: RuntimeTarget;
    testCase: SmokeTestCase;
}

export class SmokeTest {
    private readonly clientName: string;
    private readonly runtime: RuntimeTarget;
    private readonly testCase: SmokeTestCase;
    constructor({
        clientName,
        runtime,
        testCase
    }: SmokeTestOptions) {
        this.clientName = clientName;
        this.runtime = runtime;
        this.testCase = testCase;
    }

    get commandName(): string {
        return `${this.testCase.operationName}Command`;
    }

    toString() {
        const {
            errorExpectedFromService,
            operationName,
            input
        } = this.testCase;
        const isNode = this.runtime === 'node';
        const commandInstance = operationName.charAt(0).toLowerCase() + operationName.substr(1); 
        const testName = errorExpectedFromService ?
            `${operationName} should fail when given bad input` :
            `${operationName} should succeed when given correct input`;
        const thenExpects = errorExpectedFromService ?
            `expect(result).toBeUndefined();
            done();` :
            `expect(typeof result).toBe('object');
            done();`;

        const catchExpects = errorExpectedFromService ?
            `expect(err).toBeDefined();
            done();` :
            `expect(err).toBeUndefined();
            done();`;

        return `
it('${testName}', (done) => {
    const client = new ${this.clientName}({
        region: defaultRegion,
        ${!isNode ? 'credentials' : ''}
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