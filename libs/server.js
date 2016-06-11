const defaultOptions = {
  port: 51463
};

class StageServer {
  constructor(opts) {
    this.options = {...defaultOptions, ...opts};
    this.isListening = false;
  }

  start() {
    return new Promise((resolve, reject) => {
      this.server = require('net').createServer();

      this.server
        .on('error', reject)
        .once('listening', () => {
          this.isListening = true;
          resolve(this);
        })
        .listen(this.options.port);
      console.log('\nListening on port ' + this.options.port + '...\n');
    });
  }

  stop() {
    if (this.isListening)
      this.server.close();
  }
}

module.exports = StageServer;
