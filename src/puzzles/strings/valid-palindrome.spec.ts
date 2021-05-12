import {isPalindrome} from './valid-palindrome'

test('determines a valid palindrome 1', () => {
  const s = "A man, a plan, a canal: Panama"
  
  expect(isPalindrome(s)).toBe(true)
})

test('determines a valid palindrome 2', () => {
  const s = "ab_a"
  
  expect(isPalindrome(s)).toBe(true)
})

test('determines an ivalid palindrome', () => {
  const s = "race a car"
  
  expect(isPalindrome(s)).toBe(false)
})

test('sanity checks are working', () => {
  expect(isPalindrome('   ')).toBe(true)
  expect(isPalindrome(' a ')).toBe(true)
})

