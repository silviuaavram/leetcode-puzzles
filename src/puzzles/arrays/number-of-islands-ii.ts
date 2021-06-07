/**
 * https://leetcode.com/problems/number-of-islands-ii/
 */
export function numIslands2(
  m: number,
  n: number,
  positions: number[][],
): number[] {
  const islands = new Map<number, number[][]>()
  const map: number[][] = []
  const result: number[] = []

  function checkNeighbours(index: number): void {
    const [i, j] = positions[index]
    const neighbourOffsets = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ]

    for (const [offsetI, offsetJ] of neighbourOffsets) {
      const neighbourI = i + offsetI
      const neighbourJ = j + offsetJ

      if (
        neighbourI >= 0 &&
        neighbourJ >= 0 &&
        neighbourI < m &&
        neighbourJ < n &&
        map[neighbourI][neighbourJ] !== 0
      ) {
        const value = map[i][j]
        const newValue = map[neighbourI][neighbourJ]

        if (value === newValue) {
          continue
        }

        const positions = islands.get(value)
        islands.delete(value)

        for (const [positionI, positionJ] of positions) {
          map[positionI][positionJ] = newValue
        }

        islands.get(newValue).push(...positions)
      }
    }
  }

  for (let index = 0; index < m; index++) {
    map.push(new Array(n).fill(0))
  }

  for (let index = 0; index < positions.length; index++) {
    const position = positions[index]
    const i = position[0]
    const j = position[1]

      if (map[i][j] === 0) {
      islands.set(index + 1, [position])
      map[i][j] = index + 1
      checkNeighbours(index)
    }

    result.push(islands.size)
  }

  return result
}
