var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var proxyquire = require('proxyquire');

describe('commandLine.js', function() {
  it('starts a stage server', function() {

    var serverStub = {
      start: sinon.stub()
    };

    var commandLine = proxyquire('../libs/commandLine', {
      './server': { Server: sinon.stub().returns(serverStub) }
    });

    commandLine.run();

    expect(serverStub.start.called).to.be.ok;
  });
});
