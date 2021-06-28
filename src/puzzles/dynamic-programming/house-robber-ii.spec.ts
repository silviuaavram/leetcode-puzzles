import {rob} from './house-robber-ii'

test('robs the best houses 1', () => {
  const nums = [2, 3, 2]

  expect(rob(nums)).toEqual(3)
})

test('robs the best houses 2', () => {
  const nums = [1, 2, 3, 1]

  expect(rob(nums)).toEqual(4)
})

test('robs the best houses 3', () => {
  const nums = [3]

  expect(rob(nums)).toEqual(3)
})

test('robs the best houses 4', () => {
  const nums = [2, 1, 1, 5]

  expect(rob(nums)).toEqual(6)
})

test('robs the best houses 5', () => {
  const nums = [1, 3, 1, 3, 100]

  expect(rob(nums)).toEqual(103)
})

test('robs the best houses 6', () => {
  const nums = [3, 5]

  expect(rob(nums)).toEqual(5)
})
