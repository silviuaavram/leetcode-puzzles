/**
 *
 * @param {number[]} nodes
 */
module.exports = function LinkedList(nodes) {
  this.list = nodes && nodes.length ? {val: nodes[0], next: null} : null
  this.length = nodes.length
  let current = this.list

  for (let i = 1; i < nodes.length; i++) {
    current.next = {val: nodes[i], next: null}
    current = current.next
  }

  this.toString = function() {
    const values = []
    let current = this.list

    while (current) {
      values.push(current.val)
      current = current.next
    }

    return values
  }

  this.bubbleSort = function() {
    let current
    let previous

    for (let i = 0; i < this.length - 1; i++) {
      current = this.list
      previous = null
      for (let j = 0; j < this.length - 1; j++) {
        if (current.val > current.next.val) {
          if (previous) {
            previous.next = current.next
            current.next = previous.next.next
            previous.next.next = current
            previous = previous.next
          } else {
            this.list = current.next
            current.next = this.list.next
            this.list.next = current
            previous = this.list
          }
        } else {
          previous = current
          current = current.next
        }
      }
    }
  }
}
