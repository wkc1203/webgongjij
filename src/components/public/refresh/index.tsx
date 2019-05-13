
import React, { useEffect, useState, useRef, Fragment } from 'react';
import style from './index.module.scss';
import { fromEvent } from 'rxjs';
import { pluck, startWith, throttleTime, tap } from 'rxjs/operators';

const refreshMsg = {
  0: '下拉刷新',
  1: '松开刷新数据',
  2: '数据刷新中'
}

export type Refresh = {
  Child: (...rest: any) => JSX.Element
}

export const Refresh = ({ Child }: Refresh) => { 
  const refreshRef = useRef(null)
  const [refresh, setRefresh]: [keyof typeof refreshMsg, any] = useState(0)

  return (
    <Fragment>
      <div ref={refreshRef} className={style['refresh']} style={{ height: '75px', top: '-75px' }}>
        {refreshMsg[refresh]}
      </div>
      <div className={style['']}>
        <Child />
      </div>
    </Fragment>
  )
}
