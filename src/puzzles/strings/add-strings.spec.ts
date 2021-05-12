import {addStrings} from './add-strings'

test('adds two strings 1', () => {
  const num1 = '11'
  const num2 = '123'

  expect(addStrings(num1, num2)).toEqual('134')
})

test('adds two strings 2', () => {
  const num1 = '456'
  const num2 = '77'

  expect(addStrings(num1, num2)).toEqual('533')
})

test('adds two strings 3', () => {
  const num1 = '0'
  const num2 = '0'

  expect(addStrings(num1, num2)).toEqual('0')
})

test('adds two strings 4', () => {
  const num1 = '0'
  const num2 = '456'

  expect(addStrings(num1, num2)).toEqual(num2)
})

test('adds two strings 5', () => {
  const num1 = '1234'
  const num2 = '566'

  expect(addStrings(num1, num2)).toEqual('1800')
})

test('adds two strings 6', () => {
  const num1 = '9999'
  const num2 = '1'

  expect(addStrings(num1, num2)).toEqual('10000')
})

