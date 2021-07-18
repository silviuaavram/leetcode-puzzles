/**
 * https://leetcode.com/problems/my-calendar-i/
 */
export class MyCalendar {
  private intervals: number[][]
  constructor() {
    this.intervals = []
  }

  book(start: number, end: number): boolean {
    for (let index = 0; index < this.intervals.length; index++) {
      const [intervalStart, intervalEnd] = this.intervals[index]

      if (!(end <= intervalStart || start >= intervalEnd)) {
        return false
      }
    }

    this.intervals.push([start, end])

    return true
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
