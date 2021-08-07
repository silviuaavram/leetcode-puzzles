import {connectSticks} from './minimum-cost-to-connect-sticks'

test('connects the sticks 1', () => {
  const sticks = [2, 4, 3]

  expect(connectSticks(sticks)).toEqual(14)
})

test('connects the sticks 2', () => {
  const sticks = [1, 8, 3, 5]

  expect(connectSticks(sticks)).toEqual(30)
})

test('connects the sticks 3', () => {
  const sticks = [5]

  expect(connectSticks(sticks)).toEqual(0)
})

test('connects the sticks 4', () => {
  const sticks = [3354, 4316, 3259, 4904, 4598, 474, 3166, 6322, 8080, 9009]

  expect(connectSticks(sticks)).toEqual(151646)
})
