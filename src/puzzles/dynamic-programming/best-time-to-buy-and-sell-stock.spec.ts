import {maxProfit} from './best-time-to-buy-and-sell-stock'

test('max profit should be 5', () => {
  const prices = [7, 1, 5, 3, 6, 4]

  expect(maxProfit(prices)).toEqual(5)
})

test('max profit should be 14', () => {
  const prices = [8, 5, 12, 9, 19, 1]

  expect(maxProfit(prices)).toEqual(14)
})

test('max profit should be 9', () => {
  const prices = [8, 5, 12, 1, 3, 10]
  expect(maxProfit(prices)).toEqual(9)
})

test('max profit should be -1 and return 0', () => {
  const prices = [21, 12, 11, 9, 6, 3]

  expect(maxProfit(prices)).toEqual(0) // actually -1
})

test('max profit should be -1 and return 0', () => {
  const prices = [7, 6, 4, 3, 1]

  expect(maxProfit(prices)).toEqual(0)
})

test('there is no max profit 1', () => {
  const prices: number[] = []

  expect(maxProfit(prices)).toEqual(0)
})

test('there is no max profit 2', () => {
  const prices = [7]

  expect(maxProfit(prices)).toEqual(0)
})
