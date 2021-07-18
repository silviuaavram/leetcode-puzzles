/**
 * https://leetcode.com/problems/ransom-note/
 */

export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false
  }

  const ransomLetters = new Map<string, number>()
  const magazineLetters = new Map<string, number>()

  for (let index = 0; index < ransomNote.length; index++) {
    ransomLetters.set(
      ransomNote[index],
      (ransomLetters.get(ransomNote[index]) ?? 0) + 1,
    )
  }
  for (let index = 0; index < magazine.length; index++) {
    magazineLetters.set(
      magazine[index],
      (magazineLetters.get(magazine[index]) ?? 0) + 1,
    )
  }

  for (const [letter, count] of ransomLetters.entries()) {
    if (!magazineLetters.has(letter) || magazineLetters.get(letter) < count) {
      return false
    }
  }

  return true
}
