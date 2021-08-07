type TrieNode = {
  end: boolean
  children: Map<string, TrieNode>
}

export class Trie {
  private root: TrieNode

  constructor() {
    this.root = {end: false, children: new Map()}
  }

  public add(value: string) {
    const chars = value.split('')
    let current = this.root

    for (let index = 0; index < chars.length; index++) {
      const char = chars[index]

      if (!current.children.has(char)) {
        current.children.set(char, {
          children: new Map(),
          end: index === chars.length - 1,
        })
      }

      current = current.children.get(char)
    }

    current.end = true
  }

  public list(value: string): string[] {
    if (!value) {
      return []
    }

    const result: string[] = []
    const chars = value.split('')
    let current = this.root
    let index
    
    for (index = 0; index < chars.length; index++) {
      if (!current.children.has(chars[index])) {
        break
      }
      
      current = current.children.get(chars[index])
    }

    if (index !== value.length) {
      return []
    }

    this.collectSuggestions(value, current, result)

    return result
  }

  private collectSuggestions(value: string, node: TrieNode, acc: string[] = []): void {
    if (node.end) {
      acc.push(value)
    }

    node.children.forEach((node, char) => {
      this.collectSuggestions(`${value}${char}`, node, acc)
    })
  } 
}
