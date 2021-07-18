/**
 * https://leetcode.com/problems/can-place-flowers/
 */

export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let flowersPlanted = 0

  for (let index = 0; index < flowerbed.length && flowersPlanted < n; index++) {
    if (flowerbed[index] === 0 && flowerbed[index - 1] !== 1 && flowerbed[index + 1] !== 1) {
      flowerbed[index] = 1
      flowersPlanted++
    }
  }

  return flowersPlanted === n
};
