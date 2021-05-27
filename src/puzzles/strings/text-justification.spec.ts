import {fullJustify} from './text-justification'

test('should justify the words 1', () => {
  const words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.']
  const maxWidth = 16
  const expected = ['This    is    an', 'example  of text', 'justification.  ']

  expect(fullJustify(words, maxWidth)).toEqual(expected)
})

test('should justify the words 2', () => {
  const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be']
  const maxWidth = 16
  const expected = ['What   must   be', 'acknowledgment  ', 'shall be        ']

  expect(fullJustify(words, maxWidth)).toEqual(expected)
})

test('should justify the words 3', () => {
  const words = [
    'Science',
    'is',
    'what',
    'we',
    'understand',
    'well',
    'enough',
    'to',
    'explain',
    'to',
    'a',
    'computer.',
    'Art',
    'is',
    'everything',
    'else',
    'we',
    'do',
  ]
  const maxWidth = 20
  const expected = [
    'Science  is  what we',
    'understand      well',
    'enough to explain to',
    'a  computer.  Art is',
    'everything  else  we',
    'do                  ',
  ]

  expect(fullJustify(words, maxWidth)).toEqual(expected)
})
