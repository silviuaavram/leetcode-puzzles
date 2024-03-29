import {suggestedProducts} from './search-suggestions-system'

test('get the most relevant products 1', () => {
  const products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad']
  const searchWord = 'mouse'
  const expected = [
    ['mobile', 'moneypot', 'monitor'],
    ['mobile', 'moneypot', 'monitor'],
    ['mouse', 'mousepad'],
    ['mouse', 'mousepad'],
    ['mouse', 'mousepad'],
  ]

  expect(suggestedProducts(products, searchWord)).toEqual(expected)
})

test('get the most relevant products 2', () => {
  const products = ['havana']
  const searchWord = 'havana'
  const expected = [
    ['havana'],
    ['havana'],
    ['havana'],
    ['havana'],
    ['havana'],
    ['havana'],
  ]

  expect(suggestedProducts(products, searchWord)).toEqual(expected)
})

test('get the most relevant products 3', () => {
  const products = ['bags', 'baggage', 'banner', 'box', 'cloths']
  const searchWord = 'bags'
  const expected = [
    ['baggage', 'bags', 'banner'],
    ['baggage', 'bags', 'banner'],
    ['baggage', 'bags'],
    ['bags'],
  ]

  expect(suggestedProducts(products, searchWord)).toEqual(expected)
})

test('get the most relevant products 4', () => {
  const products = ['havana']
  const searchWord = 'tatiana'
  const expected: string[][] = [[], [], [], [], [], [], []]

  expect(suggestedProducts(products, searchWord)).toEqual(expected)
})

test('get the most relevant products 5', () => {
  const products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad']
  const searchWord = 'mouse'
  const expected = [
    ['mobile', 'moneypot', 'monitor'],
    ['mobile', 'moneypot', 'monitor'],
    ['mouse', 'mousepad'],
    ['mouse', 'mousepad'],
    ['mouse', 'mousepad'],
  ]

  expect(suggestedProducts(products, searchWord)).toEqual(expected)
})

