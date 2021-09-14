import {RandomizedSet} from './insert-delete-getrandom-o1'

test('tests the randomized set', () => {
  const operations = [
    'insert',
    'remove',
    'insert',
    'getRandom',
    'remove',
    'insert',
    'getRandom',
  ]
  const values = [1, 2, 2, null, 1, 2, null]
  const expects = [true, false, true, 2, true, false, 2]
  const set = new RandomizedSet()

  for (let index = 0; index < operations.length; index++) {
    const operation = operations[index]
    let result

    switch (operation) {
      case 'insert':
        result = set.insert(values[index])
        break
      case 'remove':
        result = set.remove(values[index])
        break
      case 'getRandom':
        result = set.getRandom()
        break
      default:
        throw new Error('should not end in here')
    }
    expect(result).toEqual(expects[index])
  }
})
