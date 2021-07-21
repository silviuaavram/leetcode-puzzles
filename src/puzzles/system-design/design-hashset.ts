import {ListNode} from 'utils'

/**
 * https://leetcode.com/problems/design-hashset/
 */
export class MyHashSet {
  private size: number
  private containers: number[][]

  constructor() {
    this.size = 769
    this.containers = []
  }

  add(key: number): void {
    if (this.contains(key)) {
      return
    }

    const containerIndex = key % this.size

    if (this.containers[containerIndex] === undefined) {
      this.containers[containerIndex] = []
    }

    this.containers[containerIndex].push(key)
  }

  remove(key: number): void {
    const containerIndex = key % this.size

    if (!this.containers[containerIndex]) {
      return
    }
    
    const indexToDelete = this.containers[containerIndex].indexOf(key)

    if (indexToDelete > -1) {
      this.containers[containerIndex].splice(indexToDelete, 1)
    }
  }

  contains(key: number): boolean {
    const containerIndex = key % this.size
    const container = this.containers[containerIndex]

    return !!(container && container.includes(key))
  }
}

class MyHashSetLinkedList {
  private size: number
  private containers: ListNode[]

  constructor() {
    this.size = 769
    this.containers = new Array(this.size).fill(null)
  }

  add(key: number): void {
    const containerIndex = key % this.size

    if (this.containers[containerIndex] !== null) {
      let current = this.containers[containerIndex]

      // no duplicates
      if (current.val === key) {
        return
      }

      while (current.next) {
        current = current.next

        // no duplicates
        if (current.val === key) {
          return
        }
      }

      current.next = {val: key, next: null}
    } else {
      this.containers[containerIndex] = {val: key, next: null}
    }
  }

  remove(key: number): void {
    const containerIndex = key % this.size
    let current = this.containers[containerIndex]

    if (!current) {
      return
    }

    if (current.val === key) {
      this.containers[containerIndex] = current.next
      return
    }

    while (current.next) {
      if (current.next.val === key) {
        current.next = current.next.next
        return
      }

      current = current.next
    }
  }

  contains(key: number): boolean {
    const containerIndex = key % this.size
    let current = this.containers[containerIndex]

    while (current) {
      if (current.val === key) {
        return true
      }
    }

    return false
  }
}


/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
