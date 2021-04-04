/**
 * https://leetcode.com/problems/sort-colors/
 */
export function sortColors(nums: number[]): void {
  const colorMap = new Map<number, number>()

  for (let index = 0; index < nums.length; index++) {
    colorMap.set(nums[index], (colorMap.get(nums[index]) ?? 0) + 1)
  }

	const count0 = colorMap.get(0) ?? 0
	const count1 = colorMap.get(1) ?? 0
	const count2 = colorMap.get(2) ?? 0

	for (let index = 0; index < count0; index++) {
		nums[index] = 0
	}

	for (let index = 0; index < count1; index++) {
		nums[index + count0] = 1
	}

	for (let index = 0; index < count2; index++) {
		nums[index + count0 + count1] = 2
	}
}
