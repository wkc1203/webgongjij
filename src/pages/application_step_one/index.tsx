
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { sendMessageToNative, routing } from '@util/index';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,Cutoff} from '@components/public';
import { Modal } from 'antd-mobile';
type Step_one = {
  history: History
}
const alert=Modal.alert;
export const l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export default ({ history }: Step_one) => {
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

  // 下一步
  const next_step = ()=>{
    sendMessageToNative({ type: 'push' })
    history.push({
        pathname: 'step_two',
        // state: {
        //   data: {
        //     resulttype: 'success',
        //   }
        // }
      })
    routing('step_two')
  } 
    // 提交申请
  const passAllShowAlert = ()=>{
      alert('提示', '请确认信息无误', [
          { text: '再检查下', onPress: () => console.log('cancel'), style: {color:'rgba(193, 193, 193, 1)'} },
          { text: '确认无误', onPress: () => next_step() },
        ]);
  }
  return (
    <div className={style['xxqyqr']}>
      <Navigationt title='申请流程' history={history} />
      <AntdSteps currentNum={0} ></AntdSteps>
      <AntdInputItem  labeltext='选择楼盘' placeholder='请选择购买车位楼盘'  getState={withAmount} picker={true}/>
      <AntdInputItem  labeltext='姓名' placeholder='请输入您的姓名' getState={withAmount} />
      <AntdInputItem  labeltext='身份证号' placeholder='请输入您的身份证号' getState={annuaInterestRate} />
      <AntdInputItem  labeltext='申请城市' placeholder='请选择申请城市' getState={loanUsedFor} picker={true}/>
      <AntdInputItem  labeltext='婚姻情况' placeholder='请选择婚姻情况' getState={lendingWay} picker={true}/>
      <AntdInputItem  labeltext='最高学历' placeholder='请选择最高学历' getState={entrusted} picker={true}/>
      <AntdInputItem  labeltext='职业' placeholder='请输入职业' getState={reimbursementMeans}/>
      <AntdInputItem  labeltext='工作单位' placeholder='请输入工作单位' getState={repaymentperiods} />
      <AntdInputItem  labeltext='居住地' placeholder='请选择居住地' getState={shouldAlso} picker={true}/>
      <AntdInputItem  labeltext='详细地址' placeholder='请输入详细地址' getState={serviceFee} />
      <AntdInputItem  labeltext='个人月收入' placeholder='请选择个人月收入' getState={repaymentAccount} picker={true}/>
      <AntdInputItem  labeltext='家庭月收入' placeholder='请选择家庭月收入' getState={carNumber} picker={true}/>
      <AntdInputItem  labeltext='亲属联系人' placeholder='请输入一位您亲属联系人的姓名' getState={dealValence} picker={true}/>
      <AntdInputItem  labeltext='亲属关系' placeholder='请选择您填写人的亲属关系' getState={phone} />
      <AntdInputItem  labeltext='亲属手机号码' placeholder='请输入亲属手机号码' getState={code} />
      <AntdButton text='下一步' fn={() => passAllShowAlert()}></AntdButton>
      <Cutoff hg='20' />
    </div>
  )
}
