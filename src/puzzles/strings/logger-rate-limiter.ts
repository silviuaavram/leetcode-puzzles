/**
 * https://leetcode.com/problems/logger-rate-limiter/
 */
export class Logger {
  static TIMEOUT = 10
  private messages: Map<string, number>
  constructor() {
    this.messages = new Map()
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
    if (this.messages.has(message)) {
      if (timestamp - this.messages.get(message) < Logger.TIMEOUT) {
        return false
      }
    }

    this.messages.set(message, timestamp)

    return true
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
