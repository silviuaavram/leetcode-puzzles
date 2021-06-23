import {findOrder} from './course-schedule-ii'

test('returns the courses in order 1', () => {
  const numCourses = 2
  const prerequisites = [[1, 0]]
  const expected = [0, 1]

  expect(findOrder(numCourses, prerequisites)).toEqual(expected)
})

test('returns the courses in order 2', () => {
  const numCourses = 4
  const prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]
  const expected = [0, 2, 1, 3]

  expect(findOrder(numCourses, prerequisites)).toEqual(expected)
})

test('returns the courses in order 3', () => {
  const numCourses = 1
  const prerequisites: number[][] = []
  const expected = [0]

  expect(findOrder(numCourses, prerequisites)).toEqual(expected)
})

test('returns the courses in order 4', () => {
  const numCourses = 2
  const prerequisites: number[][] = []
  const expected = [1, 0]

  expect(findOrder(numCourses, prerequisites)).toEqual(expected)
})

test('returns the courses in order 5', () => {
  const numCourses = 2
  const prerequisites: number[][] = [
    [0, 1],
    [1, 0],
  ]
  const expected: number[] = []

  expect(findOrder(numCourses, prerequisites)).toEqual(expected)
})
