/**
 * https://leetcode.com/problems/time-based-key-value-store/
 */
export class TimeMap {
  // BST instead of array, maybe?
  private timeMap: Map<string, {value: string; timestamp: number}[]>
  constructor() {
    this.timeMap = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    const newValue = {value, timestamp}
    if (!this.timeMap.has(key)) {
      this.timeMap.set(key, [newValue])
    } else {
      const values = this.timeMap.get(key)
      let added = false
      for (let index = 0; index < values.length; index++) {
        if (timestamp < values[index].timestamp) {
          values.splice(index, 0, newValue)
          added = true
          break
        }
      }

      if (!added) {
        values.push(newValue)
      }
    }
  }

  get(key: string, timestamp: number): string {
    if (!this.timeMap.has(key)) {
      return ''
    }

    const values = this.timeMap.get(key)
    let index
    for (index = 0; index < values.length; index++) {
      if (values[index].timestamp > timestamp) {
        break
      }
    }

    return index === 0 ? '' : values[index - 1].value
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
