const {getLinkedList, expect} = require('../../lib')

/**
 * Given a (singly) linked list with head node root, write a function to split the linked list into k consecutive linked list "parts".
 * The length of each part should be as equal as possible: no two parts should have a size differing by more than 1. This may lead to some parts being null.
 * The parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal parts occurring later.
 * Return a List of ListNode's representing the linked list parts that are formed.
 * Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  const parts = []
  let current = root

  if (!root) {
    for (let index = 0; index < k; index++) {
      parts.push(null)
    }
    return parts
  }

  let size = 0

  while (current) {
    size++
    current = current.next
  }

  const partSize = Math.floor(size / k)
  let partRest = size % k

  current = root

  for (let index = 0; index < k; index++) {
    parts.push(current)
    let jump = partSize + (partRest > 0 ? 1 : 0)

    if (partRest) {
      partRest--
    }

    for (let jindex = 1; jindex < jump; jindex++) {
      current = current.next
    }

    if (!current) {
      continue
    }

    const aux = current

    current = current.next
    aux.next = null
  }

  return parts
}

expect(splitListToParts(getLinkedList(1, 2, 3), 5)).toEqual([
  getLinkedList(1),
  getLinkedList(2),
  getLinkedList(3),
  null,
  null,
])
expect(splitListToParts(getLinkedList(1, 2, 3, 4, 5, 6, 7), 2)).toEqual([
  getLinkedList(1, 2, 3, 4),
  getLinkedList(5, 6, 7),
])
expect(
  splitListToParts(getLinkedList(1, 2, 3, 4, 5, 6, 7, 8, 9), 3),
).toEqual([
  getLinkedList(1, 2, 3),
  getLinkedList(4, 5, 6),
  getLinkedList(7, 8, 9),
])
expect(splitListToParts(null, 2)).toEqual([null, null])
