export interface XMLParseOption {
    preserveAttributes?: boolean,
    lowerCase?: boolean,
    preserveDocumentNode?: boolean,
    preserveWhitespace?: boolean,
    forceArrays?: boolean
}

export class XML {
    constructor(args?: string, opts?: Map<string, string>);
    parse(text: string, opts?: XMLParseOption): Object;       
}

declare function parse(text: string, opts?: XMLParseOption): Object;
