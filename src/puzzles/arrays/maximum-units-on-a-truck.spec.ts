import {maximumUnits} from './maximum-units-on-a-truck'

test('adds the most units in the truck 1', () => {
  const boxTypes = [[1,3],[2,2],[3,1]]
  const truckSize = 4

  expect(maximumUnits(boxTypes, truckSize)).toEqual(8)
})

test('adds the most units in the truck 2', () => {
  const boxTypes = [[5,10],[2,5],[4,7],[3,9]]
  const truckSize = 10

  expect(maximumUnits(boxTypes, truckSize)).toEqual(91)
})

test('adds the most units in the truck 3', () => {
  const boxTypes = [[5,10]]
  const truckSize = 55

  expect(maximumUnits(boxTypes, truckSize)).toEqual(50)
})

test('adds the most units in the truck 3', () => {
  const boxTypes = [[5,10]]
  const truckSize = 0

  expect(maximumUnits(boxTypes, truckSize)).toEqual(0)
})

