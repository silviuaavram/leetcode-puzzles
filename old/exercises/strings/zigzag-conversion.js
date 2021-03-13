/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility).
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const arrays = initArrays(numRows)
  fillArrays(arrays, s)

  return arrays.map(array => array.join('')).join('')
}

function initArrays(numRows) {
  const arrays = []
  for (let i = 0; i < numRows; i++) {
    arrays.push([])
  }
  return arrays
}

function fillArrays(arrays, s) {
  let j = 0
  let reverse = false
  for (let i = 0; i < s.length; i++) {
    arrays[j].push(s[i])

    if (arrays.length > 1) {
      if (reverse) {
        if (j === 0) {
          j++
          reverse = false
        } else {
          j--
        }
      } else {
        if (j === arrays.length - 1) {
          j--
          reverse = true
        } else {
          j++
        }
      }
    }
  }
}

console.log(convert('AB', 1))
