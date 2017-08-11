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
    SerializationModel
} from "@aws/types";
/**
 * this is a test code to generate sample json using pixl xml parser
 */
// import * as fs from "fs";
// import * as readline from "readline";
// // let input = fs.readFileSync('./example.xml').toString().split('\n');
// let stream = fs.createWriteStream('./example.json');
// // for (let line of input) {
//     try {
//         var line = "<xml>\n  <name>Name</name>\n  <complexValue>\n    <a>1</a>\n    <b>2</b>\n  </complexValue>\n  <complexValue>\n    <a>3</a>\n    <b>4</b>\n  </complexValue>\n</xml>";
//         line = line.split('').filter((c) => {return '\t\r\n'.indexOf(c) < 0}).join('');
//         const opt = { preserveAttributes: true, forceArrays: false };
//         let str = JSON.stringify(parse(line, opt));
//         stream.write(str);
//         stream.write('\n');
//     }
//     catch (err) {
//         throw err
//     }
// // }

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
        } else if (structure.type === 'boolean') {
            return this.parseBoolean(structure, xmlObj);
        } else if (structure.type === 'number') {
            return xmlObj;
        } else if (structure.type === 'string') {
            return xmlObj;
        }
    }

    private parseStructure(structure: Structure, xmlObj: any): any {
        let obj: ObjectType = {}, subXmlObj = xmlObj;
        for (let memberName of Object.keys(structure.members)) {
            let member: Member = structure.members[memberName];
            const xmlKey = this.mapToXMLKey(member, memberName)
            if (member.xmlAttribute) {
                subXmlObj = xmlObj['_Attribs']
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
/**
 * infer the type of any. 
 */
    // private typeInfer(xmlObj: any): any{
    //     if (xmlObj === "true") {
    //         return true;
    //     } else if (xmlObj === "false") {
    //         return false;
    //     } else {
    //         return xmlObj.toString();
    //     }
    // }

    private parseBoolean(structure: Boolean, xmlObj: any): boolean|null {
        if (!xmlObj) {
            return null;
        } else if (typeof xmlObj === 'boolean') {
            return xmlObj;
        } else if (xmlObj === 'true') {
            return true;
        } else if (xmlObj === 'false') {
            return false;
        } else {
            throw new Error(`expect ${structure.type} type but given ${typeof xmlObj}`);
        }
    }
}


// const fakeDecode = function(str: string) {
//     return new Uint8Array(1);
// }




