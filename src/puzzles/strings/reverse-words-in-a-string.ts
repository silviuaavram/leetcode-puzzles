/**
 * https://leetcode.com/problems/reverse-words-in-a-string/
 */

export function reverseWords(s: string): string {
  for (let index = 0; index < s.length - 1; index++) {
    if (s.slice(index, index + 2) === '  ') {
      s = `${s.slice(0, index)} ${s.slice(index + 2)}`
      index--
    }
  }

  if (s[0] === ' ') {
    s = s.slice(1)
  }
  if (s[s.length - 1] === ' ') {
    s = s.slice(0, s.length - 1)
  }

  function getWordIndecesForwards(start = 0): number[] {
    let wordStart: number

    for (let index = start; index < s.length; index++) {
      const char = s[index]

      if (char === ' ') {
        if (wordStart !== undefined) {
          return [wordStart, index - 1]
        }
      } else {
        if (wordStart === undefined) {
          wordStart = index
        }
      }
    }

    if (wordStart !== undefined) {
      return [wordStart, s.length - 1]
    }

    return []
  }

  function getWordIndecesBackwards(start = s.length - 1): number[] {
    let wordEnd: number

    for (let index = start; index >= 0; index--) {
      const char = s[index]

      if (char === ' ') {
        if (wordEnd !== undefined) {
          return [index + 1, wordEnd]
        }
      } else {
        if (wordEnd === undefined) {
          wordEnd = index
        }
      }
    }

    if (wordEnd !== undefined) {
      return [0, wordEnd]
    }

    return []
  }

  let [start1, end1] = getWordIndecesForwards()
  let [start2, end2] = getWordIndecesBackwards()

  while (end1 < start2) {
    const newForwardsStart = start1 + end2 - start2 + 2
    const newBackwardsStart = start2 + (end2 - start2 - end1 + start1) - 2

    s = `${s.slice(0, start1)}${s.slice(start2, end2 + 1)}${s.slice(
      end1 + 1,
      start2,
    )}${s.slice(start1, end1 + 1)}${s.slice(end2 + 1)}`
    ;[start1, end1] = getWordIndecesForwards(newForwardsStart)
    ;[start2, end2] = getWordIndecesBackwards(newBackwardsStart)
  }

  return s
}
