import {isNode} from '@aws/is-node';
import {
    convertToUint8Array as browserConvertToUint8Array,
    ConvertToUint8ArrayInputType as BrowserConvertToUint8ArrayInputType
} from '@aws/util-uint8array-browser';
import {
    convertToUint8Array as nodeConvertToUint8Array,
    ConvertToUint8ArrayInputType as NodeConvertToUint8ArrayInputType
} from '@aws/util-uint8array-node';

export type ConvertToUint8ArrayInputType = BrowserConvertToUint8ArrayInputType|NodeConvertToUint8ArrayInputType;
export function convertToUint8Array(input: ConvertToUint8ArrayInputType): Promise<Uint8Array> {
    if (isNode()) {
        return nodeConvertToUint8Array(input as NodeConvertToUint8ArrayInputType);
    }

    return browserConvertToUint8Array(input as BrowserConvertToUint8ArrayInputType);
}