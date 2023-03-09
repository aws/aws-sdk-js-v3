import { TokenIdentity } from "./identity";
import { Provider } from "./util";

/**
 * @public
 *
 * An object representing temporary or permanent AWS token.
 *
 * @deprecated Use {@TokenIdentity}
 */
export interface Token extends TokenIdentity {}

/**
 * @public
 *
 * @deprecated Use {@TokenIdentityProvider}
 */
export type TokenProvider = Provider<Token>;
