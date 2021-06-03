/**
 * https://leetcode.com/problems/walls-and-gates/
 */
/**
 Do not return anything, modify rooms in-place instead.
 */
export function wallsAndGates(rooms: number[][]): void {
  const visitedGates = new Set<string>()
  const LONGEST_DISTANCE = 2147483647

  function visitNeighbours(i: number, j: number, distance: number) {
    visitNode(i - 1, j, distance)
    visitNode(i, j - 1, distance)
    visitNode(i, j + 1, distance)
    visitNode(i + 1, j, distance)
  }

  function visitNode(i: number, j: number, distance = LONGEST_DISTANCE): void {
    if (i < 0 || j < 0 || i === rooms.length || j === rooms[0].length) {
      return
    }

    switch (rooms[i][j]) {
      case -1:
        // do nothing
        return
      case 0:
        // gate
        if (!visitedGates.has(`${i},${j}`)) {
          visitedGates.add(`${i},${j}`)
          visitNeighbours(i, j, 1)
        }
      default:
        if (rooms[i][j] > distance) {
          rooms[i][j] = distance
          visitNeighbours(i, j, distance + 1)
        }
    }
  }

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      visitNode(i, j)
    }
  }
}
