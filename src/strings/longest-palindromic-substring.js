/**
 * Given a string s, find the longest palindromic substringing in s. You may assume that the maximum length of s is 1000.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = s => {
  if (s === "") {
    return "";
  }

  let longest = s[0];

  for (let i = 0; i < s.length; i++) {
    let p = getPalindromeAroundCenter(s, i, i);
    if (p.length > longest.length) {
      longest = p;
    }
    if (s[i] === s[i + 1]) {
      p = getPalindromeAroundCenter(s, i, i + 1);
      if (p.length > longest.length) {
        longest = p;
      }
    }
  }
  return longest;
};

function getPalindromeAroundCenter(s, i, j) {
  const newI = i - 1;
  const newJ = j + 1;

  if (newI < 0 || newJ >= s.length) {
    return s.substring(i, j + 1);
  }

  if (s[newI] === s[newJ]) {
    return getPalindromeAroundCenter(s, newI, newJ);
  }

  return s.substring(i, j + 1);
}

console.log(longestPalindrome(""));
