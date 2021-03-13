/**
 * You are given an n x n 2D matrix representing an image.
 * Rotate the image by 90 degrees (clockwise).
 * Note:
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const last = matrix.length - 1

  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    for (let j = i; j < matrix.length - i - 1; j++) {
      let aux = matrix[i][j]
      matrix[i][j] = matrix[last - j][i]
      matrix[last - j][i] = matrix[last - i][last - j]
      matrix[last - i][last - j] = matrix[j][last - i]
      matrix[j][last - i] = aux
    }
  }
}

const m1 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]
const m2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
const m3 = [
  [2, 29, 20, 26, 16, 28],
  [12, 27, 9, 25, 13, 21],
  [32, 33, 32, 2, 28, 14],
  [13, 14, 32, 27, 22, 26],
  [33, 1, 20, 7, 21, 7],
  [4, 24, 1, 6, 32, 34],
]
rotate(m2)
rotate(m1)
rotate(m3)
console.log(m1)
console.log(m2)
console.log(m3)
// console.log([[4,33,13,32,12,2],[24,1,14,33,27,29],[1,20,32,32,9,20],[6,7,27,2,25,26],[32,21,22,28,13,16],[34,7,26,14,21,28]])
