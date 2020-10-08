/* eslint-disable no-console */
console.time('Single');
setTimeout(() => {
  console.timeEnd('Single');
}, 1000);

console.time('Infinite');
setInterval(() => {
  console.timeLog('Infinite');
}, 1000);
