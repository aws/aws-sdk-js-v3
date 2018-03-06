import {toDate} from "@aws/protocol-timestamp";
import {
    parse as pixlParse,
    XMLParseOutput
} from "../vendor/pixl-xml";
import {
    BodyParser,
    Decoder,
    Member,
    Shape,
    Structure,
    List,
    Map,
    Boolean,
    Blob,
    Timestamp,
    SerializationModel
} from "@aws/types";

type Scalar = string|number|boolean|null;

interface ObjectType {
    [key: string]: ObjectType|Scalar|ObjectTypeArray
}

interface ParsedResponse extends XMLParseOutput {
    ResponseMetadata: {RequestId: string};
    RequestId?: string;
}

interface ObjectTypeArray extends Array<ObjectType|Scalar|ObjectTypeArray> {}
export class XmlBodyParser implements BodyParser {
    constructor(private readonly base64Decoder: Decoder) {}

    public parse<OutputType>(
        member: Member,
        input: string
    ): OutputType {
        let xmlObj = <ParsedResponse>pixlParse(input, {
            preserveAttributes: true,
            //preserveDocumentNode: true
        });
        let wrappedMember: Member = member;
        if (member.resultWrapper) {
            wrappedMember = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        [member.resultWrapper]: {
                            shape: member.shape
                        }
                    }
                }
            };
        }
        let data: OutputType = this.unmarshall(wrappedMember, xmlObj);
        //standard query
        if (xmlObj.ResponseMetadata && xmlObj.ResponseMetadata.RequestId) {
            (data as any).$metadata = {
                requestId: xmlObj.ResponseMetadata.RequestId
            }
        }
        //ec2 query
        if (xmlObj.RequestId) {
            (data as any).$metadata = {
                requestId: xmlObj.RequestId
            }
        }
        //SDB query
        if (xmlObj.RequestID) {
            (data as any).$metadata = {
                requestId: xmlObj.RequestID
            }
        }
        return data as OutputType;
    }

    private unmarshall(member: Member, xmlObj: any): any {
        const type = member.shape.type;
        if (type === 'structure') {
            return this.parseStructure(member, xmlObj);
        } else if (type === 'list') {
            return this.parseList(member, xmlObj);
        } else if (type === 'map') {
            return this.parseMap(member, xmlObj);
        } else if (type === 'timestamp') {
            return this.parseTimeStamp(member, xmlObj);
        } else if (type === 'blob') {
            return (typeof xmlObj) === 'string' ? this.base64Decoder(xmlObj) : undefined;
        } else if (type === 'boolean') {
            if (!xmlObj) return undefined;
            return xmlObj === 'true';
        } else if (type === 'float' || type === 'integer') {
            if (!xmlObj) {
                return undefined;
            }
            const num = Number(xmlObj);
            return isFinite(num) ? num : undefined;
        } else if (type === 'string') {
            if (xmlObj === '') {
                return xmlObj
            }
            return xmlObj ? xmlObj.toString() : undefined;
        } else {
            throw new Error(`${type} can not be parsed`);
        }
    }

    private parseStructure(member: Member, xmlObj: any): ObjectType|undefined {
        if (xmlObj === undefined) {
            return undefined;
        }
        const shape = member.shape as Structure;
        let obj: ObjectType = {};
        for (const memberName of Object.keys(shape.members)) {
            const structureMember = shape.members[memberName];
            const xmlKey = this.mapToXMLKey(structureMember, memberName)
            let subXmlObj = xmlObj;
            if (structureMember.xmlAttribute) {
                subXmlObj = xmlObj['_Attribs'];
            }
            obj[memberName] = this.unmarshall(structureMember, subXmlObj[xmlKey]);
        }
        return obj;
    }

    private mapToXMLKey(member: Member, name: string): string {
        let keyName = member.locationName || name,
            membershape = member.shape;
        if (membershape.type === 'list') {
            const isFlattened = Boolean(member.flattened || membershape.flattened);
            keyName = isFlattened ? (
                membershape.member.locationName || name
                ) : keyName;
        }
        return keyName;
    }

    private parseList(member: Member, xmlObj: any): ObjectTypeArray {
        let list: ObjectType[] = [],
            xmlList = xmlObj;
        if (!xmlObj || Object.keys(xmlObj).length === 0) {
            return list;
        }
        const shape = member.shape as List;
        if (!Array.isArray(xmlObj)) {
            const key = shape.member.locationName || 'member';
            xmlList = xmlObj[key];
            if (!xmlList || Object.keys(xmlList).length === 0) {
                return list;
            }
            if (!Array.isArray(xmlList)) {
                xmlList = [ xmlList ]
            }
        }
        for (let xmlObjEntry of xmlList) {
            list.push(this.unmarshall(shape.member, xmlObjEntry))
        }
        return list;
    }

    private parseMap(member: Member, xmlObj: any): ObjectType {
        let obj: ObjectType = {},
            mapEntryList = xmlObj;
        const shape = member.shape as Map;
        const isFlattened = Boolean(member.flattened || shape.flattened);

        if (!isFlattened) {
            mapEntryList = xmlObj["entry"];
        }
        if (!mapEntryList || Object.keys(mapEntryList).length === 0) {
            return {};
        }
        if (!Array.isArray(mapEntryList)) {
            mapEntryList = [ mapEntryList ];
        }
        for (let mapEntry of mapEntryList) {
            let keyName = shape.key.locationName || "key";
            let valueName = shape.value.locationName || "value";
            obj[mapEntry[keyName]] = this.unmarshall(shape.value, mapEntry[valueName]);
        }
        return obj;
    }

    private parseTimeStamp(member: Member, xmlObj: any): Date|undefined {
        if (!xmlObj) {
            return undefined;
        }
        let date = toDate(xmlObj);
        if (date.toString() === "Invalid Date") {
            return undefined;
        }
        return date;
    }
}
