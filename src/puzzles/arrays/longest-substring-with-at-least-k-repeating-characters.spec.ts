import {longestSubstring} from './longest-substring-with-at-least-k-repeating-characters'

test('should return the length of 3', () => {
  const s = 'aaabb'
  const k = 3

  expect(longestSubstring(s, k)).toEqual(3)
})

test('should return the length of 5', () => {
  const s = 'ababbc'
  const k = 2

  expect(longestSubstring(s, k)).toEqual(5)
})

test('should return the length of 7', () => {
  const s = 'abcxabcabac'
  const k = 2

  expect(longestSubstring(s, k)).toEqual(7)
})

test('should return the length of 3', () => {
  const s = 'baaabcb'
  const k = 3

  expect(longestSubstring(s, k)).toEqual(3)
})

test('should return the length of 0', () => {
  const s = ''
  const k = 2

  expect(longestSubstring(s, k)).toEqual(0)
})

test('should return the length of the whole string', () => {
  const s = 'aabbccddxyz'
  const k = 1

  expect(longestSubstring(s, k)).toEqual(s.length)
})
