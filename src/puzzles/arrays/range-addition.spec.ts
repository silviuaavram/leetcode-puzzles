import {getModifiedArray} from './range-addition'

test('get the resulted array 1', () => {
  const length = 5
  const updates = [
    [1, 3, 2],
    [2, 4, 3],
    [0, 2, -2],
  ]
  const expected = [-2, 0, 3, 5, 3]

  expect(getModifiedArray(length, updates)).toEqual(expected)
})

test('get the resulted array 2', () => {
  const length = 10
  const updates = [
    [2, 4, 6],
    [5, 6, 8],
    [1, 9, -4],
  ]
  const expected = [0, -4, 2, 2, 2, 4, 4, -4, -4, -4]

  expect(getModifiedArray(length, updates)).toEqual(expected)
})
