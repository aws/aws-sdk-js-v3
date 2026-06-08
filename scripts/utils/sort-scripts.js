/**
 * Sort package.json scripts keys with special ordering rules:
 * - "foo:watch" immediately follows "foo"
 * - test/test:watch/test:integration/test:integration:watch/test:e2e/test:e2e:watch
 *   maintain a fixed relative order.
 */
const SCRIPT_ORDER = ["test", "test:watch", "test:integration", "test:integration:watch", "test:e2e", "test:e2e:watch"];

function sortScripts(a, b) {
  const ai = SCRIPT_ORDER.indexOf(a);
  const bi = SCRIPT_ORDER.indexOf(b);
  if (ai !== -1 && bi !== -1) return ai - bi;
  if (ai !== -1) return SCRIPT_ORDER[0] < b ? -1 : 1;
  if (bi !== -1) return a < SCRIPT_ORDER[0] ? -1 : 1;
  const sortKey = (s) => (s.endsWith(":watch") ? s.slice(0, -6) + "\x01" : s);
  return sortKey(a) < sortKey(b) ? -1 : sortKey(a) > sortKey(b) ? 1 : 0;
}

module.exports = { sortScripts };
