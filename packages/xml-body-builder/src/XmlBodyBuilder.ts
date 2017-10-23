import {isIterable} from '@aws/is-iterable';
import {
    epoch,
    iso8601,
    rfc822
} from '@aws/protocol-timestamp';
import {
    Blob as BlobShape,
    BodySerializer,
    Decoder,
    Encoder,
    List as ListShape,
    Map as MapShape,
    Member,
    OperationModel,
    SerializationModel,
    String as StringShape,
    Structure as StructureShape,
    Timestamp as TimestampShape,
    XmlNamespace
} from '@aws/types';
import {
    XmlNode,
    XmlText
} from '@aws/xml-builder';

const XML_NAMESPACE_PREFIX = 'xmlns';

export class XmlBodyBuilder implements BodySerializer {
    constructor(
        private readonly base64Encoder: Encoder,
        private readonly utf8Decoder: Decoder
    ) {}

    public build(operation: OperationModel, input: any): string {
        const inputMember = operation.input;
        const serviceXmlNamespaceUri = operation.metadata.xmlNamespace;
        let xmlNamespace: XmlNamespace | undefined;

        const shape = inputMember.shape as StructureShape;
        const payloadName = shape.payload;
        
        // payloads are hoisted to root
        if (payloadName) {
            const payloadMember = shape.members[payloadName];
            input = input[payloadName];
            if (typeof input === 'undefined') {
                return '';
            }
            const payloadShape = payloadMember.shape;
            if (payloadShape.type === 'structure') {
                // unless the payloadMember has xml namespace data, use service xmlnamespace
                if (payloadMember.xmlNamespace && payloadMember.xmlNamespace.uri) {
                    xmlNamespace = payloadMember.xmlNamespace;
                } else if (serviceXmlNamespaceUri) {
                    xmlNamespace = {
                        uri: serviceXmlNamespaceUri
                    }
                }
                let rootName = payloadMember.locationName || payloadName;
                return this.toXml(payloadMember, input, rootName, false, xmlNamespace);
            } else {
                return input;
            }
        } else {
            let operationName = operation.name;
            let rootName = inputMember.locationName || operationName.charAt(0).toUpperCase() + operationName.substr(1) + 'Request';
            if (inputMember.xmlNamespace && inputMember.xmlNamespace.uri) {
                xmlNamespace = inputMember.xmlNamespace;
            } else if (serviceXmlNamespaceUri) {
                xmlNamespace = {
                    uri: serviceXmlNamespaceUri
                };
            }
            return this.toXml(inputMember, input, rootName, true, xmlNamespace);
        }        
    }

    private toXml(member: Member, input: any, rootName: string, allowEmpty: boolean, xmlNamespace?: XmlNamespace): string {
        const rootNode: XmlNode = new XmlNode(rootName);
        // apply namespace if necessary
        if (xmlNamespace && xmlNamespace.uri) {
            let prefix = xmlNamespace.prefix ? `${XML_NAMESPACE_PREFIX}:${xmlNamespace.prefix}` : XML_NAMESPACE_PREFIX;
            rootNode.addAttribute(prefix, xmlNamespace.uri);
        }
        this.serialize(rootNode, member, input);
        return rootNode.children.length || !allowEmpty ? rootNode.toString() : '';
    }

    private serialize(node: XmlNode, member: Member, input: any): void {
        switch (member.shape.type) {
            case 'structure':
                return this.serializeStructure(node, member, input);
            case 'map':
                return this.serializeMap(node, member, input);
            case 'list':
                return this.serializeList(node, member, input);
            case 'float':
                return this.serializeFloat(node, member, input);
            case 'integer':
                return this.serializeInteger(node, member, input);
            case 'string':
                return this.serializeString(node, member, input);
            case 'timestamp':
                return this.serializeTimestamp(node, member, input);
            case 'blob':
                return this.serializeBlob(node, member, input);
            default:
                return this.serializeScalar(node, member, input);
        }
    }

