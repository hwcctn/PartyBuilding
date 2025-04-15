export const formConfigs: any = {
  1: [
    {
      key: '1-1',
      label: '入党申请时间',
      type: 'date',
      tooltip: '要满18岁之后才能申请入党',
      placeholder: '与入党申请书落款时间一致',
      span: 20
    },
    {
      key: '1-2',
      label: '入党申请书接收人(单位、职务、签名)',
      type: 'text',
      span: 20
    }
  ],

  2: [
    {
      key: '2-1',
      label: '支部谈话时间',
      type: 'date',
      placeholder: '与入党申请书落款时间一致',
      span: 20
    },
    { key: '2-2', label: '谈话人(单位、职务、签名)', span: 20 }
    // {
    //   key: 'type',
    //   label: '增加类型',
    //   type: 'select',
    //   options: [
    //     { label: '新增党员', value: '1' },
    //     { label: '转入党员', value: '2' }
    //   ]
    // }
  ],
  3: [
    {
      key: '3-1',
      label: '支部确定入党积极分子时间',
      type: 'date',
      placeholder: '入党积极分子时间'
    },
    {
      key: '3-2',
      label: '会议记录人',
      type: 'text',
      placeholder: '请输入会议记录人'
    },
    {
      key: '3-3',
      label: '会议地点',
      type: 'text',
      placeholder: '请输入会议地点'
    },
    {
      key: '3-4',
      label: '会议主持人',
      type: 'text',
      placeholder: '请输入会议主持人'
    },
    {
      key: '3-5',
      label: '群团组织推优情况',
      type: 'textarea'
    },
    {
      key: '3-6',
      label: '党支部意见',
      type: 'textarea'
    }
  ],
  4: [
    {
      key: '4-1',
      label: '党委备案时间',
      type: 'date',
      placeholder: '以学院党委备案时间为准',
      span: 20
    }
  ],
  5: [
    {
      key: '5-1',
      label: '培养联系人1',
      placeholder: '请输入培养联系人1'
    },
    {
      key: '5-2',
      label: '单位以及职业1',
      placeholder: '请输入培养联系人2的单位以及职业'
    },
    {
      key: '5-3',
      label: '培养联系人2',
      placeholder: '请输入培养联系人2'
    },
    {
      key: '5-4',
      label: '单位以及职业2',
      placeholder: '请输入培养联系人2的单位以及职业'
    }
  ],
  6: [
    {
      key: '6-1',
      label: '书面思想汇报时间1',
      placeholder: '请选择时间1',
      type: 'date',
      span: 6
    },
    {
      key: '6-2',
      label: '书面思想汇报时间2',
      placeholder: '请选择时间2',
      type: 'date',
      span: 6
    },
    {
      key: '6-3',
      label: '书面思想汇报时间3',
      placeholder: '请选择时间3',
      type: 'date',
      span: 6
    },
    {
      key: '6-4',
      label: '书面思想汇报时间4',
      placeholder: '请选择时间4',
      type: 'date',
      span: 6
    },
    {
      key: '6-5',
      label: '支部考察时间1',
      placeholder: '请选择时间1',
      type: 'date',
      span: 6
    },
    {
      key: '6-6',
      label: '支部考察时间2',
      placeholder: '请选择时间2',
      type: 'date',
      span: 6
    },
    {
      key: '6-7',
      label: '支部考察时间3',
      placeholder: '请选择时间3',
      type: 'date',
      span: 6
    },
    {
      key: '6-8',
      label: '支部考察时间4',
      placeholder: '请选择时间4',
      type: 'date',
      span: 6
    },
    {
      key: '6-9',
      label: '培养教育情况',
      type: 'textarea',
      placeholder: `（例文：××××年××月--××××年××月，组织×××同志参加×××培训班，学习××××等课程。）
  ××××年××月××日，组织×××同志听×××同志讲的党课，题目为×××××××。
  ××××年××月××日，组织×××同志到×××单位开展党员服务群众活动。
  ××××年××月××日，发放《党章》等资料，要求×××同志认真学习。
  (至少四条，其中参加培训班只能算一条记录）`
    },
    {
      key: '6-10',
      label: '考察情况',
      placeholder:
        '（从列为积极分子后每半年考察一次，考察情况落款时间刚满半年当天）',
      type: 'textarea'
    }
  ]
}
