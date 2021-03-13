/**
 * Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const result = []
  const romans = new Map([
    [0, ['', '', '']],
    [1, ['I', 'X', 'C', 'M']],
    [2, ['II', 'XX', 'CC', 'MM']],
    [3, ['III', 'XXX', 'CCC', 'MMM']],
    [4, ['IV', 'XL', 'CD']],
    [5, ['V', 'L', 'D']],
    [6, ['VI', 'LX', 'DC']],
    [7, ['VII', 'LXX', 'DCC']],
    [8, ['VIII', 'LXXX', 'DCCC']],
    [9, ['IX', 'XC', 'CM']],
  ])

  for (let i = 0; i < 4 || num > 0; i++) {
    const dec = num % 10
    num = Math.trunc(num / 10)

    result.push(romans.get(dec)[i])
  }

  return result.reverse().join('')
}

console.log(intToRoman(1))
