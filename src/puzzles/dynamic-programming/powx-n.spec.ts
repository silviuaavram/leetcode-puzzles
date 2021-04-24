import {myPow} from './powx-n'

test('should calculate pow 2, 10', () => {
  expect(myPow(2, 10)).toEqual(1024)
})

test('should calculate pow 2.1, 3', () => {
  expect(myPow(2.1, 3)).toEqual(9.261)
})

test('should calculate pow 2, -2', () => {
  expect(myPow(2, -2)).toEqual(0.25)
})

test('should calculate pow 2, 5', () => {
  expect(myPow(2, 5)).toEqual(32)
})

test('should calculate pow 3, 4', () => {
  expect(myPow(3,4)).toEqual(81)
})

test('should calculate pow 1.5, 3', () => {
  expect(myPow(1.5, 3)).toEqual(3.375)
})

test('should calculate pow 8.88023, 3', () => {
  expect(myPow(8.88023, 3)).toEqual(700.28148)
})

test('should calculate pow -13.62608, 3', () => {
  expect(myPow(-13.62608, 3)).toEqual(-2529.95504)
})
