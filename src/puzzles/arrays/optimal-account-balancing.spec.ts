import {minTransfers} from './optimal-account-balancing'

test('solves the debt 1', () => {
  const transactions = [
    [0, 1, 10],
    [2, 0, 5],
  ]

  expect(minTransfers(transactions)).toEqual(2)
})

test('solves the debt 2', () => {
  const transactions = [
    [0, 1, 10],
    [1, 0, 1],
    [1, 2, 5],
    [2, 0, 5],
  ]

  expect(minTransfers(transactions)).toEqual(1)
})

test('solves the debt 3', () => {
  const transactions = [
    [2, 0, 5],
    [3, 4, 4],
  ]

  expect(minTransfers(transactions)).toEqual(2)
})
