import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { List, InputItem, WhiteSpace ,WingBlank, Picker,Icon,Button} from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { Center } from '@components/public';
import cs from 'classnames'
import districtData from './address';
import { useAxios } from '@hooks/useAxios';
export type AntdPicker = {
  data?: any,
  placeholder: string,
  labeltext: string,
  getState: (...rest: any) => void,
  Child?: JSX.Element,
  type?: string,
  col?:number,
  disabled?: boolean,
  value?: string,
  extra?: string,
  pickertype?:string,
  picker?:boolean,
  rightType?:boolean,
  rightBtntype?:string,
  inputiconright?:string,
  fiedRes?:string,
  onChange?:(...rest: any) => void,
  onFocus?:(...rest: any) => void,
  ImgClick?:(...rest: any) => void,
  
}
// pickertype Mon  月收入 Tot 家庭月收入 Kin 亲属关系 Rec 最高学历 Mar 婚姻情况 areas 区域 rightBtntype 输入框右边类型 (icon btn) rightType 是否展示右边按钮或图片
export const AntdPicker = ({data, labeltext,placeholder, value = '' ,col=1,getState }: AntdPicker) => {
  
  const [num, setNum] = useState({ val: value,labeltext:labeltext,placeholder:placeholder })
  const [picValue, setpicker] = useState()
  const [label, setlabel] = useState()
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
          <List >
            <Picker
              data={data}
              title={placeholder}
              cols={col}
              extra={" "}
              value={picValue}
              onChange = {(value:any)=>{
                data.map((item:any)=>{
                  if ( item.value===value.toString()){
                    setpicker(value)
                    setlabel(item.label)
                  }else if( col===3 && item.value===value[0] ){
                    let labels=item.label
                    item.children.forEach((a:any)=>{
                      if(a.value===value[1]){
                        labels+=a.label
                      }
                      a.children.forEach((b:any)=>{
                        if(b.value===value[2]){
                          labels+=b.label
                        }
                      })
                    })
                    setpicker(value)
                    setlabel(labels)
                  }
                })
              }}
            >
              <List.Item arrow="horizontal" className = {style['am-list-item-picker']}>{label?label:placeholder}</List.Item>
            </Picker>
          </List>
        </div>
      </WingBlank>
    </div>
  )
}
