
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { List, InputItem, WhiteSpace ,WingBlank, Picker,Icon,Button} from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { Center } from '@components/public';
import cs from 'classnames'
import districtData from './address';
import { useAxios } from '@hooks/useAxios';
export type AntdInputItem = {
  data?: Array<Object>,
  editable?:boolean,
  placeholder: string,
  labeltext: string,
  getState: (...rest: any) => void,
  Child?: JSX.Element,
  type?: any,
  disabled?: boolean,
  value?: string,
  extra?: string,
  pickertype?:string,
  picker?:boolean,
  rightType?:boolean,
  rightBtntype?:string,
  inputiconright?:string,
  fiedRes?:string,
  yzm?:string,
  yzmtype?:boolean,
  clear?:boolean,
  onChange?:(...rest: any) => void,
  onFocus?:(...rest: any) => void,
  ImgClick?:(...rest: any) => void,
  getYzm?:(...rest: any) => void,
  
}
export const AntdInputItem = ({editable,data,clear=true,rightType=false,rightBtntype,getYzm,ImgClick,yzmtype=false,inputiconright='',yzm, placeholder, onChange, getState, labeltext,Child, type = 'text', onFocus, disabled = false, extra = '', value = '' ,picker = false, pickertype  }: AntdInputItem) => {
  const [num, setNum] = useState({ val: value,labeltext:labeltext,placeholder:placeholder })
  useEffect(() => {
     getState(num)
  }, [num])
  useEffect(() => {
    setNum({ val: value,labeltext:labeltext,placeholder:placeholder })
  }, [value])
  
  return (
    <div style={{ margin: '15px' }}>
      <WingBlank size="sm">
      
      <div className={style['labelinputs']}>
          <label className={style['labelinputs-label']}>{labeltext}</label>
          <List className = {style['am-list-item-extra']}>
            <InputItem className = {cs(style['am-list-item'])}
              clear={clear}
              // extra="<span  className = { cs(style['iconfont'], [style['icon-1-copy'] ]) }></span>"
              placeholder={placeholder}
              value={num.val}
              type={type}

              editable={editable}
              onFocus = {onFocus}
              onChange={v => {
                setNum({
                  val: v,
                  labeltext:labeltext,
                  placeholder:placeholder
                })
              }}
            ></InputItem>
            <div className = {style['am-list-item-extra-icon']}>
              {
                rightType===true?(rightBtntype==="icon"?
                <img src={inputiconright}  onClick = { ImgClick }/> 
                :<Button type="primary" onClick={getYzm} disabled={yzmtype} inline size="small" style={{ marginRight: '0px',width:'90px' }}>{yzm}</Button>):''
              }
            </div>
          </List>
        </div>
      </WingBlank>
    </div>
  )
}
