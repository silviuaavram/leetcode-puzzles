import {reverseWords} from './reverse-words-in-a-string-iii'

test('can reverse the words in a sentence 1', () => {
  expect(reverseWords("Let's take LeetCode contest")).toEqual(
    "s'teL ekat edoCteeL tsetnoc",
  )
})

test('can reverse the words in a sentence 2', () => {
  expect(reverseWords('God Ding')).toEqual('doG gniD')
})

test('can reverse the words in a sentence 3', () => {
  expect(reverseWords('God')).toEqual('doG')
})

test('can reverse the words in a sentence 4', () => {
  expect(reverseWords('')).toEqual('')
})
