import {longestStrChain} from './longest-string-chain'

test('should return the longest chain of 4 - 1', () => {
  const words = ['a', 'b', 'ba', 'bca', 'bda', 'bdca']
  expect(longestStrChain(words)).toEqual(4)
})

test('should return the longest chain of 5', () => {
  const words = ['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc']
  expect(longestStrChain(words)).toEqual(5)
})

test('should return the longest chain of 1', () => {
  const words = ['a', 'bc', 'bda', 'abcd', 'xyz']
  expect(longestStrChain(words)).toEqual(1)
})

test('should return the longest chain of 1 for empty', () => {
  const words: string[] = []
  expect(longestStrChain(words)).toEqual(0)
})

test('should return the longest chain of 4 - 2', () => {
  const words = ['a', 'aa', 'aaa', 'aaba', 'abaaa']
  expect(longestStrChain(words)).toEqual(4)
})
