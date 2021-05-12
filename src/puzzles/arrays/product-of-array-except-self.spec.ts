import {productExceptSelf} from './product-of-array-except-self'

test('calculates product 1', () => {
  const nums = [1, 2, 3, 4]
  const expected = [24, 12, 8, 6]

  expect(productExceptSelf(nums)).toEqual(expected)
})

test('calculates product 2', () => {
  const nums = [-1, 1, 0, -3, 3]
  const expected = [0, 0, 9, 0, 0]

  expect(productExceptSelf(nums)).toEqual(expected)
})

test('calculates product 3', () => {
  const nums = [-1, 1, 0, -3, 0]
  const expected = [0, 0, 0, 0, 0]

  expect(productExceptSelf(nums)).toEqual(expected)
})
