
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { List, InputItem, WhiteSpace ,WingBlank} from 'antd-mobile';
import { Center } from '@components/public';
import cs from 'classnames'
export type AntdInputItem = {
  placeholder: string,
  labeltext: string,
  getState: (...rest: any) => void,
  Child?: JSX.Element,
  type?: string,
  disabled?: boolean,
  value?: string,
  extra?: string,
  onChange?:(...rest: any) => void
}

export const AntdInputItem = ({ placeholder, onChange, getState, labeltext,Child, type = 'text', disabled = false, extra = '', value = '' }: AntdInputItem) => {
  const [num, setNum] = useState({ value: value,labeltext:labeltext })
  useEffect(() => {
    getState(num)
  }, [num])
  useEffect(() => {
    setNum({ value: value,labeltext:labeltext })
  }, [value])
  useEffect(() => {

  }, [])
  return (
    <div style={{ margin: '15px' }}>
      <WingBlank size="sm">
        <div className={style['labelinputs']}>
            <label className={style['labelinputs-label']}>{labeltext}</label>
            <List>
              <InputItem className = {cs(style['am-list-item'])}
                clear
                extra={extra}
                placeholder={placeholder}
                onChange={v => {
                  setNum({
                    value: v,
                    labeltext:labeltext
                  })
                }}
              ></InputItem>
            </List>
        </div>
      </WingBlank>
    </div>
  )
}
