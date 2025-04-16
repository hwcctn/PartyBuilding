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
  ],

  7: [
    {
      key: '7-1',
      label: '支部确定发展对象人选时间',
      type: 'date',
      placeholder: '发展对象人选时间',
      span: 20
    },
    {
      key: '7-2',
      label: '起止公示时间',
      // type: 'datetimerange',

      startplaceholder: '开始 日期',
      endplaceholder: '结束 日期',
      span: 20
    }
  ],
  8: [
    {
      key: '8-1',
      label: '党委备案时间',
      type: 'date',
      placeholder: '请输入党委时间',
      span: 20
    }
  ],
  9: [
    {
      key: '9-1',
      label: '入党介绍人1',
      type: 'text',
      placeholder: '请输入入党介绍人1'
    },
    {
      key: '9-2',
      label: '单位及职务1',
      type: 'text',
      placeholder: '请输入单位及职务2'
    },
    {
      key: '9-3',
      label: '入党介绍人2',
      type: 'text',
      placeholder: '请输入入党介绍人2'
    },
    {
      key: '9-4',
      label: '单位及职务2',
      type: 'text',
      placeholder: '请输入单位及职务2'
    }
  ],
  10: [
    {
      key: '10-1',
      label: '政审是否合格',
      type: 'select',
      placeholder: '请选择',
      options: [
        { label: '是', value: '是' },
        { label: '否', value: '否' }
      ],
      span: 20
    },
    {
      key: '10-2',
      label: '政审人（单位，职务，签名）',
      type: 'text',
      placeholder: '请输入单位及职务以及签名',
      span: 20
    }
  ],
  11: [
    {
      key: '11-1',
      label: '参加发展对象集中培训起止日期',
      // type: 'datetimerange',
      span: 20
    },
    {
      key: '11-2',
      label: '培训成绩',
      type: 'text',
      placeholder: '请输入培训成绩',
      span: 20
    }
  ],
  12: [
    {
      key: '12-1',
      label: '支部审查时间',
      type: 'date',
      placeholder: '请输入支部审查时间',
      span: 20
    }
  ],
  13: [
    {
      key: '13-1',
      label: '党委预审时间',
      type: 'date',
      placeholder: '请输入党委预审时间',
      span: 20
    }
  ],
  14: [
    {
      key: '14-1',
      label: '入党志愿书编号',
      type: 'text',
      placeholder: '请输入入党志愿书编号',
      span: 20
    }
  ],
  15: [
    {
      key: '15-1',
      label: '会议时间',
      type: 'date',
      placeholder: '请输入会议时间'
    },
    {
      key: '15-2',
      label: '有表决权党员人数',
      type: 'text',
      placeholder: '请输入人员个数'
    },
    {
      key: '15-3',
      label: '应到人数',
      type: 'text',
      placeholder: '请输入应到人数'
    },
    {
      key: '15-4',
      label: '实到人数',
      type: 'text',
      placeholder: '请输入实到人数'
    },
    {
      key: '15-5',
      label: '赞成票数',
      type: 'text',
      placeholder: '请输入赞成票数',
      span: 8
    },
    {
      key: '15-6',
      label: '反对票数',
      type: 'text',
      placeholder: '请输入反对票数',
      span: 8
    },
    {
      key: '15-7',
      label: '弃权票数',
      type: 'text',
      placeholder: '请输入弃权票数',
      span: 8
    }
  ],
  16: [
    {
      key: '16-1',
      label: '党委派人谈话时间',
      type: 'date',
      placeholder: '请输入谈话时间',
      span: 20
    },
    {
      key: '16-2',
      label: '谈话人（单位，职务，签名）',
      type: 'text',
      placeholder: '请输入相关信息',
      span: 20
    }
  ],
  17: [
    {
      key: '17-1',
      label: '党委审批时间',
      type: 'date',
      placeholder: '请输入审批时间'
    },
    {
      key: '17-2',
      label: '党委委员个数',
      type: 'text',
      placeholder: '请输入人员个数'
    },
    {
      key: '17-3',
      label: '实到人数',
      type: 'text',
      placeholder: '请输入人员个数'
    },
    {
      key: '17-4',
      label: '同意个数',
      type: 'text',
      placeholder: '请输入人员个数'
    },
    {
      key: '17-5',
      label: '预备起止时间',
      // type: 'datetimerange',
      span: 20
    }
  ],
  18: [
    {
      key: '18-1',
      label: '向上级党委组织部门备案时间',
      type: 'date',
      placeholder: '请输入备案时间',
      span: 20
    }
  ],
  19: [
    {
      key: '19-1',
      label: '编入党支部名称',
      type: 'text',
      placeholder: '请输入党支部名称',
      span: 20
    }
  ],
  20: [
    {
      key: '20-1',
      label: '入党宣誓时间',
      type: 'date',
      placeholder: '请输入宣誓时间',
      span: 20
    }
  ],

  //21：继续教育考察
  21: [
    {
      key: '21-1',
      label: '继续教育考察',
      type: 'textarea',
      placeholder: '请输入考察内容',
      span: 20
    }
  ],
  22: [
    {
      key: '22-1',
      label: '申请转正时间',
      type: 'date',
      placeholder: '请输入申请转正时间',
      span: 20
    },
    {
      key: '22-1',
      label: '转正公示起止时间',
      type: 'text',
      placeholder: '请输入转正公示起止时间',
      span: 20
    }
  ],
  23: [
    {
      key: '23-1',
      label: '会议时间',
      type: 'date',
      placeholder: '请输入会议时间'
    },
    {
      key: '23-2',
      label: '有表决权党员人数',
      type: 'text',
      placeholder: '请输入人员个数'
    },
    {
      key: '23-3',
      label: '应到人数',
      type: 'text',
      placeholder: '请输入人员个数'
    },
    {
      key: '23-4',
      label: '实到人数',
      type: 'text',
      placeholder: '请输入人员个数'
    },
    {
      key: '23-5',
      label: '赞成票数',
      type: 'text',
      placeholder: '请输入赞成票数',
      span: 6
    },
    {
      key: '23-6',
      label: '反对票数',
      type: 'text',
      placeholder: '请输入反对票数',
      span: 6
    },
    {
      key: '23-7',
      label: '弃权票数',
      type: 'text',
      placeholder: '请输入弃权票数',
      span: 6
    },
    {
      key: '23-8',
      label: '会议决议',
      type: 'select',
      placeholder: '请选择',
      options: [
        { label: '是', value: '是' },
        { label: '否', value: '否' }
      ],
      span: 6
    }
  ],
  24: [
    {
      key: '24-1',
      label: '党委审批时间',
      type: 'date',
      placeholder: '请输入审批时间'
    },
    {
      key: '24-2',
      label: '党委委员人数',
      type: 'text',
      placeholder: '请输入人员个数'
    },
    {
      key: '24-3',
      label: '实到人数',
      type: 'text',
      placeholder: '请输入人员个数'
    },
    {
      key: '24-4',
      label: '同意人数',
      type: 'text',
      placeholder: '请输入人员个数'
    },
    {
      key: '24-5',
      label: '党龄起算时间',
      type: 'date',
      placeholder: '请输入党龄起算时间'
    },
    {
      key: '24-6',
      label: '档案整理人',
      type: 'text',
      placeholder: '请输入档案整理人姓名'
    }
  ]
}
