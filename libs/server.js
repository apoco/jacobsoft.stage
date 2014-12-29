exports.Server = Server;

function Server(opts) {
  this.options = opts;
}

Server.prototype.start = function() {
  var server = require('net').createServer(function(connection) {

  });

  var port = this.options.port;
  server.listen(port);
  console.log('\nListening on port ' + port + '...\n');
};
