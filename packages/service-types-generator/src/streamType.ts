import {RuntimeTarget} from "@aws/build-types";
import {packageNameToVariable} from './packageNameToVariable';

export function streamType(target: RuntimeTarget): string {
    switch (target) {
        case 'node':
            return `${packageNameToVariable('stream')}.Readable`;
        case 'browser':
            return 'ReadableStream';
        case 'universal':
            return 'Uint8Array';
    }
}