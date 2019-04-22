import React from 'react';
import style from './index.module.scss';

export type Icons = {
  src: any,
  title: string,
  fn?: (...rest: any) => any
}

export const Icons = ({ src, title, fn }: Icons) => (
  <div onClick={() => { 
    fn&&fn()
    }} className={style.box}>
    <img className={style.icon} src={src} />
    <div className={style.title}>{title}</div>
  </div>
)