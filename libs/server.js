exports.Server = Server;

function Server() {
}

Server.prototype.start = function() {
  var server = require('net').createServer(function(connection) {

  });

  var port = 51463;
  server.listen(port);
  console.log('\nListening on port ' + port + '...\n');
};
