/**
 * https://leetcode.com/problems/lru-cache/
 */

export class LRUCache {
  constructor(capacity: number) {
    this.cache = new Map<number, number>()
    this.capacity = capacity
  }

  private cache: Map<number, number>
  private capacity: number

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1
    }

    const value = this.cache.get(key)

    this.cache.delete(key)
    this.cache.set(key, value)

    return value
  }

  put(key: number, value: number): void {
    this.cache.delete(key)
    this.cache.set(key, value)

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