test('get the most relevant products 6', () => {
  const products = [
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnunqerptgas',
    'zmmirsxdhyxvmdybjzondyvrkzeafhvualsivfueweuusmsxbttdeofzeripaqv',
    'tyqcpfvorznmxxdzepfxabibcagilwjsqncxnpjqsxjzqqqbae',
    'tyqcpfvacyrjvmadrmntxotgvgivdvcuwygpjfwcuppunolukrum',
    'tyqcpfvrqwrcpusmfyhxaiasfbb',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqyalwiaj',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchidnpt',
    'lfjkcljnd',
    'zibrwfpwecubjlsjbkrhnvolnnzrqhdynloplzagwnuhpxhbvpxnqaifnln',
    'ybswoottdgryxtupichpvqjmcoytrwnfgzrrnaejojvpzmttlzw',
    'tyqcplghosxjviooiyddhvzzrhuuwkiosmgafxyajcdyqlmthqkoylxhtxdruw',
    'okoscfpxcndzgbtsozdofgnomtglmoaewgzzjvrxezoq',
    'cxkwvaytkxgafeltbanhsvxlorigkuxnsxlmhvwqm',
    'iamtabcpdagicnvdvqcfykonsazrbdivxtczpgqgxjrifukmqjw',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbneryahanhrhkal',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnunl',
    'tyqcpfvorznmxxdzsuyushueegfrnlzbydnefcfagqnxglkulegntoml',
    'zlovtmburfkd',
    'vlzfaamutsfqefpafzffwhvpfw',
    'bbufxzwpryyakbxuhwwplvdptgybbykqxirsrahsokviihxrawcbgwrktvgacmwtc',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbzw',
    'kjundphljswl',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqhlqnapfkcqpdb',
    'stcphvgxvcaysehvrfdfllwvxf',
    'epbtkgnnupbbdqgheyaks',
    'gilhnlfkdz',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwghy',
    'yswdsvnzucvsdzrmeghevjrfuhoebfedvyvortaxppwqncmspctdcjlwdxfnc',
    'baizdtmgozykukcrkapsnp',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgcsfjgtwqqubbhjkzmio',
    'iblyydfzztmtyjmgrxvyjwcobfyxcgyrbtnfhhxswxahze',
    'tyqcpfyggtmjahhpjzwhohvchyofsxwkehq',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniaymgkdduoabmp',
    'gpsqlqorcbqffdxlnijgvzvxilnbkynwscuoymqyg',
    'eidradnaqjwmucbrgtp',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzopnqxxcxshbhdmippldmcuxlvc',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbfmryrbgicgzqecje',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuze',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqandxbuvshebs',
    'tyqcqqxonxtwakxlrceyknbockvovdwumbjkfrgmudiafbqlflonfavpsrfq',
    'tyqcpfvorznmxxdzsnkjnrrzpfourbghe',
    'ziarqmfvzqpqhunfxwfwjtetotozkjaszznbtrvtxarysaxq',
    'tyqcpfvorznmxfmlzlcuikpxvahtfbfipjcgmeusshufvnirwcopdnvnop',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvdertpdpdjsngezrnyjxotgonuigmqkgipgb',
    'tyqcpfvorznmxxdzsnkjnrrzpfvfcvufmzzuqrjubsfzp',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqorqffebhoyfvgkspenqpcmvoxpybkjg',
    'oqojrvinnhlwuqllcsabkpfiusfucpjbsxzzhlgduawaqyp',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviaxsw',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqnzudhzclswotlbgdffwiekw',
    'csgadyglxddodloklsegvsbtgtkloklmxkbxxyorcqwybktuzpyeaqasn',
    'tyqitegmijccjwxuwvchbvuvllmgsdugzxdkiqvnllhmsjyskxpzzds',
    'tyqcpfvorznigwmavbguxwhunsshdybhzszxvlnpingqgaghkqzeynbbbhgcxeydir',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnunflh',
    'tyqcpfvorznmbwmhfmudnurhismirfgvojpdmclw',
    'tyqcpfvjijiwoup',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
    'tyqcpfvorznmxxdzsnkjhvabtzucyooctzzrgehlsuyinrrnzjilfpalvqgwoey',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvie',
    'tyqcpfvorznmxxxvjwfgcwegpibuifhfxyomnicutaegshpnschktxknqytritr',
    'tyqcpfvorznetvhiaobezckojwjbeg',
    'tyqcpfvorzmjabuccipqln',
    'frutebajqddrtrsmabfmdcgipssymldwscxbbrbpb',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviotvqi',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchxeyrnlh',
    'yaxaddctugikoutgcwqsdekghoemtooljxvysnzqqvgpc',
    'tyqcpfvorznmxxdzsnkjn',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqggjwxdvqesbgrqei',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckoktdj',
    'mzwjshgbgbdogqbrhfgbjkrqogyynbdwwkdclsbpynlrhxeucuuo',
    'tyqcpfvorznmxxdzsnkjnrrztrqgpbvvxm',
    'u',
    'tyqcpfvorznmxjnsgyirdtzpwywpnrvgadkmdjghlmerbqysaebyge',
    'tyqcpfvorznmxxdzsnkjnrkjelwoqorxsnyjqdnxfava',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvqqy',
    'hcav',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviof',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwreznx',
    'yesupowwycvcdbknhrkfyvnpoqtdhcbhybqvhnvgukoohh',
    'hcvlnbmcrepblcqrvwpfsyevlpyldptubnxkntqhpounxjcw',
    'lwaxzivycjkanvikqpbrvdvjkaclyuyfitwfycsnfwjg',
    'tkruiswrcbzsbkwbhhvjzzuuiayqzbxjosjssacislcvbtcojpmyatkfgyx',
    'ftujoohzvjonlwxwskeydoxpfvbvrdndbhgpuvykif',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqqngbpbdtufkgunalbekxbkpajlgbjtqmswh',
    'tyqcpfvorznmxxdzsnkjnrrzpewgvvnicz',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknjxnepksgdzwxsbziwdzsiiyarxhtpp',
    'jumcvboxaxjfybdlezcjrarolxjtsuweaigkiudusinfmnczdualqzlpwkm',
    'tyqcpfvoxegnpqesbaugr',
    'bteznmwyh',
    'rtbpifxevchngjnlumvtqtpebgtoznvvrzfxqzmcktoxydbstbvukrunnyeqwfd',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejysfrlewzsgukyahggau',
    'mvrrbfbfwyrxooopgcbwmtjfepejyfrqdkyaqencqqlagoilrtdndfyn',
    'tyqcpfvorznmyrzwhjxvhooytltygrakvgkqumrimazzhzoueyqnjz',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviob',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwoyvqczogovza',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvfnzshqqfpr',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjghvqg',
    'zqrnaierpnsigujuxrftdiauazddadqmrwcimxyztwumwzyjcrqvuexnitdecfgo',
    'xusxbbilivpovzsjvfsdnacipk',
    'tyqcpfvorznmxxdzkbqgrgeolnwhtvlckmiattpmxwwtmlifnexxbgtpjslwhczrjlhr',
    'eiuytvdzhcodcrdgthxynurtpsdyguupijjluucpfinrfnsjkdbbzexfmctejlgvd',
    'tyqcpfudqjrabwwvdvwmsyscnazaxpsjjhetouegipqevvointclztzummwrrbntjlsj',
    'tyqcpfvobzfvbiuoktjcqjfx',
    'tyqcpfvorznmxxdzsnamc',
    'ajqpomnpmsayhelmhfehjbvjaeszqigfqyuixbtyjy',
    'jpfxangixfavlhcssecxljksydrjxmaldhwpftinywtbmffsmtslefcuddk',
    'txryxhtutwdrqmpcapbcrlmhzsobueefwfekusmmylr',
    'etzqiepphjcleaocnwljcdn',
    'tyqcpfvokfxlbmbzmitacnromkoaoxl',
    'iddmxxcmwecfutbrbqeihhlnypckofuhkbydmljfemzrvlxsuskxkbgviybzu',
    'tyqcpfvorznmxxdzwilcfwrdlfqppdnuvgltuoooppwyomtvtggmsfxsxievdlsyame',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvzquhbkvburnhmerkuabrfcjwanzmfenz',
    'tyqcpqgaus',
    'zsbcqgctsjdjyfkdvcehawsqzacafwtjmhemfygdahkexvmkqkcehvek',
    'tyqcpfvorznmxxdzsnkjfesxjshxtlinfjltdfl',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnubpoqoghhgbpew',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdcuudsuqq',
    'tyqcpgwivyfquxqhbkjbioekqbsd',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnudxocavmwpggka',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvnlxdokehsjhiohwdeyikeajzipztzhwmxc',
    'pmpoycdxttisazazsgiswnsnhdmejpjbygvtjhwqydeugbouekvornbeiwmpehikbz',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwcpoxr',
    'qmgnrjtavzsqtwareroiihendgcvbzbcolvfoanmixxrxdtnmtevvv',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnunix',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetxpdyhmk',
    'tyqcpfvorznmxxdzsnkjnrfmy',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
    'tyqcpfzmlffhifutomuvfvwaqatopvur',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvdvagddprewvlgx',
    'ozmyertmnlwybntwxmpynuynhqdbqhosvjwexzqgvdtnvxexxwwwwhqktmzbfkjfn',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckohyof',
    'rniiqnzbctzeyeeyrxhfzqgbccplsncvtswcrqmevplfzadlulazmpmhdojwaokn',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzakckmtmjxx',
    'tyqcpfvorznmxxdzsnkjnrrzpfgkhdwienfhpsqbyrvotbgchkkmvk',
    'tyqcpfvorznmxxdzsnkjnrrumaqtylptffsjzygeumkahutdmalkqtrhtgrsrqcyyti',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvioncnr',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvigzpo',
    'tyqcpfvorznmxxdzsnkjnrrzpfgkeduq',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnccdnakfkhtg',
    'lhehmbyzcnlwvr',
    'tyqcpfvojuuprlby',
    'wds',
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqvegfwmtdcrvdb',
    'tyqcpfvorznpkeynkmbbyptclmhxxlyjzejqbcatgfrmkbbmxs',
    'tyqcpfvorznmiqmfrhihxsagizcrwyaukrjwbbgrxdzknq',
    'ghhlssixrouzbqcpmxzmsnybaygtb',
    'jndewk',
    'tyqcpfvorznmxxdzsnkjnrrzpdqanmxattjhgnflnoyynevsxvpbwfmfrnlc',
  ]
  const searchWord =
    'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviotvdticwxwcliylrpvrokbcguhnfvpd'
  const expected = [
    [
      'tkruiswrcbzsbkwbhhvjzzuuiayqzbxjosjssacislcvbtcojpmyatkfgyx',
      'txryxhtutwdrqmpcapbcrlmhzsobueefwfekusmmylr',
      'tyqcpfudqjrabwwvdvwmsyscnazaxpsjjhetouegipqevvointclztzummwrrbntjlsj',
    ],
    [
      'tyqcpfudqjrabwwvdvwmsyscnazaxpsjjhetouegipqevvointclztzummwrrbntjlsj',
      'tyqcpfvacyrjvmadrmntxotgvgivdvcuwygpjfwcuppunolukrum',
      'tyqcpfvjijiwoup',
    ],
    [
      'tyqcpfudqjrabwwvdvwmsyscnazaxpsjjhetouegipqevvointclztzummwrrbntjlsj',
      'tyqcpfvacyrjvmadrmntxotgvgivdvcuwygpjfwcuppunolukrum',
      'tyqcpfvjijiwoup',
    ],
    [
      'tyqcpfudqjrabwwvdvwmsyscnazaxpsjjhetouegipqevvointclztzummwrrbntjlsj',
      'tyqcpfvacyrjvmadrmntxotgvgivdvcuwygpjfwcuppunolukrum',
      'tyqcpfvjijiwoup',
    ],
    [
      'tyqcpfudqjrabwwvdvwmsyscnazaxpsjjhetouegipqevvointclztzummwrrbntjlsj',
      'tyqcpfvacyrjvmadrmntxotgvgivdvcuwygpjfwcuppunolukrum',
      'tyqcpfvjijiwoup',
    ],
    [
      'tyqcpfudqjrabwwvdvwmsyscnazaxpsjjhetouegipqevvointclztzummwrrbntjlsj',
      'tyqcpfvacyrjvmadrmntxotgvgivdvcuwygpjfwcuppunolukrum',
      'tyqcpfvjijiwoup',
    ],
    [
      'tyqcpfvacyrjvmadrmntxotgvgivdvcuwygpjfwcuppunolukrum',
      'tyqcpfvjijiwoup',
      'tyqcpfvobzfvbiuoktjcqjfx',
    ],
    [
      'tyqcpfvobzfvbiuoktjcqjfx',
      'tyqcpfvojuuprlby',
      'tyqcpfvokfxlbmbzmitacnromkoaoxl',
    ],
    [
      'tyqcpfvorzmjabuccipqln',
      'tyqcpfvorznetvhiaobezckojwjbeg',
      'tyqcpfvorznigwmavbguxwhunsshdybhzszxvlnpingqgaghkqzeynbbbhgcxeydir',
    ],
    [
      'tyqcpfvorzmjabuccipqln',
      'tyqcpfvorznetvhiaobezckojwjbeg',
      'tyqcpfvorznigwmavbguxwhunsshdybhzszxvlnpingqgaghkqzeynbbbhgcxeydir',
    ],
    [
      'tyqcpfvorznetvhiaobezckojwjbeg',
      'tyqcpfvorznigwmavbguxwhunsshdybhzszxvlnpingqgaghkqzeynbbbhgcxeydir',
      'tyqcpfvorznmbwmhfmudnurhismirfgvojpdmclw',
    ],
    [
      'tyqcpfvorznmbwmhfmudnurhismirfgvojpdmclw',
      'tyqcpfvorznmiqmfrhihxsagizcrwyaukrjwbbgrxdzknq',
      'tyqcpfvorznmxfmlzlcuikpxvahtfbfipjcgmeusshufvnirwcopdnvnop',
    ],
    [
      'tyqcpfvorznmxfmlzlcuikpxvahtfbfipjcgmeusshufvnirwcopdnvnop',
      'tyqcpfvorznmxjnsgyirdtzpwywpnrvgadkmdjghlmerbqysaebyge',
      'tyqcpfvorznmxxdzepfxabibcagilwjsqncxnpjqsxjzqqqbae',
    ],
    [
      'tyqcpfvorznmxxdzepfxabibcagilwjsqncxnpjqsxjzqqqbae',
      'tyqcpfvorznmxxdzkbqgrgeolnwhtvlckmiattpmxwwtmlifnexxbgtpjslwhczrjlhr',
      'tyqcpfvorznmxxdzsnamc',
    ],
    [
      'tyqcpfvorznmxxdzepfxabibcagilwjsqncxnpjqsxjzqqqbae',
      'tyqcpfvorznmxxdzkbqgrgeolnwhtvlckmiattpmxwwtmlifnexxbgtpjslwhczrjlhr',
      'tyqcpfvorznmxxdzsnamc',
    ],
    [
      'tyqcpfvorznmxxdzepfxabibcagilwjsqncxnpjqsxjzqqqbae',
      'tyqcpfvorznmxxdzkbqgrgeolnwhtvlckmiattpmxwwtmlifnexxbgtpjslwhczrjlhr',
      'tyqcpfvorznmxxdzsnamc',
    ],
    [
      'tyqcpfvorznmxxdzsnamc',
      'tyqcpfvorznmxxdzsnkjfesxjshxtlinfjltdfl',
      'tyqcpfvorznmxxdzsnkjhvabtzucyooctzzrgehlsuyinrrnzjilfpalvqgwoey',
    ],
    [
      'tyqcpfvorznmxxdzsnamc',
      'tyqcpfvorznmxxdzsnkjfesxjshxtlinfjltdfl',
      'tyqcpfvorznmxxdzsnkjhvabtzucyooctzzrgehlsuyinrrnzjilfpalvqgwoey',
    ],
    [
      'tyqcpfvorznmxxdzsnkjfesxjshxtlinfjltdfl',
      'tyqcpfvorznmxxdzsnkjhvabtzucyooctzzrgehlsuyinrrnzjilfpalvqgwoey',
      'tyqcpfvorznmxxdzsnkjn',
    ],
    [
      'tyqcpfvorznmxxdzsnkjfesxjshxtlinfjltdfl',
      'tyqcpfvorznmxxdzsnkjhvabtzucyooctzzrgehlsuyinrrnzjilfpalvqgwoey',
      'tyqcpfvorznmxxdzsnkjn',
    ],
    [
      'tyqcpfvorznmxxdzsnkjn',
      'tyqcpfvorznmxxdzsnkjnrfmy',
      'tyqcpfvorznmxxdzsnkjnrkjelwoqorxsnyjqdnxfava',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrfmy',
      'tyqcpfvorznmxxdzsnkjnrkjelwoqorxsnyjqdnxfava',
      'tyqcpfvorznmxxdzsnkjnrrumaqtylptffsjzygeumkahutdmalkqtrhtgrsrqcyyti',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrumaqtylptffsjzygeumkahutdmalkqtrhtgrsrqcyyti',
      'tyqcpfvorznmxxdzsnkjnrrzpdqanmxattjhgnflnoyynevsxvpbwfmfrnlc',
      'tyqcpfvorznmxxdzsnkjnrrzpewgvvnicz',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpdqanmxattjhgnflnoyynevsxvpbwfmfrnlc',
      'tyqcpfvorznmxxdzsnkjnrrzpewgvvnicz',
      'tyqcpfvorznmxxdzsnkjnrrzpfgkeduq',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpdqanmxattjhgnflnoyynevsxvpbwfmfrnlc',
      'tyqcpfvorznmxxdzsnkjnrrzpewgvvnicz',
      'tyqcpfvorznmxxdzsnkjnrrzpfgkeduq',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgkeduq',
      'tyqcpfvorznmxxdzsnkjnrrzpfgkhdwienfhpsqbyrvotbgchkkmvk',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknjxnepksgdzwxsbziwdzsiiyarxhtpp',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgkeduq',
      'tyqcpfvorznmxxdzsnkjnrrzpfgkhdwienfhpsqbyrvotbgchkkmvk',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknjxnepksgdzwxsbziwdzsiiyarxhtpp',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgkeduq',
      'tyqcpfvorznmxxdzsnkjnrrzpfgkhdwienfhpsqbyrvotbgchkkmvk',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknjxnepksgdzwxsbziwdzsiiyarxhtpp',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknjxnepksgdzwxsbziwdzsiiyarxhtpp',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvfnzshqqfpr',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvnlxdokehsjhiohwdeyikeajzipztzhwmxc',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvfnzshqqfpr',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvnlxdokehsjhiohwdeyikeajzipztzhwmxc',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqorqffebhoyfvgkspenqpcmvoxpybkjg',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqorqffebhoyfvgkspenqpcmvoxpybkjg',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqqngbpbdtufkgunalbekxbkpajlgbjtqmswh',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckohyof',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckohyof',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckoktdj',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzakckmtmjxx',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckohyof',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckoktdj',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzakckmtmjxx',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckohyof',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckoktdj',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzakckmtmjxx',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckohyof',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckoktdj',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzakckmtmjxx',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckohyof',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckoktdj',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzakckmtmjxx',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckohyof',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckoktdj',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzakckmtmjxx',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzakckmtmjxx',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqandxbuvshebs',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzakckmtmjxx',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqandxbuvshebs',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqandxbuvshebs',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqandxbuvshebs',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqandxbuvshebs',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqandxbuvshebs',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqandxbuvshebs',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqandxbuvshebs',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbfmryrbgicgzqecje',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbfmryrbgicgzqecje',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejemb',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbfmryrbgicgzqecje',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetaoqgbczdcemzlmqemy',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbfmryrbgicgzqecje',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnccdnakfkhtg',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbfmryrbgicgzqecje',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnccdnakfkhtg',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbneryahanhrhkal',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnccdnakfkhtg',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbneryahanhrhkal',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnubpoqoghhgbpew',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnubpoqoghhgbpew',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnudxocavmwpggka',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnunflh',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnunflh',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniaymgkdduoabmp',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwcpoxr',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniaymgkdduoabmp',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwcpoxr',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwghy',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwcpoxr',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwghy',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwreznx',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchidnpt',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviaxsw',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvie',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchidnpt',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviaxsw',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvie',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchidnpt',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviaxsw',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvie',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchidnpt',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviaxsw',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvie',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchidnpt',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviaxsw',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvie',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchidnpt',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviaxsw',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvie',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviaxsw',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvie',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvigzpo',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviaxsw',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvie',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvigzpo',
    ],
    [
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviob',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviof',
      'tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchvioncnr',
    ],
    ['tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviotvqi'],
    ['tyqcpfvorznmxxdzsnkjnrrzpfgknvqvderckuzdqqgaqejetbnuniwwjbdchviotvqi'],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]

  expect(suggestedProducts(products, searchWord)).toEqual(expected)
})
