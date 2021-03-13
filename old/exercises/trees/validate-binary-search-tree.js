/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * Assume a BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) {
    return true
  }

  const queue = [root]

  return true
}

const t1 = {val: 2, left: {val: 1}, right: {val: 3}}
const t2 = {
  val: 5,
  left: {val: 1},
  right: {val: 4, left: {val: 3}, right: {val: 6}},
}
const t3 = {
  val: 10,
  left: {val: 5},
  right: {val: 15, left: {val: 6}, right: {val: 20}},
}

console.log(isValidBST(t1))
console.log(isValidBST(t2))
console.log(isValidBST(t3))
