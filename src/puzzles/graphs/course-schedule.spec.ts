import {canFinish} from './course-schedule'

test('checks if courses can be finished 1', () => {
  const numCourses = 2
  const prerequisites = [[1, 0]]

  expect(canFinish(numCourses, prerequisites)).toEqual(true)
})

test('checks if courses can be finished 2', () => {
  const numCourses = 4
  const prerequisites = [
    [1, 0],
    [2, 0],
    [0, 3],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(true)
})

test('checks if courses can be finished 3', () => {
  const numCourses = 3
  const prerequisites: number[][] = []

  expect(canFinish(numCourses, prerequisites)).toEqual(true)
})

test('checks if courses can be finished 4', () => {
  const numCourses = 7
  const prerequisites: number[][] = [
    [1, 0],
    [0, 3],
    [0, 2],
    [3, 2],
    [2, 5],
    [4, 5],
    [5, 6],
    [2, 4],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(true)
})

test('checks if courses cannot be finished 1', () => {
  const numCourses = 2
  const prerequisites = [
    [1, 0],
    [0, 1],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(false)
})

test('checks if courses cannot be finished 2', () => {
  const numCourses = 5
  const prerequisites = [
    [1, 0],
    [2, 0],
    [1, 4],
    [3, 1],
    [0, 3],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(false)
})
