/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }
  if (x === 0) {
    return true
  }

  const digits = []

  while (x) {
    digits.push(x % 10)

    x = Math.floor(x / 10)
	}

	const length = digits.length
	
	for (let i = 0; i < length / 2; i++) {
		if (digits[i] !== digits[length - i - 1]) {
			return false
		}
	}

	return true
}

module.exports = isPalindrome
