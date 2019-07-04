
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { Picker, List, WhiteSpace,WingBlank, Radio, Flex,ActionSheet, Button, Toast } from 'antd-mobile';
import { AntdInputItem} from '@components/public';
import { Center } from '@components/public';
import { useAxios } from '@hooks/useAxios';
import cs from 'classnames'
const RadioItem = Radio.RadioItem;
export type AntdPopup = {
  placeholder?: string,
  value?: string,
  valueNum?:number
  pickertype?:boolean
  getState: (...rest: any) => void,
  pickertypepro: (...rest: any) => any
}
export const AntdPopup = ({ placeholder,pickertype,pickertypepro,value,getState}: AntdPopup) => {
  const [currentNum, setcurrentNum] = useState(true);
  const [valueNum, setCount] = useState(0)
  const [radioItemLabel, radioItem] = useState()
  const [pr, productName] = useState({ val: ''})
  const [Recordformal] = useAxios({
    url: '/bankCard/page',
    token:true,
    method: 'get',
    request: {
      page:1,
      size:10
    }
  })
  let dataList:any=Recordformal.code!==1?Recordformal.data.records:[]
  const [num, setNum] = useState({ val: value,placeholder:placeholder })
  useEffect(() => {
     getState(num)
  }, [num])
  useEffect(() => {
    setNum({ val: value,placeholder:placeholder })
  }, [value])
  return (
    <div>
      <WingBlank size="sm">
      <AntdInputItem  clear ={false} labeltext='还款账号'  value={radioItemLabel===undefined?value:radioItemLabel} placeholder='还款账号' rightType = {true} rightBtntype='icon' inputiconright={require('./img/icon_mycard.png')} ImgClick={()=>(
         pickertypepro(true)
      )} getState={productName}  onFocus={() => {
            pickertypepro(true)
          }}/>
      <div className = { cs(style['pirckerido-box'], { [style['pirckerido-acitve']]: pickertype}) }>
        <div className={style['pirckerido-rido']}>
          <h3 className={style['card-title']}>选择还款银行卡<img className={style['card-cancle']} width='20px' src={require('./img/x.png')} onClick={()=>(
            pickertypepro(false)
          )}/></h3>
          <div className={style['card-box']}>
            {
              dataList.map((v:any,i:any)=>(
                <div key={i} className={style['card-box-list']} onClick={()=>{
                  console.log(v)
                  radioItem(v.cardNo)
                  pickertypepro(false)
                  setCount(v.cardNo)
                  setNum({
                    val: v.cardNo,
                    placeholder:placeholder
                  })
                }}>
                  <p><img src={v.url}/>{v.bankName}</p>
                  <p>{v.cardNo}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className={style['am-popover-mask']} onClick={()=>(
          pickertypepro(false)
        )}></div>
      </div>
      </WingBlank>
    </div>
  )
}
