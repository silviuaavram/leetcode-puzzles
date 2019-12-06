/**
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
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
var zigzagLevelOrder = function(root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  const result = [];

  while (queue.length) {
    const newQueue = [];
    const levelResult = []

    queue.forEach(node => {
      if (node.left) {
        newQueue.push(node.left);
      }

      if (node.right) {
        newQueue.push(node.right);
      }

      levelResult.push(node)
    });

    const levelResultVals = levelResult.map(node => node.val)
    if (result.length % 2 === 1) {
      levelResultVals.reverse()
    }
    result.push(levelResultVals)
    queue = newQueue
  }

  return result
};

const t1 = {
  val: 1,
  left: { val: 2, left: { val: 4 }, right: { val: 5 } },
  right: { val: 3 }
};

console.log(zigzagLevelOrder(t1))
