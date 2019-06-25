
import React from 'react';
import style from './index.module.scss';
import { Center } from '@components/public';
import cs from 'classnames';

export type Title = {
  title: string,
  _style?:string
}

export const Title = ({ title,_style=''}: Title) => (
  <Center>
    <div className={cs(style['title'], style[_style])}>
      {title}
    </div>
  </Center>
)
