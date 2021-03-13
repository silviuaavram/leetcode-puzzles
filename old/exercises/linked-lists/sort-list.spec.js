require('chai').should()

const LinkedList = require('./sort-list')

it('should create a list', () => {
  const l = new LinkedList([2, 3, 4])

  l.toString().should.deep.equal([2, 3, 4])
})

it('should sort the list [4, 2, 1, 3]', () => {
  const l = new LinkedList([4, 2, 1, 3])
  l.bubbleSort()
  l.toString().should.deep.equal([1, 2, 3, 4])
})

it('should sort the list [-1,5,3,4,0]', () => {
  const l = new LinkedList([-1,5,3,4,0])
  l.bubbleSort()
  l.toString().should.deep.equal([-1,0,3,4,5])
})

it('should sort the list []', () => {
  const l = new LinkedList([])
  l.bubbleSort()
  l.toString().should.deep.equal([])
})