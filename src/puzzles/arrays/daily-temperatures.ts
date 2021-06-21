/**
 * https://leetcode.com/problems/daily-temperatures/
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const temperatureStack: number[] = [temperatures[0]]
  const indecesStack: number[] = [0]
  const result: number[] = new Array(temperatures.length).fill(0)

  for (let index = 1; index < temperatures.length; index++) {
    while (
      temperatureStack.length &&
      temperatures[index] > temperatureStack[temperatureStack.length - 1]
    ) {
      const prevTemperatureIndex = indecesStack.pop()

      result[prevTemperatureIndex] = index - prevTemperatureIndex
      temperatureStack.pop()
    }

    temperatureStack.push(temperatures[index])
    indecesStack.push(index)
  }

  return result
}
