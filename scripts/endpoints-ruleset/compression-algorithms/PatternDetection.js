const CompressionAlgorithm = require("./CompressionAlgorithm");

/**
 * Compresses JSON data by extracting repeated patterns into reusable variables.
 */
module.exports = class PatternDetection extends CompressionAlgorithm {
  constructor(data, _export) {
    super(data, _export);
    /**
     * Copied object that will be modified with compression instructions.
     */
    this.cloneData = JSON.parse(JSON.stringify(data));
    /**
     * Variable ID to code block string.
     * @type Record<number, string>
     */
    this.varIdToBlock = {};
    /**
     * Reverse map of code block string to variable id.28
     * @type Record<string, number>
     */
    this.blockToVarId = {};
    /**
     * Number of times each variable has been detected in the JSON blob.
     * @type Record<number, number>
     */
    this.varIdToCount = {};
    /**
     * Unique JSON path mapped to the variable that can replace it.
     * @type Record<string, number>
     */
    this.pathToVarId = {};
    /**
     * Next available variable id. Increments when used.
     */
    this.variableId = 0;
    /**
     * Set of unique paths encountered in the JSON object.
     * @type Record<string, 1>
     */
    this.pathsSeen = {};
    /**
     * 'read' or 'write' mode.
     */
    this.mode = "read";
    /**
     * Set of variables that actually get used (as opposed to only marked).
     * These will be assigned symbols for write output.
     * @type Record<string, 1>
     */
    this.variableIdsUsed = {};
    /**
     * Tracks the next available variable name, e.g.
     * a, b, ... z, A ... Z, aa, ab, ac, ad ...
     * @type number[]
     */
    this.varName = [0];
    /**
     * Map of object key strings to their assigned variable id.
     * @type Record<string, number>
     */
    this.keyToVarId = {};
    /**
     * Alphabet available to the variable name generator.
     */
    this.variableAlphabet = "abcdefghijklmnopqrstuvwxyz" + "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  }

  /**
   * Allocates the next unique variable id.
   * @returns {number}
   */
  markVariableId() {
    return this.variableId++;
  }

  /**
   * Allocates the next required variable name for code output.
   * @returns {string}
   */
  nextVariableName() {
    const out = this.varName
      .map((n) => this.variableAlphabet[n])
      .reverse()
      .join("");
    let carry = false;
    for (let i = 0; i < this.varName.length; ++i) {
      const n = this.varName[i];
      if (n >= 51) {
        this.varName[i] = 0;
        carry = true;
        continue;
      }
      if (carry) {
        this.varName[i] += 1;
        carry = false;
      } else {
        this.varName[i] += 1;
        break;
      }
    }
    if (carry) {
      this.varName.push(0);
    }
    return out;
  }

  /**
   * Recursive.
   * @param {JSON} node - the current node in traversal.
   * @param {string} path - the unique JSON path to the current node.
   * @param {string} key - the object key for this node, if available.
   * @returns {void}
   */
  traverse(node = this.cloneData, path = "", key = void 0) {
    const optionalReplaceNodeVariableId = this.work(node, path, key);
    if (optionalReplaceNodeVariableId) {
      this.variableIdsUsed[optionalReplaceNodeVariableId] = 1;
      const order = `this.cloneData${path} = "__REPLACE__${optionalReplaceNodeVariableId}__REPLACE__"`;
      eval(order);
      return;
    }

    if (Array.isArray(node)) {
      let index = 0;
      for (const child of node) {
        this.traverse(child, path + "[" + index++ + "]");
      }
    } else if (typeof node === "object" && node != null) {
      for (const k in node) {
        const v = node[k];
        this.traverse(v, path + "[`" + k + "`]", k);
      }
    }
  }

  /**
   * Actions on a node during traversal.
   */
  work(node, path, key) {
    if (this.mode === "read") {
      return this.read(node, path, key);
    } else if (this.mode === "write") {
      return this.write(node, path, key);
    }
  }

  /**
   * Scan the current node and note its unique JSON
   * representation. Allocate variables to the JSON strings.
   */
  read(node, path, key) {
    const block = JSON.stringify(node);
    if (this.pathsSeen[path]) {
      throw new Error("already seen: " + path);
    }
    this.pathsSeen[path] = 1;

    if (key) {
      const varId = this.markVariableId();
      this.keyToVarId[key] = varId;
      this.varIdToBlock[varId] = key;
    }

    if (this.blockToVarId[block]) {
      const varId = this.blockToVarId[block];
      this.varIdToCount[varId] += 1;
    } else {
      const varId = this.markVariableId();
      this.blockToVarId[block] = varId;
      this.varIdToBlock[varId] = block;
      this.varIdToCount[varId] = 1;
      this.pathToVarId[path] = varId;
    }
  }

  /**
   * Check whether the node is worth replacing with
   * a previously recorded variable id.
   * @returns {number | void} variable id if replacement is desired, otherwise void.
   */
  write(node, path, key) {
    const block = JSON.stringify(node);

    if (this.blockToVarId[block]) {
      const variable = this.blockToVarId[block];
      const count = this.varIdToCount[variable];

      if (count >= 2 && block.length * count >= 10) {
        return variable;
      }
    }

    return void 0;
  }

  /**
   * Prints out the code blocks that repeat the most.
   */
  report(greaterThanCount = 4) {
    for (const [variable, count] of Object.entries(this.varIdToCount)) {
      if (greaterThanCount < count) {
        console.log(`var ${variable} appears ${count} times, code: ${this.varIdToBlock[variable]}`);
      }
    }
  }

  /**
   * @override
   * @returns {string} JavaScript code that reconstitutes the input JSON object.
   */
  toCodeString(_export = this._export) {
    this.traverse();
    this.mode = "write";
    this.traverse();
    this.mode = "read";

    let buffer = "const _data=" + JSON.stringify(this.cloneData).replace(/"(\w+)":/g, `$1:`) + ";";

    // Write in this order: strings, objects, arrays.
    const orderedVariableIds = Object.keys(this.variableIdsUsed).sort((a, b) => {
      const boolStartChar = "b";
      let aStartChar = this.varIdToBlock[a].charAt(0);
      let bStartChar = this.varIdToBlock[b].charAt(0);

      aStartChar = aStartChar === "t" || aStartChar === "f" ? boolStartChar : aStartChar;
      bStartChar = bStartChar === "t" || bStartChar === "f" ? boolStartChar : bStartChar;

      if (aStartChar === bStartChar) {
        return 0;
      }

      for (const startChar of [`[`, `{`, `"`, boolStartChar]) {
        if (aStartChar === startChar) {
          return 1;
        } else if (bStartChar === startChar) {
          return -1;
        }
      }

      throw new Error(`unexpected start char: ${aStartChar}, ${bStartChar}`);
    });

    // code blocks
    let codeBlockBuffer = [];
    for (const variableId of orderedVariableIds) {
      const symbol = this.nextVariableName();
      const code = `${symbol}=${this.varIdToBlock[variableId]}`;
      codeBlockBuffer.push(code);
      buffer = buffer.replace(new RegExp(`"__REPLACE__${variableId}__REPLACE__"`, "g"), symbol);
    }

    for (let i = 0; i < codeBlockBuffer.length; ++i) {
      const iIndex = codeBlockBuffer[i].indexOf("=");
      const [iSymbol, iCode] = [codeBlockBuffer[i].slice(0, iIndex), codeBlockBuffer[i].slice(iIndex + 1)];

      for (let j = i + 1; j < codeBlockBuffer.length; ++j) {
        const jIndex = codeBlockBuffer[i].indexOf("=");
        const [, jCode] = [codeBlockBuffer[j].slice(0, jIndex), codeBlockBuffer[j].slice(jIndex + 1)];

        if (jCode.includes(iCode)) {
          if (iCode[0] !== '"' && iCode.length < 6) {
            // hack to prevent boolean literals from mistakenly being replaced in strings.
            continue;
          }

          codeBlockBuffer[j] = codeBlockBuffer[j].replaceAll(
            new RegExp(`${iCode.replaceAll(/([\[\]{}()])/g, `\\$1`)}:([^ ])`, "g"),
            `[${iSymbol}]:$1`
          );
          codeBlockBuffer[j] = codeBlockBuffer[j].replaceAll(iCode, iSymbol);
        }
      }
    }

    if (codeBlockBuffer.length > 0) {
      buffer = `const ` + codeBlockBuffer.join(",\n") + ";\n" + buffer;
    }

    // object keys
    let keyVarBuffer = [];
    for (const [key] of Object.entries(this.keyToVarId)) {
      const found = Array.from(buffer.matchAll(new RegExp(`"${key}":`, "g")) || []);

      if (found.length > 1 && key.length * found.length > 8) {
        const symbol = this.nextVariableName();
        keyVarBuffer.push(`${symbol}="${key}"`);
        buffer = buffer.replaceAll(new RegExp(`"?${key}"?:([^ ])`, "g"), `[${symbol}]:$1`);
      }
    }
    if (keyVarBuffer.length > 0) {
      buffer = "const " + keyVarBuffer.join(",\n") + ";\n" + buffer;
    }

    buffer += "\n";
    buffer += _export.replace("$", "_data");

    return buffer;
  }
};
