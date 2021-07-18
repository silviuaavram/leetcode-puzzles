import {MyCalendar} from './my-calendar-i'

test('check the calendar works', () => {
  const inputs = [
    [10, 20],
    [15, 25],
    [20, 30],
  ]
  const outputs = [true, false, true]
  const calendar = new MyCalendar()

  for (let index = 0; index < inputs.length; index++) {
    expect(calendar.book(inputs[index][0], inputs[index][1])).toEqual(
      outputs[index],
    )
  }
})
