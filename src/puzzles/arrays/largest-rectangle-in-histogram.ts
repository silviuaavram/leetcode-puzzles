/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 */

export function largestRectangleArea(heights: number[]): number {
  if (!heights.length) {
    return 0
  }

  const stack = [0]
  let maxArea = 0

  for (let index = 1; index < heights.length; index++) {
    if (heights[index] > heights[stack[stack.length - 1]]) {
      stack.push(index)
    } else {
      while (
        stack.length > 0 &&
        heights[stack[stack.length - 1]] > heights[index]
      ) {
        const height = heights[stack.pop()]
        const area =
          height *
          (stack.length === 0 ? index : index - stack[stack.length - 1] - 1)
        maxArea = Math.max(maxArea, area)
      }
      
      stack.push(index)
    }
  }


  while (stack.length > 0) {
    const height = heights[stack.pop()]
    const area =
      height *
      (stack.length === 0
        ? heights.length
        : heights.length - stack[stack.length - 1] - 1)
    maxArea = Math.max(maxArea, area)
  }

  return maxArea
}

/**
 * nlogn
 */
function largestRectangleAreaNLogN(heights: number[]): number {
  if (!heights.length) {
    return 0
  }

  function largestRectangle(start: number, end: number): number {
    console.log(start, end)
    if (start < 0 || end >= heights.length || start > end) {
      return 0
    }

    if (start === end) {
      return heights[start]
    }

    let min = heights[start]
    let minIndex = start
    for (let index = start + 1; index <= end; index++) {
      if (min > heights[index]) {
        min = heights[index]
        minIndex = index
      }
    }

    return Math.max(
      min * (end - start + 1),
      largestRectangle(start, minIndex - 1),
      largestRectangle(minIndex + 1, end),
    )
  }

  return largestRectangle(0, heights.length - 1)
}

/**
 * n^2
 */
function largestRectangleAreaN2(heights: number[]): number {
  if (!heights.length) {
    return 0
  }

  let maxResult = heights[0]

  for (let i = 1; i < heights.length; i++) {
    let max = heights[i]
    let minValue = heights[i]

    for (let j = i - 1; j >= 0; j--) {
      minValue = Math.min(minValue, heights[j])
      max = Math.max(max, minValue * (i - j + 1))
    }

    maxResult = Math.max(max, maxResult)
  }

  return maxResult
}
