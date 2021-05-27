/**
 * https://leetcode.com/problems/text-justification/
 */

export function fullJustify(words: string[], maxWidth: number): string[] {
  const result: string[] = []
  const wordsOnLine: string[] = []
  let lineSize = 0

  function updateWords(word: string): void {
    if (lineSize + word.length + wordsOnLine.length <= maxWidth) {
      lineSize += word.length
      wordsOnLine.push(word)
    } else {
      const wordsOnLineCount = wordsOnLine.length
      let spacesRemaining = maxWidth - lineSize - wordsOnLine.length + 1
      let line = ''

      for (let index = 0; index < wordsOnLineCount; index++) {
        line += wordsOnLine.shift()

        if (index !== wordsOnLineCount - 1) {
          const spacesForWord = Math.ceil(spacesRemaining / wordsOnLine.length)
          line += ' '.repeat(spacesForWord + 1)
          spacesRemaining -= spacesForWord
        }
      }

      if (line.length < maxWidth) {
        line += ' '.repeat(maxWidth - line.length)
      }
      result.push(line)
      line = ''
      lineSize = word.length
      wordsOnLine.push(word)
    }
  }

  for (const word of words) {
    updateWords(word)    
  }

  if (wordsOnLine.length) {
    let lastLine = wordsOnLine.join(' ')
    lastLine.slice(0, lastLine.length - 1) // remove last space

    if (lastLine.length < maxWidth) {
      lastLine += ' '.repeat(maxWidth - lastLine.length)
    }
    
    result.push(lastLine)
  }

  return result
}
