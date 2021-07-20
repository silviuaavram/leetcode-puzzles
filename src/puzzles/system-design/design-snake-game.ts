/**
 * https://leetcode.com/problems/design-snake-game/
 */

export class SnakeGame {
  private position: number[][]
  private food: number[][]
  private foodIndex: number
  private height: number
  private width: number
  /**
   * Initialize your data structure here.
          @param width - screen width
          @param height - screen height 
          @param food - A list of food positions
          E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
   */
  constructor(width: number, height: number, food: number[][]) {
    this.food = food
    this.foodIndex = 0
    this.position = [[0, 0]]
    this.width = width
    this.height = height
  }

  /**
   * Moves the snake.
          @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
          @return The game's score after the move. Return -1 if game over. 
          Game over when snake crosses the screen boundary or bites its body. 
   */
  move(direction: string): number {
    const [headX, headY] = this.position[0]

    switch (direction) {
      case 'L': {
        if (
          headY === 0 ||
          this.position
            .slice(0, this.position.length - 1)
            .some(([px, py]) => px === headX && py === headY - 1)
        ) {
          return -1
        }

        this.position.unshift([headX, headY - 1])

        break
      }
      case 'U': {
        if (
          headX === 0 ||
          this.position
            .slice(0, this.position.length - 1)
            .some(([px, py]) => px === headX - 1 && py === headY)
        ) {
          return -1
        }

        this.position.unshift([headX - 1, headY])

        break
      }
      case 'D': {
        if (
          headX === this.height - 1 ||
          this.position
            .slice(0, this.position.length - 1)
            .some(([px, py]) => px === headX + 1 && py === headY)
        ) {
          return -1
        }

        this.position.unshift([headX + 1, headY])

        break
      }
      case 'R': {
        if (
          headY === this.width - 1 ||
          this.position
            .slice(0, this.position.length - 1)
            .some(([px, py]) => px === headX && py === headY + 1)
        ) {
          return -1
        }

        this.position.unshift([headX, headY + 1])

        break
      }
      default:
        break
    }

    if (this.foodIndex < this.food.length) {
      const [foodX, foodY] = this.food[this.foodIndex]
      const [newHeadX, newHeadY] = this.position[0]

      if (newHeadX === foodX && newHeadY === foodY) {
        this.foodIndex++

        return this.foodIndex
      }
    }

    this.position.pop()

    return this.foodIndex
  }
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
