
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,AntdPickerRadio} from '@components/public';
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
      <AntdSteps currentNum={currentNum} status ="finish"/>
      <AntdButton fn={() => {
        setcurrentNum(currentNum + 1)
      }}></AntdButton>
    </div>
  )
}
