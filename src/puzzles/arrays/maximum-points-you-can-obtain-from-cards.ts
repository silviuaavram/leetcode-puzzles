/**
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 */
export function maxScore(cardPoints: number[], k: number): number {
  let sum = cardPoints.slice(0, k).reduce((acc, num) => acc + num, 0)
  let maxSum = sum

  for (
    let index = 0;
    index < k;
    index++
  ) {
    sum =
      sum -
      cardPoints[k - 1 - index] +
      cardPoints[cardPoints.length - 1 - index]
    maxSum = Math.max(sum, maxSum)
  }

  return maxSum
}
