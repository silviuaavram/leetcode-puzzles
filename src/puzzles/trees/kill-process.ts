/**
 * https://leetcode.com/problems/kill-process/
 */
export function killProcess(
  pid: number[],
  ppid: number[],
  kill: number,
): number[] {
  const processes = new Map<number, number[]>()

  for (let index = 0; index < pid.length; index++) {
    if (!processes.has(pid[index])) {
      processes.set(pid[index], [])
    }

    if (!processes.has(ppid[index])) {
      processes.set(ppid[index], [])
    }

    processes.get(ppid[index]).push(pid[index])
  }

  const toKill: number[] = [kill]
  const result: number[] = []

  while (toKill.length) {
    const current = toKill.shift()

    result.push(current)

    toKill.push(...processes.get(current))
  }

  return result
}
