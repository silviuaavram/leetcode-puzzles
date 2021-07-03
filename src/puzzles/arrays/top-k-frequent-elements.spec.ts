import {topKFrequent} from './top-k-frequent-elements'

test('gets the most frequent k elements 1', () => {
  const nums = [1, 1, 1, 2, 2, 3]
  const k = 2

  expect(topKFrequent(nums, k)).toEqual([1, 2])
})

test('gets the most frequent k elements 2', () => {
  const nums = [1]
  const k = 1

  expect(topKFrequent(nums, k)).toEqual([1])
})

test('gets the most frequent k elements 3', () => {
  const nums = [5, 1, 8, 5, 8, 1, 3, 5, 7, 8, 1]
  const k = 3

  expect(topKFrequent(nums, k)).toEqual([5, 1, 8])
})
