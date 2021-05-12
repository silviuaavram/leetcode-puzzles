/**
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
 */
export function minRemoveToMakeValid(s: string): string {
  const paranthesesStack: string[] = []
  const indecesStack: number[] = []

  for (let index = 0; index < s.length; index++) {
    switch (s[index]) {
      case '(':
        paranthesesStack.push('(')
        indecesStack.push(index)
        break
      case ')':
        if (paranthesesStack[paranthesesStack.length - 1] === '(') {
          paranthesesStack.pop()
          indecesStack.pop()
        } else {
          paranthesesStack.push(')')
          indecesStack.push(index)
        }
        break
      default:
        continue
    }
  }

  return s
    .split('')
    .filter((char, index) => indecesStack.indexOf(index) === -1)
    .join('')
}
