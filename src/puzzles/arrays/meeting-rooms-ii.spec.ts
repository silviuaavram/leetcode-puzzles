import {minMeetingRooms} from './meeting-rooms-ii'

test('should return the correct number of meeting rooms 1', () => {
  const intervals = [
    [0, 30],
    [5, 10],
    [15, 20],
  ]

  expect(minMeetingRooms(intervals)).toEqual(2)
})

test('should return the correct number of meeting rooms 2', () => {
  const intervals = [
    [7, 10],
    [2, 4],
  ]

  expect(minMeetingRooms(intervals)).toEqual(1)
})

test('should return the correct number of meeting rooms 3', () => {
  const intervals = [[2, 4]]

  expect(minMeetingRooms(intervals)).toEqual(1)
})

test('should return the correct number of meeting rooms 4', () => {
  const intervals: number[][] = []

  expect(minMeetingRooms(intervals)).toEqual(0)
})

test('should return the correct number of meeting rooms 5', () => {
  const intervals: number[][] = [
    [16, 20],
    [10, 18],
    [5, 15],
    [2, 12],
    [4, 10],
    [16, 20]
  ]

  expect(minMeetingRooms(intervals)).toEqual(3)
})
