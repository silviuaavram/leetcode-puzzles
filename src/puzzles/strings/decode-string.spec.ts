import {decodeString} from './decode-string'

test('should decode the string correctly 1', () => {
  const s = '3[a]2[bc]'
  const expected = 'aaabcbc'

  expect(decodeString(s)).toEqual(expected)
})

test('should decode the string correctly 2', () => {
  const s = '3[a2[c]]'
  const expected = 'accaccacc'

  expect(decodeString(s)).toEqual(expected)
})

test('should decode the string correctly 3', () => {
  const s = '2[abc]3[cd]ef'
  const expected = 'abcabccdcdcdef'

  expect(decodeString(s)).toEqual(expected)
})

test('should decode the string correctly 4', () => {
  const s = 'abc3[cd]xyz'
  const expected = 'abccdcdcdxyz'

  expect(decodeString(s)).toEqual(expected)
})

test('should decode the string correctly 5', () => {
  const s = ''
  const expected = ''

  expect(decodeString(s)).toEqual(expected)
})

test('should decode the string correctly 6', () => {
  const s = '2[3[4[5[a]b]c]d]e'
  const expected = 'aaaaabaaaaabaaaaabaaaaabcaaaaabaaaaabaaaaabaaaaabcaaaaabaaaaabaaaaabaaaaabcdaaaaabaaaaabaaaaabaaaaabcaaaaabaaaaabaaaaabaaaaabcaaaaabaaaaabaaaaabaaaaabcde'

  expect(decodeString(s)).toEqual(expected)
})
