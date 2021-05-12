import {trap} from './trapping-rain-water'

test('should trap 6 rain water', () => {
  const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  const expected = 6

  expect(trap(height)).toEqual(expected)
})

test('should trap 9 rain water', () => {
  const height = [4, 2, 0, 3, 2, 5]
  const expected = 9

  expect(trap(height)).toEqual(expected)
})
