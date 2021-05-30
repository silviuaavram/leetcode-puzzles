import {TrieNode} from 'utils'

/**
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 */
export class WordDictionary {
  private words: TrieNode
  constructor() {
    this.words = {isWord: false, values: new Map()}
  }

  addWord(word: string): void {
    const chars = word.split('')
    let current = this.words

    for (const char of chars) {
      if (!current.values.has(char)) {
        current.values.set(char, {isWord: false, values: new Map()})
      }

      current = current.values.get(char)
    }

    current.isWord = true
  }

  search(word: string): boolean {
    const chars = word.split('')
    let currentNodes = [this.words]

    for (const char of chars) {
      if (char === '.') {
        currentNodes = currentNodes.reduce((acc, currentNode) => {
          currentNode.values.forEach(v => {
            acc.push(v)
          })

          return acc
        }, [])
      } else {
        currentNodes = currentNodes.reduce((acc, currentNode) => {
          if (currentNode.values.has(char)) {
            acc.push(currentNode.values.get(char))
          }

          return acc
        }, [])
      }

      if (currentNodes.length === 0) {
        return false
      }
    }

    for (const node of currentNodes) {
      if (node.isWord) {
        return true
      }
    }

    return false
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
