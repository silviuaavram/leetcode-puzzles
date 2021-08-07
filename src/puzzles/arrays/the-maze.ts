/**
 * https://leetcode.com/problems/the-maze/
 */

type Direction = 'left' | 'right' | 'up' | 'down'

export function hasPath(
  maze: number[][],
  start: number[],
  destination: number[],
): boolean {
  const visited: boolean[][] = []
  for (let index = 0; index < maze.length; index++) {
    visited.push(new Array(maze[0].length).fill(false))
  }
  function getNextPosition(
    i: number,
    j: number,
    direction: Direction,
  ): [number, number, Direction] {
    let nextI = direction === 'up' ? i - 1 : direction === 'down' ? i + 1 : i
    let nextJ = direction === 'left' ? j - 1 : direction === 'right' ? j + 1 : j

    if (
      nextI < 0 ||
      nextJ < 0 ||
      nextI === maze.length ||
      nextJ === maze[0].length ||
      maze[nextI][nextJ] === 1
    ) {
      return [i, j, direction]
    }

    return getNextPosition(nextI, nextJ, direction)
  }

  function visitNode(i: number, j: number, directionFrom?: Direction): boolean {
    if (visited[i][j]) {
      return false
    }
    visited[i][j] = true
    if (i === destination[0] && j === destination[1]) {
      return true
    }

    const nextDirections: [number, number, Direction][] = []

    if (i - 1 >= 0 && maze[i - 1][j] === 0 && directionFrom !== 'down') {
      nextDirections.push(getNextPosition(i - 1, j, 'up'))
    }
    if (j - 1 >= 0 && maze[i][j - 1] === 0 && directionFrom !== 'right') {
      nextDirections.push(getNextPosition(i, j - 1, 'left'))
    }
    if (i + 1 < maze.length && maze[i + 1][j] === 0 && directionFrom !== 'up') {
      nextDirections.push(getNextPosition(i + 1, j, 'down'))
    }
    if (
      j + 1 < maze[0].length &&
      maze[i][j + 1] === 0 &&
      directionFrom !== 'left'
    ) {
      nextDirections.push(getNextPosition(i, j + 1, 'right'))
    }

    for (const nextDirection of nextDirections) {
      const result = visitNode(...nextDirection)

      if (result) {
        return true
      }
    }

    return false
  }

  return visitNode(start[0], start[1])
}
