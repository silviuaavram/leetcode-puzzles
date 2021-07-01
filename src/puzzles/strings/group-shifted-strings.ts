/**
 * https://leetcode.com/problems/group-shifted-strings/
 */

export function groupStrings(strings: string[]): string[][] {
  const groups = new Map<string, string[]>()

  for (const string of strings) {
    let differences: number[] = []

    for (let index = 1; index < string.length; index++) {
      let difference = string.charCodeAt(index) - string.charCodeAt(index - 1)

      if (difference < 0) {
        difference += 26
      }

      differences.push(difference)
    }

    const key = differences.reduce(
      (acc, difference) => `${acc ? acc + '_' : ''}${difference}`,
      '',
    )

    if (!groups.has(key)) {
      groups.set(key, [])
    }

    groups.get(key).push(string)
  }

  return Array.from(groups.values()).map(array => array.sort())
}
