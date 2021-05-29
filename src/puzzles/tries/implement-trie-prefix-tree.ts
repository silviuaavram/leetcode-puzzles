import {TrieNode} from 'utils'

/**
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */
export class Trie {
  private words: TrieNode
  constructor() {
    this.words = {isWord: false, values: new Map()}
  }

  insert(word: string): void {
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
    let current = this.words

    for (const char of chars) {
      if (!current.values.has(char)) {
        return false
      }
      current = current.values.get(char)
    }

    return current.isWord
  }

  startsWith(prefix: string): boolean {
    const chars = prefix.split('')
    let current = this.words

    for (const char of chars) {
      if (!current.values.has(char)) {
        return false
      }
      current = current.values.get(char)
    }

    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
