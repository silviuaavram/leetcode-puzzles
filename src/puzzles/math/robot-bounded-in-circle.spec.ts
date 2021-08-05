import {isRobotBounded} from './robot-bounded-in-circle'

test('robot moves in circle 1', () => {
  const instructions = 'GGLLGG'

  expect(isRobotBounded(instructions)).toEqual(true)
})

test('robot moves in circle 2', () => {
  const instructions = 'GG'

  expect(isRobotBounded(instructions)).toEqual(false)
})

test('robot moves in circle 3', () => {
  const instructions = 'GL'

  expect(isRobotBounded(instructions)).toEqual(true)
})

test('robot moves in circle 4', () => {
  const instructions = 'R'

  expect(isRobotBounded(instructions)).toEqual(true)
})
