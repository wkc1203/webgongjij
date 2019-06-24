
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { Picker, List, WhiteSpace,WingBlank, Radio, Flex } from 'antd-mobile';
import { Center } from '@components/public';
import cs from 'classnames'
const RadioItem = Radio.RadioItem;
export type AntdPickerRadio = {
  placeholder?: string,
  valueNum?:number
}
const colorStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '16px',
  height: '16px',
  marginRight: '10px',
};
const Radiolist= [
  {
    label:(<RadioItem   onChange={ () => {
      console.log(1)
     }} >
       测试
     </RadioItem>),
     value:11
  },
  {
    label:(<RadioItem   onChange={ () => {
      console.log(1)
     }} >
       测试
     </RadioItem>),
     value:11
  }
  
]
const colors = [
  {
    label:
    (<div>
      <span
        style={{ ...colorStyle, backgroundColor: '#FF0000' }}
      />
      <span>红色</span>
    </div>),
    value: '#FF0000',
  },
  {
    label:
    (<div>
      <span
        style={{ ...colorStyle, backgroundColor: '#00FF00' }}
      />
      <span>绿色</span>
    </div>),
    value: '#00FF00',
  },
  {
    label:
    (<div>
      <span
        style={{ ...colorStyle, backgroundColor: '#0000FF' }}
      />
      <span>蓝色</span>
    </div>),
    value: '#0000FF',
  },
];
const data = [
  { value: 0, label: 'doctor' },
  { value: 1, label: 'bachelor' },
];
export const AntdPickerRadio = ({ placeholder,valueNum = 1}: AntdPickerRadio) => {
  const [valueNumz, onChange] = useState({ valueNum})
  useEffect(() => {
    console.log(111)
    onChange({ valueNum: valueNum })
  }, [valueNum])
  return (
    <div style={{ margin: '15px' }}>
      <WingBlank size="sm">
      <List renderHeader={() => 'RadioItem demo'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={ valueNum === i.value } onChange={() => {
            onChange({
              valueNum: i.value,
            })
          }} >
            {i.label}
          </RadioItem>
        ))}
      </List>
      <Picker
          data={colors}
          value={ ['#00FF00']}
          cols={1}
        >
          <List.Item arrow="horizontal">Complex Labels</List.Item>
        </Picker>
      </WingBlank>
    </div>
  )
}
