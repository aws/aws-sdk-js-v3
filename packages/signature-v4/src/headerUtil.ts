import { HeaderBag } from "@aws-sdk/types";

export const hasHeader = (soughtHeader: string, headers: HeaderBag): boolean => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }

  return false;
};

/* Get the value of one request header, ignore the case. Return string if header is in the headers, else return undefined */
export const getHeaderValue = (soughtHeader: string, headers: HeaderBag): string | undefined => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return headers[headerName];
    }
  }

  return undefined;
};

/* Delete the one request header, ignore the case. Do nothing if it's not there */
export const deleteHeader = (soughtHeader: string, headers: HeaderBag) => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      delete headers[headerName];
    }
  }
};
