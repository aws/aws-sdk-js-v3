const parser = new DOMParser();

export function parseXML(xmlString: string): any {
  const xmlDocument = parser.parseFromString(xmlString, "application/xml");

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

      for (const attr of Array.from(element.attributes)) {
        obj[`${attr.name}`] = attr.value;
      }

      for (const child of Array.from(element.childNodes)) {
        const childResult = xmlToObj(child);

        if (childResult != null) {
          const childName = child.nodeName;
          if (childName === "#text") {
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
