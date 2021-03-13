/**
 * Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
 * The same repeated number may be chosen from candidates unlimited number of times.
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 *
 * https://leetcode.com/problems/combination-sum/
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  const queue = []

  queue.push([[], candidates])

  candidates.sort((a, b) => a - b)

  while (queue.length) {
    const [[nums, rest]] = queue.splice(0, 1)
    const sum = nums.reduce((acc, num) => num + acc, 0)

    if (sum < target && sum + rest[0] <= target) {
      queue.push([[...nums, rest[0]], rest])
      queue.push([nums, rest.slice(1)])
    } else if (sum === target) {
      result.push(nums)
    }
  }

  return result
}

expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]])
expect(combinationSum([2, 3, 5], 8)).toEqual([
  [2, 2, 2, 2],
  [2, 3, 3],
  [3, 5],
])
