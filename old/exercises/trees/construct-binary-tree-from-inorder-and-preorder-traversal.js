const {expect, getBinaryTree} = require('../../lib')
/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

var buildTree = getBinaryTree

expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toEqual({
  val: 3,
  left: {val: 9, left: null, right: null},
  right: {
    val: 20,
    left: {val: 15, left: null, right: null},
    right: {val: 7, left: null, right: null},
  },
})
expect(buildTree([1, 2, 4, 5, 3, 6, 7, 8], [4, 5, 2, 1, 6, 3, 7, 8])).toEqual({
  val: 1,
  left: {
    val: 2,
    left: {val: 4, left: null, right: {val: 5, left: null, right: null}},
    right: null,
  },
  right: {
    val: 3,
    left: {val: 6, left: null, right: null},
    right: {val: 7, left: null, right: {val: 8, left: null, right: null}},
  },
})
expect(buildTree([], [])).toEqual(null)
expect(buildTree([3, 2, 1, 4], [1, 2, 3, 4])).toEqual({
  val: 3,
  left: {val: 2, left: {val: 1, left: null, right: null}, right: null},
  right: {val: 4, left: null, right: null},
})
