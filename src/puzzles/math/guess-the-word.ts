/**
 * https://leetcode.com/problems/guess-the-word/
 */

import {Master} from './guess-the-word.spec'

/**
 * // This is the Master's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Master {
 *      guess(word: string): number {}
 * }
 */

export function findSecretWord(wordlist: string[], master: Master) {
  let words = [...wordlist]
  let index = Math.floor(Math.random() * words.length)
  let matches = master.guess(words[index])

  while (matches < 6) {
    const [firstWord] = words.splice(index, 1)

    words = words.filter(
      word =>
        word.split('').reduce((acc, char, index) => {
          if (char === firstWord[index]) {
            acc++
          }

          return acc
        }, 0) === matches,
    )

    index = Math.floor(Math.random() * words.length)
    matches = master.guess(words[index])
  }
}
