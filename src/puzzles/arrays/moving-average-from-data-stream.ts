/**
 * https://leetcode.com/problems/moving-average-from-data-stream/
 */

export class MovingAverage {
  private numbers: number[]
  private size: number
  private sum: number

  constructor(size: number) {
    this.size = size
    this.sum = 0
    this.numbers = []
  }

  next(val: number): number {
    if (this.numbers.length >= this.size) {
      this.sum -= this.numbers.shift()
    }
    this.numbers.push(val)
    this.sum += val

    return this.sum / this.numbers.length
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
