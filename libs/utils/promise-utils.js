function resolveOnEvent(emitter, event) {
  return new Promise(function(resolve, reject) {
    emitter.once(event, resolve);

    if (event !== 'error') {
      emitter.once('error', reject);
    }
  });
}

module.exports = {
  resolveOnEvent: resolveOnEvent
};
