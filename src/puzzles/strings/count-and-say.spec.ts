import {countAndSay} from './count-and-say'

test('gives the correct result for 1', () => {
  expect(countAndSay(1)).toEqual('1')
})

test('gives the correct result for 2', () => {
  expect(countAndSay(2)).toEqual('11')
})

test('gives the correct result for 3', () => {
  expect(countAndSay(3)).toEqual('21')
})

test('gives the correct result for 4', () => {
  expect(countAndSay(4)).toEqual('1211')
})


test('gives the correct result for 5', () => {
  expect(countAndSay(5)).toEqual('111221')
})

test('gives the correct result for 6', () => {
  expect(countAndSay(6)).toEqual('312211')
})

