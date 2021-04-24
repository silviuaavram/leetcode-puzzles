/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
export function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0
  }

  let min = Math.min(prices[0], prices[1])
  let sum = prices[1] - prices[0]

  for (let index = 2; index < prices.length; index++) {
    const newSum = prices[index] - min
    sum = Math.max(sum, newSum)
    min = Math.min(min, prices[index])
  }

  return sum < 0 ? 0 : sum
};