import {canJump} from './jump-game'

test('can jump 1', () => {
  const nums = [2, 3, 1, 1, 4]

  expect(canJump(nums)).toEqual(true)
})

test('can jump 2', () => {
  const nums = [3, 2, 1, 0, 4]

  expect(canJump(nums)).toEqual(false)
})

test('can jump 3', () => {
  const nums = [3, 3, 3, 0, 0, 0, 1, 2, 3]

  expect(canJump(nums)).toEqual(false)
})

test('can jump 4', () => {
  const nums = [0, 1, 2]

  expect(canJump(nums)).toEqual(false)
})

test('can jump 5', () => {
  const nums = [1, 1, 2]

  expect(canJump(nums)).toEqual(true)
})

test('can jump 6', () => {
  const nums = [1, 0, 2]

  expect(canJump(nums)).toEqual(false)
})

test('can jump 7', () => {
  const nums = [2, 0, 0]

  expect(canJump(nums)).toEqual(true)
})

test('can jump 8', () => {
  const nums = [0]

  expect(canJump(nums)).toEqual(true)
})

