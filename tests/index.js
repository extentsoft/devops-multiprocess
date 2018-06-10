'use strict';
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
sinon.config = {
  useFakeTimers: false,
};

describe('smoke test - ' + process.env.PORT, function() {
  it('checks equality', function() {
    assert.equal(true, true);
  });
  it('check equality', function() {
    expect(true).to.be.true;
  });
});
