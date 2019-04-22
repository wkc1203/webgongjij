
import React from 'react';
import style from './index.module.scss';
import { Center } from '@components/public';
import cs from 'classnames'

export type Btus = {
  text: string,
  fn?: (...rest: any) => any,
  k?: boolean
}

export const Btus = ({ text, fn, k = false }: Btus) => (
  <Center>
    <div onClick={fn} className={cs(style['btus'], k && style['k'])}>
      {text}
    </div>
  </Center>
)
