import {Vector2D} from './flatten-2d-vector'

test('iterator works 1', () => {
  const nums = [[1, 2], [3], [4]]
  const iterator = new Vector2D(nums)

  expect(iterator.next()).toEqual(1)
  expect(iterator.next()).toEqual(2)
  expect(iterator.next()).toEqual(3)
  expect(iterator.hasNext()).toEqual(true)
  expect(iterator.hasNext()).toEqual(true)
  expect(iterator.next()).toEqual(4)
  expect(iterator.hasNext()).toEqual(false)
})

test('iterator works 2', () => {
  const nums = [[], [], [1, 2], [3], [4], []]
  const iterator = new Vector2D(nums)

  expect(iterator.next()).toEqual(1)
  expect(iterator.next()).toEqual(2)
  expect(iterator.next()).toEqual(3)
  expect(iterator.hasNext()).toEqual(true)
  expect(iterator.hasNext()).toEqual(true)
  expect(iterator.next()).toEqual(4)
  expect(iterator.hasNext()).toEqual(false)
})
