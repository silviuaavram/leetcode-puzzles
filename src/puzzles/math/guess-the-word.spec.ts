import {findSecretWord} from './guess-the-word'

export class Master {
  private secret: string
  public guessed: boolean
  private guesses: number
  constructor(secret: string) {
    this.secret = secret
    this.guessed = false
    this.guesses = 0
  }

  guess(word: string): number {
    this.guesses++
    const result = word.split('').reduce((acc, char, index) => {
      if (char === this.secret[index]) {
        acc++
      }

      return acc
    }, 0)

    if (result === 6) {
      this.guessed = true
    }

    return result
  }

  public get won() {
    return this.guessed && this.guesses <= 10
  }
}

test('guess the word correctly 1', () => {
  const secret = 'acckzz'
  const wordlist = ['acckzz', 'ccbazz', 'eiowzz', 'abcczz']
  const master = new Master(secret)
  findSecretWord(wordlist, master)

  expect(master.won).toBe(true)
})

test('guess the word correctly 2', () => {
  const secret = 'ccoyyo'
  const wordlist = [
    'wichbx',
    'oahwep',
    'tpulot',
    'eqznzs',
    'vvmplb',
    'eywinm',
    'dqefpt',
    'kmjmxr',
    'ihkovg',
    'trbzyb',
    'xqulhc',
    'bcsbfw',
    'rwzslk',
    'abpjhw',
    'mpubps',
    'viyzbc',
    'kodlta',
    'ckfzjh',
    'phuepp',
    'rokoro',
    'nxcwmo',
    'awvqlr',
    'uooeon',
    'hhfuzz',
    'sajxgr',
    'oxgaix',
    'fnugyu',
    'lkxwru',
    'mhtrvb',
    'xxonmg',
    'tqxlbr',
    'euxtzg',
    'tjwvad',
    'uslult',
    'rtjosi',
    'hsygda',
    'vyuica',
    'mbnagm',
    'uinqur',
    'pikenp',
    'szgupv',
    'qpxmsw',
    'vunxdn',
    'jahhfn',
    'kmbeok',
    'biywow',
    'yvgwho',
    'hwzodo',
    'loffxk',
    'xavzqd',
    'vwzpfe',
    'uairjw',
    'itufkt',
    'kaklud',
    'jjinfa',
    'kqbttl',
    'zocgux',
    'ucwjig',
    'meesxb',
    'uysfyc',
    'kdfvtw',
    'vizxrv',
    'rpbdjh',
    'wynohw',
    'lhqxvx',
    'kaadty',
    'dxxwut',
    'vjtskm',
    'yrdswc',
    'byzjxm',
    'jeomdc',
    'saevda',
    'himevi',
    'ydltnu',
    'wrrpoc',
    'khuopg',
    'ooxarg',
    'vcvfry',
    'thaawc',
    'bssybb',
    'ccoyyo',
    'ajcwbj',
    'arwfnl',
    'nafmtm',
    'xoaumd',
    'vbejda',
    'kaefne',
    'swcrkh',
    'reeyhj',
    'vmcwaf',
    'chxitv',
    'qkwjna',
    'vklpkp',
    'xfnayl',
    'ktgmfn',
    'xrmzzm',
    'fgtuki',
    'zcffuv',
    'srxuus',
    'pydgmq',
  ]
  const master = new Master(secret)
  findSecretWord(wordlist, master)

  expect(master.won).toBe(true)
})
