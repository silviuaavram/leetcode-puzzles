import {Solution} from './random-pick-with-weight'

test('picking solution works 1', () => {
  const picker = new Solution([1])

  expect(picker.pickIndex()).toEqual(0)
})

test('picking solution works 2', () => {
  const picker = new Solution([10, 30])
  const solutions = new Map<number, number>()

  for (let index = 0; index < 5; index++) {
    const value = picker.pickIndex()

    solutions.set(value, (solutions.get(value) ?? 0) + 1)
  }

  expect(solutions.get(0)).toEqual(1)
  expect(solutions.get(1)).toEqual(4)
})

// 1 2 3 1 2 3
// 1 3 6 7 9 12
