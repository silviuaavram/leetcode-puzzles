import {killProcess} from './kill-process'

test('returns the killed processes 1', () => {
  const pid = [1, 3, 10, 5]
  const ppid = [3, 0, 5, 3]
  const kill = 5
  const expected = [5, 10]

  expect(killProcess(pid, ppid, kill)).toEqual(expect.arrayContaining(expected))
})

test('returns the killed processes 2', () => {
  const pid = [1]
  const ppid = [0]
  const kill = 1
  const expected = [1]

  expect(killProcess(pid, ppid, kill)).toEqual(expect.arrayContaining(expected))
})

test('returns the killed processes 1', () => {
  const pid = [1, 2, 3, 4, 5, 6]
  const ppid = [0, 1, 1, 2, 2, 3]
  const kill = 2
  const expected = [2, 4, 5]

  expect(killProcess(pid, ppid, kill)).toEqual(expect.arrayContaining(expected))
})

test('returns the killed processes 1', () => {
  const pid = [1, 2, 3, 4, 5, 6]
  const ppid = [0, 1, 1, 2, 2, 3]
  const kill = 1
  const expected = [1, 2, 3, 4, 5, 6]

  expect(killProcess(pid, ppid, kill)).toEqual(expect.arrayContaining(expected))
})


