
import React from 'react';
import style from './index.module.scss';

export type Ckgd = {
  fn: (...rest: any) => any,
  display: (...rest: any) => boolean
}

export const Ckgd = ({ fn, display }: Ckgd) => (
  <div onClick={fn} className={style['']} style={{
    margin: '10px', display: display() ? 'block' : 'none'
  }}>
    {'查看更多'}
  </div>
)