import {RuntimeTarget} from "@aws-sdk/build-types";
import {packageNameToVariable} from './packageNameToVariable';

export function streamType(target: RuntimeTarget): string {
    switch (target) {
        case 'node':
            return `${packageNameToVariable('stream')}.Readable`;
        case 'browser':
            return 'Blob';
        case 'universal':
            return 'Uint8Array';
    }
}
