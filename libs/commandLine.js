exports.run = runServer;

var Server = require('./server').Server;

var args = require('yargs')
  .config('config')
  .config('c')
  .options('port', {
    alias: 'p',
    default: 51463
  })
  .argv;

function runServer() {
  var server = new Server(args);
  server.start();
}
