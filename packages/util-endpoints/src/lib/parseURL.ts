import { EndpointURL, EndpointURLScheme } from "@aws-sdk/types";

const DEFAULT_PORTS: Record<EndpointURLScheme, number> = {
  [EndpointURLScheme.HTTP]: 80,
  [EndpointURLScheme.HTTPS]: 443,
};

const v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
const v4Regex = new RegExp(`^${v4}$`);

/**
 * Parses a string into it’s Endpoint URL components.
 */
export const parseURL = (value: string): EndpointURL | null => {
  const whatwgURL = (() => {
    try {
      return new URL(value);
    } catch (error) {
      return null;
    }
  })();

  if (!whatwgURL) {
    return null;
  }

  const { host, hostname, pathname, protocol, search } = whatwgURL;

  if (search) {
    return null;
  }

  const scheme = protocol.slice(0, -1) as EndpointURLScheme;
  if (!Object.values(EndpointURLScheme).includes(scheme)) {
    return null;
  }

  const isIp = v4Regex.test(hostname) || (hostname.startsWith("[") && hostname.endsWith("]"));
  const authority = `${host}${value.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ? `:${DEFAULT_PORTS[scheme]}` : ``}`;

  return {
    scheme,
    authority,
    path: pathname,
    isIp,
  };
};
