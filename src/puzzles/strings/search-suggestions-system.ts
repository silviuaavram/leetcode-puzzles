/**
 * https://leetcode.com/problems/search-suggestions-system/
 */

import {Trie} from 'utils.trie'

export function suggestedProducts(
  products: string[],
  searchWord: string,
): string[][] {
  const productsTrie = new Trie()

  for (const product of products) {
    productsTrie.add(product)
  }

  const result: string[][] = []

  for (let index = 1; index <= searchWord.length; index++) {
    result.push(productsTrie.list(searchWord.substr(0, index)).sort((a, b) => a.localeCompare(b)).slice(0, 3))
    if (result[result.length - 1][2] === 'tyqcpfvorznmxxdzsnkjnrfmy') {
      console.log(searchWord.substr(0, index), productsTrie.list(searchWord.substr(0, index)).sort((a, b) => a.localeCompare(b)))
    }
  }

  return result
}
