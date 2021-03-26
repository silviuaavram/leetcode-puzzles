import {longestCommonSubsequence} from './longest-common-subsequence'

test('should have a common subsequence of 3', () => {
  const text1 = 'abcde'
  const text2 = 'ace'

  expect(longestCommonSubsequence(text1, text2)).toEqual(3)
})

test('should have a common subsequence of 3', () => {
  const text1 = 'abc'
  const text2 = 'abc'

  expect(longestCommonSubsequence(text1, text2)).toEqual(3)
})

test('should have a common subsequence of 4', () => {
  const text1 = 'abcxyaxc'
  const text2 = 'bxxc'

  expect(longestCommonSubsequence(text1, text2)).toEqual(4)
})

test('should have a common subsequence of 0', () => {
  const text1 = 'abc'
  const text2 = 'def'

  expect(longestCommonSubsequence(text1, text2)).toEqual(0)
})
