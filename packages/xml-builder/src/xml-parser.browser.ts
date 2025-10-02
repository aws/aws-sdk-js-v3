const parser = new DOMParser();

/**
 * Cases where this differs from fast-xml-parser:
 *
 * 1. Mixing text with nested tags (does not occur in AWS REST XML).
 * <mixed-text> hello, <bold>world</bold>, how are you?</mixed-text>
 *
 * @internal
 */
export function parseXML(xmlString: string): any {
  const xmlDocument = parser.parseFromString(xmlString, "application/xml");

  if (xmlDocument.getElementsByTagName("parsererror").length > 0) {
    throw new Error("DOMParser XML parsing error.");
  }

  // Recursive function to convert XML nodes to JS object
  const xmlToObj = (node: Node): any => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent?.trim()) {
        return node.textContent;
      }
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      if (element.attributes.length === 0 && element.childNodes.length === 0) {
        return "";
      }

      const obj: any = {};

      const attributes = Array.from(element.attributes);
      for (const attr of attributes) {
        obj[`${attr.name}`] = attr.value;
      }

      const childNodes = Array.from(element.childNodes);
      for (const child of childNodes) {
        const childResult = xmlToObj(child);

        if (childResult != null) {
          const childName = child.nodeName;

          if (childNodes.length === 1 && attributes.length === 0 && childName === "#text") {
            return childResult;
          }

          if (obj[childName]) {
            if (Array.isArray(obj[childName])) {
              obj[childName].push(childResult);
            } else {
              obj[childName] = [obj[childName], childResult];
            }
          } else {
            obj[childName] = childResult;
          }
        } else if (childNodes.length === 1 && attributes.length === 0) {
          return element.textContent;
        }
      }

      return obj;
    }

    return null;
  };

  return {
    [xmlDocument.documentElement.nodeName]: xmlToObj(xmlDocument.documentElement),
  };
}
