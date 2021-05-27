import {countSmaller} from './count-of-smaller-numbers-after-self'

test('should count correctly 1', () => {
  const nums = [5, 2, 6, 1]
  const expected = [2, 1, 1, 0]

  expect(countSmaller(nums)).toEqual(expected)
})

test('should count correctly 2', () => {
  const nums = [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5]
  const expected = [9, 7, 5, 3, 1, 0, 0, 0, 0, 0, 0]

  expect(countSmaller(nums)).toEqual(expected)
})

test('should count correctly 3', () => {
  const nums = [-1]
  const expected = [0]

  expect(countSmaller(nums)).toEqual(expected)
})

test('should count correctly 4', () => {
  const nums = [-1, -1]
  const expected = [0, 0]

  expect(countSmaller(nums)).toEqual(expected)
})
