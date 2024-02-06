const path = require('path');

module.exports = {
  ...module.exports,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
