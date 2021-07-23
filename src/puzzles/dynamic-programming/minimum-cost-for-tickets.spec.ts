import {mincostTickets} from './minimum-cost-for-tickets'

test('gets tickets for minimum cost 1', () => {
  const days = [1, 4, 6, 7, 8, 20]
  const costs = [2, 7, 15]

  expect(mincostTickets(days, costs)).toEqual(11)
})

test('gets tickets for minimum cost 2', () => {
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31]
  const costs = [2, 7, 15]

  expect(mincostTickets(days, costs)).toEqual(17)
})
