"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pixl_xml_1 = require("./pixl-xml");
var Test = (function () {
    function Test() {
    }
    Test.prototype.atest = function () {
        var xml_string = '<?xml version="1.0"?><Document>' +
            '<Simple>Hello</Simple>' +
            '<Node Key="Value">Complex</Node>' +
            '</Document>';
        return pixl_xml_1.parse(xml_string);
    };
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=index.js.map