/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 */

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {val: 3, next: {val: 7, next: {val: 8, next: null}}},
  },
}
const l2 = {
  val: 5,
  next: {val: 3, next: {val: 7, next: {val: 8, next: null}}},
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null
  }

  const lengthA = getLength(headA)
  const lengthB = getLength(headB)
  let [shorterList, longerList] =
    lengthA > lengthB ? [headB, headA] : [headA, headB]

  for (let i = 0; i < Math.abs(lengthA - lengthB); i++) {
    longerList = longerList.next
  }

  while (longerList) {
    if (longerList === shorterList) {
      return longerList
    }

    longerList = longerList.next
    shorterList = shorterList.next
  }

  return null
}

function getLength(list) {
  let length = 0
  let aux = list
  while (aux) {
    length++
    aux = aux.next
  }
  return length
}

console.log(getIntersectionNode(l1, l2))
