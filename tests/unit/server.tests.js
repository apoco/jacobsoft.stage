var expect = require('chai').expect;
var sinon = require('sinon');
var proxyquire = require('proxyquire');

describe('server.js', function() {

  it('provides a Server constructor', function() {
    var serverModule = proxyquire('../libs/server', {});
    expect(serverModule.Server).to.be.a('function');
  });

});

describe('A Server', function() {
  describe('has a start method', function() {
    it('which accepts connections on port 51463 by default', function() {
      var serverProxy = { listen: sinon.stub() };
      var netProxy = { createServer: sinon.stub().returns(serverProxy) };

      var module = proxyquire('../libs/server', { 'net': netProxy });
      var server = new module.Server();

      server.start();

      expect(serverProxy.listen.calledWith(51463)).to.be.ok;
    });
  });
});
