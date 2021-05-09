const common = require('./common');
const frozen = require('./frozen');

module.exports = {
  inc: () => {
    common.counter += 1;
  },
  noop: () => {
    frozen.counter += 1;
  },
};
