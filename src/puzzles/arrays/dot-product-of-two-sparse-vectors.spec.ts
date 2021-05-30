import {SparseVector} from './dot-product-of-two-sparse-vectors'

test('sparse vector should work correctly 1', () => {
  const nums1 = new SparseVector([1, 0, 0, 2, 3])
  const nums2 = new SparseVector([0, 3, 0, 4, 0])

  expect(nums1.dotProduct(nums2)).toEqual(8)
})

test('sparse vector should work correctly 2', () => {
  const nums1 = new SparseVector([0, 1, 0, 0, 0])
  const nums2 = new SparseVector([0, 0, 0, 0, 2])

  expect(nums1.dotProduct(nums2)).toEqual(0)
})

test('sparse vector should work correctly 3', () => {
  const nums1 = new SparseVector([0, 1, 0, 0, 2, 0, 0])
  const nums2 = new SparseVector([1, 0, 0, 0, 3, 0, 4])

  expect(nums1.dotProduct(nums2)).toEqual(6)
})
