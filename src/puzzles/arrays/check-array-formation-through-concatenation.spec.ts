import {canFormArray} from './check-array-formation-through-concatenation'

test('check if array can be formed 1', () => {
  const arr = [85]
  const pieces = [[85]]

  expect(canFormArray(arr, pieces)).toBe(true)
})

test('check if array can be formed 2', () => {
  const arr = [15, 88]
  const pieces = [[88], [15]]

  expect(canFormArray(arr, pieces)).toBe(true)
})

test('check if array can be formed 3', () => {
  const arr = [91, 4, 64, 78]
  const pieces = [[78], [4, 64], [91]]

  expect(canFormArray(arr, pieces)).toBe(true)
})

test('check if array cannot be formed 1', () => {
  const arr = [49, 18, 16]
  const pieces = [[16, 18, 49]]

  expect(canFormArray(arr, pieces)).toBe(false)
})

test('check if array cannot be formed 2', () => {
  const arr = [1, 3, 5, 7]
  const pieces = [[2, 4, 6, 8]]

  expect(canFormArray(arr, pieces)).toBe(false)
})

test('check if array cannot be formed 3', () => {
  const arr = [1, 3, 5, 7]
  const pieces = [[1], [3], [5, 7, 8]]

  expect(canFormArray(arr, pieces)).toBe(false)
})
