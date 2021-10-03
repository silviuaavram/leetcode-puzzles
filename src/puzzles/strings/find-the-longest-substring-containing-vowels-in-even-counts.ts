/**
 * https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
 */

export function findTheLongestSubstring(s: string): number {
  const V = 'aeiou'
  let encode = (c: string) => 1 << V.indexOf(c);
  let n = s.length;
  let A = Array(n + 1).fill(0);
  let seen = new Map([[0, 0]]);
  let max = 0

  for (let i = 1; i <= n; ++i) {
      if (V.indexOf(s[i - 1]) == -1)
          A[i] = A[i - 1];
      else                          
          A[i] = A[i - 1] ^ encode(s[i - 1]);
      if (seen.has(A[i]))
          max = Math.max(max, i - seen.get(A[i]));
      else
          seen.set(A[i], i);
  }
  return max;
}

function findTheLongestSubstringBruteForce(s: string): number {
  let max = 0
  const vowels = 'aeiou'.split('')

  for (let i = 0; i < s.length; i++) {
    const vowelsSet = new Set<string>()

    for (let j = i; j < s.length; j++) {
      if (vowels.includes(s[j])) {
        if (vowelsSet.has(s[j])) {
          vowelsSet.delete(s[j])
        } else {
          vowelsSet.add(s[j])
        }
      }

      if (vowelsSet.size === 0) {
        max = Math.max(max, j - i + 1)
      }
    }
  }

  return max
}