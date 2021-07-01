export function findDisappearedNumbers(nums: number[]): number[] {
  for (let index = 0; index < nums.length; index++) {
    const positionToCheck = Math.abs(nums[index]) - 1

    if (nums[positionToCheck] > 0) {
      nums[positionToCheck] *= -1
    }
  }

  return nums.reduce((acc, num, index) => {
    if (num > 0) {
      acc.push(index + 1)
    }

    return acc
  }, [])
}
