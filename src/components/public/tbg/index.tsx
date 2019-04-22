
import React from 'react';
import style from './index.module.scss';

export type Tbg = {
  img:string,
  top:string|number,
  height:string|number,
}

export const Tbg = ({ img, top, height }: Tbg) => (
  <div className={style['tbg']}>
    tbg
  </div>
)
