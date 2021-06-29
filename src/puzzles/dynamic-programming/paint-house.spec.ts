import {minCost} from './paint-house'

test('paints the houses cost-effective 1', () => {
  const costs = [
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19],
  ]

  expect(minCost(costs)).toEqual(10)
})

test('paints the houses cost-effective 2', () => {
  const costs = [[7, 6, 2]]

  expect(minCost(costs)).toEqual(2)
})

test('paints the houses cost-effective 3', () => {
  const costs = [
    [7, 6, 2],
    [7, 6, 2],
  ]

  expect(minCost(costs)).toEqual(8)
})

test('paints the houses cost-effective 4', () => {
  const costs = [
    [2, 2, 2],
    [16, 1, 5],
    [14, 3, 19],
  ]

  expect(minCost(costs)).toEqual(10)
})

test('paints the houses cost-effective 5', () => {
  const costs = [
    [1, 2, 3],
    [6, 5, 4],
    [7, 8, 9],
    [10, 11, 12],
  ]

  expect(minCost(costs)).toEqual(23)
})

