
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,AntdPickerRadio,Inputs,AntdResult,AntdAccordion,AntdImagePicker,Modal,Cutoff} from '@components/public';
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
  const [pickertype, pickertypepro] = useState();
  const [zh, setZh] = useState({ val: '', pla: '请输入身份证号／手机号／用户名' })
  const [show1, setShow] = useState(false)
  const [pr, productName] = useState({ val: ''})
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('you name is', currentNum)
    console.log(pickertype,'111111')
    if(currentNum>2){
      return
    }
  }, [currentNum])

  return (
    <div className={style['test']}>
      <Navigationt title='申请流程' history={history} />
      <AntdSteps currentNum={currentNum} status ="finish"/> 
      <Cutoff hg='6' colorValue='rgba(216,216,216,1)'/>

      <AntdPickerRadio pickertype = {pickertype} pickertypepro = {pickertypepro} />
      <AntdImagePicker labeltext = '上传购车位证明' />
      <AntdButton fn={() => {
          // pickertypepro(true)
          setcurrentNum(currentNum + 1)
          setShow(true)
        }}></AntdButton>
       <Modal
        titles={'系统消息'}
        title={'系统错误请重试'}
        show={show1}
        box = 'g'
        setShow={setShow}
      />
    </div>
  )
}
