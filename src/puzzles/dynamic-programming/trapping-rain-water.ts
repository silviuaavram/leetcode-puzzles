/**
 * https://leetcode.com/problems/trapping-rain-water/
 */
export function trap(height: number[]): number {
  const stack: number[] = []
  let waterTrapped = 0

  for (let index = 0; index < height.length; index++) {
    while (stack.length && height[index] > height[stack[stack.length - 1]]) {
      const poppedIndex = stack.pop()
      const minSideHeight = Math.min(height[index], height[stack[stack.length - 1]])

      if (!stack.length) {
        break
      }
      waterTrapped += (minSideHeight - height[poppedIndex]) * (index - stack[stack.length - 1] -1 )
      
    }
    stack.push(index)
  }
  return waterTrapped
}

function trapDynamicProgramming(height: number[]): number {
  let totalWater = 0
  const leftMax = [height[0]]
  const rightMax = [height[height.length - 1]]

  for (let index = 1; index < height.length; index++) {
    leftMax[index] = Math.max(leftMax[index - 1], height[index])
    rightMax[index] = Math.max(
      rightMax[index - 1],
      height[height.length - index - 1],
    )
  }
  rightMax.reverse()

  for (let index = 1; index < height.length - 1; index++) {
    const water =
      Math.min(leftMax[index - 1], rightMax[index + 1]) - height[index]
    if (water > 0) {
      totalWater += water
    }
  }

  return totalWater
}
