
import React, { useState, useEffect, useRef } from 'react';
import { createForm } from 'rc-form';
import style from './index.module.scss';
import { History } from 'history';
import cs from 'classnames';
import { sendMessageToNative, routing,validate } from '@util/index';
import { Navigationt ,AntdInputItem,AntdButton,Cutoff} from '@components/public';
import { Modal,Flex ,WingBlank,Toast} from 'antd-mobile';
import { useAxios } from '@hooks/useAxios';
import { any } from 'prop-types';
const pImgs: any = {}
export const l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

type Test = {
  history: History
}

const alert=Modal.alert;

export default ({ history }: Test) => {
  const [Recordformal] = useAxios({
    url: '/loanSign/querySign',
    token:true,
    method: 'get',
    request: {
      signId:'1'
    }
  })
  let dataList:any=Recordformal.data
  let accessoryData :any
  accessoryData = Recordformal.code!==1?Recordformal.data:''
  const [data, dataListInfo] = useState()
  const [prs, productName] = useState({ val: '' })
  const [wi, withAmount] = useState({ val: '' })
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
  const [y, setY] = useState(true)
  const refresh = useRef(null)
  const [on, toggle] = useState(false)
  const [yzm, setYzm] = useState('获取验证码')
  
  const [wangqian, getwangqian] = useAxios({
    url: '/loanSign/update',
    method: 'post',
    request: {
      id: '1',
      loanId: '1',
      loanProjectName:prs.val,
      state: '1',
      serialNo: ca.val,
      dealAmount: de.val,
      purpose: lo.val,
      amount: wi.val,
      preAmount: '1',
      periods: rep.val,
      calculate: '1',
      rate: an.val,
      buildingName: prs.val,
      city: '1',
      totalInterest: sh.val,
      serviceChargeNo: repa.val,
      serviceFee: se.val,
      repaymentWay: re.val,
      repayBankCardId: '156144849152773',
      repaymentAccount: repa.val,
      commissionedPart: en.val,
      phone: ph.val,
      sms	: co.val,
    },
    token:true,
    execute: on,
    api3: false
  })
  useEffect(() => {
    console.log(1)
    if(wangqian.code==="0"){
        alert('提示', '请确认信息无误', [
          { text: '再检查下', onPress: () => console.log('cancel'), style: {color:'rgba(193, 193, 193, 1)'} },
          { text: '确认无误', onPress: () => next_step() },
        ]);
    }
  },[wangqian])
  // 下一步
  const next_step = ()=>{
    sendMessageToNative({ type: 'push' })
    history.push({
        pathname: 'protocol',
        // state: {
        //   data: {
        //     resulttype: 'success',
        //   }
        // }
      })
    routing('protocol')
  } 
  // 重新
  const step_one = ()=>{
    sendMessageToNative({ type: 'push' })
    history.push({
        pathname: 'step_one',
        // state: {
        //   data: {
        //     resulttype: 'success',
        //   }
        // }
      })
    routing('step_one')
  } 
  const [getYzms, getYzmFn] = useAxios({
    url: '/senSms',
    method: 'get',
    request: {
      phone: ph.val,
    },
    token:true,
    execute: on,
    api3: false
  })
  let i = 60
  let s = true
  let timer: any = null
  const getYzm = () => {
    console.log(123)
    getYzmFn()
    if (y) {
      setY(false)
      timer = setInterval(() => {
        if (s) {
          setYzm(i + 's')
          i--
          if (i <= 0) {
            clearInterval(timer)
            setYzm('发送失败')
          }
          
        }else{
          clearInterval(timer)
        }
      }, 1000)
    }
  }
    // 提交申请
  const passAllShowAlert = ()=>{
    console.log(prs)
    const yanz = validate([prs, wi,an,lo], (vals) => {
      console.log(vals)
      Toast.info(vals.placeholder, 1);
    })
    if (yanz) {
      console.log(yanz)
      toggle(true)
      getwangqian()
      console.log(wangqian)
    }
      
  }
  // 重新申请
  const applyApplicationShowAlert = ()=>{
    alert('提示', '请确认信息无误', [
        { text: '确认取消签约，重新申请贷款吗？', onPress: () => console.log('cancel'), style: {color:'rgba(193, 193, 193, 1)'} },
        { text: '确认', onPress: () => step_one() },
      ]);
}
  return (
    <div className={style['xxqyqr']}>
      <Navigationt title='签约信息确认' history={history} />
      <AntdInputItem  labeltext='产品名称' placeholder='请输入产品名称' getState={productName} value={accessoryData.buildingName} />
      <AntdInputItem  labeltext='用款金额' placeholder='请输入用款金额' getState={withAmount} value={accessoryData.amount}/>
      <AntdInputItem  labeltext='贷款年利率' placeholder='请输入贷款年利率' getState={annuaInterestRate} value={accessoryData.rate} />
      <AntdInputItem  labeltext='贷款用途' placeholder='请输入贷款用途' getState={loanUsedFor} value={accessoryData.purpose}/>
      <AntdInputItem  labeltext='放款方式' placeholder='请输入放款方式' getState={lendingWay} value={accessoryData.calculate}/>
      <AntdInputItem  labeltext='受托方' placeholder='请输入受托方' getState={entrusted} value={accessoryData.commissionedPart}/>
      <AntdInputItem  labeltext='还款方式' placeholder='请输入还款方式' getState={reimbursementMeans} value={accessoryData.repaymentWay}/>
      <AntdInputItem  labeltext='还款期数' placeholder='请输入还款期数' getState={repaymentperiods} value={accessoryData.periods}/>
      <AntdInputItem  labeltext='应还本息' placeholder='请输入应还本息' getState={shouldAlso} value={accessoryData.totalInterest}/>
      <AntdInputItem  labeltext='壹米金融服务费' placeholder='请输入壹米金融服务费' getState={serviceFee} value={accessoryData.serviceFee}/>
      <AntdInputItem  labeltext='还款账号' placeholder='请输入还款账号' getState={repaymentAccount} value={accessoryData.serviceChargeNo}/>
      <AntdInputItem  labeltext='意向车位编号' placeholder='请输入意向车位编号' getState={carNumber} value={accessoryData.serialNo}/>
      <AntdInputItem  labeltext='车位实际成交价' placeholder='请输入车位实际成交价' getState={dealValence} value={accessoryData.dealAmount}/>
      <AntdInputItem  labeltext='手机号' placeholder='请输入手机号' getState={phone} value={accessoryData.phone}/>
      <AntdInputItem  labeltext='验证码' placeholder='请输入验证码' getState={code} rightType={true} rightBtntype='btn' yzm={yzm} value={co.val} getYzm={() => getYzm()}/>
      <Cutoff hg='20' />
      <AntdButton text='下一步' fn={() => passAllShowAlert()}></AntdButton>
      <Cutoff hg='20' />
      <WingBlank>
        <div>
              <Flex justify="center">
                  <Flex.Item className={cs(style['text_center'],style['button_bottom'])}>
                      <div onClick={()=>applyApplicationShowAlert()}>重新申请</div>
                  </Flex.Item>
              </Flex>
          </div>
        <Cutoff hg='30' />
      </WingBlank>
      <Cutoff hg='30' />
    </div>
  )
}
