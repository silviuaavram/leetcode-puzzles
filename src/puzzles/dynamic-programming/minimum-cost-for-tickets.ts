/**
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 */
export function mincostTickets(days: number[], costs: number[]): number {
  let results = new Map<number, number>()

  function getSolution(start: number): number {
    if (start === days.length) {
      return 0
    }

    if (results.has(start)) {
      return results.get(start)
    }

    const currentDay = days[start]
    const firstDayNextWeek = currentDay + 7
    const firstDayNextMonth = currentDay + 30
    let min = costs[0] * 365
    let nextWeekStart = start + 1

    while (
      nextWeekStart < days.length &&
      days[nextWeekStart] < firstDayNextWeek
    ) {
      nextWeekStart++
    }

    let nextMonthStart = nextWeekStart

    while (
      nextMonthStart < days.length &&
      days[nextMonthStart] < firstDayNextMonth
    ) {
      nextMonthStart++
    }

    min = Math.min(
      min,
      costs[0] + getSolution(start + 1),
      costs[1] + getSolution(nextWeekStart),
      costs[2] + getSolution(nextMonthStart),
    )

    results.set(start, min)

    return min
  }

  return getSolution(0)
}
