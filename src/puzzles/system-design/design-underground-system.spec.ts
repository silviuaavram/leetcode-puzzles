import {UndergroundSystem} from './design-underground-system'

test('underground system works 1', () => {
  const system = new UndergroundSystem()
  const commands = [
    'checkIn',
    'checkIn',
    'checkIn',
    'checkOut',
    'checkOut',
    'checkOut',
    'getAverageTime',
    'getAverageTime',
    'checkIn',
    'getAverageTime',
    'checkOut',
    'getAverageTime',
  ]
  const inputs = [
    [45, 'Leyton', 3],
    [32, 'Paradise', 8],
    [27, 'Leyton', 10],
    [45, 'Waterloo', 15],
    [27, 'Waterloo', 20],
    [32, 'Cambridge', 22],
    ['Paradise', 'Cambridge'],
    ['Leyton', 'Waterloo'],
    [10, 'Leyton', 24],
    ['Leyton', 'Waterloo'],
    [10, 'Waterloo', 38],
    ['Leyton', 'Waterloo'],
  ]
  const outputs = [
    null,
    null,
    null,
    null,
    null,
    null,
    14.0,
    11.0,
    null,
    11.0,
    null,
    12.0,
  ]

  testUnderground(system, commands, inputs, outputs)
})

test('underground system works 2', () => {
  const system = new UndergroundSystem()
  const commands = [
    'checkIn',
    'checkOut',
    'getAverageTime',
    'checkIn',
    'checkOut',
    'getAverageTime',
    'checkIn',
    'checkOut',
    'getAverageTime',
  ]
  const inputs = [
    [10, 'Leyton', 3],
    [10, 'Paradise', 8],
    ['Leyton', 'Paradise'],
    [5, 'Leyton', 10],
    [5, 'Paradise', 16],
    ['Leyton', 'Paradise'],
    [2, 'Leyton', 21],
    [2, 'Paradise', 30],
    ['Leyton', 'Paradise'],
  ]
  const outputs = [null, null, 5.0, null, null, 5.5, null, null, 6.66667]

  testUnderground(system, commands, inputs, outputs)
})

test('underground system works 3', () => {
  const system = new UndergroundSystem()
  const commands = [
    'checkIn',
    'checkIn',
    'checkOut',
    'checkOut',
    'checkIn',
    'checkIn',
    'getAverageTime',
    'getAverageTime',
    'checkOut',
    'getAverageTime',
    'checkOut',
    'getAverageTime',
  ]
  const inputs = [
    [1, 'Leeds', 3],
    [2, 'York', 8],
    [1, 'York', 10],
    [2, 'Leeds', 15],
    [1, 'York', 20],
    [2, 'Leeds', 22],
    ['Leeds', 'York'],
    ['York', 'Leeds'],
    [1, 'Leeds', 24],
    ['York', 'Leeds'],
    [2, 'York', 38],
    ['Leeds', 'York'],
  ]
  const outputs = [
    null,
    null,
    null,
    null,
    null,
    null,
    7.0,
    7.0,
    null,
    5.5,
    null,
    11.5,
  ]

  testUnderground(system, commands, inputs, outputs)
})

function testUnderground(
  system: UndergroundSystem,
  commands: string[],
  inputs: any[],
  outputs: any[],
) {
  for (let index = 0; index < commands.length; index++) {
    const command = commands[index]
    const input = inputs[index]

    switch (command) {
      case 'checkIn': {
        const [id, station, time] = input
        system.checkIn(id as number, station as string, time as number)
        break
      }
      case 'checkOut': {
        const [id, station, time] = input
        system.checkOut(id as number, station as string, time as number)
        break
      }
      case 'getAverageTime': {
        const [station1, station2] = input
        expect(
          system.getAverageTime(station1 as string, station2 as string),
        ).toBeLessThanOrEqual(outputs[index])
      }

      default:
        break
    }
  }
}
