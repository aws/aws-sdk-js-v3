const { parse } = require("acorn");
const walk = require("acorn-walk");

const MODULE = "module";
const BUFFER = "Buffer";
const TYPEOF = "typeof";
const LOGICAL_AND = "&&";
const NOT = "!";
const IDENTIFIER = "Identifier";
const UNARY_EXPRESSION = "UnaryExpression";
const BINARY_EXPRESSION = "BinaryExpression";
const LOGICAL_EXPRESSION = "LogicalExpression";
const MEMBER_EXPRESSION = "MemberExpression";
const OBJECT_PATTERN = "ObjectPattern";
const ARRAY_PATTERN = "ArrayPattern";
const REST_ELEMENT = "RestElement";
const ASSIGNMENT_PATTERN = "AssignmentPattern";
const FUNCTION_DECLARATION = "FunctionDeclaration";
const FUNCTION_EXPRESSION = "FunctionExpression";
const ARROW_FUNCTION_EXPRESSION = "ArrowFunctionExpression";

/**
 * Detects unguarded references to the global `Buffer` identifier in bundled code.
 *
 * Guarded means the reference is inside a `typeof Buffer` check, a variable
 * derived from such a check (e.g. `USE_BUFFER`), or a polyfill assignment scope.
 *
 * @param {string} code - bundle source text.
 * @returns {{ line: number, column: number }[]} unguarded global Buffer references.
 * @internal
 */
function findGlobalBufferRefs(code) {
  let ast;
  try {
    ast = parse(code, {
      ecmaVersion: 2022,
      sourceType: MODULE,
      allowHashBang: true,
      locations: true,
    });
  } catch {
    ast = parse(code, {
      ecmaVersion: 2022,
      sourceType: "script",
      allowHashBang: true,
      allowImportExportEverywhere: true,
      locations: true,
    });
  }

  const polyfillRanges = collectPolyfillRanges(ast);
  const guardedRanges = collectGuardedRanges(ast);
  const typeofArgPositions = collectTypeofArgPositions(ast);

  // Scope-aware walk: track local declarations to distinguish global Buffer.
  const scopeStack = [new Set()];
  const globalRefs = [];

  function isDeclared(name) {
    for (let i = scopeStack.length - 1; i >= 0; --i) {
      if (scopeStack[i].has(name)) {
        return true;
      }
    }
    return false;
  }

  function isGuarded(node) {
    for (let i = 0; i < guardedRanges.length; ++i) {
      const r = guardedRanges[i];
      if (node.start >= r.start && node.end <= r.end) {
        return true;
      }
    }
    return false;
  }

  function isInPolyfill(node) {
    for (let i = 0; i < polyfillRanges.length; ++i) {
      const r = polyfillRanges[i];
      if (node.start >= r.start && node.end <= r.end) {
        return true;
      }
    }
    return false;
  }

  walk.recursive(ast, null, {
    FunctionDeclaration(node, state, c) {
      if (node.id) {
        scopeStack[scopeStack.length - 1].add(node.id.name);
      }
      const scope = new Set();
      scopeStack.push(scope);
      for (let i = 0; i < node.params.length; ++i) {
        extractBindings(node.params[i], scope);
      }
      c(node.body, state);
      scopeStack.pop();
    },
    FunctionExpression(node, state, c) {
      const scope = new Set();
      scopeStack.push(scope);
      if (node.id) {
        scope.add(node.id.name);
      }
      for (let i = 0; i < node.params.length; ++i) {
        extractBindings(node.params[i], scope);
      }
      c(node.body, state);
      scopeStack.pop();
    },
    ArrowFunctionExpression(node, state, c) {
      const scope = new Set();
      scopeStack.push(scope);
      for (let i = 0; i < node.params.length; ++i) {
        extractBindings(node.params[i], scope);
      }
      c(node.body, state);
      scopeStack.pop();
    },
    BlockStatement(node, state, c) {
      scopeStack.push(new Set());
      for (let i = 0; i < node.body.length; ++i) {
        c(node.body[i], state);
      }
      scopeStack.pop();
    },
    ForStatement(node, state, c) {
      scopeStack.push(new Set());
      if (node.init) {
        c(node.init, state);
      }
      if (node.test) {
        c(node.test, state);
      }
      if (node.update) {
        c(node.update, state);
      }
      c(node.body, state);
      scopeStack.pop();
    },
    VariableDeclaration(node, state, c) {
      const scope = scopeStack[scopeStack.length - 1];
      for (let i = 0; i < node.declarations.length; ++i) {
        const decl = node.declarations[i];
        extractBindings(decl.id, scope);
        if (decl.init) {
          c(decl.init, state);
        }
      }
    },
    CatchClause(node, state, c) {
      const scope = new Set();
      scopeStack.push(scope);
      if (node.param) {
        extractBindings(node.param, scope);
      }
      c(node.body, state);
      scopeStack.pop();
    },
    Identifier(node) {
      if (
        node.name === BUFFER &&
        !isDeclared(BUFFER) &&
        !typeofArgPositions.has(node.start) &&
        !isGuarded(node) &&
        !isInPolyfill(node)
      ) {
        globalRefs.push({ line: node.loc.start.line, column: node.loc.start.column });
      }
    },
    MemberExpression(node, state, c) {
      c(node.object, state);
      if (node.computed) {
        c(node.property, state);
      }
    },
  });

  return globalRefs;
}

