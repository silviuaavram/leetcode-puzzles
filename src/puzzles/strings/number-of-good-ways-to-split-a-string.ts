/**
 * https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
 */
export function numSplits(s: string): number {
  const charsCountFromLeft: number[] = []
  const charsCountFromRight: number[] = []
  const uniquecharsFromLeft = new Set<string>()
  const uniquecharsFromRight = new Set<string>()
  let result = 0

  for (let index = 0; index < s.length; index++) {
    const charFromLeft = s[index]
    const charFromRight = s[s.length - 1 - index]

    if (!uniquecharsFromLeft.has(charFromLeft)) {
      uniquecharsFromLeft.add(charFromLeft)
      charsCountFromLeft.push(
        (charsCountFromLeft[charsCountFromLeft.length - 1] ?? 0) + 1,
      )
    } else {
      charsCountFromLeft.push(
        charsCountFromLeft[charsCountFromLeft.length - 1] ?? 1,
      )
    }

    if (!uniquecharsFromRight.has(charFromRight)) {
      uniquecharsFromRight.add(charFromRight)
      charsCountFromRight.push(
        (charsCountFromRight[charsCountFromRight.length - 1] ?? 0) + 1,
      )
    } else {
      charsCountFromRight.push(
        charsCountFromRight[charsCountFromRight.length - 1] ?? 1,
      )
    }
  }

  charsCountFromRight.reverse()

  for (let index = 0; index < s.length - 1; index++) {
    if (charsCountFromLeft[index] === charsCountFromRight[index + 1]) {
      result++
    }
  }

  return result
}
