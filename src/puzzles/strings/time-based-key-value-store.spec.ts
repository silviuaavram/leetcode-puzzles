import {TimeMap} from './time-based-key-value-store'

test('time map should work correctly 1', () => {
  const kv = new TimeMap()

  kv.set('foo', 'bar', 1)
  expect(kv.get('foo', 1)).toEqual('bar')
  expect(kv.get('foo', 3)).toEqual('bar')

  kv.set('foo', 'bar2', 4)
  expect(kv.get('foo', 4)).toEqual('bar2')
  expect(kv.get('foo', 5)).toEqual('bar2')
})

test('time map should work correctly 2', () => {
  const kv = new TimeMap()

  kv.set('love', 'high', 10)
  kv.set('love', 'low', 20)
  expect(kv.get('love', 5)).toEqual('')
  expect(kv.get('love', 10)).toEqual('high')
  expect(kv.get('love', 15)).toEqual('high')
  expect(kv.get('love', 20)).toEqual('low')
  expect(kv.get('love', 25)).toEqual('low')
})
