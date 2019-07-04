
import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { sendMessageToNative, routing } from '@util/index';
import { Modal } from 'antd-mobile';
import { Navigationt ,AntdInputItem,AntdButton,AntdSteps,AntdPickerRadio,Inputs,AntdResult,AntdAccordion,AntdImagePicker,Cutoff} from '@components/public';
import { fromEvent, timer, from, interval, range, EMPTY, NEVER, pipe } from 'rxjs';
import { map, pluck, startWith, first, auditTime, take, switchMapTo, tap, throttleTime } from 'rxjs/operators';

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
const alert=Modal.alert;

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

   // 下一步
   const next_step = ()=>{
    sendMessageToNative({ type: 'push' })
    history.push({
        pathname: 'application_result',
        state: {
          data: {
            resulttype: 'success',
          }
        }
      })
    routing('application_result')
  } 
    // 同意授权
  const passAllShowAlert = ()=>{
      alert('提示', '请确认信息无误', [
          { text: '再检查下', onPress: () => console.log('cancel'), style: {color:'rgba(193, 193, 193, 1)'} },
          { text: '确认无误', onPress: () => next_step() },
        ]);
  }

  return (
    <div className={style['test']}>
      <Navigationt title='征信授权查询' history={history} />
      <div className={style['test-box']}>
        <p className={style['test-content']}>
        <p>重要提示：</p>
        <p style={{textIndent:'30px'}}>尊敬的客户：为了维护您的权益，请在签署本授权书前，仔细阅读本授权书条款（特别是黑体字条款），关注您在授权书中的权利、义务</p> 
        <p>南京银行股份有限公司：</p>
        <p style={{textIndent:'30px'}}>因本人在贵行办理业务的需要，本人不可撤销地授权贵行在审核本人授信额度/授信业务申请及进行贷后风险管理情形下，可以向中国人民银行金融信用信息基础数据库查询、打印、保存、使用本人信用报告，同时本人不可撤销地授权贵行将包括本人基本信息（包括身份信息、职业信息、居住信息等）、信贷交易信息、担保信息等信用信息（包括因未及时履行合同义务等违约行为构成的会造成负面影响的信息等）向中国人民银行金融信用信息基础数据库报送。</p>
        <p style={{textIndent:'30px'}}>本授权书的有效期为：自本人签署本授权书之日起生效，在上述与贵行办理的业务存续期间持续有效。</p>
        <p style={{textIndent:'30px'}}>本人同意本授权书以数据电文形式订立，授权人一旦在线确认本授权书，本授权书即生效。</p>
        <p style={{textIndent:'30px'}}>本人知悉并理解本授权书中所有条款的声明，愿意承担授权贵行查询信用信息的法律后果，无论授信额度/授信业务是否批准，本人的授权书、信用报告等资料一律不退回。</p>
        <p style={{textIndent:'30px'}}>贵行超出授权查询的一切后果及法律责任由贵行承担。</p>
        </p>
      </div>
      <AntdButton text='同意授权查看个人征信' fn={() => {
          passAllShowAlert()
          setcurrentNum(currentNum + 1)
        }}></AntdButton>
         <Cutoff hg='40' />
    </div>
  )
}
