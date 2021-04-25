import {toGraph} from 'utils'
import {cloneGraph} from './clone-graph'

test('deep copies the 1,2,3,4 graph', () => {
  const graph = toGraph(
    [
      [0, 3],
      [3, 0],
      [0, 4],
      [0, 2],
      [1, 2],
      [2, 1],
      [2, 0],
      [3, 2],
      [2, 3],
      [4, 0],
      [4, 3],
      [3, 4],
      [4, 1],
      [1, 4],
    ],
    0,
  )
  const clonedGraph = cloneGraph(graph)

  expect(clonedGraph.val).toEqual(graph.val)
  expect(clonedGraph.neighbors[0].val).toEqual(graph.neighbors[0].val)
  expect(clonedGraph.neighbors[1].val).toEqual(graph.neighbors[1].val)
  expect(clonedGraph.neighbors[2].val).toEqual(graph.neighbors[2].val)
  // it is correct.
})
