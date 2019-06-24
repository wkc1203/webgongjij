
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import cs from 'classnames';
import { useAxios } from '@hooks/useAxios';
import { code } from '@api/basis';

export type Yzm = {
  username?: string,
  disabled?: boolean,
}

export const Yzm = ({ username = '', disabled = false }: Yzm) => {
  const [yzm, setYzm] = useState('获取验证码')
  const [y, setY] = useState(true)
  const [on, seton] = useState(false)
  const [aa, getaa] = useAxios({
    url: '/sendYZM',
    method: 'post',
    request: {
      username: username
    },
    form: true,
    execute: on,
    apiSwitch: true
  })
  let i = 60
  let s = true
  let timer: any = null
  const getYzm = () => {
    if (y) {
      setY(false)
      seton(true)
      getaa()
      timer = setInterval(() => {
        if (s) {
          console.log('object')
          setYzm(i + 's')
          i--
          if (i <= 0) {
            clearInterval(timer)
            setYzm('发送失败')
          }
        }else{
          clearInterval(timer)
        }
      }, 1000)
    }
  }
  useEffect(() => {
    if (aa.code === code.success) {
      setYzm('发送成功')
    } else if (aa.code === code.error) {
      setYzm('发送失败')
    }
  }, [aa])
  useEffect(() => {
    setY(!disabled)
  }, [disabled])
  return (
    <div onClick={getYzm} className={cs(style['yzm'], !y && style['y1'])}>
      {yzm}
    </div>
  )
}
