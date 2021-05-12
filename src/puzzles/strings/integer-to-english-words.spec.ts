import {numberToWords} from './integer-to-english-words'

test('should return the string representation for 123', () => {
  const num = 123

  expect(numberToWords(num)).toBe('One Hundred Twenty Three')
})

test('should return the string representation for 12345', () => {
  const num = 12345

  expect(numberToWords(num)).toBe('Twelve Thousand Three Hundred Forty Five')
})

test('should return the string representation for 1234567', () => {
  const num = 1234567

  expect(numberToWords(num)).toBe('One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven')
})

test('should return the string representation for 1234567891', () => {
  const num = 1234567891

  expect(numberToWords(num)).toBe('One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One')
})

test('should return the string representation for 102', () => {
  const num = 102

  expect(numberToWords(num)).toBe('One Hundred Too')
})

test('should return the string representation for 12', () => {
  const num = 12

  expect(numberToWords(num)).toBe('Twelve')
})

test('should return the string representation for 0', () => {
  const num = 0

  expect(numberToWords(num)).toBe('Zero')
})

