
import React, { useState, useEffect, useRef } from 'react';
import { createForm } from 'rc-form';
import style from './index.module.scss';
import { History } from 'history';
import cs from 'classnames';
import { sendMessageToNative, routing } from '@util/index';
import { Navigationt ,AntdInputItem,AntdButton,Cutoff} from '@components/public';
import { Modal,Flex ,WingBlank} from 'antd-mobile';

const pImgs: any = {}
export const l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

type Test = {
  history: History
}

const alert=Modal.alert;

export default ({ history }: Test) => {
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
      alert('提示', '请确认信息无误', [
          { text: '再检查下', onPress: () => console.log('cancel'), style: {color:'rgba(193, 193, 193, 1)'} },
          { text: '确认无误', onPress: () => next_step() },
        ]);
  }
  // 重新申请
  const applyApplicationShowAlert = ()=>{
    alert('提示', '请确认信息无误', [
        { text: '确认取消签约，重新申请贷款吗？', onPress: () => console.log('cancel'), style: {color:'rgba(193, 193, 193, 1)'} },
        { text: '确认', onPress: () => next_step() },
      ]);
}
  return (
    <div className={style['xxqyqr']}>
      <Navigationt title='签约信息确认' history={history} />
      <AntdInputItem  labeltext='产品名称' placeholder='请输入产品名称' getState={productName} />
      <AntdInputItem  labeltext='用款金额' placeholder='请输入用款金额' getState={withAmount} />
      <AntdInputItem  labeltext='贷款年利率' placeholder='请输入贷款年利率' getState={annuaInterestRate} />
      <AntdInputItem  labeltext='贷款用途' placeholder='请输入贷款用途' getState={loanUsedFor} />
      <AntdInputItem  labeltext='放款方式' placeholder='请输入放款方式' getState={lendingWay} />
      <AntdInputItem  labeltext='受托方' placeholder='请输入受托方' getState={entrusted} />
      <AntdInputItem  labeltext='还款方式' placeholder='请输入还款方式' getState={reimbursementMeans} />
      <AntdInputItem  labeltext='还款期数' placeholder='请输入还款期数' getState={repaymentperiods} />
      <AntdInputItem  labeltext='应还本息' placeholder='请输入应还本息' getState={shouldAlso} />
      <AntdInputItem  labeltext='壹米金融服务费' placeholder='请输入壹米金融服务费' getState={serviceFee} />
      <AntdInputItem  labeltext='还款账号' placeholder='请输入还款账号' getState={repaymentAccount} />
      <AntdInputItem  labeltext='意向车位编号' placeholder='请输入意向车位编号' getState={carNumber} />
      <AntdInputItem  labeltext='车位实际成交价' placeholder='请输入车位实际成交价' getState={dealValence} />
      <AntdInputItem  labeltext='手机号' placeholder='请输入手机号' getState={phone} />
      <AntdInputItem  labeltext='验证码' placeholder='请输入验证码' getState={code} />
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
      <AntdInputItem  labeltext='验证码' placeholder='请输入验证码' getState={code} rightType={true} rightBtntype='btn'/>
      <AntdButton fn={() => {
        console.log(pr)
        console.log(wi)
        history.push('creditauthor')
      }}></AntdButton>
      <Cutoff hg='30' />
    </div>
  )
}
