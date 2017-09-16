// Copies objects and arrays. Only own enumerable properties are preserved.
export function deepCopy<T>(arg: T): T {
    if (!arg) {
        return arg;
    }

    if (Array.isArray(arg)) {
        return <T><any>arg.map(element => deepCopy(element));
    }

    if (typeof arg === 'object') {
        return Object.keys(arg).reduce((
            carry: T,
            item: keyof T
        ) => ({...carry as any, [item]: deepCopy(arg[item])}), {});
    }

    return arg;
}
