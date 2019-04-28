
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

export type Check = {
  title: string,
  setState: (...rest: any) => void,
  agree?: string
}

export const Check = ({ title, setState, agree = '同意' }: Check) => {
  const [gou, setGou] = useState(true)
  useEffect(() => {
    setState(gou)
  }, [gou])
  return (
    <div onClick={() => { setGou(!gou) }} className={style['check']} >
      <img src={pImgs[gou ? 'gouxuan_h' : 'gouxuan_n']} />
      <div className={style['t1']}>
        {agree}
      </div>
      <div className={style['t2']}>
        {title}
      </div>
    </div>
  )
}
