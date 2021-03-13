/**
 * Given a string, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {}
  let start = 0
  let max = 0
  let current = 0

  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    if (map[char] === undefined) {
      map[char] = index
      current++
    } else {
      if (current > max) {
        max = current
      }

      current -= map[char] - start

      for (let j = start; j < map[char]; j++) {
        map[s[j]] = undefined
      }

      start = map[char] + 1
      map[char] = index
    }
  }

  return Math.max(current, max)
}

const s3 = 'pwwkew'
console.log(lengthOfLongestSubstring(s1))
