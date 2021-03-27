import {fib} from './fibonacci-number'

test('should return 8', () => {
  expect(fib(5)).toEqual(5)
})

test('should return 2', () => {
  expect(fib(2)).toEqual(1)
})

test('should return 3', () => {
  expect(fib(3)).toEqual(2)
})

test('should return 5', () => {
  expect(fib(4)).toEqual(3)
})