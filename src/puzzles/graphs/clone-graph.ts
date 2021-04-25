/**
 * https://leetcode.com/problems/clone-graph/
 */

import {GraphNode} from 'utils'

export function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) {
    return null
  }

  const visited: GraphNode[] = [node]
  const newNodes = new Map<GraphNode, GraphNode>()
  const nodes = [node]

  while (nodes.length) {
    const current = nodes.shift()

    if (!newNodes.has(current)) {
      newNodes.set(current, {val: current.val, neighbors: []})
    }

    const newCurrent = newNodes.get(current)

    for (const neighbour of current.neighbors) {
      if (!newNodes.has(neighbour)) {
        newNodes.set(neighbour, {val: neighbour.val, neighbors: []})
      }

      const newNeighbour = newNodes.get(neighbour)
      if (newCurrent.neighbors.indexOf(newNeighbour) > -1) {
        continue
      }

      newCurrent.neighbors.push(newNeighbour)
      newNeighbour.neighbors.push(newCurrent)

      if (visited.indexOf(newNeighbour) < 0) {
        nodes.push(neighbour)
        visited.push(newNeighbour)
      }
    }
  }

  return newNodes.get(node)
}
