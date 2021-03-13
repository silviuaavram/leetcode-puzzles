/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:

* [
* "((()))",
* "(()())",
* "(())()",
* "()(())",
* "()()()"
]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) {
    return []
  }
  const results = []
  /**
   *
   * @param {number} open How many parantheses open so far.
   * @param {string} str String so far
   */
  function generator(open, str) {
    if (str.length + open === n * 2) {
      for (let i = 0; i < open; i++) {
        str += ')'
      }
      results.push(str)
    } else {
      generator(open + 1, str + '(')

      if (open > 0) {
        generator(open - 1, str + ')')
      }
    }
  }

  generator(0, '')

  return results
}

console.log(generateParenthesis(3))
console.log(generateParenthesis(0))
