import {addBinary} from './add-binary'

test('adds binaries 1', () => {
  const bin1 = '11'
  const bin2 = '1'
  const expected = '100'

  expect(addBinary(bin1, bin2)).toEqual(expected)
})

test('adds binaries 2', () => {
  const bin1 = '1010'
  const bin2 = '1011'
  const expected = '10101'

  expect(addBinary(bin1, bin2)).toEqual(expected)
})

test('adds binaries 3', () => {
  const bin1 = '11'
  const bin2 = '1001'
  const expected = '1100'

  expect(addBinary(bin1, bin2)).toEqual(expected)
})

test('adds binaries 4', () => {
  const bin1 = ''
  const bin2 = '111'
  const expected = '111'

  expect(addBinary(bin1, bin2)).toEqual(expected)
})

test('adds binaries 5', () => {
  const bin1 = '1'
  const bin2 = '1111'
  const expected = '10000'

  expect(addBinary(bin1, bin2)).toEqual(expected)
})

test('adds binaries 6', () => {
  const bin1 = '1'
  const bin2 = '1011'
  const expected = '1100'

  expect(addBinary(bin1, bin2)).toEqual(expected)
})

test('adds binaries 7', () => {
  const bin1 = '11'
  const bin2 = '1100'
  const expected = '1111'

  expect(addBinary(bin1, bin2)).toEqual(expected)
})

test('adds binaries 8', () => {
  const bin1 = '10'
  const bin2 = '101'
  const expected = '111'

  expect(addBinary(bin1, bin2)).toEqual(expected)
})
