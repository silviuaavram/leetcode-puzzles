import {topKFrequent} from './top-k-frequent-words'

test('gets the most frequent k words 1', () => {
  const words = ['i', 'love', 'leetcode', 'i', 'love', 'coding']
  const k = 2
  const expected = ['i', 'love']

  expect(topKFrequent(words, k)).toEqual(expected)
})

test('gets the most frequent k words 2', () => {
  const words = [
    'the',
    'day',
    'is',
    'sunny',
    'the',
    'the',
    'the',
    'sunny',
    'is',
    'is',
  ]
  const k = 4
  const expected = ['the', 'is', 'sunny', 'day']

  expect(topKFrequent(words, k)).toEqual(expected)
})

test('gets the most frequent k words 3', () => {
  const words = [
    'a',
    'c',
    'b',
  ]
  const k = 2
  const expected = ['a', 'b']

  expect(topKFrequent(words, k)).toEqual(expected)
})

