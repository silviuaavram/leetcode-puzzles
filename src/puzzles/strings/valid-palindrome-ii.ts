/**
 * https://leetcode.com/problems/valid-palindrome-ii/
 */
export function validPalindrome(s: string, final = false): boolean {
  for (let index = 0; index < Math.floor(s.length / 2); index++) {
    if (s[index] !== s[s.length - 1 - index]) {
      return final
        ? false
        : (validPalindrome(s.slice(index, s.length - 1 - index), true) ||
            validPalindrome(s.slice(index + 1, s.length - index), true))
    }
  }

  return true
}
