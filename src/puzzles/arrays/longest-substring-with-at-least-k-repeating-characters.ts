/**
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 */
export function longestSubstring(s: string, k: number): number {
  if (!s.length) {
    return 0
  }
  let maxLength = 0

  function findLongestSubstring(start: number, end: number) {
    if (start > end) {
      return
    }

    const characters = new Map<string, number[]>()

    for (let index = start; index <= end; index++) {
      if (characters.has(s[index])) {
        characters.get(s[index]).push(index)
      } else {
        characters.set(s[index], [index])
      }
    }

    const invalidCharactedIndeces: number[] = []

    characters.forEach((value, key) => {
      if (value.length < k) {
        invalidCharactedIndeces.push(...value)
      }
    })

    if (!invalidCharactedIndeces.length) {
      maxLength = Math.max(maxLength, end - start + 1)
    } else {
      findLongestSubstring(start, invalidCharactedIndeces[0] - 1)
      for (let index = 0; index < invalidCharactedIndeces.length - 1; index++) {
        findLongestSubstring(
          invalidCharactedIndeces[index] + 1,
          invalidCharactedIndeces[index + 1] - 1,
        )
      }
      findLongestSubstring(
        invalidCharactedIndeces[invalidCharactedIndeces.length - 1] + 1,
        end,
      )
    }
  }

  findLongestSubstring(0, s.length - 1)

  return maxLength
}
