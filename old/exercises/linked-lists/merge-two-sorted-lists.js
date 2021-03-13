/**
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */

const l1 = {val: 1, next: {val: 2, next: {val: 4, next: null}}}
const l2 = {val: 1, next: {val: 3, next: {val: 4, next: null}}}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) {
    return null
  }
  let mergedList = {}
  const head = mergedList

  while (l1 && l2) {
    const val1 = l1.val
    const val2 = l2.val

    if (val1 < val2) {
      mergedList.val = val1
      l1 = l1.next
    } else {
      mergedList.val = val2
      l2 = l2.next
    }

    mergedList.next = {}
    mergedList = mergedList.next
  }

  if (l1) {
    mergedList.val = l1.val
    mergedList.next = l1.next
  } else if (l2) {
    mergedList.val = l2.val
    mergedList.next = l2.next
  }

  return head
}

console.log(JSON.stringify(mergeTwoLists(l1, l2)))
