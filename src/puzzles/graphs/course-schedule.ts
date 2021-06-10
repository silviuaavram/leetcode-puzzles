/**
 * https://leetcode.com/problems/course-schedule/
 */
export function canFinish(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  const visited = new Set<number>()
  const inProgress = new Set<number>()
  const nodes = new Map<number, number[]>()

  for (let index = 0; index < prerequisites.length; index++) {
    const [first, second] = prerequisites[index]

    if (!nodes.has(second)) {
      nodes.set(second, [])
    }

    nodes.get(second).push(first)
  }

  function visitNode(node: number): boolean {
    if (visited.has(node)) {
      return true
    }

    if (inProgress.has(node)) {
      return false
    }


    const neighbours = nodes.get(node)

    if (!neighbours) {
      return true
    }

    inProgress.add(node)

    for (const neighbour of neighbours) {
      const visitResult = visitNode(neighbour)

      if (!visitResult) {
        return false
      }
    }

    inProgress.delete(node)
    visited.add(node)

    return true
  }

  for (let index = 0; index < numCourses; index++) {
    const visitResult = visitNode(index)

    if (!visitResult) {
      return false
    }
  }

  return true
}
