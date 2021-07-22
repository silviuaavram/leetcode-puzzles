import {maxCoins} from './burst-balloons'

test('collects the max coints 1', () => {
  const nums = [3, 1, 5, 8]

  expect(maxCoins(nums)).toEqual(167)
})

test('collects the max coints 2', () => {
  const nums = [1, 5]

  expect(maxCoins(nums)).toEqual(10)
})

test('collects the max coints 3', () => {
  const nums = [8, 2, 6, 8, 9, 8, 1, 4, 1, 5, 3, 0, 7, 7, 0, 4, 2, 2]

  expect(maxCoins(nums)).toEqual(3446)
})

test('collects the max coints 4', () => {
  const nums = [8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2]

  expect(maxCoins(nums)).toEqual(3394)
})
