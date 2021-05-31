/**
 * https://leetcode.com/problems/diagonal-traverse-ii/
 */
export function findDiagonalOrder(nums: number[][]): number[] {
  const result: number[] = []
  const diagonals = new Map<number, number[]>()

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      const diagonalIndex = i + j
      
      if (!diagonals.has(diagonalIndex)) {
        diagonals.set(diagonalIndex, [])
      }

      diagonals.get(diagonalIndex).push(nums[i][j])
    }
  }

  for (let index = 0; index < diagonals.size; index++) {
    result.push(...diagonals.get(index).reverse())
  }


  return result
}
