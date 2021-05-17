import {MovingAverage} from './moving-average-from-data-stream'

test('corectly returns the moving average with the window of 3', () => {
  const ma = new MovingAverage(3)

  expect(ma.next(1)).toEqual(1)
  expect(ma.next(10)).toEqual(5.5)
  expect(ma.next(3)).toEqual(4.666666666666667)
  expect(ma.next(5)).toEqual(6)
})