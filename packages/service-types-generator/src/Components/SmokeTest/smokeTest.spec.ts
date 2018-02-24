import {SmokeTestCase} from '@aws/build-types';
import {SmokeTest} from './smokeTest';

describe('SmokeTest', () => {

    it('should support success test cases', () => {
        const smokeTest = new SmokeTest({
            clientName: 'Foo',
            runtime: 'browser',
            testCase: {
                operationName: 'ListFoo',
                input: {},
                errorExpectedFromService: false
            }
        });

        expect(smokeTest.toString()).toMatch(
            `it('ListFoo should succeed when given correct input', (done) => {`
        );
    });

    it('should support failure test cases', () => {
        const smokeTest = new SmokeTest({
            clientName: 'Foo',
            runtime: 'browser',
            testCase: {
                operationName: 'ListFoo',
                input: {
                    fake: 'test'
                },
                errorExpectedFromService: true
            }
        });

        expect(smokeTest.toString()).toMatch(
            `it('ListFoo should fail when given bad input', (done) => {`
        );
    });

    it('sets region on command configuration', () => {
        const smokeTest = new SmokeTest({
            clientName: 'Foo',
            runtime: 'browser',
            testCase: {
                operationName: 'ListFoo',
                input: {
                    fake: 'test'
                },
                errorExpectedFromService: true
            }
        });

        expect(smokeTest.toString()).toMatch(
            `region: defaultRegion`
        );
    });

    describe('browser', () => {
        it('sets credentials on command configuraiton', () => {
            const smokeTest = new SmokeTest({
                clientName: 'Foo',
                runtime: 'browser',
                testCase: {
                    operationName: 'ListFoo',
                    input: {
                        fake: 'test'
                    },
                    errorExpectedFromService: true
                }
            });

            expect(smokeTest.toString()).toMatch(
                `credentials`
            );
        });
    });

    describe('node', () => {
        it('does not set credentials on command configuraiton', () => {
            const smokeTest = new SmokeTest({
                clientName: 'Foo',
                runtime: 'node',
                testCase: {
                    operationName: 'ListFoo',
                    input: {
                        fake: 'test'
                    },
                    errorExpectedFromService: true
                }
            });

            expect(smokeTest.toString()).not.toMatch(
                `credentials`
            );
        });
    });
});