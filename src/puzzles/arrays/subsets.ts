/**
 * https://leetcode.com/problems/subsets/
 */

export function subsets(nums: number[]): number[][] {
  const bins: string[] = []

  for (let index = 0; index < Math.pow(2, nums.length); index++) {
    bins.push((index >>> 0).toString(2))
  }

  const subsets = bins.reduce((acc, bin) => {
    acc.push(nums.filter((num, i) => bin[bin.length - 1 - i] === '1'))

    return acc
  }, [])

  return subsets
}
