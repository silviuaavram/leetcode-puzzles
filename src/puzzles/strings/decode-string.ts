/**
 * https://leetcode.com/problems/decode-string/
 */
export function decodeString(s: string): string {
  const result: string[] = []
  const stringsStack: {count: string; strings: string[]}[] = []

  function parseDigits(index: number): number {
    let digitCount = 0

    if (/\d$/.test(s[index])) {
      if (/\d$/.test(s.slice(index, index + 2))) {
        if (/\d$/.test(s.slice(index, index + 3))) {
          digitCount = 3
        } else {
          digitCount = 2
        }
      } else {
        digitCount = 1
      }
    }

    if (digitCount) {
      stringsStack.push({
        count: s.slice(index, index + digitCount),
        strings: [],
      })
    }

    return digitCount
  }

  function parseCharacter(index: number): boolean {
    if (s[index].match(/[a-z]/i)) {
      if (stringsStack.length) {
        stringsStack[stringsStack.length - 1].strings.push(s[index])
      } else {
        result.push(s[index])
      }

      return true
    }

    return false
  }

  function parseParanthesesEnd(): void {
    const {count, strings} = stringsStack.pop()

    if (stringsStack.length) {
      for (let index = 0; index < Number(count); index++) {
        stringsStack[stringsStack.length - 1].strings.push(...strings)
      }
    } else {
      for (let index = 0; index < Number(count); index++) {
        result.push(...strings)
      }
    }
  }

  for (let index = 0; index < s.length; index++) {
    const digitCount = parseDigits(index)

    if (digitCount) {
      index += digitCount
      // the ++ will jump the [
      continue
    }

    const wasLetter = parseCharacter(index)

    if (wasLetter) {
      continue
    }

    // can only be ]
    parseParanthesesEnd()
  }

  return result.join('')
}
