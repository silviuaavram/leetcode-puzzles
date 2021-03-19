/**
 * https://leetcode.com/problems/word-break/
 */

export function wordBreak(s: string, wordDict: string[]): boolean {
  if (!s.length) {
    return true
  }

  const dict = [...wordDict]

  for (let index = 1; index <= s.length; index++) {
    const substr = s.slice(0, index)

    for (const word of dict) {
      if (!substr.endsWith(word)) {
        continue
      }

      const indexOfWord = substr.lastIndexOf(word)
      const rest = substr.slice(0, indexOfWord)

      if (rest !== '' && dict.indexOf(rest) >= 0 && dict.indexOf(substr) < 0) {
        dict.push(substr)
      }
    }
  }

  return dict.indexOf(s) >= 0
}
