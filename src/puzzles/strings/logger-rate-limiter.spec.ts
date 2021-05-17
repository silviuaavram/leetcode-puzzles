import {Logger} from './logger-rate-limiter'

test('should log messages correctly', () => {
  const logger = new Logger()

  expect(logger.shouldPrintMessage(1, 'foo')).toEqual(true)
  expect(logger.shouldPrintMessage(2, 'bar')).toEqual(true)
  expect(logger.shouldPrintMessage(3, 'foo')).toEqual(false)
  expect(logger.shouldPrintMessage(8, 'bar')).toEqual(false)
  expect(logger.shouldPrintMessage(10, 'foo')).toEqual(false)
  expect(logger.shouldPrintMessage(11, 'foo')).toEqual(true)
})
