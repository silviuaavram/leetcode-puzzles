import {solution} from './find-the-celebrity'

test('finds the celebrity 1', () => {
  const graph = [
    [1, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]
  function knows(a: number, b: number): boolean {
    return graph[a][b] === 1
  }
  const result = solution(knows)

  expect(result(3)).toEqual(1)
})

test('finds the celebrity 2', () => {
  const graph = [
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]
  function knows(a: number, b: number): boolean {
    return graph[a][b] === 1
  }
  const result = solution(knows)

  expect(result(3)).toEqual(-1)
})

test('finds the celebrity 3', () => {
  const graph = [
    [1, 0],
    [1, 1],
  ]
  function knows(a: number, b: number): boolean {
    return graph[a][b] === 1
  }
  const result = solution(knows)

  expect(result(2)).toEqual(0)
})

test('finds the celebrity 4', () => {
  const graph = [
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1],
  ]
  function knows(a: number, b: number): boolean {
    return graph[a][b] === 1
  }
  const result = solution(knows)

  expect(result(5)).toEqual(3)
})
