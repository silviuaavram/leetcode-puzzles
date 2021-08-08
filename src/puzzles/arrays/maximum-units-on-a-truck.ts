/**
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 */

export function maximumUnits(
  unsortedBoxTypes: number[][],
  truckSize: number,
): number {
  let boxesAdded = 0
  let result = 0
  const boxTypes = unsortedBoxTypes.sort((b1, b2) => b2[1] - b1[1])

  for (let index = 0; index < boxTypes.length; index++) {
    const [boxes, boxItems] = boxTypes[index]

    if (boxes >= truckSize - boxesAdded) {
      result += boxItems * (truckSize - boxesAdded)
      break
    }

    boxesAdded += boxes
    result += boxItems * boxes
  }

  return result
}
