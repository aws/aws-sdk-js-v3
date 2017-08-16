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
        input = input.split('').filter((c) => {return '\t\r\n'.indexOf(c) < 0}).join('');
        const parseOption = { preserveAttributes: true };
        return this.unmarshaller(structure.shape, parse(input, parseOption));
    }
    
    private unmarshaller(structure: SerializationModel, xmlObj: any): any {
        if (structure.type === 'structure') {
            return this.parseStructure(structure, xmlObj);
        } else if (structure.type === 'list') {
            return this.parseList(structure, xmlObj);
        } else if (structure.type === 'map') {
            return this.parseMap(structure, xmlObj);
        } else if (structure.type === 'blob') {
            if (!xmlObj) {
                return undefined;
            }
            return this.base64Decoder(xmlObj.toString());
        } else if (structure.type === 'boolean') {
            return this.parseBoolean(structure, xmlObj);
        } else if (structure.type === 'number') {
            if (!xmlObj || xmlObj === 'null' || xmlObj === 'undefined') {
                return undefined;
            }
            return Number(xmlObj).valueOf();
        } else if (structure.type === 'string') {
            return xmlObj ? xmlObj.toString() : undefined;
        } else if (structure.type === 'timestamp') {
            return this.parseTimeStamp(structure, xmlObj);
        } else {
            throw new Error(`${(structure as any).type} can not be parsed`);
        }
    }

    private parseStructure(structure: Structure, xmlObj: any): any {
        let obj: ObjectType = {};
        for (let memberName of Object.keys(structure.members)) {
            const member: Member = structure.members[memberName];
            const xmlKey = this.mapToXMLKey(member, memberName)
            let subXmlObj = xmlObj;
            if (member.xmlAttribute) {
                subXmlObj = xmlObj['_Attribs'];
            }
            obj[memberName] = this.unmarshaller(member.shape, subXmlObj[xmlKey]);
        }
        return obj;
    }

    private mapToXMLKey(member: Member, name: string): string {
        let keyName = member.locationName ? member.locationName : name;
        if (member.shape.type === 'list') {
            keyName = member.shape.flattened ? (
                member.shape.member.locationName ? member.shape.member.locationName : "member"
                ) : keyName;
        }
        return keyName;
    }

    private parseList(structure: List, xmlObj: any): any {
        let list: ObjectType[] = [], xmlList = xmlObj;
        if (!xmlObj || Object.keys(xmlObj).length === 0) {
            return list;
        } 
        if (!Array.isArray(xmlObj)) {
            const key = structure.member.locationName ? structure.member.locationName : 'member';
            xmlList = xmlObj[key];
            if (!xmlList || Object.keys(xmlList).length === 0) {
                return list;
            } 
            if (!Array.isArray(xmlList)) {
                xmlList = [ xmlList ]
            }
        }
        for (let xmlObjEntry of xmlList) {
            list.push(this.unmarshaller(structure.member.shape, xmlObjEntry))
        }
        return list;
    }

    private parseMap(structure: Map, xmlObj: any): any {
        let obj: ObjectType = {}, mapEntryList = xmlObj;
        if (!structure.flattened) {
            mapEntryList = xmlObj["entry"];
        }
        if (!mapEntryList || Object.keys(mapEntryList).length === 0) {
            return {};
        } 
        if (!Array.isArray(mapEntryList)) {
            mapEntryList = [ mapEntryList ];
        }
        for (let mapEntry of mapEntryList) {
            let keyName = structure.key.locationName ? structure.key.locationName : "key";
            let valueName = structure.value.locationName ? structure.value.locationName : "value";
            obj[mapEntry[keyName]] = this.unmarshaller(structure.value.shape, mapEntry[valueName]);
        }
        return obj;
    }

    private parseBoolean(structure: Boolean, xmlObj: any): boolean|undefined {
        if (!xmlObj || xmlObj === 'null' || xmlObj === 'undefined') {
            return undefined;
        } else if (xmlObj === 'false') {
            return false;
        }
        return Boolean(xmlObj).valueOf();
    }

    private parseTimeStamp(structure: Timestamp, xmlObj: any): Date|undefined {
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
