// Remove this hack once `globalThis` issue is resolved or we drop testing Node.js 10.x
// Issue on Jest https://github.com/jsdom/jsdom/issues/2961
// PR which added globalThis in Node.js https://github.com/nodejs/node/pull/22835
if (!global.globalThis) {
  Object.defineProperty(global, "globalThis", {
    value: global,
    writable: true,
    enumerable: false,
    configurable: true,
  });
}
