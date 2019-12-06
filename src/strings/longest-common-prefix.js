/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const prefix = []
  if (strs.length === 0) {
    return ''
  }
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]
    for (const str of strs) {
      if (i >= strs[0].length || str[i] !== char) {
        return prefix.join('')
      }
    }
    prefix.push(char)
  }
  return prefix.join('')
};

console.log(longestCommonPrefix(["flower","xlow","ylight"]))
