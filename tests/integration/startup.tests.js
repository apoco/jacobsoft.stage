const StageServer = require('../..');

const net = require('net');
const path = require('path');
const promiseUtils = require('../../libs/utils/promise-utils');

describe('The stage', () => {
  let stage = null;

  afterEach(function() {
    stage && stage.stop();
  });

  describe('start method', () => {
    it('opens a listener on port 51463 by default', () => {
      return verifyListenerOnPort({}, 51463);
    });

    it('can listen on a configurable port specified through its options', () => {
      return verifyListenerOnPort({ port: 34899}, 34899);
    });

    function verifyListenerOnPort(opts, port) {
      return startServer(opts).then(() => {
        const connection = net.connect({ port: port });
        return promiseUtils.resolveOnEvent(connection, 'connect');
      });
    }
  });

  describe('stop method', () => {
    it('stops listening', () => {
      return startServer()
        .then(() => stage.stop())
        .then(() => {
          const connection = net.connect({ port: 51463 });
          return promiseUtils.resolveOnEvent(connection, 'error');
        });
    });
  });

  function startServer(opts) {
    stage = new StageServer(opts);
    return stage.start();
  }
});
