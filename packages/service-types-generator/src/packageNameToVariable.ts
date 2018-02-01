export function packageNameToVariable(packageName: string): string {
    return `_${packageName.toLowerCase().replace(/\W/g, '_')}`;
}
