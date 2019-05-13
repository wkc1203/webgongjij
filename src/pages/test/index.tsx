
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt } from '@components/public';
import { fromEvent, timer, from, interval, range, EMPTY, NEVER, pipe } from 'rxjs';
import { map, pluck, startWith, first, auditTime, take, switchMapTo, tap, throttleTime } from 'rxjs/operators';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

export const Item = () => (
  <div className={style['item']}>
    {'1234567890'}
    <input/>
  </div>
)

export const l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

type Test = {
  history: History
}

export default ({ history }: Test) => {
  const [list, setList] = useState(l)
  const [y, setY] = useState(0)
  const refresh = useRef(null)
  useEffect(() => {
    let index = 0
    let diff = 0
    const current = refresh.current as any
    const start$ = fromEvent(current, 'touchstart')
      .pipe(
        pluck('touches', '0', 'pageY')
      )
      .subscribe((e: any) => {
        index = e
      })
    const move$ = fromEvent(current, 'touchmove')
      .pipe(
        throttleTime(50),
        pluck('touches', '0', 'pageY')
      )
      .subscribe(e => {
        diff = (e as number) - index
        if (diff >= 15) {
          setY(diff)
        }
      })
    const end$ = fromEvent(current, 'touchend')
      .subscribe(() => {
        index = 0
        diff = 0
        setY(0)
      })
    return (() => {
      start$.unsubscribe()
      move$.unsubscribe()
      end$.unsubscribe()
    })
  }, [])
  return (
    <div className={style['test']}>
      <Navigationt title='test' history={history} />
      <div ref={refresh} className={style['refresh']} style={{ transform: 'translateY(' + y + 'px)' }} >
        {
          list.map((i) => <Item key={i} />)
        }
      </div>
    </div>
  )
}
