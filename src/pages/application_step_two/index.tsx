
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
  const [on, toggle] = useState(false)
  const [accessory] = useAxios({
    url: '/loanApply/loan/queryById',
    token:true,
    method: 'get',
    request: {
      loanApplyId:'10384'
    }
  })
  const [save, getSave] = useAxios({
    url: '/loanApply/save',
    method: 'post',
    request: {
      id: 'string',
    serialNo: 'string',
    dealAmount: 'string',
    purpose: 'string',
    amount: 'string',
    preAmount: 'string',
    periods: 'string',
    calculate: 'string',
    rate: 'string',
    },
    token:true,
    execute: on,
    api3: false
  })
  const senSms =()=>{
    apiAxios('post','/loanApply/save',{
      id: '1',
      serialNo: '1',
      dealAmount: '1',
      purpose: '1',
      amount: '1',
      preAmount: '1',
      periods: '1',
      calculate: '1',
      rate: '1',
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
      // 提交申请
    const passAllShowAlert = ()=>{
      console.log(1)
      getSave()
        // alert('提示', '请确认信息无误', [
        //     { text: '再检查下', onPress: () => console.log('cancel'), style: {color:'rgba(193, 193, 193, 1)'} },
        //     { text: '确认无误', onPress: () => next_step() },
        //   ]);
    }
  return (
    <div className={style['xxqyqr']}>
      <Navigationt title='申请流程' history={history} />
      <AntdSteps currentNum={1} ></AntdSteps>
      <AntdInputItem  labeltext='意向车位编号' placeholder='请搜索或选择购买车位编号'  getState={withAmount} />
      <AntdInputItem  labeltext='车位实际成交价' placeholder='请输入购买车位合同销售价格（元）' getState={withAmount} />
      <AntdInputItem  labeltext='贷款用途' placeholder='请输入贷款用途' getState={annuaInterestRate} />
      <AntdInputItem  labeltext='贷款金额' placeholder='请输入贷款金额' getState={loanUsedFor} />
      <AntdInputItem  labeltext='首付金额' placeholder='请输入车位及贷款金额后自动计算' getState={lendingWay}/>
      <AntdPicker  labeltext='贷款分期数' placeholder='请选择请选择贷款分期数' getState={entrusted}  picker={true}/>
      <AntdInputItem  labeltext='计息方式' placeholder='请输入计息方式' getState={reimbursementMeans} />
      <AntdInputItem  labeltext='贷款年利率' placeholder='请输入工作单位' getState={repaymentperiods} />
      <AntdButton text='下一步' fn={() => {
        console.log(1)
         getSave()
         senSms()
      }}></AntdButton>
      <Cutoff hg='20' />
    </div>
  )
}
