/**
 * https://leetcode.com/problems/sentence-screen-fitting/
 */
export function wordsTyping(
  sentence: string[],
  rows: number,
  cols: number,
): number {
  let row = 0
  let col = 0
  let wordIndex = 0
  let result = 0

  while (row < rows) {
    const word = sentence[wordIndex]

    if (word.length > cols) {
      return 0
    }

    if (word.length >= cols - col) {
      if (word.length === cols - col) {
        wordIndex++
      }

      col = 0
      row++
    } else {
      col += word.length + 1
      wordIndex++
    }

    if (wordIndex === sentence.length) {
      wordIndex = 0
      result++
    }
  }

  return result
}
