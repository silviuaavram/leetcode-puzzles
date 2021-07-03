/**
 * https://leetcode.com/problems/top-k-frequent-words/
 */

export function topKFrequent(words: string[], k: number): string[] {
  const wordsMap = new Map<string, number>()

  for (let index = 0; index < words.length; index++) {
    if (!wordsMap.has(words[index])) {
      wordsMap.set(words[index], 0)
    }

    wordsMap.set(words[index], (wordsMap.get(words[index]) ?? 0) + 1)
  }

  return Array.from(wordsMap.entries())
    .sort((entry1, entry2) => {
      const frequency1 = entry1[1]
      const frequency2 = entry2[1]

      if (frequency1 === frequency2) {
        return entry1[0].localeCompare(entry2[0])
      } else {
        return frequency2 - frequency1
      }
    })
    .slice(0, k)
    .map(entry => entry[0])
}
