
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,Cutoff} from '@components/public';
import { Picker,List } from 'antd-mobile';
type Step_two = {
  history: History
}
export const l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export default ({ history }: Step_two) => {
  const [pr, productName] = useState({ val: ''})
  const [wi, withAmount] = useState({ val: ''})
  const [an, annuaInterestRate] = useState({ val: ''})
  const [lo, loanUsedFor] = useState({ val: ''})
  const [le, lendingWay] = useState({ val: ''})
  const [en, entrusted] = useState({ val: ''})
  const [re, reimbursementMeans] = useState({ val: ''})
  const [rep, repaymentperiods] = useState({ val: ''})
  const [sh, shouldAlso] = useState({ val: ''})
  const [se, serviceFee] = useState({ val: ''})
  const [repa, repaymentAccount] = useState({ val: ''})
  const [ca, carNumber] = useState({ val: ''})
  const [de, dealValence] = useState({ val: ''})
  const [ph, phone] = useState({ val: ''})
  const [co, code] = useState({ val: ''})
  const [xm, setXm] = useState('')
  const [list, setList] = useState(l)
  const [y, setY] = useState(0)
  const refresh = useRef(null)
  return (
    <div className={style['xxqyqr']}>
      <Navigationt title='申请流程' history={history} />
      <AntdSteps currentNum={1} ></AntdSteps>
      <AntdInputItem  labeltext='意向车位编号' placeholder='请搜索或选择购买车位编号'  getState={withAmount} />
      <AntdInputItem  labeltext='车位实际成交价' placeholder='请输入购买车位合同销售价格（元）' getState={withAmount} />
      <AntdInputItem  labeltext='贷款用途' placeholder='请输入贷款用途' getState={annuaInterestRate} />
      <AntdInputItem  labeltext='贷款金额' placeholder='请输入贷款金额' getState={loanUsedFor} />
      <AntdInputItem  labeltext='首付金额' placeholder='请输入车位及贷款金额后自动计算' getState={lendingWay}/>
      <AntdInputItem  labeltext='贷款分期数' placeholder='请选择请选择贷款分期数' getState={entrusted}/>
      <AntdInputItem  labeltext='计息方式' placeholder='请选择计息方式' getState={reimbursementMeans}  picker={true}/>
      <AntdInputItem  labeltext='贷款年利率' placeholder='请输入工作单位' getState={repaymentperiods} />
      <AntdButton text='下一步' fn={() => {
       
      }}></AntdButton>
      <Cutoff hg='20' />
    </div>
  )
}