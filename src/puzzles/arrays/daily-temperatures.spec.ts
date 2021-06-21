import {dailyTemperatures} from './daily-temperatures'

test('returns the correct number of days 1', () => {
  const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
  const expected = [1, 1, 4, 2, 1, 1, 0, 0]

  expect(dailyTemperatures(temperatures)).toEqual(expected)
})

test('returns the correct number of days 2', () => {
  const temperatures = [30, 40, 50, 60]
  const expected = [1, 1, 1, 0]

  expect(dailyTemperatures(temperatures)).toEqual(expected)
})

test('returns the correct number of days 3', () => {
  const temperatures = [30, 60, 90]
  const expected = [1, 1, 0]

  expect(dailyTemperatures(temperatures)).toEqual(expected)
})

test('returns the correct number of days 4', () => {
  const temperatures = [60, 50, 40, 30]
  const expected = [0, 0, 0, 0]

  expect(dailyTemperatures(temperatures)).toEqual(expected)
})

