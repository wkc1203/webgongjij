
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,AntdPickerRadio,Inputs} from '@components/public';
import { fromEvent, timer, from, interval, range, EMPTY, NEVER, pipe } from 'rxjs';
import { map, pluck, startWith, first, auditTime, take, switchMapTo, tap, throttleTime } from 'rxjs/operators';
// const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
// const pImgs: any = {}
// requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

export const Item = () => (
  <div className={style['item']}>
    {'1234567890'}
    <input/>
  </div>
)
const pImgs: any = {}
export const l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

type Test = {
  history: History
}


export default ({ history }: Test) => {
  const [currentNum, setcurrentNum] = useState(0);
  const [zh, setZh] = useState({ val: '', pla: '请输入身份证号／手机号／用户名' })
  const [pr, productName] = useState({ val: ''})
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('you name is', currentNum)
    if(currentNum>2){
      return
    }
  }, [currentNum])


  return (
    <div className={style['test']}>
      <Navigationt title='test' history={history} />
      <AntdPickerRadio/>
      <AntdInputItem  labeltext='产品名称' placeholder='请输入产品名称' getState={productName}  />
      <AntdInputItem  labeltext='月收入' placeholder='请输入产品名称' getState={productName} picker = {true} pickertype = 'Mon' />
      <AntdInputItem  labeltext='家庭月收入' placeholder='请输入产品名称' getState={productName} picker = {true} pickertype = 'Tot' />
      <AntdInputItem  labeltext='亲属关系' placeholder='请输入产品名称' getState={productName} picker = {true} pickertype = 'Kin' />
      <AntdInputItem  labeltext='最高学历' placeholder='请输入产品名称' getState={productName} picker = {true} pickertype = 'Rec' />
      <AntdInputItem  labeltext='婚姻情况' placeholder='请输入产品名称' getState={productName} picker = {true} pickertype = 'Mar' />
      {/* <Inputs img={pImgs['zhanghao']} placeholder={zh.pla} getState={setZh} /> */}
      <AntdSteps currentNum={currentNum} status ="finish"/>
      <AntdButton fn={() => {
        setcurrentNum(currentNum + 1)
      }}></AntdButton>
    </div>
  )
}
