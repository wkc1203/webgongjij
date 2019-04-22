
import React from 'react';
import style from './index.module.scss';

export type Error = {

}

export const Error = ({  }: Error) => (
  <div className={style['error']}>
    error
  </div>
)
