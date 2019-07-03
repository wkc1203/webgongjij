
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
  placeholder: string,
  labeltext: string,
  getState: (...rest: any) => void,
  Child?: JSX.Element,
  type?: string,
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
  onChange?:(...rest: any) => void,
  onFocus?:(...rest: any) => void,
  ImgClick?:(...rest: any) => void,
  getYzm?:(...rest: any) => void,
  
}

// pickertype Mon  月收入 Tot 家庭月收入 Kin 亲属关系 Rec 最高学历 Mar 婚姻情况 areas 区域 rightBtntype 输入框右边类型 (icon btn) rightType 是否展示右边按钮或图片
export const AntdInputItem = ({data,rightType=false,rightBtntype,getYzm,ImgClick,inputiconright='',yzm, placeholder, onChange, getState, labeltext,Child, type = 'text', onFocus, disabled = false, extra = '', value = '' ,picker = false, pickertype  }: AntdInputItem) => {
  const [num, setNum] = useState({ val: value,labeltext:labeltext,placeholder:placeholder })
  const [picValue, setpicker] = useState()
  const [picmovdata, setMondata] = useState({val:data})
  const [y, setY] = useState(true)
  const [on, toggle] = useState(false)
  useEffect(() => {
    getState(num)
  }, [num])
  useEffect(() => {
    setNum({ val: value,labeltext:labeltext,placeholder:placeholder })
  }, [value])
  let i = 60
  let s = true
  let timer: any = null
  // const getYzm = () => {
  //   getwangqian()
  //   if (y) {
  //     setY(false)
  //     timer = setInterval(() => {
  //       if (s) {
  //         console.log('object')
  //         setYzm(i + 's')
  //         i--
  //         if (i <= 0) {
  //           clearInterval(timer)
  //           setYzm('发送失败')
  //         }
  //       }else{
  //         clearInterval(timer)
  //       }
  //     }, 1000)
  //   }
  // }
  
  return (
    <div style={{ margin: '15px' }}>
      <WingBlank size="sm">
      
      <div className={style['labelinputs']}>
          <label className={style['labelinputs-label']}>{labeltext}</label>
          <List className = {style['am-list-item-extra']}>
            <InputItem className = {cs(style['am-list-item'])}
              clear
              // extra="<span  className = { cs(style['iconfont'], [style['icon-1-copy'] ]) }></span>"
              placeholder={placeholder}
              value={num.val}
              onFocus = {onFocus}
              onChange={v => {
                console.log(v+'v')
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
                :<Button type="primary" onClick={getYzm} inline size="small" style={{ marginRight: '0px' }}>{yzm}</Button>):''
              }
            </div>
          </List>
        </div>
      </WingBlank>
    </div>
  )
}
