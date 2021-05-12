/**
 * https://leetcode.com/problems/add-binary/
 */
export function addBinary(a: string, b: string): string {
  if (!a.length) {
    return b
  }

  if (!b.length) {
    return a
  }

  let carryOver = false
  const minLength = Math.min(a.length, b.length)
  const maxLength = Math.max(a.length, b.length)
  const aReverse = a
    .split('')
    .reverse()
    .join('')
  const bReverse = b
    .split('')
    .reverse()
    .join('')
  const largerString = aReverse.length > bReverse.length ? aReverse : bReverse
  const result: string[] = []

  for (let index = 0; index < minLength; index++) {
    if (aReverse[index] === bReverse[index]) {
      result.push(carryOver ? '1' : '0')
      carryOver = aReverse[index] === '1'
    } else {
      result.push(carryOver ? '0' : '1')
    }
  }

  let index = minLength
  if (carryOver) {
    for (; index < maxLength && largerString[index] === '1'; index++) {
      result.push('0')
    }

    result.push('1')
  }

  if (index < maxLength) {
    result.push(...largerString.slice(index + (carryOver ? 1 : 0)).split(''))
  }

  return result.reverse().join('')
}
