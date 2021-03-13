require('chai').should()

const isPalindrome = require('./palindrome-number')

it('checks that 0 is a palindrome', function() {
  isPalindrome(0).should.be.true
})

it('checks that 1 is a palindrome', function() {
  isPalindrome(1).should.be.true
})

it('checks that 121 is a palindrome', function() {
  isPalindrome(121).should.be.true
})

it('checks that 1221 is a palindrome', function() {
  isPalindrome(1221).should.be.true
})

it('checks that 12 is not a palindrome', function() {
  isPalindrome(12).should.be.false
})

it('checks that 123 is not a palindrome', function() {
  isPalindrome(123).should.be.false
})


it('checks that -123 is not a palindrome', function() {
  isPalindrome(-123).should.be.false
})
