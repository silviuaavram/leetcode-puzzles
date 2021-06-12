/**
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 */
export function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[],
): number {
  const employees = new Map<number, number[]>()
  let totalTime = 0

  for (let index = 0; index < manager.length; index++) {
    const mng = manager[index]

    if (mng === -1) {
      continue
    }

    const ic = index

    if (!employees.has(mng)) {
      employees.set(mng, [])
    }

    employees.get(mng).push(ic)
  }

  function visitNode(node: number, timeSoFar = 0): void {
    const reports = employees.get(node)

    if (!reports) {
      totalTime = Math.max(timeSoFar, totalTime)
    } else {
      for (const report of reports) {
        visitNode(report, timeSoFar + informTime[node])
      }
    }
  }

  visitNode(headID)

  return totalTime
}
