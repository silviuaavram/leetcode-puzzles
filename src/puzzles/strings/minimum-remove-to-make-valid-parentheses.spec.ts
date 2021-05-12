import {minRemoveToMakeValid} from './minimum-remove-to-make-valid-parentheses'

test('removes parantheses 1', () => {
  const s = 'lee(t(c)o)de)'
  const expected = 'lee(t(c)o)de'

  expect(minRemoveToMakeValid(s)).toEqual(expected)
})

test('removes parantheses 2', () => {
  const s = 'a)b(c)d'
  const expected = 'ab(c)d'

  expect(minRemoveToMakeValid(s)).toEqual(expected)
})

test('removes parantheses 3', () => {
  const s = '))(('
  const expected = ''

  expect(minRemoveToMakeValid(s)).toEqual(expected)
})

test('removes parantheses 4', () => {
  const s = '(a(b(c)d)'
  const expected = 'a(b(c)d)'

  expect(minRemoveToMakeValid(s)).toEqual(expected)
})

test('removes parantheses 5', () => {
  const s = '(a(b(c)d)e)x(y)z('
  const expected = '(a(b(c)d)e)x(y)z'

  expect(minRemoveToMakeValid(s)).toEqual(expected)
})
