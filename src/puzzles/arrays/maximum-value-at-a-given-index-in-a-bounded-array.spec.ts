import {maxValue} from './maximum-value-at-a-given-index-in-a-bounded-array'

test('returns the correct array 1', () => {
  const n = 4
  const index = 2
  const maxSum = 6
  const expected = 2

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})

test('returns the correct array 2', () => {
  const n = 6
  const index = 1
  const maxSum = 10
  const expected = 3

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})

test('returns the correct array 3', () => {
  const n = 3
  const index = 2
  const maxSum = 18
  const expected = 7

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})

test('returns the correct array 4', () => {
  const n = 8
  const index = 7
  const maxSum = 14
  const expected = 4

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})

test('returns the correct array 5', () => {
  const n = 1
  const index = 0
  const maxSum = 24
  const expected = 24

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})

test('returns the correct array 6', () => {
  const n = 4
  const index = 2
  const maxSum = 6
  const expected = 2

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})

test('returns the correct array 7', () => {
  const n = 4
  const index = 0
  const maxSum = 4
  const expected = 1

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})

test('returns the correct array 8', () => {
  const n = 7
  const index = 5
  const maxSum = 29
  const expected = 6

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})

test('returns the correct array 9', () => {
  const n = 3
  const index = 0
  const maxSum = 815094800
  const expected = 271698267

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})

test('returns the correct array 10', () => {
  const n = 964563097
  const index = 235570932
  const maxSum = 973496892
  const expected = 2989

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})

test('returns the correct array 11', () => {
  const n = 584329161
  const index = 478338002
  const maxSum = 950696488
  const expected = 19141

  expect(maxValue(n, index, maxSum)).toEqual(expected)
})


