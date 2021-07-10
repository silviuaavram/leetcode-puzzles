/**
 * https://leetcode.com/problems/random-pick-with-weight/
 */
export class Solution {
  private weights: number[]
  private totalWeight: number

  constructor(w: number[]) {
    let sum = 0
    this.weights = []

    for (let index = 0; index < w.length; index++) {
      sum += w[index]
      this.weights[index] = sum
    }

    this.totalWeight = sum
  }

  pickIndex(): number {
    const random = Math.floor(Math.random() * this.totalWeight)
    let start = 0
    let end = this.weights.length - 1

    while (start < end) {
      const mid = Math.floor((start + end) / 2)

      if (this.weights[mid] < random) {
        start = mid + 1
      } else {
        end = mid
      }
    }

    return start
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
