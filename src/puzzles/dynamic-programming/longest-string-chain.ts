/**
 * https://leetcode.com/problems/longest-string-chain/
 */
export function longestStrChain(words: string[]): number {
  const wordChains = new Map<string, string[]>()
  const wordLengths = new Map<string, number>()
  words.sort((a, b) => a.length - b.length)

  for (let index = 0; index < words.length; index++) {
    const word = words[index]

    wordChains.set(word, [])

    if (word.length === 1) {
      continue
    }

    for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
      const subWord = `${word.slice(0, wordIndex)}${word.slice(wordIndex + 1)}`
      if (wordChains.has(subWord)) {
        wordChains.get(word).push(subWord)
      }
    }
  }

  let maxLength = 0

  wordChains.forEach((value, key) => {
    const length = Math.max(1, ...value.map(v => 1 + wordLengths.get(v)))
    wordLengths.set(key, length)
    maxLength = Math.max(maxLength, length)
  })

  return maxLength
}
