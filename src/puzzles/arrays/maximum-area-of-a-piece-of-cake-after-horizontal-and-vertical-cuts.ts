/**
 * https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
 */
export function maxArea(
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[],
): number {
  horizontalCuts.push(0, h)
  verticalCuts.push(0, w)
  verticalCuts.sort((a, b) => a - b)
  horizontalCuts.sort((a, b) => a - b)

  let maxHeight = 0
  let maxWidth = 0

  for (let index = 1; index < horizontalCuts.length; index++) {
    maxHeight = Math.max(
      maxHeight,
      horizontalCuts[index] - horizontalCuts[index - 1],
    )
  }

  for (let index = 1; index < verticalCuts.length; index++) {
    maxWidth = Math.max(maxWidth, verticalCuts[index] - verticalCuts[index - 1])
  }

  return Number((BigInt(maxHeight) * BigInt(maxWidth)) % BigInt(Math.pow(10, 9) + 7))
}

function maxAreaWithMatrix(
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[],
): number {
  const slices: number[][] = []

  for (let index = 0; index < h; index++) {
    slices.push([])
  }

  horizontalCuts.sort((a, b) => a - b)
  verticalCuts.sort((a, b) => a - b)

  let start = 0

  for (let index = 0; index < horizontalCuts.length + 1; index++) {
    const end = horizontalCuts[index] ?? h

    for (let i = start; i < end; i++) {
      for (let j = 0; j < w; j++) {
        slices[i][j] = end - start
      }
    }

    start = end
  }

  start = 0

  for (let index = 0; index < verticalCuts.length + 1; index++) {
    const end = verticalCuts[index] ?? w

    for (let i = start; i < end; i++) {
      for (let j = 0; j < h; j++) {
        slices[j][i] *= end - start
      }
    }

    start = end
  }

  let result = 0

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      result = Math.max(result, slices[i][j])
    }
  }

  return result
}
