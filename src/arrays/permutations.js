/**
 * Given a collection of distinct integers, return all possible permutations.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 0) {
    return nums;
  }
  const acc = [];
  performPermute([], nums, acc);
  return acc;
};

/**
 *
 * @param {number[]} soFar
 * @param {number[]} remaining
 */
function performPermute(soFar, remaining, acc) {
  if (remaining.length === 1) {
    acc.push([...soFar, ...remaining]);
  }

  remaining.forEach((n, index) => {
    return performPermute(
      [...soFar, n],
      [...remaining.slice(0, index), ...remaining.slice(index + 1)],
      acc
    );
  });
}

console.log(permute([1, 2, 3]));
console.log(permute([]));
console.log(permute([1]));
