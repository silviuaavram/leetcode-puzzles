/**
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 */
export function countSmaller(nums: number[]): number[] {
  const finalSwitches: number[] = new Array(nums.length).fill(0)
  const indeces: number[] = new Array(nums.length)

  for (let index = 0; index < nums.length; index++) {
    indeces[index] = index
  }

  function mergeSort(
    array: number[],
    switches: number[],
    indeces: number[],
  ): [number[], number[], number[]] {
    if (array.length === 1) {
      return [array, switches, indeces]
    }

    const middleIndex = Math.floor(array.length / 2)
    const [mergedLeft, switchesLeft, indecesLeft] = mergeSort(
      array.slice(0, middleIndex),
      switches.slice(0, middleIndex),
      indeces.slice(0, middleIndex),
    )
    const [mergedRight, switchesRight, indecesRight] = mergeSort(
      array.slice(middleIndex),
      switches.slice(middleIndex),
      indeces.slice(middleIndex),
    )
    const result: number[] = []
    const switchesResult: number[] = []
    const indecesResult: number[] = []
    let indexLeft = 0
    let indexRight = 0
    let switchesCount = 0

    while (indexLeft < mergedLeft.length || indexRight < mergedRight.length) {
      if (
        indexLeft === mergedLeft.length ||
        mergedLeft[indexLeft] > mergedRight[indexRight]
      ) {
        switchesCount++
        result.push(mergedRight[indexRight])
        switchesResult.push(switchesRight[indexRight])
        indecesResult.push(indecesRight[indexRight])
        indexRight++
      } else {
        result.push(mergedLeft[indexLeft])
        switchesResult.push(switchesLeft[indexLeft] + switchesCount)
        indecesResult.push(indecesLeft[indexLeft])
        indexLeft++
      }
    }

    return [result, switchesResult, indecesResult]
  }

  const [numsResult, switchesResult, indecesResult] = mergeSort(
    nums,
    finalSwitches,
    indeces,
  )
  const finalResult = new Array(nums.length)

  for (let index = 0; index < indecesResult.length; index++) {
    finalResult[indecesResult[index]] = switchesResult[index]
    
  }

  return finalResult
}
