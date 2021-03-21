/**
 * https://leetcode.com/problems/permutations/
 */

function permuteGenerator(soFar: number[], nums: number[], acc: number[][]) {
  if (nums.length === 2) {
    acc.push([...soFar, nums[0], nums[1]])
    acc.push([...soFar, nums[1], nums[0]])
  } else {
    for (let index = 0; index < nums.length; index++) {
      permuteGenerator(
        [...soFar, nums[index]],
        [...nums.slice(0, index), ...nums.slice(index + 1)],
        acc,
      )
    }
  }
}

export function permute(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [nums]
  }

  const permutations: number[][] = []
  permuteGenerator([], nums, permutations)

  return permutations
}
