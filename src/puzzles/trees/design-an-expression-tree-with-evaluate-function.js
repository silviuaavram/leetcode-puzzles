/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

var Node = function() {
  if (this.constructor === Node) {
    throw new Error('Cannot instanciate abstract class')
  }
}

Node.prototype.evaluate = function() {
  throw new Error('Cannot call abstract method')
}

class TreeNode extends Node {
  constructor(val, left = null, right = null) {
    super()
    this.val = val
    this.left = left
    this.right = right
  }

  evaluate() {
    if (isNaN(this.val)) {
      return eval(`${this.left.evaluate()}${this.val}${this.right.evaluate()}`)
    }

    return this.val
  }
}

/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input
 * and returns the expression tree represnting it as a Node.
 */

export class TreeBuilder {
  /**
   * @param {string[]} s
   * @return {Node}
   */
  buildTree(postfix) {
    const stack = []

    for (let index = 0; index < postfix.length; index++) {
      const token = postfix[index]

      if (['*', '-', '+', '/'].includes(token)) {
        const right = stack.pop()
        const left = stack.pop()
        const newNode = new TreeNode(token, left, right)

        stack.push(newNode)
      } else {
        const newNode = new TreeNode(token)

        stack.push(newNode)
      }
    }

    return stack[0]
  }
}

/**
 * Your TreeBuilder object will be instantiated and called as such:
 * var obj = new TreeBuilder();
 * var expTree = obj.buildTree(postfix);
 * var ans = expTree.evaluate();
 */