    private serializeStructure(node: XmlNode, member: Member, input: any) {
        const shape = member.shape as StructureShape;
        for (let memberName of Object.keys(shape.members)) {
            let inputValue = input[memberName];
            if (typeof inputValue === 'undefined' || inputValue === null) {
                continue;
            }

            let structureMember = shape.members[memberName];
            let {
                flattened = (structureMember.shape as any).flattened,
                location,
                locationName = memberName,
                xmlAttribute,
                xmlNamespace
            } = structureMember;
            
            // this field belongs somewhere other than the body
            if (location) {
                continue;
            }

            const memberType = structureMember.shape.type;

            if (xmlAttribute) {
                node.addAttribute(locationName, inputValue);
            } else if (flattened) {
                this.serializeStructureMember(node, structureMember, inputValue, memberName);
            } else {
                // create a new element
                let childNode = new XmlNode(locationName);
                if (xmlNamespace && xmlNamespace.uri) {
                    let prefix = xmlNamespace.prefix ? `${XML_NAMESPACE_PREFIX}:${xmlNamespace.prefix}` : XML_NAMESPACE_PREFIX;
                    childNode.addAttribute(prefix, xmlNamespace.uri);
                }

                this.serializeStructureMember(childNode, structureMember, inputValue, memberName);
                node.addChildNode(childNode);
            }
        }
    }

    private serializeStructureMember(
        node: XmlNode,
        structureMember: Member,
        inputValue: any,
        memberName: string
    ) {
        const memberType = structureMember.shape.type;
        if (memberType === 'list') {
            this.serializeList(node, structureMember, inputValue, memberName);
        } else if (memberType === 'map') {
            this.serializeMap(node, structureMember, inputValue, memberName);
        } else {
            this.serialize(node, structureMember, inputValue);
        }
    }

    private serializeMap(node: XmlNode, member: Member, input: any, memberName?: string) {
        let name = member.locationName || memberName;
        const shape = member.shape as MapShape;
        const {
            flattened = member.flattened,
            key: {
                locationName: xmlKey = 'key'
            },
            value: {
                locationName: xmlValue = 'value'
            }
        } = shape;
        
        if (!flattened) {
            name = 'entry';
        }

        if (isIterable(input)) {
            for (let [inputKey, inputValue] of input) {
                let childNode = this.formatMap(shape, <string>name, xmlKey, xmlValue, inputKey, inputValue);
                node.addChildNode(childNode);
            }
        } else if (typeof input === 'object' && input !== null) {
            for (let inputKey of Object.keys(input)) {
                let childNode = this.formatMap(shape, <string>name, xmlKey, xmlValue, inputKey, input[inputKey]);
                node.addChildNode(childNode);
            }
        } else {
            throw new Error(
                'Unable to serialize value that is neither a [key, value]'
                + ' iterable nor an object as a map'
            );
        }
    }

    private formatMap(
        shape: MapShape,
        name: string,
        xmlKey: string,
        xmlValue: string,
        inputKey: string,
        inputValue: any
    ): XmlNode {
        let keyNode = new XmlNode(xmlKey);
        let valueNode = new XmlNode(xmlValue);
        this.serialize(keyNode, shape.key, inputKey);
        this.serialize(valueNode, shape.value, inputValue);
        return new XmlNode(
            name,
            [
                keyNode,
                valueNode
            ]
        );
    }

    private serializeList(node: XmlNode, member: Member, input: any, memberName?: string) {
        const shape = member.shape as ListShape;
        const flattened = shape.flattened;
        let name = shape.member.locationName;
        if (!name) {
            name = flattened ? <string>memberName : 'member';
        }

        if (Array.isArray(input) || isIterable(input)) {
            for (let value of input) {    
                let childNode = new XmlNode(name);
                this.serialize(childNode, shape.member, value);
                node.addChildNode(childNode);
            }
        } else {
            throw new Error(
                'Unable to serialize value that is neither an array nor an'
                + ' iterable as a list'
            );
        }
    }

    private serializeScalar(node: XmlNode, member: Member, input: any) {
        node.addChildNode(new XmlText(input));
    }

    private serializeBlob(node: XmlNode, member: Member, input: any) {
        if (typeof input === 'string') {
            input = this.utf8Decoder(input);
        }
        node.addChildNode(new XmlText(this.base64Encoder(input)));
    }

    private serializeFloat(node: XmlNode, member: Member, input: any) {
        node.addChildNode(new XmlText(String(parseFloat(input))));
    }

    private serializeInteger(node: XmlNode, member: Member, input: any) {
        node.addChildNode(new XmlText(String(parseInt(input, 10))));
    }

    private serializeString(node: XmlNode, member: Member, input: any) {
        node.addChildNode(new XmlText(input));
    }

    private serializeTimestamp(node: XmlNode, member: Member, input: any) {
        const timestampFormat = (member.shape as TimestampShape).timestampFormat;
        
        switch (timestampFormat) {
            case 'unixTimestamp':
                node.addChildNode(new XmlText(String(epoch(input))));
                break;
            case 'rfc822':
                node.addChildNode(new XmlText(rfc822(input)));
                break;
            default:
                node.addChildNode(new XmlText(iso8601(input)));                
                break;
        }
    }
}