require('chai').should()

const {expect} = require('chai')
const missingNumber = require('./missing-number')

it('should detect 2', function() {
  missingNumber([3, 0, 1]).should.equal(2)
})

it('should detect 0', function() {
  missingNumber([3, 2, 1]).should.equal(0)
})

it('should detect 8', function() {
  missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]).should.equal(8)
})
