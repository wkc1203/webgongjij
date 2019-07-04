import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { sendMessageToNative, routing,validate,pickertype } from '@util/index';
import { Navigationt,AntdInputItem,AntdButton,AntdSteps,Cutoff,AntdPicker} from '@components/public';
import { Modal,Toast  } from 'antd-mobile';
import { useAxios } from '@hooks/useAxios';
import { district, provinceLite } from 'antd-mobile-demo-data';

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

  //个人月收入
  const [personIncomes] = useAxios({
    url: '/dictionarySubitem/queryUser',
    token:true,
    method: 'get',
    request: {
      parentCode:'GRYSR'
    }
  })
  let PersonIncomeList:any=[]
  personIncomes.code!==1?personIncomes.data.map((v:any, i:any) => 
  PersonIncomeList.push({value:v.code,label:v.name})
  ):''
 //家庭月收入
  const [familyIncomes] = useAxios({
    url: '/dictionarySubitem/queryUser',
    token:true,
    method: 'get',
    request: {
      parentCode:'GRYSR'
    }
  })
  let FamilyIncomeList:any=[]
  familyIncomes.code!==1?familyIncomes.data.map((v:any, i:any) => 
  FamilyIncomeList.push({value:v.code,label:v.name})
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
   //关系
   const [KinsRelation] = useAxios({
    url: '/dictionarySubitem/queryUser',
    token:true,
    method: 'get',
    request: {
      parentCode:'QSGX'
    }
  })
  let KinsRelationList:any=[]
  KinsRelation.code!==1?KinsRelation.data.map((v:any, i:any) => 
    KinsRelationList.push({value:v.code,label:v.name})
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
    queryBuildingMsgList.push({value:v.area,label:v.name})
  ):''

  //查询产品支持城市列表
  const [selectCity] = useAxios({
    url: '/product/pro/queryBuildings',
    token:true,
    method: 'get',
    request: {
      productId:'156154195324502'
    }
  })
  let selectCityList:any=[]
  selectCity.code!==1?selectCity.data.map((v:any, i:any) => 
    selectCityList.push({value:v.code,label:v.full})
  ):''

   //省市区
   const [selectAddress] = useAxios({
    url: '/address/queryAllAddress',
    token:true,
    method: 'get',
    request:false
  })
  let selectAddressList:any=[]
  selectAddress.code!==1?selectAddress.data.map((item:any) => 
  selectAddressList.push(item)
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
  const [buildingId, getbuildingId] = useState({ val: '', pla: '' })
  const [loanId, getLoanId] = useState({ val: '', pla: '' })
  const [cityName, getCityName] = useState({ val: '', pla: '' })
  const [city, getCity] = useState({ val: '', pla: '' })
  const [marriageState, getMarriageState] = useState({ val: '', pla: '' })
  const [education, getEducation] = useState({ val: '', pla: '' })
  const [job, getJob] = useState({ val: '', pla: '' })
  const [company, getCompany] = useState({ val: '', pla: '' })
  const [address, getAddress] = useState({ val: '', pla: '' })
  const [addressDetail, getAddressDetail] = useState({ val: '', pla: '' })
  const [personIncome, getPersonIncome] = useState({ val: '', pla: '' })
  const [familyIncome, getFamilyIncome] = useState({ val: '', pla: '' })
  const [kinsfolk, getKinsfolk] = useState({ val: '', pla: '' })
  const [kinsRelation, getKinsRelation] = useState({ val: '', pla: '' })
  const [kinsPhone, getKinsPhone] = useState({ val: '', pla: '' })
  const [name, getName] = useState({ val: '', pla: '' })
  const [number, getNumber] = useState({ val: '', pla: '' })
  const [on, toggle] = useState(false)
  const [save, getSave] = useAxios({
    url: '/userExtend/save',
    method: 'post',
    request: {
      buildingId: buildingId.val,
      loanId:loanId.val,
      city: city.val,
      cityName: cityName.val,
      marriageState: marriageState.val,
      education: education.val,
      job:job.val,
      address: address.val,
      company: company.val,
      addressDetail: addressDetail.val,
      personIncome: personIncome.val,
      familyIncome: familyIncome.val,
      kinsfolk: kinsfolk.val,
      kinsRelation:kinsRelation.val,
      kinsPhone:kinsPhone.val,
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
    const yanz = validate([buildingId,city,marriageState,education,job,company,address,addressDetail,personIncome,familyIncome,kinsfolk,kinsRelation,kinsPhone], (vals) => {
      Toast.info(vals.placeholder, 1);
    })
    if (yanz) {
      toggle(true)
      getSave()
      alert('提示', '请确认信息无误', [
          { text: '再检查下', onPress: () => console.log('cancel'), style: {color:'rgba(193, 193, 193, 1)'} },
          { text: '确认无误', onPress: () => next_step() },
        ]);
    }
  }
  return (
    <div className={style['xxqyqr']}>
      <Navigationt title='申请流程' history={history} />
      <AntdSteps currentNum={0} ></AntdSteps>
      <AntdPicker  labeltext='选择楼盘' placeholder='请选择购买车位楼盘'  getState={getbuildingId} picker={true} data={queryBuildingMsgList}/>
      <AntdInputItem  labeltext='姓名' placeholder='请输入您的姓名' getState={getName} value={accessoryData.name} editable={false}/>
      <AntdInputItem  labeltext='身份证号' placeholder='请输入您的身份证号' getState={getNumber}  value={accessoryData.number} editable={false}/>
      <AntdPicker  labeltext='申请城市' placeholder='请选择申请城市' getState={getCity} picker={true} data={selectCityList}/>
      <AntdPicker  labeltext='婚姻情况' placeholder='请选择婚姻情况' getState={getMarriageState} picker={true} data={marriageList}/>
      <AntdPicker  labeltext='最高学历' placeholder='请选择最高学历' getState={getEducation} picker={true} data={RecordformalList}/>
      <AntdInputItem  labeltext='职业' placeholder='请输入职业' getState={getJob} picker={true} data={professionalList}/>
      <AntdInputItem  labeltext='工作单位' placeholder='请输入工作单位' getState={getCompany} />
      <AntdPicker  labeltext='居住地' placeholder='请选择居住地' getState={getAddress} picker={true} data={selectAddressList} col={3} />
      <AntdInputItem  labeltext='详细地址' placeholder='请输入详细地址' getState={getAddressDetail} />
      <AntdPicker  labeltext='个人月收入' placeholder='请选择个人月收入' getState={getPersonIncome} picker={true} pickertype='Rec' data={PersonIncomeList}/>
      <AntdPicker  labeltext='家庭月收入' placeholder='请选择家庭月收入' getState={getFamilyIncome} picker={true} data={FamilyIncomeList}/>
      <AntdInputItem  labeltext='亲属联系人' placeholder='请输入一位您亲属联系人的姓名' getState={getKinsfolk} />
      <AntdPicker  labeltext='亲属关系' placeholder='请选择您填写人的亲属关系' getState={getKinsRelation} picker={true} data={KinsRelationList}/>
      <AntdInputItem  labeltext='亲属手机号码' placeholder='请输入亲属手机号码' getState={getKinsPhone} type="phone"/>
      <AntdButton text='下一步' fn={() => passAllShowAlert()}></AntdButton>
      <Cutoff hg='20' />
    </div>
  )
}
