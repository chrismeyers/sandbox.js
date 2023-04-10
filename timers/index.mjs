/* eslint-disable no-console */
import { setTimeout, setInterval } from 'node:timers/promises';

const ac = new AbortController();

process.on('SIGINT', () => {
  console.log('aborting...');
  ac.abort();
});

let i = 0;

try {
  // eslint-disable-next-line no-restricted-syntax, no-unused-vars
  for await (const _ of setInterval(1000, undefined, { signal: ac.signal })) {
    console.log(`${i} before ${new Date()}`);
    await setTimeout(i % 2 !== 0 ? 0 : 2000);
    console.log(`${i} after  ${new Date()}`);
    i += 1;
  }
} catch (err) {
  if (err.code !== 'ABORT_ERR') throw err;
}
