/**
 * https://leetcode.com/problems/find-eventual-safe-states/
 */
export function eventualSafeNodes(edges: number[][]): number[] {
  const graph = new Map<number, number[]>()
  const nodeStatus = new Map<number, boolean>()

  for (let index = 0; index < edges.length; index++) {
    for (const neighbour of edges[index]) {
      if (!graph.has(index)) {
        graph.set(index, [])
      }

      graph.get(index).push(neighbour)
    }
  }

  function visitNode(node: number, visited = new Set<number>()): boolean {
    // console.log(node, visited, nodeStatus)
    if (nodeStatus.has(node)) {
      return !nodeStatus.get(node)
    }

    if (visited.has(node)) {
      visited.forEach(v => {
        nodeStatus.set(v, false)
      })
      nodeStatus.set(node, false)
      // console.log('oups', node, nodeStatus)

      return true
    }

    const neighbours = graph.get(node)

    if (!neighbours || !neighbours.length) {
      nodeStatus.set(node, true)
      return false
    }

    const newVisited = new Set(visited)
    newVisited.add(node)

    for (const neighbour of neighbours) {
      const hasCycle = visitNode(neighbour, newVisited)
      if (hasCycle) {
        return true
      }
    }

    nodeStatus.set(node, true)

    return false
  }

  for (let index = 0; index < edges.length; index++) {
    visitNode(index)
  }

  const result: number[] = []

  for (let index = 0; index < edges.length; index++) {
    if (!!nodeStatus.get(index)) {
      result.push(index)
    }
  }

  return result
}
