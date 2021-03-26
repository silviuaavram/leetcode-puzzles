import {longestPalindrome} from './longest-palindromic-substring'

test('should return "bab"', () => {
  const s = 'babad'
  const expected = ['bab', 'aba']
  expect(expected).toContain(longestPalindrome(s))
})

test('should return "bb"', () => {
  const s = 'cbbd'
  const expected = 'bb'
  expect(longestPalindrome(s)).toEqual(expected)
})

test('should return empty string', () => {
  const s = ''

  expect(longestPalindrome(s)).toEqual(s)
})

test('should return the same one char string', () => {
  const s = 'a'

  expect(longestPalindrome(s)).toEqual(s)
})

test('should return the same two char string', () => {
  const s = 'xx'

  expect(longestPalindrome(s)).toEqual(s)
})

test('should return "abcba"', () => {
  const s = 'yabcbaxx'
  const expected = 'abcba'

  expect(longestPalindrome(s)).toEqual(expected)
})

test('should return "bb"', () => {
  const s = 'abcxyz11'
  const expected = '11'

  expect(longestPalindrome(s)).toEqual(expected)
})

