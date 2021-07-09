import {findJudge} from './find-the-town-judge'

test('finds the judge 1', () => {
  const n = 2
  const trust = [[1, 2]]

  expect(findJudge(n, trust)).toEqual(2)
})

test('finds the judge 2', () => {
  const n = 3
  const trust = [
    [1, 3],
    [2, 3],
  ]

  expect(findJudge(n, trust)).toEqual(3)
})

test('finds the judge 3', () => {
  const n = 3
  const trust = [
    [1, 3],
    [2, 3],
    [3, 1],
  ]

  expect(findJudge(n, trust)).toEqual(-1)
})

test('finds the judge 4', () => {
  const n = 3
  const trust = [
    [1, 2],
    [2, 3],
  ]

  expect(findJudge(n, trust)).toEqual(-1)
})

test('finds the judge 5', () => {
  const n = 4
  const trust = [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ]

  expect(findJudge(n, trust)).toEqual(3)
})
