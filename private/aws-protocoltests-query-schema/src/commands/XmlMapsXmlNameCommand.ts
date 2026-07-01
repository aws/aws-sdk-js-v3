// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { XmlMapsXmlNameOutput } from "../models/models_0";
import { XmlMapsXmlName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link XmlMapsXmlNameCommand}.
 */
export interface XmlMapsXmlNameCommandInput {}
/**
 * @public
 *
 * The output of {@link XmlMapsXmlNameCommand}.
 */
export interface XmlMapsXmlNameCommandOutput extends XmlMapsXmlNameOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, XmlMapsXmlNameCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, XmlMapsXmlNameCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new XmlMapsXmlNameCommand(input);
 * const response = await client.send(command);
 * // { // XmlMapsXmlNameOutput
 * //   myMap: { // XmlMapsXmlNameOutputMap
 * //     "<keys>": { // GreetingStruct
 * //       hi: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param XmlMapsXmlNameCommandInput - {@link XmlMapsXmlNameCommandInput}
 * @returns {@link XmlMapsXmlNameCommandOutput}
 * @see {@link XmlMapsXmlNameCommandInput} for command's `input` shape.
 * @see {@link XmlMapsXmlNameCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 */
export class XmlMapsXmlNameCommand extends command<XmlMapsXmlNameCommandInput, XmlMapsXmlNameCommandOutput>(
  _ep0,
  _mw0,
  "XmlMapsXmlName",
  XmlMapsXmlName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: XmlMapsXmlNameOutput;
    };
    sdk: {
      input: XmlMapsXmlNameCommandInput;
      output: XmlMapsXmlNameCommandOutput;
    };
  };
}
