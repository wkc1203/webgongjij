
import React from 'react';
import style from './index.module.scss';

export type Center = {
  children?:any
}

export const Center = ({children}: Center) => (
  <div className={style['center']}>
    { children }
  </div>
)
