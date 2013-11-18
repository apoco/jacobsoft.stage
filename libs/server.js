function Server() {

}

Server.prototype.start = function() {
    var server = require('net').createServer(function(connection) {

    });

    server.listen(51463);
};

exports.Server = Server;
