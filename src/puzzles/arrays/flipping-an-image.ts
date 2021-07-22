/**
 * https://leetcode.com/problems/flipping-an-image/
 */
export function flipAndInvertImage(image: number[][]): number[][] {
  const rows = image.length
  const columns = image[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < Math.floor(columns / 2); j++) {
      // flip
      image[i][j] = image[i][j] + image[i][columns - 1 - j]
      image[i][columns - 1 - j] = image[i][j] - image[i][columns - 1 - j]
      image[i][j] = image[i][j] - image[i][columns - 1 - j]

      // invert
      image[i][j] = (image[i][j] + 1) % 2
      image[i][columns - 1 - j] = (image[i][columns - 1 - j] + 1) % 2
    }
  }

  if (columns % 2 === 1) {
    for (let i = 0; i < rows; i++) {
      image[i][Math.floor(columns / 2)] =
        (image[i][Math.floor(columns / 2)] + 1) % 2
    }
  }

  return image
}
