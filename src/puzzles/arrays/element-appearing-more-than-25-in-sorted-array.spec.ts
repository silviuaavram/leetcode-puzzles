import {findSpecialInteger} from './element-appearing-more-than-25-in-sorted-array'

test('finds 6 that appears more than 25% of the time', () => {
  const arr = [1, 2, 2, 6, 6, 6, 6, 7, 10]

  expect(findSpecialInteger(arr)).toEqual(6)
})

test('finds 1 that appears more than 25% of the time', () => {
  const arr = [1, 1]

  expect(findSpecialInteger(arr)).toEqual(1)
})

test('finds 4 that appears more than 25% of the time', () => {
  const arr = [4]

  expect(findSpecialInteger(arr)).toEqual(4)
})

test('finds 3 that appears more than 25% of the time', () => {
  const arr = [1, 2, 3, 3, 4, 5]

  expect(findSpecialInteger(arr)).toEqual(3)
})

test('throws an error if array is invalid', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]

  expect(() => findSpecialInteger(arr)).toThrowErrorMatchingInlineSnapshot(
    `"should not be here"`,
  )
})
