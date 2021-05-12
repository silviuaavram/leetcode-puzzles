import {validPalindrome} from './valid-palindrome-ii'

test('should check correct palindrome', () => {
  const s = "aba"

  expect(validPalindrome(s)).toBe(true)
})

test('should check correct palindrome sanity checks', () => {
  expect(validPalindrome('')).toBe(true)
  expect(validPalindrome('a')).toBe(true)
  expect(validPalindrome('aa')).toBe(true)
  expect(validPalindrome('ab')).toBe(true)
})

test('should check correct palindrome after removing 1 character', () => {
  const s = "abca"

  expect(validPalindrome(s)).toBe(true)
})

test('should check incorrect palindrome 1', () => {
  const s = "abc"

  expect(validPalindrome(s)).toBe(false)
})

test('should check incorrect palindrome 2', () => {
  const s = "aabbxccc"

  expect(validPalindrome(s)).toBe(false)
})

test('should check correct palindrome with even length and character removal', () => {
  const s = "baabbaa"

  expect(validPalindrome(s)).toBe(true)
})

test('should check correct palindrome with odd length and character removal', () => {
  const s = "baabxbaa"

  expect(validPalindrome(s)).toBe(true)
})



