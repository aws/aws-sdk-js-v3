// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GreetingStruct } from "../models/models_0";
import { MalformedContentTypeWithBody$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MalformedContentTypeWithBodyCommand}.
 */
export interface MalformedContentTypeWithBodyCommandInput extends GreetingStruct {}
/**
 * @public
 *
 * The output of {@link MalformedContentTypeWithBodyCommand}.
 */
export interface MalformedContentTypeWithBodyCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedContentTypeWithBodyCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithBodyCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // GreetingStruct
 *   hi: "STRING_VALUE",
 * };
 * const command = new MalformedContentTypeWithBodyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedContentTypeWithBodyCommandInput - {@link MalformedContentTypeWithBodyCommandInput}
 * @returns {@link MalformedContentTypeWithBodyCommandOutput}
 * @see {@link MalformedContentTypeWithBodyCommandInput} for command's `input` shape.
 * @see {@link MalformedContentTypeWithBodyCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedContentTypeWithBodyCommand extends command<MalformedContentTypeWithBodyCommandInput, MalformedContentTypeWithBodyCommandOutput>(
  _ep0,
  _mw0,
  "MalformedContentTypeWithBody",
  MalformedContentTypeWithBody$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GreetingStruct;
      output: {};
    };
    sdk: {
      input: MalformedContentTypeWithBodyCommandInput;
      output: MalformedContentTypeWithBodyCommandOutput;
    };
  };
}
