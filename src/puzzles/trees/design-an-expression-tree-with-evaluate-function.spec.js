import {TreeBuilder} from './design-an-expression-tree-with-evaluate-function'

test('the tree is built correctly 1', () => {
  const treeBuilder = new TreeBuilder()
  const s = ['3', '4', '+', '2', '*', '7', '/']
  const tree = treeBuilder.buildTree(s)
  const expected = {
    val: '/',
    left: {
      val: '*',
      left: {
        val: '+',
        left: {
          val: '3',
          left: null,
          right: null,
        },
        right: {
          val: '4',
          left: null,
          right: null,
        },
      },
      right: {
        val: '2',
        left: null,
        right: null,
      },
    },
    right: {
      val: '7',
      left: null,
      right: null,
    },
  }

  expect(tree).toEqual(expected)
  expect(tree.evaluate()).toEqual(2)
})
