/**
 * https://leetcode.com/problems/add-strings/
 */
export function addStrings(num1: string, num2: string): string {
  if (!num1.length) {
    return num2
  }

  if (!num2.length) {
    return num1
  }

  const input1 = num1
    .split('')
    .reverse()
    .join('')
  const input2 = num2
    .split('')
    .reverse()
    .join('')
  const minLength = Math.min(input1.length, input2.length)
  const maxLength = Math.max(input1.length, input2.length)
  const maxInput = input1.length > input2.length ? input1 : input2
  let carryOver = false
  const result: string[] = []

  for (let index = 0; index < minLength; index++) {
    const digit1 = Number(input1[index])
    const digit2 = Number(input2[index])
    const sum = digit1 + digit2 + (carryOver ? 1 : 0)

    if (sum > 9) {
      carryOver = true
      result.push(String(sum % 10))
    } else {
      carryOver = false
      result.push(String(sum))
    }
  }

  for (let index = minLength; index < maxLength; index++) {
    if (carryOver) {
      if (maxInput[index] === '9') {
        result.push('0')
      } else {
        result.push(String(Number(maxInput[index]) + 1))
        carryOver = false
      }
    } else {
      result.push(maxInput[index])
    }
  }

  if (carryOver) {
    result.push('1')
  }

  return result.reverse().join('')
}
