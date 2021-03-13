/**
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 * Example:
 * Input:
 * [
 *  1->4->5,
 *  1->3->4,
 *  2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 * 
 * https://leetcode.com/problems/merge-k-sorted-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const arr = []

  lists.forEach(list => {
    while (list) {
      arr.push(list.val)
      list = list.next
    }
  })

  if (arr.length === 0) {
    return null
  }

  const mergedList = {}
  const head = mergedList
  arr.sort((a, b) => a - b)

  arr.reduce((acc, val, index) => {
    acc.val = val
    acc.next = index === arr.length - 1 ? null : {}
    return acc.next
  }, mergedList)

  return head
}

expect(mergeKLists([
  getLinkedList(2, 4, 6),
  getLinkedList(5, 6, 8),
  getLinkedList(8),
  getLinkedList(4, 5, 7),
  getLinkedList(1, 2, 3),
  getLinkedList(3, 4, 9),
])).toEqual(getLinkedList(1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9))
