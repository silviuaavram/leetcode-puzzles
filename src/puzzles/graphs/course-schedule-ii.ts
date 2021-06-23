/**
 * https://leetcode.com/problems/course-schedule-ii/
 */
export function findOrder(
  numCourses: number,
  prerequisites: number[][],
): number[] {
  const graph = new Map<number, number[]>()
  const inProgress = new Set<number>()
  const visited = new Set<number>()

  for (let index = 0; index < numCourses; index++) {
    graph.set(index, [])
  }

  for (let index = 0; index < prerequisites.length; index++) {
    graph.get(prerequisites[index][1]).push(prerequisites[index][0])
  }

  function visitNode(node: number): boolean {
    if (visited.has(node)) {
      return false
    }

    if (inProgress.has(node)) {
      return true
    }

    if (graph.get(node).length === 0) {
      visited.add(node)
      return false
    }

    inProgress.add(node)

    for (const neighbour of graph.get(node)) {
      const hasCycle = visitNode(neighbour)

      if (hasCycle) {
        return true
      }
    }

    inProgress.delete(node)
    visited.add(node)

    return false
  }

  for (let index = 0; index < numCourses; index++) {
    const hasCycle = visitNode(index)

    if (hasCycle) {
      return []
    }
  }

  return Array.from(visited).reverse()
}
