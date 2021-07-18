import {numSplits} from './number-of-good-ways-to-split-a-string'

test('counts the number of good splits 1', () => {
  const s = 'aacaba'

  expect(numSplits(s)).toEqual(2)
})

test('counts the number of good splits 2', () => {
  const s = 'abcd'

  expect(numSplits(s)).toEqual(1)
})

test('counts the number of good splits 3', () => {
  const s = 'aaaaa'

  expect(numSplits(s)).toEqual(4)
})

test('counts the number of good splits 4', () => {
  const s = 'acbadbaada'

  expect(numSplits(s)).toEqual(2)
})
