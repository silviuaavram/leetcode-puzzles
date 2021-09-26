import {minSetSize} from './reduce-array-size-to-the-half'

test('reduce the array size to half 1', () => {
  const arr = [7, 7, 7, 7, 7, 7]

  expect(minSetSize(arr)).toEqual(1)
})

test('reduce the array size to half 2', () => {
  const arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7]

  expect(minSetSize(arr)).toEqual(2)
})

test('reduce the array size to half 3', () => {
  const arr = [1, 9]

  expect(minSetSize(arr)).toEqual(1)
})

test('reduce the array size to half 4', () => {
  const arr = [1000, 1000, 3, 7]

  expect(minSetSize(arr)).toEqual(1)
})

test('reduce the array size to half 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  expect(minSetSize(arr)).toEqual(5)
})
