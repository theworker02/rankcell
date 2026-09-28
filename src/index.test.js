const test = require("node:test");
const assert = require("node:assert/strict");
const lib = require("./index.js");

test("rankcell run returns output", () => {
  const out = lib.run([]);
  assert.ok(out != null);
  assert.ok(String(out).length > 0);
});
