/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return []
  }
  let queue = [root]
  const result = []

  queue = [root]

  while (queue.length) {
    const newQueue = []
    const levelResult = []

    queue.forEach(node => {
      if (node.left) {
        newQueue.push(node.left)
      }

      if (node.right) {
        newQueue.push(node.right)
      }

      levelResult.push(node)
    })

    queue = newQueue
    result.push(levelResult.map(node => node.val))
  }

  return result
}

const t1 = {
  val: 1,
  left: {val: 2, left: {val: 4}, right: {val: 5}},
  right: {val: 3},
}

console.log(levelOrder(t1))
