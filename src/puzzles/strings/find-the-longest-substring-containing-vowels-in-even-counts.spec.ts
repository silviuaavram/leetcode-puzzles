import {findTheLongestSubstring} from './find-the-longest-substring-containing-vowels-in-even-counts'

test('finds the longest substring with even number of vowels 1', () => {
  const s = 'eleetminicoworoep'

  expect(findTheLongestSubstring(s)).toEqual(13)
})

test('finds the longest substring with even number of vowels 2', () => {
  const s = 'leetcodeisgreat'

  expect(findTheLongestSubstring(s)).toEqual(5)
})

test('finds the longest substring with even number of vowels 3', () => {
  const s = 'bcbcbc'

  expect(findTheLongestSubstring(s)).toEqual(6)
})

test('finds the longest substring with even number of vowels 4', () => {
  const s = 'aeiouuu'

  expect(findTheLongestSubstring(s)).toEqual(2)
})
