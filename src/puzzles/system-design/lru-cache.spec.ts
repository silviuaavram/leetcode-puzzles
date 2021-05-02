import {LRUCache} from './lru-cache'

function testLRUCache(
  inputOperations: string[],
  inputValues: number[][],
  expectedValues: number[],
) {
  const cache = new LRUCache(inputValues[0][0])
  for (let index = 1; index < inputOperations.length; index++) {
    if (inputOperations[index] === 'put') {
      cache.put(inputValues[index][0], inputValues[index][1])
    } else if (inputOperations[index] === 'get') {
      expect(cache.get(inputValues[index][0])).toEqual(expectedValues[index])
    }
  }
}

test('cache works with operations 1', () => {
  const inputOperations = [
    'LRUCache',
    'put',
    'put',
    'get',
    'put',
    'get',
    'put',
    'get',
    'get',
    'get',
  ]
  const inputValues = [
    [2],
    [1, 0],
    [2, 2],
    [1],
    [3, 3],
    [2],
    [4, 4],
    [1],
    [3],
    [4],
  ]
  const expectedValues = [null, null, null, 0, null, -1, null, -1, 3, 4]

  testLRUCache(inputOperations, inputValues, expectedValues)
})

test('cache works with operations 2', () => {
  const inputOperations = [
    'LRUCache',
    'get',
    'put',
    'get',
    'put',
    'put',
    'get',
    'get',
  ]
  const inputValues = [[2], [2], [2, 6], [1], [1, 5], [1, 2], [1], [2]]

  const expectedValues = [null, -1, null, -1, null, null, 2, 6]

  testLRUCache(inputOperations, inputValues, expectedValues)
})

test('cache works with operations 3', () => {
  const inputOperations = ['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get']
  const inputValues = [[2], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2]]

  const expectedValues = [null, null, null, null, null, -1, 3]

  testLRUCache(inputOperations, inputValues, expectedValues)
})
