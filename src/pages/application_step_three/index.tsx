import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { sendMessageToNative, routing } from '@util/index';
import { Modal } from 'antd-mobile';
import { Navigationt ,AntdButton,AntdSteps,AntdPickerRadio,AntdImagePicker,Cutoff} from '@components/public';

export const Item = () => (
  <div className={style['item']}>
    {'1234567890'}
    <input/>
  </div>
)
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
        pathname: 'creditauthor',
        // state: {
        //   data: {
        //     resulttype: 'success',
        //   }
        // }
      })
    routing('creditauthor')
  } 
  return (
    <div className={style['test']}>
      <Navigationt title='申请流程' history={history} />
      <AntdSteps currentNum={3} status ="finish"/> 
      <Cutoff hg='10' colorValue='rgba(216,216,216,1)'/>
      <Cutoff hg='20'/>
      <AntdPickerRadio pickertype = {pickertype} pickertypepro = {pickertypepro} />
      <Cutoff hg='20'/>
      <AntdImagePicker labeltext = '上传购车位证明' />
      <Cutoff hg='70'/>
      <AntdButton fn={() => {
          next_step()
          setcurrentNum(currentNum + 1)
          // setShow(true)
        }}></AntdButton>
       {/* <Modal
        titles={'系统消息'}
        title={'系统错误请重试'}
        show={show1}
        box = 'g'
        setShow={setShow}
      /> */}
    </div>
  )
}
