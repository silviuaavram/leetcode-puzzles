/**
 * https://leetcode.com/problems/tree-diameter/
 */
export function treeDiameter(edges: number[][]): number {
  const graph = new Map<number, number[]>()

  for (const [edgeSource, edgeDestination] of edges) {
    if (!graph.has(edgeSource)) {
      graph.set(edgeSource, [])
    }
    if (!graph.has(edgeDestination)) {
      graph.set(edgeDestination, [])
    }

    graph.get(edgeSource).push(edgeDestination)
    graph.get(edgeDestination).push(edgeSource)
  }

  let maxDistance = 0
  let endNode

  function visitNode(node: number, parent?: number, distance = 0) {
    const neighbours = graph.get(node)

    if (maxDistance < distance) {
      maxDistance = distance
      endNode = node
    }

    if (!neighbours) {
      return
    }

    for (const neighbour of neighbours) {
      if (neighbour !== parent) {
        visitNode(neighbour, node, distance + 1)
      }
    }
  }

  visitNode(edges[0][0])
  maxDistance = 0
  visitNode(endNode)

  return maxDistance
}
