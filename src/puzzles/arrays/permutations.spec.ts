import {permute} from './permutations'

test('should permute [1,2,3]', () => {
  const nums = [1, 2, 3]
  const expected = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]

  expect(permute(nums)).toEqual(expected)
})

test('should permute [0, 1]', () => {
  const nums = [0, 1]
  const expected = [
    [0, 1],
    [1, 0],
  ]

  expect(permute(nums)).toEqual(expected)
})

test('should permute [1]', () => {
  const nums = [1]
  const expected = [[1]]

  expect(permute(nums)).toEqual(expected)
})
