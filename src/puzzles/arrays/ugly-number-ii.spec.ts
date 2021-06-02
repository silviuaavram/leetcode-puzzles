import {nthUglyNumber} from './ugly-number-ii'

test('returns the correct 10th number', () => {
  expect(nthUglyNumber(10)).toEqual(12)
})

test('returns the correct 11th number', () => {
  expect(nthUglyNumber(11)).toEqual(15)
})

test('returns the correct 12th number', () => {
  expect(nthUglyNumber(12)).toEqual(16)
})

test('returns the correct 13th number', () => {
  expect(nthUglyNumber(13)).toEqual(18)
})

test('returns the correct 1st number', () => {
  expect(nthUglyNumber(1)).toEqual(1)
})
