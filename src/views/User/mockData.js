const baseData = [
  {
    account: 'user001',
    password: 'pass123',
    name: '暂无',
    sex: '暂无',
    phone: '暂无',
    idCard: '暂无',
    party: '党组织 A'
  },
  {
    account: 'user002',
    password: 'pass456',
    name: '暂无',
    sex: '暂无',
    phone: '暂无',
    idCard: '暂无',
    party: '党组织 B'
  },
  {
    account: 'user003',
    password: 'pass789',
    name: '暂无',
    sex: '暂无',
    phone: '暂无',
    idCard: '暂无',
    party: '党组织 C'
  },
  {
    account: 'user004',
    password: 'pass012',
    name: '暂无',
    sex: '暂无',
    phone: '暂无',
    idCard: '暂无',
    party: '党组织 A'
  },
  {
    account: 'user002',
    password: 'abcdef',
    name: '李四',
    sex: '男',
    phone: '13900239000',
    idCard: '110101199202020002',
    party: '党组织 B'
  },
  {
    account: 'user003',
    password: 'qwerty',
    name: '王五',
    sex: '男',
    phone: '13700337000',
    idCard: '110101199303030003',
    party: '党组织 C'
  }
]
export const Modeldata = Array.from({ length: 64 }, (_, index) => {
  const group = baseData[index % 6]
  return { ...group, 序号: index + 1 }
})
