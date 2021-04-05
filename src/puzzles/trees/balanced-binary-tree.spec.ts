import {toTree} from 'utils'
import {isBalanced} from './balanced-binary-tree'

test('should be balanced', () => {
  const tree = toTree([3, 9, 20, null, null, 15, 7])

  expect(isBalanced(tree)).toBe(true)
})
test('should not be balanced', () => {
  const tree = toTree([1, 2, 2, 3, 3, null, null, 4, 4])

  expect(isBalanced(tree)).toBe(false)
})
test('should be empty but balanced', () => {
  const tree = toTree([])

  expect(isBalanced(tree)).toBe(true)
})
test('one node should be balanced', () => {
  const tree = toTree([1])

  expect(isBalanced(tree)).toBe(true)
})

test('two node should be balanced', () => {
  const tree = toTree([1, null, 2])

  expect(isBalanced(tree)).toBe(true)
})

test('should be balanced 2', () => {
	const tree = toTree([1,2,3,4,5,6,null,8])

	expect(isBalanced(tree)).toBe(true)
})
