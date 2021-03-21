import {coinChange} from './coin-change'

test('should return 3 coins', () => {
  const coins = [1,2,5]
	const amount = 11

	expect(coinChange(coins, amount)).toEqual(3)
})

test('should return not possible', () => {
  const coins = [2]
	const amount = 3

	expect(coinChange(coins, amount)).toEqual(-1)
})

test('should return no coins', () => {
  const coins = [1]
	const amount = 0

	expect(coinChange(coins, amount)).toEqual(0)
})

test('should return 1 coin', () => {
  const coins = [1]
	const amount = 1

	expect(coinChange(coins, amount)).toEqual(1)
})

test('should return 3 coins', () => {
  const coins = [1]
	const amount = 2

	expect(coinChange(coins, amount)).toEqual(2)
})

test('should return 20 coins', () => {
  const coins = [186,419,83,408]
	const amount = 6249

	expect(coinChange(coins, amount)).toEqual(20)
})

