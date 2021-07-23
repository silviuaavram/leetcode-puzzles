/**
 * https://leetcode.com/problems/design-hashmap/
 */

interface Container {
  [key: number]: number
}

export class MyHashMap {
  private containers: Container[]
  private size: number
  constructor() {
    this.containers = []
    this.size = 769
  }

  put(key: number, value: number): void {
    const containerIndex = key % this.size

    if (this.containers[containerIndex] === undefined) {
      this.containers[containerIndex] = {}
    }

    this.containers[containerIndex][key] = value
  }

  get(key: number): number {
    const containerIndex = key % this.size

    if (this.containers[containerIndex] === undefined) {
      return -1
    }

    return this.containers[containerIndex][key] ?? -1
  }

  remove(key: number): void {
    const containerIndex = key % this.size

    if (this.containers[containerIndex] === undefined) {
      return
    }

    delete this.containers[containerIndex][key]
   }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
