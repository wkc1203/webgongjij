
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { Picker, List, WhiteSpace,WingBlank, Radio, Flex,ActionSheet, Button, Toast } from 'antd-mobile';
import { AntdInputItem} from '@components/public';
import { Center } from '@components/public';
import cs from 'classnames'
const RadioItem = Radio.RadioItem;
export type AntdPickerRadio = {
  placeholder?: string,
  valueNum?:number
  pickertype?:boolean
  pickertypepro: (...rest: any) => any
}
const colorStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '16px',
  height: '16px',
  marginRight: '10px',
};
const data = [
  { value: 0, label: '房产证' },
  { value: 1, label: '产调证明（不动产登记查询证明）' },
  { value: 2, label: '购房合同+全款发票' },
  { value: 3, label: '首付款发票+房贷合同' },
];
export const AntdPickerRadio = ({ placeholder,pickertype,pickertypepro}: AntdPickerRadio) => {
  const [currentNum, setcurrentNum] = useState(true);
  const [valueNum, setCount] = useState(0)
  const [radioItemLabel, radioItem] = useState()
  const [pr, productName] = useState({ val: ''})
  useEffect(() => {
    console.log(valueNum)
    console.log(radioItemLabel)
  });
  return (
    <div>
      <WingBlank size="sm">
      <AntdInputItem  labeltext='上传购房相关证明（四选一）'  value={radioItemLabel} placeholder='请选择您需要上传的证明组合' inputiconright={require('./down-icon.png')} getState={productName}  onFocus={() => {
            pickertypepro(true)
          }}/>
      <div className = { cs(style['pirckerido-box'], { [style['pirckerido-acitve']]: pickertype}) }>
        <div className={style['pirckerido-rido']}>
          <List renderHeader={() => '请选择上传购房相关证明类型（四选一）'}>
            {data.map(i => (
              <RadioItem key={i.value} checked={ valueNum === i.value } onChange={() => {
                  console.log(i)
                  radioItem(i.label)
                  pickertypepro(false)
                  setCount(i.value)
              }} >
                {i.label}
              </RadioItem>
            ))}
          </List>
        </div>
        <div className={style['am-popover-mask']}></div>
      </div>
      </WingBlank>
    </div>
  )
}
