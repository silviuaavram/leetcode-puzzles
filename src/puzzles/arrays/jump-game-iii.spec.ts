import {canReach} from './jump-game-iii'

test('check it can jump 1', () => {
  const arr = [4, 2, 3, 0, 3, 1, 2]
  const start = 5

  expect(canReach(arr, start)).toEqual(true)
})

test('check it can jump 2', () => {
  const arr = [4, 2, 3, 0, 3, 1, 2]
  const start = 0

  expect(canReach(arr, start)).toEqual(true)
})

test('check it can jump 3', () => {
  const arr = [3, 0, 2, 1, 2]
  const start = 2

  expect(canReach(arr, start)).toEqual(false)
})

test('check it can jump 4', () => {
  const arr = [5]
  const start = 0

  expect(canReach(arr, start)).toEqual(false)
})

test('check it can jump 5', () => {
  const arr = [2, 2, 0]
  const start = 1

  expect(canReach(arr, start)).toEqual(false)
})

test('check it can jump 6', () => {
  const arr = [1, 0, 0, 3]
  const start = 3

  expect(canReach(arr, start)).toEqual(true)
})
