import {reverseWords} from './reverse-words-in-a-string'


test.skip('reverses words 1', () => {
  const string = 'the sky is blue'
  const expected = 'blue is sky the'

  expect(reverseWords(string)).toEqual(expected)
})

test('reverses words 2', () => {
  const string = '  hello world  '
  const expected = 'world hello'

  expect(reverseWords(string)).toEqual(expected)
})

test.skip('reverses words 3', () => {
  const string = 'a good   example'
  const expected = 'example good a'

  expect(reverseWords(string)).toEqual(expected)
})

test.skip('reverses words 4', () => {
  const string = '  Bob    Loves  Alice   '
  const expected = 'Alice Loves Bob'

  expect(reverseWords(string)).toEqual(expected)
})

test.skip('reverses words 5', () => {
  const string = 'Alice does not even like bob'
  const expected = 'bob like even not does Alice'

  expect(reverseWords(string)).toEqual(expected)
})

test.skip('reverses words 6', () => {
  const string = '    '
  const expected = ''

  expect(reverseWords(string)).toEqual(expected)
})

test.skip('does not reverse empty string', () => {
	const string = ''

  expect(reverseWords(string)).toEqual(string)
})

test.skip('does not reverse one word string', () => {
	const string = 'alabalaprotocala'

  expect(reverseWords(string)).toEqual(string)
})

test.skip('only removes trailing spaces in one word string', () => {
	const string = '    alabalaprotocala   '
  const expected = 'alabalaprotocala'

  expect(reverseWords(string)).toEqual(expected)
})

