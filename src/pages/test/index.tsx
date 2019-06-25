
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,AntdPickerRadio,Inputs,AntdResult} from '@components/public';
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
      {/* <AntdPickerRadio/> */}
      <AntdResult fn={() => {
        console.log(111)
      }} resulttype='success' title='恭喜您，贷款审批通过' messageFist='请点击立即用款完成后续流程' messageSecord='您的审批额度为￥100,000' btnShow={true} btnText='开始签约'/>
      <AntdResult  resulttype='audit' title='审核中' messageFist='您的资料正在银行审核中'/>
      <AntdResult  resulttype='tips' messageFist='由于您提交的资料有误或缺失 请您点击补件按钮检查并补全资料' btnShow={true} btnText='去补件'/>
      <AntdResult  resulttype='wrong' messageFist='抱歉，您未通过贷款审批'/>
      {/* <AntdInputItem  labeltext='产品名称' placeholder='请输入产品名称' getState={productName}  />
      <AntdInputItem  labeltext='地址' placeholder='请选择地址' getState={productName} picker = {true} pickertype = 'Areas' />
      <AntdSteps currentNum={currentNum} status ="finish"/> */}
      <AntdButton fn={() => {
        setcurrentNum(currentNum + 1)
      }}></AntdButton>
    </div>
  )
}
