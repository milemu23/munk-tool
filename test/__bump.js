const expect = require('chai').expect;
const util = require('../util-tool');

describe('Bump utility', () => {
  it('Test with a major', () => {
    const patchOutput = util.bump('3.4.8', 'major');
    expect(patchOutput).to.be.equal('4.0.0');
  });
  it('Test with a minor', () => {
    const patchOutput = util.bump('3.4.8', 'minor');
    expect(patchOutput).to.be.equal('3.5.0');
  });
  it('Test with a major', () => {
    const patchOutput = util.bump('3.4.8', 'patch');
    expect(patchOutput).to.be.equal('3.4.9');
  });
});
