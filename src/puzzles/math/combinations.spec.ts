import {combine} from './combinations'

test('should return 4 combinations', () => {
  const expected = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
  ]
  expect(combine(4, 2)).toEqual(expected)
})

test('should return 1 combination', () => {
  const expected = [[1]]
  expect(combine(1, 1)).toEqual(expected)
})
