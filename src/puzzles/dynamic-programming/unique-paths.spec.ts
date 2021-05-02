import {uniquePaths} from './unique-paths'

test('should return 28 unique paths', () => {
  expect(uniquePaths(3,7)).toEqual(28)
})

test('should return 3 unique paths', () => {
  expect(uniquePaths(3,2)).toEqual(3)
})

test('should return 6 unique paths', () => {
  expect(uniquePaths(3,3)).toEqual(6)
})



