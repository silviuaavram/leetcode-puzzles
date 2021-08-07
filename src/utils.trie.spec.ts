import {Trie} from './utils.trie'

test('test the trie', () => {
  const trie = new Trie()

  trie.add('sweet')

  expect(trie.list('')).toEqual([])
  expect(trie.list('s')).toEqual(['sweet'])
  expect(trie.list('sw')).toEqual(['sweet'])
  expect(trie.list('swe')).toEqual(['sweet'])
  expect(trie.list('swea')).toEqual([])

  trie.add('sweat')

  expect(trie.list('sw')).toEqual(expect.arrayContaining(['sweet', 'sweat']))
  expect(trie.list('bro')).toEqual([])
  expect(trie.list('sweet')).toEqual(['sweet'])

  trie.add('sweetest')

  expect(trie.list('sweet')).toEqual(['sweet', 'sweetest'])
  
  trie.add('swee')
  
  expect(trie.list('swee')).toEqual(['swee', 'sweet', 'sweetest'])
})
