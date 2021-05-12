import {largestRectangleArea} from './largest-rectangle-in-histogram'

test('largest area is 10', () => {
  const heights = [2, 1, 5, 6, 2, 3]

  expect(largestRectangleArea(heights)).toEqual(10)
})

test('largest area is 4', () => {
  const heights = [2, 4]

  expect(largestRectangleArea(heights)).toEqual(4)
})

test('largest area of empty array is 0', () => {
  const heights: number[] = []

  expect(largestRectangleArea(heights)).toEqual(0)
})

test('largest area is 12', () => {
  const heights = [2, 3, 5, 6, 2, 3]

  expect(largestRectangleArea(heights)).toEqual(12)
})
