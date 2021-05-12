/**
 * https://leetcode.com/problems/task-scheduler/
 */
export function leastInterval(tasks: string[], n: number): number {
  let maxCount = 0
  const scheduledTasks: string[] = []
  const tasksCount = new Map<string, number>()

  for (let index = 0; index < tasks.length; index++) {
    const count = (tasksCount.get(tasks[index]) ?? 0) + 1
    tasksCount.set(tasks[index], count)
    maxCount = Math.max(maxCount, count)
  }

  tasksCount[Symbol.iterator] = function*() {
    yield* [...this.entries()].sort((a, b) => b[1] - a[1])
  }

  for (let i = 0; i < maxCount; i++) {
    let j = 0
    for (const [task, count] of tasksCount) {
      if (count === maxCount - i || j < n + 1) {
        j++
        scheduledTasks.push(task)

        if (count === 1) {
          tasksCount.delete(task)
        } else {
          tasksCount.set(task, count - 1)
        }
      }
    }
    if (tasksCount.size) {
      for (; j < n + 1; j++) {
        scheduledTasks.push(null)
      }
    }
  }

  return scheduledTasks.length
}
