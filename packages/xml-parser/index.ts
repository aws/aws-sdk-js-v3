import {BodyParser, Decoder, Member, SerializationModel} from "@aws/types";
import {toDate} from "@aws/protocol-timestamp";
import {parse} from "./pixl-xml";

export class Test {
    public atest(): Object {
        let xml_string = '<?xml version="1.0"?><Document>' + 
            '<Simple>Hello</Simple>' + 
            '<Node Key="Value">Complex</Node>' + 
            '</Document>';
        return parse( xml_string);
    }
}


