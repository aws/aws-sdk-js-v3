import {join} from 'path';
import {
    RuntimeTarget,
    SmokeTestModel,
    SmokeTestCase
} from '@aws/build-types';
import {IndentedSection} from './Components/IndentedSection';
import {SmokeTest} from './Components/SmokeTest/smokeTest';

export interface SmokeTestGeneratorOptions {
    clientName: string;
    model: SmokeTestModel;
    packageName: string;
    runtime: RuntimeTarget;
}

/**
 * Generates required smoke test files for sdk client packages.
*/
export class SmokeTestGenerator {
    private readonly clientName: string;
    private readonly model: SmokeTestModel;
    private readonly packageName: string;
    private readonly runtime: RuntimeTarget;

    constructor({
        clientName,
        model,
        packageName,
        runtime
    }: SmokeTestGeneratorOptions) {
        this.clientName = clientName;
        this.model = model;
        this.packageName = packageName;
        this.runtime = runtime;
    }

    /**
     * Generates code for each test case.
     * @internal
    */
    private generateSmokeTests() {
        // generate tests
        const {
            defaultRegion,
            testCases
        } = this.model;
        const smokeTests: SmokeTest[] = [];

        for (const testCase of testCases) {
            smokeTests.push(new SmokeTest({
                clientName: this.clientName,
                runtime: this.runtime,
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
            dependencies['@aws/karma-credential-loader'] = '^0.0.1';
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
        if (this.runtime === 'browser') {
            yield ['karma.conf', this.generateKarmaConfiguration()];
        }
        yield [join('test', 'smoke', 'index.spec.ts'), this.generateSmokeTestFile()]
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
            '@aws/karma-credential-loader',
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

    private generateSmokeTestFile() {
        const isNode = this.runtime === 'node';
        const defaultRegion = this.model.defaultRegion;
        const smokeTests = this.generateSmokeTests();
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

        const defaultRegionCode = isNode ?
            `const defaultRegion = regionProvider() || '${defaultRegion}';` :
            `defaultRegion = defaultRegion || '${defaultRegion}';`
        const injectedDeclarations: string[] = [];
        if (!isNode) {
            // These variables are injected by the @aws/karma-credentials-plugin
            injectedDeclarations.push(
                'declare let defaultRegion: string;',
                'declare const credentials: any;'
            );
        }

        return `
${isNode ? `import {defaultProvider as regionProvider} from '@aws/region-provider';` : ''}
import {${this.clientName}} from '../../${this.clientName}';
${commandImports.join('\n')}
${injectedDeclarations.join('\n')}
describe('${this.packageName} Smoke Tests:', () => {
    ${defaultRegionCode}
${smokeTests.map(test => new IndentedSection(test, 1)).join('\n')}
});
`.trim();
    }
}