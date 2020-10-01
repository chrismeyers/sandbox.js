/* eslint-disable no-console */
require('dotenv').config();

const { NODE_ENV: ENV, DOES_NOT_EXIST } = process.env;
console.log(ENV);
console.log(DOES_NOT_EXIST);

const [a, b] = [1, 2];
console.log(a);
console.log(b);
