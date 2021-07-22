/**
 * https://leetcode.com/problems/rle-iterator/
 */
export class RLEIterator {
  private encoding: number[]
  constructor(encoding: number[]) {
    this.encoding = encoding
  }

  next(n: number): number {
    let toRemoveCount = n

    while (toRemoveCount > 0) {
      if (this.encoding.length === 0) {
        return -1
      }

      const [count, value] = this.encoding

      if (count > toRemoveCount) {
        this.encoding[0] = count - toRemoveCount

        return value
      } else if (count < toRemoveCount) {
        toRemoveCount -= count

        this.encoding.splice(0, 2)
      } else {
        this.encoding.splice(0, 2)

        return value
      }
    }

    throw new Error('should not end here')
  }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */
