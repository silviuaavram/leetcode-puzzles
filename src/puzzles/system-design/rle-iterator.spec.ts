import {RLEIterator} from './rle-iterator'

test('iterator works 1', () => {
  const rLEIterator = new RLEIterator([3, 8, 0, 9, 2, 5]) // This maps to the sequence [8,8,8,5,5].

  expect(rLEIterator.next(2)).toEqual(8) // exhausts 2 terms of the sequence, returning 8. The remaining sequence is now [8, 5, 5].
  expect(rLEIterator.next(1)).toEqual(8) // exhausts 1 term of the sequence, returning 8. The remaining sequence is now [5, 5].
  expect(rLEIterator.next(1)).toEqual(5) // exhausts 1 term of the sequence, returning 5. The remaining sequence is now [5].
  expect(rLEIterator.next(2)).toEqual(-1) // exhausts 2 terms, returning -1. This is because the first term exhausted was 5,
})

test('iterator works 2', () => {
  const inputs = [358, 345, 154, 265, 73, 220, 138, 4, 170, 88]
  const outputs = [903, 903, 730, 684, 684, 684, 684, 684, 684, 684]
  const rLEIterator = new RLEIterator([
    811,
    903,
    310,
    730,
    899,
    684,
    472,
    100,
    434,
    611,
  ])

  for (let index = 0; index < inputs.length; index++) {
    expect(rLEIterator.next(inputs[index])).toEqual(outputs[index])
  }
})
