/**
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 */

 /**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let len = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char !== ' ') {
      len++
    } else {
      const soFar = s.substring(0, i - len)
      const thisWord = s.substring(i - len, i).split('').reverse().join('')
      const rest = s.substring(i + 1)
      s = `${soFar}${thisWord} ${rest}`
      len = 0
    }
  }

  if (len) {
    const soFar = s.substring(0, s.length -  len)
    const lastWord = s.substring(s.length - len, s.length).split('').reverse().join('')
    s = `${soFar}${lastWord}`
  }

  return s
};

console.log(reverseWords(`Let's take LeetCode contest`))
console.log(reverseWords(''))
console.log(reverseWords('abbc'))
console.log(reverseWords('xxx'))
console.log(reverseWords('    a    a'))
