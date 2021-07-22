/**
 * https://leetcode.com/problems/burst-balloons/
 */
export function maxCoins(nums: number[]): number {
  nums.unshift(1)
  nums.push(1)
  const solutions: number[][] = []

  for (let index = 0; index < nums.length; index++) {
    solutions.push(new Array(nums.length).fill(0))
  }

  function getCoins(start: number, end: number): number {
    if (end - start === 1) {
      return 0
    }

    if (solutions[start][end] > 0) {
      return solutions[start][end]
    }

    let max = 0

    for (let index = start + 1; index < end; index++) {
      max = Math.max(
        max,
        nums[start] * nums[end] * nums[index] +
          getCoins(start, index) +
          getCoins(index, end),
      )
    }

    solutions[start][end] = max

    return max
  }

  getCoins(0, nums.length - 1)

  return solutions[0][nums.length - 1]
}

function getCoinsWithMap(nums: number[]): number {
  const solutions = new Map<string, number>()

  function getCoins(baloons: number[]): number {
    if (!baloons.length) {
      return 0
    }

    const key = baloons.toString()

    if (solutions.has(key)) {
      return solutions.get(key)
    }

    let max = 0

    for (let index = 0; index < baloons.length; index++) {
      const coinsAfterPop =
        (baloons[index - 1] ?? 1) * (baloons[index + 1] ?? 1) * baloons[index]

      max = Math.max(
        max,
        coinsAfterPop +
          getCoins([...baloons.slice(0, index), ...baloons.slice(index + 1)]),
      )
    }

    solutions.set(key, max)

    return max
  }

  return getCoins(nums)
}
