import {toDate} from "@aws/protocol-timestamp";
import {parse} from "./pixl-xml";
import {
    BodyParser, 
    Decoder, 
    Member, 
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

interface ObjectTypeArray extends Array<ObjectType|Scalar|ObjectTypeArray> {}

export class XMLParser implements BodyParser {
    constructor(private readonly base64Decoder: Decoder) {}

    public parse<OutputType>(
        structure: Member,
        input: string
    ): OutputType {
        const parseOption = { preserveAttributes: true, };
        return this.unmarshall(structure.shape, parse(input, parseOption));
    }
    
    private unmarshall(shape: SerializationModel, xmlObj: any): any {
        if (shape.type === 'structure') {
            return this.parseStructure(shape, xmlObj);
        } else if (shape.type === 'list') {
            return this.parseList(shape, xmlObj);
        } else if (shape.type === 'map') {
            return this.parseMap(shape, xmlObj);
        } else if (shape.type === 'blob') {
            if (!xmlObj) {
                return undefined;
            }
            return this.base64Decoder(xmlObj.toString());
        } else if (shape.type === 'boolean') {
            return this.parseBoolean(shape, xmlObj);
        } else if (shape.type === 'number') {
            if (!xmlObj || xmlObj === 'null' || xmlObj === 'undefined') {
                return undefined;
            }
            return Number(xmlObj).valueOf();
        } else if (shape.type === 'string') {
            if (xmlObj === '') {
                return xmlObj
            }
            return xmlObj ? xmlObj.toString() : undefined;
        } else if (shape.type === 'timestamp') {
            return this.parseTimeStamp(shape, xmlObj);
        } else {
            throw new Error(`${(shape as any).type} can not be parsed`);
        }
    }

    private parseStructure(shape: Structure, xmlObj: any): ObjectType {
        let obj: ObjectType = {};
        for (let memberName of Object.keys(shape.members)) {
            const member: Member = shape.members[memberName];
            const xmlKey = this.mapToXMLKey(member, memberName)
            let subXmlObj = xmlObj;
            if (member.xmlAttribute) {
                subXmlObj = xmlObj['_Attribs'];
            }
            obj[memberName] = this.unmarshall(member.shape, subXmlObj[xmlKey]);
        }
        return obj;
    }

    private mapToXMLKey(member: Member, name: string): string {
        let keyName = member.locationName || name, 
            membershape = member.shape;
        if (membershape.type === 'list') {
            keyName = membershape.flattened ? (
                membershape.member.locationName || "member"
                ) : keyName;
        }
        return keyName;
    }

    private parseList(shape: List, xmlObj: any): ObjectTypeArray {
        let list: ObjectType[] = [],
            xmlList = xmlObj;
        if (!xmlObj || Object.keys(xmlObj).length === 0) {
            return list;
        } 
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
            list.push(this.unmarshall(shape.member.shape, xmlObjEntry))
        }
        return list;
    }

    private parseMap(shape: Map, xmlObj: any): ObjectType {
        let obj: ObjectType = {},
            mapEntryList = xmlObj;
        if (!shape.flattened) {
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
            obj[mapEntry[keyName]] = this.unmarshall(shape.value.shape, mapEntry[valueName]);
        }
        return obj;
    }

    private parseBoolean(shape: Boolean, xmlObj: any): boolean|undefined {
        if (!xmlObj || xmlObj === 'null' || xmlObj === 'undefined') {
            return undefined;
        } else if (xmlObj === 'false') {
            return false;
        }
        return Boolean(xmlObj).valueOf();
    }

    private parseTimeStamp(shape: Timestamp, xmlObj: any): Date|undefined {
        if (!xmlObj || xmlObj === 'null' || xmlObj === 'undefined') {
            return undefined;
        }
        let date = toDate(xmlObj);
        if (date.toString() === "Invalid Date") {
            return undefined;
        }
        return date;
    }
}
