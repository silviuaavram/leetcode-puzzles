import {strStr} from './implement-strstr'

test('should find ll in hello', () => {
  expect(strStr('hello', 'll')).toEqual(2)
})

test('should not find find bba in aaaaa', () => {
  expect(strStr('aaaaa', 'bba')).toEqual(-1)
})

test('should find ll in hello', () => {
  expect(strStr('hello', '')).toEqual(0)
})

test('should find needle in alaneedlebabaneedlelala', () => {
  expect(strStr('alaneedlebabaneedlelala', 'needle')).toEqual(3)
})

test('should find a in a', () => {
  expect(strStr('a', 'a')).toEqual(0)
})

test('should find needle in needle', () => {
  expect(strStr('needle', 'needle')).toEqual(0)
})