/**
 * Collects ranges of functions that assign to Buffer (polyfill code).
 */
function collectPolyfillRanges(ast) {
  const ranges = [];
  walk.ancestor(ast, {
    AssignmentExpression(node, ancestors) {
      if (isBufferAssignTarget(node.left)) {
        const fn = findEnclosingFunction(ancestors);
        if (fn) {
          ranges.push({ start: fn.start, end: fn.end });
        }
      }
    },
    VariableDeclarator(node, ancestors) {
      if (node.id.type === IDENTIFIER && node.id.name === BUFFER) {
        const fn = findEnclosingFunction(ancestors);
        if (fn) {
          ranges.push({ start: fn.start, end: fn.end });
        }
      }
    },
  });
  return ranges;
}

/**
 * Collects AST ranges protected by typeof Buffer checks or derived variables.
 */
function collectGuardedRanges(ast) {
  // Variables assigned from typeof Buffer expressions (e.g. USE_BUFFER).
  const typeofBufferVars = new Set();
  walk.simple(ast, {
    VariableDeclarator(node) {
      if (node.id.type === IDENTIFIER && node.init && containsTypeofBuffer(node.init)) {
        typeofBufferVars.add(node.id.name);
      }
    },
  });

  // Functions whose bodies contain typeof Buffer checks (e.g. detectBufferParsing).
  // Calling these functions in a condition is equivalent to a typeof Buffer guard.
  const guardFunctionNames = collectGuardFunctionNames(ast);

  function isTypeofBufferVar(node) {
    if (node.type === IDENTIFIER && typeofBufferVars.has(node.name)) {
      return true;
    }
    if (node.type === UNARY_EXPRESSION && node.operator === NOT && isTypeofBufferVar(node.argument)) {
      return true;
    }
    return false;
  }

  function isGuardFunctionCall(node) {
    if (node.type === "CallExpression" && isGuardCallee(node.callee)) {
      return true;
    }
    // !guardFn()
    if (node.type === UNARY_EXPRESSION && node.operator === NOT && isGuardFunctionCall(node.argument)) {
      return true;
    }
    // guardFn() && expr  or  expr && guardFn()
    if (node.type === BINARY_EXPRESSION || node.type === LOGICAL_EXPRESSION) {
      return isGuardFunctionCall(node.left) || isGuardFunctionCall(node.right);
    }
    return false;
  }

  // Checks if a callee node refers to a guard function.
  // Handles: direct call `guardFn()`, member `mod.guardFn()`,
  // and webpack's `(0, mod.guardFn)()` (SequenceExpression callee).
  function isGuardCallee(callee) {
    if (callee.type === IDENTIFIER && guardFunctionNames.has(callee.name)) {
      return true;
    }
    if (
      callee.type === MEMBER_EXPRESSION &&
      callee.property.type === IDENTIFIER &&
      guardFunctionNames.has(callee.property.name)
    ) {
      return true;
    }
    if (callee.type === "SequenceExpression" && callee.expressions.length > 0) {
      const last = callee.expressions[callee.expressions.length - 1];
      return isGuardCallee(last);
    }
    return false;
  }

  function isGuardTest(node) {
    return containsTypeofBuffer(node) || isTypeofBufferVar(node) || isGuardFunctionCall(node);
  }

  const ranges = [];
  walk.simple(ast, {
    ConditionalExpression(node) {
      if (isGuardTest(node.test)) {
        ranges.push(node);
      }
    },
    IfStatement(node) {
      if (isGuardTest(node.test)) {
        ranges.push(node);
      }
    },
    LogicalExpression(node) {
      if (node.operator === LOGICAL_AND && isGuardTest(node.left)) {
        ranges.push(node);
      }
    },
  });
  return ranges;
}

