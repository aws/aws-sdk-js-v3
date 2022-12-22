export const toUtf8 = (input: Uint8Array): string => new TextDecoder("utf-8").decode(input);
