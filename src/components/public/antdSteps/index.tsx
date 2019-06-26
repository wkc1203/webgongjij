
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { Steps, WingBlank, WhiteSpace,Icon } from 'antd-mobile';

const Step = Steps.Step;
import { Center } from '@components/public';
import cs from 'classnames'
export type antdSteps = {
  currentNum: number ,
  status?:string,
  titleList?:Array<string>,
  getState?: (...rest: any) => void,
}

export const AntdSteps = ({ currentNum,status ="wait",titleList=['个人信息','贷款信息','其他信息'] }: antdSteps) => {

  return (
    <WingBlank>
      <WhiteSpace style={{marginBottom:'10px'}}/>
      <Steps direction="horizontal" current={currentNum} >
        <Step title={titleList[0]} icon={<span  className = { cs(style['iconfont'], [style['icon-1-copy'] ]) }></span>} />
        <Step title={titleList[1]} icon={<span  className = { cs(style['iconfont'], [style['icon-icon-test4'] ]) }></span>} />
        <Step title={titleList[2]} icon={<span  className = { cs(style['iconfont'], [style['icon-icon-test3'] ]) }></span>} />
      </Steps>
      {/* <Steps current={currentNum} direction="horizontal">{steps}</Steps> */}
    </WingBlank>
  )
}
