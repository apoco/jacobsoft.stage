const Server = require('./server').Server;

const args = require('yargs')
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
  const server = new Server(args);
  server.start();
}

exports.run = runServer;
