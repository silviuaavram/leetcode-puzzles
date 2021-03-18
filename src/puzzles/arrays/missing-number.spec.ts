import {missingNumber} from './missing-number'

test('returns 2', () => {
  expect(missingNumber([3, 0, 1])).toEqual(2)
})

test('returns 1', () => {
  expect(missingNumber([0])).toEqual(1)
})

test('returns 8', () => {
  expect(missingNumber([5, 2, 1, 0, 9, 7, 3, 6, 4])).toEqual(8)
})