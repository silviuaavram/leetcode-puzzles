/**
 * You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) {
    return 0;
  }

  const change = new Map();

  for (let crtAmount = 1; crtAmount <= amount; crtAmount++) {
    for (const coin of coins) {
      const rest = crtAmount - coin;

      if (rest === 0) {
        change.set(coin, 1);
        continue;
      }

      if (rest < 0) {
        continue
      }

      const prevMax = change.get(crtAmount);
      const coinsForRest = change.get(rest);

      if (coinsForRest !== undefined && (prevMax === undefined || coinsForRest + 1 < prevMax)) {
        change.set(crtAmount, 1 + coinsForRest);
      }
    }
  }

  return change.get(amount) || -1
};

console.log(coinChange([474,83,404,3], 264))
