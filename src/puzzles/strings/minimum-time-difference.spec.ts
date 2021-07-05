import {findMinDifference} from './minimum-time-difference'

test('returns the minimum time difference 1', () => {
  const timePoints = ['23:59', '00:00']

  expect(findMinDifference(timePoints)).toEqual(1)
})

test('returns the minimum time difference 2', () => {
  const timePoints = ['00:00', '23:59', '00:00']

  expect(findMinDifference(timePoints)).toEqual(0)
})

test('returns the minimum time difference 3', () => {
  const timePoints = ['23:59', '21:39']

  expect(findMinDifference(timePoints)).toEqual(140)
})

test('returns the minimum time difference 4', () => {
  const timePoints = ['23:59', '01:39']

  expect(findMinDifference(timePoints)).toEqual(100)
})

test('returns the minimum time difference 5', () => {
  const timePoints = ['23:59', '01:39', '02:00']

  expect(findMinDifference(timePoints)).toEqual(21)
})

test('returns the minimum time difference 6', () => {
  const timePoints = ['12:00', '00:00']

  expect(findMinDifference(timePoints)).toEqual(720)
})

test('returns the minimum time difference 8', () => {
  const timePoints = ['12:01', '00:00']

  expect(findMinDifference(timePoints)).toEqual(719)
})

test('returns the minimum time difference 9', () => {
  const timePoints = ['00:00', '04:00', '22:00']

  expect(findMinDifference(timePoints)).toEqual(120)
})
