import {applyStaticOrProvider, staticOrProvider} from "./staticOrProvider";

describe('staticOrProvider', () => {
    it(
        'should return a union type that accepts a type or a provider thereof',
        () => {
            expect(staticOrProvider('boolean'))
                .toBe('boolean|__aws_types.Provider<boolean>');
        }
    );
});

describe('applyStaticOrProvider', () => {
    it(
        'should return an applier function that normalizes static or provider input into a provider',
        () => {
            expect(applyStaticOrProvider(
                'propertyKey',
                'boolean',
                "typeof propertyKey === 'boolean'"
            )).toBe(
`(
    propertyKey: boolean|__aws_types.Provider<boolean>|undefined,
    configuration: {propertyKey?: boolean|__aws_types.Provider<boolean>}
) => {
    if (typeof propertyKey === 'boolean') {
        const promisified = Promise.resolve(propertyKey);
        configuration.propertyKey = () => promisified;
    }
}`
            );
        }
    );
});
