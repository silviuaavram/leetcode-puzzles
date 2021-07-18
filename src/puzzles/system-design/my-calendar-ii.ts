/**
 * https://leetcode.com/problems/my-calendar-ii/
 */
export class MyCalendarTwo {
  private firstBookings: number[][]
  private secondBookings: number[][]

  constructor() {
    this.firstBookings = []
    this.secondBookings = []
  }

  book(start: number, end: number): boolean {
    for (let index = 0; index < this.secondBookings.length; index++) {
      const [currentStart, currentEnd] = this.secondBookings[index]

      if (!(end <= currentStart || start >= currentEnd)) {
        return false
      }
    }

    for (let index = 0; index < this.firstBookings.length; index++) {
      const [currentStart, currentEnd] = this.firstBookings[index]

      if (!(end <= currentStart || start >= currentEnd)) {
        this.secondBookings.push([
          Math.max(start, currentStart),
          Math.min(end, currentEnd),
        ])
      }
    }

    this.firstBookings.push([start, end])

    return true
  }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
