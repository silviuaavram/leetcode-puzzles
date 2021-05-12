import {leastInterval} from './task-scheduler'

test('takes 8 units of time', () => {
  const tasks = ['A', 'A', 'A', 'B', 'B', 'B']
  const n = 2

  expect(leastInterval(tasks, n)).toEqual(8)
})

test('takes 6 units of time', () => {
  const tasks = ['A', 'A', 'A', 'B', 'B', 'B']
  const n = 0

  expect(leastInterval(tasks, n)).toEqual(6)
})

test('takes 16 units of time', () => {
  const tasks = ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
  const n = 2

  expect(leastInterval(tasks, n)).toEqual(16)
})

test('takes 9 units of time', () => {
  const tasks = ['A', 'B', 'C', 'D', 'A', 'E', 'B', 'A', 'B']
  const n = 2

  expect(leastInterval(tasks, n)).toEqual(9)
})

test('takes 5 units of time', () => {
  const tasks = ['A', 'A', 'B', 'B', 'B']
  const n = 1

  expect(leastInterval(tasks, n)).toEqual(5)
})
