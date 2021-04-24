/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */

export function reverseWords(s: string): string {
  return s.split(' ').map(s => s.split('').reverse().join('')).join(' ')
};