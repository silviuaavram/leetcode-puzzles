/**
 * https://leetcode.com/problems/insert-delete-getrandom-o1/
 */
export class RandomizedSet {
  private map: Map<number, number>
  private values: number[]

  constructor() {
    this.map = new Map()
    this.values = []
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false
    }

    this.map.set(val, this.values.length)
    this.values.push(val)

    return true
  }

  // 5: 0, 3: 1, 6: 2
  // 5, 3, 6

  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false
    }

    const index = this.map.get(val)
    const lastValue  = this.values.pop()
    this.map.delete(val)

    if (lastValue !== val) {
      this.values[index] = lastValue
      this.map.set(lastValue, index)
    }

    return true
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.values.length)

    return this.values[randomIndex]
  }
}

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/