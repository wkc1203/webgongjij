import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { List, InputItem, WhiteSpace ,WingBlank, Picker,Icon,Button} from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { Center } from '@components/public';
import cs from 'classnames'
import districtData from './address';
import { useAxios } from '@hooks/useAxios';
import {apiAxios} from './../../../util/axios';
export type AntdPickerPopup = {
  data?: any,
  placeholder?: string,
  labeltext?: string,
  getState?: (...rest: any) => void,
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
  listOnclick?:(...rest: any) => void,
  rightOnclick?:(...rest: any) => void,
  rightflg?:boolean,
  pickertypels?:boolean,
  getrepayAmountdata?:any,
  loanAmount:string,
  year:string,
  pickertypepro: (...rest: any) => any
}
// pickertype Mon  月收入 Tot 家庭月收入 Kin 亲属关系 Rec 最高学历 Mar 婚姻情况 areas 区域 rightBtntype 输入框右边类型 (icon btn) rightType 是否展示右边按钮或图片
export const AntdPickerPopup = ({loanAmount,year, value = '' ,col=1,getState,pickertypepro,pickertypels,getrepayAmountdata }: AntdPickerPopup) => {
  return (
    <div style={{ margin: '15px' }}>
      <WingBlank size="sm">
          {
            <div className = { cs(style['pirckerido-box'], { [style['pirckerido-acitve']]: pickertypels}) }>
            <div className={style['pirckerido-rido']}>
              <h3 className={style['card-title']}>还款计划<img className={style['card-cancle']} width='20px' src={require('./img/x.png')} onClick={()=>{
                pickertypepro(false)
              }}/></h3>
              <div className={style['card-ti-box']}>
                <p>贷款总额（元）年利率9%</p>
                <div className={style['card-ti-box-p']}>
                  <p>{loanAmount}</p>
                  <p>{year}期</p>
                </div>
              </div>
              <div className={style['card-box']}>
                {
                  getrepayAmountdata.hits===undefined?getrepayAmountdata.map((v:any,i:any) => (
                    <div className={style['card-box-list-o']} key={i}>
                      <div className={style['card-box-list-o-l']}>
                        <p>{v.date}</p>
                      </div>
                      <div className={style['card-box-list-o-r']}>
                        <p>还款金额{v.payment}</p>
                        <p>月利息{v.monthlyInterest}</p>
                        <p>壹平方服务费{v.serviceCharge}</p>
                      </div>
                    </div>
                  )):''
                }
              </div>
            </div>
            <div className={style['am-popover-mask']} onClick={()=>{
              pickertypepro(false)
            }}></div>
          </div>
          }
         
      </WingBlank>
    </div>
  )
}
