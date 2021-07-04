import {isRectangleOverlap} from './rectangle-overlap'

test('checks rectangle overlap 1', () => {
  const rec1 = [0, 0, 2, 2]
  const rec2 = [1, 1, 3, 3]

  expect(isRectangleOverlap(rec1, rec2)).toEqual(true)
})

test('checks rectangle overlap 2', () => {
  const rec1 = [0, 0, 1, 1]
  const rec2 = [1, 0, 2, 1]

  expect(isRectangleOverlap(rec1, rec2)).toEqual(false)
})

test('checks rectangle overlap 3', () => {
  const rec1 = [0, 0, 1, 1]
  const rec2 = [2, 2, 3, 3]

  expect(isRectangleOverlap(rec1, rec2)).toEqual(false)
})

test('checks rectangle overlap 4', () => {
  const rec1 = [7, 8, 13, 15]
  const rec2 = [10, 8, 12, 20]

  expect(isRectangleOverlap(rec1, rec2)).toEqual(true)
})
