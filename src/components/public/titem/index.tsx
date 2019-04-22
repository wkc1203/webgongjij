
import React from 'react';
import style from './index.module.scss';

export type Titem = {
  title: string,
  content: string,
  color?: string,
  click?: (...rest: any) => any
}

export const Titem = ({ title, content, color, click }: Titem) => (
  <div className={style['titem']}>
    <div className={style['title']}>
      {title}
    </div>
    <div onClick={click} className={style['content']} style={{ color: color }}>
      {content}
    </div>
  </div>
)
