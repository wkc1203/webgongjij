
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { sendMessageToNative, routing,validate } from '@util/index';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,Cutoff,AntdPicker} from '@components/public';
import { Modal,Toast } from 'antd-mobile';
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
  console.log(history.location.state)
  const [wi, withAmount] = useState({ val: ''})
  const [del, dealAmount] = useState({ val: ''})
  
  const [an, annuaInterestRate] = useState({ val: ''})
  const [lo, loanUsedFor] = useState({ val: ''})
  const [le, lendingWay] = useState({ val: ''})
  const [en, entrusted] = useState({ val: '', pla: ''})
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
  let queryBuildingMsgList:any=[]
  const parkingLot = ()=>{
    apiAxios('get','/parkingLot/queryParkingLotMsg?buildingId='+buildingId,{})
    .then(v => {
      let dataList:any=v
      dataList.data.map((v:any, i:any) => 
        queryBuildingMsgList.push({value:String(v.id),label:v.number})
      )
    })
  }
  parkingLot()
  const senSms =()=>{
    apiAxios('post','/loanApply/save',{
      id: buildingId,
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
      next_step()
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
    const installment=[
      {value:'36',label:'36'},
      {value:'48',label:'48'},
      {value:'60',label:'60'},
    ]
  return (
    <div className={style['xxqyqr']}>
      <Navigationt title='申请流程' history={history} />
      <AntdSteps currentNum={1} ></AntdSteps>
      <AntdPicker  labeltext='意向车位编号' placeholder='请搜索或选择购买车位编号'  getState={withAmount} picker={true} data={queryBuildingMsgList}/>
      <AntdInputItem  labeltext='车位实际成交价'type='number' placeholder='请输入购买车位合同销售价格（元）' getState={dealAmount} />
      <AntdInputItem  labeltext='贷款用途'  placeholder='请输入贷款用途' getState={annuaInterestRate} />
      <AntdInputItem  labeltext='贷款金额' type='number' placeholder='请输入贷款金额' getState={loanUsedFor} />
      <AntdInputItem  labeltext='首付金额' type='number' placeholder='请输入车位及贷款金额后自动计算' getState={lendingWay}/>
      <AntdPicker  labeltext='贷款分期数' placeholder='请选择贷款分期数' getState={entrusted} data={installment} picker={true}/>
      <AntdInputItem  labeltext='计息方式' placeholder='请输入计息方式' getState={reimbursementMeans} />
      <AntdInputItem  labeltext='贷款年利率' placeholder='请输入工作单位' getState={repaymentperiods} />
      <AntdButton text='下一步' fn={() => {
        console.log(parseInt(lo.val)+parseInt(le.val))
        let count=parseInt(lo.val)+parseInt(le.val)
        const yanz = validate([wi,del,an,lo,le,en,re,rep], (vals) => {
          Toast.info(vals.placeholder, 1);
        })
        if (yanz) {
          if(count!==parseInt(del.val)){
            Toast.info('贷款金额+首付金额=车位实际成交价', 3);
          }else{
            senSms()
          }
        }
        
         
      }}></AntdButton>
      <Cutoff hg='20' />
    </div>
  )
}
