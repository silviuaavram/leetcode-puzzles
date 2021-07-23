import {wordsTyping} from './sentence-screen-fitting'

test('fits sentencences on the screen 1', () => {
  const sentence = ['hello', 'world']
  const rows = 2
  const cols = 8

  expect(wordsTyping(sentence, rows, cols)).toEqual(1)
})

test('fits sentencences on the screen 2', () => {
  const sentence = ['a', 'bcd', 'e']
  const rows = 3
  const cols = 6

  expect(wordsTyping(sentence, rows, cols)).toEqual(2)
})

test('fits sentencences on the screen 3', () => {
  const sentence = ['i', 'had', 'apple', 'pie']
  const rows = 4
  const cols = 5

  expect(wordsTyping(sentence, rows, cols)).toEqual(1)
})

test('fits sentencences on the screen 3', () => {
  const sentence = ['i', 'hadhad', 'apple', 'pie']
  const rows = 4
  const cols = 5

  expect(wordsTyping(sentence, rows, cols)).toEqual(0)
})
