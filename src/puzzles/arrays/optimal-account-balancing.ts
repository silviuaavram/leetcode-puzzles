/**
 * https://leetcode.com/problems/optimal-account-balancing/
 */

export function minTransfers(transactions: number[][]): number {
  const debt: number[] = []

  for (let index = 0; index < transactions.length; index++) {
    const [giver, taker, amount] = transactions[index]

    debt[giver] = (debt[giver] ?? 0) - amount
    debt[taker] = (debt[taker] ?? 0) + amount
  }

  function settleDebt(debt: number[]): number {
    // console.log(debt)
    if (!debt.length) {
      return 0
    }

    if (debt[0] === 0) {
      return settleDebt(debt.slice(1))
    }

    let min = Infinity

    for (let index = 1; index < debt.length; index++) {
      if (debt[0] * debt[index] < 0) {
        const newDebt = [...debt.slice(1)]
        
        newDebt[index - 1] += debt[0]
        // console.log('here', newDebt)
        min = Math.min(min, 1 + settleDebt(newDebt))
      }
    }

    return min
  }

  return settleDebt(debt.filter(d => d !== 0 || isNaN(d)))
}
