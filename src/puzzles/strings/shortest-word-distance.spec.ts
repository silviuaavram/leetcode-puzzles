import {shortestDistance} from './shortest-word-distance'

test('gets the shortest distance between words 1', () => {
  const wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes']
  const word1 = 'coding'
  const word2 = 'practice'

  expect(shortestDistance(wordsDict, word1, word2)).toEqual(3)
})

test('gets the shortest distance between words 2', () => {
  const wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes']
  const word1 = 'makes'
  const word2 = 'coding'

  expect(shortestDistance(wordsDict, word1, word2)).toEqual(1)
})

test('gets the shortest distance between words 3', () => {
  const wordsDict = ['makes', 'coding']
  const word1 = 'makes'
  const word2 = 'coding'

  expect(shortestDistance(wordsDict, word1, word2)).toEqual(1)
})

test('gets the shortest distance between words 4', () => {
  const wordsDict = ['a', 'c', 'a', 'b']
  const word1 = 'b'
  const word2 = 'a'

  expect(shortestDistance(wordsDict, word1, word2)).toEqual(1)
})
