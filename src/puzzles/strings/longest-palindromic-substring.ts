/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 */

export function longestPalindrome(s: string): string {
  if (!s || s.length < 2) {
    return s
  }

  let longestPalindromeIndeces = [0, 0]
  let longestPalindromeLength = 0
  const evenLength = s.length % 2 === 0
	
	for (let index = 0; index < s.length; index++) {
		searchForPalindrome(index, index)

		if (s[index] === s[index + 1]) {
			searchForPalindrome(index, index + 1)
		} 
	}

  function updateLongestSize(startIndex: number, endIndex: number): void {
    const size = endIndex - startIndex + 1

    if (longestPalindromeLength < size) {
      longestPalindromeLength = size
      longestPalindromeIndeces = [startIndex, endIndex]
    }
  }

  function searchForPalindrome(startIndex: number, endIndex: number): void {
    const newStartIndex = startIndex - 1
    const newEndIndex = endIndex + 1

    if (
      newStartIndex < 0 ||
      newEndIndex >= s.length ||
      s[newStartIndex] !== s[newEndIndex]
    ) {
      updateLongestSize(startIndex, endIndex)
    } else {
      searchForPalindrome(newStartIndex, newEndIndex)
    }
  }

  return s.slice(longestPalindromeIndeces[0], longestPalindromeIndeces[1] + 1)
}
