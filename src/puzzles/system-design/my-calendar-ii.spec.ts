import {MyCalendarTwo} from './my-calendar-ii'

test('the calendar works', () => {
  const inputs = [
    [10, 20],
    [50, 60],
    [10, 40],
    [5, 15],
    [5, 10],
    [25, 55],
  ]
  const outputs = [true, true, true, false, true, true]
  const calendar = new MyCalendarTwo()

  for (let index = 0; index < inputs.length; index++) {
    expect(calendar.book(inputs[index][0], inputs[index][1])).toEqual(
      outputs[index],
    )
  }
})
