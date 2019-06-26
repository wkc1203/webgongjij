
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,AntdPickerRadio,Inputs,AntdResult,AntdAccordion,AntdImagePicker,Modal,Cutoff} from '@components/public';
import { fromEvent, timer, from, interval, range, EMPTY, NEVER, pipe } from 'rxjs';
import { map, pluck, startWith, first, auditTime, take, switchMapTo, tap, throttleTime } from 'rxjs/operators';
// const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
// const pImgs: any = {}
// requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

export const Item = () => (
  <div className={style['item']}>
    {'1234567890'}
    <input/>
  </div>
)
const pImgs: any = {}
export const l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

type Test = {
  history: History
}


export default ({ history }: Test) => {
  const [currentNum, setcurrentNum] = useState(0);
  const [pickertype, pickertypepro] = useState();
  const [zh, setZh] = useState({ val: '', pla: '请输入身份证号／手机号／用户名' })
  const [show1, setShow] = useState(false)
  const [pr, productName] = useState({ val: ''})
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('you name is', currentNum)
    console.log(pickertype,'111111')
    if(currentNum>2){
      return
    }
  }, [currentNum])

  return (
    <div className={style['test']}>
      <Navigationt title='申请流程' history={history} />
      <div className={style['test-box']}>
        <p className={style['test-content']}>
        <p>重要提示： 尊敬的客户：</p>
        <p style={{textIndent:'30px'}}>为了维护您的权益，请在签署本授权书前，仔细阅读本授权书条款（特别是黑体字条款），关注您在授权书中的权利、义务。</p> 
        <p>南京银行股份有限公司：</p>
        <p style={{textIndent:'30px'}}>因本人在贵行办理业务的需要，本人不可撤销地授权贵行在审核本人授信额度/授信业务申请及进行贷后风险管理情形下，可以向中国人民银行金融信用信息基础数据库查询、打印、保存、使用本人信用报告，同时本人不可撤销地授权贵行将包括本人基本信息（包括身份信息、职业信息、居住信息等）、信贷交易信息、担保信息等信用信息（包括因未及时履行合同义务等违约行为构成的会造成负面影响的信息等）向中国人民银行金融信用信息基础数据库报送。 本授权书的有效期为：自本人签署本授权书之日起生效，在上述与贵行办理的业务存续期间持续有效。</p>
        </p>
      </div>
      <AntdButton text='同意授权查看个人征信' fn={() => {
          // pickertypepro(true)
          setcurrentNum(currentNum + 1)
          setShow(true)
        }}></AntdButton>
       <Modal
        titles={'系统消息'}
        title={'系统错误请重试'}
        show={show1}
        box = 'plan'
        setShow={setShow}
      />
    </div>
  )
}
