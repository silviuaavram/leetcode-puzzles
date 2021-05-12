/**
 * https://leetcode.com/problems/valid-palindrome/
 */
export function isPalindrome(s: string): boolean {
  const input = s.toLowerCase().replace(/[^0-9a-z]/g, '')

  if (input.length < 2) {
    return true
  }

  for (let index = 0; index < Math.floor(input.length / 2); index++) {
    if (input[index] !== input[input.length - 1 - index]) {

      return false
    }
  }

  return true
}
