/**
 * https://leetcode.com/problems/the-kth-factor-of-n/
 */
 export function kthFactor(n: number, k: number): number {
   let factors = 0
   for (let index = 1; index <= n; index++) {
     if (n % index === 0) {
       factors++
     }

     if (factors === k) {
       return index
     }
     
   }
  return -1
};