
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { sendMessageToNative, routing,validate,pickertype } from '@util/index';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,Cutoff,AntdPicker} from '@components/public';
import { Modal } from 'antd-mobile';
import { useAxios } from '@hooks/useAxios';
type Step_one = {
  history: History
}
const alert=Modal.alert;
export default ({ history }: Step_one) => {
  //学历
  const [Recordformal] = useAxios({
    url: '/dictionarySubitem/queryUser',
    token:true,
    method: 'get',
    request: {
      parentCode:'XLLX'
    }
  })
  let RecordformalList:any=[]
  Recordformal.code!==1?Recordformal.data.map((v:any, i:any) => 
    RecordformalList.push({value:v.code,label:v.name})
  ):''

   //证件
   const [certificate] = useAxios({
    url: '/dictionarySubitem/queryUser',
    token:true,
    method: 'get',
    request: {
      parentCode:'ZJLX'
    }
  })
  let certificateList:any=[]
  certificate.code!==1?certificate.data.map((v:any, i:any) => 
    certificateList.push({value:v.code,label:v.name})
  ):''

  //婚姻
  const [marriage] = useAxios({
    url: '/dictionarySubitem/queryUser',
    token:true,
    method: 'get',
    request: {
      parentCode:'HYLX'
    }
  })
  let marriageList:any=[]
  marriage.code!==1?marriage.data.map((v:any, i:any) => 
     marriageList.push({value:v.code,label:v.name})
  ):''
  //职业
  const [professional] = useAxios({
    url: '/dictionarySubitem/queryUser',
    token:true,
    method: 'get',
    request: {
      parentCode:'ZYLX'
    }
  })
  let professionalList:any=[]
  professional.code!==1?professional.data.map((v:any, i:any) => 
    professionalList.push({value:v.code,label:v.name})
  ):''
  //楼盘
  const [queryBuildingMsg] = useAxios({
    url: '/building/queryBuildingMsg',
    token:true,
    method: 'get',
    request: false
  })
  let queryBuildingMsgList:any=[]
  queryBuildingMsg.code!==1?queryBuildingMsg.data.map((v:any, i:any) => 
    queryBuildingMsgList.push({value:v.code,label:v.name})
  ):''
   //查询用户身份证信息
   const [accessory] = useAxios({
    url: '/userAccessory/queryUserAccessory',
    token:true,
    method: 'get',
    request: false
  })
  let accessoryData :any
  accessoryData = accessory.code!==1?accessory.data:''
  console.log(accessoryData)
  //  //民族
  //  const [national] = useAxios({
  //   url: '/dictionarySubitem/queryUser',
  //   token:true,
  //   method: 'get',
  //   request: {
  //     parentCode:'MZLX'
  //   }
  // })
  // let nationalList:any=[]
  // national.code!==1?national.data.map((v:any, i:any) => 
  //   nationalList.push({value:v.code,label:v.name})
  // ):''



  // //性别
  // const [gender] = useAxios({
  //   url: '/dictionarySubitem/queryUser',
  //   token:true,
  //   method: 'get',
  //   request: {
  //     parentCode:'XB'
  //   }
  // })
  // let genderList:any=[]
  // gender.code!==1?gender.data.map((v:any, i:any) => 
  //   genderList.push({value:v.code,label:v.name})
  // ):''

  // //国籍
  // const [nationality] = useAxios({
  //   url: '/dictionarySubitem/queryUser',
  //   token:true,
  //   method: 'get',
  //   request: {
  //     parentCode:'XB'
  //   }
  // })
  // let nationalityList:any=[]
  // nationality.code!==1?nationality.data.map((v:any, i:any) => 
  // nationalityList.push({value:v.code,label:v.name})
  // ):''

  // //银行
  // const [bank] = useAxios({
  //   url: '/dictionarySubitem/queryUser',
  //   token:true,
  //   method: 'get',
  //   request: {
  //     parentCode:'YHLX'
  //   }
  // })
  // let bankList:any=[]
  // bank.code!==1?bank.data.map((v:any, i:any) => 
  //   bankList.push({value:v.code,label:v.name})
  // ):''

  // //广告
  // const [advertising] = useAxios({
  //   url: '/dictionarySubitem/queryUser',
  //   token:true,
  //   method: 'get',
  //   request: {
  //     parentCode:'XB'
  //   }
  // })
  // let advertisingList:any=[]
  // advertising.code!==1?advertising.data.map((v:any, i:any) => 
  //   advertisingList.push({value:v.code,label:v.name})
  // ):''

  const [buildingId, getbuildingId] = useState({ val: '', pla: '' })
  const [name, getName] = useState({ val: '', pla: '请输入合同编号' })
  const [idCard, getIdCard] = useState({ val: '', pla: '请输入合同编号' })
  const [city, getCity] = useState({ val: '', pla: '请输入合同编号' })
  const [marriageState, getMarriageState] = useState('')
  const [education, getEducation] = useState('')
  const [job, getJob] = useState('')
  const [company, getCompany] = useState('')
  const [address, getAddress] = useState('')
  const [addressDetail, getAddressDetail] = useState('')
  const [personIncome, getPersonIncome] = useState('')
  const [familyIncome, getFamilyIncome] = useState('')
  const [kinsfolk, getKinsfolk] = useState('')
  const [kinsRelation, getKinsRelation] = useState('')
  const [kinsPhone, getKinsPhone] = useState('')
  const [on, toggle] = useState(false)
  const [wangqian, getwangqian] = useAxios({
    url: '/userExtend/save',
    method: 'post',
    request: {
      buildingId: buildingId.val,
      name: name.val,
      idCard:idCard.val,
      city: city.val,
      marriageState: marriageState,
      education: education,
      job:job,
      address: address,
      company: company,
      addressDetail: addressDetail,
      personIncome: personIncome,
      familyIncome: familyIncome,
      kinsfolk: kinsfolk,
      kinsRelation:kinsRelation,
      kinsPhone:kinsPhone,
      loanId: '1',
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
    // const yanz = validate([buildingId, name,idCard,city], (vals) => {
    //   console.log(vals)
    //   Toast.info(vals.placeholder, 1);
    // })
    // if (yanz) {
    //   console.log(yanz)
    //   toggle(true)
    //   getwangqian()
    // }
    // // toggle(true)
    // getwangqian()
    alert('提示', '请确认信息无误', [
        { text: '再检查下', onPress: () => console.log('cancel'), style: {color:'rgba(193, 193, 193, 1)'} },
        { text: '确认无误', onPress: () => next_step() },
      ]);
  }
  return (
    <div className={style['xxqyqr']}>
      <Navigationt title='申请流程' history={history} />
      <AntdSteps currentNum={0} ></AntdSteps>
      <AntdPicker  labeltext='选择楼盘' placeholder='请选择购买车位楼盘'  getState={getbuildingId} picker={true} data={queryBuildingMsgList}/>
      <AntdInputItem  labeltext='姓名' placeholder='请输入您的姓名' getState={getName} value={accessoryData.name} editable={false}/>
      <AntdInputItem  labeltext='身份证号' placeholder='请输入您的身份证号' getState={getIdCard}  value={accessoryData.number} editable={false}/>
      <AntdPicker  labeltext='申请城市' placeholder='请选择申请城市' getState={getCity} picker={true} data={RecordformalList}/>
      <AntdPicker  labeltext='婚姻情况' placeholder='请选择婚姻情况' getState={getMarriageState} picker={true} data={marriageList}/>
      <AntdPicker  labeltext='最高学历' placeholder='请选择最高学历' getState={getEducation} picker={true} data={RecordformalList}/>
      <AntdInputItem  labeltext='职业' placeholder='请输入职业' getState={getJob} picker={true} data={professionalList}/>
      <AntdInputItem  labeltext='工作单位' placeholder='请输入工作单位' getState={getCompany} />
      <AntdInputItem  labeltext='居住地' placeholder='请选择居住地' getState={getCompany} picker={true} data={professionalList}/>
      <AntdInputItem  labeltext='详细地址' placeholder='请输入详细地址' getState={getAddressDetail} />
      <AntdPicker  labeltext='个人月收入' placeholder='请选择个人月收入' getState={getPersonIncome} picker={true} pickertype='Rec' data={RecordformalList}/>
      <AntdPicker  labeltext='家庭月收入' placeholder='请选择家庭月收入' getState={getFamilyIncome} picker={true} data={RecordformalList}/>
      <AntdInputItem  labeltext='亲属联系人' placeholder='请输入一位您亲属联系人的姓名' getState={getKinsfolk} />
      <AntdPicker  labeltext='亲属关系' placeholder='请选择您填写人的亲属关系' getState={getKinsRelation} picker={true} data={RecordformalList}/>
      <AntdInputItem  labeltext='亲属手机号码' placeholder='请输入亲属手机号码' getState={getKinsPhone} />
      <AntdButton text='下一步' fn={() => passAllShowAlert()}></AntdButton>
      <Cutoff hg='20' />
    </div>
  )
}
