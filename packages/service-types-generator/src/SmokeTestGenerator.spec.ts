import {SmokeTestGenerator} from './SmokeTestGenerator';
import {SmokeTestModel} from '@aws/build-types';
import {join} from 'path';

describe('SmokeTestGenerator', () => {
    const mockModel: SmokeTestModel = {
        version: 1,
        defaultRegion: 'us-west-2',
        testCases: [
            {
                operationName: 'foo',
                input: {},
                errorExpectedFromService: false
            },
            {
                operationName: 'bar',
                input: {
                    fake: 'Uh-oh'
                },
                errorExpectedFromService: true
            }
        ]
    };

    describe('browser', () => {
        it('generates a test/smoke/index.spec.ts and karma.conf file', () => {
            const generator = new SmokeTestGenerator({
                clientName: 'Foo',
                model: mockModel,
                packageName: '@aws/sdk-foo-browser',
                runtime: 'browser'
            });
    
            const files: string[] = [];
            for (const [file, contents] of generator) {
                files.push(file);
            }
            
            expect(files.indexOf(
                join('test', 'smoke', 'index.spec.ts')
            )).toBeGreaterThanOrEqual(0);
            expect(files.indexOf('karma.conf')).toBeGreaterThanOrEqual(0);
        });

        it('uses injected defaultRegion then the test region', () => {
            const generator = new SmokeTestGenerator({
                clientName: 'Foo',
                model: {
                    ...mockModel,
                    defaultRegion: 'us-west-1'
                },
                packageName: '@aws/sdk-foo-browser',
                runtime: 'browser'
            });
            
            const testFileName = join('test', 'smoke', 'index.spec.ts');
            const map: Map<string, string> = new Map();
            for (const [file, contents] of generator) {
                map.set(file, contents);
            }

            expect(typeof map.get(testFileName)).toBe('string');
            expect(map.get(testFileName)).toMatch(
                `defaultRegion = defaultRegion || 'us-west-1'`
            );
            expect(map.get(testFileName)).toMatch(
                `declare let defaultRegion: string;`
            );
        });

        it('uses injected credentials', () => {
            const generator = new SmokeTestGenerator({
                clientName: 'Foo',
                model: {
                    ...mockModel,
                    defaultRegion: 'us-west-1'
                },
                packageName: '@aws/sdk-foo-browser',
                runtime: 'browser'
            });
            
            const testFileName = join('test', 'smoke', 'index.spec.ts');
            const map: Map<string, string> = new Map();
            for (const [file, contents] of generator) {
                map.set(file, contents);
            }

            expect(typeof map.get(testFileName)).toBe('string');
            expect(map.get(testFileName)).toMatch(
                `declare const credentials: any;`
            );
        });
    });

    describe('node', () => {
        it('generates a test/smoke/index.spec.ts file', () => {
            const generator = new SmokeTestGenerator({
                clientName: 'Foo',
                model: mockModel,
                packageName: '@aws/sdk-foo-node',
                runtime: 'node'
            });
    
            const files: string[] = [];
            for (const [file, contents] of generator) {
                files.push(file);
            }
            
            expect(files.indexOf(
                join('test', 'smoke', 'index.spec.ts')
            )).toBeGreaterThanOrEqual(0);
        });

        it('uses default region provider then the test region', () => {
            const generator = new SmokeTestGenerator({
                clientName: 'Foo',
                model: mockModel,
                packageName: '@aws/sdk-foo-node',
                runtime: 'node'
            });
            
            const testFileName = join('test', 'smoke', 'index.spec.ts');
            const map: Map<string, string> = new Map();
            for (const [file, contents] of generator) {
                map.set(file, contents);
            }

            expect(typeof map.get(testFileName)).toBe('string');
            expect(map.get(testFileName)).toMatch(
                `const defaultRegion = regionProvider() || 'us-west-2'`
            );
        });
    });

    
});