import {SnapshotArray} from './snapshot-array'

test('the array works 1', () => {
  const array = new SnapshotArray(3)

  array.set(0, 5)
  const id1 = array.snap()
  array.set(0, 6)

  expect(array.get(0, id1)).toEqual(5)

  const id2 = array.snap()

  expect(array.get(0, id1)).toEqual(5)
  expect(array.get(0, id2)).toEqual(6)
  expect(array.get(1, id2)).toEqual(0)
  expect(array.get(1, id1)).toEqual(0)
})

test('the array works 2', () => {
  const array = new SnapshotArray(1)

  array.set(0, 15)
  array.snap()
  array.snap()
  array.snap()

  expect(array.get(0, 2)).toEqual(15)

  array.snap()
  array.snap()
  expect(array.get(0, 0)).toEqual(15)
})
