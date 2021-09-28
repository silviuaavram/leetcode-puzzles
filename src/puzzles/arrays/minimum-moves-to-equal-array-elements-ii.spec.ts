import {minMoves2} from './minimum-moves-to-equal-array-elements-ii'

test('minimum moves to equal elements 1', () => {
  const nums = [1,2,3]

  expect(minMoves2(nums)).toEqual(2)
})

test('minimum moves to equal elements 2', () => {
  const nums = [1,10,2,9]

  expect(minMoves2(nums)).toEqual(16)
})

test('minimum moves to equal elements 3', () => {
  const nums = [1,0,0,8,6]

  expect(minMoves2(nums)).toEqual(14)
})

