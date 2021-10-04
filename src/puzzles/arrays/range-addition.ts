/**
 * https://leetcode.com/problems/range-addition/
 */
export function getModifiedArray(length: number, updates: number[][]): number[] {
  const result = new Array(length).fill(0)
  for (const [indexStart, indexEnd, value] of updates) {
    result[indexStart] += value

    if (indexEnd < length - 1) {
      result[indexEnd + 1] -= value
    }
  }

  for (let index = 1; index < length; index++) {
    result[index] += result[index - 1]
    
  }

  return result
};
