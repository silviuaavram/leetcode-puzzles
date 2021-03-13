/**
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * InOrder: Left -> Root -> Right
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = []
  const queue = [root]
  if (!root) {
    return []
  }
  while (queue.length) {
    let current = queue[queue.length - 1]

    if (current.left && result.indexOf(current.left) < 0) {
      queue.push(current.left)
      continue
    }

    result.push(current)
    queue.pop()

    if (current.right) {
      queue.push(current.right)
      continue
    }
  }

  return result.map(r => r.val)
}

const t1 = {
  val: 1,
  left: {val: 2, left: {val: 4}, right: {val: 5}},
  right: {val: 3},
}

console.log(inorderTraversal(t1))
