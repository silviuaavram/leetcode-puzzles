import {countOfNodes, TreeNode} from './nodes-in-a-subtree'

test('should return queries correctly', () => {
  const tree: TreeNode = {val: 1, children: [{val: 2}, {val: 3}]}
  const string = 'aba'

  expect(countOfNodes(tree, [[1, 'a']], string)).toEqual([2])
})
