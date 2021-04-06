
const assert = require('chai').assert;
const tail = require('../tail');



describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns ['Bonjour', 'Hola', 'Guten Tag'] for ['Hello', 'Bonjour', 'Hola', 'Guten Tag']", () => {
    assert.deepEqual(tail(['Hello', 'Bonjour', 'Hola', 'Guten Tag']), ['Bonjour', 'Hola', 'Guten Tag']);
  });
});


