/**
 * Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
 * Return the quotient after dividing dividend by divisor.
 * The integer division should truncate toward zero.
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let result = 0
  const isNegative =
    (dividend >= 0 && divisor < 0) || (dividend < 0 && divisor > 0)

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  while (dividend >= divisor) {
    dividend -= divisor
    result++
  }

  const finalResult = isNegative ? -result : result

  if (finalResult === -2147483647) return -2147483648
  if (finalResult === 2147483648) return 2147483647

  return finalResult
}

console.log(divide(6, 4))
console.log(divide(-60, 4))
console.log(divide(61, 200))
console.log(divide(-30, -25))
