module.exports = {
  resolveOnEvent: resolveOnEvent
};

var Promise = require('bluebird');

function resolveOnEvent(emitter, event) {
  return new Promise(function(resolve, reject) {
    emitter
      .once(event, resolve)
      .once('error', reject);
  });
}
