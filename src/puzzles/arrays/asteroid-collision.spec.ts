import {asteroidCollision} from './asteroid-collision'

test('asteroids collide 1', () => {
  const asteroids = [5, 10, -5]
  const expected = [5, 10]

  expect(asteroidCollision(asteroids)).toEqual(expected)
})

test('asteroids collide 2', () => {
  const asteroids = [8, -8]
  const expected: number[] = []

  expect(asteroidCollision(asteroids)).toEqual(expected)
})

test('asteroids collide 3', () => {
  const asteroids = [10, 2, -5]
  const expected = [10]

  expect(asteroidCollision(asteroids)).toEqual(expected)
})

test('asteroids collide 4', () => {
  const asteroids = [-2, -1, 1, 2]
  const expected = [-2, -1, 1, 2]

  expect(asteroidCollision(asteroids)).toEqual(expected)
})

test('asteroids collide 5', () => {
  const asteroids = [16, 12, 8, -10, -13, -20, 5]
  const expected = [-20, 5]

  expect(asteroidCollision(asteroids)).toEqual(expected)
})
