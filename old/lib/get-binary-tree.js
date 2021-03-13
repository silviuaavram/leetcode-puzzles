/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  return {val, left: null, right: null}
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
module.exports = function(preorder, inorder) {
  if (!preorder.length) {
    return null
  }
  if (preorder.length === 1) {
    return TreeNode(preorder[0])
  }
  const possibleRoots = []
  const results = []

  // Warn: Added -1
  for (let index = 0; index < preorder.length - 1; index++) {
    const root = preorder[index]
    let node
    const possibleLeft = preorder[index + 1]
    const isLeft = inorder.indexOf(possibleLeft) < inorder.indexOf(root)

    if (results.length === index) {
      node = TreeNode(root)
      results.push(node)
    } else {
      node = results[results.length - 1]
    }

    if (isLeft) {
      const leftNode = TreeNode(possibleLeft)
      // console.log('left ', possibleLeft, root)

      results.push(leftNode)
      node.left = leftNode

      if (index + 2 < preorder.length) {
        const possibleRight = preorder[index + 2]
        const inorderRootIndex = inorder.indexOf(root)
        const inorderPossibleRightIndex = inorder.indexOf(possibleRight)
        // const isRight = inorder.indexOf(possibleRight) > inorder.indexOf(root) //change to be direct index
        const isRight = inorderPossibleRightIndex - inorderRootIndex === 1

        if (isRight) {
          // console.log('right ', possibleRight, root)
          const rightNode = TreeNode(possibleRight)

          index++

          results.push(rightNode)
          node.right = rightNode

          continue
        }
      }

      possibleRoots.push(node)
    } else {
      possibleRoots.push(node)
      const possibleRight = possibleLeft

      for (let j = 0; j < possibleRoots.length; j++) {
        const possibleRoot = possibleRoots[j]
        const isRoot =
          inorder.indexOf(possibleRoot.val) < inorder.indexOf(possibleRight)

        if (isRoot) {
          // console.log('root ', possibleRight, possibleRoot.val)
          const rightNode = TreeNode(possibleRight)
          possibleRoot.right = rightNode
          possibleRoots.splice(j)
          results.push(rightNode)
        }
      }
    }
  }

  return results[0]
}
