const SHORT_TO_HEX: {[key: number]: string} = {};
const HEX_TO_SHORT: {[key: string]: number} = {};

for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }

    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}

export function fromHex(encoded: string): Uint8Array {
    if (encoded.length % 2 !== 0) {
        throw new Error('Hex encoded strings must have an even number length');
    }

    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        out[i / 2] = HEX_TO_SHORT[encoded.substr(i, 2)];
    }

    return out;
}

export function toHex(bytes: Uint8Array): string {
    let out = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }

    return out;
}