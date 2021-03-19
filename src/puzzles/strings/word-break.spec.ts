import {wordBreak} from './word-break'

test('string leetcode can be segmented in dictionary words', () => {
  const s = 'leetcode'
  const wordDict = ['leet', 'code']

  expect(wordBreak(s, wordDict)).toBe(true)
})

test('string applepenapple can be segmented in dictionary words', () => {
  const s = 'applepenapple'
  const wordDict = ['apple', 'pen']

  expect(wordBreak(s, wordDict)).toBe(true)
})

test('string catsandog cannot be segmented in dictionary words', () => {
  const s = 'catsandog'
  const wordDict = ['cats', 'dog', 'sand', 'and', 'cat']

  expect(wordBreak(s, wordDict)).toBe(false)
})

test('empty string returns true', () => {
  const s = ''
  const wordDict = ['leet', 'code']

  expect(wordBreak(s, wordDict)).toBe(true)
})

test('string applepiepenapple can be segmented in dictionary words', () => {
  const s = 'applepiepenapple'
  const wordDict = ['apple', 'pen', 'applepie']

  expect(wordBreak(s, wordDict)).toBe(true)
})

test('very long word ending in b cannot be segmented', () => {
  const s =
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
  const wordDict = [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
    'aaaaaa',
    'aaaaaaa',
    'aaaaaaaa',
    'aaaaaaaaa',
    'aaaaaaaaaa',
  ]

  expect(wordBreak(s, wordDict)).toBe(false)
})
