import {
  copyRandomList,
  ListNodeWithRandom,
} from './copy-list-with-random-pointer'
import {toLinkedList} from 'utils'

function toLinkedListWithRandom(values: number[]): ListNodeWithRandom {
  return toLinkedList(values) as ListNodeWithRandom
}

function linkedListWithRandomToString(head: ListNodeWithRandom): string {
  if (!head) {
    return ''
  }
  return `[${head.val} ${
    head.random ? head.random.val : 'null'
  }] ${linkedListWithRandomToString(head.next)}`
}

test('should deep copy list 1', () => {
  const values = [7, 13, 11, 10, 1]
  const list: ListNodeWithRandom = toLinkedListWithRandom(values)
  list.random = null
  list.next.random = list
  list.next.next.random = list.next.next.next.next
  list.next.next.next.random = list.next.next
  list.next.next.next.next.random = list

  const copy = copyRandomList(list)

  expect(linkedListWithRandomToString(copy)).toEqual(
    linkedListWithRandomToString(list),
  )
})

test('should deep copy list 2', () => {
  const list = toLinkedListWithRandom([1, 2])
  list.random = list.next
  list.next.random = list

  const copy = copyRandomList(list)

  expect(linkedListWithRandomToString(copy)).toEqual(
    linkedListWithRandomToString(list),
  )
})

test('should deep copy list 3', () => {
  const list = toLinkedListWithRandom([3, 3, 1])
  list.random = null
  list.next.random = list
  list.next.next.random = null

  const copy = copyRandomList(list)

  expect(linkedListWithRandomToString(copy)).toEqual(
    linkedListWithRandomToString(list),
  )
})

test('should deep copy empty list', () => {
  const list = toLinkedListWithRandom([])

  const copy = copyRandomList(list)

  expect(linkedListWithRandomToString(copy)).toEqual(
    linkedListWithRandomToString(list),
  )
})
