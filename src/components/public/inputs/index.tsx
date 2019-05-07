
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { Center } from '@components/public';

export type Inputs = {
  img: string,
  placeholder: string,
  getState: (...rest: any) => void,
  Child?: JSX.Element,
  type?: string,
  disabled?: boolean,
  val?: string
}

export const Inputs = ({ img, placeholder, getState, Child, type = 'text', disabled = false, val = '' }: Inputs) => {
  const [num, setNum] = useState({ val: val, pla: placeholder })
  useEffect(() => {
    getState(num)
  }, [num])
  useEffect(() => {
    setNum({ val: val, pla: placeholder })
  }, [val])
  useEffect(() => {

  }, [])
  return (
    <Center>
      <div className={style['inputs']}>
        <img src={img} className={style['img']} />
        <input
          style={{fontSize:'15px'}}
          onBlur={() => {
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 10)
          }}
          className={style['input']}
          disabled={disabled}
          onChange={v => {
            setNum({
              val: v.target.value,
              pla: placeholder
            })
          }}
          value={num.val}
          placeholder={placeholder}
          type={type}
        />
        {Child}
      </div>
    </Center>
  )
}
