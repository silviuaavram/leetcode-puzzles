import {canConstruct} from './ransom-note'

test('can construct note 1', () => {
  const ransomNote = 'a'
  const magazine = 'b'

  expect(canConstruct(ransomNote, magazine)).toEqual(false)
})

test('can construct note 2', () => {
  const ransomNote = 'aa'
  const magazine = 'ab'

  expect(canConstruct(ransomNote, magazine)).toEqual(false)
})

test('can construct note 3', () => {
  const ransomNote = 'aa'
  const magazine = 'aab'

  expect(canConstruct(ransomNote, magazine)).toEqual(true)
})
