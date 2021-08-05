/**
 * https://leetcode.com/problems/robot-bounded-in-circle/
 */
export function isRobotBounded(instructions: string): boolean {
  const position = [0, 0]
  let direction = 0

  for (const instruction of instructions) {
    switch (instruction) {
      case 'L':
        direction -= 1
        break
      case 'R':
        direction += 1
        break
      case 'G':
        if ([1, 3].includes(direction)) {
          position[0] += direction === 1 ? 1 : -1
        } else {
          position[1] += direction === 0 ? 1 : -1
        }
        break
      default:
        break
    }

    if (direction < 0) {
      direction = 3
    } else if (direction === 4) {
      direction = 0
    }
  }

  return direction !== 0 || (position[0] === 0 && position[1] === 0)
}
