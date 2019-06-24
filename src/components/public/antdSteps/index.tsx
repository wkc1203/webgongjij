
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { Steps, WingBlank, WhiteSpace,Icon } from 'antd-mobile';

const Step = Steps.Step;
import { Center } from '@components/public';
import cs from 'classnames'
export type antdSteps = {
  currentNum: number ,
  status?:string,
  getState?: (...rest: any) => void,
}

export const AntdSteps = ({ currentNum,status ="wait" }: antdSteps) => {
  const steps = [{
    title: '个人信息',
    description: '1',
  }, {
    title: '贷款信息',
    description: '2',
  }, {
    title: '其他信息',
    description: '3',
  }].map((s, i) => <Step key={i} title={s.title} description={s.description} />);
  // const [num, setNum] = useState({ value: currentNum })
 
  
  return (
    <WingBlank>
      <WhiteSpace />
      <Steps direction="horizontal" current={currentNum} >
        <Step title="个人信息" icon={<span  className = { cs(style['iconfont'], [style['icon-1-copy'] ]) }></span>} />
        <Step title="贷款信息" icon={<span  className = { cs(style['iconfont'], [style['icon-icon-test4'] ]) }></span>} />
        <Step title="其他信息" icon={<span  className = { cs(style['iconfont'], [style['icon-icon-test3'] ]) }></span>} />
      </Steps>
      {/* <Steps current={currentNum} direction="horizontal">{steps}</Steps> */}
  </WingBlank>
  )
}
