import {minCost} from './minimum-deletion-cost-to-avoid-repeating-letters'

test('calculates the minimum cost 1', () => {
  const s = 'abaac'
  const cost = [1, 2, 3, 4, 5]

  expect(minCost(s, cost)).toEqual(3)
})

test('calculates the minimum cost 2', () => {
  const s = 'abc'
  const cost = [1, 2, 3]

  expect(minCost(s, cost)).toEqual(0)
})

test('calculates the minimum cost 3', () => {
  const s = 'aabaa'
  const cost = [1, 2, 3, 4, 1]

  expect(minCost(s, cost)).toEqual(2)
})

test('calculates the minimum cost 4', () => {
  const s = 'aaaaa'
  const cost = [5, 3, 3, 3, 1]

  expect(minCost(s, cost)).toEqual(10)
})
