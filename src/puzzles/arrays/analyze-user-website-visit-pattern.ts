/**
 * https://leetcode.com/problems/analyze-user-website-visit-pattern/
 */

export function mostVisitedPattern(
  username: string[],
  timestamp: number[],
  website: string[],
): string[] {
  const length = username.length
  const usersMap = new Map<string, string[]>()
  const tuples: {
    username: string
    timestamp: number
    website: string
  }[] = username.reduce(
    (acc, u, index) => [
      ...acc,
      {username: u, timestamp: timestamp[index], website: website[index]},
    ],
    [],
  )

  tuples.sort((a, b) => a.timestamp - b.timestamp)

  for (let index = 0; index < length; index++) {
    if (!usersMap.has(tuples[index].username)) {
      usersMap.set(tuples[index].username, [])
    }

    usersMap.get(tuples[index].username).push(tuples[index].website)
  }

  const sequences = Array.from(usersMap.values()).reduce<string[]>((acc, s) => {
    if (s.length >= 3) {
      const seqAux = new Set<string>()
      for (let i = 0; i <= s.length - 3; i++) {
        for (let j = i + 1; j <= s.length - 2; j++) {
          for (let k = j + 1; k <= s.length - 1; k++) {
            seqAux.add([s[i], s[j], s[k]].join(' '))
          }
        }
      }

      seqAux.forEach(seq => acc.push(seq))
    }

    return acc
  }, [])

  const sequencesMap = new Map<string, number>()
  let max = 0

  for (const sequence of sequences) {
    const newValue = (sequencesMap.get(sequence) ?? 0) + 1
    max = Math.max(max, newValue)
    sequencesMap.set(sequence, newValue)
  }

  return Array.from(sequencesMap.entries())
    .filter(([s, c]) => c === max)
    .sort((a, b) => a[0].localeCompare(b[0]))[0][0]
    .split(' ')
}
