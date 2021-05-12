/**
 * https://leetcode.com/problems/reverse-words-in-a-string/
 */

export function reverseWords(s: string): string {
  function getStringForwards(
    startIndex: number,
    endIndex: number,
  ): [number, number, number] | null {
    let current = startIndex
    let wordStart
    let whitespacesCount = 0
    
    while (s[current] === ' ' && current <= endIndex) {
      current++
      whitespacesCount++
    }
    
    if (current > endIndex) {
      return null
    }
    
    wordStart = current
    
    while (s[current + 1] !== ' ' && current <= endIndex) {
      current++
    }

    return [wordStart, current, whitespacesCount]
  }

  function getStringBackwards(
    startIndex: number,
    endIndex: number,
  ): [number, number, number] | null {
    let current = startIndex
    let wordStart
    let whitespacesCount = 0

    while (s[current] === ' ' && current >= endIndex) {
      current--
      whitespacesCount++
    }

    if (current < endIndex) {
      return null
    }

    wordStart = current

    while (s[current - 1] !== ' ' && current >= endIndex) {
      current--
    }

    return [current, wordStart, whitespacesCount]
  }

  let word1 = getStringForwards(0, s.length - 1)
  let word2 = getStringBackwards(s.length - 1, 0)

  console.log(word1, word2)
  while (word1 && word2) {
    const [s1, e1, w1] = word1
    const [s2, e2, w2] = word2
    const len1  = e1 - s1 + 1
    const len2  = e2 - s2 + 1

    if (s1 === s2) {
      // whitespaces
      break
    }

    s = `${s.substring(0, s1 - w1)}${s.substring(s2, e2 + 1)}${s.substring(
      e1 + 1,
      s2,
    )}${s.substring(s1, e1 + 1)}${s.substring(e2 + w2)}`

    console.log(s)
    word1 = getStringForwards(s1 + len2 + 1, s.length -1)
    word2 = getStringBackwards(e2 - len1 - 1, 0)
  }
  return s
}
