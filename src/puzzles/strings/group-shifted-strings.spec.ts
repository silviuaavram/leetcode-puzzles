import {groupStrings} from './group-shifted-strings'

test('groups strings 1', () => {
  const strings = ['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']
  const expected = [['acef'], ['a', 'z'], ['abc', 'bcd', 'xyz'], ['az', 'ba']]

  expect(groupStrings(strings)).toEqual(expect.arrayContaining(expected))
})

test('groups strings 2', () => {
  const strings = ['a']
  const expected = [['a']]

  expect(groupStrings(strings)).toEqual(expect.arrayContaining(expected))
})

test('groups strings 3', () => {
  const strings = ['ab', 'xy', 'de', 'ax', 'cz']
  const expected = [
    ['ab', 'de', 'xy'],
    ['ax', 'cz'],
  ]

  expect(groupStrings(strings)).toEqual(expect.arrayContaining(expected))
})

test('groups strings 4', () => {
  const strings = ['ab', 'ba']
  const expected = [['ba'], ['ab']]

  expect(groupStrings(strings)).toEqual(expect.arrayContaining(expected))
})

test('groups strings 5', () => {
  const strings = [
    'fpbnsbrkbcyzdmmmoisaa',
    'cpjtwqcdwbldwwrryuclcngw',
    'a',
    'fnuqwejouqzrif',
    'js',
    'qcpr',
    'zghmdiaqmfelr',
    'iedda',
    'l',
    'dgwlvcyubde',
    'lpt',
    'qzq',
    'zkddvitlk',
    'xbogegswmad',
    'mkndeyrh',
    'llofdjckor',
    'lebzshcb',
    'firomjjlidqpsdeqyn',
    'dclpiqbypjpfafukqmjnjg',
    'lbpabjpcmkyivbtgdwhzlxa',
    'wmalmuanxvjtgmerohskwil',
    'yxgkdlwtkekavapflheieb',
    'oraxvssurmzybmnzhw',
    'ohecvkfe',
    'kknecibjnq',
    'wuxnoibr',
    'gkxpnpbfvjm',
    'lwpphufxw',
    'sbs',
    'txb',
    'ilbqahdzgij',
    'i',
    'zvuur',
    'yfglchzpledkq',
    'eqdf',
    'nw',
    'aiplrzejplumda',
    'd',
    'huoybvhibgqibbwwdzhqhslb',
    'rbnzendwnoklpyyyauemm',
  ]
  const expected = [
    ['a', 'd', 'i', 'l'],
    ['eqdf', 'qcpr'],
    ['lpt', 'txb'],
    ['yfglchzpledkq', 'zghmdiaqmfelr'],
    ['kknecibjnq', 'llofdjckor'],
    ['cpjtwqcdwbldwwrryuclcngw', 'huoybvhibgqibbwwdzhqhslb'],
    ['lbpabjpcmkyivbtgdwhzlxa', 'wmalmuanxvjtgmerohskwil'],
    ['iedda', 'zvuur'],
    ['js', 'nw'],
    ['lebzshcb', 'ohecvkfe'],
    ['dgwlvcyubde', 'ilbqahdzgij'],
    ['lwpphufxw', 'zkddvitlk'],
    ['qzq', 'sbs'],
    ['dclpiqbypjpfafukqmjnjg', 'yxgkdlwtkekavapflheieb'],
    ['mkndeyrh', 'wuxnoibr'],
    ['firomjjlidqpsdeqyn', 'oraxvssurmzybmnzhw'],
    ['gkxpnpbfvjm', 'xbogegswmad'],
    ['fpbnsbrkbcyzdmmmoisaa', 'rbnzendwnoklpyyyauemm'],
    ['aiplrzejplumda', 'fnuqwejouqzrif'],
  ]

  expect(groupStrings(strings)).toEqual(expect.arrayContaining(expected))
})

// '10_-14_12_5_-17_16_-7_-9_1_22_1_-22_9_0_0_2_-6_10_-18_0' => [ 'fpbnsbrkbcyzdmmmoisaa' ],
// '-16_12_12_-21_9_-10_19_-9_1_-4_1_4_9_0_0_-24_20_-16_8_0' => [ 'rbnzendwnoklpyyyauemm' ]
