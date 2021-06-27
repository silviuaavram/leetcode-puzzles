import {rob} from './house-robber'

test('robs the richest houses 1', () => {
  const nums = [1, 2, 3, 1]

  expect(rob(nums)).toEqual(4)
})

test('robs the richest houses 2', () => {
  const nums = [2, 7, 9, 3, 1]

  expect(rob(nums)).toEqual(12)
})

test('robs the richest houses 3', () => {
  const nums = [2]

  expect(rob(nums)).toEqual(2)
})

test('robs the richest houses 4', () => {
  const nums = [3, 5]

  expect(rob(nums)).toEqual(5)
})

test('robs the richest houses 5', () => {
  const nums = [3, 5, 1, 1, 5]

  expect(rob(nums)).toEqual(10)
})

test('robs the richest houses 6', () => {
  const nums = [3, 5, 1, 1, 5, 5]

  expect(rob(nums)).toEqual(11)
})
