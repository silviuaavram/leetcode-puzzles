/**
 * https://leetcode.com/problems/count-and-say/
 */

export function countAndSay(n: number): string {
  let number = '1'
  const acc = []

  for (let i = 1; i < n; i++) {
    let count = 0
    let digit = number[0]
    
    for (let j = 0; j < number.length; j++) {
      const currentDigit = number[j]

      if (digit === currentDigit) {
        count++
      } else {
        acc.push(`${count}${digit}`)
        digit = currentDigit
        count = 1
      }
    }

    acc.push(`${count}${digit}`)
    number = acc.join('')
    acc.length = 0
  }

  return number
}
