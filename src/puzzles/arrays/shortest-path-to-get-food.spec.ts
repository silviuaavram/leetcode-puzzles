import {getFood} from './shortest-path-to-get-food'

test('gets food fast 1', () => {
  const grid = [
    ['X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '*', 'O', 'O', 'O', 'X'],
    ['X', 'O', 'O', '#', 'O', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X'],
  ]

  expect(getFood(grid)).toEqual(3)
})

test('gets food fast 2', () => {
  const grid = [
    ['X', 'X', 'X', 'X', 'X'],
    ['X', '*', 'X', 'O', 'X'],
    ['X', 'O', 'X', '#', 'X'],
    ['X', 'X', 'X', 'X', 'X'],
  ]

  expect(getFood(grid)).toEqual(-1)
})

test('gets food fast 3', () => {
  const grid = [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', '*', 'O', 'X', 'O', '#', 'O', 'X'],
    ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'X'],
    ['X', 'O', 'O', 'O', 'O', '#', 'O', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ]

  expect(getFood(grid)).toEqual(6)
})

test('gets food fast 4', () => {
  const grid = [
    ['O', '*'],
    ['#', 'O'],
  ]

  expect(getFood(grid)).toEqual(2)
})

test('gets food fast 5', () => {
  const grid = [
    ['X', '*'],
    ['#', 'X'],
  ]

  expect(getFood(grid)).toEqual(-1)
})

test('gets food fast 6', () => {
  const grid = [
    ['O', 'O', 'O', 'O', 'O'],
    ['O', '*', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', '#', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'O', '#'],
  ]

  expect(getFood(grid)).toEqual(4)
})

test('gets food fast 7', () => {
  const grid = [
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      '#',
      'O',
      'O',
      '*',
      'O',
      '#',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      '#',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      '#',
      'O',
      'O',
    ],
    [
      'O',
      '#',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'X',
      '#',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'X',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      '#',
      'X',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      '#',
      '#',
      '#',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
    ],
    [
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
    [
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'X',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      '#',
      'O',
      'O',
      '#',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ],
  ]

  expect(getFood(grid)).toEqual(2)
})
