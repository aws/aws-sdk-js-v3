// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { FlattenedXmlMapOutput } from "../models/models_0";
import { FlattenedXmlMap$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link FlattenedXmlMapCommand}.
 */
export interface FlattenedXmlMapCommandInput {}
/**
 * @public
 *
 * The output of {@link FlattenedXmlMapCommand}.
 */
export interface FlattenedXmlMapCommandOutput extends FlattenedXmlMapOutput, __MetadataBearer {}

/**
 * Flattened maps
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, FlattenedXmlMapCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, FlattenedXmlMapCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new FlattenedXmlMapCommand(input);
 * const response = await client.send(command);
 * // { // FlattenedXmlMapOutput
 * //   myMap: { // FooEnumMap
 * //     "<keys>": "Foo" || "Baz" || "Bar" || "1" || "0",
 * //   },
 * // };
 *
 * ```
 *
 * @param FlattenedXmlMapCommandInput - {@link FlattenedXmlMapCommandInput}
 * @returns {@link FlattenedXmlMapCommandOutput}
 * @see {@link FlattenedXmlMapCommandInput} for command's `input` shape.
 * @see {@link FlattenedXmlMapCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class FlattenedXmlMapCommand extends command<FlattenedXmlMapCommandInput, FlattenedXmlMapCommandOutput>(
  _ep0,
  _mw0,
  "FlattenedXmlMap",
  FlattenedXmlMap$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: FlattenedXmlMapOutput;
    };
    sdk: {
      input: FlattenedXmlMapCommandInput;
      output: FlattenedXmlMapCommandOutput;
    };
  };
}
