export interface TreeNode {
  val: number
  children?: TreeNode[]
}

export function countOfNodes(
  root: TreeNode,
  queries: [number, string][],
  string: string,
): number[] {
  if (!root) {
    return []
  }

  const nodes = new Map<number, Map<string, number>>()
  const stack = [root]

  while (stack.length) {
    const current = stack[stack.length - 1]

    if (current.children) {
      let loop = false
      for (const child of current.children) {
        if (!nodes.has(child.val)) {
          loop = true
          stack.push(child)
        }
      }

      if (loop) {
        continue
      }
    }

    const value = new Map<string, number>()

    value.set(string[current.val - 1], 1)

    if (current.children) {
      for (const child of current.children) {
        const childValues = nodes.get(child.val)

        childValues.forEach((v, k) => {
          value.set(k, value.get(k) ? value.get(k) + v : v)
        })
      }
    }

    nodes.set(current.val, value)
    stack.pop()
  }

  console.log(nodes)
  return queries.map(([id, character]) => nodes.get(id).get(character))
}
