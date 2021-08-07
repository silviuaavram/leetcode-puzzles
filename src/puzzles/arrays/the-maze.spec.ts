import {hasPath} from './the-maze'

test('check for maze destination 1', () => {
  const maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ]
  const start = [0, 4]
  const destination = [4, 4]

  expect(hasPath(maze, start, destination)).toBe(true)
})

test('check for maze destination 2', () => {
  const maze = [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ]
  const start = [0, 4]
  const destination = [3, 2]

  expect(hasPath(maze, start, destination)).toBe(false)
})

test('check for maze destination 3', () => {
  const maze = [
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 0],
  ]
  const start = [4, 3]
  const destination = [0, 1]

  expect(hasPath(maze, start, destination)).toBe(false)
})
