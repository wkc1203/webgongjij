
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { sendMessageToNative, routing,validate } from '@util/index';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,Cutoff,AntdPicker} from '@components/public';
import { Modal,Toast } from 'antd-mobile';
import { useAxios } from '@hooks/useAxios';
type Step_one = {
  history: History
}
export default ({ history }: Step_one) => {
 
  const [fiedRes] = useAxios({
    url: '/dictionarySubitem/queryUser',
    token:true,
    method: 'get',
    request: {
      parentCode:'XLLX'
    }
  })
  let dataList:any=[]
  fiedRes.code!==1?
  fiedRes.data.map((v:any, i:any) => 
    dataList.push({value:v.code,label:v.name})
  ):''
  console.log(dataList)
  const [pr, productName] = useState({ val: '',pla: '请输入身份证号／手机号／用户名' })
  const [get, getName] = useState({ val: '',pla: '请输入身份证号／手机号／用户名'})
  const [wi, withAmount] = useState({ val: '',pla: '请输入身份证号／手机号／用户名'})
  const [an, annuaInterestRate] = useState({ val: '',pla: '请输入身份证号／手机号／用户名'})
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
  const [kin, kinsRelation] = useState({ val: ''})
  const [co, code] = useState({ val: ''})
  const [xm, setXm] = useState('')
  const [list, setList] = useState()
  const [y, setY] = useState(0)
  const refresh = useRef(null)
  const [on, toggle] = useState(false)
  const [wangqian, getwangqian] = useAxios({
    url: '/userExtend/save',
    method: 'post',
    request: {
      marriageState: le.val,
      education: en.val,
      job: re.val,
      company: rep.val,
      address: sh.val,
      addressDetail: se.val,
      personIncome: repa.val,
      familyIncome: ca.val,
      kinsfolk: de.val,
      kinsRelation: kin.val,
      kinsPhone: ph.val,
      buildingId: '1',
      loanId: '1',
      city: '1',
      cityName: '1',
    },
    token:true,
    execute: on,
    api3: false
  })
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
    console.log(get)
    const yanz = validate([get, an], (vals) => {
      console.log(vals)
      Toast.info(vals.placeholder, 1);
    })
    if (yanz) {
      console.log(yanz)
      toggle(true)
      getwangqian()
    }
    // toggle(true)
    // getwangqian()
      // alert('提示', '请确认信息无误', [
      //     { text: '再检查下', onPress: () => console.log('cancel'), style: {color:'rgba(193, 193, 193, 1)'} },
      //     { text: '确认无误', onPress: () => next_step() },
      //   ]);
  }
  const record = [
    {
      label: '高中',
      value: '高中',
    },
    {
      label: '大专',
      value: '大专',
    },
    {
      label: '本科',
      value: '本科',
    },
    {
      label: '硕士',
      value: '硕士',
    },
    {
      label: '博士',
      value: '博士',
    },
    {
      label: '其他',
      value: '其他',
    },
  ]
  return (
    <div className={style['xxqyqr']}>
      <Navigationt title='申请流程' history={history} />
      <AntdSteps currentNum={0} ></AntdSteps>
      <AntdPicker  labeltext='选择楼盘' placeholder='请选择购买车位楼盘'  getState={withAmount} picker={true} data={dataList}/>
      <AntdInputItem  labeltext='姓名' placeholder='请输入您的姓名' getState={getName} />
      <AntdInputItem  labeltext='身份证号' placeholder='请输入您的身份证号' getState={annuaInterestRate} />
      <AntdPicker  labeltext='申请城市' placeholder='请选择申请城市' getState={loanUsedFor} picker={true} data={record}/>
      <AntdPicker  labeltext='婚姻情况' placeholder='请选择婚姻情况' getState={lendingWay} picker={true} data={record}/>
      <AntdPicker  labeltext='最高学历' placeholder='请选择最高学历' getState={entrusted} picker={true} data={record}/>
      <AntdInputItem  labeltext='职业' placeholder='请输入职业' getState={reimbursementMeans}/>
      <AntdInputItem  labeltext='工作单位' placeholder='请输入工作单位' getState={repaymentperiods} />
      <AntdInputItem  labeltext='居住地' placeholder='请选择居住地' getState={shouldAlso} picker={true}/>
      <AntdInputItem  labeltext='详细地址' placeholder='请输入详细地址' getState={serviceFee} />
      <AntdPicker  labeltext='个人月收入' placeholder='请选择个人月收入' getState={repaymentAccount} picker={true} pickertype='Rec' data={record}/>
      <AntdPicker  labeltext='家庭月收入' placeholder='请选择家庭月收入' getState={carNumber} picker={true} data={record}/>
      <AntdInputItem  labeltext='亲属联系人' placeholder='请输入一位您亲属联系人的姓名' getState={dealValence} picker={true} data={record}/>
      <AntdPicker  labeltext='亲属关系' placeholder='请选择您填写人的亲属关系' getState={kinsRelation} />
      <AntdInputItem  labeltext='亲属手机号码' placeholder='请输入亲属手机号码' getState={phone} />
      <AntdButton text='下一步' fn={() => passAllShowAlert()}></AntdButton>
      <Cutoff hg='20' />
    </div>
  )
}
