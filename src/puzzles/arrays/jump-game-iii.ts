/**
 * https://leetcode.com/problems/jump-game-iii/
 */
export function canReach(arr: number[], start: number): boolean {
  const canReach = new Set<number>([start])
  const jumps = [start]

  while (jumps.length) {
    const currentIndex = jumps.shift()
    const jumpOffset = arr[currentIndex]

    if (jumpOffset === 0) {
      return true
    }

    const leftResult = currentIndex - jumpOffset
    const rightResult = currentIndex + jumpOffset

    if (leftResult >= 0 && !canReach.has(leftResult)) {
      canReach.add(leftResult)
      jumps.push(leftResult)
    }

    if (rightResult < arr.length && !canReach.has(rightResult)) {
      canReach.add(rightResult)
      jumps.push(rightResult)
    }
  }

  return false
}
