/**
 * https://leetcode.com/problems/check-array-formation-through-concatenation/
 */
export function canFormArray(arr: number[], pieces: number[][]): boolean {
  const piecesMap = new Map<number, number[]>()

  for (let index = 0; index < pieces.length; index++) {
    piecesMap.set(pieces[index][0], pieces[index])
  }

  for (let index = 0; index < arr.length; index++) {
    if (piecesMap.has(arr[index])) {
      const piece = piecesMap.get(arr[index])
      const arrSlice = arr.slice(index, index + piece.length)

      if (piece.length !== arrSlice.length) {
        return false
      }

      for (let auxIndex = 0; auxIndex < arrSlice.length; auxIndex++) {
        if (piece[auxIndex] !== arrSlice[auxIndex]) {
          return false
        }
      }

      index += (piece.length - 1)
    } else {
      return false
    }
  }

  return true
}
