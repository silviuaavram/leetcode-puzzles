import {maxScore} from './maximum-points-you-can-obtain-from-cards'

test('gets the max points 1', () => {
  const cardPoints = [1, 2, 3, 4, 5, 6, 1]
  const k = 3

  expect(maxScore(cardPoints, k)).toEqual(12)
})

test('gets the max points 2', () => {
  const cardPoints = [2, 2, 2]
  const k = 2

  expect(maxScore(cardPoints, k)).toEqual(4)
})

test('gets the max points 3', () => {
  const cardPoints = [9, 7, 7, 9, 7, 7, 9]
  const k = 7

  expect(maxScore(cardPoints, k)).toEqual(55)
})

test('gets the max points 4', () => {
  const cardPoints = [1, 1000, 1]
  const k = 1

  expect(maxScore(cardPoints, k)).toEqual(1)
})

test('gets the max points 5', () => {
  const cardPoints = [1, 79, 80, 1, 1, 1, 200, 1]
  const k = 3

  expect(maxScore(cardPoints, k)).toEqual(202)
})

test('gets the max points 6', () => {
  const cardPoints = [
    61,
    16,
    51,
    40,
    37,
    21,
    96,
    70,
    13,
    98,
    28,
    75,
    74,
    87,
    68,
    55,
    95,
    24,
    46,
    87,
  ]
  const k = 19

  expect(maxScore(cardPoints, k)).toEqual(1129)
})
