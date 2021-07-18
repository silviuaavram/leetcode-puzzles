/**
 * https://leetcode.com/problems/valid-square/
 */
export function validSquare(
  p1: number[],
  p2: number[],
  p3: number[],
  p4: number[],
): boolean {
  function dist(p1: number[], p2: number[]) {
    return (p2[1] - p1[1]) * (p2[1] - p1[1]) + (p2[0] - p1[0]) * (p2[0] - p1[0])
  }

  const [sp1, sp2, sp3, sp4] = [p1, p2, p3, p4].sort((p1, p2) => {
    if (p1[0] === p2[0]) {
      return p1[1] - p2[1]
    } else {
      return p1[0] - p2[0]
    }
  })

  return (
    dist(sp1, sp2) !== 0 &&
    dist(sp1, sp2) === dist(sp2, sp4) &&
    dist(sp2, sp4) === dist(sp4, sp3) &&
    dist(sp4, sp3) === dist(sp3, sp1) &&
    dist(sp1, sp4) === dist(sp2, sp3)
  )
}
