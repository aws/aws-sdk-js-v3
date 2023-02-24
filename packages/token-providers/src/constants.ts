/**
 * The time window (5 mins) that SDK will treat the SSO token expires in before the defined expiration date in token.
 * This is needed because server side may have invalidated the token before the defined expiration date.
 *
 * @internal
 */
export const EXPIRE_WINDOW_MS = 5 * 60 * 1000;

export const REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
