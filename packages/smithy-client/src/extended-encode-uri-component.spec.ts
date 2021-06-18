import { extendedEncodeURIComponent } from "./extended-encode-uri-component";

describe(extendedEncodeURIComponent.name, () => {
  const encodedValues: [string, string][] = [
    ["!", "%21"],
    ["'", "%27"],
    ["(", "%28"],
    [")", "%29"],
    ["*", "%2A"],
  ];

  const verify = (table: [string, string][]) => {
    it.each(table)(`encodes %s as %s`, (input, output) => {
      expect(extendedEncodeURIComponent(input)).toStrictEqual(output);
    });
  };

  verify(encodedValues);
  verify([encodedValues.reduce((acc, [input, output]) => [acc[0].concat(input), acc[1].concat(output)], ["", ""])]);
});
