/**
 * https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
 */
export class SparseVector {
  private numbers: Map<number, number>
  constructor(nums: number[]) {
    this.numbers = new Map()

    for (let index = 0; index < nums.length; index++) {
      if (nums[index] !== 0) {
        this.numbers.set(index, nums[index])
      }
      
    }
  }

  get(index: number): number {
    return this.numbers.get(index) ?? 0
  }

// Return the dotProduct of two sparse vectors
  dotProduct(vec: SparseVector): number {
    let result = 0
    this.numbers.forEach((n, index) => {
      result += (n * vec.get(index))
    })

    return result
  }
}

/**
* Your SparseVector object will be instantiated and called as such:
* var v1 = new SparseVector(nums1)
* var v2 = new SparseVector(nums1)
* var ans = v1.dotProduct(v2)
*/
