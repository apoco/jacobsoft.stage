var Server = require('./server').Server;

exports.run = function() {
    var server = new Server();
    server.start();
};
