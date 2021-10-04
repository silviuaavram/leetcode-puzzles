import {longestArithSeqLength} from './longest-arithmetic-subsequence'

test('finds the longest arithmetic subsequence 1', () => {
  const nums = [3, 6, 9, 12]

  expect(longestArithSeqLength(nums)).toEqual(4)
})

test('finds the longest arithmetic subsequence 2', () => {
  const nums = [9, 4, 7, 2, 10]

  expect(longestArithSeqLength(nums)).toEqual(3)
})

test('finds the longest arithmetic subsequence 3', () => {
  const nums = [20, 1, 15, 3, 10, 5, 8]

  expect(longestArithSeqLength(nums)).toEqual(4)
})

test('finds the longest arithmetic subsequence 4', () => {
  const nums = [83, 20, 17, 43, 52, 78, 68, 45]

  expect(longestArithSeqLength(nums)).toEqual(2)
})
