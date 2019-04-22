
import React from 'react';
import style from './index.module.scss';
import { Center } from '@components/public';

export type Title = {
  title: string
}

export const Title = ({ title }: Title) => (
  <Center>
    <div className={style['title']}>
      {title}
    </div>
  </Center>
)
