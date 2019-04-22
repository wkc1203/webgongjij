
import React from 'react';
import style from './index.module.scss';

export type Ttitle = {
  title:string;
}

export const Ttitle = ({ title }: Ttitle) => (
  <div className={style['ttitle']}>
    {title}
  </div>
)
