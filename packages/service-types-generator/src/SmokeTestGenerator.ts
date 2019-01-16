import {join} from 'path';
import {
    RuntimeTarget,
    SmokeTestModel,
    SmokeTestCase,
    TreeModel
} from '@aws-sdk/build-types';
import {serviceIdFromMetadata} from './serviceIdFromMetadata';
import {IndentedSection} from './Components/IndentedSection';
import {SmokeTest} from './Components/SmokeTest/smokeTest';
import {IMPORTS} from './internalImports';

export interface SmokeTestGeneratorOptions {
    clientName: string;
    model: SmokeTestModel;
    packageName: string;
    runtime: RuntimeTarget;
    serviceModel: TreeModel;
}

/**
 * Generates required smoke test files for sdk client packages.
*/
export class SmokeTestGenerator {
    private readonly clientName: string;
    private readonly model: SmokeTestModel;
    private readonly packageName: string;
    private readonly runtime: RuntimeTarget;
    private readonly serviceId: string;

    constructor({
        clientName,
        model,
        packageName,
        runtime,
        serviceModel
    }: SmokeTestGeneratorOptions) {
        this.clientName = clientName;
        this.model = model;
        this.packageName = packageName;
        this.runtime = runtime;
        this.serviceId = serviceIdFromMetadata(serviceModel.metadata);
    }

    /**
     * Generates code for each test case.
     * @internal
    */
    private generateSmokeTests(runtime: RuntimeTarget) {
        // generate tests
        const {
            defaultRegion,
            testCases
        } = this.model;
        const smokeTests: SmokeTest[] = [];

        for (const testCase of testCases) {
            smokeTests.push(new SmokeTest({
                clientName: this.clientName,
                runtime,
                serviceId: this.serviceId,
                testCase
            }));
        }

        return smokeTests;
    }

    get devDependencies() {
        const dependencies: {[packageName: string]: string} = {
            '@types/jest': '^20.0.2',
            'jest': '^20.0.4'
        };

        if (this.runtime === 'browser') {
            dependencies['@aws-sdk/karma-credential-loader'] = IMPORTS['karma-credential-loader'].version;
            dependencies['jasmine-core'] = '^2.8.0';
            dependencies['karma'] = '^2.0.0';
            dependencies['karma-chrome-launcher'] = '^2.2.0';
            dependencies['karma-coverage'] = '^1.1.1';
            dependencies['karma-jasmine'] = '^1.1.1';
            dependencies['karma-typescript'] = '^3.0.12';
            dependencies['puppeteer'] = '^1.0.0';
        }

        return dependencies;
    }

    *[Symbol.iterator](): Iterator<[string, string]> {
        if (this.runtime === 'node' || this.runtime === 'universal') {
            const fileName = this.runtime === 'universal' ? 'node.spec.ts' : 'index.spec.ts';
            yield [join('test', 'smoke', fileName), this.generateNodeSmokeTestFile()];
        }
        if (this.runtime === 'browser' || this.runtime === 'universal') {
            yield ['karma.conf', this.generateKarmaConfiguration()];
            const fileName = this.runtime === 'universal' ? 'browser.spec.ts' : 'index.spec.ts';
            yield [join('test', 'smoke', fileName), this.generateBrowserSmokeTestFile()];
        }
        
    }

    private generateKarmaConfiguration() {
        return `
// Karma configuration
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            'test/smoke/*.spec.ts',
            'commands/*.ts',
            'model/*.ts',
            'types/*.ts',
            '*.ts'
        ],
        preprocessors: {
            'test/smoke/index.spec.ts': 'credentials',
            '**/*.ts': 'karma-typescript'
        },
        plugins: [
            '@aws-sdk/karma-credential-loader',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-jasmine',
            'karma-typescript'
        ],
        reporters: ['progress', 'karma-typescript'],
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.json',
            bundlerOptions: {
                addNodeGlobals: false
            }
        },
        port: 9876,
        colors: false,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadlessDisableCors'],
        customLaunchers: {
            ChromeHeadlessDisableCors: {
                base: 'ChromeHeadless',
                flags: ['--disable-web-security']
            }
        },
        singleRun: true,
        concurrency: Infinity
    });
};
`.trim();
    }

    generateNodeSmokeTestFile() {
        const smokeTests = this.generateSmokeTests('node');
        const commandImports: string[] = [];
        const commandNames: Set<string> = new Set();
        // get a list of the unique commands that need to be imported
        smokeTests.forEach((test => {
            commandNames.add(test.commandName);
        }));

        for (const commandName of commandNames) {
            commandImports.push(
                `import {${commandName}} from '../../commands/${commandName}';`
            );
        }

        return `
import {${this.clientName}} from '../../${this.clientName}';
${commandImports.join('\n')}

async function smokeTestRunner() {
    const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || '${this.model.defaultRegion}';
    let testFailed = false;
    console.log('1..${smokeTests.length}');
    console.log('# Running tests for ${this.serviceId}.');

${smokeTests.map(test => new IndentedSection(test, 1)).join('\n')}

    if (testFailed) {
        process.exit(1);
    } else {
        process.exit(0);
    }
}

// execute the test runner
smokeTestRunner();
        `.trim();
    }

    private generateBrowserSmokeTestFile() {
        const defaultRegion = this.model.defaultRegion;
        const smokeTests = this.generateSmokeTests('browser');
        const commandImports: string[] = [];
        const commandNames: Set<string> = new Set();
        // get a list of the unique commands that need to be imported
        smokeTests.forEach((test => {
            commandNames.add(test.commandName);
        }));

        for (const commandName of commandNames) {
            commandImports.push(
                `import {${commandName}} from '../../commands/${commandName}';`
            );
        }

        // These variables are injected by the @aws-sdk/karma-credentials-plugin
        const injectedDeclarations: string[] = [
            'declare let defaultRegion: string;',
            'declare const credentials: any;'
        ];

        return `
import {${this.clientName}} from '../../${this.clientName}';
${commandImports.join('\n')}
${injectedDeclarations.join('\n')}
describe('${this.packageName} Smoke Tests:', () => {
    defaultRegion = defaultRegion || '${defaultRegion}';
${smokeTests.map(test => new IndentedSection(test, 1)).join('\n')}
});
        `.trim();
    }
}