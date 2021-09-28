/**
 * https://leetcode.com/problems/brick-wall/
 */
export function leastBricks(wall: number[][]): number {
  const sums: number[][] = []

  for (let i = 0; i < wall.length; i++) {
    const rowSums: number[] = []

    for (let j = 0; j < wall[i].length; j++) {
      rowSums.push((rowSums[j - 1] ?? 0) + wall[i][j])
    }

    sums.push(rowSums)
  }

  const edgesMap = new Map<number, number>()

  for (let i = 0; i < sums.length; i++) {
    for (let j = 0; j < sums[i].length - 1; j++) {
      edgesMap.set(sums[i][j], (edgesMap.get(sums[i][j]) ?? 0) + 1)
    }
  }

  return edgesMap.size
    ? sums.length -
        Array.from(edgesMap.values()).reduce(
          (acc, val) => Math.max(acc, val),
          0,
        )
    : wall.length
}
