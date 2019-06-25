
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { Result, Icon, WhiteSpace,WingBlank } from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { Center,AntdButton } from '@components/public';
import cs from 'classnames'
export type AntdResult = {
  resulttype: string,
  messageFist:string,
  messageSecord?:string,
  btnText?:string,
  btnShow?:boolean,
  title?:string,
  fn?: (...rest: any) => any,
}
const success = require('./img/icon_success.png');
const audit = require('./img/icon_shenhezhong.png');
const tips = require('./img/icon_tips.png');
const wrong = require('./img/icon_wrong.png');

// resulttype 类型(success,audit,tips,wrong)   
// messageFist 默认第一行message，如果需要第二行 可添加m essageSecord
// btnText 按钮文本 
// btnShow 按钮是否显示
// title 提示文本
// fn 方法回调
export const AntdResult = ({  resulttype,messageFist,messageSecord,btnText,btnShow = false,title ,fn}: AntdResult) => {
  const [srcType, setsrcType] = useState({value:''})
  
  useEffect(() => {
    switch (resulttype) {
      case 'success':
        setsrcType({value:success})
        break
      case 'audit':
        setsrcType({value:audit})
        break
      case 'tips':
        setsrcType({value:tips})
        break
      case 'wrong':
        setsrcType({value:wrong})
        break
    }
  })
  
  return (
    <div style={{ margin: '15px' }}>
      <WingBlank size="sm">
      <div className={style['labelinputs']}>
      <Result
        img={<img src={srcType.value} className="spe am-icon am-icon-md" alt="" style = { { width:'50px',height:'50px'}} />}
        title={title}
        message={<div>{messageFist} <p>{messageSecord}</p></div>}
      />
      </div>
      {
        btnShow?<AntdButton fn={fn} text={btnText}></AntdButton>:''
      }
      
      </WingBlank>
    </div>
  )
}
