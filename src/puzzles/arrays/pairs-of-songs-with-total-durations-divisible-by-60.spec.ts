import {numPairsDivisibleBy60} from './pairs-of-songs-with-total-durations-divisible-by-60'

test('returns the pairs divisible by 60 1', () => {
  const time = [30, 20, 150, 100, 40]

  expect(numPairsDivisibleBy60(time)).toEqual(3)
})

test('returns the pairs divisible by 60 2', () => {
  const time = [60, 60, 60]

  expect(numPairsDivisibleBy60(time)).toEqual(3)
})

test('returns the pairs divisible by 60 3', () => {
  const time = [20, 20]

  expect(numPairsDivisibleBy60(time)).toEqual(0)
})

test('returns the pairs divisible by 60 4', () => {
  const time = [10, 50]

  expect(numPairsDivisibleBy60(time)).toEqual(1)
})

test('returns the pairs divisible by 60 5', () => {
  const time = [90, 90, 30, 30, 30]

  expect(numPairsDivisibleBy60(time)).toEqual(10)
})

test('returns the pairs divisible by 60 6', () => {
  const time = [15, 63, 451, 213, 37, 209, 343, 319]

  expect(numPairsDivisibleBy60(time)).toEqual(1)
})

test('returns the pairs divisible by 60 7', () => {
  const time = [174,188,377,437,54,498,455,239,183,347,59,199,52,488,147,82]

  expect(numPairsDivisibleBy60(time)).toEqual(2)
})

