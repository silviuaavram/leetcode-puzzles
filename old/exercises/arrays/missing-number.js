/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const sum = nums.reduce((acc, num) => acc + num, 0)
	const sumWithNumber = (nums.length * (nums.length + 1)) / 2
	
  return sumWithNumber - sum
}

module.exports = missingNumber
