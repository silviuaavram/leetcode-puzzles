import {numOfMinutes} from './time-needed-to-inform-all-employees'

test('returns the correct time 1', () => {
  const n = 1
  const headID = 0
  const manager = [-1]
  const informTime = [0]

  expect(numOfMinutes(n, headID, manager, informTime)).toEqual(0)
})

test('returns the correct time 2', () => {
  const n = 6
  const headID = 2
  const manager = [2, 2, -1, 2, 2, 2]
  const informTime = [0, 0, 1, 0, 0, 0]

  expect(numOfMinutes(n, headID, manager, informTime)).toEqual(1)
})

test('returns the correct time 3', () => {
  const n = 7
  const headID = 6
  const manager = [1, 2, 3, 4, 5, 6, -1]
  const informTime = [0, 6, 5, 4, 3, 2, 1]

  expect(numOfMinutes(n, headID, manager, informTime)).toEqual(21)
})

test('returns the correct time 4', () => {
  const n = 15
  const headID = 0
  const manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
  const informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]

  expect(numOfMinutes(n, headID, manager, informTime)).toEqual(3)
})

test('returns the correct time 5', () => {
  const n = 11
  const headID = 4
  const manager = [5, 9, 6, 10, -1, 8, 9, 1, 9, 3, 4]
  const informTime = [0, 213, 0, 253, 686, 170, 975, 0, 261, 309, 337]

  expect(numOfMinutes(n, headID, manager, informTime)).toEqual(2560)
})
