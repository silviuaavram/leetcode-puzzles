/**
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = []
  const palindromes = {};

  function addPalindrome(palindrome, position) {
    if (position in palindromes) {
      palindromes[position].push(palindrome);
    } else {
      palindromes[position] = [palindrome];
    }
  }

  function getPalindromeAroundCenter(s, i, j) {
    addPalindrome(s.substring(i, j + 1), i);

    const i2 = i - 1;
    const j2 = j + 1;

    if (i2 < 0 || j2 >= s.length) {
      return;
    }

    if (s[i2] == s[j2]) {
      return getPalindromeAroundCenter(s, i2, j2);
    }
  }

  for (let i = 0; i < s.length; i++) {
    getPalindromeAroundCenter(s, i, i);

    if (s[i] === s[i + 1]) {
      getPalindromeAroundCenter(s, i, i + 1);
    }
  }

  function concatenatePalindromes(str, i) {
    if (i === s.length) {
      result.push(str)
      return
    }

    palindromes[i].forEach(palindrome => {
      concatenatePalindromes([...str, palindrome], i + palindrome.length)
    })
  }

  concatenatePalindromes([], 0)

  return result
};

console.log(partition('abcbcba'))