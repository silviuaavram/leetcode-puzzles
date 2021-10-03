import {kthFactor} from './the-kth-factor-of-n'

test('gets the kth factor of n 1', () => {
  const n = 12
  const k = 3

  expect(kthFactor(n, k)).toEqual(3)
})

test('gets the kth factor of n 2', () => {
  const n = 7
  const k = 2

  expect(kthFactor(n, k)).toEqual(7)
})

test('gets the kth factor of n 3', () => {
  const n = 4
  const k = 4

  expect(kthFactor(n, k)).toEqual(-1)
})

test('gets the kth factor of n 4', () => {
  const n = 1
  const k = 1

  expect(kthFactor(n, k)).toEqual(1)
})

test('gets the kth factor of n 5', () => {
  const n = 1000
  const k = 3

  expect(kthFactor(n, k)).toEqual(4)
})
