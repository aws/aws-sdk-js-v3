import { isXmlNamespace } from '../ApiModel/Shape';
import { XmlNamespace } from '@aws-sdk/types';

export function convertXmlNamespace(
    ns: string|XmlNamespace|undefined
): XmlNamespace|undefined {
    if (typeof ns === 'undefined' || isXmlNamespace(ns)) {
        return ns;
    }

    return {uri: ns};
}
