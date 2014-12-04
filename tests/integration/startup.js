var childProcess = require('child_process');
var net = require('net');
var promiseUtils = require('../../libs/utils/promise-utils');

describe('The startup script', function() {
  it('opens a listener on port 51463 by default', function() {
    var server = childProcess.fork('../../main', [], { silent: true });
    return promiseUtils.resolveOnEvent(server.stdout, 'data')
      .then(function() {
        var connection = net.connect({ port: 51463 });
        return promiseUtils.resolveOnEvent(connection, 'connect');
      })
      .finally(function() {
        server.kill();
      });
  });
});
