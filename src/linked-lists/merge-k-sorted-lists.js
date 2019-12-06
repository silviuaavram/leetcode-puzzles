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
 */

const l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
const l3 = { val: 8, next: null };
const l4 = { val: 9, next: { val: 9, next: null } };
const l5 = { val: 0, next: null };
const l6 = { val: 0, next: null };

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
  const arr = [];

  lists.forEach(list => {
    while (list) {
      arr.push(list.val);
      list = list.next;
    }
  });

  if (arr.length === 0) {
    return null
  }

  const mergedList = {}
  const head = mergedList
  arr.sort((a,b) => a - b)

  arr.reduce((acc, val, index) => {
    acc.val = val;
    acc.next = index === arr.length -1 ? null : {};
    return acc.next;
  }, mergedList);

  return head
};

console.log(JSON.stringify(mergeKLists([l1, l2, l3, l4, l5, l6])))
