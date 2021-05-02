/**
 * https://leetcode.com/problems/implement-strstr/
 */
export function strStr(haystack: string, needle: string): number {
  if (needle === '') {
    return 0
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] === haystack[i + j]) {
        if (j === needle.length - 1) {
          return i
        } else {
          continue
        }
      } else {
        break
      }
    }
  }

  return -1
}
