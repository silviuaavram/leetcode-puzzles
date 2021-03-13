/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

var twoSumBruteForce = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j]
      }
    }
  }
  return null
}

var twoSumHash = function(nums, target) {
  const map = {}
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]
    const compl = target - num

    if (map[compl] !== undefined) {
      return [map[compl], index]
    }

    map[num] = index
  }
}

var twoSum = twoSumHash

console.log(twoSum([2, 7, 11, 15], 9))
