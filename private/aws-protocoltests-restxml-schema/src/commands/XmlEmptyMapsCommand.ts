// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { XmlEmptyMapsRequest, XmlEmptyMapsResponse } from "../models/models_0";
import { XmlEmptyMaps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link XmlEmptyMapsCommand}.
 */
export interface XmlEmptyMapsCommandInput extends XmlEmptyMapsRequest {}
/**
 * @public
 *
 * The output of {@link XmlEmptyMapsCommand}.
 */
export interface XmlEmptyMapsCommandOutput extends XmlEmptyMapsResponse, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlEmptyMapsCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlEmptyMapsCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlEmptyMapsRequest
 *   myMap: { // XmlMapsInputOutputMap
 *     "<keys>": { // GreetingStruct
 *       hi: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new XmlEmptyMapsCommand(input);
 * const response = await client.send(command);
 * // { // XmlEmptyMapsResponse
 * //   myMap: { // XmlMapsInputOutputMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlEmptyMapsCommandInput - {@link XmlEmptyMapsCommandInput}
 * @returns {@link XmlEmptyMapsCommandOutput}
 * @see {@link XmlEmptyMapsCommandInput} for command's `input` shape.
 * @see {@link XmlEmptyMapsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 */
export class XmlEmptyMapsCommand extends command<XmlEmptyMapsCommandInput, XmlEmptyMapsCommandOutput>(
  _ep0,
  _mw0,
  "XmlEmptyMaps",
  XmlEmptyMaps$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: XmlEmptyMapsRequest;
      output: XmlEmptyMapsResponse;
    };
    sdk: {
      input: XmlEmptyMapsCommandInput;
      output: XmlEmptyMapsCommandOutput;
    };
  };
}
