/**
 * https://leetcode.com/problems/snapshot-array/
 */
export class SnapshotArray {
  private snapshotId: number
  private array: number[][][]

  constructor(length: number) {
    this.array = []
    this.snapshotId = 0
    for (let index = 0; index < length; index++) {
      this.array.push([])
    }
  }

  set(index: number, val: number): void {
    const history = this.array[index]
    const historySize = history.length
    const lastSavedValue = history[historySize - 1]

    if (historySize && lastSavedValue[0] === this.snapshotId) {
      lastSavedValue[0] = this.snapshotId
      lastSavedValue[1] = val
    } else {
      history.push([this.snapshotId, val])
    }
  }

  snap(): number {
    return this.snapshotId++
  }

  get(index: number, snap_id: number): number {
    const history = this.array[index]
    let start = 0
    let end = history.length - 1
    let result = 0

    while (start <= end) {
      const mid = Math.floor((start + end) / 2)
      const currentSnapId = history[mid][0]

      if (currentSnapId > snap_id) {
        end = mid - 1
      } else {
        result = history[mid][1]
        start = mid + 1
      }
    }

    return result
  }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
