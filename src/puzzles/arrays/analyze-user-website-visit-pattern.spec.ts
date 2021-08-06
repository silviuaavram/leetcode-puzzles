import {mostVisitedPattern} from './analyze-user-website-visit-pattern'

test('checks the 3-sequence 1', () => {
  const username = [
    'joe',
    'joe',
    'joe',
    'james',
    'james',
    'james',
    'james',
    'mary',
    'mary',
    'mary',
  ]
  const timestamp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const website = [
    'home',
    'about',
    'career',
    'home',
    'cart',
    'maps',
    'home',
    'home',
    'about',
    'career',
  ]

  expect(mostVisitedPattern(username, timestamp, website)).toEqual([
    'home',
    'about',
    'career',
  ])
})

test('checks the 3-sequence 2', () => {
  const username = ['zkiikgv', 'zkiikgv', 'zkiikgv', 'zkiikgv']
  const timestamp = [436363475, 710406388, 386655081, 797150921]
  const website = ['wnaaxbfhxp', 'mryxsjc', 'oz', 'wlarkzzqht']

  expect(mostVisitedPattern(username, timestamp, website)).toEqual([
    'oz',
    'mryxsjc',
    'wlarkzzqht',
  ])
})

test('checks the 3-sequence 4', () => {
  const username = [
    'h',
    'eiy',
    'cq',
    'h',
    'cq',
    'txldsscx',
    'cq',
    'txldsscx',
    'h',
    'cq',
    'cq',
  ]
  const timestamp = [
    527896567,
    334462937,
    517687281,
    134127993,
    859112386,
    159548699,
    51100299,
    444082139,
    926837079,
    317455832,
    411747930,
  ]
  const website = [
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'yljmntrclw',
    'hibympufi',
    'yljmntrclw',
  ]

  expect(mostVisitedPattern(username, timestamp, website)).toEqual([
    'hibympufi',
    'hibympufi',
    'yljmntrclw',
  ])
})

test('checks the 3-sequence 3', () => {
  const username = [
    'ldigebxndh',
    'jxm',
    'iit',
    'ldigebxndh',
    'dut',
    'oxkr',
    'dut',
    'ldigebxndh',
    'iit',
  ]
  const timestamp = [
    246561774,
    336877562,
    613255786,
    581611682,
    67005296,
    164162280,
    644105652,
    998777950,
    962088025,
  ]
  const website = [
    'kzx',
    'bsmy',
    'qhmiliihh',
    'txvn',
    'snf',
    'nrtj',
    'ksakw',
    'bsmy',
    'txvn',
  ]

  expect(mostVisitedPattern(username, timestamp, website)).toEqual([
    'kzx',
    'txvn',
    'bsmy',
  ])
})
