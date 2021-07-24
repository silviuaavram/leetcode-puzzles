/**
 * https://leetcode.com/problems/recover-binary-search-tree/
 */

import { TreeNode } from "utils";

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
 export function recoverTree(root: TreeNode | null): void {
   const inOrderTraversal: number[] = []

    function visitNode(node: TreeNode): void {
      if (!node) {
        return
      }

      visitNode(node.left)
      inOrderTraversal.push(node.val)
      visitNode(node.right)
    }

    visitNode(root)

    let firstSwappedNodeVal: number
    let secondSwappedNodeVal: number

    for (let index = 0; index < inOrderTraversal.length - 1; index++) {
      if (inOrderTraversal[index] > inOrderTraversal[index + 1]) {
        firstSwappedNodeVal = inOrderTraversal[index + 1]

        if (secondSwappedNodeVal === undefined) {
          secondSwappedNodeVal = inOrderTraversal[index]
        } else {
          break
        }
      }
    }

    function visitNodeToSwap(node: TreeNode): void {
      if (!node) {
        return
      }

      if (node.val === firstSwappedNodeVal || node.val === secondSwappedNodeVal) {
        node.val = node.val === firstSwappedNodeVal ? secondSwappedNodeVal : firstSwappedNodeVal
      }

      visitNodeToSwap(node.left)
      visitNodeToSwap(node.right)
    }

    visitNodeToSwap(root)
};