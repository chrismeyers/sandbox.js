const readline = require('readline');
const one = require('./one');
const two = require('./two');
const common = require('./common');
const frozen = require('./frozen');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  }
  if (key.name === '1') {
    one.inc();
    one.noop();
  }
  if (key.name === '2') {
    two.inc();
    two.noop();
  }
  if (key.name === 'r') {
    common.counter = 0;
  }

  // eslint-disable-next-line no-console
  console.log(common.counter, frozen.counter);
});
