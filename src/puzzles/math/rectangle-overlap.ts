/**
 * https://leetcode.com/problems/rectangle-overlap/
 */
export function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  let [xs1, ys1, xe1, ye1] = rec1
  let [xs2, ys2, xe2, ye2] = rec2

  const x_overlap = Math.max(0, Math.min(xe1, xe2) - Math.max(xs1, xs2))
  const y_overlap = Math.max(0, Math.min(ye1, ye2) - Math.max(ys1, ys2))
  const overlapArea = x_overlap * y_overlap

  return overlapArea !== 0
}
