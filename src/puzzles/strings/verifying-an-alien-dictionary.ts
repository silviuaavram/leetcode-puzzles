/**
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 */
export function isAlienSorted(words: string[], order: string): boolean {
  if (words.length < 2) {
    return true
  }

  const orderMap = new Map<string, number>()

  for (let index = 0; index < order.length; index++) {
    orderMap.set(order[index], index)
  }

  for (let i = 0; i < words.length - 1; i++) {
    let equal = true
    for (let j = 0; j < Math.min(words[i].length, words[i + 1].length); j++) {
      if (orderMap.get(words[i][j]) < orderMap.get(words[i + 1][j])) {
        equal = false
        break
      }
      
      if (orderMap.get(words[i][j]) > orderMap.get(words[i + 1][j])) {
        return false
      }
    }

    if (equal && words[i].length > words[i + 1].length) {
      return false
    }
  }

  return true
}
