/**
 * https://leetcode.com/problems/product-of-array-except-self/
 */

export function productExceptSelf(nums: number[]): number[] {
  const leftProducts = [1]
  const rightProducts = [1]

  for (let index = 0; index < nums.length - 1; index++) {
    leftProducts.push(leftProducts[index] * nums[index])
    rightProducts.unshift(rightProducts[0] * nums[nums.length - 1 - index])
  }

  const results: number[] = []

  for (let index = 0; index < nums.length; index++) {
    const result = leftProducts[index] * rightProducts[index]
    results.push(result === -0 ? 0 : result)
  }

  return results
}

function productExceptSelfSubOptiomal(nums: number[]): number[] {
  let zeroIndex
  let product = 1

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      if (zeroIndex === undefined) {
        zeroIndex = index
      } else {
        return new Array(nums.length).fill(0)
      }
    } else {
      product *= nums[index]
    }
  }

  if (zeroIndex === undefined) {
    return nums.map(num => product / num)
  } else {
    const result = new Array(nums.length).fill(0)
    result[zeroIndex] = product

    return result
  }
}
