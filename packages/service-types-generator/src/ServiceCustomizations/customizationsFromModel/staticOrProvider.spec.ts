import {normalizeStaticOrProvider, staticOrProvider} from "./staticOrProvider";

describe('staticOrProvider', () => {
    it(
        'should return a union type that accepts a type or a provider thereof',
        () => {
            expect(staticOrProvider('boolean'))
                .toBe('boolean|__aws_sdk_types.Provider<boolean>');
        }
    );
});

describe('normalizeStaticOrProvider', () => {
    it(
        'should return a normalizer function that normalizes static or provider input into a provider',
        () => {
            expect(normalizeStaticOrProvider(
                'boolean',
                "typeof value === 'boolean'"
            )).toBe(
`(
    value: boolean|__aws_sdk_types.Provider<boolean>|undefined
) => {
    if (typeof value === 'boolean') {
        const promisified = Promise.resolve(value);
        return () => promisified;
    }

    return value!;
}`
            );
        }
    );
});
