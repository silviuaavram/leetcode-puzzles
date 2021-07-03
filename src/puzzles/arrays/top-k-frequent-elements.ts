/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 */

export function topKFrequent(nums: number[], k: number): number[] {
  const frequencies = new Map<number, number>()

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]

    frequencies.set(num, (frequencies.get(num) ?? 0) + 1)
  }

  return (
    Array.from(frequencies.entries())
      // could also use a MaxHeap with sort function based on the values from the map
      .sort((f1, f2) => f2[1] - f1[1])
      .slice(0, k)
      .map(f => f[0])
  )
}
