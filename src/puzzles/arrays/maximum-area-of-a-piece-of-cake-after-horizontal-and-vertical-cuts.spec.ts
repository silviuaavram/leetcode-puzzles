import {maxArea} from './maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts'

test('checks the max area 1', () => {
  const h = 5
  const w = 4
  const horizontalCuts = [1, 2, 4]
  const verticalCuts = [1, 3]

  expect(maxArea(h, w, horizontalCuts, verticalCuts)).toEqual(4)
})

test('checks the max area 2', () => {
  const h = 5
  const w = 4
  const horizontalCuts = [3, 1]
  const verticalCuts = [1]

  expect(maxArea(h, w, horizontalCuts, verticalCuts)).toEqual(6)
})

test('checks the max area 3', () => {
  const h = 5
  const w = 4
  const horizontalCuts = [3]
  const verticalCuts = [3]

  expect(maxArea(h, w, horizontalCuts, verticalCuts)).toEqual(9)
})

test('checks the max area 4', () => {
  const h = 1000000000
  const w = 1000000000
  const horizontalCuts = [2]
  const verticalCuts = [2]

  expect(maxArea(h, w, horizontalCuts, verticalCuts)).toEqual(81)
})

