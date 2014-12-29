exports.run = runServer;

var Server = require('./server').Server;

var args = require('yargs')
  .config('config')
  .config('c')
  .options('port', {
    alias: 'p',
    describe: 'The TCP port to listen on',
    default: 51463
  })
  .help('help')
  .alias('help', 'h')
  .argv;

function runServer() {
  var server = new Server(args);
  server.start();
}
