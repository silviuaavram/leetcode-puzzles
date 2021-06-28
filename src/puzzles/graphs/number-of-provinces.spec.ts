import {findCircleNum} from './number-of-provinces'

test('gets the number of provinces 1', () => {
  const isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]

  expect(findCircleNum(isConnected)).toEqual(2)
})

test('gets the number of provinces 2', () => {
  const isConnected = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]

  expect(findCircleNum(isConnected)).toEqual(3)
})

test('gets the number of provinces 3', () => {
  const isConnected = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]

  expect(findCircleNum(isConnected)).toEqual(1)
})


test('gets the number of provinces 4', () => {
  const isConnected = [
    [1, 0, 2, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
  ]

  expect(findCircleNum(isConnected)).toEqual(2)
})
