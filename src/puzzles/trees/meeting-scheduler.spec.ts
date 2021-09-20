import {minAvailableDuration} from './meeting-scheduler'

test('the scheduler works correctly 1', () => {
  const slots1 = [
    [10, 50],
    [60, 120],
    [140, 210],
  ]
  const slots2 = [
    [0, 15],
    [60, 70],
  ]
  const duration = 8

  expect(minAvailableDuration(slots1, slots2, duration)).toEqual([60,68])
})

test('the scheduler works correctly 2', () => {
  const slots1 = [
    [10, 50],
    [60, 120],
    [140, 210],
  ]
  const slots2 = [
    [0, 15],
    [60, 70],
  ]
  const duration = 12

  expect(minAvailableDuration(slots1, slots2, duration)).toEqual([])
})
