/* eslint-disable no-console */
require('dotenv').config();
const assert = require('assert');

const objectTests = () => {
  const {
    NODE_ENV: ENV,
    DOES_NOT_EXIST,
    DOES_NOT_EXIST_DEFAULT = 'default',
  } = process.env;
  assert(ENV === 'development');
  assert(DOES_NOT_EXIST === undefined);
  assert(DOES_NOT_EXIST_DEFAULT === 'default');

  let a;
  let b;
  // eslint-disable-next-line prefer-const
  ({ a, b } = { a: 1, b: 2 });
  assert(a === 1);
  assert(b === 2);

  const obj = { first: 1, second: 2 };
  const { first: c, second: d } = obj;
  assert(c === 1);
  assert(d === 2);

  const { first: e = 2, b: f = 3 } = { first: 1 };
  assert(e === 1);
  assert(f === 3);

  const key = 'foo';
  const { [key]: g } = { foo: 'bar' };
  assert(g === 'bar');

  const { h, i, ...j } = { h: 1, i: 2, c: 3, d: 4 };
  assert(h === 1);
  assert(i === 2);
  assert.deepStrictEqual(j, { c: 3, d: 4 });

  const foo = { 'fizz-buzz': true };
  const { 'fizz-buzz': k } = foo;
  assert(k === true);

  const props = [
    { id: 1, name: 'Fizz' },
    { id: 2, name: 'Buzz' },
    { id: 3, name: 'FizzBuzz' },
  ];
  const [, , { name: l }] = props;
  assert(l === 'FizzBuzz');
};

const arrayTests = () => {
  const [a, b] = [1, 2];
  assert(a === 1);
  assert(b === 2);

  const [, , c, d] = [1, 2, 3, 4];
  assert(c === 3);
  assert(d === 4);

  const [e, f = 2] = [1];
  assert(e === 1);
  assert(f === 2);

  let g = 1;
  let h = 2;
  [h, g] = [g, h];
  assert(g === 2);
  assert(h === 1);

  const [i, ...j] = [1, 2, 3];
  assert(i === 1);
  assert.deepStrictEqual(j, [2, 3]);
};

try {
  objectTests();
  arrayTests();
} catch (error) {
  console.error(error.stack);
  process.exit(1);
}
