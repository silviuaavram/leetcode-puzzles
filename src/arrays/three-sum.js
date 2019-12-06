/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 */

function isDuplicateArray(sum, num, map) {
  const array = map.get(sum);
  for (const [a, b] of array) {
    if (a === num || b === num) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let zero = false;
  const solutions = [];
  const negOne = new Map();
  const negTwo = new Map();
  const posOne = new Map();
  const posTwo = new Map();

  const addTwoNumbers = (oneMap, twoMap, num) => {
    oneMap.forEach((value, other) => {
      const sum = other + num;
      if (twoMap.has(sum)) {
        if (!isDuplicateArray(sum, num, twoMap)) {
          twoMap.get(sum).push([num, other]);
        }
      } else {
        twoMap.set(sum, [[num, other]]);
      }
    });
  };

  nums.forEach(num => {
    if (num < 0) {
      if (negOne.has(num)) {
        if (negOne.get(num) === true) {
          // nothing
        } else {
          addTwoNumbers(negOne, negTwo, num);
          negOne.set(num, true);
        }
      } else {
        addTwoNumbers(negOne, negTwo, num);
        negOne.set(num, false);
      }
    } else {
      if (posOne.has(num)) {
        if (posOne.get(num) === true) {
          if (num === 0 && !zero) {
            zero = true;
            solutions.push([0, 0, 0]);
          }
          // nothing
        } else {
          addTwoNumbers(posOne, posTwo, num);
          posOne.set(num, true);
        }
      } else {
        addTwoNumbers(posOne, posTwo, num);
        posOne.set(num, false);
      }
    }
  });

  negOne.forEach((value, key) => {
    if (posTwo.has(0 - key)) {
      posTwo.get(0 - key).forEach(arr => {
        solutions.push([...arr, key]);
      });
    }
  });

  posOne.forEach((value, key) => {
    if (negTwo.has(0 - key)) {
      negTwo.get(0 - key).forEach(arr => {
        solutions.push([...arr, key]);
      });
    }
  });

  return solutions;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -4]));
