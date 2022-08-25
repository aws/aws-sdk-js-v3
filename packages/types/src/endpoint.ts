export enum EndpointURLScheme {
  HTTP = "http",
  HTTPS = "https",
}

export interface EndpointURL {
  /**
   * The URL scheme such as http or https.
   */
  scheme: EndpointURLScheme;

  /**
   * The authority is the host and optional port component of the URL.
   */
  authority: string;

  /**
   * The parsed path segment of the URL.
   * This value is as-is as provided by the user.
   */
  path: string;

  /**
   * A boolean indicating whether the authority is an IP address.
   */
  isIp: boolean;
}
