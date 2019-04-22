import React from 'react';
import style from './index.module.scss';

export type Tips = {
  title: string,
}

export const Tips = ({ title }: Tips) => (
  <div className={style['tips']}>
    <div className = { style['tip'] }/>
    <div className={style['title']}>{title}</div>
  </div>
)