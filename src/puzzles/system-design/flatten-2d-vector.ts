/**
 * https://leetcode.com/problems/flatten-2d-vector/
 */
export class Vector2D {
  private vec: number[][]
  private rowIndex: number
  private colIndex: number

  constructor(vec: number[][]) {
    this.vec = vec
    this.rowIndex = 0
    this.colIndex = 0
  }

  next(): number {
    if (this.hasNext()) {
      return this.vec[this.rowIndex][this.colIndex++]
    } else {
      return null
    }
  }

  hasNext(): boolean {
    if (this.rowIndex === this.vec.length) {
      return false
    }

    if (this.colIndex === this.vec[this.rowIndex].length) {
      this.rowIndex++
      this.colIndex = 0

      return this.hasNext()
    }

    return true
  }
}

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
