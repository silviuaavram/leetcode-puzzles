/***
 * https://leetcode.com/problems/longest-common-subsequence/
 */

export function longestCommonSubsequence(text1: string, text2: string): number {
  let sol: number[][] = []

  for (let i = 0; i < text1.length; i++) {
		sol.push([] as any)

    for (let j = 0; j < text2.length; j++) {
      const prevUp = sol[i - 1] ? sol[i - 1][j] : 0
			const prevLeft = sol[i][j - 1] ?? 0
			const prevDiagonal = sol[i-1] && sol[i-1][j-1] ? sol[i-1][j-1] : 0
			
			if (text1[i] === text2[j]) {
				sol[i][j] = prevDiagonal + 1
			} else {
				sol[i][j] = Math.max(prevUp, prevLeft)
			}
      
    }
  }

  return sol[text1.length - 1][text2.length - 1]
}
