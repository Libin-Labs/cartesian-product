import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('forms two-dimensional product', () => {
  assert.deepEqual(
    api.cartesianProduct([
      ['a', 'b'],
      [1, 2],
    ]),
    [
      ['a', 1],
      ['a', 2],
      ['b', 1],
      ['b', 2],
    ],
  );
});
test('returns one empty tuple for no dimensions', () => {
  assert.deepEqual(api.cartesianProduct([]), [[]]);
});
test('returns empty for empty dimension', () => {
  assert.deepEqual(api.cartesianProduct([[1], []]), []);
});
test('handles one dimension', () => {
  assert.deepEqual(api.cartesianProduct([[1, 2]]), [[1], [2]]);
});
test('supports empty limit and empty product', () => {
  assert.deepEqual(api.cartesianProduct([], 0), [[]]);
});
test('rejects product over limit', () => {
  assert.throws(
    () =>
      api.cartesianProduct(
        [
          [1, 2],
          [3, 4],
        ],
        3,
      ),
    RangeError,
  );
});
