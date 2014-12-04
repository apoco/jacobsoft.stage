exports.run = runServer;

var Server = require('./server').Server;

function runServer() {
  var server = new Server();
  server.start();
}
