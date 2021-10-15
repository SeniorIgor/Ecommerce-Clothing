if (process.env.NODE_ENV === 'production') {
  /** For uploading to the server production build uncomment next line
   * module.exports = require('./config.prod');
   * */
  module.exports = require('./default.prod');
} else {
  module.exports = require('./config.dev');
}
