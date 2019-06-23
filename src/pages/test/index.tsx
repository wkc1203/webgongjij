
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt ,AntdInputItem,AntdButton} from '@components/public';
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
  const [zh, setZh] = useState({ val: ''})
  const [mm, setMm] = useState({ val: ''})
  const [xm, setXm] = useState('')
  const [list, setList] = useState(l)
  const [y, setY] = useState(0)
  const refresh = useRef(null)
  return (
    <div className={style['test']}>
      <Navigationt title='test' history={history} />
      <AntdInputItem  labeltext='产品名称' placeholder='请输入产品名称' getState={setZh} />
      <AntdInputItem  labeltext='用款金额' placeholder='请输入用款金额' getState={setMm} />
      <AntdButton fn={() => {
        console.log(zh)
        console.log(mm)
      }}></AntdButton>
    </div>
  )
}
