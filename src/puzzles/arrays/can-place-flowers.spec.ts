import {canPlaceFlowers} from './can-place-flowers'

test('can place flowers 1', () => {
  const flowerbed = [1, 0, 0, 0, 1]
  const n = 1

  expect(canPlaceFlowers(flowerbed, n)).toEqual(true)
})

test('can place flowers 2', () => {
  const flowerbed = [1, 0, 0, 0, 1]
  const n = 2

  expect(canPlaceFlowers(flowerbed, n)).toEqual(false)
})

test('can place flowers 3', () => {
  const flowerbed = [1, 0, 1, 0, 1, 0, 0, 1, 0]
  const n = 1

  expect(canPlaceFlowers(flowerbed, n)).toEqual(false)
})
