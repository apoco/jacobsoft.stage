var childProcess = require('child_process');
var net = require('net');
var path = require('path');
var promiseUtils = require('../../libs/utils/promise-utils');

describe('The startup script', function() {
  var configFile = path.resolve(__dirname, './config.json');

  it('opens a listener on port 51463 by default', function() {
    return verifyListenerOnPort([], 51463);
  });

  describe('can listen on a configurable port when it', function() {
    it('is specified on the command line with --port', function(done) {
      return verifyListenerOnPort(['--port', 34899], 34899)
        .then(function() { done(); })
        .catch(done);
    });

    it('is specified on the command line with -p', function(done) {
      return verifyListenerOnPort(['--port', 34899], 34899)
        .then(function() { done(); })
        .catch(done);
    });

    it('is specified in a config file with --config', function(done) {
      return verifyListenerOnPort(['--config', configFile], 34899)
        .then(function() { done(); })
        .catch(done);
    });

    it('is specified in a config file with -c', function(done) {
      return verifyListenerOnPort(['-c', configFile], 34899)
        .then(function() { done(); })
        .catch(done);
    });
  });

  function verifyListenerOnPort(args, port) {
    var server = childProcess.fork('../../main', args, { silent: true });
    return promiseUtils.resolveOnEvent(server.stdout, 'data')
      .then(function() {
        var connection = net.connect({ port: port });
        return promiseUtils.resolveOnEvent(connection, 'connect');
      })
      .finally(function() {
        server.kill();
      });
  }
});
