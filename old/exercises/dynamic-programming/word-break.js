const {expect} = require('../../lib')

/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * https://leetcode.com/problems/word-break/
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const visited = []
  for (let index = 0; index < s.length; index++) {
    visited.push(index === 0 ? true : false)
  }
  return isWordBreak(s, wordDict, 0, visited)
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @param {number} index
 * @param {boolean[]} visited
 * @return {boolean}
 */
function isWordBreak(s, wordDict, index, visited) {
  if (!s || !s.length || index >= s.length) {
    return true
  }

  for (const word of wordDict) {
    if (s.slice(index).startsWith(word)) {
      if (!visited[index + word.length]) {
        visited[index + word.length] = true
        const result = isWordBreak(s, wordDict, index + word.length, visited)

        if (result) {
          return result
        }
      }
    }
  }

  return false
}

expect(wordBreak('leetcode', ['code', 'leet'])).toBe(true)
expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(
  false,
)

expect(wordBreak('applepenapple', ['pen', 'apple'])).toBe(true)
expect(
  wordBreak(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    [
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
    ],
  ),
).toBe(false)
expect(
  wordBreak(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    [
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa',
      'ba',
    ],
  ),
).toBe(false)
