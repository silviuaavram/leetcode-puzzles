import {carFleet} from './car-fleet'

test('cars arrive at the destination 1', () => {
  const target = 12
  const position = [10, 8, 0, 5, 3]
  const speed = [2, 4, 1, 1, 3]

  expect(carFleet(target, position, speed)).toEqual(3)
})

test('cars arrive at the destination 2', () => {
  const target = 12
  const position = [8, 4, 3, 2, 1]
  const speed = [1, 10, 20, 30, 40]

  expect(carFleet(target, position, speed)).toEqual(1)
})

test('cars arrive at the destination 3', () => {
  const target = 12
  const position: number[] = []
  const speed: number[] = []

  expect(carFleet(target, position, speed)).toEqual(0)
})

test('cars arrive at the destination 4', () => {
  const target = 12
  const position = [5, 1, 3]
  const speed = [2, 4, 3]

  expect(carFleet(target, position, speed)).toEqual(1)
})

test('cars arrive at the destination 5', () => {
  const target = 12
  const position = [11, 1, 3]
  const speed = [4, 9, 7]

  expect(carFleet(target, position, speed)).toEqual(2)
})

test('cars arrive at the destination 6', () => {
  const target = 31
  const position = [5, 26, 18, 25, 29, 21, 22, 12, 19, 6]
  const speed = [7, 6, 6, 4, 3, 4, 9, 7, 6, 4]

  expect(carFleet(target, position, speed)).toEqual(6)
})

test('cars arrive at the destination 7', () => {
  const target = 10
  const position = [8, 3, 7, 4, 6, 5]
  const speed = [4, 4, 4, 4, 4, 4]

  expect(carFleet(target, position, speed)).toEqual(6)
})

test('cars arrive at the destination 7', () => {
  const target = 21
  const position = [1, 15, 6, 8, 18, 14, 16, 2, 19, 17, 3, 20, 5]
  const speed = [8, 5, 5, 7, 10, 10, 7, 9, 3, 4, 4, 10, 2]

  expect(carFleet(target, position, speed)).toEqual(7)
})
