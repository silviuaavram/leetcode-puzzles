/**
 * https://leetcode.com/problems/accounts-merge/
 */
export function accountsMerge(accounts: string[][]): string[][] {
  const accountsMap = new Map<string, Set<string>[]>()

  for (let index = 0; index < accounts.length; index++) {
    const [owner, ...ownerEmails] = accounts[index]

    if (accountsMap.has(owner)) {
      const mergedAccounts = new Set(ownerEmails)
      const accountsToRemove: number[] = []
      let ownerStoredAccounts = accountsMap.get(owner)

      for (let index = 0; index < ownerStoredAccounts.length; index++) {
        const storedAccounts = ownerStoredAccounts[index]

        for (const mergedEmail of Array.from(mergedAccounts)) {
          if (storedAccounts.has(mergedEmail)) {
            storedAccounts.forEach(e => {
              mergedAccounts.add(e)
            })
            accountsToRemove.push(index)
            break
          }
        }
      }

      ownerStoredAccounts.push(mergedAccounts)
      for (let index = 0; index < accountsToRemove.length; index++) {
        ownerStoredAccounts.splice(accountsToRemove[index] - index, 1)
      }
      accountsToRemove.length = 0
    } else {
      accountsMap.set(owner, [new Set(ownerEmails)])
    }
}
  const result: string[][] = []

  accountsMap.forEach((ownersEmails, ownerName) => {
    for (const ownerEmails of ownersEmails) {
      result.push([ownerName, ...Array.from(ownerEmails).sort()])
    }
  })

  return result
}
