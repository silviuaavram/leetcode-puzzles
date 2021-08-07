import {Heap} from './utils.heap'

test('the Heap works', () => {
  const heap = new Heap()

  heap.add(2)
  expect(heap.peek()).toEqual(2)

  heap.add(5)
  expect(heap.peek()).toEqual(5)

  heap.add(3)
  expect(heap.peek()).toEqual(5)

  heap.add(4)
  expect(heap.peek()).toEqual(5)

  heap.add(6)
  expect(heap.peek()).toEqual(6)

  expect(heap.remove()).toEqual(6)
  expect(heap.peek()).toEqual(5)
  expect(heap.remove()).toEqual(5)
  expect(heap.peek()).toEqual(4)

  heap.add(1)
  expect(heap.peek()).toEqual(4)

  heap.add(9)
  expect(heap.remove()).toEqual(9)
  expect(heap.remove()).toEqual(4)
  expect(heap.remove()).toEqual(3)
  expect(heap.remove()).toEqual(2)
  expect(heap.remove()).toEqual(1)

  heap.add(11)
  expect(heap.remove()).toEqual(11)
})
