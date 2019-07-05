
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { sendMessageToNative, routing } from '@util/index';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,Cutoff,AntdPicker} from '@components/public';
import { Modal } from 'antd-mobile';
import axios from 'axios';
import {apiAxios} from './../../util/axios';
import { useAxios } from '@hooks/useAxios';
type Step_two = {
  history: History
}
const alert=Modal.alert;
export const l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export default ({ history }: Step_two) => {

  const {
    data: {
      loanData,//第一成功后的结果
      buildingId//楼盘id
    }
  } = history.location.state
  
  const [wi, withAmount] = useState({ val: ''})
  const [del, dealAmount] = useState({ val: ''})
  
  const [an, annuaInterestRate] = useState({ val: ''})
  const [lo, loanUsedFor] = useState({ val: ''})
  const [le, lendingWay] = useState({ val: ''})
  const [en, entrusted] = useState({ val: ''})
  const [re, reimbursementMeans] = useState({ val: ''})
  const [rep, repaymentperiods] = useState({ val: ''})
  const [y, setY] = useState(0)
  const refresh = useRef(null)
  const [on, toggle] = useState(false)
  const [accessory] = useAxios({
    url: '/loanApply/loan/queryById',
    token:true,
    method: 'get',
    request: {
      loanApplyId:'10384'
    }
  })
  const senSms =()=>{
    apiAxios('post','/loanApply/save',{
      // id: buildingId,
      serialNo: wi.val,
      dealAmount: del.val,
      purpose: an.val,
      amount: lo.val,
      preAmount: le.val,
      periods: en.val,
      calculate: re.val,
      rate: rep.val,
    })
    .then(v => {
      console.log(v)
    })
  }
    // 下一步
    const next_step = ()=>{
      sendMessageToNative({ type: 'push' })
      history.push({
          pathname: 'step_three',
          // state: {
          //   data: {
          //     resulttype: 'success',
          //   }
          // }
        })
      routing('step_three')
    } 
  return (
    <div className={style['xxqyqr']}>
      <AntdSteps currentNum={1} ></AntdSteps>
      <AntdInputItem  labeltext='意向车位编号' placeholder='请搜索或选择购买车位编号'  getState={withAmount} />
      <AntdInputItem  labeltext='车位实际成交价' placeholder='请输入购买车位合同销售价格（元）' getState={dealAmount} />
      <AntdInputItem  labeltext='贷款用途' placeholder='请输入贷款用途' getState={annuaInterestRate} />
      <AntdInputItem  labeltext='贷款金额' placeholder='请输入贷款金额' getState={loanUsedFor} />
      <AntdInputItem  labeltext='首付金额' placeholder='请输入车位及贷款金额后自动计算' getState={lendingWay}/>
      <AntdPicker  labeltext='贷款分期数' placeholder='请选择请选择贷款分期数' getState={entrusted}  picker={true}/>
      <AntdInputItem  labeltext='计息方式' placeholder='请输入计息方式' getState={reimbursementMeans} />
      <AntdInputItem  labeltext='贷款年利率' placeholder='请输入工作单位' getState={repaymentperiods} />
      <AntdButton text='下一步' fn={() => {
        console.log(1)
         senSms()
      }}></AntdButton>
      <Cutoff hg='20' />
    </div>
  )
}
