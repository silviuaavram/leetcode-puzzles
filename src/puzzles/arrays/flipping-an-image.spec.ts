import {flipAndInvertImage} from './flipping-an-image'

test('flips and inverts an image 1', () => {
  const image = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ]
  const expected = [
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]

  expect(flipAndInvertImage(image)).toEqual(expected)
})

test('flips and inverts an image 2', () => {
  const image = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ]
  const expected = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0],
  ]

  expect(flipAndInvertImage(image)).toEqual(expected)
})
