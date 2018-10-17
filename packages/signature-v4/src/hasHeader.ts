import {HeaderBag} from '@aws/types';

export function hasHeader(soughtHeader: string, headers: HeaderBag): boolean {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }

    return false;
}