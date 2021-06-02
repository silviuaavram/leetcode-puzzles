/**
 * https://leetcode.com/problems/ugly-number-ii/
 */
export function nthUglyNumber(n: number): number {
  const numbers = [1]
  let index2 = 0
  let index3 = 0
  let index5 = 0

  for (let index = 1; index < n; index++) {
    const choice2 = numbers[index2] * 2
    const choice3 = numbers[index3] * 3
    const choice5 = numbers[index5] * 5
    const choiceMax = Math.min(choice2,choice3, choice5)

    numbers.push(choiceMax)

    if (choiceMax === choice2) {
      index2++
    }
    if (choiceMax === choice3) {
      index3++
    }
    if (choiceMax === choice5) {
      index5++
    }
  }

  return numbers[numbers.length - 1]
}
