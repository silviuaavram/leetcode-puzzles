import {isAlienSorted} from './verifying-an-alien-dictionary'

test('words are in order 1', () => {
  const words = ['hello', 'leetcode']
  const order = 'hlabcdefgijkmnopqrstuvwxyz'

  expect(isAlienSorted(words, order)).toEqual(true)
})

test('words are in order 2', () => {
  const words = ['hello']
  const order = 'hlabcdefgijkmnopqrstuvwxyz'

  expect(isAlienSorted(words, order)).toEqual(true)
})

test('words are in order 3', () => {
  const words = ['app', 'apple']
  const order = 'abcdefghijklmnopqrstuvwxyz'

  expect(isAlienSorted(words, order)).toEqual(true)
})

test('words are not in order 1', () => {
  const words = ['apple', 'app']
  const order = 'abcdefghijklmnopqrstuvwxyz'

  expect(isAlienSorted(words, order)).toEqual(false)
})

test('words are not in order 2', () => {
  const words = ['word', 'world', 'row']
  const order = 'worldabcefghijkmnpqstuvxyz'

  expect(isAlienSorted(words, order)).toEqual(false)
})
