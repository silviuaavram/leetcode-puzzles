/**
 * https://leetcode.com/problems/shortest-word-distance/
 */
export function shortestDistance(
  wordsDict: string[],
  word1: string,
  word2: string,
): number {
  let word1Pos: number
  let word2Pos: number
  let distance = wordsDict.length

  for (let index = 0; index < wordsDict.length; index++) {
    const word = wordsDict[index]

    if (word === word1) {
      word1Pos = index
    } else if (word === word2) {
      word2Pos = index
    }

    if (word1Pos !== undefined && word2Pos !== undefined) {
      distance = Math.min(distance, Math.abs(word1Pos - word2Pos))
    }
  }
  return distance
}
