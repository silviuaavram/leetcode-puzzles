import {jump} from './jump-game-ii'

test('returns the correct minimum number of jumps 1', () => {
  const nums = [2, 3, 1, 1, 4]

  expect(jump(nums)).toEqual(2)
})

test('returns the correct minimum number of jumps 2', () => {
  const nums = [2, 3, 0, 1, 4]

  expect(jump(nums)).toEqual(2)
})

test('returns the correct minimum number of jumps 3', () => {
  const nums = [3, 5, 1, 1, 1, 1, 0]

  expect(jump(nums)).toEqual(2)
})

test('returns the correct minimum number of jumps 4', () => {
  const nums = [2, 3, 1]

  expect(jump(nums)).toEqual(1)
})

test('returns the correct minimum number of jumps 5', () => {
  const nums = [1, 2, 3]

  expect(jump(nums)).toEqual(2)
})

test('returns the correct minimum number of jumps 6', () => {
  const nums = [2, 3, 1, 1, 4]

  expect(jump(nums)).toEqual(2)
})