/**
 * Finds names of functions whose bodies contain typeof Buffer checks.
 * These act as indirect guards: calling them in a condition means
 * the guarded branch only executes when Buffer is available.
 */
function collectGuardFunctionNames(ast) {
  const names = new Set();

  walk.simple(ast, {
    FunctionDeclaration(node) {
      if (node.id && node.id.type === IDENTIFIER && functionBodyContainsTypeofBuffer(node)) {
        names.add(node.id.name);
      }
    },
    VariableDeclarator(node) {
      if (
        node.id.type === IDENTIFIER &&
        node.init &&
        (node.init.type === FUNCTION_EXPRESSION || node.init.type === ARROW_FUNCTION_EXPRESSION) &&
        functionBodyContainsTypeofBuffer(node.init)
      ) {
        names.add(node.id.name);
      }
    },
  });

  return names;
}

/**
 * Checks if a function node's body contains a typeof Buffer expression.
 */
function functionBodyContainsTypeofBuffer(fnNode) {
  let found = false;
  const body = fnNode.body;
  if (!body) return false;

  walk.simple(body, {
    UnaryExpression(node) {
      if (!found && node.operator === TYPEOF && node.argument.type === IDENTIFIER && node.argument.name === BUFFER) {
        found = true;
      }
    },
  });

  return found;
}

/**
 * Collects start positions of Buffer identifiers used as typeof operands.
 * These are not actual references to the Buffer value.
 */
function collectTypeofArgPositions(ast) {
  const positions = new Set();
  walk.simple(ast, {
    UnaryExpression(node) {
      if (node.operator === TYPEOF && node.argument.type === IDENTIFIER && node.argument.name === BUFFER) {
        positions.add(node.argument.start);
      }
    },
  });
  return positions;
}

function extractBindings(pattern, scope) {
  if (!pattern) {
    return;
  }
  switch (pattern.type) {
    case IDENTIFIER:
      scope.add(pattern.name);
      break;
    case OBJECT_PATTERN:
      for (let i = 0; i < pattern.properties.length; ++i) {
        extractBindings(pattern.properties[i].value || pattern.properties[i].argument, scope);
      }
      break;
    case ARRAY_PATTERN:
      for (let i = 0; i < pattern.elements.length; ++i) {
        if (pattern.elements[i]) {
          extractBindings(pattern.elements[i], scope);
        }
      }
      break;
    case REST_ELEMENT:
      extractBindings(pattern.argument, scope);
      break;
    case ASSIGNMENT_PATTERN:
      extractBindings(pattern.left, scope);
      break;
  }
}

function isBufferAssignTarget(node) {
  if (node.type === IDENTIFIER && node.name === BUFFER) {
    return true;
  }
  if (node.type === MEMBER_EXPRESSION) {
    if (node.object.type === IDENTIFIER && node.object.name === BUFFER) {
      return true;
    }
    // exports.Buffer = Buffer
    if (node.property.type === IDENTIFIER && node.property.name === BUFFER) {
      return true;
    }
  }
  return false;
}

function containsTypeofBuffer(node) {
  if (
    node.type === UNARY_EXPRESSION &&
    node.operator === TYPEOF &&
    node.argument.type === IDENTIFIER &&
    node.argument.name === BUFFER
  ) {
    return true;
  }
  if (node.type === BINARY_EXPRESSION || node.type === LOGICAL_EXPRESSION) {
    return containsTypeofBuffer(node.left) || containsTypeofBuffer(node.right);
  }
  return false;
}

function findEnclosingFunction(ancestors) {
  for (let i = ancestors.length - 1; i >= 0; --i) {
    const t = ancestors[i].type;
    if (t === FUNCTION_DECLARATION || t === FUNCTION_EXPRESSION || t === ARROW_FUNCTION_EXPRESSION) {
      return ancestors[i];
    }
  }
  return null;
}

module.exports = { findGlobalBufferRefs };
