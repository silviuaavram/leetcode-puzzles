/**
 * https://leetcode.com/problems/design-underground-system/
 */
export class UndergroundSystem {
  private inTraffic: Map<number, {stationStart: string; tStart: number}>
  private distances: Map<string, Map<string, {total: number; count: number}>>

  constructor() {
    this.inTraffic = new Map()
    this.distances = new Map()
  }

  checkIn(id: number, stationName: string, t: number): void {
    this.inTraffic.set(id, {stationStart: stationName, tStart: t})
  }

  checkOut(id: number, stationEnd: string, tEnd: number): void {
    const {stationStart, tStart} = this.inTraffic.get(id)
    this.inTraffic.delete(id)

    if (this.distances.has(stationStart)) {
      if (this.distances.get(stationStart).has(stationEnd)) {
        const stationEndValue = this.distances.get(stationStart).get(stationEnd)
        stationEndValue.count++
        stationEndValue.total += tEnd - tStart
      } else {
        this.distances
          .get(stationStart)
          .set(stationEnd, {count: 1, total: tEnd - tStart})
      }
    } else {
      this.distances.set(
        stationStart,
        new Map([[stationEnd, {count: 1, total: tEnd - tStart}]]),
      )
    }
  }

  getAverageTime(startStation: string, endStation: string): number {
    if (this.distances.has(startStation)) {
      const {count, total} = this.distances.get(startStation).get(endStation)
      return total / count
    } else {
      const {count, total} = this.distances.get(endStation).get(startStation)
      return total / count
    }
  }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
