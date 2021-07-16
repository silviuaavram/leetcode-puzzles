/**
 * https://leetcode.com/problems/find-the-celebrity/
 */
/**
 * The knows API is defined in the parent class Relation.
 * knows(a: number, b: number): boolean {
 *     ...
 * };
 */

/**
 * The knows API is defined in the parent class Relation.
 * knows(a: number, b: number): boolean {
 *     ...
 * };
 */

export var solution = function(knows: any): (n: number) => number {
  return function(n: number): number {
    let possibleCelebrity

    for (let i = 0; i < n; i++) {
      possibleCelebrity = i

      for (let j = 0; j < n; j++) {
        if (i === j) {
          continue
        }

        if (knows(i, j)) {
          possibleCelebrity = null
          break
        }
      }

      if (possibleCelebrity !== null) {
        break
      }
    }

    if (possibleCelebrity === null) {
      return -1
    }

    for (let i = 0; i < n; i++) {
      if (i === possibleCelebrity) {
        continue
      }

      if (!knows(i, possibleCelebrity)) {
        return -1
      }
    }

    return possibleCelebrity
  }
}
