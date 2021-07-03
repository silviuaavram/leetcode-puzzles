/**
 * https://leetcode.com/problems/design-tic-tac-toe/
 */
export class TicTacToe {
  private moves: number
  private board: number[][]
  private n: number
  /**
   * Initialize your data structure here.
   */
  constructor(n: number) {
    this.moves = 0
    this.board = []
    this.n = n

    for (let index = 0; index < n; index++) {
      this.board.push(new Array(n))
    }
  }

  /**
   * Player {player} makes a move at ({row}, {col}).
          @param row The row of the board.
          @param col The column of the board.
          @param player The player, can be either 1 or 2.
          @return The current winning condition, can be either:
                  0: No one wins.
                  1: Player 1 wins.
                  2: Player 2 wins. 
   */
  move(row: number, col: number, player: number): number {
    this.moves++
    this.board[row][col] = player

    if (this.moves < this.n) {
      return 0
    }

    let index

    for (index = 0; index < this.n; index++) {
      if (this.board[row][index] !== player) {
        break
      }
    }

    if (index === this.n) {
      return player
    }

    for (index = 0; index < this.n; index++) {
      if (this.board[index][col] !== player) {
        break
      }
    }

    if (index === this.n) {
      return player
    }

    if (row === col) {
      for (index = 0; index < this.n; index++) {
        if (this.board[index][index] !== player) {
          break
        }
      }

      if (index === this.n) {
        return player
      }
    }

    if (row + col === this.n - 1) {
      for (index = 0; index < this.n; index++) {
        if (this.board[this.n - index - 1][index] !== player) {
          break
        }
      }

      if (index === this.n) {
        return player
      }
    }

    return 0
  }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
